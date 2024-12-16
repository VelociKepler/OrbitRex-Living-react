import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

type Profile = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  gender: string;
  date: string;
};

type Tab = "profile" | "watchlist";

const API_BASE_URL = ""; // Add your API base URL here

function UserProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
    date: ""
  });
  const [watchlist, setWatchlist] = useState<any[]>([]);

  const handleTabChange = (tab: Tab) => setActiveTab(tab);

  const fetchData = async (endpoint: string, callback: Function) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
      callback(response.data);
    } catch (error) {
      console.error(`Error fetching data for ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    if (activeTab === "profile") {
      fetchData("profile", setProfile);
    } else if (activeTab === "watchlist") {
      fetchData("watchlist", setWatchlist);
    }
  }, [activeTab]);

  return (
    <>
      <Navbar />
      <div className = "flex flex-col md:flex-row bg-white text-black absolute top-20 w-full">
        <Sidebar
          activeTab = {activeTab}
          onTabChange = {handleTabChange}
        />
        <div className = "h-screen w-full border-l-2 border-t-2 p-5">
          {activeTab === "profile" ? <ProfileTab profile = {profile} /> : <WatchlistTab watchlist = {watchlist} />}
        </div>
      </div>
    </>
  );
}

type SidebarProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => (
  <nav className = "flex flex-col gap-y-10 mb-5 md:mb-0 md:h-screen w-full md:w-[400px] pt-5 border-t-2">
    <h1 className = "text-2xl md:text-3xl font-bold pl-5">User Profile</h1>
    <ul className = "flex flex-col gap-y-5">
      {["profile", "watchlist"].map((tab) => (
        <SidebarButton
          key = {tab}
          tab = {tab as Tab}
          isActive = {activeTab === tab}
          onClick = {onTabChange}
        />
      ))}
    </ul>
  </nav>
);

type SidebarButtonProps = {
  tab: Tab;
  isActive: boolean;
  onClick: (tab: Tab) => void;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({ tab, isActive, onClick }) => {
  const icons: Record<Tab, string> = {
    profile: "fa-user",
    watchlist: "fa-star"
  };

  return (
    <li>
      <button
        onClick = {() => onClick(tab)}
        className = {`flex gap-3 w-full ${
          isActive
            ? "border-l-4 p-2 md:p-0 md:border-l-0 md:border-r-4 border-orange-500"
            : "border-l-4 p-2 md:p-0 md:border-l-0 border-transparent"
        }`}
      >
        <i className = {`fa-solid ${icons[tab]} text-xl md:text-2xl`}></i>
        <h1 className = "text-xl capitalize">{tab}</h1>
      </button>
    </li>
  );
};

type ProfileTabProps = {
  profile: Profile;
};

const ProfileTab: React.FC<ProfileTabProps> = ({ profile }) => (
  <div className = "flex flex-col items-center gap-10">
    <h1 className = "text-2xl font-bold">{profile.name || "Unknown User"}</h1>
    <img
      src = "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
      alt = "User avatar"
      className = "w-56 h-56 rounded-full"
    />
    <div className = "flex flex-col gap-y-5 p-10 w-full text-xl shadow-lg">
      <h1>Email: {profile.email || "N/A"}</h1>
      <h1>Phone Number: {profile.phoneNumber || "N/A"}</h1>
      <h1>Address: {profile.address || "N/A"}</h1>
      <h1>Gender: {profile.gender || "N/A"}</h1>
      <h1>Date of Birth: {profile.date || "N/A"}</h1>
    </div>
  </div>
);

type WatchlistTabProps = {
  watchlist: any[];
};

const WatchlistTab: React.FC<WatchlistTabProps> = ({ watchlist }) => (
  <div>
    <h1 className = "text-2xl font-bold">Watchlist Content</h1>
    {watchlist.length ? (
      <ul>
        {watchlist.map((item, index) => (
          <li key = {index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>No items in watchlist.</p>
    )}
  </div>
);

export default UserProfilePage;