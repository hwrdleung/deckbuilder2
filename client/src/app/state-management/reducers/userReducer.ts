import {ActionReducer} from "@ngrx/store";
import {UserState, initialState} from '../state/userState';
import {LOGIN, LOGOUT, Actions} from "../actions/userActions";

export const userReducer: ActionReducer<UserState> =
  (state = initialState, action: Actions) => {
    switch (action.type) {
      
        case LOGIN : 
        return {
            isLoggedIn: action.payload.isLoggedIn,
            token: action.payload.token,
            first: action.payload.first,
            last: action.payload.last,
            email: action.payload.email,
            username: action.payload.username
        };

        case LOGOUT:
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