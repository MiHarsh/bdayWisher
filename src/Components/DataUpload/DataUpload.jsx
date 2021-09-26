import React, { useState } from "react";

import ImagePreviewer from "./ImagePreviewer";

function DataUpload(props) {
  const [pths, setPths] = useState([]);
  const [files, setFiles] = useState();

  const [errorMessage, setErrorMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

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
    if (pths.length === 0) {
      setErrorMessage("Please Select a File!");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return null;
    }
    setBtnDisabled(true);

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("fileInput[]", files[i]);
    }
    fetch("/save", { method: "POST", body: formData })
      .then((response) => {
        if (response.status === 200) {
          props.alert(null, props.curr, props.next);
        } else {
          setErrorMessage("Error While Uploading Files!");
          setBtnDisabled(false);
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
        {errorMessage && (
          <p className="error" style={{ minHeight: "0vh" }}>
            {" "}
            {errorMessage}{" "}
          </p>
        )}
      </div>
      <div id="uploadArea" className="upload-area">
        <div className="upload-area__header">
          <h1 className="upload-area__title">Upload your file</h1>
          <p className="upload-area__paragraph">
            File should be an {props.accept}
          </p>
        </div>

        {props.accept === "image" ? (
          <ImagePreviewer paths={pths} />
        ) : (
          <div
            className="upload-area__drop-zoon drop-zoon"
            style={{
              height: props.height,
              ...(pths.length === 0 ? { display: "none" } : null),
            }}
          >
            {pths.length !== 0 ? files[0].name.slice(0, 21) : null}
          </div>
        )}

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
            className="btn input-btn"
            value="Upload"
            onClick={() => handleSubmit()}
            disabled={btnDisabled}
          />
        </form>
      </div>
    </div>
  );
}

export default DataUpload;
