function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;
  let isLocked = false;

  //arrow function to handle login
  const loginAttempt = (username, password) => {
    if (isLocked) {
      console.log("Account is locked.");
      return;
    }

    attemptCount++; //attempt count

    if (username === userInfo.username && password === userInfo.password) {
      console.log(`Welcome, ${userInfo.username}!`);
      attemptCount = 0; // Reset
    } else {
      const remaining = maxAttempts - attemptCount;
      console.log(`Incorrect. Attempts left: ${remaining}`);

      if (attemptCount >= maxAttempts) {
        isLocked = true;
        console.log("Account locked due to too many failed attempts.");
      }
    }
  };

  return loginAttempt;
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
