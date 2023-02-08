import { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { ErrorBoundary } from "react-error-boundary";
import { ImSpinner6 } from "react-icons/im";

import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/404Page/ErrorPage";
import Button from "./components/UI/Button/Button";
import GetStarted from "./pages/GetStarted/GetStarted";
import AppHome from "./pages/Home/AppHome";
import Home from "./pages/Home/Home";
import Card from "./components/UI/Card/Card";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";

// Dynamic Imports (Lazy - loading)

// Error Boundary FallbackComponent: This is the function that will be called whenever the errorboundary component caught an error
const ErrorFallback = (props) => {
  return (
    <Card role="alert" className="boundary__error">
      <p>Something went wrong!</p>
      <pre>{props.error.message}</pre>
      <Button onClick={props.resetErrorBoundary}>Restart app</Button>
    </Card>
  );
};

const App = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/");
      }}
    >
      <Suspense
        fallback={
          <div className="fallback__box">
            <ImSpinner6 className="fallback__spinner" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Nexted routes */}
          <Route path="/home" element={<AppHome />}>
            <Route path="" element={<Home />} /> chat
            <Route path=":userId" element={<div>Chat opened</div>} />{" "}
          </Route>
          <Route path="/profile" element={<Profile />} />{" "}
          {/* Routes that will be matched if none of tthe route(s) is matched */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
