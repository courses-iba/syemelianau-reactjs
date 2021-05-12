import classNames from 'classnames';

import styles from '../styles/Input.module.css';

const Input = ({ name, type, value, placeholder, error, touched, onChange, onBlur }) => {
    const label = name[0].toUpperCase() + name.slice(1).toLowerCase();

    return (
        <div className={styles.element}>
            <label htmlFor={name}>{label}: </label>
            <input
                className={classNames(styles.input, { [styles.error]: touched && error })}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
            <span className={styles.error}>{touched && error}</span>
        </div>
    );
};

export default Input;
