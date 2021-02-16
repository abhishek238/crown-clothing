import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectItems = createSelector(
    [selectCart],
    (cart) => cart.items
)

export const selectItemsCount = createSelector(
    [selectItems],
    items => items.reduce((totalQty, cartItem) => totalQty + cartItem.quantity, 0)
)