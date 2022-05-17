import React, { useState } from 'react';
import ResultBox from './ResultBox';
import styled from 'styled-components';

function DropDown({ products }) {
  const [isSelected_DropDown, setIsSelected_DropDown] = useState('');

  return (
    <StyledDropDownContainer class="section">
      <StyledLabel> The Best Handling for</StyledLabel>
      <label for="category-select"></label>
      <select
        name="selectProduct"
        className="custom-select"
        id="category-select"
        value={isSelected_DropDown}
        onChange={e => setIsSelected_DropDown(e.target.value)}
        placeholder="--Please choose a Category--"
      >
        <option value="" selected>
          --Choose Category--
        </option>
        <option value="Plasctic Transparent">Plastic Transparent</option>
        <option value="Plastic Black">Plastic Black</option>
        <option value="Aluminum">Aluminum</option>
        <option value="Aluminum Contaminated">Aluminum Contaminated</option>
        <option value="Paper Contaminated">Paper Contaminated</option>
        <option value="Paper Coated">Paper Coated</option>
        <option value="Paper Clean">Paper Clean</option>
        <option value="Automotive Supply">Automotive Supply</option>
        <option value="Glas">Glas</option>
      </select>
      {/* ResultBox werden die props products und isSelected_DropDown übergeben: DropDown.js -> ResultBox.js */}
      {<ResultBox products={products} isSelected_DropDown={isSelected_DropDown} />}
      <br></br>
      <br></br>
    </StyledDropDownContainer>
  );
}

const StyledDropDownContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLabel = styled.h1`
font-size: 1rem;

`;
export default DropDown;
