import { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../store/DataContext";
import classes from "./ChatItem.module.css";
// import { formatdate } from "./lib";
const ChatItem = ({ email, userID }) => {
  const { socket, updateCurrChat } = useContext(DataContext);
  const navigate = useNavigate();
  // const date = formatdate(time);
  const endToEndConnectionHandler = () => {
    updateCurrChat({ email, userID });
    socket.emit("Join private room", userID);
  };
  return (
    <li
      className={classes.li}
      onClick={() => {
        endToEndConnectionHandler();
        navigate("/chats/" + userID);
      }}
    >
      <div className={classes.div}>
        <BsPersonCircle className={classes.icon} />
        <div>
          <div className={classes.p}>{email}</div>
          <div className={classes.message}>{"message"}</div>
        </div>
      </div>
      <p className={classes.time}>{"date"}</p>
    </li>
  );
};
export default ChatItem;
