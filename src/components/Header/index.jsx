import { useContext } from "react";
import { FN_Context } from "../../context/FullNameContext";
import NavLinkByRahib from "../NavLinkByRahib";
import "./header.css";
import { DarkModeContext } from "../../context/DarkModeContext";

function Header() {
    const { ad } = useContext(FN_Context)
    const [mode, setMode] = useContext(DarkModeContext)
    return <nav>
        <p style={{ margin: 0 }}>Xos gelifsen, {ad}</p>
        <button
            onClick={() => {
                let newMode = (mode === 'dark' ? 'light' : 'dark')
                setMode(newMode)
                localStorage.setItem('mode', newMode)
            }}
        >{mode === 'dark' ? '🌞' : '🌝'}</button>
        <NavLinkByRahib title="Home" to="/" />
        <NavLinkByRahib title="About" to="/about" />
        <NavLinkByRahib title="calculator" to="/calculator" />
        <NavLinkByRahib title="Users" to="/users" />
    </nav>
}

export default Header;
