import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import artieRoutes from './routes/artieRoutes.js';

dotenv.config();
// This imports the dotenv package and calls its config() method to load environment variables from a .env file located in the root directory of the project. This is often used to store sensitive information such as database credentials or API keys.

const app = express();
app.use(cors());
// This imports the cors package, which allows cross-origin requests (CORS) to be made to the server. The app.use() method adds the middleware function provided by cors to the Express application.
app.use(express.json({ limit: '50mb' }));
// This adds middleware to parse incoming requests with JSON payloads. It limits the size of the request body to 50 megabytes.

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/artie', artieRoutes);
// api endpoints, to connect with the front-end side

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from ArtieGenie!',
  });
});
// This sets up a route for HTTP GET requests to the root URL (/). When a request is made to this URL, the server sends back the string "Hello from ArtieGenie!" as the response.

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};
// This defines an asynchronous function startServer() which starts the server listening on port 8080 and connects to mongoDB. 

startServer();
// This calls the startServer() function to start the server.

// basic Node.js server using the Express framework. It listens on port 8080 and serves a simple response when an HTTP GET request is made to the root URL.
