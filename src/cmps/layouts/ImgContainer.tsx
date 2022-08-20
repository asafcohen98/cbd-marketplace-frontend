import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledImgContainer = styled.div`
	position: relative;
	height: 200px;
	object-fit: contain;
	overflow: hidden;
    padding: 1rem;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

interface IImgContainerProps {
	children: ReactNode
}

export const ImgContainer: FC<IImgContainerProps> = ({ children }) => {
	return <StyledImgContainer>{children}</StyledImgContainer>
}
