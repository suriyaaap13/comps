import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import { useState } from "react";


export default function Accordion({ items }) {

  const [expandedItem, setExpandedItem] = useState(-1);

  const handleClick = (index)=>{
    
    setExpandedItem((current)=>{
      // console.log("Hello World", expandedItem, current, index);
      if(current === index)
        return -1;
      else
        return index;
    });
  }

  const renderedItems = items.map(( item, index )=>{

    const isExpanded = index === expandedItem;

    const icon = (<span className="text-2xl">{isExpanded ? <GoChevronLeft/> : <GoChevronDown/>}</span>);
    
    return (
      <div key={item.id}>
          <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>
            {item.label}
            <br/>
            {icon}
          </div>
          <div>{isExpanded && <div className="border-b p-5">{item.content}</div>}</div>
      </div>
    )
  });

  return (
    <div className="border-x border-t rounded">
        {renderedItems}
    </div>
  )
}
