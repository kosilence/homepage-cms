var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  url: { type: String, required: true },
  type: { type: String, default: '' },
  desc: { type: String, default: '' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

mongoose.model('Image', ImageSchema);