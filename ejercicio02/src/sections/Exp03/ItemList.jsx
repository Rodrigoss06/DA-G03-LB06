import React from 'react'

function ItemList() {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ];
    
      const handleClick = (name) => {
        alert(`Seleccionaste ${name}`);
      };
    
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} 
              <button onClick={() => handleClick(item.name)}>Seleccionar</button>
            </li>
          ))}
        </ul>
      );
}

export default ItemList
  