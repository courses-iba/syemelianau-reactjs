import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Body from './Body';

configure({ adapter: new Adapter() });

describe('Body', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            description: 'description',
            newDescription: 'newDescription',
            readonly: false,
            isEdit: true,
            onEdit: jest.fn()
        };
        wrapper = shallow(<Body {...props} />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render root div element', () => {
        expect(wrapper.find('div.body')).toHaveLength(1);
    });

    it('should render textarea', () => {
        expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('should call onEdit', () => {
        wrapper.find('textarea').simulate('change', { target: { value: 'newValue' } });
        expect(props.onEdit).toHaveBeenCalled();
    });

    it('should render truncated text', () => {
        const newProps = { ...props, isEdit: false };
        const newWrapper = shallow(<Body {...newProps} />);

        expect(newWrapper.find('div.body').text().includes('description')).toBe(true);
    });

    it('should render plain text', () => {
        const newProps = { ...props, readonly: true };
        const newWrapper = shallow(<Body {...newProps} />);

        expect(newWrapper.find('div.body').text().includes('description')).toBe(true);
    });
});
