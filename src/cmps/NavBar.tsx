import { FC } from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
	display: flex;
	align-items: center;
	& > *:not(:last-child) {
		margin-inline-end: 1rem;
	}
`

const StyledLink = styled.a`
	text-decoration: none;
	font-size: 1.2rem;
`

export const NavBar: FC = () => {
	// links from react-router later...
	return (
		<StyledNavBar>
			<StyledLink href='#about'>About</StyledLink>
			<StyledLink href='#howItWorks'>How it works</StyledLink>
		</StyledNavBar>
	)
}
