import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

import { IFilterBy } from "../interfaces/IFilterBy.interface"
import { IProduct } from "../interfaces/IProduct.interface"
import { ICategory } from "../interfaces/ICategory.interface"
import { IBenefit } from "../interfaces/IBenefit.interface";

export const productService = {
    getProducts,
    getCategories,
    getBenefits,
    getSortTypes
}

async function getCategories(): Promise<ICategory[]> {
    try {
        const res = await axios.get('https://cba-backend.herokuapp.com/api/category/')
        let { data: { results } } = res
        // filter the all category for now 
        results[0].children.pop()
        results[1].children.pop()
        //
        const categories = results.map(res => {
            const { name, children } = res
            return {
                _id: uuidv4(),
                name,
                children: children.map(c => {
                    const { name } = c
                    return {
                        _id: uuidv4(),
                        name
                    }
                })
            }
        })
        return categories
    } catch (err) {
        return err
    }
}

async function getBenefits(): Promise<IBenefit[]> {
    try {
        const res = await axios.get('https://cba-backend.herokuapp.com/api/benefits/')
        let { data } = res
        const benefits = data.map(d => {
            const { name, description } = d
            return {
                _id: uuidv4(),
                name,
                description
            }
        })
        return benefits
    } catch (err) {
        return err
    }
}




async function getProducts(filterBy: IFilterBy = {
    searchText: '',
    category: '',
    minPrice: null,
    maxPrice: null,
    benefits: [],
    page: 0,
    sort: '-popular_ind',
}): Promise<[IProduct[], number]> {
    let { searchText, category, minPrice, maxPrice, benefits, page, sort } = filterBy
    page++
    try {
        const res = await axios.get(
            `https://cba-backend.herokuapp.com/api/items/?search=${searchText}&max_price=${maxPrice ? maxPrice : ''
            }&min_price=${minPrice ? minPrice : ''}&category=${category ? category : ''
            }&benefits=${benefits ? benefits : ''}&page=${page > 0 ? page : 1
            }&ordering=${sort}`
        )
        const { data: { results, total_pages } } = res
        const products = createProducts(results)
        return [products, total_pages]
    } catch (err) {
        return err
    }

}

function getSortTypes() {
    return [
        {
            name: 'Popular',
            type: '-popular_ind'
        },
        {
            name: 'Rating',
            type: '-reviews_score'
        },
        {
            name: 'Low To High',
            type: 'price,price_range_from'
        },
        {
            name: 'High To Low',
            type: '-price,-price_range_from'
        },
    ]
}

function createProducts(productsFromAPI: any[]): IProduct[] {
    return productsFromAPI.map(product => {
        // API struct
        const { active, benefits, category,
            count_of_reviews, created_at, description,
            img_source_link, link_to_item, name, original_price,
            original_price_from, original_price_to, owner,
            popular_ind, price, price_range_from, price_range_to,
            recent_customer_desc, recent_customer_name, recent_customer_score,
            recent_customer_title, reviews_score, updated_at } = product
        // JS struct
        return {
            _id: uuidv4(),
            active,
            benefits,
            category,
            reviewsCount: count_of_reviews,
            createdAt: created_at,
            description,
            imgSrc: img_source_link,
            productLink: link_to_item,
            name,
            originalPrice: original_price,
            originalPriceFrom: original_price_from,
            originalPriceTo: original_price_to,
            owner,
            popularInd: popular_ind,
            price,
            priceRangeFrom: price_range_from,
            priceRangeTo: price_range_to,
            recentCustomerDesc: recent_customer_desc,
            recentCustomerName: recent_customer_name,
            recentCustomerScore: recent_customer_score,
            recentCustomerTitle: recent_customer_title,
            reviewsScore: reviews_score,
            updatedAt: updated_at
        }
    })

}