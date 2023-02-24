

export default function Table({ data }) {

    
    const renderedData = data.map((element)=>{
        
        return (
            <tr className="border-b">
                <td className='p-3'>{element.name}</td>
                <td className='p-3'>
                    <div className={`p-3 m-2 ${element.color}`}></div>
                </td>
                <td className='p-3'>{element.score}</td>
            </tr>
        )
    });

  return (
    <table className="table-auto border-spacing-2">
        <thead className="border-b-2 border-black">
            <tr>
                <th>Fruit</th>
                <th>Color</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {renderedData}
        </tbody>
    </table>
  )
}
