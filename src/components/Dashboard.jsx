import { getCurrentUser, logout } from "../utils/auth";

function Dashboard({ onLogout }) {
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
  <div className="dashboard">
    <h2>Welcome, {user.username}</h2>
    <p>{user.email}</p>

    <button onClick={handleLogout}>Logout</button>
  </div>
  );
}

export default Dashboard;
