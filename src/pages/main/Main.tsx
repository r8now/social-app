import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { useEffect } from "react";
import {Post} from "./Post";

interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}
const postsRef = collection(db, "posts");

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    console.log(data);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((post) => (
        <Post post={post}/>
      ))}
    </div>
  );
};


export { Post };

