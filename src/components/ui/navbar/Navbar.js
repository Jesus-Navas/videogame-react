import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar className="justify-content-between" bg="light" expand="md" variant="light">
            <Navbar.Brand className="mx-5" as="div">
                <Link to="/">
                    <img
                        alt=""
                        src="./../../../../img/Logo_y_nombre_horizontal.png"
                        width="200"
                        height="auto"
                        className="d-inline-block align-center"
                    />
                </Link>
            </Navbar.Brand>
            <Nav>

                <Nav.Link as="div"><Link to="/"><button aria-pressed="true" type="button" className="btn btn-warning button-nav">Info</button></Link></Nav.Link>
                <Nav.Link as="div"><Link to="/fighters"><button aria-pressed="true" type="button" className="btn btn-warning button-nav">Personajes</button></Link></Nav.Link>
                <Nav.Link as="div"><Link to="/"><button aria-pressed="true" type="button" className="btn btn-warning button-nav">Escenarios</button></Link></Nav.Link>
                <Nav.Link as="div"><Link to="/"><button aria-pressed="true" type="button" className="btn btn-warning button-nav">Modos</button></Link></Nav.Link>


            </Nav>
            <Nav className="mx-5" as="div">
                <Link className="px-2" to="/">
                    <img
                        alt="insert coin logo"
                        src="./../../../../img/insert-coin-.gif"
                        width="200"
                        height="100"
                        className="d-inline-block align-center" />
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;