import React from 'react';
import './checkout-item.styles.scss';
import {removeCartItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckOutItem = ({item, item: {id, imageUrl, price, name, quantity, removeCartItem}}) => {
    return (
        <div className={'checkout-item'}>
            <div className={'image-container'}>
                <img src={imageUrl} alt={'item'}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeCartItem(item)}>&#10005;</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeCartItem: item => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);