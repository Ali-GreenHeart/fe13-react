import { NavLink } from "react-router-dom";
import "./header.css"
import NavLinkByRahib from "../NavLinkByRahib";

function Header() {
    return <nav>
        <NavLinkByRahib title="Home" to="/" />
        <NavLinkByRahib title="About" to="/about" />
        <NavLinkByRahib title="calculator" to="/calculator" />
        <NavLinkByRahib title="Users" to="/users" />
    </nav>
}

export default Header;
