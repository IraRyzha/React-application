import logo from './logo.svg'
import "./NavSection.css";

function NavSection() {
    const navItems = [
        { name: 'home', url: '/' },
        { name: 'shop', url: '/' },
        { name: 'about', url: '/' },
        { name: 'contact', url: '/' },
    ]

    return (
        <div className="nav-section"> 
            <nav>
                <img src={logo} alt="logo"/>
                <ul className="nav-list">
                    {navItems.map(({ name, url }) => <li key={name}><a href={url}>{name}</a></li> )}
                </ul>
            </nav>
        </div>
    )
}

export default NavSection;