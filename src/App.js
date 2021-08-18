import './styles.css';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/products'>
        <Products/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
    </Router>
  );
}

export default App;
