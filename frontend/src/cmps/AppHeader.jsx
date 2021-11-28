import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/imgs/logo.png'

export function AppHeader() {

    const [isMenuShown, setIsMenuShown] = useState(false)
    const [isTopPage, setIsTopPage] = useState(true)

    const toggleMenu = () => setIsMenuShown(!isMenuShown)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        setIsTopPage(window.pageYOffset === 0)
    }

    return (
        <header className={`app-header flex space-between ${isTopPage ? '' : 'scroll'}`}>
            <NavLink to="/" className="logo">
                <img src={logo} alt="logo" />
                <span>autofleet</span>
            </NavLink >
            <div className={`btn-menu ${isMenuShown && 'open'}`} onClick={toggleMenu}>
                <span className="btn-menu-top"></span>
                <span className="btn-menu-middle"></span>
                <span className="btn-menu-bottom"></span>
            </div>
            <ul className={`main-nav clean-list flex ${isMenuShown && 'open'}`}>
                <NavLink to="/" className="nav-item" >Fleet</NavLink>
                <NavLink to="/about" className="nav-item" >Statistics</NavLink>
            </ul>
        </header>
    )
}
