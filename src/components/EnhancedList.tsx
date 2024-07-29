import React from 'react';
import './EnhancedList.css';
import { Item } from '../types';

interface EnhancedListProps {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  className?: string;
}

const EnhancedList: React.FC<EnhancedListProps> = ({ items, renderItem, className = '' }) => {
  return (
    <ul className={`enhanced-list ${className}`}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default EnhancedList;
