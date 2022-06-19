import React from 'react';
import { Container, Navbar , Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-2'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link to="/"><img width={125} height={50} src="assets/Group 33069.png" alt=""/></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                        >
                            <Link className='navlink' to="/">Home</Link>
                            <Link className='navlink' to="/about">About Us</Link>
                            <Link className='navlink' to="/project">Projects</Link>
                            <Link className='navlink' to="dashboard">Dashboard</Link>
                            <Link className='navlink' to="/contacts">Contacts</Link>
                        </Nav>
                        <Button style={{ backgroundColor: '#251D58', color: 'white', width:'126px' }}>Login</Button> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;