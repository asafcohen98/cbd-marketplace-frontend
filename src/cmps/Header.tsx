import { FC, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { MainLayout } from './layouts/MainLayout'

import { Logo } from './Logo'
import { NavBar } from './NavBar'

const smoothScroll = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0px); }
`

interface IHeaderContainerProps {
	isSticky: boolean
}

const HeaderContainer = styled.header<IHeaderContainerProps>`
	height: 10vh;
	position: ${(props) => (props.isSticky ? 'sticky' : 'relative')};
	top: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	box-shadow: ${(props) =>
		props.isSticky ? props.theme.boxShadows.bs2 : 'unset'};
	background: linear-gradient(
		180deg,
		#0c4d30 100%,
		#0c4a2e 100%,
		#0a4028 100%,
		#072f1e 100%,
		#04180f 100%,
		#000000 100%
	);

	&.sticky {
		animation: ${smoothScroll} 800ms ease-in-out;
		/* background: ${(props) => props.theme.colors.darkColor}; */
		background :#fff;
	}
	// test -- which color is better ?
	svg {
		path {
			fill: ${(props) =>
				props.isSticky
					? props.theme.colors.darkColor
					: props.theme.colors.lightColor};
		}
	}

	h1 {
		color: ${(props) =>
			props.isSticky
				? props.theme.colors.darkColor
				: props.theme.colors.lightColor};
	}

	a{
		font-size: 1.5rem;
		color: ${(props) =>
			props.isSticky
				? props.theme.colors.darkColor
				: props.theme.colors.lightColor};
	}

         
	transition: background-color 800ms ease-in-out;
`

const HeaderContent = styled.div`
	padding: 1rem 0;
	height: 100%;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`

export const Header: FC = ({ children }) => {
	const [isSticky, setIsSticky] = useState<boolean>(false)

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

	return (
		<HeaderContainer
			isSticky={isSticky}
			className={`${isSticky ? 'sticky' : ''}`}>
			<MainLayout>
				<HeaderContent>
					<Logo />
					<NavBar />
				</HeaderContent>
			</MainLayout>
		</HeaderContainer>
	)
}
