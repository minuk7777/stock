import React, { useState } from 'react';
import './App.css';
import { CompanyProfile } from './features/company/CompanyProfile';

function App() {
  const [ticker, setTicker] = useState('');
  const [searchTicker, setSearchTicker] = useState('');

  return (
    <div className="App">
      <input
        name="search"
        placeholder="ticker 검색"
        onChange={(e) => {
          setTicker(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (ticker) {
            setSearchTicker(ticker.toUpperCase());
          }
        }}
      >
        Search
      </button>
      {searchTicker && <CompanyProfile ticker={searchTicker} />}
    </div>
  );
}

export default App;
