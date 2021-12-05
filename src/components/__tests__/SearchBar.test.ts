import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SEARCH } from '../../utils/constants';
import { renderWithProviders } from '../../utils/testUtils';
import { SearchBar } from '../SearchBar';

describe('SearchBar', () => {
	test('When I search for query Then I am redirected to correct url', async () => {
		const { history } = renderWithProviders(SearchBar, [], '/search', '/search');

		userEvent.type(screen.getByTestId('search-bar'), 'test');
		userEvent.click(screen.getByText(SEARCH));

		expect(history.location.pathname).toBe('/search');
		expect(history.location.search).toBe('?q=test');
	});
});
