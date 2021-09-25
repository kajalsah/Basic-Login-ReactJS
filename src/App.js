import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Dashboard, Register } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/Dashboard" exact component={() => <Dashboard/>} />
          <Route path="/Register" exact component={() => <Register/>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
