import React, { Component } from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders'

const INGREDIENT_PRICE = {
    bacon: 0.12,
    salad: 0.33,
    cheese: 0.23,
    meat: 0.44
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        isPurchasable: false,
        isPurchasing: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        let updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const totalPrice = oldPrice + INGREDIENT_PRICE[type];

        this.setState({
            ingredients: updatedIngredient,
            totalPrice: totalPrice
        });
        this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        let updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const totalPrice = oldPrice - INGREDIENT_PRICE[type];

        this.setState({
            ingredients: updatedIngredient,
            totalPrice: totalPrice
        });
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
        //alert('continue');
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Vivek',
                address: {
                    street: '1st cross road',
                    zip: '12345',
                    country: 'India'
                },
                deliveryType: 'fast'
            }
        }
        axios.post('/orders.json', order)
            .then((Response) => {
                console.log(Response);
            })
            .catch((Error) => {
                console.log(Error);
            })
    }

    render() {
        return(
            <Aux>
                <Modal show={this.state.isPurchasing} closeModal={this.cancelPurchasingHandler}>
                    <OrderSummary ingredients = {this.state.ingredients}
                        cancelPurchase={this.cancelPurchasingHandler}
                        purchaseContinue = {this.purchaseContinueHandler}
                        price={this.state.totalPrice.toFixed(2)} />
                </Modal>
                <div>
                    <Burger ingredients = {this.state.ingredients} />
                </div>
                <div>
                    <BuildControls addIngredient = {this.addIngredientHandler}
                                   removeIngredient = {this.removeIngredientHandler}
                                   price = {this.state.totalPrice}
                                   isPurchasable = {this.state.isPurchasable}
                                   purchasing = {this.purchasingHandler} />
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder;