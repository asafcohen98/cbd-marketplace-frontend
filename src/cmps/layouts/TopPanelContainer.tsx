import { FC, ReactNode } from "react"
import styled from "styled-components"


const StyledTopPanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;

    @media only screen and (max-width: ${(props) =>	props.theme.breakpoints.bigTablet}) {
        margin-bottom : 0.5rem ;
	}
`

interface ITopPanelContainerProps{
    children : ReactNode
}

export const TopPanelContainer : FC<ITopPanelContainerProps> = ({children}) => {
  return (
    <StyledTopPanelContainer>{children}</StyledTopPanelContainer>
  )
}
