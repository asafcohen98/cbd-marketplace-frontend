import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as NotFoundSvg } from '../assets/imgs/not-found.svg'

const NotFoundContainer = styled.section`
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

const NotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NotFoundTitle = styled.h2`
color: ${props => props.theme.colors.darkColor};
font-size: 4rem;
line-height: 1em;
    
`

export const NotFound: FC = () => {
	return (
		<NotFoundContainer>
            <NotFoundContent>
            <NotFoundTitle>404</NotFoundTitle>
			<NotFoundSvg />
            </NotFoundContent>
		</NotFoundContainer>
	)
}
