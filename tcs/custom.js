if (!exclude) {
var menuALIGN="center";		//alignment
var absLEFT=0;				//absoluteleftorrightposition(ifnotcenter)
var absTOP=165;				//absolutetopposition
var staticMENU=false;		//staticpositioningmode(notOpera5)
var stretchMENU=true;		//showemptycells
var showBORDERS=true;		//showemptycellborders
var baseHREF="";			//basepathto.jsandimagefiles
var zORDER=101;				//basez-orderofnavstructure(notns4)
var mCOLOR="#000000";		//mainnavcellcolor
var rCOLOR="#666666";		//mainnavcellrollovercolor
var keepLIT=true;			//keeprollovercolorwhenbrowsingmenu
var bSIZE=2;				//mainnavbordersize
var bCOLOR="#666666"		//mainnavbordercolor
var aLINK="#aaaaaa";		//mainnavlinkcolor
var aHOVER="#ffffff";		//mainnavlinkhover-color(notns4)
var aDEC="none";			//mainnavlinkdecoration
var fFONT="arial";			//mainnavfontface		
var fSIZE=12;				//mainnavfontsize(pixels)	
var fWEIGHT=""				//mainnavfontweight
var tINDENT=0;				//mainnavtextindent(iftextisleftorrightaligned)
var vPADDING=0;				//mainnavverticalcellpadding
var vtOFFSET=0;				//mainnavverticaltextoffset(+/-pixelsfrommiddle)
var vOFFSET=-2;				//shiftthesubmenusvertically
var hOFFSET=0;				//shiftthesubmenushorizontally
var smCOLOR="#000000";		//submenucellcolor
var srCOLOR="#666666";		//submenucellrollovercolor
var sbSIZE=2;				//submenubordersize
var sbCOLOR="#666666"		//submenubordercolor
var saLINK="#aaaaaa";		//submenulinkcolor
var saHOVER="#ffffff";		//submenulinkhover-color(notns4)
var saDEC="none";			//submenulinkdecoration
var sfFONT="arial";			//submenufontface		
var sfSIZE=13;				//submenufontsize(pixels)	
var sfWEIGHT="normal"		//submenufontweight
var stINDENT=12;			//submenutextindent(iftextisleftorrightaligned)
var svPADDING=0;			//submenuverticalcellpadding
var svtOFFSET=0;			//submenuverticaltextoffset(+/-pixelsfrommiddle)
var shSIZE=	7;				//submenudropshadowsize
var shCOLOR="#dddddd";		//submenudropshadowcolor
var shOPACITY=50;			//submenudropshadowopacity(notns4orOpera5)
//** LINKS ***********************************************************
// add main link item ("url","Link name",width,"text-alignment","target")
addMainItem("band.html","The Band",140,"center","_self"); 
	// define submenu properties (width,"align to edge","text-alignment")
	defineSubmenuProperties(165,"right","center");
	// add submenu link items ("url","Link name","target")
	addSubmenuItem("band.html","Trophy Case Secrets","_self");
	addSubmenuItem("band.html#sarah","Sarah","_self");
	addSubmenuItem("band.html#peter","Peter","_self");

addMainItem("lyrics.html","Lyrics",140,"center","_self"); 
	defineSubmenuProperties(165,"right","center");
	addSubmenuItem("lyrics.html#GBtE","Good-Byes to Everyone","_self");
	addSubmenuItem("lyrics.html#TEoI","The epoch of Incredulity","_self");
	addSubmenuItem("lyrics.html#TAM","The Awkward Moment","_self");
	addSubmenuItem("lyrics.html#JtBWU","Just to Be With you","_self");
	addSubmenuItem("lyrics.html#FFAYW","Fight For All You're Worth","_self");

addMainItem("disco.html","Discography",140,"center","_self");
	defineSubmenuProperties(165,"right","center");
	addSubmenuItem("disco.html#TCS","Trophy Case Secrets","_self");
	
addMainItem("shows.html","Shows",140,"center","_self");
//	defineSubmenuProperties(165,"left","center");
//	addSubmenuItem("","","_self");

addMainItem("contact.html","Contact & Booking",140,"center","_self");
	defineSubmenuProperties(165,"left","center");
	addSubmenuItem("contact.html#etcs","Email Trophy Case Secrets","_self");
	addSubmenuItem("contact.html#gb","Guestbook","_self");
	addSubmenuItem("contact.html#f","Forum","_self");
}
