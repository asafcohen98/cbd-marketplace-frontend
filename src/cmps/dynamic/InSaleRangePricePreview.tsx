import { FC } from 'react'
import styled from 'styled-components'
import { RangePricePreview } from './RangePricePreview'

const PriceContainer = styled.div`
	display: flex;
    flex-direction: column;
`


interface IInSaleRangePricePreviewProps {
	originalPriceFrom: string
	originalPriceTo: string
	priceRangeFrom: string
	priceRangeTo: string
}

export const InSaleRangePricePreview: FC<IInSaleRangePricePreviewProps> = ({
	originalPriceFrom,
	originalPriceTo,
	priceRangeFrom,
	priceRangeTo,
}) => {
	return (
		<PriceContainer>
            <RangePricePreview priceFrom={priceRangeFrom} priceTo={priceRangeTo} />
			<RangePricePreview
				inSale
				priceFrom={originalPriceFrom}
				priceTo={originalPriceTo}
			/>
		</PriceContainer>
	)
}
