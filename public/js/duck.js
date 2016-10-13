// Constructor function for a Duck

function Duck(game) {
  this.game = game;
  var _this = this;
  this.el = $("#duck-template").clone();
  this.el.removeAttr("id");

  $(this.el).click(function() {
    console.log(_this.game.shotsLeft)
    if (_this.game.shotsLeft > 0) {
      _this.die();
      if (_this.game.concurrentDucksKilled === 3) {
        _this.game.tripleKill.play()
      } else if(_this.game.concurrentDucksKilled === 6) {
        _this.game.rampage.play()
      } else if (Math.random() > 0.95) {
        _this.game.godLike.play()
      } else if (Math.random() > 0.95) {
        _this.game.wicked.play()
      }
    }
  });
  this.draw();
}



function randomHeight() {
  return 400 * Math.random();
}


Duck.prototype.flap = function() {
  $(this.el).toggleClass("flap");
  var _this = this;

  this.flapTimer = setTimeout((function() {
    _this.flap();
  }), 300);
}

Duck.prototype.draw = function() {
  el = this.el
  $(el).offset({top: randomHeight(), left: -100})  
  $(el).show()
  $('#game').append(el)
  this.flap()
  var _this = this;
  $(el).animate({ top: randomHeight(), left: 1400 }, this.game.speed, "linear", function() {
    _this.game.lives -= 1;
    this.remove()
  });
}


Duck.prototype.die = function() {
  el = $(this.el);
  el.addClass("dead");
  clearTimeout(this.flapTimer);
  el.stop();
  this.game.concurrentDucksKilled += 1;
  this.game.addScore(100);
  el.animate({top: 800, left: el.position.left}, 800, "linear", function(){
    this.remove()
  })
}

// I made it to the other side!
Duck.prototype.complete = function() {
  this.game.lives -= 1;
  return this;
}

// Code to remove the Duck from the DOM and from memory.
Duck.prototype.remove = function() {
  $(this.el).remove();
  delete this;
}