import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [view, setView] = useState('collection');

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (army.some(b => b.bot_class === bot.bot_class)) {
      alert(`You already have a ${bot.bot_class} in your army!`);
      return;
    }
    
    setArmy([...army, bot]);
    setBots(bots.filter(b => b.id !== bot.id));
    setView('collection');
  };

  const releaseBot = (botId) => {
    const releasedBot = army.find(bot => bot.id === botId);
    setArmy(army.filter(bot => bot.id !== botId));
    setBots([...bots, releasedBot]);
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(() => {
      setBots(bots.filter(bot => bot.id !== botId));
      setArmy(army.filter(bot => bot.id !== botId));
    });
  };

  const sortBots = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  };

  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
    setView('specs');
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <SortBar sortBots={sortBots} />
      <YourBotArmy 
        army={army} 
        releaseBot={releaseBot} 
        dischargeBot={dischargeBot} 
      />
      
      {view === 'collection' ? (
        <BotCollection 
          bots={bots} 
          enlistBot={showBotSpecs} 
          dischargeBot={dischargeBot} 
        />
      ) : (
        <BotSpecs 
          bot={selectedBot} 
          goBack={() => setView('collection')} 
          enlistBot={enlistBot} 
        />
      )}
    </div>
  );
}

export default App;