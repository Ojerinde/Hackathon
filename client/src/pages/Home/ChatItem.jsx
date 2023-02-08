import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import classes from "./ChatItem.module.css";
import { formatdate } from "./lib";
const ChatItem = ({ name, message, time }) => {
  const navigate = useNavigate();
  const userId = name.split(" ")[0].toLowerCase();
  const date = formatdate(time);
  return (
    <li className={classes.li} onClick={() => navigate("/home/" + userId)}>
      <div className={classes.div}>
        <BsPersonCircle className={classes.icon} />
        <div>
          <div className={classes.p}>{name}</div>
          <div className={classes.message}>{message}</div>
        </div>
      </div>
      <p className={classes.time}>{date}</p>
    </li>
  );
};
export default ChatItem;
