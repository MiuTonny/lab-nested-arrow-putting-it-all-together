function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;
  let isLocked = false;

  return function loginAttempt(username, password) {
    if (isLocked) {
      return "Account locked due to too many failed login attempts";
    }

    if (username === userInfo.username && password === userInfo.password) {
      attemptCount = 0; // reset attempts 
      return "Login successful";
    } else {
      attemptCount++;
      if (attemptCount >= maxAttempts) {
        isLocked = true;
        return "Account locked due to too many failed login attempts";
      } else {
        return `Attempt ${attemptCount}: Login failed`;
      }
    }
  };
}




module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
