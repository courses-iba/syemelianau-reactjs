import { useState } from 'react';
import classNames from 'classnames';

import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    return (
        <div className={styles.login}>
            <form className={styles.card}>
                <div className={styles.element}>
                    <label htmlFor="username">Username: </label>
                    <input
                        className={styles.input}
                        name="username"
                        type="text"
                        value={credentials.username}
                        onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                    />
                </div>
                <div className={styles.element}>
                    <label htmlFor="password">Password: </label>
                    <input
                        className={styles.input}
                        name="password"
                        type="password"
                        value={credentials.password}
                        onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                    />
                </div>
                <div className={styles.element}>
                    <button className={classNames(styles.input, styles.button)} type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
