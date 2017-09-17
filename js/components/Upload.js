import React from 'react';
import DropZone from 'react-dropzone';

function onDrop(files) {
  console.log('files dropped:', files);
}

export default function Upload(props) {
  let dropzone;
  return (
    <div id="upload">
      <div id="header">
        <div className="title">
          Add documents to agenda items
        </div>
        <div className="close">
          <i className="fa fa-times"></i>
        </div>
      </div>
      <div id="drop">
        <DropZone onDrop={onDrop} accept="image/*" multiple={false} className="dropbox"
          ref={(input) => { dropzone = input; }}>
          <i className="fa fa-plus"></i>&nbsp;Drop new documents here
        </DropZone>
        <div className="openDialog">
          or <a onClick={() => dropzone.open()}>Browse your computer</a>
        </div>
      </div>
      <div id="available">
        <ul>
          <li>document 1</li>
          <li>document 2</li>
        </ul>
      </div>
      <div className="bottom_menu">
        { /* <div className="button">Add</div> */ }
      </div>
    </div>
  );
}
