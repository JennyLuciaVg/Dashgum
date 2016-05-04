var myFirebaseRef = new Firebase("https://crackling-fire-4441.firebaseio.com/");
myFirebaseRef.child("message").on("value", function(snapshot) {
  alert(snapshot.val()); 
});
