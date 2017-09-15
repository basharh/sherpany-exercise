import React from 'react';

function getTab(tab, activeTab) {
  let key = tab.id;
  if ( tab.id === activeTab )
    return <div key={key} className="tab active">{tab.title}</div>;

  return <div key={key} className="tab">{tab.title}</div>;
}

export default function Tabs(props) {
  const tabs = [
    { title: 'Details', id: 'details' },
    { title: 'Agenda', id: 'agenda' },
  ];
  let { location: { pathname } } = props;
  let activeTab = pathname.slice(1).split('/')[0];

  return (
    <div id="tabs">
      { tabs.map((tab) => getTab(tab, activeTab)) }
    </div>
  );
}
