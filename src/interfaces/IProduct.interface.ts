
export interface IProduct {
    _id: string,
    active: boolean
    benefits: number[] | string[]
    category: number[] | string[]
    reviewsCount: number,
    createdAt: string,
    description: string,
    imgSrc: string,
    productLink: string,
    name: string,
    originalPrice: string | null
    originalPriceFrom: string | null
    originalPriceTo: string | null
    owner: number
    popularInd: number
    price: string | null
    priceRangeFrom: string | null
    priceRangeTo: string | null
    recentCustomerDesc: string | null
    recentCustomerName: string | null
    recentCustomerScore: string | null
    recentCustomerTitle: string | null
    reviewsScore: string | null
    updatedAt: string | null
}