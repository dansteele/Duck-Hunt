$(document).ready(function() {
  console.log("Welcome to Duck Hunt!");

  // Behaviour for the play again link
  $('#play-again').click(function(e) {
    $("#game-over").toggle();
    new Game();
  });

  $("#game").mousemove(function(e) {
    $('#crosshair').show()
    $('#crosshair').offset({top: e.pageX, left:e.pageY})
  })

  // Kick-off a New Game
  // TODO: Pass in a string to represent the difficulty level
  new Game();
});