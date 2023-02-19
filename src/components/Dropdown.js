import React from 'react';
import Panel from './Panel';
import { useState } from 'react';
import { GoChevronDown } from "react-icons/go";


export default function Dropdown({ options, onSelect, value }) {
  
  const [isOpen, setisOpen] = useState(false);

  const handleExpanded = ()=>{
    setisOpen((currentIsOpen) => !currentIsOpen );
  }

  const handleClick = (option)=>{
    setisOpen(false);
    onSelect(option);
  }

  const renderedOptions = options.map((option)=>{
    return <div className='hover:bg-sky-100 border p-3' key={option.value} onClick={()=>handleClick(option)}>{option.label}</div>
  });

  
  
  return (
    <div className='w-48 relative'>
      <Panel className='flex p-3 justify-between bg-gray-50 items-center' onClick={handleExpanded}>
        {value?.label||'Select...'}
        <GoChevronDown className='text-lg'/>
      </Panel>
      {isOpen&&(
        <Panel className='absolute top-full'>
          {renderedOptions}
        </Panel>
      )}
    </div>
  )
}
