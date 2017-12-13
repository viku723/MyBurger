import React, { Component } from 'react';
import Route from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxx/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders'
import * as actions from '../../store/Actions/index';

const INGREDIENT_PRICE = {
    bacon: 0.12,
    salad: 0.33,
    cheese: 0.23,
    meat: 0.44
};

class BurgerBuilder extends Component {
    state = {
        isPurchasable: false,
        isPurchasing: false
    }

    componentWillMount() {
        this.props.onPurchaseBurgerInit();
        this.props.onInitIngredient();
    }
    addIngredientHandler = (type) => {
        const oldCount = this.props.ingredients[type];
        const updatedCount = oldCount + 1;
        let updatedIngredient = {
            ...this.props.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.props.totalPrice;
        const totalPrice = oldPrice + INGREDIENT_PRICE[type];

        this.props.onIngredientsAdd(updatedIngredient, totalPrice);
        this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.props.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        let updatedIngredient = {
            ...this.props.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.props.totalPrice;
        const totalPrice = oldPrice - INGREDIENT_PRICE[type];

        this.props.onIngredientsRemove(updatedIngredient, totalPrice);
        this.updatePurchaseState(updatedIngredient);
    }

    purchasingHandler = () => {
        this.setState({
            isPurchasing: true
        });
    }

    updatePurchaseState = (ingredients) =>{
        const sum = Object.keys(ingredients).map(ingKey => {
            return ingredients[ingKey]
        }).reduce((oldValue, currentValue) => {
            return oldValue+currentValue;
        }, 0)

        this.setState({
            isPurchasable: sum > 0
        })
    }
    cancelPurchasingHandler = () => {
        this.setState({
            isPurchasing: false
        });
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        if(this.props.ingredients == null) {
            return null;
        }
        return(
            <Aux>
                <Modal show={this.state.isPurchasing} closeModal={this.cancelPurchasingHandler}>
                    <OrderSummary ingredients = {this.props.ingredients}
                        cancelPurchase={this.cancelPurchasingHandler}
                        purchaseContinue = {this.purchaseContinueHandler}
                        price={this.props.totalPrice.toFixed(2)} />
                </Modal>
                <div>
                    <Burger ingredients = {this.props.ingredients} />
                </div>
                <div>
                    <BuildControls addIngredient = {this.addIngredientHandler}
                                   removeIngredient = {this.removeIngredientHandler}
                                   price = {this.props.totalPrice}
                                   isPurchasable = {this.state.isPurchasable}
                                   purchasing = {this.purchasingHandler} />
                </div>
            </Aux>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientsAdd: (ingredients, totalPrice) => {
            return dispatch(actions.addIngredient(ingredients, totalPrice))
        },
        onIngredientsRemove: (ingredients, totalPrice) => {
            return dispatch(actions.removeIngredient(ingredients, totalPrice))
        },
        onInitIngredient: () => {
            return dispatch(actions.initIngredient())
        },
        onPurchaseBurgerInit: () => {
            return dispatch(actions.purchaseBurgerInit())
        }
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(BurgerBuilder);