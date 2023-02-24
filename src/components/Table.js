

export default function Table({ data, config, keyFn }) {

    const renderedHeader = config.map((column)=>{
        return (
            <th key = {column.label}>
                {column.label}
            </th>
        );
    });

    
    const renderedData = data.map((element)=>{

        const columnData = config.map((column)=>{
            return <td className='p-3' key={column.label}>{column.render(element)}</td>
        });
        
        return (
            <tr className="border-b" key={keyFn(element)}>
                {columnData}
            </tr>
        )
    });

  return (
    <table className="table-auto border-spacing-2">
        <thead className="border-b-2 border-black">
            <tr>{renderedHeader}</tr>
        </thead>
        <tbody>{renderedData}</tbody>
    </table>
  )
}
