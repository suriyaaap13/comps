import React from 'react';
import { NavigationProvider } from './context/navigation';
import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordianPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

export default function App() {
  return (
    <NavigationProvider>
      <Link to='/dropdown'>Dropdown</Link>
      <Link to='/accordion'>Accordion</Link>
      <Link to='/button'>Button</Link>


      <div>
        <Route path='/accordion'>
          <AccordionPage/>
        </Route>
        <Route path='/dropdown'>
          <DropdownPage/>
        </Route>
        <Route path='/button'>
          <ButtonPage/>
        </Route>
      </div>
      
    </NavigationProvider>
  )
}
