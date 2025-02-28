export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errorUser = [];
  if (!email.match(regex)) errorUser.push("Email must respect syntax");

  return errorUser;
}
