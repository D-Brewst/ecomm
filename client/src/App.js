import './styles.css';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Canceled from "./pages/Canceled";
import Logout from "./pages/Logout";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 
import { StoreProvider } from './utils/GlobalState';

function App() {

  return (
    <Router>
      <StoreProvider> 
        <NavBar/>
        <div id="main">
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/products'>
            <Products/>
          </Route>
          <Route exact path='/products/:id'>
            <Details/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <Signup/>
          </Route>
          <Route exact path='/checkout'>
            <Checkout/>
          </Route>
          <Route exact path='/success'>
            <Success/>
          </Route>
          <Route exact path='/canceled'>
            <Canceled/>
          </Route>
          <Route exact path='/logout'>
            <Logout/>
          </Route>
        </div>
        <Footer />
      </StoreProvider>
    </Router>
  );
}

export default App;
