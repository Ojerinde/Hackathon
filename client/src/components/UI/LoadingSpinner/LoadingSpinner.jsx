import { ImSpinner10 } from "react-icons/im";
import Card from "../Card/Card";

const LoadingSpinner = () => {
  return (
    <Card className="spinner__box">
      <ImSpinner10 className="spinner__spinner" />
    </Card>
  );
};
export default LoadingSpinner;
