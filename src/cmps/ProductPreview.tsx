import { FC, useCallback, useState } from 'react'
import styled from 'styled-components'

import { IProduct } from '../interfaces/IProduct.interface'

import { Card } from './layouts/Card'
import { Button } from './Button'
import { ProductImg } from './ProductImg'
import { ProductPrice } from './ProductPrice'
import { ProductScore } from './ProductScore'
import { ProductTitle } from './ProductTitle'
import { ProductVerifiedBuyer } from './ProductVerifiedBuyer'

const ProductContentContainer = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 0.5rem;
`

const ProductReviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
`

interface IProductPreviewProps {
	product: IProduct
}

export const ProductPreview: FC<IProductPreviewProps> = ({ product }) => {
	const [isReviewShown, setIsReviewShown] = useState<boolean>(false)

	const onChangeIsReviewShown = useCallback((isReviewShown) => {
		setIsReviewShown(isReviewShown)
	}, [])

	return (
		<Card>
			<ProductImg imgSrc={product.imgSrc} imgTitle={product.name}/>
			<ProductContentContainer>
				<ProductReviewContainer>
					<ProductScore
						reviewsScore={product.reviewsScore}
						reviewsCount={product.reviewsCount}
					/>
					{product.recentCustomerName && (
						<ProductVerifiedBuyer
							isReviewShown={isReviewShown}
							onChangeIsReviewShown={onChangeIsReviewShown}
							recentCustomerDesc={product.recentCustomerDesc}
							recentCustomerName={product.recentCustomerName}
							recentCustomerTitle={product.recentCustomerTitle}
						/>
					)}
				</ProductReviewContainer>
				<ProductTitle>{product.name}</ProductTitle>
			</ProductContentContainer>
			<ProductPrice product={product} />
			<Button as='a' size='medium' variant='regular' color='dark' href={product.productLink} target='_blank'>
				Buy now
			</Button>
		</Card>
	)
}
