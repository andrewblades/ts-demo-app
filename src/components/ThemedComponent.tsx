import React from 'react';
import './ThemedComponent.css';
import { Theme } from '../types';

interface ThemedComponentProps {
  theme: Theme;
}

const ThemedComponent: React.FC<ThemedComponentProps> = ({ theme }) => {
  return (
    <div className={`themed-component ${theme}`}>
      <h2>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h2>
    </div>
  );
};

export default ThemedComponent;