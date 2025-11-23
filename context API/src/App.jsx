import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContexProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContexProvider>
      <Login />
      <Profile />
    </UserContexProvider>
  );
}

export default App;
