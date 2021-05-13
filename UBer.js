/* 
  UBer v3.5 by luphoria.
  Bookmarklet versions:
   - Dynamic UBer: javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ghs-throwaway.github.io/UBer.js'})()
  Changelog: failsafe for not including specification for protocol.
*/
function UBer() {
  alert("DEBUG UBer");
  var url = prompt("\
Welcome to UBer v3.5\n\
enter url, the one already there is Google. make sure to start with http://, https://, or //.\n\
OR enter 'proxy' to go to a proxy site.\n\n\n\
-luphoria",
    placeholder = "//www.google.com/webhp?igu=1"); /* google with flag used by agoogleaday -- allows google.com for cross-origin iframe */
  alert("DEBUG url=" + url);
  if (url == "proxy") {
    /* if user inputs "proxy" instead of a url */
    alert("DEBUG url2 prompting...")
    var url2 = prompt("\
Welcome to UBer v3.5\n\
enter url. make sure to start with http or:// https://.\n\n\n\
-luphoria",
      placeholder = "https://google.com/"); /* flag not required when using proxy */
    alert("DEBUG url2=" + url2);
    if (url2 != "" && null != url2); /* cancel check */ {
      alert("DEBUG cancel not detected");
      if (url2.includes("//", 0) || url2.includes("http://", 0) || url2.includes("https://", 0)) {
        alert("DEBUG valid url2")
        url = "https://a.mutualbooks.biz/go/" + url2; /* HU proxy site by QuiteAFancyEmerald -- TODO create my own */
      } else {
        alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'.");
        url = null;
        url2 = null;
      };
    };
  };
  if ("" != url && null != url && "https://a.mutualbooks.biz/go/https://null" != url) {
    alert("DEBUG no cancel detected");
    if (url.includes("//", 0) || url.includes("http://", 0) || url.includes("https://", 0)) {
      alert("DEBUG valid url " + url);
      document.getElementById("*").innerHTML = "";
      alert(url);
      window.onbeforeunload = function() {
        /* lyft implementation built-in Just in Case(tm) :) */
        console.log("Lyft implementation courtesy of UBer");
        return "UBer on top.";
      }
    } else {
      alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'.");
    }
  }
};
UBer()
