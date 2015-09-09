
var JS = JS || {};

JS.View = (function(){

  var currentTagBox;
  var $tagBox;
  var characters = ["Waldo", "Wenda", "Odlaw", "wilma", "Wizard Whitebeard", "Woof"];
  var $charList;

  function init(){
    _startMouseOverListener();
    createNewTagBox(0, 0);
    buildCharacterList();
  }

  function TagBox(x, y){

    this.x = x;
    this.y = y;
    this.color = "green";
    this.height = 50;
    this.width = 50;
  }

  function createNewTagBox(x, y){
    currentTagBox = new TagBox(x, y);
    $tagBox = $("<div class = 'tag-box'></div>").appendTo("body");
  }

  function _startMouseOverListener(){

    $(document).on("mousemove", function(event) {
      moveBox();
    });

    $(document).on("click", function(event) {
      placeBox();
    });
  }

  var moveBox = function() {
    currentTagBox.x = event.pageX - currentTagBox.width / 2;
      currentTagBox.y = event.pageY - currentTagBox.width / 2;
      drawTagBox();
  };

  var placeBox = function () {
    createNewTagBox(event.pageX, event.pageY);
    displayCharList();

  };

  function buildCharacterList(){
    $charList = $('<ul class="char-list"></ul>');
    $charList.appendTo('body').css({
                                    "top": currentTagBox.y + currentTagBox.height/2,
                                    "left": currentTagBox.x - currentTagBox.width/2,
                                    "display": "none"
    });

    for(var i = 0; i < characters.length ; i++ ){
      $('.char-list').append('<li>'+characters[i]+'</li>');
    }
  }

  function displayCharList(){
    $charList.css({
        "top": currentTagBox.y + currentTagBox.height/2,
        "left": currentTagBox.x - currentTagBox.width/2,
        "display": "none"
    }).slideDown(1000);
  }

  function drawTagBox(){
    $tagBox.css({
      "top": currentTagBox.y,
      "left": currentTagBox.x
    });
  }

  return {
    init: init
  };


})();

$(document).ready(function(){
  JS.View.init();
});




