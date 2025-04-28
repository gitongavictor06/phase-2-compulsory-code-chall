import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots enlisted yet. Click on bots to add them to your army!</p>
      ) : (
        <div className="bot-grid">
          {army.map(bot => (
            <BotCard 
              key={bot.id} 
              bot={bot} 
              action={() => releaseBot(bot.id)}
              actionLabel="Release"
              dischargeBot={dischargeBot}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;