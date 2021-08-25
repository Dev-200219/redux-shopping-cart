import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Preview from "./Components/Preview";
import { useSelector } from "react-redux";


let App = ()=>{
  let state = useSelector((state)=>{
    console.log(state);
  })
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

      <Route exact path="/preview/:id">
      <Preview/>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
