import AccordionShow from "./AccordionShow";

export default function Accordion({ items }) {

  const renderedItems = items.map(( item )=>{
    return <AccordionShow key={item.id} item={item} />
  });

  return (
    <div>
        {renderedItems}
    </div>
  )
}
