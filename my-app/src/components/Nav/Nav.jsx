import logo from './logo.svg'
import "./Nav.css";

function Nav({ changePage }) {
    const navItems = [
        { name: 'home', url: '#' },
        { name: 'shop', url: '#' }, 
        { name: 'about', url: '#' },
        { name: 'contact', url: '#' },
        { name: 'test', url: '#' }
    ] 

    return ( 
        <nav>
            <img src={logo} alt="logo"/>
            <ul className="nav-list">
                {navItems.map(({ name, url }) => <li key={name} onClick={() => changePage(name)} ><a href={url}>{name}</a></li> )}
            </ul>
        </nav> 
    )
}

export default Nav;