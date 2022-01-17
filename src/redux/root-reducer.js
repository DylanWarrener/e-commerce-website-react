// Redux imports to combine reducers
import { combineReducers } from "redux";

// User reducer container
import UserReducer from "./user/user-reducer";

export default combineReducers({
    user: UserReducer
});