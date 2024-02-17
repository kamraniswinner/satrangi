import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3004/api/products/');
            console.log(response)
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
                console.log(data)
                toast.success('Products fetched successfully!');
            } else {
                throw new Error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error('Error fetching products');
        } finally {
            setLoading(false);
            setError(error)
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <ToastContainer />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {error ? (
                        <p>Error: {error.message}</p>
                    ) : (
                        <ul>
                            {products.map((product) => (
                                <li key={product._id}>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p>Price: ${product.price}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default ProductList;
