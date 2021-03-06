import CardSettings from "../../components/Card/CardSettings";

import React from "react";

import Navbar from "../../components/Navbar.js";
import Sidebar from "../../components/Sidebar.js";
import Card from "../../components/Card/Card";
import CardProfile from "../../components/Card/CardProfile";

import Table from "../../components/Table/Table";
import Footer from "../../components/footer/footer";

export default function Users() {
  const editHandler = () => {
    console.log("edited");
  };
  const deleteHandler = () => {
    console.log("deleted");
  };
  let tableData = {
    title: "Users",
    actions: [
      // {name:"delete", icon : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`, handler : deleteHandler}
      // {name:"edit", icon : "", handler : editHandler}
      { name: "delete", handler: deleteHandler },
      { name: "edit", handler: editHandler },
    ],
    cols: [
      //   {
      //     Id: "45545445",
      //     isPro: true,
      //     location: "Poland, Warszawa",
      //     age: "23",
      //     first_name: "Karina",
      //     last_name: "Simons",
      //     isOnline: true,
      //     intresets:
      //       "Cinema, dinner with friends, shoes, makeup, shopping, walks on the beach.",
      //     languages: [
      //       { name: "English", level: "conversational" },
      //       { name: "Polish", level: "Native" },
      //     ],
      //     distance: "256",
      //   },
      { name: "Id", label: "ID", type: "text" },
      { name: "Img", label: "Img", type: "img" },
      { name: "full_name", label: "full name", type: "text" },
      { name: "location", label: "location", type: "text" },
      { name: "age", label: "age", type: "text" },
      { name: "isPro", label: "isPremuim", type: "bool" },
    ],
    rows: [
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: false,
        last_name: "Simons",
        profileImgPath:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: true,
        last_name: "Simons",
      },
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: true,
        last_name: "Simons",
      },
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: true,
        last_name: "Simons",
      },
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: true,
        last_name: "Simons",
      },
    ],
  };
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200 ">
        <Navbar />
        <div className="relative bg-green-600 md:pt-32 pb-12 pt-12 mb-0 px-10 text-white flex">
          <i className="fa fa-cog fa-3x"></i>
          <h2 className="text-4xl pt-2 pl-2">Profile Settings</h2>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full pt-12">
          <div className="flex flex-wrap ">
            <div className="flex-2 mb-2 xl:mb-0 px-4">
              <CardSettings />
            </div>
            <div className="flex-1 mb-2 xl:mb-0 px-4">
              <CardProfile />
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
