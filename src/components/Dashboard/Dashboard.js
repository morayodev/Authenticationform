import React from 'react'
import Sidebar from "../Sidebar/Sidebar"
import { BsWallet } from "react-icons/bs"
import graph from "../images/graph.svg"

function Dashboard() {
  return (
    <>
     
      <div className="flex">
        <Sidebar />
        <div
          className="w-full"
          style={{ backgroundColor: "rgba(246, 243, 248, 1)" }}
        >
          <div className="m-3 md:m-10">
            <div className="flex justify-left md:justify-between justify-items-start md:items-center w-full flex-col md:flex-row ">
              <p className="text-3xl text-black font-bold my-5 md:my-0">
                Over view
              </p>
              <button
                className="text-white border rounded-lg p-4 text-base mb-5 md:mb-0"
                style={{ backgroundColor: "rgba(169, 82, 242, 1)" }}
              >
                Move Commission
              </button>
            </div>
            <div className="flex flex-col md:flex-row ">
              <div className="bg-white mr-5 border border-white rounded-lg py-10 px-10 flex justify-items-start md:items-center justify-start md:justify-center mb-5 ">
                <div>
                  <BsWallet className="text-5xl border rounded-lg bg-yellow-600 p-3 text-white mr-5" />
                </div>
                <div>
                  <p
                    className="text-2xl"
                    style={{ color: " rgba(64, 64, 64, 0.7)" }}
                  >
                    Wallet Balance
                  </p>
                  <h3
                    className="text-2xl"
                    style={{ color: " rgba(22, 108, 221, 1)" }}
                  >
                    N 2000.00
                  </h3>
                </div>
              </div>
              <div className="bg-white mr-5 border border-white rounded-lg py-10 px-10 flex items-center justify-center ">
                <div>
                  <BsWallet className="text-5xl border rounded-lg bg-purple-700 p-3 text-white mr-5" />
                </div>
                <div>
                  <p
                    className="text-2xl"
                    style={{ color: " rgba(64, 64, 64, 0.7)" }}
                  >
                    Commission Balance
                  </p>
                  <h3
                    className="text-2xl"
                    style={{ color: " rgba(22, 108, 221, 1)" }}
                  >
                    N 50.00
                  </h3>
                </div>
              </div>
            </div>

            <img className="my-5" src={graph} alt="graph" />

            <div className="flex md:flex-row flex-col ">
              <div className="bg-white mr-5 border border-white rounded-lg py-3 pl-5 pr-20 flex items-center justify-center mb-5 ">
                <div>
                  <BsWallet className="text-5xl border rounded-lg bg-blue-700 p-3 text-white mr-5" />
                </div>
                <div>
                  <p
                    className="text-xl"
                    style={{ color: " rgba(64, 64, 64, 0.7)" }}
                  >
                    Transactions
                  </p>
                  <h3
                    className="text-xl"
                    style={{ color: " rgba(22, 108, 221, 1)" }}
                  >
                    2
                  </h3>
                </div>
              </div>

              <div className="bg-white mr-5 border border-white rounded-lg py-3 pl-5 pr-20 flex items-center justify-center mb-5 ">
                <div>
                  <BsWallet className="text-5xl border rounded-lg bg-yellow-600 p-3  text-white mr-5" />
                </div>
                <div>
                  <p
                    className="text-xl"
                    style={{ color: " rgba(64, 64, 64, 0.7)" }}
                  >
                    Groups
                  </p>
                  <h3
                    className="text-xl"
                    style={{ color: " rgba(22, 108, 221, 1)" }}
                  >
                    5
                  </h3>
                </div>
              </div>
              <div className="bg-white mr-5 border border-white rounded-lg py-3 pl-5 pr-20 flex items-center justify-center mb-5 ">
                <div>
                  <BsWallet className="text-5xl border rounded-lg bg-purple-700  p-3 text-white mr-5" />
                </div>
                <div>
                  <p
                    className="text-xl"
                    style={{ color: " rgba(64, 64, 64, 0.7)" }}
                  >
                    Contacts
                  </p>
                  <h3
                    className="text-xl"
                    style={{ color: " rgba(22, 108, 221, 1)" }}
                  >
                    10
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard
