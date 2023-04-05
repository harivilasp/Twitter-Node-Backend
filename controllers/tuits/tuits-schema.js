import mongoose from "mongoose";

const tuitsSchema = mongoose.Schema({
  topic: String,
  username: String,
  time: String,
  title: String,
  avatar: String,
  liked: Boolean,
  reply: Number,
  retuit: Number,
  like: Number,
  dislike: Number,
  handle: String,
  tuit: String
}, {collection: "tuits"});

export default tuitsSchema;