function getInit() {

    const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    // and then just do:
    const data = [...Array(5)].map(i=>chars[Math.random()*chars.length|0]).join``;
    $('#provided').text(data);
    $('#provided-hidden').val(data);
}
$(document).ready(function() {
  getInit();
  //hang on event of form with id=myform
  $("button").click(function(e) {
    $('#message').empty();
    const guess = $('#guess').val();
    const provided = $('#provided-hidden').val();
    const msg = (guess == provided);
    if (msg) {
      $('#message').css("color", "green")
    } else {
      $('#message').css("color", "red")
    }
    $('#message').text("Match: " + msg)
    getInit();
  });
} );
