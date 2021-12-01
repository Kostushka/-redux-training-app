export const ADD_USERS = 'ADD_USERS';
export const GET_USERS = 'GET_USERS';

const initialState = {
    users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return { ...state, users: [...state.users, action.payload] };
        case GET_USERS:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };

        default:
            return state;
    }
};

export const addUserAction = (payload) => ({
    type: ADD_USERS,
    payload: payload,
});
export const removeUserAction = (payload) => ({
    type: GET_USERS,
    payload: payload,
});
