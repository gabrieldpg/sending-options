import mongoose from 'mongoose';

 const cardsSchema = mongoose.Schema({ name: String });
 export const cardsModel = mongoose.model('cards', cardsSchema);