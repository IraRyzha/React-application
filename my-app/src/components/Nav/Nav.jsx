import { useRef, useState } from 'react';
import logo from './logo.svg'
import menuBtn from './icon-hamburger.svg'
import closeBtn from './icon-close.svg'
import "./Nav.scss";

function Nav({ changePage }) {
    const navNode = useRef(false) 
    const [isMenu, setIsMenu] = useState()

    const navItems = [
        { name: 'home', url: '#' },
        { name: 'shop', url: '#' }, 
        { name: 'about', url: '#' }, 
        { name: 'contact', url: '#' },
        { name: 'test', url: '#' } 
    ] 

    const isMenuOpen = () => {
        setIsMenu(!isMenu)
        navNode.current.classList.toggle('modal')
    }

    return ( 
        <>
            {isMenu &&  <div className="nav-modal"></div>} 
            <nav ref={navNode}>
                {isMenu && <img src={closeBtn} alt="close btn" className="close-btn" onClick={isMenuOpen} />}
                {!isMenu && <img src={menuBtn} alt="menu button" className="menu-btn" onClick={isMenuOpen} />}
                {!isMenu && <img src={logo} alt="logo" className="logo" />}
                <ul className="nav-list">
                    {navItems.map(({ name, url }) => <li key={name} onClick={() => changePage(name)} ><a href={url}>{name}</a></li> )}
                </ul>
            </nav> 
        </>
    )
}

export default Nav;