export function validateUser(user) {
  const errorUser = [];
  if (!user.name || user.name.length < 3) {
    errorUser.push("Name must be at least 3 characters");
  }
  return errorUser;
}
