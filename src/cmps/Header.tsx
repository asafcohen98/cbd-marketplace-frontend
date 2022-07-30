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
	isMenuOpen : boolean
}

const HeaderContainer = styled.header<IHeaderContainerProps>`
	height: 10vh;
	position: ${(props) => (props.isSticky ? 'sticky' : 'relative')};
	top: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	box-shadow: ${(props) =>
		props.isSticky || props.headerType === 'shop'
			? props.theme.boxShadows.bs2
			: 'unset'};
	background: ${(props) =>
		props.headerType === 'shop'
			? props.theme.colors.lightColor
			: props.theme.colors.brandDarkColor};

	&.sticky {
		animation: ${smoothScroll} 800ms ease-in-out;
		background: ${(props) => props.theme.colors.lightColor};
	}

	svg {
		path {
			fill: ${(props) =>
				props.isSticky || props.headerType === 'shop'
					? props.theme.colors.darkColor
					: props.theme.colors.lightColor};
		}
	}

	h1 {
		color: ${(props) =>
			props.isSticky || props.headerType === 'shop'
				? props.theme.colors.darkColor
				: props.theme.colors.lightColor};
	}

	a {
		font-size: 1.5rem;
		color: ${(props) =>
			props.isSticky || props.headerType === 'shop' || props.isMenuOpen
				? props.theme.colors.darkColor
				: props.theme.colors.lightColor};
	}
`

const HeaderContent = styled.div`
	padding: 1.5rem 0;
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
					<NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
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
