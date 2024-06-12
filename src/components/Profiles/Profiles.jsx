import githubLogo from "../../assets/img/github-logo.png"
import githubLogoWhite from "../../assets/img/github-logo-white.png"
import linkedinICon from "../../assets/img/linkedin-icon.png"
import "./styles.scss"

export default function Profiles({ white }) {
  return (
    <div className="git-linkedin">
      <p>Visita i miei profili:</p>
      <br />
      <a href="https://github.com/Antonio-Naccarella" target="_blank">
        <img src={white ? githubLogoWhite : githubLogo} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/antonio-naccarella" target="_blank">
        <img src={linkedinICon} alt="Linkedin" />
      </a>
    </div>
  )
}
