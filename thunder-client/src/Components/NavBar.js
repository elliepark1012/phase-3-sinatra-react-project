import logo from "../logo-no-background.png"

function NavBar() {
    return (
        <div className="nav-bar">
            <img className="logo" src={logo}/>
            <nav>
                <ul class="nav-area">
                    <li>About Us</li>
                    <li>All Events</li>
                    <button> Create A Event</button>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar