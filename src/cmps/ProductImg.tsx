import { FC, useState } from 'react'
import styled from 'styled-components'

import { ImgContainer } from './layouts/ImgContainer'
import { Loader } from './Loader'

interface IImageProps {
	isImgLoaded: boolean
}

const Image = styled.img<IImageProps>`
	transition: transform 0.5s ease-in-out;
	display: ${(props) => (props.isImgLoaded ? 'block' : 'none')};
	@media only screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		&:hover {
			transform: scale(1.1);
		}
	}
`

interface IProductImgProps {
	imgSrc: string
}

export const ProductImg: FC<IProductImgProps> = ({ imgSrc }) => {
	
	const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)

	return (
		<ImgContainer>
			{!isImgLoaded && <Loader />}
			<Image
				isImgLoaded={isImgLoaded}
				onLoad={() => setIsImgLoaded(true)}
				src={imgSrc}
				alt='cbd'
			/>
		</ImgContainer>
	)
}
