import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './components/Main';
import OtherDays from './components/otherdays';

const App = () => {
  return(
    <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/forecast" component={OtherDays} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;