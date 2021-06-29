const mongoose = require('mongoose');
const propertyMasterSchema = new mongoose.Schema({

    PropertyId: {
        type: Number,
        required: false
    },

    name: {
        type: String,
        required: false
    },

    name_: {
        type: String,
        required: false
    },

    Image: {
        type: Array,
        required: false
    },

    location: {
        type: String,
        required: false,
        uniqueCaseInsensitive: true
    },

    description: {
        type: String,
        required: false
    },

    // logo: {
    //     type: String,
    //     required: false
    // },

    ratings: {
        type: String,
        required: false

    },

    website: {
        type: String,
        required: false

    },

    contact: {
        type: String,
        required: false
    },

    Address: {
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    wifi: {
        type: Boolean,
        required: false
    },
    breakfast: {
        type: Boolean,
        required: false
    },
    sanitized:{
        type: Boolean,
        required: false
    },
    gym: {
        type: Boolean,
        required: false
    },
    pool: {
        type: Boolean,
        required: false
    },
    laundry: {
        type: Boolean,
        required: false
    },
    beverages: {
        type: Boolean,
        required: false
    },
    pets: {
        type: Boolean,
        required: false
    },
    parking: {
        type: Boolean,
        required: false
    },
    url1: {
        type: String,
        required: false
    },
    url2: {
        type: String,
        required: false
    },
    url3: {
        type: String,
        required: false
    },
    url4: {
        type: String,
        required: false
    },
    WAcontact: {
        type: Number,
        required: false
    }
})


module.exports = propertyMaster = mongoose.model('propertyMaster', propertyMasterSchema);