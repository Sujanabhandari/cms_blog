import { NavLink, Routes, Route } from "react-router-dom";
// import Nav from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';


const Nav = () => {


    return(
        <nav> 
            <NavLink to="Author/Sujana" className="link"> Sujana</NavLink>
            <NavLink to="Author/Robert" className="link"> Robert</NavLink>
            <NavLink to="Author/Christian" className="link"> Christian</NavLink>
        </nav>
    )
}
export default Nav;