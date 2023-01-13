import React, {createContext, useEffect, useState} from "react";
export const UserContext = createContext();
const AuthContext = ({children}) => {
	const [user, setUser] = useState({});
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);
	return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
};
export default AuthContext;
