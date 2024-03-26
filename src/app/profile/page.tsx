"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { useState } from 'react'

export default function LogoutPage() {
  const router = useRouter();
  const [data, setData] = useState("nothing")

  const handleLogout = async () =>{
    try {
      const response = await axios.get("/api/users/logout");
      router.push("/login")
      
    } catch (error:any) {
      console.log("Error while looging out", error.message)
    }
  }

  const getUserDetails = async ()=> {
    const user= await axios.get("/api/users/me")
    setData(user.data.data._id)

  }

  return (
    <div className='flex flex-col items-start justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className='text-white'>{data === 'nothing' ? "Nothing" : <Link href={`profile/${data}`}>{data}</Link> }</h2>
      <hr />
      <button onClick={handleLogout}>Logout</button>
      <button onClick={getUserDetails}>Get User Details</button>
    </div>
  )
}