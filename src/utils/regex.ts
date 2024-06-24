export const REGEX = {
  stringOnlyWithSpaces: /^$|^[A-Za-z\s]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  userName: /^[\w$#!]{4,256}$/,
  mobileNumber: /^[6789]\d{9}$/, // india mobile number
  OTP: /^\d{6}$/, // 6-digit OTP number,
  slag: /^$|^[a-zA-Z0-9-]+$/,
};
