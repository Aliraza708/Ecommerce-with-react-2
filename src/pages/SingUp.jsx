import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth,createUserWithEmailAndPassword } from "../untily"

function SingUp(){
  const navigation = useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  createUserWithEmailAndPassword(auth,email,password).then(()=>{
    navigation("/")
  }).catch((err)=>console.log(err))
    return(
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
    <form action="#" method="post">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required=""
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirm-password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required=""
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign Up
      </button>
    </form>
    <p className="mt-6 text-center text-gray-500 text-sm">
      Already have an account?{" "}
      
      <Link to={"/SingIn"} className="text-blue-500 hover:underline">
        Sign in
      </Link>
    </p>
  </div>
</div>

    )
}
export default SingUp