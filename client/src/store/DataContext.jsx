import React, { useCallback, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://chatapp-cktm.onrender.com", {
  autoConnect: false,
});

// const socket = io("http://127.0.0.1:8000", {
//   autoConnect: false,
// });


socket.on("connect_error", (err) => {
  console.log("⚠⚠⚠");
  if (err.message === "invalid username") {
    console.log("💀💀💀");
  }
});

// Creating an app wide state store using the context API
export const DataContext = React.createContext({
  socket,
  isLogggedIn: false,
  users: [],
  getUsers: () => {},
  updateUsers: () => {},
});

// Creating a component that will provide the context.
const DataContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const getUsers = useCallback(() => {
    socket.on("users", (users) => {
      setUsers(users);
    });
  }, []);
  const updateUsers = useCallback((user) => {
    setUsers((prevState) => [...prevState, user]);
  }, []);
  const data = { socket, users, getUsers, updateUsers, isLogggedIn: false };

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
export default DataContextProvider;
