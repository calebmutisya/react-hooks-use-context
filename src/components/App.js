import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
//import the provider
import { UserProvider } from "../context/User";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider*/}
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
        <Profile theme={theme} user={user} />
      </UserProvider>
    </main>
  );
}

export default App;
