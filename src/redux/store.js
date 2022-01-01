import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'
import { combineReducers } from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
});

const composedEnhancer = compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, composedEnhancer);


export default store


//^ Более старое написание 

// import filtersReducer from "./reducers/filters";
// import pizzasReducer from "./reducers/pizzas";
// import cartReducer from "./reducers/cart";

// const rootReducer = combineReducers({
//     filters: filtersReducer,
//     pizzas: pizzasReducer,
//     cart: cartReducer,
// });