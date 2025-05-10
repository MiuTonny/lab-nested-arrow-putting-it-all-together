function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;
  let isLocked = false;

  return function loginAttempt(passwordAttempt) {
    if (isLocked) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      attemptCount = 0;
      return "Login successful";
    }

    attemptCount++;

    //3rd failure to return as a failed attempt
    const response = `Attempt ${attemptCount}: Login failed`;

    if (attemptCount >= maxAttempts) {
      isLocked = true;
    }

    return response;
  };
}




module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
