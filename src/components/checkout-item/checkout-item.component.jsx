import React from 'react';
import './checkout-item.styles.scss';
import {addCartItem, clearCartItem, removeCartItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckOutItem = ({item, addCartItem, removeCartItem, clearCartItem}) => {

    const {imageUrl, price, name, quantity} = item;
    return (
        <div className={'checkout-item'}>
            <div className={'image-container'}>
                <img src={imageUrl} alt={'item'}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className={'arrow'} onClick={() => removeCartItem(item)}>&#10094;</div>
                <span className={'value'}>{quantity}</span>
                <div className={'arrow'} onClick={() => addCartItem(item)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearCartItem(item)}>&#10005;</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item)),
    removeCartItem: item => dispatch(removeCartItem(item)),
    clearCartItem: item => dispatch(clearCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);