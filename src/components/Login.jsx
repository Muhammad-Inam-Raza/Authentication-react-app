import { useState } from "react";
import { login } from "../utils/auth";

function Login({ onLogin, switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);

    if (result.success) {
      onLogin();
    } else {
      alert(result.message);
    }
  };

  return (
     <div className="auth-container">
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

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

      <button type="submit">Login</button>

      <p className="switch-text" onClick={switchToSignup}>
        Don’t have an account? Signup
      </p>
    </form>
  </div>
  );
}

export default Login;
