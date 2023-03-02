import { useState } from "react";


function useSort(data, config) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);


    // handleClick
    const setSortColumn = (label)=>{

        if(sortOrder && sortBy !== label){
            setSortBy(label);
            setSortOrder('asc');
            return;
        }

        if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }else if(sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(label);
        }else if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }
    }

    let sortedData = [...data];
    
    if(sortBy && sortOrder){
        const column = config.find((column) => column.label === sortBy);
    
        const { sortValue } = column;
        
        sortedData = [...data].sort((A, B)=>{
            const a = sortValue(A);
            const b = sortValue(B);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;
            if(typeof(a) === 'string'){
                return a.localeCompare(b)*reverseOrder;
            }
            return (a - b)*reverseOrder;
        });
    
    }

    return {
        sortBy,
        sortOrder,
        sortedData,
        setSortColumn
    }

}

export default useSort;
