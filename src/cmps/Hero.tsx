import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as HeroSvg } from '../assets/imgs/hero-svg.svg'
import { MainLayout } from './layouts/MainLayout'

import { Button } from './Button'

const HeroContainer = styled.section`
	width: 100%;
	display: flex;
	height: 90vh;
	background: ${(props) => props.theme.colors.lightColor};
`
const HeroContent = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: space-between;
	> *:not(:last-child) {
		margin-bottom: 1.5rem;
	}
	z-index: 5;
`

const HeroTitle = styled.h1`
	max-width: 15ch;
	color: ${(props) => props.theme.colors.darkColor};
	font-size: 3.5rem;
	margin: 0;
	line-height: 4rem;
`

const StyledHeroSvg = styled(HeroSvg)`
`

const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	>*:not(:last-child){
		margin-bottom: 1rem;
	}
`

export const Hero: FC = () => {
	return (
		<HeroContainer>
				<HeroContent>
					<LeftContainer>
					<HeroTitle>Discover The Best CBD Products</HeroTitle>
					<Button
						size='large'
						variant='rounded'
						color='dark'
						as={Link}
						to='/shop'>
						Shop now
					</Button>
					</LeftContainer>
					<StyledHeroSvg />
				</HeroContent>
		</HeroContainer>
	)
}
