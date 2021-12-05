import styled from '@emotion/styled';
import { Card } from './Card';

interface Props {
	characters: Character[];
}

export const CardsList = ({ characters }: Props) => (
	<Container>
		{characters.map((character: CharacterCard) => (
			<Card key={character.id} character={character} />
		))}
	</Container>
);

const Container = styled.div`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
	justify-content: center;
	padding: 2rem;
`;
