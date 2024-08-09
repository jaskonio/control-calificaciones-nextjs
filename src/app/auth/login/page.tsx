'use client';

import { useForm, SubmitHandler } from "react-hook-form"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


type Inputs = {
  username: string
  password: string
}


export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const [error, setError] = useState('');
  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });

    console.log(res);

    if (res?.error) {
        setError(res.error)
      } else {
        router.push('/')
        // router.refresh()
      }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
        )}

        <label htmlFor="username">Username</label>
        <input {...register("username", { required: true})} />
        {errors.username && <span>This field is required</span>}
        
        <label htmlFor="password">Password</label>
        <input {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
    </form>
  )
}