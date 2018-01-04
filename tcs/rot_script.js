<!--
width=400;
height=160;
gfx0="rot_imgs/rotatingimg1.gif";
alt0="Trophy Case Secrets";
gfx1="rot_imgs/rotatingimg2.gif";
alt1="Trophy Case Secrets";
gfx2="rot_imgs/rotatingimg3.gif";
alt2="Trophy Case Secrets";
gfx3="rot_imgs/rotatingimg4.gif";
alt3="Trophy Case Secrets";
gfx4="rot_imgs/rotatingimg5.gif";
alt4="Trophy Case Secrets";
len=5;
today=new Date();
today=today.getTime()/10;
rnd=today%len;
document.writeln('<IMG SRC="'+eval("gfx"+rnd)+'" ALT="'+eval("alt"+rnd)+'" width="'+width+'" height="'+height+'">');
//-->
