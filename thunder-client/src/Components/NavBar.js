import logo from "../logo-no-background.png"

function NavBar() {
    return (
        <div className="grid-nav-bar">
            <img className="logo" src={logo} alt="logo"/>
            <nav>
                <ul className="nav-area">
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <button> <li><a href="home">Home</a></li> </button>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar