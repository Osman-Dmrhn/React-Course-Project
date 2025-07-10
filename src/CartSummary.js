import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,} from "reactstrap"

export default class CartSummary extends Component {
    renderSummary(){
        const cartItems = this.props.cart && Array.isArray(this.props.cart) ? this.props.cart : [];
        return (<UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret>
                  Sepet ({this.props.cart.length})
                </DropdownToggle>
                <DropdownMenu >
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <DropdownItem key={index}>
                        <Badge color='danger' onClick={()=>this.props.removeFromCart(item.product)}>X</Badge>
                        {item.product.productName} 
                        <Badge color='success' >({item.quantity})</Badge>    
                      </DropdownItem>
                    ))
                  ) : (
                    <DropdownItem>Sepetiniz Boş</DropdownItem>
                  )}
                  <DropdownItem>
                    <Link to="cart">Sepete Git</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>)
    }
  render() {
    return (
      <div>{this.props.cart.length >0 ?this.renderSummary():<div></div>}</div>
    )
  }
}
