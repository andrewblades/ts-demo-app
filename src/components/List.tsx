import React from 'react';
import './List.css';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul className="list">
      {items.map((item, index) => <li key={index}>{renderItem(item)}</li>)}
    </ul>
  );
};

export default List;