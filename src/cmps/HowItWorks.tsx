import { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { MainLayout } from './layouts/MainLayout'

import { ReactComponent as StepSvg } from '../assets/imgs/step.svg'

const HIWContainer = styled.section`
	background-color: ${(props) => props.theme.colors.lightColor};
	padding: 10rem 0;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		padding: 2rem 0;
	}
`

const HIWContentContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const HIWTitle = styled.h1`
	line-height: 1em;
	margin-bottom: 1.5rem;
	font-size: 3.5rem;
	color: ${(props) => props.theme.colors.darkColor};
	margin-bottom: 2.1rem;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		font-size: 2rem;
	}
`

const HIWSteps = styled.div`
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.bigTablet}) {
		flex-direction: column;
	}
`

const HIWStep = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
	/* justify-content: flex-start; */
	align-items: flex-start;
	> *:not(:last-child) {
		margin-inline-end: 1rem;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.bigTablet}) {
		> *:not(:last-child) {
		margin-inline-end: unset;
	}
	}
`

const HIWStepContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	z-index: 0;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.bigTablet}) {
		margin-bottom: 2rem;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		margin-bottom: 1.2rem;
	}
`
const HIWStepTitle = styled.h3`
	color: ${(props) => props.theme.colors.darkColor};
	font-size: 2rem;
	line-height: 1em;
	margin-bottom: 0.5rem;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		font-size: 1rem;
	}
`

const HIWStepParagraph = styled.p`
  font-family: Mukta-Regular,sans-serif;
	color: ${(props) => props.theme.colors.darkColor};
	font-size: 1.125rem;
	max-width: 35ch;
	margin: 0;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		font-size: 0.875rem;
	}
`

const HIWStepNumberContainer = styled.div`
	background-color: #ffbf69;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	margin-bottom: 1rem;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		width: 2.5rem;
	height: 2.5rem;
	}
`

const HIWStepNumber = styled.span`
	color: ${props => props.theme.colors.darkColor};
	font-size: 3rem;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		font-size: 2rem;
	}
`

const HIWStepSvg = styled(StepSvg)`
	circle {
		fill: ${(props) => props.theme.colors.darkColor};
		size: 1rem;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.narrow}) {
		display: none;
	}
`

export const HowItWorks: FC = () => {
	const hiwContainerRef = useRef()
	const hiwContentContainerRef = useRef()

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.fromTo(
			hiwContainerRef.current,
			{
				opacity: 0,
				x: 100,
			},
			{
				scrollTrigger: {
					trigger: hiwContentContainerRef.current,
					start: 'top 50%',
				},
				opacity: 1,
				x: 0,
				duration: 2,
			}
		)
	}, [])
	return (
		<HIWContainer className='full' id='howItWorks' ref={hiwContentContainerRef}>
			<MainLayout>
				<HIWContentContainer ref={hiwContainerRef}>
					<HIWTitle>How it works</HIWTitle>
					<HIWSteps>
						<HIWStep>
							<HIWStepNumberContainer>
								<HIWStepNumber>1</HIWStepNumber>
							</HIWStepNumberContainer>
							<HIWStepContent>
								<HIWStepTitle>Search & Compare Prices</HIWStepTitle>
								<HIWStepParagraph>
									Search for your CBD products and compare prices to find the
									best deal.
								</HIWStepParagraph>
							</HIWStepContent>
						</HIWStep>
						<HIWStepSvg />
						<HIWStep>
							<HIWStepNumberContainer>
								<HIWStepNumber>2</HIWStepNumber>
							</HIWStepNumberContainer>
							<HIWStepContent>
								<HIWStepTitle>Direct links to every site</HIWStepTitle>
								<HIWStepParagraph>
									Clicking on any of your searched CBD products takes you
									directly to the CBD brand's online site.
								</HIWStepParagraph>
							</HIWStepContent>
						</HIWStep>
						<HIWStepSvg />
						<HIWStep>
							<HIWStepNumberContainer>
								<HIWStepNumber>3</HIWStepNumber>
							</HIWStepNumberContainer>
							<HIWStepContent>
								<HIWStepTitle>Use Brand's deals & Buy</HIWStepTitle>
								<HIWStepParagraph>
									Find the best deals on every brand when you buy CBD online
									with CBDgle.
								</HIWStepParagraph>
							</HIWStepContent>
						</HIWStep>
					</HIWSteps>
				</HIWContentContainer>
			</MainLayout>
		</HIWContainer>
	)
}
