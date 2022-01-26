const checkData = (data: string): string => {
  //const isAvailable = data.toString().indexOf("@") !== -1
  if (data.indexOf("@") > -1) {
    return "email";
  }
  return "handle";
};

const isEmail = (data: string): boolean => {
  const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (data.match(regEx)) return true;
  else return false;
};

const isEmpty = (data: string): boolean => {
  if (
    data.trim() === "" ||
    data.trim() === null ||
    data.trim() === undefined ||
    !data
  ) {
    return true;
  }
  return false;
};

const notValidPassword = (data: string): boolean => {
  if (data.length < 6) return true;
  else return false;
};

export interface loginData {
  data: string;
  password: string;
}

export interface resetData {
  mbCode: string;
  confirmPassword: string;
  password: string;
}

export interface firstUserData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface secondUserData {
  password: string;
  handle: string;
  confirmPassword: string;
}

const validateLogin = ({
  data,
  password,
}: loginData): { error: string; valid: boolean } => {
  let error = "";

  if (checkData(data) === "email") {
    if (isEmpty(data)) error = "Email must not be empty";
    else if (!isEmail(data)) error = "Must be a valid email address";
  }

  if (checkData(data) === "handle") {
    if (isEmpty(data)) error = "Handle must not be empty";
  }

  if (isEmpty(password)) error = "Password must not be empty";
  if (notValidPassword(password))
    error = "Password must have at least 6 characters";

  return {
    error,
    valid: error === "" ? true : false,
  };
};

const validateFirstReg = ({
  firstName,
  lastName,
  email,
}: firstUserData): { error: string; valid: boolean } => {
  let error = "";
  if (isEmpty(email)) error = "Email must not be empty";
  else if (!isEmail(email)) error = "Please provide a valid email address";

  if (isEmpty(lastName)) error = "Last Name must not be empty";
  if (isEmpty(firstName)) error = "First Name must not be empty";

  return {
    error,
    valid: error === "" ? true : false,
  };
};

const validateSecondReg = ({
  handle,
  password,
  confirmPassword,
}: secondUserData): { error: string; valid: boolean } => {
  let error = "";
  if (isEmpty(password)) error = "Password must not be empty";
  if (isEmpty(confirmPassword)) error = "Password must not be empty";
  else if (notValidPassword(password))
    error = "Password must have at least 6 characters";
  else if (password !== confirmPassword) error = "Passwords do not match!";

  if (isEmpty(handle)) error = "Handle must not be empty";

  return {
    error,
    valid: error === "" ? true : false,
  };
};

const validateResetPassword = ({
  mbCode,
  confirmPassword,
  password,
}: resetData): { error: string; valid: boolean } => {
  let error = "";

  if (isEmpty(mbCode)) error = "Bizz reset code cannot be empty";

  if (isEmpty(password)) error = "Password must not be empty";
  if (isEmpty(confirmPassword)) error = "Password must not be empty";
  if (notValidPassword(password))
    error = "Password must have at least 6 characters";
  if (notValidPassword(confirmPassword))
    error = "Password must have at least 6 characters";

  if (password !== confirmPassword) error = "Passwords do not match!";

  return {
    error,
    valid: error === "" ? true : false,
  };
};

const getUserMessage = () => {
  var data = [
      [22, "It's bed time, Get some sleep."],
      [16, "Good evening, Stay safe!"],
      [12, "Good afternoon, Wash your hands."],
      [5, "Good morning, Great day!"],
      [0, "Working late? Try rest!"],
    ],
    hr = new Date().getHours();
  for (var i = 0; i < data.length; i++) {
    if (hr >= data[i][0]) {
      return `${data[i][1]}`;
    }
  }
};

const formatNumber = (number: number) => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    currencyDisplay: "symbol",
  });
  const result = formatter.format(number);
  return result;
};

export {
  checkData,
  isEmail,
  isEmpty,
  notValidPassword,
  validateLogin,
  validateSecondReg,
  validateResetPassword,
  validateFirstReg,
  getUserMessage,
  formatNumber,
};
