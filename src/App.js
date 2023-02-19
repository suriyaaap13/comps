import React from 'react';
import Dropdown from './components/Dropdown';
import { useState } from 'react';

export default function App() {

  const [selected, setSelected] = useState(null);

  const handleSelect = (option)=>{
    setSelected(()=>{
      return option;
    });
  }

  const options = [
    {
      label: 'Red',
      value: 'red'
    },
    {
      label: 'Green',
      value: 'green'
    },
    {
      label: 'Blue',
      value: 'blue'
    }
  ]

  return (
    <div>
      <Dropdown options = {options} value = {selected} onSelect={handleSelect} />
    </div>
  );
}
