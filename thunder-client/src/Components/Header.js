import logo from "../../src/logo-color.png"

function Header() {
    return (
        <div className="navBar-div">
        <img src={logo} />
        <ul className="navBar-ul">
          <h1>By Categories</h1>
          <li>Dancing</li>
          <li>Yoga & Filates</li>
          <li>Sports</li>
          <li>Running</li>
          <li>Technology</li>
          <li>Socializing</li>
          <li>Music</li>
        </ul>
    </div> 
    )
}

export default Header