import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'

interface IScreenOverlayContainerProps {
	isFilterPanelOpen: boolean
}

const ScreenOverlayContainer = styled.div<IScreenOverlayContainerProps>`
	pointer-events: ${(props) => (props.isFilterPanelOpen ? 'unset' : 'none')};
	cursor: ${(props) => (props.isFilterPanelOpen ? 'pointer' : 'unset')};
	opacity: ${(props) => (props.isFilterPanelOpen ? '100' : '0')};
	background-color: #adadad58;
	position: fixed;
	z-index: 5;
	width: 100%;
	height: 100%;
	transition: opacity 0.5s ease-in-out;
`
interface IScreenOverlayProps {
	handleClick: MouseEventHandler<HTMLDivElement>
	isFilterPanelOpen: boolean
}

export const ScreenOverlay: FC<IScreenOverlayProps> = ({
	isFilterPanelOpen,
	handleClick,
}) => {
	return (
		<ScreenOverlayContainer
			onClick={handleClick}
			isFilterPanelOpen={isFilterPanelOpen}></ScreenOverlayContainer>
	)
}
