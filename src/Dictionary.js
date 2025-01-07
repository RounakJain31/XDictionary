import React, { useState } from 'react';

const dictionaryData = [
  { word: 'Component', meaning: 'A reusable piece of code in a UI application.' },
  { word: 'React', meaning: 'A JavaScript library for building user interfaces.' },
  { word: 'State', meaning: 'A built-in object used to store data in React components.' },
];

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [result, setResult] = useState(''); 
  const [error, setError] = useState(''); 

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = dictionaryData.find(
      entry => entry.word.toLowerCase() === lowerCaseSearchTerm
    );

    if (foundWord) {
      setResult(foundWord.meaning);
      setError(''); 
    } else {
      setResult(''); 
      setError('Word not found in the dictionary.'); 
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Dictionary</h1>
      
      <div>
        <input
          type="text"
          placeholder="Enter word to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', fontSize: '16px', width: '300px', marginRight: '10px' }}
        />
        
        <button onClick={handleSearch} style={{ padding: '8px 16px', fontSize: '16px' }}>
          Search
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {result && <div><h3>Meaning:</h3><p>{result}</p></div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </div>
  );
};

export default Dictionary;
