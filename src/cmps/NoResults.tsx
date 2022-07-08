import { FC } from 'react'
import styled from 'styled-components'

const NoResultsContainer = styled.div`
	display: flex;
    flex: 1;
	min-height: 90vh;
	justify-content: center;
	align-items: center;
`

const NoResultsTitle = styled.h2`
	color: ${(props) => props.theme.colors.darkColor};
`

export const NoResults: FC = () => {
	return (
		<NoResultsContainer>
			<NoResultsTitle>No Results</NoResultsTitle>
		</NoResultsContainer>
	)
}
