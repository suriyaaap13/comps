import Link from "./Link"

export default function Sidebar() {

    const links = [
        {
            label: 'Dropdown',
            path: '/'
        },
        {
            label: 'Accordion',
            path: '/accordion'
        },
        {
            label: 'Button',
            path: '/button'
        },
        {
            label: 'Modal',
            path: '/modal'
        },
        {
            label: 'Table',
            path: '/table'
        }
    ];

    const renderLinks = links.map((link)=>{
        return <Link key={link.path} to={link.path} className='mb-3' activeClassName='border-l-2 pl-2 border-blue-500 font-bold'>{link.label}</Link>
    });


  return (
    <div className='sticky top-0 flex flex-col items-start'>
      {renderLinks}
    </div>
  )
}
