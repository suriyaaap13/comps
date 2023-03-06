import React from 'react';
import Panel from './Panel';
import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";


export default function Dropdown({ options, onSelect, value }) {
  
  const [isOpen, setisOpen] = useState(false);
  const divEl = useRef();

  useEffect(()=>{
    const handler = (event)=>{
      
      if(!divEl){
        return;
      }

      if(!divEl.current.contains(event.target)){
        setisOpen(false);
      }

    };
    document.addEventListener('click', handler, true);
    return ()=>{
      document.removeEventListener('click', handler);
    };
  }, []);

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
    <div ref={divEl} className='w-48 relative'>
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
