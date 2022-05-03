import React from 'react';
import styled from 'styled-components';

const SearchButton = () => {
  return (
    <buttonStylesOne>
      <buttonStylesTwo>
        <button>Search</button>
      </buttonStylesTwo>
    </buttonStylesOne>
  );
};

const buttonStylesOne = styled.div`
  height: 200px;
  position: relative;
  border: 3px solid green;
`;

const buttonStylesTwo = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export default SearchButton;
