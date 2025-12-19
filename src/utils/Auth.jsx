export const signup = (username, email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return { success: false, message: "User already exists" };
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
};

export const login = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return { success: false, message: "Invalid credentials" };
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  return { success: true };
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};
