import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            title: 'title',
            newTitle: 'newTitle',
            readonly: false,
            isEdit: false,
            children: <div className="children" />,
            onEdit: jest.fn(),
        };
        wrapper = shallow(<Header {...props} />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render root div element', () => {
        expect(wrapper.find('div.header')).toHaveLength(1);
    });

    it('should render title', () => {
        expect(wrapper.find('span.title')).toHaveLength(1);
    });

    it('should render children', () => {
        expect(wrapper.find('div.children')).toHaveLength(1);
    });

    it('should call onEdit', () => {
        const newProps = { ...props, isEdit: true };
        const newWrapper = shallow(<Header {...newProps} />);

        newWrapper.find('input').simulate('change', { target: { value: 'newValue' } });
        expect(newProps.onEdit).toHaveBeenCalled();
    });

    it('should render static header', () => {
        const newProps = { ...props, readonly: true };
        const newWrapper = shallow(<Header {...newProps} />);

        expect(newWrapper.find('span.title')).toHaveLength(1);
    });
});
