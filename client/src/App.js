import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from '../src/pages/Home'
import SignUp from '../src/pages/SignUp'

function App() {
  return (
    <Router>
    <div className="App container col-12">
      {/* <LoginBtn/> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      {/* <Route exact path="/contact" component={Contact} /> */}
      {/* <Footer /> */}
    </div>
  </Router>
  );
}

export default App;
