import React from 'react';
import Header from './modules/common/components/Header'
import Home from './modules/common/views/Home'
import SignupPage from './modules/user/views/SignupPage'
import ContactPage from './modules/contact/views/ContactPage'
import ContactDetailsPage from './modules/contact/views/ContactDetailsPage'
import ContactEditPage from './modules/contact/views/ContactEditPage'
import StatisticPage from './modules/common/views/StatisticPage'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/statistic" component={StatisticPage} />
        <Route exact path="/contact/edit/:id?" component={ContactEditPage} />
        <Route exact path="/contact/:id" component={ContactDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
