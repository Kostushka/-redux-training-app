import styles from './Users.module.css';

const Users = ({ users, removeUser }) => {
    return (
        <div className={styles.user}>
            {users.map((user) => (
                <div
                    onClick={() => removeUser(user.id)}
                    className={styles.name}
                    key={user.id}
                >
                    {user.name}
                </div>
            ))}
        </div>
    );
};

export default Users;
