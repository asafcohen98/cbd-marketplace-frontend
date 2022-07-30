import { FC, useCallback, useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

import { IFilterBy } from '../interfaces/IFilterBy.interface'

const StyledForm = styled.form`
	align-items: center;
	display: flex;
	box-shadow: ${(props) => props.theme.boxShadows.bs2};
	padding: 1rem;

	> *:not(:last-child) {
		margin-inline-end: 0.5rem;
	}
	@media only screen and (max-width: ${(props) =>	props.theme.breakpoints.bigTablet}) {
		box-shadow: unset;
		border-bottom : 1px solid ${props => props.theme.colors.mutedColor};
	}
`

const StyledInputSearch = styled.input`
	font-size: 1.2rem;
	width: 100%;
`

interface IProductSearchProps {
	filterBy: IFilterBy
	onSetFilter: (
		field: string,
		value: string | number | boolean | [] | object
	) => void
}

export const ProductSearch: FC<IProductSearchProps> = ({
	filterBy,
	onSetFilter,
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedSearch = useCallback(
		debounce((value) => onSetFilter('searchText', value), 800),
		[filterBy]
	)

	const handleChange = useCallback(
		({ target: { value } }) => {
			console.log('filterBy in ProductSearch in handelChange',filterBy);
			setSearchTerm(value)
			debouncedSearch(value)
		},
		[filterBy]
	)

	useEffect(() => {
        const {searchText} = filterBy
		setSearchTerm(searchText)
	}, [filterBy])

	return (
		<StyledForm>
			<AiOutlineSearch />
			<StyledInputSearch
				autoFocus
				placeholder='Search'
				name='searchText'
				value={searchTerm}
				type='text'
				onChange={handleChange}
			/>
		</StyledForm>
	)
}
