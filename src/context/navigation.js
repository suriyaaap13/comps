import React, { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const NavigationContext = createContext();

function NavigationProvider({children}) {
  
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
    }
  
    return (
        <NavigationContext.Provider value = {{navigate, currentPath}}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };

export default NavigationContext;