import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './App.module.css';
import Header from './containers/Header';
import Menu from './containers/Menu';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import CardPage from './pages/CardPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
    const { role } = useSelector(state => state.userReducer);

    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Header title="Notes App" />
                <Menu />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/not-found" component={NotFoundPage} />
                    <Route exact path="/card/:id" component={CardPage} />
                    {role === 'admin' && <Route exact path="/settings" component={SettingsPage} />}
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
