import { NavLink } from "react-router-dom"
import styles from "./index.module.css"

const style = {
    color: 'red',
    backgroundColor: 'black'
}

const NavLinkByRahib = ({ title, to }) => {
    return (
        <>
            <NavLink
                // style={({ isActive }) => isActive ? style : null}
                className={({ isActive }) => isActive ? styles.link : null}
                to={to}>
                {title}
            </NavLink>
        </>
    )
}
export default NavLinkByRahib
