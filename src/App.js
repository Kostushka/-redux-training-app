import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './App.module.css';
import {
    ADD_CASH,
    GET_CASH,
    REMOVE_CASH,
} from './store/reducer/cashReducer/cashReducer';

const App = () => {
    const cash = useSelector((state) => state.cash.cash);
    const dispatch = useDispatch();

    const addCash = (cash) => {
        dispatch({ type: ADD_CASH, payload: cash });
    };

    const getCash = (cash) => {
        dispatch({ type: GET_CASH, payload: cash });
    };

    const removeCash = () => {
        dispatch({ type: REMOVE_CASH, payload: 0 });
    };

    return (
        <div className={styles.container}>
            <div className={styles.count}>{cash}</div>
            <div>
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
            </div>
        </div>
    );
};

export default App;
