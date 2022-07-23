import { FC } from 'react'

import { Hero } from '../cmps/Hero'
import { About } from '../cmps/About'
import { HowItWorks } from '../cmps/HowItWorks'

export const Home: FC = () => {
	return (
		<>
			<Hero />
			<About  />
			<HowItWorks />
		</>
	)
}
