import React from 'react';
import { NavigationProvider } from './context/navigation';
import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordianPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <NavigationProvider>
      <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
        <Sidebar/>
        <div className='col-span-5'>
          <Route path='/accordion'>
            <AccordionPage/>
          </Route>
          <Route path='/'>
            <DropdownPage/>
          </Route>
          <Route path='/button'>
            <ButtonPage/>
          </Route>
        </div>
      </div>
    </NavigationProvider>
  )
}
