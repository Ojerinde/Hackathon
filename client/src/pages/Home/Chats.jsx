import { useContext, useEffect } from "react";
import { DataContext } from "../../store/DataContext";
import ChatItem from "./ChatItem";
import classes from "./Chats.module.css";
const Chats = () => {
  const { socket, users, getUsers, updateUsers } = useContext(DataContext);
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    socket.on("user connected", (user) => {
      updateUsers(user);
    });
  }, [updateUsers, socket]);
  return (
    <ul className={classes.ul}>
      {users.map((item) => (
        <ChatItem
          key={item.userID}
          email={item.email}
          userID={item.userID}
          // message={item.message}
          // time={item.time}
        />
      ))}
    </ul>
  );
};
export default Chats;
