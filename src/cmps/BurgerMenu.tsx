import { FC, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type HeaderType = 'home' | 'shop'

interface IStyledBurgerMenuProps {
	isMenuOpen: boolean
	headerType: HeaderType
	isSticky: boolean
}

const StyledBurgerMenu = styled.button<IStyledBurgerMenuProps>`
	display: none;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 2rem;
		height: 2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 100;

		&:focus {
			outline: none;
		}

		div {
			width: 2rem;
			height: 0.25rem;
			background: ${(props) =>
				props.isSticky || props.headerType === 'shop' || props.isMenuOpen
					? props.theme.colors.darkColor
					: props.theme.colors.lightColor};
			border-radius: 10px;
			transition: all 0.3s linear;
			position: relative;
			transform-origin: 1px;

			:first-child {
				transform: ${(props) =>
					props.isMenuOpen ? 'rotate(45deg)' : 'rotate(0)'};
			}

			:nth-child(2) {
				opacity: ${(props) => (props.isMenuOpen ? '0' : '1')};
				transform: ${(props) =>
					props.isMenuOpen ? 'translateX(20px)' : 'translateX(0)'};
			}

			:nth-child(3) {
				transform: ${(props) =>
					props.isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
			}
		}
	}
`

interface IBurgerMenuProps {
	isMenuOpen: boolean
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>
	headerType: HeaderType
	isSticky: boolean
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({
	isMenuOpen,
	setIsMenuOpen,
	headerType,
	isSticky,
}) => {
	return (
		<StyledBurgerMenu
			isMenuOpen={isMenuOpen}
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			headerType={headerType}
			isSticky={isSticky}>
			<div />
			<div />
			<div />
		</StyledBurgerMenu>
	)
}
