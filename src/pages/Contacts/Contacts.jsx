import ContactForm from "../../components/ContactForm/ContactForm"
import "./styles.scss"

export default function Contacts() {
  return (
    <article id="contact">
      <div className="contacts-text">
        <h3>Contatto</h3>
        <p>
          Non esitare a contattarmi per altre informazioni,
          <br /> inviami un messaggio!
        </p>
      </div>
      <ContactForm />
    </article>
  )
}
