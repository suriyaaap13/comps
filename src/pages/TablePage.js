import Table from '../components/Table';

export default function TablePage() {

    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-amber-400', score: 4 },
    ];

    const config = [
        { 
            label: 'Fruits', 
            render: (element)=>element.name,
        },
        { 
            label: 'Color',
            render: (element)=><div className={`p-3 m-2 ${element.color}`}></div>,
        },
        { 
            label: 'Score', 
            render: (element)=>element.score,
        }
    ];

    const keyFn = (element) => element.name;

  return (
    <div>
      <Table data = {data} config = {config} keyFn={keyFn}/>
    </div>
  )
}
