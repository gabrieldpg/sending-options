import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CardOptions from './components/CardOptions';
import SendDocument from './components/SendDocument';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          {/*<Route path="/:document/:card" component={ SendDocument } />
          <Route path="/:document" component={ CardOptions } />*/}
        </Switch>
    </BrowserRouter>
  );
}

export default App;