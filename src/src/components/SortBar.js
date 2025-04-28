import React from 'react';

function SortBar({ sortBots }) {
  return (
    <div className="sort-bar">
      <label>Sort by:</label>
      <button onClick={() => sortBots('health')}>Health</button>
      <button onClick={() => sortBots('damage')}>Damage</button>
      <button onClick={() => sortBots('armor')}>Armor</button>
    </div>
  );
}

export default SortBar;