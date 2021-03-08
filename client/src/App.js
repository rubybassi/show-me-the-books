import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
