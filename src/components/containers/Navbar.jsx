import NavItem from './NavItem'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavItem name="DASHBOARD"/>
            <NavItem name="USER PROFILE"/>
            <NavItem name="mundo"/>
        </nav>
    )
}

export default Navbar;