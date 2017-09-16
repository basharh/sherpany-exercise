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
          </ul>
      </div>
    </div>
  );
}
