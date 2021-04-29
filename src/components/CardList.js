import { list } from './CardList.module.css';
import Card from './Card';

const CardList = ({ cards, readonly, editCard, checkCard }) => (
    <div className={list}>
        {cards.map(({ id, content, checked }) => (
            <Card
                key={id}
                content={content}
                checked={checked}
                readonly={readonly}
                onEdit={newContent => editCard(id, newContent)}
                onCheck={newCheck => checkCard(id, newCheck)}
            />
        ))}
    </div>
);

export default CardList;
