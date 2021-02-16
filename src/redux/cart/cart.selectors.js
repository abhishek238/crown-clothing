import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.isHidden
);

export const selectItems = createSelector(
    [selectCart],
    (cart) => cart.items
)

export const selectItemsCount = createSelector(
    [selectItems],
    items => items.reduce((totalQty, cartItem) => totalQty + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectItems],
    items => items.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
)