import { screen } from '@testing-library/react';

import { SearchResult } from '../SearchResult';
import { GET_ALL_CHARACTERS } from '../../hooks/useCharacters';
import { renderWithProviders, waitForGraphQL } from '../../utils/testUtils';

const getMockResults = (number: number): CharacterCard[] => {
	const results: CharacterCard[] = [];
	for (let i = 0; i < number; i++) {
		results.push({ id: i.toString(), name: `test entry ${i}`, image: '/', status: 'status' });
	}
	return results;
};

describe('Search Result', () => {
	test('should load correct data based on url', async () => {
		const mocks = [
			{
				request: { query: GET_ALL_CHARACTERS, variables: { page: 2, name: 'test' } },
				result: { data: { characters: { info: { count: 11, pages: 2 }, results: getMockResults(1) } } },
			},
		];
		renderWithProviders(SearchResult, mocks, '/search?q=test&page=2', '/search');

		await waitForGraphQL();

		expect(screen.getByText('test entry 0')).toBeInTheDocument();
	});
});
