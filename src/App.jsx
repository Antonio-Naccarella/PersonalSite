import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Project from "./pages/Projects/Projects"
import "./index.scss"
import Contacts from "./pages/Contacts/Contacts"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}
