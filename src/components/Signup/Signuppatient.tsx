import React from 'react'
import Photoman from "../../assets/img/man.png"

const Signuppatient = () => {
  return (
    <div className='flex justify-end items-center bg-[#E8F2F2]'>
    <div className='w-96 h-[530px] bg-[#D1E4F5] rounded-3xl flex justify-center items-center'>
      <form className='flex flex-col justify-evenly items-center h-[530px] py-4'>
        <input type="text" placeholder='Username' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3' />
        <input type="text" placeholder='Name' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3' />
        <input type="text" placeholder='Lastname' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3'/>
        <input type="email" placeholder='Email' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3'/>
        <input type="password" placeholder='Password' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3'/>
        <input type="number" placeholder='Age' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3'/>
        {/* <input type="file"  placeholder='Doucmentfile' className='w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3'/> */}
        <button className='w-64 h-11 bg-[#14659D] rounded-xl text-white font-medium'>ثبت نام بیمار</button>
      </form>
    </div>
    <div>
      <img className='h-screen' src={Photoman} alt="photoman"/>
    </div>
  </div>
  )
}

export default Signuppatient

