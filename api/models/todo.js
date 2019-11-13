'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todo object.
 * Everything in Mongoose starts with a Schema. 
 * Each schema maps to a MongoDB collection and 
 * defines the shape of the documents within that collection.
 */
let ToDoSchema = new Schema({
    /**
     * Title of the to do item.
     */
    description: {
        type: String,
        required: "description is required"
    },
    title: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    /**
     * The versionKey is a property set on each document when first created by Mongoose. 
     * This keys value contains the internal revision of the document. 
     * The versionKey option is a string that represents the path to use for versioning. 
     * The default is __v.
     * 
     */
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
// Virtuals are document properties that you can get and set but that do not get persisted to MongoDB.
ToDoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
/**
 * By default, Mongoose does not include virtuals when you convert a document to JSON. 
 * For example, if you pass a document to Express' res.json() function, virtuals will not be included by default.
 * To include virtuals in res.json(), you need to set the toJSON schema option to { virtuals: true }
 */
ToDoSchema.set('toJSON', {
    virtuals: true
});

/**
 * Models are fancy constructors compiled from Schema definitions.
 * An instance of a model is called a document. 
 * Models are responsible for creating and reading documents from the underlying MongoDB database.
 * When you call mongoose.model() on a schema, Mongoose compiles a model for you
 */
module.exports = mongoose.model('todos', ToDoSchema);