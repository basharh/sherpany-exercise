import React from 'react';

const tabs = [
  { title: 'Details', id: 'details' },
  { title: 'Agenda', id: 'agenda' },
];

function getTab(tab, activeTab, onClick) {
  let key = tab.id;
  let title = <span onClick={() => onClick(key)}>{tab.title}</span>;

  if ( tab.id === activeTab )
    return <div key={key} className="tab active">{title}</div>;

  return <div key={key} className="tab">{title}</div>;
}

export default function Tabs(props) {
  let { location: { pathname }, push } = props;
  let activeTab = pathname.slice(1).split('/')[0];
  let handleTabClick = (tabId) => push(`/${tabId}`);

  return (
    <div id="tabs">
      { tabs.map((tab) => getTab(tab, activeTab, handleTabClick)) }
    </div>
  );
}
