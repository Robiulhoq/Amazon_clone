import { ADD_TO_CART, REMOVE_CART,REMOVE_USER,SET_USER } from  "./cartAction";       

const initialState = {
    cart:[],
    loginUser:null
}
const cartReducer = (state=initialState, action) =>{
        switch(action.type){
            case ADD_TO_CART:
                    const newCart = action.cart;
                    const setNewCart = [...state.cart, newCart] 
                return {
                    ...state,
                    cart: setNewCart
                };
            case REMOVE_CART:
                const index = state.cart.findIndex((cartItem) => cartItem.id === action.id
                );
                console.log(index);
                let newRemoveCart = [...state.cart];
                if(index >= 0){
                    newRemoveCart.splice(index, 1);
                } else{
                    console.warn(`Can remove product (id:${action.id}) as its not in basket`)
                }
                return {
                    ...state,
                    cart:   newRemoveCart
                }
                case SET_USER:
                    
                    return{
                        ...state,
                        loginUser:action.user
                        
                    };
                case REMOVE_USER:
                    return{
                        ...state,
                        loginUser:action.v
                    }    
                
                //     const id = action.id;
                //     const remainingCart = state.cart.filter(item =>item.id !== id);
                // return {cart: remainingCart} 
                default:return state;
        }
}
export default cartReducer;