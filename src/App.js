import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import styles from './App.module.css';
import Header from './containers/Header';
import Menu from './containers/Menu';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import CardPage from './pages/CardPage';

const App = () => (
    <BrowserRouter>
        <div className={styles.app}>
            <Header title="Notes App" />
            <Menu />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/not-found" component={NotFoundPage} />
                <Route exact path="/card/:id" component={CardPage} />
                <Redirect to="/not-found" />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
