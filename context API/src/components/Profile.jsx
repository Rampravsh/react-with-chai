import React, { useContext } from "react";
import UserContext from "../context/userContex";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return <div>please login</div>;
  return <div>Welcome {user.userName}</div>;
};

export default Profile;
