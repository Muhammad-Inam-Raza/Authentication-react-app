import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { getCurrentUser } from "./utils/auth";
import "./App.css";

function App() {
  const [user, setUser] = useState(getCurrentUser());
  const [showLogin, setShowLogin] = useState(true);

  if (user) {
    return <Dashboard onLogout={() => setUser(null)} />;
  }

  return (
    <div>
      {showLogin ? (
        <Login
          onLogin={() => setUser(getCurrentUser())}
          switchToSignup={() => setShowLogin(false)}
        />
      ) : (
        <Signup switchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
