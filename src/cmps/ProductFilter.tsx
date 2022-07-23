import { FC } from 'react'
import styled from 'styled-components'

import { FiFilter } from 'react-icons/fi'

import { IFilterBy } from '../interfaces/IFilterBy.interface'
import { ICategory } from '../interfaces/ICategory.interface'
import { IBenefit } from '../interfaces/IBenefit.interface'

import { FilterTitle } from './FilterTitle'
import { CategoriesFilter } from './CategoriesFilter'
import { RangePriceFilter } from './RangePriceFilter'
import { BenefitsFilter } from './BenefitsFilter'

const FilterContainer = styled.div`
	position: relative;
	color: ${(props) => props.theme.colors.darkColor};
	padding: 1rem 0 ;
	flex : 1;
	box-shadow: ${(props) => props.theme.boxShadows.bs2};
	> *:not(:last-child) {
		margin-bottom: 1rem;
	}
	@media only screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
		box-shadow: unset;
		padding: 0 1rem 1rem 1rem;
	}
`

const ClearFilterButton = styled.button`
	font-size: 1rem;
	text-decoration: underline ${(props) => props.theme.colors.darkColor};
	background-color: transparent;
	color: ${(props) => props.theme.colors.darkColor};
	position: absolute;
	padding: 0 ;
	top: 1rem;
	right: 1rem;

	@media only screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
		box-shadow: unset;
		top: 0;
	}
`

interface IProductFilterProps {
	filterBy: IFilterBy
	categories: ICategory[]
	benefits: IBenefit[]
	onSetFilter: (
		field: string,
		value: string | number | boolean | any[] | object
	) => void
	clearFilter: () => void
}

export const ProductFilter: FC<IProductFilterProps> = ({
	filterBy,
	categories,
	benefits,
	onSetFilter,
	clearFilter,
}) => {
	return (
		<FilterContainer >
			<ClearFilterButton onClick={clearFilter}>Clear all</ClearFilterButton>
			<FilterTitle isBigText>
				<FiFilter />
				<span>Filter</span>
			</FilterTitle>
			<CategoriesFilter
				categories={categories}
				selectedCategory={filterBy.category}
				onSetFilter={onSetFilter}
			/>
			<RangePriceFilter
				minPrice={filterBy.minPrice}
				maxPrice={filterBy.maxPrice}
				onSetFilter={onSetFilter}
			/>
			<BenefitsFilter
				selectedBenefitsNames={filterBy.benefits}
				benefits={benefits}
				onSetFilter={onSetFilter}
			/>
		</FilterContainer>
	)
}
