import { FC } from 'react'
import styled from 'styled-components'
import { MainLayout } from './layouts/MainLayout'

import { Logo } from './Logo'
import { NavBar } from './NavBar'

const HeaderContainer = styled.header`
	background-color: ${props => props.theme.colors.lightColor};
	position: sticky;
	top: 0;
	z-index: 10;
	height: 100%;
	box-shadow: ${(props) => props.theme.boxShadows.bs2};
`

const HeaderContent = styled.div`
	min-height: 10vh;
	display: flex;
	position: sticky;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.colors.lightColor};
`

export const Header: FC = ({ children }) => {
	return (
		<HeaderContainer>
			<MainLayout>
				<HeaderContent>
					<Logo />
					<NavBar />
				</HeaderContent>
			</MainLayout>
		</HeaderContainer>
	)
}
