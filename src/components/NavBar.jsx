import { CartWidget } from '../components/CartWidget'
import "./NavBar.css"
import { NavBarLinks } from './NavBarLinks';

export function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="https://seeklogo.com/images/S/slingshot-kite-surfing-logo-6D45055CF0-seeklogo.com.png" alt="Logo"></img>
                </div>
                <div className="navbar-links">
                    <NavBarLinks texto="Inicio" />
                    <NavBarLinks texto="Lancha" />
                    <NavBarLinks texto="Park" />
                    <NavBarLinks texto="Tablas" />
                    <NavBarLinks texto="Contacto" />
                </div>
                <div className="navbar-cart">
                    <CartWidget items={1}/>
                </div>
            </nav>
        </>
    );
};

