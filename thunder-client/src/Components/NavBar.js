import logo from "../logo-no-background.png"

function NavBar() {
    return (
        <div className="grid-nav-bar">
            <img className="logo" src={logo} alt="logo"/>
            <nav>
                <ul className="nav-area">
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#allevents">All Events</a></li>
                    <button> <li><a href="#newevent">Create An Event</a></li> </button>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar