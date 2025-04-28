import React from 'react';

function BotSpecs({ bot, goBack, enlistBot }) {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <div className="stats">
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
      </div>
      <button onClick={goBack}>Back to List</button>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;