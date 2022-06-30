import { Container } from "react-bootstrap"
import EmailModal from "../quiz/EmailModal";
import './Footer.css'

const Footer = () => {
  return (
    <Container className="mt-5 footer">
      <EmailModal/>
    </Container>
  )
}

export default Footer;
