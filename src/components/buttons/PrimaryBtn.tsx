import React from 'react';

import { PrimaryBtnProps } from '../../types/components/buttonTypes';

import './PrimaryBtn.css';

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ title, onClick, disabled }): JSX.Element => {
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.();
        alert(`No functionality added right now!`);
      }}
      disabled={disabled}
      className={`primary-btn`}
    >
      {title}
    </button>
  );
};

export default PrimaryBtn;