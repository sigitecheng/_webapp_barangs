import { useState } from "react";
import Items from "./Item";
// IMPORT USESTATE DIKARENAKAN DI APP JUGA MEMAKAI APP  

// ========================================================================================================================
export default function GroceryList({items, onDeleteItem, onToggleItem, onClearItems}){


    const [sortBy, setSortBy] = useState('input');
  // DATA DIURUTKAN BERDASARKAN DATA INPUT TERAKHIR 
  
    let sortedItems;
  
      // if(sortBy === 'input'){
      //   sortedItems = items;
      // }
  
      // if(sortBy === 'name'){
      //   sortedItems = items.slice().sort((a,b) => a.name.localeCompare(b.name)); 
      // }
  
      // if(sortBy === 'checked'){
      //   sortedItems = items.slice().sort((a,b) => a.checked - b.checked);
      // }
  
    switch (sortBy){
      case 'name' : 
        sortedItems = items.slice().sort((a,b) => a.name.localeCompare(b.name)); 
        break ;
      case 'checked' :
        sortedItems = items.slice().sort((a,b) => a.checked - b.checked);
        break ;
      default : 
        sortedItems = items ;
        break ;
    }
  
    return(
      <>
      <div className="list">
      <ul>
        {sortedItems.map((item) => (
           <Items item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
         ))}
        
      </ul>
    </div>
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button onClick={onClearItems}>Delete All Items</button>
    </div>
    </>
    );
  }