import logo from "../logo-no-background.png"
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
import AboutUs from "./AboutUs";
import AllEvents from "./EventList";
import CreateAnEvent from "./NewEventForm";

function NavBar() {
    return (
        <div className="grid-nav-bar">
            <img className="logo" src={logo}/>
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