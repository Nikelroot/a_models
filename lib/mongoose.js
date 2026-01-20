import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
const url = 'mongo_abook';

let port = 27017;
let BASE_NAME = 'abook';

mongoose.connect(`mongodb://${url}:${port}/${BASE_NAME}`, {
  authSource: 'admin',
  user: 'nikelroot',
  pass: '48151623MongoDB42'
});

export default mongoose;
