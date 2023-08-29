export default function Items({item, onDeleteItem, onToggleItem}){
    return(
      // ITEM DI BAWAH INI TIDAK BISA DIDEKLARASIKAN MENJADI DATA MAKA HARUS DI RUBAH MENJADI PROFF 
      <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
        <span style={ item.checked ? {textDecoration: 'line-through'} : {}  }>
        {item.quantity} {item.name}
        </span>
      <button onClick={() => onDeleteItem(item.id)}> &times;</button>
    </li>
    )
  }
  