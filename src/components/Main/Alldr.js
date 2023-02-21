import React from "react";
import axios from "axios";
import user from "../../assets/img/user.png";
// import tik from "../../assets/img/tik.png";

export default class Alldr extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`api/Patient/GetAllDoctors`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="bg-[#E8F2F2] w-full h-auto grid justify-center items-center py-24">
        <div className="grid grid-cols-3 gap-10">
          {" "}
          {this.state.persons.map((person) => (
            <div
              key={person.name}
              className="w-96 h-48 bg-[#D1E4F5] rounded-2xl border-2 border-white shadow-lg grid grid-cols-2 pt-4 pr-8 font-vazir"
            >
              <div className="flex flex-col items-center pt-1">
                <div className="bg-white w-28 h-28 rounded-full shadow-md flex justify-center items-center">
                  <img
                  className=""
                    src={user}
                    alt="user"
                  />
                </div>
                <button className=" w-28 h-7 bg-[#14659D] text-white text-xs rounded-2xl mt-3">
                  نوبت دهی
                </button>
              </div>
              <div className="flex flex-col items-end">
                  {/* <img src={tik} alt="tik"/> */}
                <h3 className="pt-1">
                  {person.name}
                  {""} {person.lastName}
                  {""}
                </h3>
                <h4 className="text-sm bg-[#BCDCF9] text-[#14659D] w-auto h-7 text-center pt-1 px-4 rounded-2xl mt-4 shadow-md">
                  {person.profession}
                </h4>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    );
  }
}
