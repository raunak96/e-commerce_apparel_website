import firebase from "firebase/app";
import "firebase/firestore"; //for database
import "firebase/auth"; //for authentication

const config = {
    apiKey: "AIzaSyCA8Y38lDUOzDpoQxZY22_VIQoDzWqxbFA",
    authDomain: "e-commerce-apparel-site-db.firebaseapp.com",
    databaseURL: "https://e-commerce-apparel-site-db.firebaseio.com",
    projectId: "e-commerce-apparel-site-db",
    storageBucket: "e-commerce-apparel-site-db.appspot.com",
    messagingSenderId: "755266400201",
    appId: "1:755266400201:web:8aeab65945cbe169f40218",
    measurementId: "G-BKX0TFD1F5",
};

/*  Firestore(DB) is NOSQL DB which has data in the form of COLLECTIONS comprising of documents, where a document might also contain a collection and so on
    When we query this db, we can get two types of results either reference to the returned data or data itself(which is called SNAPSHOT)
*/
// this func adds user when he/she logs in and already doesn't exist firestore(db) to be added to firestore i.e firebase database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); //this is the user Reference
    const userSnapshot = await userRef.get(); // this is the user data which user reference refers to

    // if user not in db add it to it
    if (!userSnapshot.exists) {
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
            console.log("User could not be added to db",error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up Google Sign in with Firebase
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); // this opens Google Sign In pop-up and returns promise which if succeds returns UserRef


// ADD SHOP-DATA TO FIREBASE
export const addCollectionAndDocumentsForShopCollections = async (collectionName,objectsToAdd)=>{
    const collectionRef= firestore.collection(collectionName);
    const batch =firestore.batch();  // batch all queries together so that either all fail or pass
    objectsToAdd.forEach(object=>{
        const { items, title } = object;
        const newDocRef= collectionRef.doc();  // generate a doc with unique id
        batch.set(newDocRef,{title,items});
    });
    return await batch.commit();
};

// gets array of 'collections' document from firestore then return it after converting it to an Object same form as in shop.data.js
export const getShopData =collectionSnapshots=>{

    const transformedCollections=collectionSnapshots.docs.map(doc=>{

        const {title,items}=doc.data();
        const id=doc.id;
        return {
            routeName: encodeURI(title.toLowerCase()),
            id,
            items,
            title,
        };
        
    });

    return transformedCollections.reduce((collections,collection)=>{
        collections[collection.title.toLowerCase()]=collection;
        return collections;
    },{});
}

export const getUserinSession=()=>{
    return new Promise((resolve,reject)=>{    
        const unsubscribe= auth.onAuthStateChanged(userAuth=>{   //if we get userAuth resolve the promise else reject with error
            unsubscribe();   //since we want result only once unsubscribe from onAuthStateChanged observer
            resolve(userAuth);
        },reject);
    })
}

export const getCartDocRef= async (userId)=>{
    const cartsRef = firestore.collection('carts').where('userId','==',userId); // this cartsCollRef will contain those docs which satisfy where clause
    const cartSnapshot = await cartsRef.get();

    if(cartSnapshot.empty){
        const cartDocRef= firestore.collection('carts').doc();
        await cartDocRef.set({userId,cartItems:[]});
        return cartDocRef;
    }
    else {
        return cartSnapshot.docs[0].ref;
    }
}

export default firebase;
