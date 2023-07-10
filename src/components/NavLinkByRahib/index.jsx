import { NavLink } from "react-router-dom"

const NavLinkByRahib = ({ title, to }) => {
    return (
        <>
            <NavLink
                style={({ isActive }) => {
                    if (isActive) {
                        return {
                            color: 'red',
                            backgroundColor: 'black'
                        }
                    }
                }}
                to={to}>
                {title}
            </NavLink>
        </>
    )
}
export default NavLinkByRahib
