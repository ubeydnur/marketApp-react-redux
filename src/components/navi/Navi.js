import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <Container>
                <NavbarBrand>
                    <Link to="/" className="text-light">Market App</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link className="text-info" to='/saveproduct'>Add To Product</Link>
                            </NavLink>
                        </NavItem>
                        <CartSummary />
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Navi;