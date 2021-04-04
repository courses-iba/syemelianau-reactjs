import styles from './App.module.css';
import Header from './components/Header';
import Content from './components/Content';
import Card from './components/Card';

const App = () => {
    const data = [...Array(18).keys()].map((value, index) => ({
        id: index,
        title: `Card Title ${value}`,
        content: `
            ${value}.
            Some quick example text
            to build on the card title
            and make up the bulk of the card's content.
        `.replace(/\s+/g, ' ').trim()
    }));

    const cards = data.map(({ id, title, content }) => (
        <Card
            key={id}
            title={title}
            children={content}
        />
    ));

    return (
        <div className={styles.app}>
            <Header title="React App" />
            <Content>{cards}</Content>
        </div>
    );
};

export default App;
