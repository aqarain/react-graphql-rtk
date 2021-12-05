import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useHistory, useParams } from 'react-router-dom';

import { CardsList } from '../components/CardsList';
import { Pagination } from '../components/Pagination';
import { PageContainer } from '../components/layout/PageContainer';
import { useCharacters } from '../hooks/useCharacters';
import { BUTTONS, ERROR, HOMEPAGE, LOADING } from '../utils/constants';

export const Home = () => {
	const { pageNumber } = useParams<PageURLParam>();
	const history = useHistory();
	const currentPage = Number(pageNumber ?? 1);
	const isLoadedRef = useRef(false);
	const { data, loading, error, fetchMore } = useCharacters(currentPage);

	useEffect(() => {
		document.title = HOMEPAGE;
	}, []);

	useEffect(() => {
		if (data && !isLoadedRef.current) isLoadedRef.current = true;
	}, [data]);

	useEffect(() => {
		if (isLoadedRef.current)
			fetchMore({
				variables: {
					page: +pageNumber,
				},
				updateQuery: (prev, { fetchMoreResult }) => {
					if (!fetchMoreResult) return prev;
					return fetchMoreResult;
				},
			});
	}, [fetchMore, pageNumber]);

	const goToPage = (page: PaginationButtons) => {
		history.push({
			pathname: `/page/${page === BUTTONS.NEXT ? currentPage + 1 : currentPage - 1}`,
		});
	};

	return (
		<PageContainer>
			{loading ? (
				<ErrorOrLoading>{LOADING}</ErrorOrLoading>
			) : error ? (
				<ErrorOrLoading>{ERROR}</ErrorOrLoading>
			) : (
				<>
					<CardsList characters={data?.characters.results ?? []} />
					<Pagination
						currentPage={currentPage}
						totalPages={data?.characters.info.pages ?? 0}
						goToPage={goToPage}
					/>
				</>
			)}
		</PageContainer>
	);
};

export const ErrorOrLoading = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	font-size: 1.5rem;
`;
