import express from 'express';
import mongoose from 'mongoose'; // Import mongoose module
import productRoute from './route/productRoute.js';
import userRoute from './route/userRoute.js';
import orderRoute from './route/orderRoute.js'
import cartRoute from './route/cartRoute.js'
import cors from 'cors'

// Create an instance of express
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World! This is a basic Node.js project...');
});

app.use('/api', productRoute);
app.use('/api', userRoute);
app.use('/api', cartRoute);
app.use('/api', orderRoute);
app.use(cors())


// Define MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://kamran:WsPpOLUvkhyBJx3A@cluster0.va7gjnk.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB.....');
  // Send response when connected
  app.get('/mongodb', (req, res) => {
    res.send('Hello, World! This is a basic Node.js project with MongoDB.....');
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  // Handle error if MongoDB connection fails
  app.get('/mongodb', (req, res) => {
    res.send('Hello, not connected with MongoDB.....');
  });
});

// Define a port number
const PORT = process.env.PORT || 3004;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port and ${PORT}`);
});
