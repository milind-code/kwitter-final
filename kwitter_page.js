//YOUR FIREBASE LINKS
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
    user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name"); function send() { msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg, likes:0 }); document.getElementById("msg").value = ""; }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data['name'];
localStorage.setItem("name1",name);
message = message_data['message'];
likes = message_data['likes'];
name_with_tag ="<h4>" +name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ likes +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
      } }); }); }
getData();
var name_array=[""];
function updateLike(message_id){
      user1=localStorage.getItem("name1",name);
      if(name_array.includes(user1))
      {
       
    console.log(name_array);
      }
      else
      {
      like=document.getElementById(message_id).value;
      updated_likes=Number(like)+1;
      firebase.database().ref(room_name).child(message_id).update({
            likes:updated_likes
      });
}
name_array.push(user1);
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
