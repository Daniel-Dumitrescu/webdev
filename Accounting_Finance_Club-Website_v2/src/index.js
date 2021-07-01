import React from "react";
import ReactDOM from "react-dom";
import BottomNavbar from './components/Navbar';



import "./styles.css";

import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Files from "./components/Files";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routers = () => (
  <div>
    <Switch>
      <Route path='/Home' component={Home} exact={true}/>
      <Route path='/Calendar' component={Calendar} exact={true}/>
      <Route path='/Files' component={Files} exact={true}/>
    </Switch>
  </div>
);

class App {
render() {
return (
  <div>
      <BrowserRouter>
          <div>
             <Routers />
             <BottomNavbar/> 
          </div>
      </BrowserRouter>
  </div>
);
}
}

const rootElement = document.getElementById("root");
document.body.style = 'background: black;';
ReactDOM.render(
    <BrowserRouter>
          <div>
             <BottomNavbar/> 
             <Routers />
          </div>
        </BrowserRouter>,
    rootElement);

export default App;






