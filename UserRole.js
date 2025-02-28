let user = { name: "Alice", role: "admin", active: false };

console.log(
  user.role === "admin"
    ? user.active
      ? "Admin Access Granted!"
      : "Admin Access Revoked"
    : user.role === "user"
    ? user.active
      ? "User Access Granted!"
      : "User Access Revoked"
    : "Access Denied"
);
