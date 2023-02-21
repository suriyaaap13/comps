import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

export default function AccordionPage() {

  const content = [
    {
        'id': '0',
        'label': 'Can I use React in an application ?',
        'content': 'Phasellus cursus dignissim metus, in gravida augue posuere quis. Pellentesque cursus ornare mauris in imperdiet. Nunc nisl arcu, elementum ut ultrices et, sodales at purus. Fusce et magna placerat, luctus nulla nec, aliquet magna. Nullam eu egestas urna, sed finibus orci. Donec non mauris tellus. Vivamus vehicula lectus ut velit dictum eleifend. Maecenas ultricies metus in arcu congue tincidunt. Mauris venenatis aliquam risus a bibendum.'
    },
    {
        'id': '1',
        'label': 'Can I use Javascript in an application ?',
        'content': 'Phasellus cursus dignissim metus, in gravida augue posuere quis. Pellentesque cursus ornare mauris in imperdiet. Nunc nisl arcu, elementum ut ultrices et, sodales at purus. Fusce et magna placerat, luctus nulla nec, aliquet magna. Nullam eu egestas urna, sed finibus orci. Donec non mauris tellus. Vivamus vehicula lectus ut velit dictum eleifend. Maecenas ultricies metus in arcu congue tincidunt. Mauris venenatis aliquam risus a bibendum.'
    },
    {
        'id': '2',
        'label': 'Can I use CSS in an application ?',
        'content': 'Phasellus cursus dignissim metus, in gravida augue posuere quis. Pellentesque cursus ornare mauris in imperdiet. Nunc nisl arcu, elementum ut ultrices et, sodales at purus. Fusce et magna placerat, luctus nulla nec, aliquet magna. Nullam eu egestas urna, sed finibus orci. Donec non mauris tellus. Vivamus vehicula lectus ut velit dictum eleifend. Maecenas ultricies metus in arcu congue tincidunt. Mauris venenatis aliquam risus a bibendum.'
    }
  ]

  const [ items, setItems ] = useState(content);
  

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}
