import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { store } from '../store/store';
import { createMemoryHistory } from 'history';

export const renderWithProviders = (Component: any, mocks: MockedResponse[], initialURL = '/', path = '/') => {
	const history = createMemoryHistory({ initialEntries: [initialURL] });
	const renderResult = render(
		<Provider store={store}>
			<MockedProvider mocks={mocks}>
				<Router history={history}>
					<Route path={path} exact>
						<Component />
					</Route>
				</Router>
			</MockedProvider>
		</Provider>
	);

	return { ...renderResult, history };
};

export const waitForGraphQL = async () => await act(async () => new Promise(resolve => setTimeout(resolve, 0)));
