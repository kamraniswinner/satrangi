import { Schema, model } from 'mongoose';

const userSchema = new Schema({
        "user": {
          "_id": "ObjectId",
          "username": "String",
          "email": "String",
          "password": "String",
          /* "createdAt": "Date",
          "updatedAt": "Date", */
          "firstName": "String",
          "lastName": "String",
          /* "roles": "String", */
          /* "isActive": "Boolean" */
        }
});

// Create a model using the product schema
const Usermodel = model('User', userSchema);

export default Usermodel;
