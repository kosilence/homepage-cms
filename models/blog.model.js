var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  posts: [{
    title: String,
    summary: String,
    link: String,
    created: String
  }]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

mongoose.model('Blog', BlogSchema);