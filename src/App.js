import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import  Cover  from './components/Cover';
// import Team  from './Team';
// import Sidebar from './components/Sidebar';
// import background from './assets/img/netflix-bg.jpg'

function App() {
  return (
    <div style={{background:'linear-gradient(black, transparent, black)'}} >
      <React.Fragment>
        <Router>
          {/* <Sidebar /> */}
          <NavigationBar />
          <Switch>
           <Route exact path="/" component={Cover} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
