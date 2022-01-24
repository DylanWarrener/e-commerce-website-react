import { UserActionTypes } from "./user-types";

// Set current user to the type and payload for dispatch
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});