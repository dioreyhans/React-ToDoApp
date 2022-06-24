import React from 'react'
import {Link} from 'react-router-dom'
import{
    Nav,NavItem,Navbar,Container
}from 'reactstrap'
export const Header = () => {
    return (
        <Navbar>
            <Container className="d-flex justify-content-center mt-5">
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">Create To Do List</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
