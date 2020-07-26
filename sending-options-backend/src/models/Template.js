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

  name: { type: String, required: true, unique: true, dropDups: true },
  path: { type: String, required: true, unique: true, dropDups: true, lowercase: true },
  attachment: { type: Boolean, default: false },
  fields: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Field' }]

});

module.exports = mongoose.model('Template', TemplateSchema);