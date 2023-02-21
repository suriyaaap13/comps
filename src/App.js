import React from 'react';
import { NavigationProvider } from './context/navigation';
import Link from './components/Link';

export default function App() {
  return (
    <NavigationProvider>
      <Link to='/dropdown'>Dropdown</Link>
      <Link to='/accordion'>Accordion</Link>
      
    </NavigationProvider>
  )
}
