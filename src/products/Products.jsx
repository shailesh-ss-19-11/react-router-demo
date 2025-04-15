import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { dummyjsonURL } from '../../AppConstants'
import { getApi } from '../api/Api'

const Products = () => {
    const [productList, setproductList] = useState([])
    const fetchProducts = () => {
        getApi(dummyjsonURL+"products", "", (data) => {
            console.log(data)
            setproductList(data.products)
        }, (err) => {
            console.log(err)
            setproductList([])
        })
    }

    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <div>
        <ProductList productList={productList}/>
    </div>
  )
}

export default Products