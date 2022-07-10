import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	cursor: pointer;
	color: ${(props) => props.theme.colors.darkColor};
	background-color: ${(props) => props.theme.colors.lightColor};
	box-shadow: ${(props) => props.theme.boxShadows.bs2};
	padding: 0.5em 1em;
	font-size: 1.2rem;
	z-index: 50;

	:hover {
		color: ${(props) => props.theme.colors.lightColor};
		background-color: ${(props) => props.theme.colors.darkColor};
		transition: color, background-color 0.3s ease-in-out;
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
