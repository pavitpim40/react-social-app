/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import * as postAPI from '../apis/postApi';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  // GET - AllPost
  const getAllPost = async () => {
    try {
      const response = await postAPI.getAllPost();
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return <PostContext.Provider value={{ posts: posts }}>{children}</PostContext.Provider>;
}
