import { useState } from "react";
import { signup } from "../utils/auth";

function Signup({ switchToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const result = signup(username, email, password);

    if (result.success) {
      alert("Signup successful!");
      switchToLogin();
    } else {
      alert(result.message);
    }
  };

  return (
     <div className="auth-container">
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Signup</button>

      <p className="switch-text" onClick={switchToLogin}>
        Already have an account? Login
      </p>
    </form>
  </div>
  );
}

export default Signup;
