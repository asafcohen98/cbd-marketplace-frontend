import { FC } from 'react'
import styled from 'styled-components'
import { MainLayout } from './layouts/MainLayout'

import { Logo } from './Logo'
import { NavBar } from './NavBar'

const HeaderContainer = styled.header`
	color: ${(props) => props.theme.colors.lightColor};
	max-height: 10vh;
	/* background-color: ${(props) => props.theme.colors.lightColor}; */
	position: fixed;
	display: flex;
	top: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	/* box-shadow: ${(props) => props.theme.boxShadows.bs2}; */
	background-color: transparent;
`

const HeaderContent = styled.div`
	height: 100%;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;
	/* background-color: ${(props) => props.theme.colors.lightColor}; */
	/* background: linear-gradient(180deg, #0C4D30 -0.4%, #0C4A2E 30.56%, #0A4028 54.85%, #072F1E 76.87%, #04180F 97.42%, #000000 113.58%); */
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
