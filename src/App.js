import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUsers } from './api/getUsers';
import styles from './App.module.css';
import Users from './components/Users';
import {
    addCashAction,
    getCashAction,
    removeCashAction,
} from './store/reducer/cashReducer/cashReducer';
import {
    addUserAction,
    removeUserAction,
} from './store/reducer/usersReducer/usersReducer';

const App = () => {
    const cash = useSelector((state) => state.cash.cash);
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    const addCash = (cash) => {
        dispatch(addCashAction(cash));
    };

    const getCash = (cash) => {
        dispatch(getCashAction(cash));
    };

    const removeCash = () => {
        dispatch(removeCashAction(0));
    };

    const addUser = (name) => {
        const user = {
            id: Date.now(),
            name,
        };
        dispatch(addUserAction(user));
    };

    const removeUser = (id) => {
        dispatch(removeUserAction(id));
    };

    return (
        <div className={styles.container}>
            <div className={styles.count}>{cash}</div>
            <div className={styles.buttons}>
                <button
                    className={styles.btn}
                    onClick={() => addCash(Number(prompt('Введите число', 5)))}
                >
                    Добавить
                </button>
                <button
                    className={styles.btn}
                    onClick={() => getCash(Number(prompt('Введите число', 5)))}
                >
                    Снять
                </button>
                <button className={styles.btn} onClick={removeCash}>
                    Обнулить
                </button>
                <button
                    className={styles.btn}
                    onClick={() => addUser(prompt())}
                >
                    Добавить пользователя
                </button>
                <button
                    onClick={() => {
                        dispatch(getUsers());
                    }}
                    className={styles.btn}
                >
                    Получить всех пользователей
                </button>
            </div>
            <Users users={users} removeUser={removeUser} />
        </div>
    );
};

export default App;
