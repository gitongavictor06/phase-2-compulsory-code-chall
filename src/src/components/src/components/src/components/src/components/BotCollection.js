import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot, dischargeBot }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            action={() => enlistBot(bot)}
            actionLabel="View Details"
            dischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;