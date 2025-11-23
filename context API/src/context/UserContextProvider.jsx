import React from "react";
import UserContext from "./userContex";
const UserContexProvider = ({ children }) => {
  const [user, setUser] = React.useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContexProvider;
