import { ChangeEventHandler, FC } from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.label`
	display: flex;
	align-items: center;
	position: relative;
	padding-left: 25px;
	margin-bottom: 6px;
	cursor: pointer;
	:hover input ~ {
		background-color: ${(props) => props.theme.colors.mutedColor};
	}
`

const CheckboxInput = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
	:checked ~ span {
		background-color: ${(props) => props.theme.colors.brandLightColor};
	}
	:checked ~ :after {
		display: block;
	}
`

const CheckboxMark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 18px;
	width: 18px;
	background-color: ${(props) => props.theme.colors.mutedColor};

	:after {
		content: '';
		position: absolute;
		display: none;
		left: 6px;
		top: 2px;
		width: 3px;
		height: 9px;
		border: solid ${(props) => props.theme.colors.lightColor};
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
	}
`

interface ICheckboxProps {
	id: string
	isChecked: boolean
	name: string
	value: string | ReadonlyArray<string> | number | undefined
	handleChange: ChangeEventHandler<HTMLInputElement>
}

export const Checkbox: FC<ICheckboxProps> = ({
	id,
	isChecked,
	name,
	value,
	handleChange,
}) => {
	return (
		<CheckboxContainer htmlFor={id}>
			<CheckboxInput
				type='checkbox'
				checked={isChecked}
				name={name}
				value={value}
				id={id}
				onChange={handleChange}
			/>
			{name}
			<CheckboxMark></CheckboxMark>
		</CheckboxContainer>
	)
}
