import Project from "../../components/Project/Project"
import globalWarmingScreen from "../../assets/img/global-warming-screen.png"
import veggieWorldScreen from "../../assets/img/veggie-world.png"
import newsInfoScreen from "../../assets/img/news-info-screen.png"
import "./styles.scss"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"

export default function Projects() {
  return (
    <article className="projects">
      <header>
        <Link to="/">
          <p>&lt;/AN&gt;</p>
        </Link>
        <h1>Progetti</h1>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </header>
      <div>
        <Project
          name="Global Warming"
          img={globalWarmingScreen}
          description="Sito che invita a riflettere sul tema cambiamento climatico.
        Raccoglie dati tramite un API, e li visualizza in grafici con Recharts."
          link="https://globallwarming.netlify.app/"
          react={true}
        />
        <Project
          displayReverse={true}
          name="Veggie World"
          img={veggieWorldScreen}
          description={
            "Pagina web di ricette vegetariane, attraverso chiamate API, mette a disposizione svariati piatti dettagliati, e la possibilità di salvare dei favoriti."
          }
          link="https://veggieworld.netlify.app/"
          react={true}
        />
        <Project
          name="Tongue API JSON RESTful"
          icon="{JSON}"
          description="'Tongue Api' è un'applicazione web che fornisce l'API per una società immaginaria chiamata Tongue."
          link="https://github.com/Antonio-Naccarella/Tongue-API-JSON-RESTful"
          node={true}
        />
        <Project
          displayReverse={true}
          name="News Information App"
          img={newsInfoScreen}
          description="Web app dove trovi notizie giornaliere dal mondo del tech."
          link="https://newsinformationapp.netlify.app/"
          html={true}
          css={true}
          js={true}
        />
      </div>
      <Footer />
    </article>
  )
}
