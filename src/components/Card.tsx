import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface Props {
	character: CharacterCard;
}

export const Card = ({ character }: Props) => (
	<StyledCard to={`/profile/${character.id}`}>
		<StyledImage src={character.image} alt={character.name} />
		<CharacterDetail>
			<CharacterName title={character.name}>{character.name}</CharacterName>
			<Status status={character.status?.toLowerCase() as StatusProp['status']}>{character.status}</Status>
		</CharacterDetail>
	</StyledCard>
);

enum StatusBackgroundColor {
	'alive' = '#DAF1E5',
	'dead' = '#FEE2E2',
	'unknown' = '#E5E7EB',
}

export enum StatusColor {
	'alive' = '#065F46',
	'dead' = '#991B1B',
	'unknown' = '#5B5C5C',
}

const StyledCard = styled(Link)`
	display: flex;
	gap: 1.5rem;
	align-items: center;
	padding: 1rem;
	border-radius: 20px;
	box-shadow: 0px 5px 30px rgb(0 0 0 / 20%);
	width: 30vw;
	text-decoration: none;
	color: #5a5d60;
	&:hover {
		cursor: pointer;
		color: #5a5d60;
	}
`;

const StyledImage = styled.img`
	border-radius: 50%;
	width: 100px;
`;

const CharacterDetail = styled.div`
	width: 60%;
`;

export const CharacterName = styled.h2`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.5rem;
`;

export const Status = styled.span`
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	text-transform: uppercase;
	background-color: ${(props: StatusProp) => StatusBackgroundColor[props.status]};
	color: ${(props: StatusProp) => StatusColor[props.status]};
	padding: 5px 12px;
	border-radius: 100px;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
	width: fit-content;
`;
