import { FC } from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
	display: flex;
	align-items: center;
	& > *:not(:last-child) {
		margin-inline-end: 1rem;
	}
`

const StyledLink = styled(HashLink)`
	text-decoration: none;
	font-size: 1.2rem;
`

export const NavBar: FC = () => {
	return (
		<StyledNavBar>
			<StyledLink to='/#about'>About</StyledLink>
			<StyledLink to='/#howItWorks'>How it works</StyledLink>
		</StyledNavBar>
	)
}
