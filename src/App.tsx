import styled from '@emotion/styled';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { SearchResult } from './pages/SearchResult';

export default function App() {
	return (
		<Container>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/page/:pageNumber" exact>
						<Home />
					</Route>
					<Route path="/profile/:characterId" exact>
						<Profile />
					</Route>
					<Route path="/search" exact>
						<SearchResult />
					</Route>
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;
