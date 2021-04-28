import { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import styles from './App.module.css';
import { iButton } from './styles/Button.module.css';
import Header from './containers/Header';
import Content from './containers/Content';
import CardList from './components/CardList';
import Menu from './containers/Menu';
import Checkbox from './components/Checkbox';

const App = () => {
    const [readonly, setReadonly] = useState(false);
    const [cards, setCards] = useState([...Array(18).keys()].map((value, index) => ({
        id: index,
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

    return (
        <div className={styles.app}>
            <Header title="React App" />
            <Menu>
                <Checkbox
                    name="Readonly"
                    checked={readonly}
                    onChange={handleReadonly}
                />
                <button
                    className={iButton}
                    onClick={handleDelete}
                    children={<MdDelete color="#1675e0" />}
                />
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
