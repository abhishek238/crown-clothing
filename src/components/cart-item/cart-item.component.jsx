import React from 'react';
import './cart-item.styles.scss';
import {addCartItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <div className={'cart-item'}>
            <img src={imageUrl} alt={'item'}/>
            <div className={'item-details'}>
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price}</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);