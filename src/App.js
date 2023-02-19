import React from 'react';
import Dropdown from './components/Dropdown';
import { useState } from 'react';

export default function App() {

  const [selected, setSelected] = useState("Select...");

  const handleSelect = (str)=>{
    setSelected(()=>{
      return str;
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
      <Dropdown options = {options} selected = {selected} handleSelect={handleSelect} />
    </div>
  );
}
