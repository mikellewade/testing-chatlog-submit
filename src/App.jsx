import './App.css';
import ChatLog from './components/ChatLog'
import chatMessages from './data/messages.json';
import React from 'react';

const App = () => {
  const [chatEntries, setChatEntries] = React.useState(chatMessages);
  const setLikes = (id) => {
    setChatEntries(prevChatEntries => {
      const updatedChatEntries = prevChatEntries.map(ChatEntry =>{
        return ChatEntry.id === id ? {...ChatEntry, liked: !ChatEntry.liked} : ChatEntry;
      })
      return updatedChatEntries;
    })
  }
  const totalLikes = () =>{
    let counter = 0
    for (let chat of chatEntries){
      if(chat.liked){
        counter += 1
      }
    }
    return counter
  };
  
  return (
    <div id="App">
      <header>
        <h1>{totalLikes()} ❤️s</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        
        < ChatLog entries = {chatEntries} setLikes = {setLikes}/>
      </main>
    </div>
  );
};

export default App;

