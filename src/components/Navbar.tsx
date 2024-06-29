import {Link} from "react-router-dom";
import {useState} from "react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">MySite</div>
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    ☰
                </button>
                <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/breeds" onClick={() => setIsMobileMenuOpen(false)}>Breeds</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </>
    );
}