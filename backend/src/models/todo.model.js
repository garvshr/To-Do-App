const express = require('mongoose');
const  totalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {  
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Todo', totalSchema);