import {CartActionTypes} from "./cart.types";

export const toggleCartHidden = isHidden => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: isHidden
});

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});