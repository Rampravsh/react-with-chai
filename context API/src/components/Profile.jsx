import React, { useContext } from "react";
import UserContext from "../context/userContex";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center  bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-700 text-xl font-semibold">
          Please login
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-800 text-2xl font-bold">
        Welcome <span className="text-blue-600">{user.userName}</span>!
      </div>
    </div>
  );
};

export default Profile;
