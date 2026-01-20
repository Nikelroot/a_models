import mongoose from './lib/mongoose.js';

const { Schema } = mongoose;

const schema = new Schema(
  {
    forum: { type: Schema.Types.ObjectId, ref: 'Forum' },
    files: { type: Schema.Types.ObjectId, ref: 'File' }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

schema.index({ forum: 1 });

const File = mongoose.model('File', schema);
export default File;
