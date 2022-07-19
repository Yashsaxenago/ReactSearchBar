import JSONDATA from './MOCK_DATA.json';
import './App.css';
import { useState } from 'react';
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className='App'>
      <h1>Search Your Game and Enjoy</h1>
      <input type="text" placeholder="search your game"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if  (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>Game Name: {val.title}</p>
            <p>Game Platform: {val.platform}</p>
            <p>Game Score:{val.score}</p>
            <p>Game Genre; {val.genre}</p>
            <p>Game Editor_Choice:{val.editors_choice}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
