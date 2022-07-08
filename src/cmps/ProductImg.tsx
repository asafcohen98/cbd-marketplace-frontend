import { FC } from 'react'
import styled from 'styled-components'

import { ImgContainer } from './layouts/ImgContainer'

const ProductImgContainer = styled.a`
	:hover {
		filter: grayscale(80%);
		transition: filter 0.5s;
	}
`

interface IProductImgProps {
	imgSrc: string
	productLink: string
}

export const ProductImg: FC<IProductImgProps> = ({ imgSrc, productLink }) => {
	return (
		<ProductImgContainer href={productLink} target='_blank' rel='noreferrer'>
			<ImgContainer>
				<img src={imgSrc} alt='cbd' />
			</ImgContainer>
		</ProductImgContainer>
	)
}
