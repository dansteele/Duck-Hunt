$(document).ready(function() {
  console.log("Welcome to Duck Hunt!");

  // Behaviour for the play again link
  $('#play-again').click(function(e) {
    $("#game-over").toggle();
    new Game();
  });

  $("#game").mousemove(function(e) {
    $('#crosshair').show()
    $('#crosshair').offset({top: e.pageY-30, left:e.pageX-30})
  })

  // Kick-off a New Game
  // TODO: Pass in a string to represent the difficulty level
  new Game("hard");
});