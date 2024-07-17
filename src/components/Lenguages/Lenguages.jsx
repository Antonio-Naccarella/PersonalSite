import htmlLogo from "../../assets/img/html5.png"
import cssLogo from "../../assets/img/css3.png"
import sassLogo from "../../assets/img/sass.png"
import javascriptLogo from "../../assets/img/javascript-icon.png"
import reactLogo from "../../assets/img/react-icon.png"
import nodeLogo from "../../assets/img/node.js-icon.png"
import "./styles.scss"

export default function Lenguages({ html, css, sass, js, react, node }) {
  return (
    <div className="lenguages">
      {html && <img src={htmlLogo} alt="HTML" />}
      {css && <img src={cssLogo} alt="CSS" />}
      {sass && <img src={sassLogo} alt="SASS" />}
      {js && <img src={javascriptLogo} alt="JavaScript" />}
      {react && <img src={reactLogo} alt="React" />}
      {node && <img src={nodeLogo} alt="Node.js" />}
    </div>
  )
}
