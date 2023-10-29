import React from "react";
import { Post as IPost } from "./Main";
import { auth, db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
  post: IPost;
}
export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);

  const likesRef = collection(db, "likes");

  const addLike = async () => {
    await addDoc(likesRef, {
      
      postId: post.id,
      userId: user?.uid,
    });
  };

  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={addLike}>&#128077;</button>
      </div>
    </div>
  );
};
