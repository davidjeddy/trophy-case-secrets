var picnumber=Math.floor(Math.random()*4)
var xposition=Math.floor(Math.random()*500)
var yposition=Math.floor(Math.random()*400)
var picnumber2=Math.floor(Math.random()*4)
var xposition2=Math.floor(Math.random()*500)
var yposition2=Math.floor(Math.random()*400)
document.writeln('<span id="bkgimg1" style="position:relative;z-index:-1;top:'+xposition+';left:'+yposition+';width:200;filter:alpha(opacity=20) "><img src="bkgimgs/bkgimg'+picnumber+'.gif"></span>');
document.writeln('<span id="bkgimg2" style="position:relative;z-index:-1;top:'+xposition2+';left:'+yposition2+';width:200;filter:alpha(opacity=20) "><img src="bkgimgs/bkgimg'+picnumber2+'.gif"></span>');
