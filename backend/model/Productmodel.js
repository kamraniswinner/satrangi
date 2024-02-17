import { Schema, model } from 'mongoose';

// Define the product schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Electronics', 'Clothing', 'Books', 'Furniture'],
        required: true
    },
    images: [
        {
            url: {
                type: String,
                required: true
            },
            caption: {
                type: String
            }
        }
    ]
});

// Create a model using the product schema
const Productmodel = model('Product', productSchema);

export default Productmodel;
