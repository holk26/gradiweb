import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarPage = () => {
    return(
        <Navbar>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Desarrollado por: <a href="https://github.com/holk26">Homero Cabrera A</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}

export default NavbarPage;