import React from 'react';

export default function BottomMenu(props) {
  let { toggleUpload } = props;
  return (
    <div id="bottom_menu">
      <div className="left">
        <div className="button">Publish</div>
      </div>
      <div className="right">
        <i className="fa fa-upload fa-lg" onClick={ toggleUpload }></i>
      </div>
    </div>
  );
}
