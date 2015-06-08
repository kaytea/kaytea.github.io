var colorList;

function fetchList(input) {
  switch(input){
    case "Red": return colorList.colors[0].Red;
      break;
    case "Pink": return colorList.colors[1].Pink;
      break;
    case "Orange": return colorList.colors[2].Orange;
      break;
    case "Yellow": return colorList.colors[3].Yellow;
      break;
    case "Green": return colorList.colors[4].Green;
      break;
    case "Cyan": return colorList.colors[5].Cyan;
      break;
    case "Blue": return colorList.colors[6].Blue;
      break;
    case "Purple": return colorList.colors[7].Purple;
      break;
    case "Brown": return colorList.colors[8].Brown;
      break;
    case "White": return colorList.colors[9].White;
      break;
    default: return colorList.colors[10].Grey;
      break;
  }
}

$(document).ready(function() {

  $.getJSON('colors2.json', function(data) {
    console.log("run");
    colorList = data;
    console.log("read in colors(?)");
    console.log(colorList.colors);
    //buildLists(colorList.colors);
  });

  $('.colorBlockMini:input').submit( function () {//color of selected box
    var newColor = $(this).parent.css('background-color');
    $('#cb' + this.value).css('color', '#'+ newColor);
  });

  $("select#numOfBlocks").change( function () {//# boxes displayed
    var magicNum = parseInt($("select#numOfBlocks option:selected").text());
    for(var i = 1; i <= 6; i++){
      var theID = "#cb" + i;
      if (magicNum < i){
        $(theID).hide();
      } else{
        $(theID).show();
      }
    }
  });

  $('select#colCol1'/*.colorPick*/).change( function () {//carousel color group
    var myList = fetchList(parseInt($(this).find('option:selected').text()));
    var i = 0;
    $(this).find('ul').empty();

    while(myList[i]){
      var thisBlock = 'ul li:eq(' + i + ')';
      thisBlock.css("background-color", "#" + myList[i].hexVal)
      //$(this).find('game-query-list').append('<li id="GLitem'+i+'"></li>');
      $(this).find(thisBlock).append('<span> Name:&nbsp;'+ myList[i]["name"] +
        '<br/>Hex: &nbsp;'+ myList[i]["hexVal"]);
      i++;
    }
  });

  $('#colCol1 ul li').click( function() {
    $(this).css('background-color', '636363');
    //$(this).height('8 vw');
  });

});

