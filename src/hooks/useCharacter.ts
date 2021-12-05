import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = gql`
	query GetCharacter($id: ID!) {
		character(id: $id) {
			name
			id
			image
			status
			gender
			location {
				name
			}
			species
			type
		}
	}
`;

export const useCharacter = (id: number) => {
	const { data, loading, error } = useQuery<CharacterAPIResponse>(GET_CHARACTER, { variables: { id } });

	return { data, loading, error };
};
