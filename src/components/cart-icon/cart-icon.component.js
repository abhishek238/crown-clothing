import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from "react-redux";

import './cart-icon.styles.scss';
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartHidden, items}) => (
    <div className={'cart-icon'} onClick={toggleCartHidden}>
        <ShoppingIcon className={'shopping-icon'}/>
        <span className={'item-count'}>{items.length}</span>
    </div>
);

const mapStateToProps = state => ({
    items: state.cart.items
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);