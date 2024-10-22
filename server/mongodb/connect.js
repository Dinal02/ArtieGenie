import mongoose from 'mongoose';

const connectDB = (url) => {
// This declares a function called connectDB that takes a single argument url, which is the MongoDB connection string.    
    mongoose.set('strictQuery', true);
    // This sets the strictQuery option of the Mongoose library to true. This means that any queries made using Mongoose will throw an error if they contain fields that are not defined in the schema.

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => {
            console.error('failed to connect with mongo');
            console.error(err);
        });
    // This connects to the MongoDB database using the provided url. If the connection is successful, the function logs a message to the console saying "MongoDB connected". If the connection fails, the function logs the error to the console.    
}

export default connectDB;

// Node.js module that exports a function to connect to a MongoDB database using the Mongoose library.