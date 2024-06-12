import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../../assets/img/logo2.png"
import "./styles.scss"

export default function Navbar() {
  const [show, setShow] = useState(false)

  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="Nacca Logo" />
        </Link>
      </div>
      <div className="nav-container">
        <div
          className={show ? "toggle-x" : "toggle"}
          onClick={() => setShow(!show)}
        >
          <span></span>
        </div>
        <nav className={show ? "nav-display" : "nav-display-none"}>
          <ul onClick={() => setShow(false)}>
            <Link to={"/"}>
              <li>HOME</li>
            </Link>
            <Link to={"/about"}>
              <li>SU DI ME</li>
            </Link>
            <Link to={"/projects"}>
              <li>PROGETTI</li>
            </Link>
            <Link to={"/contacts"}>
              <li>CONTATTO</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
