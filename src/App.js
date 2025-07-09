import { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = { currentCategory: "", products: [],cart:[] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  addToCart=(product)=>{
    let newcart=this.state.cart
    var addedItem=newcart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newcart.push({product:product,quantity:1})
    }
    this.setState({cart:newcart});
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if(categoryId){
      url=url+"?categoryId=" + categoryId
    }
      

    fetch(url)
        .then((response) => response.json())
        .then((response) => this.setState({ products: response }));
  };

  componentDidMount() {
    this.getProducts();
  }
  render() {
    let Infocategory = { title: "Kategori Listesi" };
    let Infoproduct = { title: "Ürün Listesi", ürün: "Ürün1" };
    return (
      <div>
        <Container>
            <Navi cart={this.state.cart}/>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={Infocategory}
              />
            </Col>
            <Col xs="9">
              <ProductList
              addToCart={this.addToCart} 
              products={this.state.products} 
              info={Infoproduct} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
