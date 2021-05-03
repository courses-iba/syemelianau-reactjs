import { content } from './Content.module.css';
import CardList from '../components/CardList';

const Content = () => (
    <div className={content}>
        <CardList placeholder="Cards not found" />
    </div>
);

export default Content;
