import { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

type ButtonSizes = 'small' | 'medium' | 'large'
type ButtonVariants = 'rounded' | 'regular'
type ButtonColors = 'dark' | 'light'

interface IStyledButtonProps {
	size: ButtonSizes
	variant: ButtonVariants
	color: ButtonColors
}

const StyledButton = styled.button<IStyledButtonProps>`
	cursor: pointer;
	font-family: Mukta-Regular, sans-serif;
	color: ${(props) =>
		props.color === 'dark'
			? props.theme.colors.darkColor
			: props.theme.colors.lightColor};
	background-color: ${(props) => props.theme.colors.brandLightColor};
	border-radius: ${(props) =>
		props.variant === 'rounded' ? '0.5rem' : 'unset'};
	${(props) =>
		props.size === 'small' &&
		css`
			padding: 0.5em 2em;
			font-size: 0.875rem;
		`}
	${(props) =>
		props.size === 'medium' &&
		css`
			padding: 0.5em 1em;
			font-size: 1.2rem;
		`}
	${(props) =>
		props.size === 'large' &&
		css`
			padding: 0.5em 2em;
			font-size: 1.5rem;
		`}
		@media only screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		&:hover {
			color: ${(props) => props.theme.colors.brandLightColor};
			background-color: ${(props) =>
				props.color === 'dark'
					? props.theme.colors.darkColor
					: props.theme.colors.lightColor};
			transition: color, background-color 0.3s ease-in-out;
		}
	      
	}
`
interface IButtonProps {
	size: ButtonSizes
	variant: ButtonVariants
	color: ButtonColors
	type?: 'button' | 'submit' | 'reset'
	as?: any
	href?: string
	target?: string
	to?: string
	handleClick?: React.MouseEventHandler<HTMLButtonElement>
	children: ReactNode
}

export const Button: FC<IButtonProps> = ({
	size,
	variant,
	color,
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
			size={size}
			variant={variant}
			color={color}
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
