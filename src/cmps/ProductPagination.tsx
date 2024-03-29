import { FC, useCallback, useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1.5rem;
`

const Pagination = styled(ReactPaginate)`
	list-style: none;
	display: flex;
	padding : 0;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-family: Mukta-Regular, sans-serif;
	

	a{
		display: flex;
		color: ${props => props.theme.colors.darkColor};
		padding: 0.2rem 1rem;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
			padding: 0rem 0.5rem;
	    }
	}

	> * {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	/* > *:not(:last-child) {
		margin-inline-end: 1.5rem;
	} */

	.selected {
		background-color: ${(props) => props.theme.colors.brandLightColor};
	}

	@media only screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
		font-size: 0.875rem;
	}
`

interface IProductPaginationProps {
	currentPage: number
	pageCount: number
	onSetFilter: (field: string, value: string) => void
}

export const ProductPagination: FC<IProductPaginationProps> = ({
	currentPage,
	pageCount,
	onSetFilter,
}) => {

	const [pageRangeDisplayed,setPageRangeDisplayed] = useState<number>(3)

	const handleChange = useCallback(
		({ selected }) => {
			onSetFilter('page', selected)
		},
		[onSetFilter]
	)

	useEffect(() => {
            if(window.innerWidth <= 800) setPageRangeDisplayed(1)
	},[])

	return (
		<PaginationContainer>
			<Pagination
				forcePage={currentPage}
				breakLabel='...'
				previousLabel={<BsArrowLeft />}
				nextLabel={<BsArrowRight />}
				onPageChange={handleChange}
				pageRangeDisplayed={pageRangeDisplayed}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
			/>
		</PaginationContainer>
	)
}
