import { FC, useState } from 'react'
import styled from 'styled-components'
import fallbackProductImg from '../assets/imgs/fallbackProductImg.jpeg'

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
	imgTitle : string
}

export const ProductImg: FC<IProductImgProps> = ({ imgSrc,imgTitle }) => {
	const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)
	const [currImg, setCurrImg] = useState<string>(imgSrc)

	const onImgFailedLoad = () => {
		setCurrImg(fallbackProductImg)
	}

	return (
		<ImgContainer>
			{!isImgLoaded && <Loader />}
			<Image
				isImgLoaded={isImgLoaded}
				onLoad={() => setIsImgLoaded(true)}
				onError={onImgFailedLoad}
				src={currImg}
				width="270"
				height="170"
				title={imgTitle}
				loading="eager"
				alt='cbd'
			/>
		</ImgContainer>
	)
}
