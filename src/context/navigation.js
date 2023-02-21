import React, { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const NavigationContext = createContext();

function NavigationProvider() {
  
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    function handler(){
        setCurrentPath(window.location.pathname);
    }

    useEffect(()=>{

        window.addEventListener('popstate', handler);
        
        return  window.removeEventListener('popstate', handler);


    },[]);

    function navigate(to){
        window.history.pushState({}, '', to);
        console.log(to);
    }
  
    return (
        <NavigationContext.Provider value = {{}}>
            <button onClick={() => navigate('/accordion')}>Go to accordion</button>
            <button onClick={() => navigate('/dropdown')}>Go to dropdown</button>
            <div>{currentPath}</div>
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };

export default NavigationContext;