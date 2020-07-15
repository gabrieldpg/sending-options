// set field's schema and export its model
const mongoose = require('mongoose');  
const FieldSchema = new mongoose.Schema({  
  name: String,
  key: String
});
mongoose.model('Field', FieldSchema);
module.exports = mongoose.model('Field');