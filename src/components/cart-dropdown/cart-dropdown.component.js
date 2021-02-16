import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss';
import {selectItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({items, history, dispatch}) => (
    <div className={'cart-dropdown'}>
        <div className={'cart-items'}>
            {
                items.length ? (
                    items.map(item => (
                        <CartItem key={item.id} item={item}/>
                    ))) : (
                    <span className={'empty-message'}>Your cart is empty!</span>
                )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    items: selectItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));