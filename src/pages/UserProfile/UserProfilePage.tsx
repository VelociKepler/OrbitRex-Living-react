import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

function UserProfilePage() {

  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({ name: "", email: "", phoneNumber: "", address: "", gender: "", date: ""})
  const [watchlist, setWatchlist] = useState([])

  const handleTabChange = (tab:any) => setActiveTab(tab);

  const API_BASE_URL = ""

  useEffect(() => {
    if(activeTab === "profile") {
      axios.get(``)
        .then((response) => setProfile(response.data))
        .catch((error) => console.log("Error fetching profile:", error))
    } else if(activeTab === "watchlist"){
      axios.get(``)
        .then((response) => setWatchlist(response.data))
        .catch((error) => console.log("Error fetching profile:", error))
    }
  },[activeTab])

  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row bg-white text-black">

        <nav className="flex flex-col gap-y-10 mb-5 md:mb-0 md:h-screen w-full md:w-[400px] pt-5 border-t-2">
          <h1 className="text-2xl md:text-3xl font-bold pl-5">User Profile</h1>
          <ul className="flex flex-col gap-y-5">
            <li>
              <button
                onClick={() => handleTabChange("profile")}
                className={`flex gap-3 w-full ${
                  activeTab === "profile"
                    ? "border-l-4 p-2 md:p-0 md:border-l-0 md:border-r-4 border-orange-500"
                    : "border-l-4 p-2 md:p-0 md:border-l-0 border-transparent"
                }`}
              >
                <i className="fa-solid fa-user text-xl md:text-2xl"></i>
                <h1 className="text-xl">Profile</h1>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange("watchlist")}
                className={`flex gap-3 w-full ${
                  activeTab === "watchlist"
                    ? "border-l-4 p-2 md:p-0 md:border-l-0 md:border-r-4 border-orange-500"
                    : "border-l-4 p-2 md:p-0 md:border-l-0 border-transparent"
                }`}
              >
                <i className="fa-solid fa-star text-xl md:text-2xl"></i>
                <h1 className="text-xl">Watchlist</h1>
              </button>
            </li>
          </ul>
        </nav>

        <div className="h-screen w-full border-l-2 border-t-2 p-5">

          {activeTab === "profile" && (
            <div className="flex flex-col items-center gap-10">
              <h1 className="text-2xl font-bold">{profile.name || "Unknown User"}</h1>
              <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-56 h-56 rounded-full "/>
              <div className="flex  flex-col gap-y-10 p-10 w-full text-xl shadow-lg">
                <h1>Email :</h1>
                <h1>Phone Number :</h1>
                <h1>Address :</h1>
                <h1>Gender :</h1>
                <h1>Date of birth	:</h1>
              </div>
            </div>
          )}

          {activeTab === "watchlist" && (
            <div>
              <h1 className="text-2xl font-bold">Watchlist Content</h1>
              <p>This is the content for the Watchlist tab.</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default UserProfilePage;

