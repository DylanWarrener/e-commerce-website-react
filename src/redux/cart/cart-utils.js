export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Check to see if there is a duplicate cart item
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id 
    );
    
    // If there is a duplicate cart item, map through and add 
    // to the quantity of the cart item
    if (existingCartItem) { 
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }]
};