import React, { useState, setState } from "react";
import axios from "axios";
import photoman from "../../assets/img/man.png";
function RegistrationForm() {
  const [Username, setUsername] = useState(null);
  const [Name, setName] = useState(null);
  const [Lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Age, setAge] = useState(null);
  const [Profession, setProfession] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "Username") {
      setUsername(value);
    }
    if (id === "Name") {
      setName(value);
    }
    if (id === "Lastname") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "Password") {
      setPassword(value);
    }
    if (id === "Age") {
      setAge(value);
    }
    if (id === "Profession") {
      setProfession(value);
    }
  };

  const handleSubmit = async () => {
    fetch("api/User/SignupADoctor", {
      method: "POST",
      body: JSON.stringify({
        userName: Username,
        name: Name,
        lastName: Lastname,
        email: email,
        password: Password,
        age: Age,
        profession: Profession,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        alert("ثبت نام موفق آمیز بود");
        console.log(data);
      })
      .catch((err) => console.error(err));

    console.log(Username, Name, Lastname, email, Password, Age, Profession);
  };

  return (
    <div className="flex justify-end items-center font-medium text-slate-500 bg-[#E8F2F2]">
      <div className="w-96 h-[530px] bg-[#D1E4F5] rounded-3xl flex justify-center items-center">
        <div
          id="sginup"
          className="flex flex-col justify-evenly items-center h-[530px] py-4"
        >
          <input
            type="text"
            value={Username}
            onChange={(e) => handleInputChange(e)}
            id="Username"
            placeholder="Username"
            className="w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3"
          />
          <input
            type="text"
            placeholder="Name"
            value={Name}
            id="Name"
            onChange={(e) => handleInputChange(e)}
            className="w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3"
          />
          <input
            type="text"
            placeholder="Lastname"
            id="Lastname"
            value={Lastname}
            onChange={(e) => handleInputChange(e)}
            className="w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            className="w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3"
          />
          <input
            type="password"
            placeholder="Password"
            id="Password"
            value={Password}
            onChange={(e) => handleInputChange(e)}
            className="w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3"
          />
          <input
            type="number"
            placeholder="Age"
            id="Age"
            value={Age}
            onChange={(e) => handleInputChange(e)}
            className="w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3"
          />
          <input
            type="text"
            placeholder="Profession"
            id="Profession"
            value={Profession}
            onChange={(e) => handleInputChange(e)}
            className="w-64 h-11 bg-[#BCDCF9] rounded-xl shadow-md border-none outline-none text-sm pl-3"
          />
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="w-64 h-11 bg-[#14659D] rounded-xl text-white font-medium"
          >
            ثبت نام دکتر
          </button>
        </div>
      </div>
      <div>
        <img className="h-screen" src={photoman} alt="photoman" />
      </div>
    </div>
  );
}

export default RegistrationForm;
