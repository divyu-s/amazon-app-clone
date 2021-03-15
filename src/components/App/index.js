import "./App.css";
import Header from "../Header";
import Home from "../Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "../Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        
      <Header/>
        <Switch>
        <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
