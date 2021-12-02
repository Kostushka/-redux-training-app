import { addAllUsersAction } from '../store/reducer/usersReducer/usersReducer';

export const getUsers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((body) => dispatch(addAllUsersAction(body)))
        .catch((error) => console.log(error.message));
};
