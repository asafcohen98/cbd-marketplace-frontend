import { FC } from 'react'
import StarRatings from 'react-star-ratings'
import styled from 'styled-components'


const ProductScoreContainer = styled.div`
    font-size: 0.875rem;
	display: flex;
	color: ${(props) => props.theme.colors.mutedColor};
	align-items: center;
	> *:not(:last-child) {
		margin-inline-end: 0.5rem;
		line-height: 0.2rem;
	}
`

interface IProductScoreProps {
	reviewsScore: string | null
	reviewsCount: number
}

export const ProductScore: FC<IProductScoreProps> = ({
	reviewsScore,
	reviewsCount,
}) => {
	return (
		<ProductScoreContainer>
			<StarRatings
				rating={+reviewsScore}
				starDimension='15px'
				starSpacing='1px'
				starEmptyColor='#c8c8c8'
				starRatedColor='#FFDF00'
			/>
			<span>{`(${reviewsCount})`}</span>
		</ProductScoreContainer>
	)
}
