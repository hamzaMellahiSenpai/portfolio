import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SuggestedPeople from "./SuggestedPeople";
import NearbyPeople from "./NearbyPeople";

export default function Home() {
  return (
    <div className="bg-gray-200  md:h-screen">
      <Navbar />
      {/* {currentTab } */}
      <div className="grid grid-cols-7 container gap-5 py-4 pt-16	w-screen">
        <Sidebar />
        <SuggestedPeople />
        {/* <NearbyPeople /> */}
      </div>
    </div>
  );
}
