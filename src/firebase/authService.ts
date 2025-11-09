import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./config";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
