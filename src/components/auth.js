import firebase from '../config/firebase-config';
import {signInWithPopup} from 'firebase/auth'
import {authentication } from '../config/firebase-config';
const socialMediaAuth = (provider) => {
    return
        // .auth()
        signInWithPopup(authentication,provider)
        .then((res)=> {
            return res.user
        })

        .catch((er)=> {
            return er;
        })
}

export default socialMediaAuth;