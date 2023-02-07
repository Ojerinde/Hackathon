import React from "react";

// Creating an app wide state store using the context API
export const DataContext = React.createContext({});

// Creating a component that will provide the context.
const DataContextProvider = (props) => {
  const data = {};

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
export default DataContextProvider;
