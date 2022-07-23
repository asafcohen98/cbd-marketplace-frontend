import {
	FC,
	useCallback
} from 'react'

import styled from 'styled-components'
import { TbHeartPlus } from 'react-icons/tb'

import { IBenefit } from '../interfaces/IBenefit.interface'

import { Checkbox } from './Checkbox'
import { FilterTitle } from './FilterTitle'

const BenefitsContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const BenefitsForm = styled.form`
	font-size: 0.95rem;
	color: ${(props) => props.theme.colors.darkColor};
	display: flex;
	padding: 0 1rem;
	flex-direction: column;
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
            overflow-y: auto;
			max-height: 11rem;
			::-webkit-scrollbar {
		width: 18px;
	}

	::-webkit-scrollbar-track {
		background: ${(props) => props.theme.colors.lightColor};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.brandLightColor};
		border-radius: 10px;
		border: 5px solid #ffffff;
	}
	}
`

interface IBenefitsFilterProps {
	benefits: IBenefit[]
	selectedBenefitsNames: string[]
	onSetFilter: (
		field: string,
		value: string | number | boolean | any[] | object
	) => void
}

export const BenefitsFilter: FC<IBenefitsFilterProps> = ({
	benefits,
	selectedBenefitsNames,
	onSetFilter,
}) => {
	const handleChange = useCallback(
		({ target: { value, checked } }) => {
			console.log(
				'selectedBenefitsNames in handleChange',
				selectedBenefitsNames
			)
			let newBenefits = []
			if (checked) {
				newBenefits = [...selectedBenefitsNames, value]
			} else {
				newBenefits = selectedBenefitsNames.filter(
					(benefit) => benefit !== value
				)
			}
			onSetFilter('benefits', newBenefits)
		},
		[onSetFilter, selectedBenefitsNames]
	)

	return (
		<BenefitsContainer>
			<FilterTitle>
				<TbHeartPlus />
				<span>Benefits</span>
			</FilterTitle>
			<BenefitsForm>
				{benefits.map((benefit) => {
					return (
						<Checkbox
							key={benefit._id}
							id={benefit._id}
							isChecked={selectedBenefitsNames.includes(benefit.name)}
							name={benefit.name}
							value={benefit.name}
							handleChange={handleChange}></Checkbox>
					)
				})}
			</BenefitsForm>
		</BenefitsContainer>
	)
}
