import React from 'react';
import Search from './search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={faSearch} id="s-logo" />
    </div>
  );
};
