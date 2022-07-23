import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { MainLayout } from './layouts/MainLayout'

import aboutImg from '../assets/imgs/about.jpeg'

const AboutContainer = styled.section`
	color: ${(props) => props.theme.colors.darkColor};
`

const AboutInnerContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const AboutContent = styled.div`
	padding: 10rem 0;
`

const AboutTitle = styled.h1`
	line-height: 1em;
	margin-bottom: 1.5rem;
	font-size: 3.5rem;
	color: ${(props) => props.theme.colors.darkColor};
`
const AboutParagraph = styled.p`
	margin: 0;
	font-family: Mukta-Regular, sans-serif;
	max-width: 102ch;
	font-size: 1rem;
`

const morphBlob = keyframes`
  0%,100% {
	border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
  }
  33% {
	border-radius: 72% 28% 48% 48% / 28% 28% 72% 72%;
  }
  66%{
	border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;
  }
`

const AboutBlob = styled.div`
	overflow: hidden;
	width: 25rem;
	height: 25rem;
	background: url(${aboutImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: right;
	border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
	animation: ${morphBlob} 3.75s linear infinite;
`

export const About: FC = () => {
	return (
		<AboutContainer className='full' id='about'>
			<MainLayout>
				<AboutInnerContainer>
					<AboutContent>
						<AboutTitle>About</AboutTitle>
						<AboutParagraph>
							With thousands of cannabidiol (CBD) products, CBDgle makes it easy
							to find the highest - quality CBD products designed just for your
							needs. So whether you want to help your furry friend live their
							best life with our CBD PETS line or you want to find the best CBD
							brands online all in one place for you, w e've got you covered. At
							CBDgle, we put the power of search in the palm of your hands so
							you can quickly search and find the best prices, health benefits,
							and more, including CBD Gummies, Sugar & Gluten - free CBD
							Gummies, Vegan free CBD Gummies, CBD Oil, CBD Oil for dogs, CBD
							Cream and more!{' '}
						</AboutParagraph>
					</AboutContent>
					<AboutBlob />
				</AboutInnerContainer>
			</MainLayout>
		</AboutContainer>
	)
}
