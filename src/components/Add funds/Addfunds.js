import React from 'react'
import Sidebar from "../Sidebar/Sidebar"

function Addfunds() {
    return (
      <div className="flex">
        <Sidebar />

        <div
          className="w-full"
          style={{ backgroundColor: "rgba(246, 243, 248, 1)" }}
        >
          <div className="m-3 md:m-10">
            <p className="text-3xl text-black font-bold my-5 md:my-0">
              Add Funds
            </p>
            <input
              className="bg-white w-full p-3 mt-5"
              type="text"
              placeholder="Choose your payment Method"
            />
            <div className="flex justify-evenly my-12  md:flex-row flex-col ">
              <div>
                <button className="bg-black text-white px-12 w-full py-3 border rounded-lg border-black mb-3 md:mb-0 ">
                  Bank Transfer
                </button>
              </div>
              <div>
                <button
                  className=" text-white px-12 py-3 w-full border rounded-lg border-black"
                  style={{ color: "#00000075" }}
                >
                  Pay Stack
                </button>
              </div>
            </div>
            <div className="bg-white p-5">
              <h1>Transfer your funds to</h1>
              <div className="flex my-5">
                <div>
                  <input
                    type="checkbox"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </div>
                <div className="ml-3 text-black text-xl font-bold">
                  <p>Sudha Telecoms</p>
                  <p>0153534142</p>
                  <p>Access bank</p>
                </div>
              </div>
              <p className="mb-3">Upload your evidence of payment here</p>
              <button
                className="py-2 px-5 border rounded-lg text-white"
                style={{ backgroundColor: "#00000075" }}
              >
                Choose
              </button>
              <div className="flex justify-end mt-48">
                <button
                  className="py-2 px-5 text-white border rounded-lg"
                  style={{ backgroundColor: "#A952F2" }}
                >
                  Notify Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Addfunds
