import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage.jsx';
import Home from './routes/Home/Home.jsx';
import My from './routes/My/My.jsx';
import Company from './routes/Company/Company.jsx';
import Firm from './routes/Firm/Firm.jsx';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/my" exact component={My} />
        <Route path="/firm" exact component={Firm} />
        <Route path="/company" exact component={Company} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
