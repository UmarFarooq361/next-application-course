

import {Post} from "./models"
import {User} from "./models"
import { connectToDb } from "./utils";
export const getPosts = async () => {
  try {
     await connectToDb()
      const posts = await Post.find();
      return posts;
  } catch (error) {
      console.error('Error fetching posts:', error);
      throw error; // Rethrow or handle as needed
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb()
      const post = await Post.find({slug});
      return post;
  } catch (error) {
      console.error('Error fetching post:', error);
      throw error; // Rethrow or handle as needed
  }
};

export const getUser = async (id) => {
  try {
    await connectToDb()

      const user = await User.findById(id);
      return user;
  } catch (error) {
      console.error('Error fetching user:', error);
      throw error; // Rethrow or handle as needed
  }
};
export const getUsers = async () => {
  try {
    await connectToDb()

      const users = await User.find(id);
      return users;
  } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Rethrow or handle as needed
  }
};