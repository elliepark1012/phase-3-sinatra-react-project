import logo from "../logo-no-background.png"

function NavBar() {
    return (
        <div className="grid-nav-bar">
            <img className="logo" src={logo}/>
            <nav>
                <ul className="nav-area">
                    <li>About Us</li>
                    <li>All Events</li>
                    <button> Create AN Event</button>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar