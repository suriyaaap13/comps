import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation'

export default function Link({to, children, className, activeClassName}) {

    const { navigate, currentPath } = useNavigation();

    const finalClassName = classNames(
        className, 
        'text-blue-500',
        to === currentPath && activeClassName
    );

    function handleClick(event){
        if(event.metaKey || event.ctrlKey)
            return;
        event.preventDefault();
        navigate(to);
    }

    return (
        <a className={finalClassName} href={to} onClick={handleClick}>
            {children}
        </a>
    )
}
