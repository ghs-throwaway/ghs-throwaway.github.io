/* 
  UBer v3.5 by luphoria.
  Bookmarklet versions:
   - Dynamic UBer: javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ghs-throwaway.github.io/UBer.js'})()
  Changelog: failsafe for not including specification for protocol.
*/

void function() {
  (function() {
    var url = prompt("\
Welcome to UBer v3.5\n\
enter url, the one already there is Google. make sure to start with http://, https://, or //.\n\
OR enter 'proxy' to go to a proxy site.\n\n\n\
-luphoria",
    placeholder="//www.google.com/webhp?igu=1"); /* google with flag used by agoogleaday -- allows google.com for cross-origin iframe */
    if(url == "proxy") { /* if user inputs "proxy" instead of a url */
      var url2 = prompt("\
Welcome to UBer v3.5\n\
enter url. make sure to start with http or:// https://.\n\n\n\
-luphoria",
      placeholder="https://google.com/"); /* flag not required when using proxy */
      if(url2 != "" && null != url2) /* cancel check */ { url = "https://a.mutualbooks.biz/go/" + url2 } /* HU proxy site by QuiteAFancyEmerald -- TODO create my own */ 
    };
    if("" != url && null != url && "https://a.mutualbooks.biz/go/https://null" != url) {
      if (url.includes("//",0) || url.includes("http://",0) || url.includes("https://",0)) {
        document.write("<title>UBer 3.5</title><div position:absolute;left:0;right:0;bottom:0;top:0px><iframe src='"+url+"' id='uberFrame' style='position:fixed;top:0px;bottom:0px;right:0px;width:100%;border:none;margin:0;padding:0;overflow:hidden;z-index:999999;height:100%;'>></iframe></div>")})()}();
        window.onbeforeunload = function() { /* lyft implementation built-in Just in Case(tm) :) */
          console.log("Lyft implementation courtesy of UBer");
          return "UBer on top.";
        }
      } 
      else { 
          alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'.")
      }
    }
   
