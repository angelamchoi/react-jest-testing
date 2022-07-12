import React, {useState} from 'react';

const Input = ({showDiv}) => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <div>
      <input 
      type="text"
      data-testid="searchBar"
      placeholder="search something here..."
      onChange={(e) => {
        setSearchWord(e.target.value);
      }}
      />

      <h1 data-testid="displaySearch"> {searchWord}</h1>

      {showDiv && (
        <div data-testid="divWeWantToShow">
        </div> 
      )}
    </div>
  );
}

export default Input;

//Notes on Jest Testing:
// we want to test the input
// test for passing props to the input