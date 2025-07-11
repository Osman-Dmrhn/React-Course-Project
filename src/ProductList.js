import React, { Component } from "react";
import { Card,CardText,CardBody,CardSubtitle,CardTitle, Row ,Col,Button} from "reactstrap";

export default class ProductList extends Component { 
  render() {
    return (
      <div>
        <h3>Ürünler</h3>
        <Row>
        {this.props.products.map((product) => (
            <Col sm="4" key={product.id}>
             <Card
          style={{
            width: "18rem",
          }}
          
        >
          <CardBody>
            <CardTitle tag="h5">{product.productName}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {product.quantityPerUnit}
            </CardSubtitle>
            <CardText>
              {product.unitPrice}
            </CardText>
            <Button color="primary" onClick={()=>this.props.addToCart(product)}>Sepete Ekle</Button>
          </CardBody>
        </Card>
        </Col>
          ))}
          </Row>
      </div>
    );
  }
}
