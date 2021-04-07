import { useState } from 'react';

import styles from './App.module.css';
import Header from './components/Header';
import Content from './components/Content';
import Card from './components/Card';
import Menu from './components/Menu';
import Checkbox from './components/Checkbox';

const App = () => {
    const [readonly, setReadonly] = useState(false);
    const [data, setData] = useState([...Array(18).keys()].map((value, index) => ({
        id: index,
        content: {
            title: `Card Title ${value}`,
            description: `
                ${value}.
                Some quick example text
                to build on the card title
                and make up the bulk of the card's content.
            `.replace(/\s+/g, ' ').trim()
        }
    })));

    const editCard = id => (
        content => setData(data.map(value => value.id === id ? { id, content } : value))
    );
    const toggleReadonly = () => setReadonly(!readonly);

    const cards = data.map(({ id, content }) => (
        <Card
            key={id}
            content={content}
            readonly={readonly}
            edit={editCard(id)}
        />
    ));

    return (
        <div className={styles.app}>
            <Header title="React App" />
            <Menu>
                <Checkbox
                    name="Readonly"
                    checked={readonly}
                    onChange={toggleReadonly}
                />
            </Menu>
            <Content>{cards}</Content>
        </div>
    );
};

export default App;
