"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";


export default function Page() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name , value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const link : string | undefined = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(link + "/api/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(async(res) => {
      if(!res.ok){
        throw await res.json()
      }
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      router.push('/')
      Swal.fire({
        title: "Login Success",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    })
    .catch(error => {
      // console.log(error, '<<<<');
      Swal.fire({
        title: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      
    })
  }
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      
      <div className="flex w-full max-w-6xl bg-yellow-50 rounded-xl shadow-lg overflow-hidden">
        
        
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">LOGIN</h1>
          <div className="p-6 shadow-md rounded-lg border border-gray-200">
            <div className="space-y-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email"  name="email" value={user.email} onChange={handleChange} className="grow" placeholder="Email"/>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="password" name="password" value={user.password} onChange={handleChange} className="grow" placeholder="Password" />
              </label>
              <div className="flex flex-col items-center justify-center">
              
                <button className="btn btn-accent w-full">SUBMIT</button>
            
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm">Dont have Account? <Link href="/register" className="text-blue-500">Register</Link> </p>
              </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bagian kanan */}
        <div className="hidden md:flex w-1/2 bg-items-center justify-center p-6">
          <img
            src="https://i.pinimg.com/564x/c6/13/b4/c613b4f4cc5981532deaae0f37af5e25.jpg" 
            alt="Login Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
