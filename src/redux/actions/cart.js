export const addPizzasToCart = (pizzaObj) => ({
    type: 'ADD_PIZZAS_TO_CART',
    payload: pizzaObj

});

export const clearCart = () => ({
    type: 'CLEAR_CART', 
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
    
});

export const plusPizzaToCartItems = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
    
});

export const minusPizzaFromCartItems = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
    
});
export const onOrder = () => ({
    type: 'ORDER',

    
});
