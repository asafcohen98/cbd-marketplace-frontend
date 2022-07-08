import { FC } from 'react'
import styled from 'styled-components'

const StyledLabelsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	> *:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
`

const StyledLabel = styled.span`
	text-align: center;
	background-color: ${(props) => props.theme.colors.lightColor};
	color: ${(props) => props.theme.colors.lightColor};
	border-radius: ${(props) => props.theme.borders.capsule};
	padding: 0.1em 1em;
	font-size: 1rem;
`

interface ILablesProps {
	labels: string[]
	defaultLabel: string
}

export const Labels: FC<ILablesProps> = ({ labels, defaultLabel }) => {
	return (
		<StyledLabelsContainer>
			{!labels.length && <StyledLabel>{defaultLabel}</StyledLabel>}
			{labels.map((label) => {
				return <StyledLabel key={label}>{label}</StyledLabel>
			})}
		</StyledLabelsContainer>
	)
}
