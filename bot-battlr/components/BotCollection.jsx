import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={() => addToArmy(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
