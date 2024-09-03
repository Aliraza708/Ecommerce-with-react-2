
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth,signInWithEmailAndPassword } from "../untily"
function SingIn(){
  const navigation = useNavigate()
  const [email,setEmailSingIn]=useState("")
  const [password,setPasswordSingIn]=useState("")
  console.log(email)
  console.log(password)
  signInWithEmailAndPassword(auth,email,password).then(()=>{
    navigation("/")
   }).catch((err)=>console.log("===>",err))
   
    return(<div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <div id="form" method="post">
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
                onChange={(e)=>setEmailSingIn(e.target.value)}
              />
            </div>
            <div className="mb-6">
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
                onChange={(e)=>setPasswordSingIn(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
          <p className="mt-6 text-center text-gray-500 text-sm">
            Don't have an account?{" "}
            <Link to={"/SingUp"} className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      )
}

export default SingIn