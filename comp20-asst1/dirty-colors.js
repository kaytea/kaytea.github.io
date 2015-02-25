/*var RedList = [];
  var countR = 0;
var OrangeList = [];
  var countO = 0;
var YellowList = [];
  var countY = 0;
var GreenList = [];
  var countG = 0;
var CyanList = [];
  var countC = 0;
var BlueList = [];
  var countB = 0;
var PurpleList = [];
  var countPu = 0;
var PinkList = [];
  var countPi = 0;

function getJSONcolors(theList){
  //colorList = JSON.parse("colors.json");
  buildLists(theList.colors);
}

function buildLists(list){
  var i = 0;
  while (i < list.length){
    var hue = getHue(list[i].hexVal);
    //HUE RANGE FOR COLORS:
    if((hue > 350) || (hue < 11)){        //red: 351-10
      RedList[countR] = i;
      countR++;
    } else if((hue > 10) && (hue < 41)){  //orange (& brown): 11-40
      OrangeList[countO] = i;
      countO++;
    } else if((hue > 40) && (hue < 61)){  //yellow: 41-60
      YellowList[countY] = i;
      countY++;
    } else if((hue > 60) && (hue < 150)){ //green: 61-149
      GreenList[countG] = i;
      countG++;
    } else if((hue > 149) && (hue < 201)){//cyan: 150-200
      CyanList[countC] = i;
      countC++;
    } else if((hue > 200) && (hue < 241)){//blue: 201-240
      BlueList[countB] = i;
      countB++;
    } else if((hue > 240) && (hue < 321)){//purple: 241-320
      PurpleList[countPu] = i;
      countPu++;
    } else if((hue > 320) && (hue < 351)){//pink: 321-350
      PinkList[countPi] = i;
      countPi++;
    }
    i++;
  }
}

function getHue(color) {
  //if (color.length < 6) { color = color[0]+color[0]+color[1]+color[1]+color[2]+color[2];}
  var r = parseInt(color.substr(1,2), 16); // get hex rep. of red (chars 1-2) & convert to dec(base 10).
  var g = parseInt(color.substr(3,2), 16);
  var b = parseInt(color.substr(5,2), 16);

  var hue;
  if ((r >= g) && (g >= b)) { //red-yellow
      hue = 60*(g-b)/(r-b);
  } else if ((g > r) && (r >= b)) { //yellow-green
      hue = 60*(2 - (r-b)/(g-b));
  } else if ((g >= b) && (b > r)) { //green-cyan
      hue = 60*(2 + (b-r)/(g-r));
  } else if ((b > g) && (g > r)) { //cyan-blue
      hue = 60*(4 - (g-r)/(b-r));
  } else if ((b > r) && (r >= g)) { //blue-magenta
      hue = 60*(4 + (r-g)/(b-g));
  } else if ((r >= b) && (b > g)) { //magenta-red
      hue = 60*(6 - (b-g)/(r-g));
  }
  return hue;
}*/