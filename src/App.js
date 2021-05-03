import styles from './App.module.css';
import Header from './containers/Header';
import Content from './containers/Content';
import Menu from './containers/Menu';

const App = () => (
    <div className={styles.app}>
        <Header title="React App" />
        <Menu />
        <Content />
    </div>
);

export default App;
