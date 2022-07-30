import { FC } from 'react'

import { IProduct } from '../interfaces/IProduct.interface'

import { Loader } from './Loader'
import { NoResults } from './NoResults'
import { CardsContainer } from './layouts/CardsContainer'
import { ProductPreview } from './ProductPreview'
import { ShopContainer } from './layouts/ShopContainer'

interface IProductListProps {
	products: IProduct[]
	isLoading: boolean
}

export const ProductList: FC<IProductListProps> = ({ products, isLoading }) => {
	if (isLoading) return <ShopContainer><Loader /></ShopContainer>
	if (!products?.length) return <NoResults />
	return (
		<CardsContainer>
			{products.map((product) => {
				return <ProductPreview key={product._id} product={product} />
			})}
		</CardsContainer>
	)
}
