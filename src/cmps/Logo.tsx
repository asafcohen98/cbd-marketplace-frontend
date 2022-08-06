import { FC } from 'react'
import { ReactComponent as LogoSvg } from '../assets/imgs/logo.svg'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

const LogoContainer = styled(HashLink)`
	display: flex;
	align-items: center;
	cursor: pointer;
`

const StyledLogo = styled(LogoSvg)`
	 fill: ${props => props.theme.colors.darkColor};
	 @media only screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
		width: 200px;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		width: 120px;
	}
	
`

export const Logo: FC = () => {
	return (
		<LogoContainer to='/#top'>
			<StyledLogo />
		</LogoContainer>
	)
}
