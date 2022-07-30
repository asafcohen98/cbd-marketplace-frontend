import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'

interface IScreenOverlayContainerProps {
	isFilterPanelOpen?: boolean
	isMenuOpen?: boolean
}

const ScreenOverlayContainer = styled.div<IScreenOverlayContainerProps>`
	top: 0;
	right: 0;
	pointer-events: ${(props) =>
		props.isFilterPanelOpen || props.isMenuOpen ? 'unset' : 'none'};
	cursor: ${(props) =>
		props.isFilterPanelOpen || props.isMenuOpen ? 'pointer' : 'unset'};
	opacity: ${(props) =>
		props.isFilterPanelOpen || props.isMenuOpen ? '100' : '0'};
	background-color: #adadad58;
	position: fixed;
	z-index: 5;
	width: 100%;
	height: 100%;
	transition: opacity 0.5s ease-in-out;
`
interface IScreenOverlayProps {
	handleClick: MouseEventHandler<HTMLDivElement>
	isFilterPanelOpen?: boolean
	isMenuOpen?: boolean
}

export const ScreenOverlay: FC<IScreenOverlayProps> = ({
	isFilterPanelOpen,
	handleClick,
	isMenuOpen,
}) => {
	return (
		<ScreenOverlayContainer
			onClick={handleClick}
			isFilterPanelOpen={isFilterPanelOpen}
			isMenuOpen={isMenuOpen}></ScreenOverlayContainer>
	)
}
