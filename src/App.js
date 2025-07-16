import { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CardList from "./CardList";
import FormDemo from "./FormDemo";
import FormDemo1 from "./FormDemo1";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  addToCart = (product) => {
    let newcart = this.state.cart;
    var addedItem = newcart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newcart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newcart });
    alertify.success(product.productName + "Sepete Eklendi");
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({ products: response }));
  };

  componentDidMount() {
    this.getProducts();
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + "Sepetten Silindi");
  };
  render() {
    let Infocategory = { title: "Kategori Listesi" };
    let Infoproduct = { title: "Ürün Listesi", ürün: "Ürün1" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={Infocategory}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProductList
                      addToCart={this.addToCart}
                      products={this.state.products}
                      info={Infoproduct}
                    />
                  }
                />
                <Route
                  path="cart"
                  element={
                    <CardList
                      addToCart={this.addToCart}
                      products={this.state.products}
                      info={Infoproduct}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                />
                <Route path="*" Component={NotFound}/>
                <Route path="form" Component={FormDemo}></Route>
                <Route path="form1" Component={FormDemo1}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
