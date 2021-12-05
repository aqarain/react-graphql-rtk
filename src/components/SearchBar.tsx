import { useState } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { useQueryParam } from '../hooks/useQueryParam';
import { SEARCH } from '../utils/constants';

export const SearchBar = () => {
	const history = useHistory();
	const query = useQueryParam();
	const searchParam = query.get('q') ?? '';
	const [searchText, setSearchText] = useState(searchParam);

	const inputHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
		setSearchText((e.target as HTMLInputElement).value);
	};

	const submitSearch = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		history.push({
			pathname: '/search',
			search: `?q=${searchText}`,
		});
	};

	return (
		<form>
			<Input data-testid="search-bar" type="search" value={searchText} onChange={inputHandler} />
			<Button onClick={submitSearch} type="submit" disabled={searchText === ''}>
				{SEARCH}
			</Button>
		</form>
	);
};

const Input = styled.input`
	width: 30%;
	font-size: 1.5rem;
	padding: 0.1rem;
	border: none;
	margin-top: 1rem;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
	font-size: 1.5rem;
	border: none;
	padding: 0.1rem 2rem;
	cursor: ${(props: ButtonProp) => (props.disabled ? 'default' : 'pointer')};
	pointer-events: ${(props: ButtonProp) => (props.disabled ? 'none' : 'auto')};
	background-color: ${(props: ButtonProp) => (props.disabled ? '#E5E7EB' : '#ff7676')};
	color: #ffffff;
`;
