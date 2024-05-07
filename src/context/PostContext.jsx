/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const posts = [];
  return <PostContext.Provider value={{ posts: posts }}>{children}</PostContext.Provider>;
}
