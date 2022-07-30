import { ReactNode, FC } from 'react'
import styled from 'styled-components'

const StyledMainLayout = styled.section`
    position: relative;
	display: grid;
	grid-template-columns:
		minmax(2rem, 1fr)
		minmax(auto, ${(props) => props.theme.breakpoints.desktop})
		minmax(2rem, 1fr);

	> * {
		grid-column: 2;

		&.full {
			grid-column: 1 / -1;
		}
	}

	@media only screen and (max-width: ${(props) =>	props.theme.breakpoints.narrow}) {
		grid-template-columns:
			minmax(2rem, 1fr)
			minmax(auto, ${(props) => props.theme.breakpoints.narrow})
			minmax(2rem, 1fr);
	}

	@media only screen and (max-width: ${(props) =>	props.theme.breakpoints.tablet}) {
		grid-template-columns:
			minmax(2rem, 1fr)
			minmax(auto, ${(props) => props.theme.breakpoints.tablet})
			minmax(2rem, 1fr);
	}

	@media only screen and (max-width: ${(props) =>	props.theme.breakpoints.mobile}) {
		grid-template-columns:
			minmax(1rem, 1fr)
			minmax(auto,  ${(props) => props.theme.breakpoints.mobile})
			minmax(1rem, 1fr);
	}
`

interface IMainLayoutProps {
	children: ReactNode
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
	return <StyledMainLayout>
		{children}
	</StyledMainLayout>
}
