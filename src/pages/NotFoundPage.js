import { page, code, message } from './NotFoundPage.module.css';

const NotFoundPage = () => (
    <div className={page}>
        <span className={code}>404</span>
        <span className={message}>Page not found</span>
    </div>
);

export default NotFoundPage;
