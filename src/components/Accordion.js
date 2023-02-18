import { func } from "prop-types";
import { useState } from "react";


export default function Accordion({ items }) {

  const [expandedItem, setExpandedItem] = useState(0);


  const renderedItems = items.map(( item, index )=>{

    const isExpanded = index === expandedItem;
    
    return (
      <div key={item.id}>
          <div onClick={()=>setExpandedItem(index)}>{item.label}</div>
          <div>{isExpanded&&<div>{item.content}</div>}</div>
      </div>
    )
  });

  return (
    <div>
        {renderedItems}
    </div>
  )
}
