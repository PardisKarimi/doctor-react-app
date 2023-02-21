import React from "react";
import etemad from "../../assets/img/etemad.jpg";
import arrow from "../../assets/img/arrow.png";

const Footnote = () => {
  return (
    <div dir="rtl" className="bg-[#E8F2F2]">
      <div className="w-full h-64 bg-[#003566] rounded-tl-[60px] rounded-tr-[60px] border-2 border-white p-10 flex justify-evenly font-medium text-white">
        <div className="flex justify-between w-2/4 text-base">
          <div>
            <div className="flex">
              <img src={arrow} alt="arrow" className="w-4 h-4 ml-2 mt-1" />
              <h4>ورود پزشکان</h4>
            </div>
            <div className="flex pt-3">
              <img src={arrow} alt="arrow" className="w-4 h-4 ml-2 mt-1" />
              <h4>ورود پزشکان</h4>
            </div>
          </div>
          <div>
            <div className="flex">
              <img src={arrow} alt="arrow" className="w-4 h-4 ml-2 mt-1" />
              <h4>صفحه نخست دکتریاب</h4>
            </div>
            <div className="flex pt-3">
              <img src={arrow} alt="arrow" className="w-4 h-4 ml-2 mt-1" />
              <h4>قوانین سایت</h4>
            </div>
          </div>
          <div>
            <div className="flex">
            <img src={arrow} alt="arrow" className="w-4 h-4 ml-2 mt-1" />
              <h4>پرسش و پاسخ های پزشکی</h4>
            </div>
            <div className="flex pt-3">
            <img src={arrow} alt="arrow" className="w-4 h-4 ml-2 mt-1" />
              <h4>تلفن های پشتیبانی</h4>
            </div>
          </div>
        </div>
        <img src={etemad} alt="etemad" className="w-36 rounded-md" />
      </div>
      <div className="w-full h-3 bg-[#001D3D] border-b-2 border-x-2 border-white"></div>
    </div>
  );
};

export default Footnote;
