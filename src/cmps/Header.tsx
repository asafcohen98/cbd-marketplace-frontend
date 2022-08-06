import { FC, useEffect, useState } from 'react'
import { Location, useLocation } from 'react-router-dom'
import { useUpdateEffect } from '../hooks/useUpdateEffect'
import styled, { keyframes } from 'styled-components'

import { MainLayout } from './layouts/MainLayout'

import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { BurgerMenu } from './BurgerMenu'

const smoothScroll = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0px); }
`

interface IHeaderContainerProps {
	headerType: HeaderType
	isSticky: boolean
	isMenuOpen: boolean
}

const HeaderContainer = styled.header<IHeaderContainerProps>`
	height: 10vh;
	position: ${(props) => (props.isSticky ? 'sticky' : 'relative')};
	top: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	background: ${(props) => props.theme.colors.lightColor};
	&.sticky {
		animation: ${smoothScroll} 800ms ease-in-out;
		box-shadow: ${(props) => props.theme.boxShadows.bs2};
		@media only screen and (max-width: ${(props) => props.theme.breakpoints.bigTablet}) {
		animation: unset;
	}
	}

	svg {
		path {
			fill: ${(props) => props.theme.colors.darkColor};
		}
	}

	h1 {
		color: ${(props) => props.theme.colors.darkColor};
	}

	a {
		font-size: 1.5rem;
		color: ${(props) => props.theme.colors.darkColor};
	}
`

const HeaderContent = styled.div`
	padding: 1rem 0;
	height: 100%;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`

type HeaderType = 'home' | 'shop'

export const Header: FC = () => {
	const [isSticky, setIsSticky] = useState<boolean>(false)
	const [headerType, setHeaderType] = useState<HeaderType>('home')
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const location: Location = useLocation()

	const trackScroll = () => {
		if (typeof window === 'undefined') return
		setIsSticky(window.scrollY >= 90)
	}

	useEffect(() => {
		document.addEventListener('scroll', trackScroll)
		return () => {
			document.removeEventListener('scroll', trackScroll)
		}
	}, [])

	useEffect(() => {
		const { pathname } = location
		if (pathname.includes('shop')) setHeaderType('shop')
		else setHeaderType('home')
	}, [location])

	useUpdateEffect(() => {
		if (isMenuOpen) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'unset'
	}, [isMenuOpen])

	return (
		<HeaderContainer
			headerType={headerType}
			isSticky={isSticky}
			isMenuOpen={isMenuOpen}
			className={`${isSticky ? 'sticky' : ''}`}>
			<MainLayout>
				<HeaderContent>
					<Logo />
					<NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
					<BurgerMenu
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
						headerType={headerType}
						isSticky={isSticky}
					/>
				</HeaderContent>
			</MainLayout>
		</HeaderContainer>
	)
}
