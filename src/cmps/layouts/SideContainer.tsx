import styled from 'styled-components'
import { FC, ReactNode } from 'react'

interface IStyledSideContainer {
	isFilterPanelOpen: boolean
}

const StyledSideContainer = styled.aside<IStyledSideContainer>` 
	display: flex;
    flex-direction : column;
	flex-basis: 22%;
	margin-inline-end: 1rem;
	> *:not(:last-child) {
		margin-bottom: 1rem;
	}

	@media only screen and (max-width: ${(props) => props.theme.breakpoints.bigTablet}) {
		transform: translate(
			${(props) => (props.isFilterPanelOpen ? '0' : '-100%')}
		);
		transition: transform 0.5s ease-in-out;
		position: fixed;
		flex-basis: unset;
		height: 100%;
		margin: 0;
		top: 6.9rem;
		left: 0;
		width: 70%;
		background-color: ${(props) => props.theme.colors.lightColor};
		z-index: 8;
		box-shadow: ${(props) => props.theme.boxShadows.bs2};
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		width: 85%;
	}
`

interface ISideContainerProps {
	isFilterPanelOpen: boolean
	children: ReactNode
}

export const SideContainer: FC<ISideContainerProps> = ({
	isFilterPanelOpen,
	children,
}) => {
	return (
		<StyledSideContainer isFilterPanelOpen={isFilterPanelOpen}>
			{children}
		</StyledSideContainer>
	)
}
