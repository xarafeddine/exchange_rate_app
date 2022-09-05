const initialState = {
    name: "xaraf",
    LoggedIn: false
}

export function userReducer(state = initialState, action){
    return state;
}

export const getName = state => state.user.name