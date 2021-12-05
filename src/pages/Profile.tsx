import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PageContainer } from '../components/layout/PageContainer';
import { ProfileCard } from '../components/ProfileCard';
import { useCharacter } from '../hooks/useCharacter';
import { ErrorOrLoading } from './Home';
import { ERROR, LOADING, PROFILE } from '../utils/constants';
import { RootState } from '../store/store';
import { addCharacter } from '../store/features/recently-visited-slice';

export const Profile = () => {
	const { characterId } = useParams<ProfileParam>();
	const history = useHistory();
	const { data, loading, error } = useCharacter(+characterId!);
	const dispatch = useDispatch();
	const recentlyVisited: CharacterCard[] = useSelector((state: RootState) => state.recentlyVisited.characters);

	useEffect(() => {
		document.title = data?.character?.name ?? PROFILE;

		if (characterId && data && !recentlyVisited.some(({ id }: CharacterCard) => id === characterId)) {
			const characterToAdd: CharacterCard = {
				id: data.character.id,
				name: data.character.name,
				status: data.character.status,
				image: data.character.image,
			};
			dispatch(addCharacter(characterToAdd));
		}
	}, [characterId, data, dispatch, recentlyVisited]);

	const goBack = () => {
		history.goBack();
	};

	return (
		<PageContainer>
			{loading ? (
				<ErrorOrLoading>{LOADING}</ErrorOrLoading>
			) : error ? (
				<ErrorOrLoading>{ERROR}</ErrorOrLoading>
			) : (
				<Container>
					<ProfileCardContainer>
						<GoBack onClick={goBack}> &lt; Go Back </GoBack>
						{data && <ProfileCard character={data.character} />}
					</ProfileCardContainer>
				</Container>
			)}
		</PageContainer>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const ProfileCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	flex-basis: 50vw;
	padding: 3rem 2rem;
	margin: 4rem;
	border-radius: 20px;
	box-shadow: 0px 5px 30px rgb(0 0 0 / 20%);
`;

const GoBack = styled.span`
	width: fit-content;
	font-weight: 700;
	color: #b5b5b5;
	&:hover {
		color: #5a5d60;
		cursor: pointer;
	}
`;
