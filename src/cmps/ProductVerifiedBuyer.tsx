import { FC } from 'react'
import styled from 'styled-components'
import { MdVerified } from 'react-icons/md'

const VerifiedBuyerContainer = styled.div`
	cursor: pointer;
	font-size: 0.8rem;
	outline: none;
	padding: 0 0.3rem;
	display: flex;
	align-items: center;
	border : 0.1rem solid ${props => props.theme.colors.darkColor};

	span:last-of-type {
		color: ${(props) => props.theme.colors.darkColor};;;
	}

	svg {
		fill: ${(props) => props.theme.colors.darkColor};
		margin-inline-end: 0.2rem;
	}
`

interface IVerifiedBuyerReviewProps {
	isShown: boolean
}

const VerifiedBuyerReview = styled.div<IVerifiedBuyerReviewProps>`
    pointer-events: none;
	display: ${(props) => (props.isShown ? 'flex' : 'none')};
	display: flex;
	opacity: ${(props) => (props.isShown ? '100' : '0')};
	flex-direction: column;
	text-align: center;
	justify-content: center;
	padding: 0.5rem;
    height: 200px;
    bottom: 100%;
	right: 0;
	left: 0;
	position: absolute;
	background-color: #12121298;
	transition: all 0.3s ease-in-out;

	>*:not(:last-child){
		margin-bottom: 0.5rem;
	}
	
	span {
		color: ${props => props.theme.colors.lightColor} !important;
		font-family: Mukta-Regular,sans-serif;
	}

	h3{
		font-size: 1rem;
		color: ${props => props.theme.colors.lightColor};
		margin: 0;
	}

	p {
		color: ${props => props.theme.colors.lightColor};
		font-size: 0.8rem;
		margin: 0;
		font-family: Mukta-Regular,sans-serif;
	}

`

interface IProductVerifiedBuyerProps {
	isReviewShown: boolean
	onChangeIsReviewShown: (isReviewShown: boolean) => void
	recentCustomerDesc: string | null
	recentCustomerName: string | null
	recentCustomerTitle: string | null
}

export const ProductVerifiedBuyer: FC<IProductVerifiedBuyerProps> = ({
	isReviewShown,
	onChangeIsReviewShown,
	recentCustomerDesc,
	recentCustomerName,
	recentCustomerTitle,
}) => {

	return (
		<VerifiedBuyerContainer
			onMouseEnter={() => onChangeIsReviewShown(true)}
			onMouseLeave={() => onChangeIsReviewShown(false)}>
			<VerifiedBuyerReview isShown={isReviewShown}>
				<h3>{recentCustomerTitle}</h3>
				<p>"{recentCustomerDesc}"</p>
				<span>{recentCustomerName}</span>
			</VerifiedBuyerReview>
			<MdVerified size='1em' />
			<span>Verified review</span>
		</VerifiedBuyerContainer>
	)
}
