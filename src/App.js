import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import styles from './App.module.css';
import Header from './containers/Header';
import Menu from './containers/Menu';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
    <BrowserRouter>
        <div className={styles.app}>
            <Header title="React App" />
            <Menu />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/not-found">
                    <NotFoundPage />
                </Route>
                <Redirect to="/not-found" />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
