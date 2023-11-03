import React,{createContext,useState,useContext} from 'react'

// create the context
const UserContext = createContext();

// create a provider component
function UserProvider({children}){
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    const [user,setUser]=({
        name:"Caleb",
        interests:["Coding","Anime","Gaming","Pretty T-Girls"]
    });
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}

// Custom hook to access the user context
function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
export {UserProvider, useUser};
