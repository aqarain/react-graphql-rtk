import { useQuery, gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
	query GetCharacters($page: Int, $name: String) {
		characters(page: $page, filter: { name: $name }) {
			info {
				count
				pages
			}
			results {
				id
				name
				image
				status
			}
		}
	}
`;

export const useCharacters = (page: number = 1, name: string = '') => {
	const { data, loading, error, fetchMore } = useQuery<CharactersAPIResponse>(GET_ALL_CHARACTERS, {
		variables: { page, name },
		notifyOnNetworkStatusChange: true,
	});

	return { data, loading, error, fetchMore };
};
