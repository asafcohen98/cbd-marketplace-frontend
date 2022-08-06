import { FC, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { MainLayout } from './layouts/MainLayout'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ReactComponent as AboutSvg } from '../assets/imgs/about-svg.svg'

const AboutContainer = styled.section`
	background-color: ${(props) => props.theme.colors.brandLightColor};
	color: ${(props) => props.theme.colors.darkColor};
`

const AboutInnerContainer = styled.div`
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const AboutContent = styled.div`
	background-color: transparent;
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
	max-width: 95ch;
	font-size: 1.125rem;
`

const SvgContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 32rem;
	height: 25rem;
	border-radius: 50%;
	background-color: #cbf3f0;
`

export const About: FC = () => {
	const aboutContainerRef = useRef()
	const aboutInnerContainerRef = useRef()

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.fromTo(
			aboutContainerRef.current,
			{
				opacity: 0,
				y: 100,
			},
			{
				scrollTrigger: {
					trigger: aboutContainerRef.current,
					start: 'top 70%',
				},
				opacity: 1,
				y: 0,
				duration: 2,
			}
		)
	}, [])

	return (
		<AboutContainer className='full' id='about' ref={aboutContainerRef}>
			<MainLayout>
				<AboutInnerContainer>
					<AboutContent ref={aboutInnerContainerRef}>
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
					<SvgContainer>
					<AboutSvg />
					</SvgContainer>
				</AboutInnerContainer>
			</MainLayout>
		</AboutContainer>
	)
}
