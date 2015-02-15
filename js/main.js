$(document).ready(function() {
  console.log("Welcome to Duck Hunt!");

  $('#modal li').click(function(e) {
    _this = this
    $('#modal').hide(400, function() {
    new Game($(_this).html())
    })
  })

  // Behaviour for the play again link
  $('#play-again').click(function(e) {
    $("#game-over").toggle();
    new Game();
  });

  $("#game").mousemove(function(e) {
    $('#crosshair').show()
    $('#crosshair').offset({top: e.pageY-30, left:e.pageX-30})
  })
  
});