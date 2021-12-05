import styled from '@emotion/styled';
import { BUTTONS } from '../utils/constants';

interface Props {
	currentPage: number;
	totalPages: number;
	goToPage: (page: PaginationButtons) => void;
}

export const Pagination = ({ currentPage, totalPages, goToPage }: Props) => (
	<Container>
		<PaginationButton
			disabled={currentPage === 1}
			onClick={() => {
				goToPage(BUTTONS.PREVIOUS as PaginationButtons);
			}}>
			&lt;
		</PaginationButton>
		<PageNumber>
			{currentPage} of {totalPages}
		</PageNumber>
		<PaginationButton
			data-testid="next-page"
			disabled={currentPage === totalPages}
			onClick={() => {
				goToPage(BUTTONS.NEXT as PaginationButtons);
			}}>
			&gt;
		</PaginationButton>
	</Container>
);

const Container = styled.div`
	padding: 1rem 2rem;
	display: flex;
	gap: 1.5rem;
	align-items: center;
	justify-content: flex-end;
`;

const PaginationButton = styled.div`
	height: 30px;
	width: 30px;
	border: 2px solid #5a5d60;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	font-size: 1.5rem;
	font-weight: 500;
	pointer-events: ${(props: ButtonProp) => (props.disabled ? 'none' : 'auto')};
	background-color: ${(props: ButtonProp) => (props.disabled ? '#E5E7EB' : '#ffffff')};
	color: #5a5d60;
	&:hover {
		color: ${(props: ButtonProp) => (props.disabled ? '#5a5d60' : '#ffffff')};
		background-color: ${(props: ButtonProp) => (props.disabled ? '#E5E7EB' : '#ff7676')};
		cursor: ${(props: ButtonProp) => (props.disabled ? 'default' : 'pointer')};
		border: ${(props: ButtonProp) => (props.disabled ? '2px solid #5a5d60' : 'none')};
	}
`;

const PageNumber = styled.div`
	font-weight: 600;
`;
