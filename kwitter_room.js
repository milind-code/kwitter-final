
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA9CsaAAF5iRP3FDRHV8pDUwfdsoeO-QXc",
      authDomain: "kwitter-5385d.firebaseapp.com",
      databaseURL: "https://kwitter-5385d-default-rtdb.firebaseio.com",
      projectId: "kwitter-5385d",
      storageBucket: "kwitter-5385d.appspot.com",
      messagingSenderId: "495517623972",
      appId: "1:495517623972:web:262db1f863431c7622a831"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " + user_name +"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("i am inside get data ")
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();
function redirectToRoomName(name){
     console.log("i am here");
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}