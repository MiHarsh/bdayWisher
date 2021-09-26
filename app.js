const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const { nanoid } = require("nanoid");

const sharp = require("sharp");

// ++++++++++++++++ Multer +++++++++++++++++
// we require multer easy managing multiple medias

const Multer = require("multer");

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

// +++++++++++++++ Firebase Credentials  ++++++++++++++++++++

// database configs
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
require("firebase/storage");

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxx",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database();
dbRef = db.ref();

var sf = firebase.storage();
sfRef = sf.ref();

// +++++++++++++++++++++++++++++++++++

const app = express();
const PORT = 4000;

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(
  sessions({
    secret: "abcdefghxxxxxxxxxx",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

// cookie parser middleware
app.use(cookieParser());

// a variable to save a session
var session;

app.post("/save", multer.array("fileInput[]", 12), (req, res) => {
  var files = req.files;
  let fileType = req.files[0].mimetype;
  let file;

  console.log(req.files[0]);
  console.log(req.file);

  if (fileType.includes("image")) {
    // file is image , compress it

    for (let i = 0; i < files.length; i++) {
      file = files[i];
      sharp(file.buffer)
        .webp({ quality: 20 })
        .toBuffer()
        .then((data) =>
          saveDataToFireBase(data, req.session.userId, i, "photos")
        );
    }
  } else {
    // file is audio
    saveDataToFireBase(files[0].buffer, req.session.userId, 0, "audio");
  }

  return res.send("Sent from Server- File Uplaoded successfully");
});

app.post("/saveText", (req, res) => {
  dbRef.child("users").child(req.session.userId).update(req.body);
  res.send(req.body);
});

app.post("/saveDate", (req, res) => {
  dbRef.child("users").child(req.session.userId).update(req.body);
  res.send(req.body);
});

app.get("/test", (req, res) => {
  res.send({ response: "Harsh Mishra" });
});

// Create Pin, Set user basic details
app.post("/pinAuth", (req, res) => {
  // Generate unique link - use nanoid
  const uid = nanoid(11);
  req.session.userId = uid;

  let userName = req.body.username;
  let userPin = req.body.pin;

  // Create New User in the database -
  dbRef.child("users").child(uid).set({ userName: userName, pin: userPin });
  res.send(uid);
});

// function to save media files
function saveDataToFireBase(data, userId, id, types) {
  // 'file' comes from the Blob or File API
  let uploadTask = sfRef
    .child("users")
    .child(userId)
    .child(types)
    .child("file_" + id)
    .put(data);
  uploadTask.on(
    "state_changed",
    function (snapshot) {
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log("Upload is running");
          break;
      }
    },
    function (error) {
      console.log(error);
    },
    function () {
      // get the uploaded image url back
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        let temp = {};
        temp["file_" + id] = downloadURL;
        dbRef.child("users").child(userId).child(types).update(temp);
      });
    }
  );
}

app.post("/fetchData", (req, res) => {
  let eventName = req.body.eventName;
  let pin = req.body.pin;

  dbRef
    .child("users")
    .child(eventName)
    .on("value", (snapshot) => {
      let data = snapshot.val();
      if (data) {
        if (pin === data.pin) {
          if (Date.now() - data.end > 0) {
            res.send({ error: "The event has expired" });
          } else if (Date.now() - data.start < 0) {
            res.send({ scheduledStart: data.start });
          } else {
            res.send(
              JSON.stringify({
                eventName: eventName,
                photosLink: data.photos,
                AudioLink: data.audio,
                message: data.message,
                scheduledStart: data.start,
                userName: data.userName,
              })
            );
          }
        } else {
          res.send({ error: "Invalid Pin" });
        }
      } else {
        res.send({ error: "No such events found" });
      }
    });

  // res.send({ message: "no users found" });
  console.log(eventName, pin);
});

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
