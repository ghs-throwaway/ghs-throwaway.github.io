/* 
  UBer v3.1 by luphoria.
  Bookmarklet versions:
   - Static 3.1: javascript:!function(){var t=prompt("Welcome to UBer v3.1\nenter url, the one already there is Google. make sure to start with http or:// https://.\nOR enter 'proxy' to go to a proxy site.\n\n\n-luphoria",placeholder="//www.google.com/webhp?igu=1");if("proxy"==t){var o=prompt("Welcome to UBer v3.1\nenter url. make sure to start with http or:// https://.\n\n\n-luphoria",placeholder="https://google.com/");""!=o&&null!=o&&(t="https://a.mutualbooks.biz/go/"+o)}""!=t&&null!=t&&"proxy"!=t&&"https://a.mutualbooks.biz/go/https://null"!=t&&document.write("<title>UBer 3.1</title><div position:absolute; left: 0; right: 0; bottom: 0; top: 0px; ><iframe src='"+t+"' id='uberFrame' style=' position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;' >></iframe></div>")}(),window.onbeforeunload=function(){return console.log("Lyft implementation courtesy of UBer"),"UBer on top."};
   - Dynamic UBer: javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ghs-throwaway.github.io/UBer.js' })()
  Changelog: actually made a formatted version, made failsafe for proxy being null/""
*/

function UBer() {
  (function() {
    var url = prompt("\
Welcome to UBer v3.1\n\
enter url, the one already there is Google. make sure to start with http or:// https://.\n\
OR enter 'proxy' to go to a proxy site.\n\n\n\
-luphoria",
    placeholder="//www.google.com/webhp?igu=1")
    if(url == "proxy") {
      var url2 = prompt("\
Welcome to UBer v3.1\n\
enter url. make sure to start with http or:// https://.\n\n\n\
-luphoria",
      placeholder="https://google.com/")
      if(url2 != "" && null != url2) { url = "https://a.mutualbooks.biz/go/" + url2 } /* HU proxy site by QuiteAFancyEmerald -- TODO create my own */ 
    }
    "" != url && null != url && "proxy" != url && "https://a.mutualbooks.biz/go/https://null" != url && document.write("<title>UBer 3.1</title><div position:absolute; left: 0; right: 0; bottom: 0; top: 0px; ><iframe src='"+url+"' id='uberFrame' style=' position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;' >></iframe></div>")})()}()
window.onbeforeunload = function() { 
  console.log("Lyft implementation courtesy of UBer") 
  return "UBer on top." 
}

UBer()
