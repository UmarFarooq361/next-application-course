import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 30
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  img: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
},
{timestamps: true}
);



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
    
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

module.exports = Post;

module.exports = User;