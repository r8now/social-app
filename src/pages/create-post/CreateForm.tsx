import React from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { addDoc, collection } from 'firebase/firestore'
import { auth,db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

interface CreateFormData{
  title: string,
  description: string
}

const CreateForm = () => {
  const [user] = useAuthState(auth);


  const schema = yup.object().shape({
    title: yup.string().required("* Title is a must"),
    description: yup.string().required("* add title")

  })
  const { register, handleSubmit, formState: {errors}, } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db,"posts");


const onCreatPost = async (data: CreateFormData) => {
  await addDoc(postsRef,{
  ...data,
    username:user?.displayName,
    userId:user?.uid
  });

};


  return (
    <form onSubmit={handleSubmit(onCreatPost)}>
      <input type="text" placeholder="Title" {...register("title")} />
      <p>{errors.title?.message}</p>
      <textarea placeholder="Description" {...register("description")} />
      <p>{errors.description?.message}</p>

      <input type="submit" />
    </form>
  );
}

export default CreateForm