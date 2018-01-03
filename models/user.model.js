var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

UserSchema.index({ username: 1 }); // schema level

mongoose.model('User', UserSchema);