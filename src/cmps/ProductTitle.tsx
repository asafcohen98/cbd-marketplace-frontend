import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledProductTitle = styled.span`
	font-size: 1rem;
	font-family: Mukta-Regular,sans-serif;
    max-height: 3rem;
    margin-bottom: 0.5rem;
`

interface IProductTitle {
	children: ReactNode
}

export const ProductTitle: FC<IProductTitle> = ({ children }) => {
	return <StyledProductTitle>{children}</StyledProductTitle>
}
