import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

export const ShopMetaTags: FC = () => {
	return (
		<Helmet>
			<title>
				Shop - Sloth Online | Discover Your Best CBD Products Online
			</title>
			<meta
				name='title'
				content='Shop - Sloth Online | Discover Your Best CBD Products Online'></meta>
			<link rel='canonical' href='https://www.thesloth.online/shop' />
			<meta property='og:title' content='Shop - Sloth Online' />
			<meta property='og:url' content='https://www.thesloth.online/shop' />
			<meta property='og:site_name' content='Sloth Online'></meta>
			<meta
				property='og:description'
				content='With great prices and a large selection of CBD products, you can now buy the highest quality CBD products online including topicals, gummies, capsules'
			/>
			<meta
				property='og:image'
				content='https://res.cloudinary.com/asafdev/image/upload/v1662823873/Layer_2_vbittb.png'
			/>
			<meta
				property='og:image:secure_url'
				content='https://res.cloudinary.com/asafdev/image/upload/v1662823873/Layer_2_vbittb.png'></meta>
			<meta property='og:image:height' content='630'></meta>
			<meta property='og:image:width' content='1200'></meta>
			<meta property='og:locale' content='en_US'></meta>
			<meta property='og:type' content='website' />
		</Helmet>
	)
}
