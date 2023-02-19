import React from 'react';
import { useState } from 'react';
import { GoChevronDown } from "react-icons/go";

export default function Dropdown({ options, handleSelect, selected }) {
  
  const [isOpen, setisOpen] = useState(false);

  const handleExpanded = ()=>{
    setisOpen(!isOpen);
  }

  const handleClick = (str)=>{
    handleExpanded();
    handleSelect(str);
  }

  const renderedItems = options.map((option)=>{
    return <div className='p-3 border-b' key={option.value} onClick={()=>handleClick(option.label)}>{option.label}</div>
  });

  
  
  return (
    <div>
      <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={handleExpanded}>
        {selected}
        <GoChevronDown className='text-2xl'/>
      </div>
      {isOpen&&renderedItems}
    </div>
  )
}
