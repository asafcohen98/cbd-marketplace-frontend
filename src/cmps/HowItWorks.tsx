import { FC } from 'react'
import styled from 'styled-components'
import { MainLayout } from './layouts/MainLayout'

import { ReactComponent as StepSvg } from '../assets/imgs/step.svg'

const HIWContainer = styled.section`
	background-color: #c1e153;
	padding: 10rem 0 20rem 0;
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
	margin-bottom: 1rem;
`

const HIWSteps = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const HIWStep = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	z-index: 0;
`
const HIWStepTitle = styled.h3`
	color: ${(props) => props.theme.colors.darkColor};
	font-size: 1.5rem;
	line-height: 1em;
	margin-bottom: 0;
`

const HIWStepParagraph = styled.p`
	color: ${(props) => props.theme.colors.darkColor};
	font-size: 1rem;
	max-width: 45ch;
	margin: 0;
`

const HIWStepNumber = styled.span`
	color: #DDFF75;
	font-family: SingleDay-Regular;
	font-size: 25rem;
	z-index: -1;
	line-height: 0.5em;
	position: absolute;
	top: 0;
	right: 50%;
	transform: translateX(0,-50%);
`

export const HowItWorks: FC = () => {
	return (
		<HIWContainer className='full' id='howItWorks'>
			<MainLayout>
				<HIWContentContainer>
					<HIWTitle>How it works</HIWTitle>
					<HIWSteps>
						<HIWStep>
							<HIWStepTitle>Search & Compare Prices</HIWStepTitle>
							<HIWStepParagraph>
								Search for your CBD products and compare prices to find the best
								deal.
							</HIWStepParagraph>
							<HIWStepNumber>1</HIWStepNumber>
						</HIWStep>
						<StepSvg />
						<HIWStep>
							<HIWStepTitle>Direct links to every site</HIWStepTitle>
							<HIWStepParagraph>
								Clicking on any of your searched CBD products takes you directly
								to the CBD brand's online site.
							</HIWStepParagraph>
							<HIWStepNumber>2</HIWStepNumber>
						</HIWStep>
						<StepSvg />
						<HIWStep>
							<HIWStepTitle>Use Brand's deals & Buy</HIWStepTitle>
							<HIWStepParagraph>
								Find the best deals on every brand when you buy CBD online with
								CBDgle.
							</HIWStepParagraph>
							<HIWStepNumber>3</HIWStepNumber>
						</HIWStep>
					</HIWSteps>
				</HIWContentContainer>
			</MainLayout>
		</HIWContainer>
	)
}
