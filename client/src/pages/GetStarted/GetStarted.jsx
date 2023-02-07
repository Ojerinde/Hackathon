import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import classes from "./GetStarted.module.css";
const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <Card className={classes.section}>
      <h2 className={classes.h2}>
        Stay <br />
        connected <br /> with your friends
      </h2>
      <Button className={classes.button} onClick={() => navigate("/signup")}>
        Get Started
      </Button>
    </Card>
  );
};
export default GetStarted;
