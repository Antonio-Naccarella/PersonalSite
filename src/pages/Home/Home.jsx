import Lenguages from "../../components/Lenguages/Lenguages"
import Profiles from "../../components/Profiles/Profiles"
import "./styles.scss"
export default function Home() {
  return (
    <article className="presentation-container">
      <section className="presentation">
        <div className="box-img"></div>
        <div className="card-presentation">
          <h2>Antonio Naccarella</h2>
          <h1>Frontend Developer</h1>
          <p>
            Ciao, sono Antonio, amo la tecnologia, la cucina, il mare e lo
            sport.
          </p>

          <Lenguages
            html={true}
            css={true}
            sass={true}
            js={true}
            react={true}
          />
          <Profiles />
        </div>
      </section>
    </article>
  )
}
