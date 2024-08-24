import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <>
        <div className="products-section">
            <h2>Novidades do site:</h2>
            <div className="products-container">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    </>
  )
}

export default Products