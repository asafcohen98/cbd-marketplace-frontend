/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useUpdateEffect } from '../hooks/useUpdateEffect'

import { productService } from '../services/product.service'

import { IProduct } from '../interfaces/IProduct.interface'
import { IFilterBy } from '../interfaces/IFilterBy.interface'
import { ICategory } from '../interfaces/ICategory.interface'
import { IBenefit } from '../interfaces/IBenefit.interface'

import { ShopContainer } from '../cmps/layouts/ShopContainer'
import { SideContainer } from '../cmps/layouts/SideContainer'
import { TopPanelContainer } from '../cmps/layouts/TopPanelContainer'

import { ProductFilterPanelButton } from '../cmps/ProductFilterPanelButton'
import { ProductList } from '../cmps/ProductList'
import { ProductFilter } from '../cmps/ProductFilter'
import { ProductSearch } from '../cmps/ProductSearch'
import { SortDropdown } from '../cmps/SortDropdown'
import { ProductPagination } from '../cmps/ProductPagination'
import { Loader } from '../cmps/Loader'
import { ScreenOverlay } from '../cmps/ScreenOverlay'

export const Shop: FC = () => {
	const [filterBy, setFilterBy] = useState<IFilterBy>({
		searchText: '',
		category: '',
		minPrice: '',
		maxPrice: '',
		benefits: [],
		page: 0,
		sort: '-popular_ind',
	})
	const [pageCount, setPageCount] = useState<number | null>(5)
	const [products, setProducts] = useState<IProduct[] | null>(null)
	const [categories, setCategories] = useState<ICategory[]>([])
	const [benefits, setBenefits] = useState<IBenefit[]>([])
	const [errorMsg, setErrorMsg] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false)

	const [searchParams, setSearchParams] = useSearchParams()

	// move debounce to searchComponent...
	// const debouncedFilterBy = useDebounce<IFilterBy>(filterBy, 500)

	const loadProducts = async (filterBy: IFilterBy) => {
		try {
			const [products, totalPages] = await productService.getProducts(filterBy)
			setIsLoading(true)
			setProducts(products)
			setPageCount(+totalPages)
		} catch (err) {
			console.error(`[Error in loadProducts] : ${err}`)
			setErrorMsg(err)
		}
	}

	const loadCategories = async () => {
		try {
			setIsLoading(true)
			const categories = await productService.getCategories()
			setCategories(categories)
		} catch (err) {
			console.error(`[Error in loadCategories] : ${err}`)
			setErrorMsg(err)
		}
	}

	const loadBenefits = async () => {
		try {
			setIsLoading(true)
			const benefits = await productService.getBenefits()
			setBenefits(benefits)
		} catch (err) {
			console.error(`[Error in loadBenefits] : ${err}`)
			setErrorMsg(err)
		}
	}

	const getFiltersFromSearchParams = useMemo(() => {
		console.log('getFiltersFromSearchParams !!')
		const copyOfFilterBy = { ...filterBy }
		const filterFromQuery = Object.fromEntries(searchParams)
		if (Object.keys(filterFromQuery).length) {
			for (const key in filterFromQuery) {
				copyOfFilterBy[key] =
					key === 'page'
						? +filterFromQuery[key]
						: key === 'benefits'
						? filterFromQuery[key].split(',').filter((str) => str)
						: filterFromQuery[key]
			}
			return copyOfFilterBy
		} else {
			return null
		}
	}, [])

	useEffect(() => {
		console.log('mounted !')
		;(async () => {
			await loadCategories()
			await loadBenefits()
			const filtersFromSearchParams = getFiltersFromSearchParams
			if (filtersFromSearchParams) setFilterBy(filtersFromSearchParams)
			await loadProducts(
				filtersFromSearchParams ? filtersFromSearchParams : filterBy
			)
			setIsLoading(false)
		})()
	}, [])

	useUpdateEffect(() => {
		if (isFilterPanelOpen) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'unset'
	}, [isFilterPanelOpen])

	const onSetFilter = useCallback(
		async (field, value) => {
			value =
				value instanceof Object && !Array.isArray(value) ? { ...value } : value
			value = Array.isArray(value) ? [...value] : value
			const newFilter = { ...filterBy, [field]: value }
			if (field !== 'page') newFilter.page = 0
			console.log('newFilter', newFilter)
			const queryParams = {
				...newFilter,
				benefits: newFilter.benefits.join(','),
				page: `${newFilter.page}`,
			}
			setFilterBy(newFilter)
			setSearchParams(queryParams)
			if (field === 'category' && isFilterPanelOpen) setIsFilterPanelOpen(false)
			await loadProducts(newFilter)
			setIsLoading(false)
		},
		[filterBy]
	)

	const clearFilter = useCallback(async () => {
		const newFilter = {
			searchText: '',
			page: 0,
			sort: '-popular_ind',
			category: '',
			minPrice: '',
			maxPrice: '',
			benefits: [],
		}
		const queryParams = {
			...newFilter,
			benefits: newFilter.benefits.join(','),
			page: `${newFilter.page}`,
		}
		setFilterBy(newFilter)
		setSearchParams(queryParams)
		await loadProducts(newFilter)
		setIsLoading(false)
	}, [])

	const toggleFilterPanel = useCallback(() => {
		setIsFilterPanelOpen((isFilterPanelOpen) => !isFilterPanelOpen)
	}, [])

	if (isLoading && !benefits.length && !categories.length) return <Loader />
	return (
		<>
			<ScreenOverlay
				handleClick={toggleFilterPanel}
				isFilterPanelOpen={isFilterPanelOpen}
			/>
			<TopPanelContainer>
				<ProductFilterPanelButton handleClick={toggleFilterPanel} />
				<SortDropdown selectedSort={filterBy.sort} onSetFilter={onSetFilter} />
			</TopPanelContainer>
			<ShopContainer>
				<SideContainer isFilterPanelOpen={isFilterPanelOpen}>
					<ProductSearch filterBy={filterBy} onSetFilter={onSetFilter} />
					<ProductFilter
						filterBy={filterBy}
						categories={categories}
						benefits={benefits}
						onSetFilter={onSetFilter}
						clearFilter={clearFilter}
					/>
				</SideContainer>
				<ProductList isLoading={isLoading} products={products} />
			</ShopContainer>
			<ProductPagination
				currentPage={filterBy.page}
				pageCount={pageCount}
				onSetFilter={onSetFilter}
			/>
		</>
	)
}
