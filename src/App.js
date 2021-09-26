import React, { useState } from "react";

import ShowLink from "./Components/ShowLink/ShowLink";
import TextEditor from "./Components/TextEditor/TextEditor";
import DataUpload from "./Components/DataUpload/DataUpload";
import Welcome from "./Components/Welcome/Welcome";
import End from "./Components/Ending/End";
import DateTimeComp from "./Components/DateTime/DateTimeComp";

function App() {
  const [disp, setDisp] = useState({
    welcome: true,
    showlink: false,
    imageUpload: false,
    audioUpload: false,
    texteditor: false,
    datetime: false,
    end: false,
  });

  const [userCode, setUserCode] = useState("");

  function callback(data, curr, next) {
    if (curr === "welcome") {
      setUserCode(data);
      console.log("setting", data);
    }

    setDisp((prev) => {
      let temp = {};
      temp[curr] = false;
      temp[next] = true;
      return {
        ...prev,
        ...temp,
      };
    });
  }

  return (
    <div>
      <Welcome
        style={!disp.welcome ? { display: "none" } : null}
        alert={callback}
        next="showlink"
        curr="welcome"
      />
      <ShowLink
        style={!disp.showlink ? { display: "none" } : null}
        alert={callback}
        next="imageUpload"
        curr="showlink"
        link={userCode}
      />
      <DataUpload
        style={!disp.imageUpload ? { display: "none" } : null}
        name="imageUpload"
        accept="image"
        multi={true}
        height="11.8rem"
        alert={callback}
        next="audioUpload"
        curr="imageUpload"
      />
      <DataUpload
        style={!disp.audioUpload ? { display: "none" } : null}
        name="audioUpload"
        accept="audio"
        multi={false}
        height="2.5rem"
        alert={callback}
        next="texteditor"
        curr="audioUpload"
      />

      <TextEditor
        style={!disp.texteditor ? { display: "none" } : null}
        alert={callback}
        next="datetime"
        curr="texteditor"
      />

      <DateTimeComp
        style={!disp.datetime ? { display: "none" } : null}
        alert={callback}
        curr="datetime"
        next="end"
      />

      <End style={!disp.end ? { display: "none" } : null} />
    </div>
  );
}

export default App;
