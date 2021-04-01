import { content } from './Content.module.css';

const Content = ({ children }) => (
    <div className={content}>{children}</div>
);

export default Content;
