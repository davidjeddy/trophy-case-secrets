//UDMv2.1.1
var siSTR='';
// if (ie) { siSTR='<script language=javascript src="' + baseHREF + 'menu_ie.js"></script>'; }
// if (ns4) { siSTR='<script language=javascript src="' + baseHREF + 'menu_ns4.js"></script>'; }
// if (ns6||mz7) { siSTR='<script language=javascript src="' + baseHREF + 'menu_ns6.js"></script>'; }
// if (op5&&!mac) { siSTR='<script language=javascript src="' + baseHREF + 'menu_op5.js"></script>'; }
if (siSTR === '') { siSTR='<script language=javascript src="./menu_ie.js"></script>'; }
document.write(siSTR);