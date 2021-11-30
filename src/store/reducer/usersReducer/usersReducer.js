export const ADD_USERS = 'ADD_USERS';
export const GET_USERS = 'GET_USERS';

const initialState = {
    users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return { ...state };
        case GET_USERS:
            return { ...state };

        default:
            return state;
    }
};
