import Product from '../model/Productmodel.js'; 

// Controller to handle creating a new product
// Controller to handle creating a new product
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, images } = req.body;
        console.log(req.body)
        // Create an array to store the formatted image data
        const formattedImages = images.map(image => ({
            url: image.url,
            caption: image.caption || '' // Default caption to an empty string if not provided
        }));

        const product = new Product({
            name,
            description,
            price,
            category,
            images: formattedImages // Assign formatted image data to the product
        });
        
        await product.save();
        
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Controller to handle fetching all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to handle updating a product
export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Assuming the product ID is passed as a route parameter
        const { name, description, price, category, images } = req.body;
        
        // Find the product by ID
        let product = await Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update the product properties
        product.name = name;
        product.description = description;
        product.price = price;
        product.category = category;

        // Update product images if provided
        if (images && images.length > 0) {
            const formattedImages = images.map(image => ({
                url: image.url,
                caption: image.caption || ''
            }));
            product.images = formattedImages;
        }

        // Save the updated product
        await product.save();

        res.json({ message: 'Product updated successfully', product });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
// Controller to handle deleting a product
export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Assuming the product ID is passed as a route parameter
        
        // Find the product by ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
