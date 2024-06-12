import Project from "../../components/Project/Project"
import globalWarmingScreen from "../../assets/img/global-warming-screen.png"
import veggieWorldScreen from "../../assets/img/veggie-world.png"
import newsInfoScreen from "../../assets/img/news-info-screen.png"
import "./styles.scss"

export default function Projects() {
  return (
    <article className="projects">
      <h1>Progetti</h1>
      <Project
        name="Global Warming"
        img={globalWarmingScreen}
        description="Piattaforma finalizzata alla sesibilizzazione sul riscaldamento
              globale. Attraverso grafici riporta dati, raccolti da un API, sui maggiori elementi di
              inquinamento."
        link="https://globallwarming.netlify.app/"
        react={true}
      />
      <Project
        name="Veggie World"
        img={veggieWorldScreen}
        description={
          "Pagina web di ricette vegetariane, attraverso chiamate API, mette a disposizione svariati piatti dettagliati, e la possibilità di salvare dei favoriti."
        }
        link="https://veggieworld.netlify.app/"
        react={true}
      />
      <Project
        name="News Information App"
        img={newsInfoScreen}
        description="Web app dove trovi notizie giornaliere dal mondo del tech."
        link="https://newsinformationapp.netlify.app/"
      />
    </article>
  )
}
