import {createStore} from 'redux';
import cartReducer from './rootReducer';

const store = createStore(cartReducer);

export default store;