import React from 'react';
import DropZone from 'react-dropzone';

export default function Upload(props) {
  let dropzone;
  let { addFiles, closeUpload, files } = props;

  function onDrop(files) {
    addFiles(files);
  }

  return (
    <div id="upload">
      <div id="header">
        <div className="title">
          Add documents to agenda items
        </div>
        <div className="close" onClick={ closeUpload }>
          <i className="fa fa-times"></i>
        </div>
      </div>
      <div id="drop">
        <DropZone onDrop={onDrop} multiple={true} className="dropbox"
          ref={(input) => { dropzone = input; }}>
          <i className="fa fa-plus"></i>&nbsp;Drop new documents here
        </DropZone>
        <div className="openDialog">
          or <a onClick={() => dropzone.open()}>Browse your computer</a>
        </div>
      </div>
      <div id="available">
        { files.length > 0 ?
            <ul>
              { files.map((file, i) => <li key={i}>{file.name}</li>) }
            </ul> : null }
      </div>
      <div className="bottom_menu">
        { /* <div className="button">Add</div> */ }
      </div>
    </div>
  );
}
