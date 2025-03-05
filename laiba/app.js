
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail,} 
  from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDiUvUlhcPwzTtLAWT9xkbXCM8sZG0-RIU",
    authDomain: "goggle-auth-f4905.firebaseapp.com",
    projectId: "goggle-auth-f4905",
    storageBucket: "goggle-auth-f4905.firebasestorage.app",
    messagingSenderId: "873290044058",
    appId: "1:873290044058:web:f80bd66c34853761794523",
    measurementId: "G-N5410JSR6L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app); // app se related authetication show ho //
  const provider = new GoogleAuthProvider();

//Sign Up Form Code :

document.getElementById('signup-btn')?.addEventListener('click', (e)=>{
  e.preventDefault(); //remove unwanted reload pg
  let email = document.getElementById('signup-email').value;
  let password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then(()=>{
      alert("Sign Up Successful!!👍");
      window.location.href = "welcome.html"; 
  })
  .catch((error)=>{
      alert(error.message);
  })
})

//Login Form Code:

document.getElementById('login-btn')?.addEventListener('click',(e)=>{
  let email = document.getElementById('login-email').value;
  let password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then(()=>{
      alert('Login Sucessfully!!👍')
  })
.catch((error)=>{
  alert(error.message);
})
})

// Continue with Google & Pop up //

document.getElementById('google-btn')?.addEventListener('click', (e)=>{
  signInWithPopup(auth, provider) // provider is lye likha ha q k provider google ha hamara
  .then(()=>{
      alert('Login Sucessfully!!👍');
      window.location.href=('welcom.html');
  })
  .then(() => {
      alert("Login Successful!");
      window.location.href = "welcome.html"; // isme hum apni website bh likh sakhte ha
      })
      .catch((error) => {
      alert(error.message);
      }); 
});

// Logout SignOut //

document.getElementById("logout-btn")?.addEventListener("click", (e) => {
  signOut(auth)
  .then(() => {
  alert("Logged Out Successfully!");
  window.location.href = "index.html"; // main pg prh le jao jb woh logout krdein
  })
  .catch((error) => {   // koi error ho tu catch krein or readable form me show krwa dein
  alert(error.message);
  });
  });
  
// Show User Email on Welcome Page

onAuthStateChanged(auth, (user) => { // yeh check krein gi k user ne login kia ha ya sign up yeh welcome wale me span me show hojaye gi user me store hojsye gi woh email 
  if (user && window.location.pathname.includes("welcome.html")) {
  document.getElementById("user-email").textContent = user.email;
  } else if (!user && window.location.pathname.includes("welcome.html")) {
  window.location.href = "index.html";
  }
  });