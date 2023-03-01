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

    let sortedData = data;

    

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
    <Table {...props} config = {updatedConfig} />
  </div>
  
}
