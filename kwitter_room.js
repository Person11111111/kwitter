
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCwXninNgOY0Zv2TDkhpizLBCJp7EOHIRE",
      authDomain: "kwitter-45311.firebaseapp.com",
      databaseURL: "https://kwitter-45311-default-rtdb.firebaseio.com/",
      projectId: "kwitter-45311",
      storageBucket: "kwitter-45311.appspot.com",
      messagingSenderId: "136797721413",
      appId: "1:136797721413:web:58f9d765e7e92da70de42c",
      measurementId: "G-T20R2YR5XJ"
    };
    firebase.initializeApp(config);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
