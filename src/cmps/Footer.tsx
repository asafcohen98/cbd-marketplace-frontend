import { FC } from 'react'
import styled from 'styled-components'
import { BsLinkedin, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

import { MainLayout } from './layouts/MainLayout'
import { Logo } from './Logo'

const FooterContainer = styled.footer`
	box-shadow: ${(props) => props.theme.boxShadows.bs2};
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
	font-size: 1.5rem;
	padding: 1.5rem 0;
	margin: 0;
`

const FooterParagraph = styled.p`
	margin: 0 0 1.5rem 0;
	max-width: 150ch;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		display: none;
	}
`

const FooterSocial = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
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
`

export const Footer: FC = () => {
	return (
		<FooterContainer className='full'>
			<MainLayout>
				<FooterContent>
					<FooterTitle>
						www.cbdgle.com is the best source site to compare CBD Products
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
						support team by email: contact@cbdgle.com.
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
						Contact@cbdgle.com is the best source site to compare CBD Products
						prices 2022 CBDgle all rights reserved
					</FooterCopyright>
				</FooterContent>
			</MainLayout>
		</FooterContainer>
	)
}
