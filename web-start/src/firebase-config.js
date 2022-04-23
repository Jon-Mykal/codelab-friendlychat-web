/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
    apiKey: "AIzaSyCqdT2UvpO4JSD_gPr9GJtVcJ9ibKu350Q",
  authDomain: "friendlychat-8baee.firebaseapp.com",
  projectId: "friendlychat-8baee",
  storageBucket: "friendlychat-8baee.appspot.com",
  messagingSenderId: "769601636508",
  appId: "1:769601636508:web:4fdcba570d19c1e9490559"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}