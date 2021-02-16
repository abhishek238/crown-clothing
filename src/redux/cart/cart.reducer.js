import {CartActionTypes} from "./cart.types";
import {addItemsToCart, removeItemFromCart} from "./cart.util";

const INITIAL_STATE = {
    isHidden: true,
    items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            };
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                items: addItemsToCart(state.items, action.payload)
            };
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                items: removeItemFromCart(state.items, action.payload)
            };
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                items: [...state.items.filter(item => item.id !== action.payload.id)]
            };
        default:
            return state;
    }
}

export default cartReducer;