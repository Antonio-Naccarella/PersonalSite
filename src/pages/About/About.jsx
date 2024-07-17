const s2iImg =
  "data:image/png;base64,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"
import "./styles.scss"
import github from "../../assets/img/github-logo.png"
import linkedin from "../../assets/img/linkedin-icon.png"

export default function About() {
  return (
    <article id="about">
      <h2>Su di me</h2>
      <div className="profiles">
        <h2>Visita i miei profili</h2>
        <ul>
          <a href="https://github.com/Antonio-Naccarella" target="_blank">
            <li>
              GitHub <img src={github} />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-naccarella/"
            target="_blank"
          >
            <li>
              Linkedin <img src={linkedin} />
            </li>
          </a>
        </ul>
      </div>
      <div className="info-about">
        <div className="text-about">
          <h3>Formazione Digitale</h3>
          <p>
            Sono uno chef riciclato al mondo del coding, ho trasformato la
            creatività culinaria in quella digitale.
            <br /> Portando a termine il Master Front end di{" "}
            <a href="https://www.start2impact.it/">Start2Impact University</a> ,
            una piattaforma online focalizzata sullo sviluppo di competenze
            digitali, attraverso percorsi personalizzati, progetti pratici
            supervisionati da esperti di settore.
          </p>
        </div>
        <div className="img-about">
          <img src={s2iImg} alt="Start2Impact logo" />
        </div>
      </div>
      <div className="skills">
        <div className="title">
          <h3>Skills</h3>
          <p>
            <b>Durante il percorso ho appreso e utilizzato:</b>
          </p>
        </div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </article>
  )
}
