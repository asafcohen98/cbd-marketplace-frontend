import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledCard = styled.article`
	position: relative;
	color: ${(props) => props.theme.colors.darkColor};
	display: flex;
	flex-direction: column;
	height: 100%;
	box-shadow: ${(props) => props.theme.boxShadows.bs2};

	@media only screen and (max-width: ${(props) =>	props.theme.breakpoints.mobile}) {
		box-shadow: unset;
	}
`

interface ICardProps {
	children: ReactNode
}

export const Card: FC<ICardProps> = ({ children }) => {
	return <StyledCard>{children}</StyledCard>
}
