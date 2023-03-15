import { useContext, useRef } from "react";
import { FaChevronLeft, FaEllipsisV } from "react-icons/fa";

import "./Chat.scss";
import pic from "../../assests/pic.png";
import { DataContext } from "../../store/DataContext";
import Card from "../../components/UI/Card/Card";

import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { socket, msgs, currChat } = useContext(DataContext);
  const navigate = useNavigate();
  const msgRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    const msg = msgRef.current.value?.trim();
    msgRef.current.value = "";
    const userID = currChat.userID;
    socket.emit("Private Msg", msg, userID);
  };
  return (
    <Card>
      <div className="chat">
        <div className="chat__banner">
          <span>
            <FaChevronLeft
              className="chat__banner-icon"
              onClick={() => navigate("/chats")}
            />
          </span>
          <div className="chat__banner-info">
            <img src={pic} alt="User profile pic" />
            <p>
              <span>{currChat.email}</span>
              <span>Online</span>
            </p>
          </div>
          <span>
            <FaEllipsisV className="chat__banner-icon" />
          </span>
        </div>
        {msgs.map((msg, index) => {
          return (
            <div
              key={index}
              className={`chat__bubble chat__bubble-${
                msg.received ? "receive" : "send"
              }`}
            >
              {msg.msg}
            </div>
          );
        })}
        <form action="" onSubmit={submitHandler} className="chat__field">
          <input type="text" placeholder="Say something..." ref={msgRef} />
          <button>Send</button>
        </form>
      </div>
    </Card>
  );
};

export default Chat;
