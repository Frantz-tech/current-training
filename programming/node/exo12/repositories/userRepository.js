export async function getallUser(db) {
  try {
    return await db.all("SELECT * FROM users");
  } catch (error) {
    throw new Error(error);
  }
}
export async function getUserById(db) {
  try {
    return await db.all("SELECT * FROM users");
  } catch (error) {
    throw new Error(error);
  }
}

export async function createUser(db) {
  try {
    const newUser = await db.run(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [newUser.name, newUser.email]
    );
    console.log(newUser);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(db) {
  try {
    const updateUser = await db.run(
      "UPDATE INTO users (name, email) VALUES (?, ?)",
      [updateUser.name, updateUser.email]
    );
    console.log(updateUser);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUser(db) {
  try {
    const deleteUser = await db.run("DELETE FROM users WHERE id = ?", [id]);
    console.log(deleteUser);
  } catch (error) {
    throw new Error(error);
  }
}
