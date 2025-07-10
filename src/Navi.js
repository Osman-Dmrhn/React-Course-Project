import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { brandName = "ReactApp", navItems = ["Sepet"], text } = this.props;
 

    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/">{brandName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              {Array.isArray(navItems) &&
                navItems.map((item, index) => (
                  <NavItem key={index}>
                    <NavLink href={item.href}>{item.text}</NavLink>
                  </NavItem>
                ))}
                <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} ></CartSummary>            
            </Nav>
            <NavbarText>{text}</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
