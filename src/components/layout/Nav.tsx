import styled from '@emotion/styled';
import { APP_NAME } from '../../utils/constants';

interface Props {
	children: React.ReactNode;
}

export const Nav = ({ children }: Props) => (
	<StyledNav>
		<div> {APP_NAME} </div>
		{children}
	</StyledNav>
);

const StyledNav = styled.nav`
	flex: 0;
	padding: 1rem 5rem;
	text-align: center;
	div {
		color: #5a5d60;
		font-weight: 600;
		font-size: 1.5rem;
	}
`;
