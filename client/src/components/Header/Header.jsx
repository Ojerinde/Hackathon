import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import classes from "./Header.module.css";
const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className={classes.nav}>
      <BsPersonCircle
        className={classes.icon}
        onClick={() => navigate("/profile")}
      />
      <p className={classes.p}>Messages</p>
    </nav>
  );
};
export default Header;
