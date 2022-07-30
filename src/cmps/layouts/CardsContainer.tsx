import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
	display: grid;
	/* height: 85vh; */
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-auto-rows: 400px;
	flex: 1;
	grid-gap: 1rem 1rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.narrow}) {
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}

	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
       display: flex;
	   flex-direction: column;
	   grid-template-columns: unset;
	     grid-auto-rows: unset;
	}
`

interface ICardsContainerProps {
	children: ReactNode
}

export const CardsContainer: FC<ICardsContainerProps> = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>
}
