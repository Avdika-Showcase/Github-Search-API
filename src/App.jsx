import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './Components/Navbar';
// import Search from './Components/Search';
import About from './Components/About';
import WorkingArea from './Components/WorkingArea';
import { WorkingAreaContext } from './Contexts/index';

function App() {
  const [criteria, setCriteria] = useState('Repositories');

  return (
    <WorkingAreaContext.Provider value={{
      criteria,
      setCriteria
    }}>
    <BrowserRouter>
      <NavBar />
      <WorkingArea />
      <Switch>
        {/* <Route path="/" exact component={Search} /> */}
        <Route path="/About" component={About} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    </WorkingAreaContext.Provider>
  )
}

export default App;
