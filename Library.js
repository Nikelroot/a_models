import mongoose from './lib/mongoose.js';

const { Schema } = mongoose;

const schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    books: [{ type: Schema.Types.ObjectId, ref: 'Forum' }]
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

const Library = mongoose.model('Library', schema);
export default Library;
