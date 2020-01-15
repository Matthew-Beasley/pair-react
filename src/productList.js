import React from 'react';
import data from './data';
const { products } = data;

const Products = () => {
    return (
        <div>
            <h3>Product List</h3>
            <div className="product-list list">
                <ul>
                    {products.map(product => {
                        return <li key={product.id}>
                            <strong>{product.name}</strong> made from {product.material} 
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Products;