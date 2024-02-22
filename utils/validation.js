const validateUserName = (userName) => {
  const regex = /^(?!.*[_.]{3})([a-zA-Z\d._]{4,16})$/g;
  const result = regex.test(userName);
  return result;
};

const validatePassWord = (userPass) => {
  const regex = /^.{4,16}$/g;
  const result = regex.test(userPass);
  return result;
};

const validation = (username, password) => {
  const resultUserName = validateUserName(username);
  const resultPassWord = validatePassWord(password);

  if (resultUserName && resultPassWord) {
    return true;
  } else if (!resultUserName) {
    alert("The Username Not Valid");
    return false;
  } else if (!resultPassWord) {
    alert("The Password Not Valid");
    return false;
  }
};

export { validation };
