import ContactForm from "../../components/ContactForm/ContactForm"
import "./styles.scss"

export default function Contacts() {
  return (
    <article className="contact">
      <div className="contacts-text">
        <h3>Contatto</h3>
        <p>Restiamo in contatto!</p>
      </div>
      <ContactForm />
    </article>
  )
}
