import {FC, useCallback } from 'react'
import { MdPriceCheck } from 'react-icons/md'
import styled from 'styled-components'

import { FilterTitle } from './FilterTitle'

const RangePriceContainer = styled.form``

const RangePrice = styled.div`
	display: flex;
    padding: 0 1rem;
	> *:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
`

const RangePriceInput = styled.input`
	padding: 0.3rem;
	box-shadow: ${(props) => props.theme.boxShadows.bs2};
	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	width: 100px;
	margin-bottom: 0.5rem;
`
interface IRangePriceFilterProps {
	minPrice: number | string
	maxPrice: number | string
	onSetFilter: (
		field: string,
		value: string | number | boolean | any[] | object
	) => void
}

export const RangePriceFilter: FC<IRangePriceFilterProps> = ({
	minPrice,
	maxPrice,
	onSetFilter,
}) => {
	const handleChange = useCallback(
		({ target: { name, value } }) => {
			onSetFilter(name, value)
		},
		[onSetFilter]
	)

	return (
		<RangePriceContainer>
			<FilterTitle>
				<MdPriceCheck />
				<span>Price</span>
			</FilterTitle>
			<RangePrice>
				<RangePriceInput
					value={minPrice}
					min='0'
					max='3000'
					type='number'
					name='minPrice'
					placeholder='Min Price'
					onChange={handleChange}
				/>
				<RangePriceInput
					value={maxPrice}
					min='0'
					max='3000'
					type='number'
					name='maxPrice'
					placeholder='Max Price'
					onChange={handleChange}
				/>
			</RangePrice>
		</RangePriceContainer>
	)
}
