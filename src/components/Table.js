import classNames from "classnames";

export default function Table({ data }) {

    
    const renderedData = data.map((element)=>{
        const finalClassName = classNames('box-border h-7 w-7', element.color);
        return (
            <tr>
                <td>{element.name}</td>
                <td>
                    <div className={finalClassName}></div>
                </td>
                <td>{element.score}</td>
            </tr>
        )
    });

  return (
    <table className="table-auto">
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
