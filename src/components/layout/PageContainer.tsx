import styled from '@emotion/styled';
import { SearchBar } from '../SearchBar';
import { Footer } from './Footer';
import { Nav } from './Nav';

interface Props {
	children: React.ReactNode;
}

export const PageContainer = ({ children }: Props) => (
	<Container>
		<Nav>
			<SearchBar />
		</Nav>
		<Main> {children} </Main>
		<Footer />
	</Container>
);

const Container = styled.nav`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Main = styled.main`
	flex: 1;
	overflow: auto;
`;
