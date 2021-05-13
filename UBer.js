/* 
  UBer v3.55 by luphoria.
  Bookmarklet versions:
   - Dynamic UBer: javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ghs-throwaway.github.io/UBer.js'})()
  Changelog: fixed dynamic ver.
*/
function UBer() {
  var url = prompt("\
Welcome to UBer v3.55\n\
enter url, the one already there is Google. make sure to start with http://, https://, or //.\n\
OR enter 'proxy' to go to a proxy site.\n\n\n\
-luphoria",
    placeholder = "//www.google.com/webhp?igu=1"); /* google with flag used by agoogleaday -- allows google.com for cross-origin iframe */
  if (url == "proxy") {
    /* if user inputs "proxy" instead of a url */
    var url2 = prompt("\
Welcome to UBer v3.55\n\
enter url. make sure to start with http or:// https://.\n\n\n\
-luphoria",
      placeholder = "https://google.com/"); /* flag not required when using proxy */
    if (url2 != "" && null != url2); /* cancel check */ {
      if (url2.includes("//", 0) || url2.includes("http://", 0) || url2.includes("https://", 0)) {
        url = "https://a.mutualbooks.biz/go/" + url2; /* HU proxy site by QuiteAFancyEmerald -- TODO create my own */
      } else {
        alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'.");
        url = null;
        url2 = null;
      };
    };
  };
  if ("" != url && null != url && "https://a.mutualbooks.biz/go/https://null" != url) {
    if (url.includes("//", 0) || url.includes("http://", 0) || url.includes("https://", 0)) {
      document.body.innerHTML = '<title>UBer - https://luphoria.github.io</title><body style="margin:0px;padding:0px;overflow:hidden"><iframe src="' + url + '" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></body>'
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
