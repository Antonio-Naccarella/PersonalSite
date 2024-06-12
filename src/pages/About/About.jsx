import officeImg from "../../assets/img/computer.jpg"
import "./styles.scss"

export default function About() {
  return (
    <section className="about-container">
      <h2>Su di me</h2>
      <div className="about">
        <div>
          <p>
            Ho lavorato come cuoco per dieci anni, di recente sono rimasto
            illuminato dal coding.
            <br />
            <br />
            Mi piace creare siti web, il mio obiettivo è diventare uno
            sviluppatore web esperto, partendo dalla parte di Frontend.
            <br />
            <br />
            Sono affascinato dalla continua evoluzione delle tecnologie e
            dall'opportunità di imparare e crescere costantemente in questo
            campo dinamico.
          </p>
        </div>
        <div className="box-img-about">
          {/* <img className="animation" src={officeImg} alt="office" /> */}
        </div>
      </div>
    </section>
  )
}
