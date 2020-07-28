import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
  apiKey : " AIzaSyB7MRA3HYQVe2hkmnaaQeFX1_s9mJIbc14 " ,
  authDomain : "react-ecommerce-website-db.firebaseapp.com" , 
  databaseURL : "https://react-ecommerce-website-db.firebaseio.com" ,     projectId : "react-ecommerce-website-db" ,     
  storageBucket : "react -ecommerce-website-db.appspot.com " ,     messagingSenderId : " 398972525815 " ,     
  appId : " 1: 398972525815: web: 9befc0d1e8cca8ceec07f2 " ,     measurementId : " G-3Y98YD46ZM " 
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); 

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;