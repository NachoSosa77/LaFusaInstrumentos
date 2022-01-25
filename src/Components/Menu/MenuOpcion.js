import {Link} from "react-router-dom"
import {   Nav} from 'react-bootstrap';
function MenuOpcion(props) {
    const {to,label} = props;
    return (
        <Nav.Link as={Link} to={to}>{label}</Nav.Link>
    );
  }
export default MenuOpcion;
  