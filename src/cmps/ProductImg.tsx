import { FC } from 'react'
import styled from 'styled-components'

import { ImgContainer } from './layouts/ImgContainer'

const Image = styled.img`
	transition: transform  0.5s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
`

interface IProductImgProps {
	imgSrc: string
}

export const ProductImg: FC<IProductImgProps> = ({ imgSrc }) => {
	return (
		<ImgContainer>
			<Image src={imgSrc} alt='cbd' />
		</ImgContainer>
	)
}
