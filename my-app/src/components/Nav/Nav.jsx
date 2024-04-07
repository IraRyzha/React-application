import { useEffect, useRef } from 'react';
import logo from './logo.svg'
import menuBtn from './icon-hamburger.svg'
import "./Nav.scss";

function Nav({ changePage }) {
    const menuBtnNode = useRef()

    const navItems = [
        { name: 'home', url: '#' },
        { name: 'shop', url: '#' }, 
        { name: 'about', url: '#' }, 
        { name: 'contact', url: '#' },
        { name: 'test', url: '#' }
    ] 

    return ( 
        <nav>
            <img ref={menuBtnNode} src={menuBtn} alt="menu button" className="menu-btn" />
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-list">
                {navItems.map(({ name, url }) => <li key={name} onClick={() => changePage(name)} ><a href={url}>{name}</a></li> )}
            </ul>
        </nav> 
    )
}

export default Nav;