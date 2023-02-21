import React from "react";
import logo from "../../assets/img/nav.png";
import photomain from "../../assets/img/main.png";
import { BiSearchAlt } from 'react-icons/bi';
import { TiArrowUnsorted } from 'react-icons/ti';

const Content = () => {
  return (
    <div>
      <div className="w-full h-screen bg-gradient-to-b from-[#98cbf5] to-[#E8F2F2]">
        <nav className="flex justify-between w-full pt-8 px-24">
          <div className="pt-3">
           <a href="/Signupdoctor">
           <button className="w-[90px] h-[44px] bg-[#14659D] text-white font-vazir text-sm rounded-2xl relative left-[23px] shadow-md">
              ثبت نام
            </button>
           </a>
            <a href="/Login">
            <button className="w-[86px] h-[44px] bg-[#1E89D4] text-white font-vazir text-sm rounded-2xl shadow-md mr-5">
              ورود
            </button>
            </a>
            <button className="w-[44px] h-[44px] bg-white rounded-2xl shadow-md align-middle text-[22px] pl-[10px] border-2 border-[#14659D]">
              <span className="text-[#14659D]"><BiSearchAlt/></span>
            </button>
          </div>
          <img className="w-36" src={logo} alt="Logo" />
        </nav>
        <main className="pt-14 px-24 flex justify-between items-center">
          <img className="w-[395px]" src={photomain} alt="photomain" />
          <div className="flex flex-col justify-between items-end h-32 mb-32">
            <h1 className="font-vazir text-2xl">بیش از 15 هزار <span className="text-[#14659D] text-3xl">پزشک متخصص </span>آماده کمک به شما هستند</h1>
            <button className="w-44 h-10 bg-[#14659D] font-medium text-white rounded-2xl text-base flex justify-center items-center"><span className="pr-2"><TiArrowUnsorted/></span>لیست متخصصین</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Content;
