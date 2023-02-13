

export default function AccordionShow({ item }) {

  const handleClick = ()=>{
    console.log("Display the content of the label", item.id, item.content);
  }

  return (
    <div>
      <div onClick={handleClick}>
        {item.label}
      </div>
      <div className="hidden">{item.content}</div>
    </div>
  )
}
