import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Shop } from './pages/Shop'
import { Home } from './pages/Home'

import { Header } from './cmps/Header'
import { Logo } from './cmps/Logo'
import { NavBar } from './cmps/NavBar'
import { MainLayout } from './cmps/layouts/MainLayout'
import { Footer } from './cmps/Footer'

const App: FC = () => {
	return (
		<>
			<Header>
				<Logo />
				<NavBar />
			</Header>
			<MainLayout>
				<Routes>
					<Route path='/shop' element={<Shop />} />
					<Route  path='/' element={<Home />} />
				</Routes>
				<Footer/>
			</MainLayout>
		</>
	)
}

export default App
