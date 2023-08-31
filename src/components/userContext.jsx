import React from "react";

const UserContext = React.createContext("default value"),
UserProvider = UserContext.Provider,
UseerConsumer = UserContext.Consumer;

export  {UserProvider, UseerConsumer }
export default UserContext