import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import classes from "./ChatItem.module.css";
// import { formatdate } from "./lib";
const ChatItem = ({ username, userID }) => {
  const navigate = useNavigate();
  // const date = formatdate(time);
  return (
    <li className={classes.li} onClick={() => navigate("/chats/" + userID)}>
      <div className={classes.div}>
        <BsPersonCircle className={classes.icon} />
        <div id={userID}>
          <div className={classes.p}>{username}</div>
          <div className={classes.message}>{"message"}</div>
        </div>
      </div>
      <p className={classes.time}>{"date"}</p>
    </li>
  );
};
export default ChatItem;
