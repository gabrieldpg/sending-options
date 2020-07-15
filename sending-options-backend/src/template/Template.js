// set template's schema and export its model
const mongoose = require('mongoose');  
const TemplateSchema = new mongoose.Schema({  
  name: String,
  path: String,
  attachment: Boolean,
  fields: [Number]
});
mongoose.model('Template', TemplateSchema);
module.exports = mongoose.model('Template');