import { FC, useLayoutEffect, useCallback, useState } from 'react'

import { IProduct } from '../interfaces/IProduct.interface'

import { DynamicProductPrice } from './dynamic/DynamicProductPrice'


// move it to types folder...
type PriceTypes = 'regular' | 'rangePrice' | 'inSale' | 'rangeInSale'
/// ************ ///

interface IProductPriceProps {
	product: IProduct
}

export const ProductPrice: FC<IProductPriceProps> = ({ product }) => {
	
    const [priceType, setPriceType] = useState<PriceTypes>('regular')

	const checkPriceType = useCallback(() => {
		const {
			price,
			originalPrice,
			priceRangeFrom,
			priceRangeTo,
			originalPriceFrom,
			originalPriceTo,
		} = product
		if (price && originalPrice) {
			// MAYBE SHORT IF IS BETTER
			if (price === originalPrice) {
				setPriceType('regular')
			} else {
				setPriceType('inSale')
			}
		} else if (
			priceRangeFrom &&
			priceRangeTo &&
			originalPriceFrom &&
			originalPriceTo
		) {
			if (
				priceRangeFrom === originalPriceFrom &&
				priceRangeTo === originalPriceTo
			) {
				setPriceType('rangePrice')
			} else {
				setPriceType('rangeInSale')
			}
		}
	}, [product])

	useLayoutEffect(() => {
		checkPriceType()
	}, [checkPriceType])

	return <DynamicProductPrice priceType={priceType} product={product} />
}
