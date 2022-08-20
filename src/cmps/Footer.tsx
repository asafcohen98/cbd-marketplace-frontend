import { FC } from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

import { MainLayout } from './layouts/MainLayout'

const FooterContainer = styled.footer`
	border-top: 0.5px solid ${(props) => props.theme.colors.darkColor};
	padding: 5rem 0;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		padding: 2rem 0;
	}
`

const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`
const FooterTitle = styled.h3`
	color: ${(props) => props.theme.colors.darkColor};
	font-size: 1.125rem;
	padding: 1.5rem 0;
	margin: 0;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		font-size: 1rem;
	}
`

const FooterParagraph = styled.p`
	margin: 0 0 1.5rem 0;
	max-width: 110ch;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		display: none;
	}
`

const FooterSocial = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: 1.5rem;
`

const SocialContainer = styled.div`
	display: flex;
	> *:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
`
const FooterCopyright = styled.small`
	font-size: 0.9rem;
	margin-bottom: 1.5rem;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		font-size:  0.875rem
	}
`

export const Footer: FC = () => {
	return (
		<FooterContainer className='full'>
			<MainLayout>
				<FooterContent>
					<FooterTitle>
						www.thesloth.online is the best source site to compare CBD Products
						prices
					</FooterTitle>
					<FooterParagraph>
						All of our CBD products are 3rd party tested and have up to * 0.3%
						THC . *CBD products are legal on the federal level but are still
						illegal under some state laws. All CBD product's health benefits on
						our website are based on the CBD brand's declaration and their
						customer's reviews. We are committed to making our website's content
						accessible and user - friendly to everyone. All CBD brands on our
						website have their own disclaimer and terms please check them out
						before buying any products. For any questions, please contact our
						support team by email: hello@thesloth.online
					</FooterParagraph>
					<FooterSocial>
						<SocialContainer>
							<BsLinkedin />
							<BsFacebook />
							<BsTwitter />
							<BsInstagram />
						</SocialContainer>
					</FooterSocial>
					<FooterCopyright>
					    hello@thesloth.online is the best source site to compare CBD
						Products prices 2022 Sloth-cbd all rights reserved
					</FooterCopyright>
				</FooterContent>
			</MainLayout>
		</FooterContainer>
	)
}
