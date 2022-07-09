import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as CartoonsSvg } from '../assets/imgs/cartoons.svg'
import { MainLayout } from './layouts/MainLayout'

import { PrimaryButton } from './PrimaryButton'

const HeroContainer = styled.section`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
	height: 100vh;
	flex-direction: column;
	background: linear-gradient(
		180deg,
		#0c4d30 -0.4%,
		#0c4a2e 30.56%,
		#0a4028 54.85%,
		#072f1e 76.87%,
		#04180f 97.42%,
		#000000 113.58%
	);
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
    max-width: 15ch;
	color: ${(props) => props.theme.colors.lightColor};
	font-size: 3.5rem;
	margin: 0;
	line-height: 4rem;
`

const DotSpan = styled.span`
	color: ${(props) => props.theme.colors.lightColor};
`
const HeroSvg = styled(CartoonsSvg)`
	position: absolute;
	width: 100%;
	right: 0;
	bottom: -7.5rem;
`

export const Hero: FC = () => {
	return (
		<HeroContainer className='full'>
			<MainLayout>
				<HeroContent>
					<HeroTitle>
						Discover the Best CBD Products<DotSpan>.</DotSpan>
					</HeroTitle>
					<PrimaryButton as={Link} to='/shop'>
						Shop now
					</PrimaryButton>
				</HeroContent>
			</MainLayout>
			<div className='full'>
				<HeroSvg />
			</div>
		</HeroContainer>
	)
}
