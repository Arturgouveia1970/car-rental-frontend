import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Newcar from '../components/cars/newcar/Newcar';
import store from '../Redux/configureStore';

describe('New car form tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Newcar />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('New car page has a "add" button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Newcar />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Add')).toBeTruthy();
  });
});
