import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      {onDelete && (
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;
