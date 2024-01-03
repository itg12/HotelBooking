const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true       
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true,
        length: 10
    },

    password: {
        type: String,
        required: true
    },

    bookings:[{
        image: String,
        title: String,
        desc:  String,
        price: Number,
        rating: Number,
    }],

    token:{
        type: String
    }
})



const User = mongoose.model('users', userSchema);   // Here are two parameter collection name and schema name;

module.exports = User;  // We are exporting it because we use this file on multiple places.

