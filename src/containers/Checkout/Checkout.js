import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutContinueHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }
    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }
    render() {
        if (!this.props.ingredients) {
            return <Redirect to='/' />
        }
        return(
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutContinue={this.checkoutContinueHandler}
                    cancelCheckout={this.cancelCheckoutHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        isPurchaseStart: state.order.isPurchaseStart
    }
}

export default connect(mapStateToProps)(Checkout);