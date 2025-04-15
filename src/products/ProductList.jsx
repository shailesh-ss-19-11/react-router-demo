import React, { useState } from 'react'
import { getApi } from '../api/Api'
import { useEffect } from 'react'
import { dummyjsonURL } from '../../AppConstants'
import Card from '../components/Card'

const ProductList = (props) => {
    const { productList } = props;
    return (
        <div className='container d-flex flex-wrap gap-3'>
            {
                productList && productList?.map((cardDetail)=>{
                    return <Card cardDetail={cardDetail}/>
                })
            }
        </div>
    )
}

export default ProductList