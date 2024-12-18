import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Flip, toast } from 'react-toastify';




const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setemailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    // firebase
    const auth = getAuth();

    // ==================function part============
 
  
  const handlerSubmit = (e)=>{
    e.preventDefault()
    if(email== ''){
      setemailError('Pleace Input Your Email')
    }
    if(password == ''){
      setPasswordError('Pleace Input Your Password')
    } else{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if( errorCode == 'auth/email-already-in-use'){
        toast.error('Email has already taken!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
    }
    // ..
  });
    }
  }
  
  console.log(email);

  return (
    <>

<div className="container mx-auto">
      <div className="login_page w-full h-screen flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 gap-4 lg:gap-8">
        <div className="left_side w-full lg:w-[50%] flex flex-col items-center lg:items-start gap-5">
          <h1 className="text-[28px] lg:text-[36px] font-extrabold text-[#444B59]">
            SIGN UP
          </h1>
          <p className="text-[16px] lg:text-[20px] text-[#444B59]">
            Already have an account?{" "}
            <a href="/login" className="text-[#8699DA]">
              Login..
            </a>
          </p>

          <form onSubmit={handlerSubmit} className="w-full max-w-[400px] lg:max-w-[540px] flex flex-col gap-3">
            <div>
              <label className="text-[14px] lg:text-[18px] font-semibold text-[#444B59]">
                Email
              </label>
              <input type="email" value={email} onChange={(e)=>{ setEmail(e.target.value) , setemailError('')}} placeholder="deniel123@gmail.com" className="w-full h-[50px] lg:h-[62px] border border-[#789ADE] rounded-full px-4 text-[14px] lg:text-[18px] outline-none"/>
              {emailError && (
                <p className="text-[12px] lg:text-[16px] text-red-500">{emailError}</p>
              )}
            </div>

            <div>
              <label className="text-[14px] lg:text-[18px] font-semibold text-[#444B59]">
                Create a password
              </label>
              <input type="password" onChange={(e)=>{setPassword(e.target.value) , setPasswordError('')}} placeholder="Enter your password" className="w-full h-[50px] lg:h-[62px] border border-[#789ADE] rounded-full px-4 text-[14px] lg:text-[18px] outline-none"/>
              {passwordError && (
                <p className="text-[12px] lg:text-[16px] text-red-500">{passwordError}</p>
              )}
            </div>
           

            <div className="flex justify-between text-[12px] lg:text-[16px] text-[#444B59]">
              <label>
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-[#8699DA]">Forgot password?</a>
            </div>

            <button onClick={handlerSubmit}  type="submit" onSubmit={handlerSubmit} className="w-full h-[50px] lg:h-[62px] bg-[#8699DA] text-white rounded-full text-[14px] lg:text-[20px] font-extrabold">Sign In</button>
          </form>

          <div className="flex items-center gap-4">
            <div className="h-[1px] w-[100px] lg:w-[200px] bg-[#444B59]" />
            <p className="text-[12px] lg:text-[16px]">or continue with</p>
            <div className="h-[1px] w-[100px] lg:w-[200px] bg-[#444B59]" />
          </div>

          <div className="flex w-full justify-evenly items-center">
            <a href="#"><img src="Images/google.png"alt="google" className="w-8 lg:w-10 h-8 lg:h-10 border border-[#8699DA] rounded-lg p-2"/></a>
            <a href="#"><img src="Images/facebook.png" alt="facebook" className="w-8 lg:w-10 h-8 lg:h-10 border border-[#8699DA] rounded-lg p-2"/></a>
            <a href="#"><img src="Images/apple.png" alt="apple" className="w-8 lg:w-10 h-8 lg:h-10 border border-[#8699DA] rounded-lg p-2"/></a>
          </div>
        </div>

        <div className="right_side w-full lg:w-[50%] flex justify-center items-center">
          <img src="Images/banner.png" alt="banner" className="w-full h-auto object-cover lg:object-contain"
          />
        </div>
      </div>
    </div>
        

    </>
  )
}

export default Register