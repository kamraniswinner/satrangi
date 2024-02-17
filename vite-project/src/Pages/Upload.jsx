import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Upload() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Electronics',
        imageUrl1: '',
        caption1: '',
        imageUrl2: '',
        caption2: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const images = [];
        for (let i = 1; i <= 2; i++) {
            const imageUrl = formData[`imageUrl${i}`];
            if (imageUrl) {
                const imageCaption = formData[`caption${i}`] || '';
                images.push({ url: imageUrl, caption: imageCaption });
            }
        }

        const productData = {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            category: formData.category,
            images: images
        };

        try {
            const response = await fetch('http://localhost:3004/api/products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                toast.success('Product created successfully!');
            } else {
                throw new Error('Failed to create product');
            }
        } catch (error) {
            console.error('Error creating product:', error);
            toast.error('An error occurred while creating the product.');
        }
    };

    return (
        <div>
            <h1>Create Product</h1>
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} required /><br />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required /><br />

                <label htmlFor="category">Category:</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Books">Books</option>
                    <option value="Furniture">Furniture</option>
                </select><br />

                <label htmlFor="imageUrl1">Image URL 1:</label>
                <input type="text" id="imageUrl1" name="imageUrl1" value={formData.imageUrl1} onChange={handleChange} required /><br />

                <label htmlFor="caption1">Caption 1:</label>
                <input type="text" id="caption1" name="caption1" value={formData.caption1} onChange={handleChange} /><br />

                <label htmlFor="imageUrl2">Image URL 2:</label>
                <input type="text" id="imageUrl2" name="imageUrl2" value={formData.imageUrl2} onChange={handleChange} /><br />

                <label htmlFor="caption2">Caption 2:</label>
                <input type="text" id="caption2" name="caption2" value={formData.caption2} onChange={handleChange} /><br />

                {/* Add more fields for additional images if needed */}

                <button type="submit">Create Product</button>
            </form>
        </div>
    );
}

export default Upload;