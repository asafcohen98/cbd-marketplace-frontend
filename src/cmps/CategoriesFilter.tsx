import { FC } from 'react'
import styled from 'styled-components'
import { BiCategory } from 'react-icons/bi'

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

const SubCategoriesContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-inline-start: 2rem;
`

interface ICategoryNameProps {
	isActive: boolean
}

const SubCategoryTitle = styled.span<ICategoryNameProps>`
	cursor: pointer;
	color: ${(props) =>
		props.isActive
			? props.theme.colors.brandLightColor
			: props.theme.colors.darkColor};
	font-weight: ${(props) => (props.isActive ? 'bolder' : 'unset')};
`

const CategoryTitle = styled(SubCategoryTitle)`
	font-family: Mukta-Regular, sans-serif;
`

interface ICategoriesFilterProps {
	categories: ICategory[]
	selectedCategory: string
	 onSetFilter : (field : string , value : string | number | boolean | any[] | object) => void
}

export const CategoriesFilter: FC<ICategoriesFilterProps> = ({
	categories,
	selectedCategory,
	onSetFilter
}) => {

	return (
		<CategoriesContainer>
			<FilterTitle>
				<BiCategory />
				<span>Categories</span>
			</FilterTitle>
			{categories.map((category) => {
				return (
					<CategoryContainer key={category._id}>
						<CategoryTitle
							isActive={selectedCategory === category.name}
							key={category.name}
							onClick={() => onSetFilter('category', category.name)}>
							{category.name}
						</CategoryTitle>
						<SubCategoriesContainer>
							{category.children.map((subCategory) => {
								return <SubCategoryTitle
									isActive={selectedCategory === subCategory.name}
									key={subCategory._id}
									onClick={() => onSetFilter('category', subCategory.name)}>
									{subCategory.name}
								</SubCategoryTitle>
			})}
						</SubCategoriesContainer>
					</CategoryContainer>
				)
			})}
		</CategoriesContainer>
	)
}
