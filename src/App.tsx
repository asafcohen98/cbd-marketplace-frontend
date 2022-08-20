import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import {NotFound } from './pages/NotFound'
import { Shop } from './pages/Shop'
import { Home } from './pages/Home'

import { Header } from './cmps/Header'
import { MainLayout } from './cmps/layouts/MainLayout'
import { Footer } from './cmps/Footer'

const App: FC = () => {
	return (
		<>
			<Header />
			<MainLayout>
				<Routes>
					<Route path='/shop' element={<Shop />} />
					<Route  path='/' element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer/>
			</MainLayout>
		</>
	)
}

export default App
