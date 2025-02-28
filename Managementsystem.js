function getAccess(person) {
    return person.role === "admin"
      ? !person.active
        ? "Admin Access Revoked"
        : person.experience > 5
          ? person.department === "IT"
            ? "Full IT Admin Access"
            : "Full General Admin Access"
          : "Limited Admin Access"
      : person.role === "manager"
        ? !person.active
          ? "Manager Access Revoked"
          : person.experience > 3
            ? person.department === "Sales"
              ? "Full Sales Manager Access"
              : "Full Manager Access"
            : "Limited Manager Access"
        : person.role === "user"
          ? !person.active
            ? "User Access Revoked"
            : person.department === "Support"
              ? "Priority Support Access"
              : "User Access"
          : "Invalid Role";
  }
  
  
  console.log(getAccess({ role: "admin", experience: 7, active: true, department: "IT" }));