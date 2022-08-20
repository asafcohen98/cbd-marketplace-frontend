import { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import { BiCategory } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'

import { ICategory } from '../interfaces/ICategory.interface'

import { FilterTitle } from './FilterTitle'

const CategoriesContainer = styled.form`
	font-size: 0.95rem;
	display: flex;
	flex-direction: column;
`

const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 0.5rem;
`

interface ICategoryNameProps {
	isExpended: boolean
	isActive?: boolean
}

const SubCategoriesContainer = styled.div<ICategoryNameProps>`
	cursor: pointer;
	max-height: ${(props) => (props.isExpended ? '500px' : '0')};
	opacity: ${(props) => (props.isExpended ? '100' : '0')};
	pointer-events: ${(props) => (props.isExpended ? 'unset' : 'none')};
	display: flex;
	flex-direction: column;
	padding-inline-start: 2rem;
	padding-bottom: ${props => props.isExpended ? '0.5rem' : 0};
	padding-top: ${props => props.isExpended ? '0.5rem' : 0};
	background-color: #8383830a;
	transition: all 0.4s ease-in-out ;
	> *:not(:last-child) {
		margin-bottom: 0.5rem;
	}
`

const SubCategoryTitle = styled.div<ICategoryNameProps>`
	color: ${(props) =>
		props.isActive
			? props.theme.colors.brandLightColor
			: props.theme.colors.darkColor};
	font-weight: ${(props) => (props.isActive ? 'bolder' : 'unset')};
	transition: max-height 0.3s ease-in-out;
`

const TopCategory = styled.div<ICategoryNameProps>`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: Mukta-Regular, sans-serif;
	padding: 0 1rem;

	svg {
		transform: rotateZ(${(props) => (props.isExpended ? '90deg' : '0deg')});
		transition: transform 0.2s ease-in-out;
	}
`

interface ICategoriesFilterProps {
	categories: ICategory[]
	selectedCategory: string
	onSetFilter: (
		field: string,
		value: string | number | boolean | any[] | object
	) => void
}

export const CategoriesFilter: FC<ICategoriesFilterProps> = ({
	categories,
	selectedCategory,
	onSetFilter,
}) => {

	const [expendedCategory, setExpendedCategory] = useState<string>('')

	const changeExpendedCategory = useCallback((categoryId) => {
		if (expendedCategory === categoryId) {
			setExpendedCategory('')
		} else {
			setExpendedCategory(categoryId)
		}
	},[expendedCategory])
	 
	return (
		<CategoriesContainer>
			<FilterTitle>
				<BiCategory />
				<span>Categories</span>
			</FilterTitle>
			{categories.map((category) => {
				return (
					<CategoryContainer key={category._id}>
						<TopCategory
							isExpended={category._id === expendedCategory}
							key={category.name}
							onClick={() => changeExpendedCategory(category._id)}>
							{category.name}
							<IoIosArrowForward size='0.875rem' />
						</TopCategory>
						{!!category.children.length && <SubCategoriesContainer
							isExpended={category._id === expendedCategory}>
							{category.children.map((subCategory) => {
								return (
									<SubCategoryTitle
										isExpended={category._id === expendedCategory}
										isActive={selectedCategory === subCategory.name}
										key={subCategory._id}
										onClick={() => onSetFilter('category', subCategory.name)}>
										{subCategory.name}
									</SubCategoryTitle>
								)
							})}
						</SubCategoriesContainer>}
					</CategoryContainer>
				)
			})}
		</CategoriesContainer>
	)
}
