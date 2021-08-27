import './styles.css';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Details from "./pages/Details";
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
        <Footer />
      </StoreProvider>
    </Router>
  );
}

export default App;
