import React from 'react'
import Sidebar from "../Sidebar/Sidebar"

function Airtime() {
    return (
      <div className="flex">
        <Sidebar />

        <div
          className="w-full"
          style={{ backgroundColor: "rgba(246, 243, 248, 1)" }}
        >
          <div className="m-3 md:m-10">
            <h1 className="text-3xl text-black font-bold my-3 md:my-0">
              Airtime
            </h1>
            <button
              className="py-3 px-10 border rounded-lg mt-2 md:mt-5 text-white"
              style={{ backgroundColor: "#A952F2" }}
            >
              Quick Airtime Purchase
            </button>

            <div className="mt-3 md:pl-10 md:py-10 p-5 boder rounded-lg bg-white">
              <div>
                <h1 className="text-3xl text-black font-bold">
                  Send Airtime to Contacts
                </h1>
              </div>
              <div>
                <label
                  className="formgroup mt-3 md:mt-10 text-base"
                  style={{ color: "rgba(64, 64, 64, 1)" }}
                >
                  Enter Amount
                </label>
                <input
                  className="border rounded md:w-9/12 w-full p-2 mt-2"
                  type="text"
                />
                <label
                  className="formgroup mt-5 text-base"
                  style={{ color: "rgba(64, 64, 64, 1)" }}
                >
                  Enter Name
                </label>
                <select className="border rounded md:w-9/12 w-full p-2 mt-2">
                  <option selected>Select Contact</option>
                  <option>Morayo</option>
                  <option>Abidemi</option>
                  <option>Funke</option>
                  <option>Bolu</option>
                  <option>Elizabeth</option>
                </select>
            
              </div>
              <div className="flex justify-end  pr:0 md:pr-56 mt-5">
                <button
                  className="py-2 px-8 text-white border rounded-lg"
                  style={{ backgroundColor: "#A952F2" }}
                >
                  Send
                </button>
              </div>
              <div className="mt-10">
                <h1 className="text-3xl text-black font-bold ">
                  Send Airtime to Group
                </h1>
              </div>
              <div>
                <label
                  className="formgroup mt-3 md:mt-10 text-base"
                  style={{ color: "rgba(64, 64, 64, 1)" }}
                >
                  Enter Amount
                </label>
                <input
                  className="border rounded md:w-9/12 w-full p-2 mt-2"
                  type="text"
                />
                <label
                  className="formgroup mt-5 text-base"
                  style={{ color: "rgba(64, 64, 64, 1)" }}
                >
                  Enter Name
                </label>
                <select className="border rounded md:w-9/12 w-full p-2 mt-2">
                  <option selected>Select Contact</option>
                  <option>Morayo</option>
                  <option>Abidemi</option>
                  <option>Funke</option>
                  <option>Bolu</option>
                  <option>Elizabeth</option>
                </select>
              </div>
              <div className="flex justify-end pr:0 md:pr-56 mt-5">
                <button
                  className="py-2 px-8 text-white border rounded-lg"
                  style={{ backgroundColor: "#A952F2" }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Airtime
