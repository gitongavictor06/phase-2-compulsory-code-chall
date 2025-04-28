import React from 'react';

function BotCard({ bot, action, actionLabel, dischargeBot }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>{catchphrase}</p>
      <div className="bot-stats">
        <span>❤️ {health}</span>
        <span>⚔️ {damage}</span>
        <span>🛡️ {armor}</span>
      </div>
      <p>Class: {bot_class}</p>
      <button onClick={action}>{actionLabel}</button>
      <button className="delete-btn" onClick={() => dischargeBot(id)}>x</button>
    </div>
  );
}

export default BotCard;