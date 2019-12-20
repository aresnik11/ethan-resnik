import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Bio from './components/Bio';
import Works from './components/Compositions';
import Awards from './components/Recognition';
import Photos from './components/Photos';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Error from './components/Error';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Switch>
          <Route path="/bio" component={Bio} />
          <Route path="/compositions" component={Works} />
          <Route path="/recognition" component={Awards} />
          <Route path="/photos" component={Photos} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Homepage} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
