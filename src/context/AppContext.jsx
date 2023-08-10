import React , {useState , createContext} from "react";


const AppContext = createContext();


const ContextProvider = ({children}) => {

    const [username , setUserName ]= useState('Diem0n');
    return (
    <AppContext.Provider value={{username , setUserName}}>
        {children}
    </AppContext.Provider>
    )
}

export { AppContext , ContextProvider};