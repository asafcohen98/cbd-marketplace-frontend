import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'
import { FiFilter } from 'react-icons/fi'

const StyledProductFilterPanelButton = styled.button`
    visibility: hidden;
 
    @media only screen and (max-width: ${(props) =>	props.theme.breakpoints.bigTablet}) {
      display: flex;
	  align-items: center;
	  background-color: transparent;
      visibility: unset;
	   > *:not(:last-child) {
		margin-inline-end: 0.5rem;
	   }

       span{
        font-size: 1rem;
        font-family: Mukta-Regular,sans-serif;
       }   
	}

`

interface IProductFilterPanelButtonProps {
    handleClick : MouseEventHandler<HTMLButtonElement>
}

export const ProductFilterPanelButton: FC<IProductFilterPanelButtonProps> = ({handleClick}) => {
	return (
		<StyledProductFilterPanelButton onClick={handleClick}>
			<FiFilter />
			<span>Filter</span>
		</StyledProductFilterPanelButton>
	)
}
