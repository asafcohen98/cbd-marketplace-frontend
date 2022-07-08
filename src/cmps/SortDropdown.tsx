import {
	ReactElement,
	FC,
	useEffect,
	useState,
	useCallback,
	useMemo,
} from 'react'
import styled from 'styled-components'
import Dropdown from 'rc-dropdown'
import Menu, { MenuItem } from 'rc-menu'
import { BiSortAlt2 } from 'react-icons/bi'
import 'rc-dropdown/assets/index.css'
import { productService } from '../services/product.service'

const SortButtonContainer = styled.div`
	cursor: pointer;
	grid-column: 1/ 3;
	display: flex;
	align-items: center;
`

const SortButton = styled.button`
	font-family: Mukta-Regular, sans-serif;
	font-size: 1rem;
	color: ${(props) => props.theme.colors.darkColor};
	background-color: transparent;
`


// Sort Menu cmp

const SortMenu = styled(Menu)`
	color: ${(props) => props.theme.colors.darkColor};
	border: unset !important;
	border-radius: unset !important;
	box-shadow: ${(props) => props.theme.boxShadows.bs2};
`
const SortMenuIteam = styled(MenuItem)`
	padding: 0.5rem 1rem !important;
	font-family: Mukta-Light, sans-serif;
	font-size: 1rem;
	cursor: pointer;

	:hover {
		color: ${(props) => props.theme.colors.mutedColor};
		transition: 0.2s ease-in-out;
	}
`

interface ISortDropdownProps {
	selectedSort: string
	onSetFilter: (field : string, value : string) => void
}

export const SortDropdown: FC<ISortDropdownProps> = ({
	selectedSort,
	onSetFilter,
}) => {
	const [sortTypes, setSortTypes] = useState<any[]>([])

	useEffect(() => {
		const sortTypes = productService.getSortTypes
		setSortTypes(sortTypes)
	}, [])

	const selectedSortName = useMemo(() => {
		if (!sortTypes.length) return 'Popular'
		const selectedSortType = sortTypes.find(
			(sortType) => sortType.type === selectedSort
		)
		return selectedSortType.name
	}, [selectedSort, sortTypes])

	const onSelect = useCallback(
		({ key }) => {
			const currentSortType = sortTypes[key]
			const { type } = currentSortType
			onSetFilter('sort', type)
		},
		[sortTypes, onSetFilter]
	)

	const DropdownMenu: ReactElement = (
		<SortMenu onSelect={onSelect}>
			{sortTypes.map((sortType, i) => {
				return <SortMenuIteam key={i}>{sortType.name}</SortMenuIteam>
			})}
		</SortMenu>
	)

	return (
		<div>
			<Dropdown trigger={['click']} overlay={DropdownMenu} animation='slide-up'>
				<SortButtonContainer>
					<BiSortAlt2 />
					<SortButton>Sort By {selectedSortName}</SortButton>
				</SortButtonContainer>
			</Dropdown>
		</div>
	)
}
