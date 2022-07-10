import { FC } from 'react'
import { ReactComponent as LogoSymbol } from '../assets/imgs/logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoContainer = styled(Link)`
	display: flex;
	align-items: center;
	cursor: pointer;
`

const StyledName = styled.h1`
	margin: 0;
	margin-inline-start: 0.8rem;
	font-size: 2rem;
`

export const Logo: FC = () => {
	return (
		<LogoContainer to='/'>
			<LogoSymbol />
			<StyledName>CBDiff</StyledName>
		</LogoContainer>
	)
}
