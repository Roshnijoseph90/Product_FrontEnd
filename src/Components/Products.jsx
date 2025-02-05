import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);  // Store the products in state
            } catch (error) {
                setErrorMessage('Failed to load products');
                console.error(error);
            }
        };

        fetchProducts();
    }, []);  
    return (
        <div>
           
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="product-list">
                {products.length === 0 ? (
                    <p>No products available</p>
                ) : (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                           
                             {product.url && (
                                <img
                                    src={product.url}
                                    alt={product.name}
                                    style={{ width: '100px', height: 'auto' }}
                                    onError={(e) => {
                                        // Handle image load error
                                        e.target.src = 'https://via.placeholder.com/200'; // Fallback image
                                    }}
                                />
                            )}
                            <h4 className="product-name">{product.name}</h4>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p className="product-rating">rating: {Number(product.rating)} </p>

                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Products;
