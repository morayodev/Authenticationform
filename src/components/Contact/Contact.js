import React from 'react'
import Sidebar from "../Sidebar/Sidebar";

function Contact() {
    return (
      <div className="flex">
        <Sidebar />
        <div
          className="w-full"
          style={{ backgroundColor: "rgba(246, 243, 248, 1)" }}
        >
          <div className="m-3 md:m-10">
            <div className="flex  md:justify-between md:items-center flex-col md:flex-row">
              <h1 className="text-3xl text-black font-bold my-3 md:my-0">
                Manage your Team
              </h1>
              <button
                className="py-3 md:px-10 px-5 border rounded-lg mt-2 md:mt-5 text-white"
                style={{ backgroundColor: "#A952F2" }}
              >
                Add Contact
              </button>
            </div>
            <div
              className="flex md:mt-20 mt-5"
              style={{ color: "rgba(64, 64, 64, 0.68)" }}
            >
              <h1 className="text-2xl mr-10">Contact</h1>
              <h1 className="text-2xl">Group</h1>
            </div>

            <div className="flex md:justify-between md:items-center md:mt-10 mt-5 flex-col md:flex-row ">
              <div className="flex  md:justify-between md:items-center flex-col md:flex-row">
                <div>
                  <button
                    className="py-3 w-full px-10 border  rounded-lg text-white mb-3 md:mb-0"
                    style={{ backgroundColor: "#A952F2" }}
                  >
                    Recharge Selected
                  </button>
                </div>

                <div>
                  <button
                    className="py-3 px-10 w-full border rounded-lg md:ml-5 ml-0 text-white mb-3 md:mb-0"
                    style={{ backgroundColor: "#A952F2" }}
                  >
                    Upload SpreadSheet
                  </button>
                </div>
              </div>

              <div>
                <button
                  className="py-3 px-10 w-full  border rounded-lg  text-white mr-8"
                  style={{ color: "#A952F2" }}
                >
                  Download Sample spreadsheet
                </button>
              </div>
            </div>
            <h1 className="text-3xl text-black font-bold my-3 md:my-10">
              All Contacts
            </h1>
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>HOME NUMBER</th>
                  <th>NETWORK</th>
                  <th>DATE CREATED</th>
                </tr>
              </thead>

              {/* <tbody>
                <tr>
                  <td>Guy Hawkins</td>
                  <td>08032456788</td>
                  <td>Airtel</td>
                  <td>18-08-2020</td>
                  <td style="color:rgba(255, 0, 0, 1);">
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
              </tbody> */}
            </table>
            {/* <div>
            
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Network</th>
                  <th>Date Created</th>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Guy Hawkins</td>
                  <td>08178270172</td>
                  <td>Airtel</td>
                  <td>18-02</td>
                  <td style="color:rgba(17, 138, 178, 1);">
                    <i class="far fa-pencil"></i>
                  </td>
                  <td style="color:rgba(255, 0, 0, 1);">
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Guy Hawkins</td>
                  <td>08178270172</td>
                  <td>Airtel</td>
                  <td>18-02</td>
                  <td style="color:rgba(17, 138, 178, 1);">
                    <i class="far fa-pencil"></i>
                  </td>
                  <td style="color:rgba(255, 0, 0, 1);">
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Guy Hawkins</td>
                  <td>08178270172</td>
                  <td>Airtel</td>
                  <td>18-02</td>
                  <td style="color:rgba(17, 138, 178, 1);">
                    <i class="far fa-pencil"></i>
                  </td>
                  <td style="color:rgba(255, 0, 0, 1);">
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Guy Hawkins</td>
                  <td>08178270172</td>
                  <td>Airtel</td>
                  <td>18-02</td>
                  <td style="color:rgba(17, 138, 178, 1);">
                    <i class="far fa-pencil"></i>
                  </td>
                  <td style="color:rgba(255, 0, 0, 1);">
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Guy Hawkins</td>
                  <td>08178270172</td>
                  <td>Airtel</td>
                  <td>18-02</td>
                  <td style="color:rgba(17, 138, 178, 1);">
                    <i class="far fa-pencil"></i>
                  </td>
                  <td style="color:rgba(255, 0, 0, 1);">
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
             
            </div> */}
          </div>
        </div>
      </div>
    );
}

export default Contact
