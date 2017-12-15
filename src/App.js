import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/Actions/index';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  componentDidMount() {
      this.props.onAuthAutoLogin();
  }
  render() {
    console.log('dddd');
    return (
      <div>
          <Layout>
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/logout" component={Logout} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onAuthAutoLogin: () => { dispatch(actions.authCheckState()) }
  }
}
export default withRouter(connect(null, mapDispatchToProps)(App));
