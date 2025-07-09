import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

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

    const cartItems = this.props.cart && Array.isArray(this.props.cart) ? this.props.cart : [];

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

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sepet ({this.props.cart.length})
                </DropdownToggle>
                <DropdownMenu right>
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <DropdownItem key={index}>
                        {item.product.productName} ({item.quantity})
                      </DropdownItem>
                    ))
                  ) : (
                    <DropdownItem>Sepetiniz Boş</DropdownItem>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>{text}</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
