import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavBar() {
  const [isLightMode, setIsLightMode] = useState(false); 

  // Toggle between light and dark mode
  // Logos and icons still need light mode versions
  const toggleTheme = () => setIsLightMode(prevMode => !prevMode);

  return (
    <Navbar expand="lg" className={`py-3 ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
          >
            Connect Wallet
          </Button>
          <Button
            variant="outline-primary"
            className="ms-3"
            onClick={toggleTheme}
          >
            {isLightMode ? "Dark" : "Light"}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;