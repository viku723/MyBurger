import React, { Component } from 'react'
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from 'axios';
import * as actions from '../../../store/Actions/index';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    componentWillMount() {
        console.log(' render()')
    }
    orderHandler = ( event ) => {
        event.preventDefault();
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Vivek',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        order.localId = this.props.localId;
        this.props.onPurchase(order, this.props.idToken);
    }
    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.props.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        idToken: state.auth.idToken,
        localId: state.auth.localId
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        onPurchase: (orderData, idToken) => {
            dispatch(actions.purchaseBurger(orderData, idToken))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(ContactData);