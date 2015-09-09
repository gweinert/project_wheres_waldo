
var JS = JS || {};

JS.Tagger = (function(){

  var currentTagBox = {};

  function init(){
    _startMouseOverListener();
  }

  function TagBox(x, y){

    this.x = x;
    this.y = y;
    this.color = "green";
    this.height = 50;
    this.width = 50;
  }

  function createNewTagBox(x, y){
    var tagBox = new TagBox(x, y);
    currentTagBox = tagBox;
  }

  function _startMouseOverListener(){

    $('.waldo-wrapper').mouseover(function(event){

      createNewTagBox(event.pageX, event.pageY);
      currentTagBox.x = event.pageX;
      currentTagBox.y = event.pageY;
      // drawTagBox();
    });
  }

  function _startMouseOutListener(){

    $('.waldo-wrapper').moouseout(function(){

      currentTagBox = {};
    });
  }

  function drawTagBox(){
    $()
  }


})();




