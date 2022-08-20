import { FC } from 'react'
import styled from 'styled-components'

interface IStyledPricePreview {
	inSale: boolean
}

const StyledRangePricePreview = styled.span<IStyledPricePreview>`
	color: ${(props) =>
		props.inSale
			? props.theme.colors.mutedColor
			: props.theme.colors.darkColor};
	font-family: Mukta-Regular, sans-serif;
	font-size: 1.2rem;
	text-decoration: ${(props) => (props.inSale ? 'line-through' : 'none')};
	padding: 0 0.5rem;
	line-height: 1.5rem;
`

interface IRangePricePreviewProps {
	priceFrom: string
	priceTo: string
	inSale?: boolean
}

export const RangePricePreview: FC<IRangePricePreviewProps> = ({
	priceFrom,
	priceTo,
	inSale,
}) => {
	return (
		<StyledRangePricePreview
			inSale={inSale}>{`$${priceFrom} - $${priceTo}`}</StyledRangePricePreview>
	)
}
