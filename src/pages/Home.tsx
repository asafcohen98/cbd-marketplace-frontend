import { FC } from 'react'

import { Hero } from '../cmps/Hero'
import { HowItWorks } from '../cmps/HowItWorks'

export const Home: FC = () => {
	return (
		<>
			<Hero />
            <HowItWorks />
		</>
	)
}
