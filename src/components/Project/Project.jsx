import Lenguages from "../Lenguages/Lenguages"
import "./styles.scss"

export default function Project({ name, img, description, link, react }) {
  return (
    <section class="project">
      <h3>{name}</h3>
      <div className="project-card">
        <div>
          <img className="animation" src={img} />
        </div>
        <div>
          <div className="project-text">
            <p>{description}</p>
            <p>
              Provalo:{" "}
              <a href={link} target="_blank">
                {name}
              </a>
            </p>
          </div>
          <Lenguages html={true} css={true} js={true} react={react} />
        </div>
      </div>
    </section>
  )
}
