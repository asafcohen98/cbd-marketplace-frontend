import { FC } from 'react'

import { IProduct } from '../interfaces/IProduct.interface'

import { Loader } from './Loader'
import { NoResults } from './NoResults'
import { CardsContainer } from './layouts/CardsContainer'
import { ProductPreview } from './ProductPreview'

interface IProductListProps {
	products: IProduct[]
	isLoading: boolean
}

export const ProductList: FC<IProductListProps> = ({ products, isLoading }) => {
	// console.log('products in List ', products)
	// console.log('No results in List ', products && !products?.length)

	if (isLoading) return <Loader />
	if (products?.length){
		return (
			<CardsContainer>
				{products.map((product) => {
					return <ProductPreview key={product._id} product={product} />
				})}
			</CardsContainer>
		)
	}
	if (!products?.length) return <NoResults />
}
