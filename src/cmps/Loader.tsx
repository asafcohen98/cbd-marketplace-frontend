import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as LoaderSvg } from '../assets/imgs/loader.svg'
import { ShopContainer } from './layouts/ShopContainer'

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex : 1;
	height: 100%;
	width: 100%;
`

export const Loader: FC = () => {
	return (
			<LoaderContainer>
				<LoaderSvg />
			</LoaderContainer>
	)
}
