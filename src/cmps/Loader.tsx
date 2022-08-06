import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as LoaderSvg } from '../assets/imgs/loader.svg'

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	height: 100%;
	width: 100%;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
		 min-height: 100vh;
	}
`

export const Loader: FC = () => {
	return (
		<LoaderContainer>
			<LoaderSvg />
		</LoaderContainer>
	)
}
