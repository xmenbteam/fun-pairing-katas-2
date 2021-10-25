/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(userArr) {
  if (userArr.length === 0) return false;
  const userRegex = /^[a-z0-9_]{5,20}$/;
  for (let i in userArr) if (!userRegex.test(userArr[i])) return false;
  return true;
}

module.exports = checkUsernames;
