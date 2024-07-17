import "./styles.scss"
import githubWhite from "../../assets/img/github-logo-white.png"
import linkedin from "../../assets/img/linkedin-icon.png"

export default function Footer() {
  return (
    <footer>
      <div className="line"></div>
      <div className="social">
        <p>Antonio Naccarella ©</p>
        <a href="https://github.com/Antonio-Naccarella" target="_blank">
          <img src={githubWhite} alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/antonio-naccarella/"
          target="_blank"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </footer>
  )
}
