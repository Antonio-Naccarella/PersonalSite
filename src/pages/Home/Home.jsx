import { Link } from "react-router-dom"
import About from "../About/About"
import Contacts from "../Contacts/Contacts"
import Footer from "../../components/Footer/Footer"
import "./styles.scss"

export default function Home() {
  return (
    <>
      <main>
        <article className="home">
          <section className="intro">
            <div className="avatar"></div>
          </section>

          <nav className="menu">
            <h1>Antonio Naccarella</h1>
            <ul>
              <li style={{ marginLeft: "20px" }}>
                <Link to="/projects">Progetti</Link>
              </li>
              <li style={{ marginLeft: "50px" }}>
                <a href="#about">Su di me</a>
              </li>
              <li style={{ marginLeft: "70px" }}>
                <a href="#contact">Contatto</a>
              </li>
            </ul>
          </nav>
        </article>
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
