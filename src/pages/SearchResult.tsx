import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PageContainer } from '../components/layout/PageContainer';
import { CardsList } from '../components/CardsList';
import { Pagination } from '../components/Pagination';
import { ErrorOrLoading } from './Home';
import { useCharacters } from '../hooks/useCharacters';
import { useQueryParam } from '../hooks/useQueryParam';
import { BUTTONS, ERROR, LOADING, SEARCH } from '../utils/constants';

export const SearchResult = () => {
	const query = useQueryParam();
	const history = useHistory();
	const searchParam = query.get('q') ?? '';
	const searchPage = Number(query.get('page') ?? 1) ?? 1;
	const { data, loading, error, fetchMore } = useCharacters(searchPage, searchParam);

	useEffect(() => {
		document.title = SEARCH;
	}, []);

	useEffect(() => {
		fetchMore({
			variables: {
				page: searchPage,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return fetchMoreResult;
			},
		});
	}, [fetchMore, searchPage]);

	const goToPage = (page: PaginationButtons) => {
		history.push({
			pathname: '/search',
			search: `?q=${searchParam}&page=${page === BUTTONS.NEXT ? searchPage + 1 : searchPage - 1}`,
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
						currentPage={searchPage}
						totalPages={data?.characters.info.pages ?? 0}
						goToPage={goToPage}
					/>
				</>
			)}
		</PageContainer>
	);
};
