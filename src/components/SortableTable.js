import { useState } from "react";
import Table from "./Table"
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
// FaCaretUp FaCaretDown


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

    const sortFn = (data, col)=>{

        const reverseOrder = sortOrder === 'asc' ? 1 : -1;
        data.sort((A, B)=>{
            const a = col.sortValue(A);
            const b = col.sortValue(B);

            if(typeof(a) === 'string'){
                return a.localeCompare(b)*reverseOrder;
            }
            return (a - b)*reverseOrder;
        });
        return data;
    }

    let sortedData = [...data];
    
    if(sortBy && sortOrder){
        const column = config.find((column) => column.label === sortBy);
        if(column.sortValue)
            sortedData = sortFn(sortedData, column);
    }

    

    

    const getIcons = (label)=>{
        // <FaCaretUp/>
        // <FaCaretDown/>
        if(sortOrder === null || label !== sortBy){
            return <>
                <FaCaretUp/>
                <FaCaretDown/>
            </>
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
            <th className="flex items-center" onClick = {()=>handleClick(column.label)}>
                <div>
                    {getIcons(column.label)}
                </div>
                {column.label}
            </th>
        };
    }

    )

  return <div>
    {sortBy}-
    {sortOrder}
    <Table {...props} data = {sortedData} config = {updatedConfig} />
  </div>
  
}
