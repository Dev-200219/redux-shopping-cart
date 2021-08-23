import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Preview from "./Components/Preview";

let App = ()=>{
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>

      <Route exact path="/">
      <Home/>
      </Route>

      <Route exact path="/cart">
      <Cart/>
      </Route>

      <Route exact path="/preview">
      <Preview/>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
