import React, { useState } from "react";

import ImagePreviewer from "./ImagePreviewer";

function DataUpload(props) {
  const [pths, setPths] = useState([]);
  const [files, setFiles] = useState();
  const [btn, setBtn] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  function uploadFile(name) {
    document.getElementById(name).click();
  }

  function fileSelected(e) {
    let sfile = e.target.files;
    setFiles(sfile);
    for (var i = 0; i < sfile.length; i++) {
      uploadFileView(sfile[i]);
    }
  }

  // Upload File Function
  function uploadFileView(file) {
    // FileReader()
    const fileReader = new FileReader();

    // After File Reader Loaded
    fileReader.addEventListener("load", function () {
      setPths((prev) => {
        return [...prev, fileReader.result];
      });
    });

    // Read (file) As Data Url
    fileReader.readAsDataURL(file);
  }

  const handleSubmit = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("fileInput[]", files[i]);
    }
    fetch("/save", { method: "POST", body: formData })
      .then((response) => {
        if (response.status === 200) {
          setBtn(false);
        } else {
          setErrorMessage("Error While Uploading Files!");
        }
        return response.text();
      })
      .then((responseText) => {
        console.log(responseText);
      })
      .catch((error) => {
        console.error("File upload error!");
      });
  };

  return (
    <div style={props.style}>
      <div>
        <div id="uploadArea" className="upload-area">
          <div className="upload-area__header">
            <h1 className="upload-area__title">Upload your file</h1>
            <p className="upload-area__paragraph">
              File should be an {props.accept}
            </p>
          </div>

          {props.accept === "image" ? <ImagePreviewer paths={pths} /> : null}

          <form
            // action={"/save/" + props.name}
            encType="multipart/form-data"
            method="post"
            onSubmit={(e) => e.preventDefault()}
          >
            <div
              onClick={() => uploadFile(props.name)}
              id="dropZoon"
              className="upload-area__drop-zoon drop-zoon"
              style={{
                height: props.height,
                ...(pths.length !== 0 ? { display: "none" } : null),
              }}
            >
              <span className="drop-zoon__icon">
                <i className="bx bxs-file-image"></i>
              </span>
              <p className="drop-zoon__paragraph">
                Click to browse {props.accept}
              </p>

              <input
                onChange={fileSelected}
                type="file"
                id={props.name}
                name={props.name}
                className="drop-zoon__file-input"
                accept={props.accept + "/*"}
                multiple={props.multi}
              />
            </div>
            <input
              type="submit"
              value="Upload"
              disabled={!btn}
              onClick={() => {
                if (pths.length === 0) {
                  setErrorMessage("Please Select a File!");
                  setTimeout(() => {
                    setErrorMessage("");
                  }, 5000);

                  return null;
                }
                handleSubmit();
              }}
            />
          </form>
          <input
            disabled={btn}
            type="submit"
            value="Next"
            onClick={() => {
              setBtn(false);
              return props.alert(null, props.curr, props.next);
            }}
          />
        </div>
      </div>
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </div>
  );
}

export default DataUpload;
