export const addItemsToCart = (cartItems, item) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);
    if(existingCartItem){
        return cartItems.map(cartItem =>
            (cartItem.id === item.id) ? {...cartItem, quantity: ++cartItem.quantity} : cartItem
        )
    }

    return  [...cartItems, {...item, quantity: 1}];
}

export const removeItemFromCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);
    if(existingCartItem){
        return cartItems.map(cartItem =>
            (cartItem.id === item.id) ? {...cartItem, quantity: --cartItem.quantity} : cartItem
        ).filter(item => item.quantity > 0);
    }

    return cartItems;
}