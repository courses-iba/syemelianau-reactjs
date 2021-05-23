import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import App from './App';
import { store } from './redux/store';

const renderWithProviders = ui => render(<Provider store={store}>{ui}</Provider>);

test('renders App component', () => {
    const { getByText } = renderWithProviders(<App />);
    const linkElement = getByText('Notes App');
    expect(linkElement).toBeInTheDocument();
});
