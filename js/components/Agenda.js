import React from 'react';

export default function Agenda(props) {
  let { agenda } = props;
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
              <input type="text" placeholder="Enter a new Agenda Item"/>
            </li>
          </ul>
      </div>
    </div>
  );
}
