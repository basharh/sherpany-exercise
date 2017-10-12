import React from 'react';
import util from 'util';

export default function Agenda(props) {
  let { agenda, onNewItem } = props;


  function handleNewItemInput(e) {
    let { keyCode, target: { value } } = e;
    if (keyCode === 13) {
      onNewItem(value);
    }
  }

  return (
    <div id="agenda">
      <div id="items">
          <ul>
            { agenda.map((item, i) =>
                <li key={i}>
                  <div className="order">{i+1}</div>
                  <div className="title">{item}</div>
                </li>)
            }
            <li key={agenda.length}>
              <div className="order">{agenda.length+1}</div>
              <div><input type="text" placeholder="Enter a new Agenda Item" onKeyUp={handleNewItemInput}/></div>
            </li>
          </ul>
      </div>
    </div>
  );
}
