import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChackOut from './Components/ChackOut';
import { Provider } from 'react-redux';
import store from './StateManager';
import Login from './Components/Login';
import Footer from './Components/Footer';
import ChackOutProduct from './Components/ChackOutProduct';
import Success from './Components/Success';
import ProductDitails from './Components/ProductDitails';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/chackout">
            <ChackOut></ChackOut>
          </Route>
          <Route path="/product/:id">
            <ProductDitails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chackOutProduct">
            <ChackOutProduct></ChackOutProduct>
          </Route>
          <Route path="/success">
            <Success></Success>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Provider>

  );
}

export default App;
