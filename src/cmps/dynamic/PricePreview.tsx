import { FC } from 'react'
import styled from 'styled-components'

interface IStyledPricePreview {
	inSale: boolean
}

const StyledPricePreview = styled.span<IStyledPricePreview>`
	color: ${(props) =>
		props.inSale
			? props.theme.colors.mutedColor
			: props.theme.colors.darkColor};
	font-family: Mukta-Regular, sans-serif;
	font-size: 1.2rem;
	padding: 0 0.5rem;
	text-decoration: ${(props) => (props.inSale ? 'line-through' : 'none')};
`

interface IRegularPriceProps {
	price: string
	inSale?: boolean
}

export const PricePreview: FC<IRegularPriceProps> = ({ price, inSale }) => {
	return <StyledPricePreview inSale={inSale}>{`$${price}`}</StyledPricePreview>
}
