import { FC } from 'react'

import { IProduct } from '../../interfaces/IProduct.interface'

import { PricePreview } from './PricePreview'
import { RangePricePreview } from './RangePricePreview'
import { InSalePricePreview } from './InSalePricePreview'
import { InSaleRangePricePreview } from './InSaleRangePricePreview'

// move it to types folder...
type PriceTypes = 'regular' | 'rangePrice' | 'inSale' | 'rangeInSale'
/// ************ ///

interface IDynamicProductPrice {
	priceType: PriceTypes
	product: IProduct
}

export const DynamicProductPrice: FC<IDynamicProductPrice> = ({
	priceType,
	product,
}) => {
	const {
		price,
		originalPrice,
		priceRangeFrom,
		priceRangeTo,
		originalPriceFrom,
		originalPriceTo,
	} = product
	switch (priceType) {
		case 'regular':
			return <PricePreview price={originalPrice} />
		case 'rangePrice':
			return (
				<RangePricePreview
					priceFrom={originalPriceFrom}
					priceTo={originalPriceTo}
				/>
			)
		case 'inSale':
			return <InSalePricePreview originalPrice={originalPrice} price={price} />
		case 'rangeInSale':
			return (
				<InSaleRangePricePreview
					originalPriceFrom={originalPriceFrom}
					originalPriceTo={originalPriceTo}
                    priceRangeFrom={priceRangeFrom}
                    priceRangeTo={priceRangeTo}
				/>
			)
	}
}
