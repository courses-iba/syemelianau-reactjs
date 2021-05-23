import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Card } from './index';
import Header from './Header';
import Body from './Body';
import Divider from '../Divider';
import pageReducer from '../../redux/reducers/page';
import cardReducer from '../../redux/reducers/card';

const mockHistoryPush = jest.fn();
const mockProps = {
    id: uuid(),
    content: {
        title: 'Edit me!',
        description: 'Me too :)'
    },
    checked: null
};

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

configure({ adapter: new Adapter() });

const getWrapperWithProviders = (ui, mockStore) => mount(
    <Provider store={mockStore}>{ui}</Provider>
);

describe('Card', () => {
    let wrapper, props, mockStore;

    beforeEach(() => {
        mockStore = createStore(combineReducers({ pageReducer, cardReducer }));
        mockStore.dispatch = jest.fn();

        props = mockProps;
        wrapper = getWrapperWithProviders(<Card {...props} />, mockStore);

        console.log(wrapper.debug());
        console.log(wrapper);
    });

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render root div element', () => {
        expect(wrapper.find('div.card')).toHaveLength(1);
    });

    it('should render Header', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('should render Body', () => {
        expect(wrapper.find(Body)).toHaveLength(1);
    });

    it('should render Divider', () => {
        expect(wrapper.find(Divider)).toHaveLength(1);
    });

    it('should render buttons', () => {
        expect(wrapper.find('button')).toHaveLength(1);
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('button')).toHaveLength(2);
    });

    it('should call handleChecked', () => {
        wrapper.find('div.card').simulate('click');
        expect(mockStore.dispatch).toHaveBeenCalled();
    });

    it('should call history push', () => {
        wrapper.find('div.card').simulate('doubleclick');
        expect(mockHistoryPush).toHaveBeenCalled();
    });

    it('should call handleEdit', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(mockStore.dispatch).toHaveBeenCalledTimes(4);
    });
});
