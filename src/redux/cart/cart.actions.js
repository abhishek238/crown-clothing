import {CartActionTypes} from "./cart.types";

export const toggleCartHidden = isHidden => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: isHidden
});

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const removeCartItem = item => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
});