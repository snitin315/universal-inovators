const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = mongoose.Schema({
    user: {
        type: Array,
        default: []
    },
    data: {
        type: Array,
        default: []
    },
    membership: {
        type: String,
        enum: ['Professional','Student','Institutional'],
        default: 'Professional'
    }
}, {timestamps: true})

const Payment = mongoose.model('MemRegistration', paymentSchema);

module.exports = { Payment }