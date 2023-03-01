import { useState } from "react";
import Table from "./Table"
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export default function SortableTable(props) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

    const handleClick = (label)=>{

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

    const getIcons = (label)=>{
        if(sortOrder === null || label !== sortBy){
            return <div>
                <FaCaretUp/>
                <FaCaretDown/>
            </div>
        }

        if(label === sortBy){
            if(sortOrder === 'asc'){
                return <FaCaretUp/>;
            }else if(sortOrder === 'desc'){
                return <FaCaretDown/>;
            }
        }

    }

    const updatedConfig = props.config.map((column)=>{
        
        if(!column.sortValue){
            return column;
        }
        return {
            ...column, 
            header: () =>
            <th  onClick = {()=>handleClick(column.label)}>
                <div className="flex items-center">
                    {getIcons(column.label)}
                    {column.label}
                </div>
            </th>
        };
    }

    )

  return <Table {...props} data = {sortedData} config = {updatedConfig} />
  
}
