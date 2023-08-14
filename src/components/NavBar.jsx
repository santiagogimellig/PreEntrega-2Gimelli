import { Link } from 'react-router-dom';
import { CartWidget } from '../components/CartWidget'
import "./NavBar.css"

export function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="https://seeklogo.com/images/S/slingshot-kite-surfing-logo-6D45055CF0-seeklogo.com.png" alt="Logo"></img>
                </div>
                <div className="navbar-links">
                    <Link className="menu-link" to="/"> Productos </Link>
                    <Link className="menu-link" to="/productos/hibrida"> Hibrida </Link>
                    <Link className="menu-link" to="/productos/park"> Park </Link>
                    <Link className="menu-link" to="/productos/wind"> Wind </Link>
                    <Link className="menu-link" to="/productos/lancha"> Lancha </Link>
                </div>
                <div className="navbar-cart">
                    <CartWidget items={1}/>
                </div>
            </nav>
        </>
    );
};

