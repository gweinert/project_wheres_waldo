
var JS = JS || {};

JS.View = (function(){

  var currentTagBox;
  var $tagBox;
  var characters = ["Waldo", "Wenda", "Odlaw", "wilma", "Wizard Whitebeard", "Woof"];
  var boxesLeft = 6;
  var $charList;

  function init(){
    _startMouseOverListener();
    createNewTagBox(0, 0);
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

    $(document).on("click", "li", function(event) {
      selectChar();
    });

    $("body").on("mouseenter", "ul li", function (event){
      $(event.target).addClass("bg-info");
    });

    $("body").on("mouseout", "ul li", function (event){
      $(event.target).removeClass("bg-info");
    });
  }

  var moveBox = function() {
    currentTagBox.x = event.pageX - currentTagBox.width / 2;
      currentTagBox.y = event.pageY - currentTagBox.width / 2;
      drawTagBox();
  };

  var placeBox = function () {
    if (boxesLeft == characters.length && boxesLeft > 0) {
      createNewTagBox(event.pageX, event.pageY);
      buildCharacterList();
      displayCharList();
      boxesLeft--;
    };

  };

  var selectChar = function () {
    var characterName = $(event.target).text();
    var index = $.inArray(characterName, characters)
    characters.splice(index, 1)
    var target = $(".tag-box").eq(-2)
    $("<div class = 'char' >" + characterName + "</div>").appendTo(target).css({
      "top": target.height()
    })
    $charList.slideUp(700);
    // newChar.css({
    //   "top": currentTagBox.y + currentTagBox.height/2,
    //   "left": currentTagBox.x - currentTagBox.width/2,
    // })
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




