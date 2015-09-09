
var JS = JS || {};

JS.Tagger = (function(){

  var currentTagBox;
  var $tagBox;

  function init(){
    _startMouseOverListener();
    createNewTagBox(0, 0)
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
    $tagBox = $("<div class = 'tag-box'></div>").appendTo("body")
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
  }

  var placeBox = function () {
    createNewTagBox(event.pageX, event.pageY)
  }


  function drawTagBox(){
    $tagBox.css({
      "top": currentTagBox.y,
      "left": currentTagBox.x
    })
  }

  return {
    init: init
  }


})();

$(document).ready(function(){
  JS.Tagger.init();
});




