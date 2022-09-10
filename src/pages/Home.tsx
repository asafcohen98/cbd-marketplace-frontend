import { FC } from 'react'

import { Hero } from '../cmps/Hero'
import { About } from '../cmps/About'
import { HowItWorks } from '../cmps/HowItWorks'
import { HomeMetaTags } from '../meta-cmps/HomeMetaTags'

export const Home: FC = () => {
	return (
		<>
		   <HomeMetaTags/>
			<Hero />
			<About  />
			<HowItWorks />
		</>
	)
}
