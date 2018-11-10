export interface UserState {
    isLoggedIn: boolean,
    token: string,
    first: string,
    last: string,
    email: string,
    username: string;
}

export const initialState: UserState = {
    isLoggedIn: false,
    token: '',
    first: '',
    last: '',
    email: '',
    username: ''
};