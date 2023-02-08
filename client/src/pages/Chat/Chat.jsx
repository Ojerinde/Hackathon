import Card from "../../components/UI/Card/Card";

import "./Chat.scss";
import pic from "../../assests/pic.jpg";
import { FaChevronLeft, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
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
              <span>Jasmine Johnson</span>
              <span>Online</span>
            </p>
          </div>
          <span>
            <FaEllipsisV className="chat__banner-icon" />
          </span>
        </div>
        <div className="chat__bubble chat__bubble-receive">lorem</div>
        <div className="chat__bubble chat__bubble-send">radom</div>
        <div className="chat__bubble chat__bubble-send">radom</div>
        <div className="chat__bubble chat__bubble-receive">lorem</div>
        <div className="chat__bubble chat__bubble-send">radom</div>
        <div className="chat__bubble chat__bubble-receive">lorem</div>
        <div className="chat__bubble chat__bubble-send">radom</div>
        <div className="chat__field">
          <input type="text" placeholder="Message" />
        </div>
      </div>
    </Card>
  );
};

export default Chat;
