import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as CartoonsSvg } from '../assets/imgs/cartoons.svg'
import { MainLayout } from './layouts/MainLayout'

import { Button } from './Button'

const HeroContainer = styled.section`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	height: 100vh;
	flex-direction: column;
	background: ${(props) => props.theme.colors.brandDarkColor};
`
const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	> *:not(:last-child) {
		margin-bottom: 1.5rem;
	}
	z-index: 5;
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

const StyledCartoonsSvg = styled(CartoonsSvg)`
	position: absolute;
	width: 100vw;
	right: 0;
	bottom: -0.5%;
`

export const Hero: FC = () => {
	return (
		<HeroContainer className='full'>
			<MainLayout>
				<HeroContent>
					<HeroTitle>
						Discover the Best CBD Products<DotSpan>.</DotSpan>
					</HeroTitle>
					<Button
						size='large'
						variant='rounded'
						color='light'
						as={Link}
						to='/shop'>
						Shop now
					</Button>
				</HeroContent>
			</MainLayout>
			{/* <StyledCartoonsSvg /> */}
		</HeroContainer>
	)
}
