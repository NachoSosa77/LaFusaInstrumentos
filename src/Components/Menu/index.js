import { Navbar, Nav } from "react-bootstrap";
import MenuOpcion from "./MenuOpcion";
function Menu(props) {
  const { login, setLogin } = props;
  console.log("Login", login);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">La Fusa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!login && (
              <>
                <MenuOpcion to="/ingresar" label="Ingresar" />
                <MenuOpcion to="/registro" label="Registro" />
              </>
            )}
            {login && (
              <>
                <MenuOpcion to="/" label="Home" />
                <Nav.Link onClick={(e) => {
                    setLogin(false);
                    localStorage.removeItem("token");
                  }}
                >
                  Salir
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
