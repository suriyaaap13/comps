import { useState } from "react";
import Table from "./Table"

export default function SortableTable(props) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

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

    const updatedConfig = props.config.map((column)=>{
        
        if(!column.sortValue){
            return column;
        }
        return {
            ...column, 
            header: () =>
            <th onClick = {()=>handleClick(column.label)}>{column.label} is Sortable</th>
        };
    }

    )

  return <div>
    {sortBy}-
    {sortOrder}
    <Table {...props} config = {updatedConfig} />
  </div>
  
}
