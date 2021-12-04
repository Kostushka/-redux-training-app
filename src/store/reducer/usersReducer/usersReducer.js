export const ADD_USERS = 'ADD_USERS';
export const GET_USERS = 'GET_USERS';
export const GET_ALL_USERS = 'GET_ALL_USERS';

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
        case GET_ALL_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
            };

        default:
            return state;
    }
};

export const addUserAction = (payload) => ({
    type: ADD_USERS,
    payload,
});
export const removeUserAction = (payload) => ({
    type: GET_USERS,
    payload,
});
export const addAllUsersAction = (payload) => ({
    type: GET_ALL_USERS,
    payload,
});
