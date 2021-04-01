import styles from './App.module.css';
import Header from './components/Header';
import Content from './components/Content';
import Card from './components/Card';

const App = () => (
    <div className={styles.app}>
        <Header title="React App" />
        <Content>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(value => (
                <Card title="Card Title" key={value}>
                    Some quick example text
                    to build on the card title
                    and make up the bulk of the card's content.
                </Card>
            ))}
        </Content>
    </div>
);

export default App;
