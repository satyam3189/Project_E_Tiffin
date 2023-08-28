import {createContext, useState} from "react";

const UserContext = createContext({})

export function UserProvider({children}){
    const [loggedInUser, setloggedInUser] = useState({})
    return(
        <UserContext.Provider value={{loggedInUser, setloggedInUser}}>{children}</UserContext.Provider>
    )
}
export default UserContext