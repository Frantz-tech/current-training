import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../repositories/userRepository.js";
import { validateEmail } from "../utils/validator/emailValidator.js";
import { validateUser } from "../utils/validator/validateUser.js";

export async function ServiceGetAllUser(db) {
  // Lecture des données du JSON
  const user = await getAllUser(db);
  return user;
}

export async function ServiceCreateUser(db, body) {
  // Method POST
  try {
    const errorUser = validateUser(body);
    if (errorUser.length > 0) {
      return errorUser;
    }
    const errorEmail = validateEmail(body.email);
    if (errorEmail.length > 0) {
      return errorEmail;
    }

    const newUser = await createUser(db, body);
    return newUser;
  } catch (error) {
    throw new Error(`Impossible de créer l'user : ${error.message}`);
  }
}

export async function ServiceUpdateUser(db, body, id) {
  // Method PUT
  try {
    const errorUser = validateUser(body);
    if (errorUser.length > 0) {
      return errorUser;
    }
    const updateUs = await updateUser(db, body, id);
    return updateUs;
  } catch (error) {
    console.log(`Impossible de modifier l'user : ${error.message}`);
  }
}

export async function ServiceDeleteUser(db, id) {
  try {
    const deleteUs = await deleteUser(db, id);
    return deleteUs;
  } catch (error) {
    console.log(`Impossible de supprimer l'user`);
  }
}
