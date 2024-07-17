import { useState } from "react"
import axios from "axios"
import "./styles.scss"
import { MutatingDots } from "react-loader-spinner"

const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const userId = import.meta.env.VITE_USER_ID
const urlAPI = import.meta.env.VITE_EMAILJS_POST_API

export default function ContactForm() {
  const [params, setParams] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState()

  function handleChange(e) {
    setParams({ ...params, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: params,
    }
    setIsLoading(true)

    try {
      const res = await axios.post(urlAPI, data)
      console.log(res)
      if (res.status === 200) {
        setIsLoading(false)
        setShow(true)
        setParams({ from_name: "", from_email: "", message: "" })
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      alert("Messaggio non inviato!")
    }
  }

  return (
    <>
      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Il Tuo Nome"
            value={params.from_name}
            onChange={handleChange}
            name="from_name"
            required
          ></input>
          <input
            type="email"
            placeholder="Email"
            value={params.from_email}
            onChange={handleChange}
            name="from_email"
            required
          ></input>
          <input
            type="text"
            placeholder="Messaggio"
            value={params.message}
            onChange={handleChange}
            name="message"
            required
          ></input>
          <button type="submit">Invia</button>
        </form>
      </section>
      {isLoading && <Loading />}
      {show && <MessageSended setShow={setShow} />}
    </>
  )
}

function Loading() {
  return (
    <div className="message-container">
      <MutatingDots
        visible={true}
        height="150"
        width="150"
        color="#1a6d8e"
        secondaryColor="beige"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

function MessageSended({ setShow }) {
  return (
    <div className="message-container">
      <div className="message">
        <div className="message-content">
          <h1>Grazie il tuo messaggio è stato inviato.</h1>
          <button onClick={() => setShow(false)}>Prosegui</button>
        </div>
      </div>
    </div>
  )
}
