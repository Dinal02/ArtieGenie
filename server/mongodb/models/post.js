import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
});
// This defines a new Mongoose schema called Post, which has three fields: name, prompt, and photo. Each field is an object with a type property that specifies the data type of the field and a required property that indicates whether the field is required for a document to be valid.

const PostSchema = mongoose.model('Post', Post);
// This creates a new Mongoose model called PostSchema using the Post schema. The first argument to the mongoose.model() method is the name of the collection in the database that will hold documents of this type.

export default PostSchema;

// Node.js module that defines a Mongoose schema for a "Post" model.