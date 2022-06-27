/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(userArr) {
  if (!userArr.length) return false;
  return userArr.reduce((flag, user) => {
    if (!/^[a-z0-9_]{5,20}$/.test(user) || !user) flag = false;
    return flag;
  }, true);
}

module.exports = checkUsernames;
