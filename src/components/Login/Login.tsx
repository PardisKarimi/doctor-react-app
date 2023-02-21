import React from 'react'
import Photoman from "../../assets/img/man.png"
import logo from "../../assets/img/nav.png"

const Login = () => {
  return (
    <div className='flex justify-end items-center bg-[#E8F2F2]'>
    <div className='w-96 h-96 bg-[#D1E4F5] rounded-3xl flex justify-center items-center'>
      <form className='flex flex-col justify-evenly items-center h-96 py-4'>
        <img src={logo} alt="logo" className='w-44'/>
        <input type="email" placeholder='Email' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3'/>
        <input type="password" placeholder='Password' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3'/>
        <button className='w-64 h-11 bg-[#14659D] rounded-xl text-white font-medium'>ورود</button>
      </form>
    </div>
    <div>
      <img className='h-screen' src={Photoman} alt="photoman"/>
    </div>
  </div>
  )
}

export default Login
