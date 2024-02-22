import React, { useState } from 'react';

import { RiArrowDropDownLine } from "react-icons/ri";

import { DropdownProps, DropdownOptionType } from '../../types/components/dropdownTypes';

import './Dropdown.css';

const Dropdown: React.FC<DropdownProps> = ({ placeholder, options }): JSX.Element => {

  const [selectedOption, setSelectedOption] = useState<DropdownOptionType | null>(null);

  const onChangeSelectedOptionHandler = (option: DropdownOptionType) => {
    setSelectedOption(option);
  }

  return (
    <div
      className={`dropdown-root-container`}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        alert(`No functionality added now!`);
      }}
    >
      <div
        className={`con-1`}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <RiArrowDropDownLine
          size={25}
        />
      </div>
      {options.map((option: DropdownOptionType, optionIdx: number) => {
        return (
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              onChangeSelectedOptionHandler(option);
            }}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;