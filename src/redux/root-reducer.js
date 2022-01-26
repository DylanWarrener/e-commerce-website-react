// Redux imports to combine reducers
import { combineReducers } from "redux";

// Reducer container
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});