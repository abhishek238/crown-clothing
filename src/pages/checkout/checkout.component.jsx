import React from 'react';
import './checkout.styles.scss'
import {createStructuredSelector} from "reselect";
import {selectCartTotal, selectItems} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOutPage = ({items, total}) => (
    <div className={'checkout-page'}>
        <div className={'checkout-header'}>
            <div className={'header-block'}>
                <span>Product</span>
            </div>
            <div className={'header-block'}>
                <span>Description</span>
            </div>
            <div className={'header-block'}>
                <span>Quantity</span>
            </div>
            <div className={'header-block'}>
                <span>Price</span>
            </div>
            <div className={'header-block'}>
                <span>Remove</span>
            </div>
        </div>
        {
            items.map(item => (
                <CheckOutItem key={item.id} item={item}/>
            ))
        }

        <div className={'total'}>
            <span>TOTAL: {total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    items: selectItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);