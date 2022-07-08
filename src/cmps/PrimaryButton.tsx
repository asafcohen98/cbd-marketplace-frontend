import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	color: ${(props) => props.theme.colors.darkColor};
	background-color: ${(props) => props.theme.colors.brandLightColor};
	padding: 0.5em 1em;
	font-size: 1.2rem;

	:hover {
		color: ${(props) => props.theme.colors.brandLightColor};
		background-color: ${(props) => props.theme.colors.darkColor};
		transition: all .6s ease-in-out;
	}
`

interface IPrimaryButtonProps {
	type?: 'button' | 'submit' | 'reset'
	as?: any
	href?: string
	target?: string
	to?: string
	handleClick?: React.MouseEventHandler<HTMLButtonElement>
	children: ReactNode
}

export const PrimaryButton: FC<IPrimaryButtonProps> = ({
	type,
	handleClick,
	children,
	as,
	href,
	target,
	to,
}) => {
	return (
		<StyledButton
			as={as}
			href={href}
			to={to}
			target={target}
			type={type}
			onClick={handleClick}>
			{children}
		</StyledButton>
	)
}
