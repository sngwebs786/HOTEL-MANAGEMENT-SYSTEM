// import firebase from './firebase-config';
import  firebase from '../config/firebase-config';
import {FacebookAuthProvider,GoogleAuthProvider} from 'firebase/auth';

// import firebase from 'firebase';
export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();