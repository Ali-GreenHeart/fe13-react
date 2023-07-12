import { NavLink } from "react-router-dom";
import "./header.css"
import NavLinkByRahib from "../NavLinkByRahib";
import { useContext } from "react";
import { FN_Context } from "../../context/FullNameContext";

function Header() {
    const { ad } = useContext(FN_Context)
    return <nav>
        <p>Xos gelifsen, {ad}</p>
        <NavLinkByRahib title="Home" to="/" />
        <NavLinkByRahib title="About" to="/about" />
        <NavLinkByRahib title="calculator" to="/calculator" />
        <NavLinkByRahib title="Users" to="/users" />
    </nav>
}

export default Header;
