// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// // question model
// const questionModel = new Schema({
//   questions: { type: Array, default: [] },
//   answers: {type:Array, default:[]},
//   createdAt: {type:Date, default:Date.now},
// })


// export default mongoose.model('Questions', questionModel)


// questionModel.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

// question model
const questionModel = new Schema({
  questions: { type: Array, default: [] },
  answers: {type:Array, default:[]},
  createdAt: {type:Date, default:Date.now},
  admin: {
    username: { type: String, required: true },
    password: { type: String, required: true }
  }
});

export default mongoose.model('Questions', questionModel);

