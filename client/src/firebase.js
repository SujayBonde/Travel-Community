import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBc5km_FCWefpnNiETXvsEqWDd0jBXws84",
  authDomain: "travel-community.firebaseapp.com",
  projectId: "travel-community-d0f0b",
  // etc.
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();