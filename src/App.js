import React from 'react';
import { NavigationProvider } from './context/navigation';
import Route from './components/Route';
import AccordionPage from './pages/AccordianPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import Sidebar from './components/Sidebar';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';

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
          <Route path='/modal'>
            <ModalPage/>
          </Route>
          <Route path='/table'>
            <TablePage/>
          </Route>
          <Route path='/counter'>
            <CounterPage/>
          </Route>
        </div>
      </div>
    </NavigationProvider>
  )
}
