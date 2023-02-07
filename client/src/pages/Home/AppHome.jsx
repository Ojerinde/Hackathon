import { Outlet } from "react-router-dom";
// import { useContext, useEffect } from "react";

// SEO
import { Helmet } from "react-helmet-async";

// Custom hook
// import useFetch from "../../hooks/useFetch";
// import { DataContext } from "../../store/DataContext";

const AppHome = () => {
  // Consuming the custom hook created
  // const { isLoading, error, hideModal, fetchRequest } = useFetch();

  return (
    <>
      {/* SEO optimazation */}
      <Helmet>
        <title>Messenging Application</title>
        <meta
          name="description"
          content="This page is the get started page for the chat app"
        />
        <link rel="canonical" href="/home" />
      </Helmet>

      {/* This enables the nested route(s) to show */}
      <Outlet />
    </>
  );
};
export default AppHome;
