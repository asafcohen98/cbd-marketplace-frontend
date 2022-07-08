import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IFilterTitleContainerProps {
	isBigText?: boolean
}

const FilterTitleContainer = styled.div<IFilterTitleContainerProps>`
	color: ${(props) => props.theme.colors.darkColor};
	display: flex;
	margin-bottom: 0.5rem;
	align-items: center;
	font-size: ${props => props.isBigText ? '1.2rem' : '1rem'};
	font-weight: 500;
	font-family: Mukta-Regular, sans-serif;

	> *:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
`

interface IFilterTitleProps {
	children: ReactNode
	isBigText?: boolean
}

export const FilterTitle: FC<IFilterTitleProps> = ({ children, isBigText }) => {
	return <FilterTitleContainer isBigText={isBigText}>{children}</FilterTitleContainer>
}
