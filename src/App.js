import { Container,Col,Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  let Infocategory={title:"Kategori Listesi"}
  let Infoproduct={title:"Ürün Listesi",ürün:"Ürün1"}
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs='3'>
            <CategoryList info={Infocategory} />
          </Col>
          <Col xs='9'>
            <ProductList info={Infoproduct}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
