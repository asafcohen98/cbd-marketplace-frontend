import { FC } from 'react'
import styled from 'styled-components'

import { PricePreview } from './PricePreview'

const PriceContainer = styled.div`
	display: flex;
    flex-direction: column;
	line-height: 1.5rem;
`

interface IInSalePricePreviewProps {
	originalPrice: string
	price: string
}

export const InSalePricePreview: FC<IInSalePricePreviewProps> = ({
	originalPrice,
	price,
}) => {
	return (
		<PriceContainer>
			<PricePreview price={price} />
			<PricePreview inSale price={originalPrice} />
		</PriceContainer>
	)
}
