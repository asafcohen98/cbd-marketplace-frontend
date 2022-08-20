import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { ScreenOverlay } from './ScreenOverlay'

interface IStyledNavBarProps {
	isMenuOpen: boolean
}

const StyledNavBar = styled.nav<IStyledNavBarProps>`
	display: flex;
	align-items: center;
	& > *:not(:last-child) {
		margin-inline-end: 1rem;
	}

	@media only screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 50;
		width: 70%;
		height: 100%;
		padding-top: 6.9rem;
		flex-direction: column;
		background-color: ${(props) => props.theme.colors.lightColor};
		transform: ${(props) =>
			props.isMenuOpen ? 'translateX(0%)' : 'translateX(100%)'};
		transition: 0.5s ease-in-out;
	}
`

const StyledLink = styled(HashLink)`
	text-decoration: none;
	font-size: 1.2rem;
`

interface INavBarProps {
	isMenuOpen: boolean
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const NavBar: FC<INavBarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
	const location = useLocation()

	useEffect(() => {
		setIsMenuOpen(false)
	}, [location])

	const onScrollIntoView = (el) => {
		const headerOffset = 115
		const elementPosition = el.getBoundingClientRect().top
		const offsetPosition = elementPosition + window.pageYOffset - headerOffset
		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<ScreenOverlay
				handleClick={() => setIsMenuOpen(!isMenuOpen)}
				isMenuOpen={isMenuOpen}
			/>
			<StyledNavBar isMenuOpen={isMenuOpen}>
				<StyledLink scroll={onScrollIntoView} to='/#about'>
					About
				</StyledLink>
				<StyledLink scroll={onScrollIntoView} to='/#howItWorks'>
					How it works
				</StyledLink>
			</StyledNavBar>
		</>
	)
}
