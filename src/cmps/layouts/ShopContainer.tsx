import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledShopContainer = styled.section`
	flex: 1;
	position: relative;
	min-height: 77rem;
	display: flex;
	margin: 0rem 0 1.5rem 0;
	@media only screen and (max-width: ${(props) =>	props.theme.breakpoints.tablet}) {
		height: 100%
	}
`

interface IShopContainerProps {
	children: ReactNode
}

export const ShopContainer: FC<IShopContainerProps> = ({ children }) => {
	return <StyledShopContainer>{children}</StyledShopContainer>
}
