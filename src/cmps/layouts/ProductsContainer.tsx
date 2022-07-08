import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledProductsContainer = styled.div`
	display: flex;
	flex-direction: column;

	> *:last-child {
		align-self: center;
		margin-top: 2rem;
	}
`

interface IProductsContainerProps {
	children: ReactNode
}

export const ProductsContainer: FC<IProductsContainerProps> = ({
	children,
}) => {
	return <StyledProductsContainer>{children}</StyledProductsContainer>
}
