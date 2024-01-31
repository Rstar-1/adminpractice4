import React from "react";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";

const Dashboard = () => {
  return (
    <div className="mtpx9 prpx10 plpx10 ptpx20 pbpx20 cust-scroll bgwhite dashboard">
      <div className="grid-cols-4 gap-12">
        <div className="h-dash d-shadow overflow-hidden relative flex items-center bgprimary rounded-5">
          <div className="p15">
            <h2 className="fsize29 mtpx1 mbpx1 textwhite">1000 +</h2>
            <p className="fsize14 mtpx1 mbpx1 textwhite">
              Collection of Porfolio
            </p>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle1"></div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle2"></div>
          </div>
        </div>
        <div className="h-dash d-shadow overflow-hidden relative flex items-center bgsecondary rounded-5">
          <div className="p15">
            <h2 className="fsize29 mtpx1 mbpx1 textwhite">10 +</h2>
            <p className="fsize14 mtpx1 mbpx1 textwhite">Enquiry Members</p>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle1"></div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle2"></div>
          </div>
        </div>
        <div className="h-dash d-shadow overflow-hidden relative flex items-center bgwarning rounded-5">
          <div className="p15">
            <h2 className="fsize29 mtpx1 mbpx1 textwhite">100 +</h2>
            <p className="fsize14 mtpx1 mbpx1 textwhite">Testimonials</p>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle1"></div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle2"></div>
          </div>
        </div>
        <div className="h-dash d-shadow overflow-hidden relative flex items-center bgsuccess rounded-5">
          <div className="p15">
            <h2 className="fsize29 mtpx1 mbpx1 textwhite">6</h2>
            <p className="fsize14 mtpx1 mbpx1 textwhite">Services</p>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle1"></div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="bg-glass2 circle2"></div>
          </div>
        </div>
      </div>
      <div className="mtpx25 mbpx15 flex gap-12 items-center">
        <div className="w-60">
          <div className="relative">
            <input
              className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Search"
            />
            <div className="absolute top-0 right-0 mtpx9 mrpx2">
              <FeatherIcon
                icon="search"
                className="textgray cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="fsize13 textforth w-20 font-300">
              <p>First Name</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Last Name</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Email</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Phone</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Message</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex w-full justify-end">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={4}
          pageRangeDisplayed={4}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Dashboard;
