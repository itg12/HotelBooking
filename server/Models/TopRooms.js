const mongoose = require("mongoose")

const TopRoomSchema = mongoose.Schema({
    room_Number:{
        type:Number,
        required:true
    },
    image:{
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    
    capacity:{
        type:Number,
        required: true
    },
    facilities:[

    ],
    rating:{
        type: Number,
        required: true
    },
    booked:{
        type: Boolean,
        default: false,
        required: true
    }
})

const TopRooms  = mongoose.model('toprooms', TopRoomSchema)

module.exports= TopRooms