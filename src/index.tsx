import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IconContext } from 'react-icons'
import { HelmetProvider } from 'react-helmet-async'
import { theme } from './assets/styles/theme/theme'
import { GlobalStyle } from './assets/styles/GlobalStyle'
import { FontFaceStyle } from './assets/styles/FontFaceStyle'

import App from './App'

ReactDOM.render(
	<StrictMode>
		<HelmetProvider>
			<Router>
				<ThemeProvider theme={theme}>
					<IconContext.Provider value={{ color: '#222831', size: '1.5rem' }}>
						<FontFaceStyle />
						<GlobalStyle />
						<App />
					</IconContext.Provider>
				</ThemeProvider>
			</Router>
		</HelmetProvider>
	</StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
