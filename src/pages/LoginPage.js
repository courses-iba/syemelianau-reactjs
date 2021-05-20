import { useState } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import * as Yup from 'yup';

import styles from './LoginPage.module.css';
import { element, input } from '../styles/Input.module.css';
import Input from '../components/Input';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Too Short!')
            .matches(/(\D\d|\d\D)+/g, 'Must contain numbers & characters')
            .required('Required')
    });

    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting
    } = useFormik({
        initialValues: credentials,
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                setCredentials(values);
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }
    });

    return (
        <div className={styles.login}>
            <form className={styles.card} onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={values.email}
                    touched={touched.email}
                    error={errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="12345678"
                    value={values.password}
                    touched={touched.password}
                    error={errors.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className={element}>
                    <button
                        className={classNames(input, styles.button)}
                        disabled={isSubmitting}
                        type="submit"
                        children="Login"
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
