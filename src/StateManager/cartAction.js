export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addToCart = cart => {
    return {type: ADD_TO_CART, cart}
}

export const removeFromCart = id => {
    return{type: REMOVE_CART, id}
}
export const setLogInUser = (user) =>{
    return{type: SET_USER, user }
}
export const removeLoginUser = v =>{
    return{type: REMOVE_USER, v}
}