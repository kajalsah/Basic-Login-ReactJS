import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Register } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/Contact" exact component={() => <Contact/>} />
          <Route path="/Register" exact component={() => <Register/>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
