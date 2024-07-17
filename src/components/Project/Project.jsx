import Lenguages from "../Lenguages/Lenguages"
import "./styles.scss"

export default function Project({
  displayReverse,
  name,
  icon,
  img,
  description,
  link,
  html,
  css,
  js,
  react,
  node,
}) {
  return (
    <section className={displayReverse ? "project reverse" : "project"}>
      <div className="img">
        {icon ? <h3>{icon}</h3> : <img src={img} alt={name} />}
      </div>
      <div className="info">
        <div className="text">
          {" "}
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            <b>
              Provalo:{" "}
              <a href={link} target="_blank">
                {name}
              </a>
            </b>
          </p>
          <p>
            <b>Linguaggi:</b>
          </p>
          <Lenguages html={html} css={css} js={js} react={react} node={node} />
        </div>{" "}
      </div>
    </section>
  )
}
