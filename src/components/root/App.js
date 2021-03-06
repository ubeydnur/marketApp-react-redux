import Dashboard from "./Dashboard";
import Navi from '../navi/Navi'
import CartDetail from "../cart/CartDetail"
import { Container } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound"

function App() {
  return (
    <div>
      <Navi />
      <Container>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" component={Dashboard} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route path="/cart" component={CartDetail} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
