export const addItemToCart = (cartItems, itemToAdd) => {
    const itemAlreadyExists = cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
    );

    if (itemAlreadyExists) {
        return cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    else return [...cartItems,{...itemToAdd,quantity: 1}]; 
};
