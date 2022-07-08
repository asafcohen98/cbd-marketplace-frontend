import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import heroBackground from '../assets/imgs/bg.png'
import { MainLayout } from './layouts/MainLayout'

import { PrimaryButton } from './PrimaryButton'

const HeroContainer = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	height: 90vh;
	margin-bottom: 2rem;
	flex-direction: column;
	background-image: url(${heroBackground});
	background-attachment: fixed;
`

const HeroOverlay = styled.div`
	background-color: #fffffff1;
	border-top-right-radius: 100rem;
	width: 90%;
	height: 100%;
	position: absolute;
	inset: 0;
`
const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	> *:not(:last-child) {
		margin-bottom: 1.5rem;
	}
`

const HeroTitle = styled.h1`
	color: ${(props) => props.theme.colors.darkColor};
	font-size: 3rem;
	margin: 0;
	line-height: 1.5rem;
`

const DotSpan = styled.span`
	color : ${props => props.theme.colors.brandLightColor}
`

const HeroParagraph = styled.p`
	margin: 0;
	font-family: Mukta-Light, sans-serif;
	max-width: 102ch;
`

export const Hero: FC = () => {
	return (
		<HeroContainer className='full'>
			<HeroOverlay />
			<MainLayout>
				<HeroContent>
					<HeroTitle>Discover the Best CBD Products online<DotSpan>.</DotSpan></HeroTitle>
					<HeroParagraph>
						With thousands of cannabidiol (CBD) products, CBDgle makes it easy
						to find the highest-quality CBD products designed just for your
						needs. So whether you want to help your furry friend live their best
						life with our CBD PETS line or you want to find the best CBD brands
						online all in one place for you.
					</HeroParagraph>
					<PrimaryButton as={Link} to='/shop'>
						Shop now
					</PrimaryButton>
				</HeroContent>
			</MainLayout>
		</HeroContainer>
	)
}
