import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './Components/Navbar';
// import Search from './Components/Search';
import About from './Components/About';
import WorkingArea from './Components/WorkingArea';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <WorkingArea />
      <Switch>
        {/* <Route path="/" exact component={Search} /> */}
        <Route path="/About" component={About} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
