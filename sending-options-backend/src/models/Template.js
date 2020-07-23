/*
  Template's mongoose model, schema requires name, path, attachment, and optional fields
  @name: user friendly name for template
  @path: name of template with - instead of spaces and in lower case
  @attachment: boolean, if true, this template includes email and pdf attachment, 
    otherwise, only email
  @fields: array with all fields required in this template, might not require any
*/


const mongoose = require('mongoose');  

const TemplateSchema = new mongoose.Schema({  
  name: {
    type: String, 
    required: true
  },
  path: {
    type: String, 
    required: true
  },
  attachment: {
    type: Boolean, 
    required: true
  },
  fields: [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('Template', TemplateSchema);