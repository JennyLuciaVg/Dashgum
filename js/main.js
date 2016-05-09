var $data = $('#data');

var myFirebaseRef = new Firebase("https://crackling-fire-4441.firebaseio.com/");
myFirebaseRef.child("message").on("child_added", function(snapshot) {
  $data.text(+$data.text() + 1);
});
