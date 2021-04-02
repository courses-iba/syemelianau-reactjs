import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

import styles from './Checkbox.module.css';

const Checkbox = ({ name, checked, onChange }) => {
    const iconProps = {
        color: checked ? '#1675e0' : '#8e8e93',
        size: 24
    };

    const checkbox = [styles.checkbox, checked ? styles.checked : styles.unchecked].join(' ');
    const text = [styles.name, checked ? styles.checkedName : styles.uncheckedName].join(' ');
    const icon = checked ? <MdCheckBox {...iconProps} /> : <MdCheckBoxOutlineBlank {...iconProps} />;

    return (
        <button className={checkbox} onClick={onChange}>
            {icon}
            <span className={text}>{name}</span>
        </button>
    );
};

export default Checkbox;
