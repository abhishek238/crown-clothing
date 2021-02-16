import React from 'react';
import {connect} from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss';
import {selectItems} from "../../redux/cart/cart.selectors";

const CartDropdown = ({items}) => (
    <div className={'cart-dropdown'}>
        <div className={'cart-items'}>
            {items.map(item => (
                <CartItem key={item.id} item={item}/>
            ))}
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    items: selectItems(state)
});

export default connect(mapStateToProps)(CartDropdown);