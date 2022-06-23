const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    roomid: { type: String, required: true, unique: true },
    userid: { type: String, required: true, unique: true },
    days: { type: String, required: true }
}, {timestamps: true});

const user = mongoose.model('user', UserSchema)
module.exports = user