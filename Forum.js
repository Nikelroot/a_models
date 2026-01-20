import mongoose from './lib/mongoose.js';

const { Schema } = mongoose;

const schema = new Schema(
  {
    title: String,
    href: String,
    magnet_link: String,
    date: String,
    cat: String,
    hasProblem: { type: Boolean, default: false },
    hasLink: { type: Boolean, default: false }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

schema.index({ title: 1 });
schema.index({ cat: 1 });
schema.index({ date: 1 });
schema.index({ href: 1 });
schema.index({ hasProblem: 1 });

const Forum = mongoose.model('Forum', schema);
export default Forum;
