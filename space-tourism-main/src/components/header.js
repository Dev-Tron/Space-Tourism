import { 
    Navbar,
    Container,
    Offcanvas,
    Nav
    } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import logo from "../shared/logo.svg"
import styled from 'styled-components'

const HeaderLine = styled.hr`
        height: 3px;
        width: 35%;
        left: 8%;
        background-color: grey;
        position: absolute;

    @media (max-width: 1439px) {
           display: none;
        }
`

export default function Header() {
    return (
        <header>
            <div>
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className='md-4'>
                        <Container fluid >
                            <img src={logo} alt='logo-star' />
                            <Navbar.Toggle className='remove' />
                            <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end">
                                <Offcanvas.Header closeButton>
                                 </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <LinkContainer to="/">
                                            <Nav.Link>00 HOME</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/destinations">
                                            <Nav.Link>01 DESTINATION</Nav.Link>
                                        </LinkContainer>
                                         <LinkContainer to="/crews">
                                            <Nav.Link>02 CREW</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/technologies">
                                            <Nav.Link>03 TECHNOLOGY</Nav.Link>
                                        </LinkContainer>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                            <HeaderLine/>
                            <Navbar className='bgcolor' variant="light">
                                <Container>
                                    <Nav className="me-auto">
                                    <LinkContainer to="/">
                                            <Nav.Link><span className='number'>00</span>HOME</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/destinations">
                                            <Nav.Link><span className='number'>01</span>DESTINATION</Nav.Link>
                                        </LinkContainer>
                                         <LinkContainer to="/crews">
                                            <Nav.Link><span className='number'>02</span>CREW</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/technologies">
                                            <Nav.Link><span className='number'>03</span>TECHNOLOGY</Nav.Link>
                                        </LinkContainer>
                                    </Nav>
                                </Container>
                            </Navbar>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </header>
    )
}