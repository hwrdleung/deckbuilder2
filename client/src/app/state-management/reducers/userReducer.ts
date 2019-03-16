import { initialState } from '../state/userState';
import { LOGIN, LOGOUT, Actions } from "../actions/userActions";

export function userReducer (state = initialState, action: Actions) {
    switch (action.type) {

      case LOGIN:
        // Populate userState variables with the data in the payload
        return {
          isLoggedIn: action.payload.isLoggedIn,
          token: action.payload.token,
          first: action.payload.first,
          last: action.payload.last,
          email: action.payload.email,
          username: action.payload.username
        };

      case LOGOUT:
        // Clear userState
        return {
          isLoggedIn: false,
          token: '',
          first: '',
          last: '',
          email: '',
          username: ''
        }

      default: {
        return state;
      }
    }
  };