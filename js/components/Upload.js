import React from 'react';

export default function Upload(props) {
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
        <div className="dropbox">
          <i className="fa fa-plus"></i>&nbsp;Drop new documents here
        </div>
      </div>
      <div id="available">
        <ul>
          { /* <li>document 1</li>
               <li>document 2</li> */ }
        </ul>
      </div>
      <div className="bottom_menu">
        { /* <div className="button">Add</div> */ }
      </div>
    </div>
  );
}
