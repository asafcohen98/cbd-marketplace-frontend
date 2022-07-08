import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as HIWSvg } from '../assets/imgs/howItWorks.svg'

const HIWContainer = styled.section`
	display: flex;
    justify-content: flex-end;
	
`

export const HowItWorks: FC = () => {
	return (
		<HIWContainer className='full'>
			<HIWSvg id='howItWorks' />
		</HIWContainer>
	)
}
