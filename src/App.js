import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdDelete, MdAdd } from 'react-icons/md';

import styles from './App.module.css';
import { iButton } from './styles/Button.module.css';
import Header from './containers/Header';
import Content from './containers/Content';
import Menu from './containers/Menu';
import Checkbox from './components/Checkbox';
import CardList from './components/CardList';

const App = () => {
    const iProps = { color: '#1675e0' };

    const [readonly, setReadonly] = useState(false);
    const [cards, setCards] = useState([...Array(18).keys()].map(value => ({
        id: uuid(),
        content: {
            title: `Card Title ${value}`,
            description: `
                ${value}.
                Some quick example text
                to build on the card title
                and make up the bulk of the card's content.
            `.replace(/\s+/g, ' ').trim()
        },
        checked: null
    })));

    const handleReadonly = () => setReadonly(!readonly);
    const handleEdit = (id, content) => setCards(cards.map(card => card.id === id ? { ...card, content } : card));
    const handleCheck = (id, checked) => setCards(cards.map(card => card.id === id ? { ...card, checked } : card));
    const handleDelete = () => setCards(cards.filter(({ checked }) => !checked));
    const handleAdd = () => setCards([...cards, {
        id: uuid(),
        content: {
            title: 'Edit me!',
            description: 'Me too :)'
        },
        checked: Math.floor(Math.random() * 5) + 1
    }]);

    return (
        <div className={styles.app}>
            <Header title="React App" />
            <Menu>
                <Checkbox name="Readonly" checked={readonly} onChange={handleReadonly} />
                <button className={iButton} onClick={handleAdd} children={<MdAdd {...iProps} />} />
                <button className={iButton} onClick={handleDelete} children={<MdDelete {...iProps} />} />
            </Menu>
            <Content>
                {cards.length ? (
                    <CardList
                        cards={cards}
                        readonly={readonly}
                        editCard={handleEdit}
                        checkCard={handleCheck}
                    />
                ) : <span className={styles.empty}>Cards not found</span>}
            </Content>
        </div>
    );
};

export default App;
