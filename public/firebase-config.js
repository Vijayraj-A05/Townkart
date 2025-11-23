// Firebase Config (Your project keys)
const firebaseConfig = {
  apiKey: "AIzaSyBi5Yd7oqhRoo4ATEb78U3POkeJrCbDUTU",
  authDomain: "townkart-d604a.firebaseapp.com",
  projectId: "townkart-d604a",
  storageBucket: "townkart-d604a.appspot.com",
  messagingSenderId: "223214079906",
  appId: "1:223214079906:web:9f78fdeda7a23623252cfb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Services
const auth = firebase.auth();
const db = firebase.firestore();
