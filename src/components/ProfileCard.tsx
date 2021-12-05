import React from 'react';
import styled from '@emotion/styled';
import { CharacterName, Status } from './Card';

interface Props {
	character: Character;
}

export const ProfileCard = ({ character }: Props) => (
	<ProfileDetails>
		<StyledImage src={character.image} alt={character.name} />

		<ProfileInfo>
			<CharacterName title={character.name}>{character.name}</CharacterName>

			<CharacterInfo>
				<div>Status:</div>
				<Status status={character.status?.toLowerCase() as StatusProp['status']}>{character.status}</Status>
			</CharacterInfo>

			<CharacterInfo>
				{React.Children.toArray(
					Object.entries({
						Specie: character.species,
						Type: character.type,
						Gender: character.gender,
						Location: character.location.name,
					}).map(([key, value]) => (
						<>
							<div>{key}: </div>
							<div>{value}</div>
						</>
					))
				)}
			</CharacterInfo>
		</ProfileInfo>
	</ProfileDetails>
);

const ProfileDetails = styled.div`
	display: flex;
	gap: 2rem;
`;

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	flex: 1;
`;

const StyledImage = styled.img`
	width: 300px;
	height: 300px;
`;

const CharacterInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-row-gap: 1.5rem;
	div:nth-of-type(odd) {
		font-weight: 700;
	}
`;
