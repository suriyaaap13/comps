import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Table from "./Table";
import useSort from '../hooks/use-sort';

export default function SortableTable(props) {
    const { config, data } = props;
    const {sortBy, sortOrder, sortedData, setSortColumn} = useSort(data, config);

    
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
            <th  onClick = {()=>setSortColumn(column.label)}>
                <div className="flex items-center">
                    {getIcons(column.label)}
                    {column.label}
                </div>
            </th>
        };
    });

  return <Table {...props} data = {sortedData} config = {updatedConfig} />
  
}
