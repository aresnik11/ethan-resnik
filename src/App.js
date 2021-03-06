import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Bio from "./components/Bio";
import CompContainer from "./components/CompContainer";
import Recognition from "./components/Recognition";
import Photos from "./components/Photos";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Error from "./components/Error";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ScrollToTop>
          <Switch>
            <Route path="/bio" component={Bio} />
            <Route path="/compositions" component={CompContainer} />
            <Route path="/recognition" component={Recognition} />
            <Route path="/photos" component={Photos} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Homepage} />
            <Route component={Error} />
          </Switch>
        </ScrollToTop>
      </div>
      {/* <div>Last updated September, 2020</div> */}
    </div>
  );
};

export default App;
