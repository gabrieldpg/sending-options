/*
  Field's mongoose model, schema requires name and key
  @name: user friendly name for field
  @key: machine friendly name for field, will be what system looks for
    in word document in order to substitute it with its value
*/


const mongoose = require('mongoose');

const FieldSchema = new mongoose.Schema({  

  name: { type: String, required: true, unique: true, dropDups: true },
  key: { type: String, required: true, unique: true, dropDups: true }

});

module.exports = mongoose.model('Field', FieldSchema);