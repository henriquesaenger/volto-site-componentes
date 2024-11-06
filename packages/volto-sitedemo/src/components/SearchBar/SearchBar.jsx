import React from 'react';
import Search from './search.svg';

export const SearchBar = () => {
  {
    /*
    const [input, setInput] = useState("")
    
    const fetchData = (value) => {
      fetch()
    }
  */
  }

  return (
    <div className="s-wrapper">
      <input
        className="s-input"
        type="text"
        placeholder="O que você procura?"
      />
      <img id="s-logo" src={Search} />
    </div>
  );
};
