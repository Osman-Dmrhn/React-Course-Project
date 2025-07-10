import React, { Component } from "react";
import { Badge, ListGroup, ListGroupItem, Col, Row } from "reactstrap";

export default class CardList extends Component {
  state = {
    currentProuct: "",
  };
  renderSummary() {
    return (
      <ListGroup>
        {this.props.cart.map((product) => (
          <ListGroupItem
            key={product.product.id}
            onClick={() =>
              this.setState({ currentProduct: product.product.productName })
            }
            active={product.product.productName === this.state.currentProduct}
          >
            <Row>
                <Col xs="3">{product.product.productName}</Col>
                <Col xs="1">{product.quantity}</Col>
            <Col xs="1">
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(product.product)}
              >
                X
              </Badge>
            </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
  render() {
    return (
      <div>
        <h3>Sepetiniz</h3>
        {this.props.cart.length > 0 ? this.renderSummary() : <div></div>}
      </div>
    );
  }
}
