import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const StyledCheckbox = styled.button(({ checked }) => ({
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '3em',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid',
    padding: '.5vh 1vh',
    transition: '.3s',
    backgroundColor: checked ? '#f1f8ff' : '#ffffff',
    borderColor: checked ? '#1675e0' : '#d9d9d9',

    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, .1)'
    },

    '&:active': {
        transition: 'none',
        backgroundColor: '#f1f8ff',
        borderColor: '#c8e1ff'
    }
}));

const StyledText = styled.span(({ checked }) => ({
    paddingLeft: '1vh',
    color: checked ? '#1675e0' : '#8e8e93'
}));

const Checkbox = ({ name, checked, onChange }) => {
    const iProps = { size: 24 };

    const icon = checked
        ? <MdCheckBox {...iProps} color={'#1675e0'} />
        : <MdCheckBoxOutlineBlank {...iProps} color={'#8e8e93'} />;

    return (
        <StyledCheckbox checked={checked} onClick={onChange}>
            {icon}
            <StyledText checked={checked}>{name}</StyledText>
        </StyledCheckbox>
    );
};

export default Checkbox;
