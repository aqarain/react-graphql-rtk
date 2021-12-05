import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Home } from '../Home';
import { GET_ALL_CHARACTERS } from '../../hooks/useCharacters';
import { renderWithProviders, waitForGraphQL } from '../../utils/testUtils';

const getMockResults = (number: number): CharacterCard[] => {
	const results: CharacterCard[] = [];
	for (let i = 0; i < number; i++) {
		results.push({ id: i.toString(), name: `test entry ${i}`, image: '/', status: 'status' });
	}
	return results;
};

describe('Home', () => {
	test('should load correct data based on url', async () => {
		const mocks = [
			{
				request: { query: GET_ALL_CHARACTERS, variables: { page: 2, name: '' } },
				result: { data: { characters: { info: { count: 11, pages: 2 }, results: getMockResults(1) } } },
			},
		];
		renderWithProviders(Home, mocks, '/page/2', '/page/:pageNumber');

		await waitForGraphQL();

		expect(screen.getByText('test entry 0')).toBeInTheDocument();
	});
});

describe('Pagination', () => {
	test('When I click on pagination Then I am taken to another page', async () => {
		const mocks = [
			{
				request: { query: GET_ALL_CHARACTERS, variables: { page: 1, name: '' } },
				result: { data: { characters: { info: { count: 11, pages: 2 }, results: getMockResults(10) } } },
			},
		];
		const { history } = renderWithProviders(Home, mocks, '/', '/');

		await waitForGraphQL();

		userEvent.click(screen.getByTestId('next-page'));

		expect(history.location.pathname).toBe('/page/2');
	});
});
