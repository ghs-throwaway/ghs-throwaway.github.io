/* 
  UBer v3.6 by luphoria.
  Bookmarklet versions:
   - Dynamic UBer: javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ghs-throwaway.github.io/UBer.js'})()
  This version is TIME BOMBED, used as a demo. obv still open source and easily crackable but trent is braindead so we good.
  I also stripped mention of using a proxy because fuck u trent
*/
function UBer() {
  var GivenDate = prompt("DEBUG\nenter timebomb expiration date");// "2021-05-19"; // 
  GivenDate = new Date(GivenDate);
  alert(GivenDate+"\n"+Date.parse(GivenDate));
  alert(Date.now());
  if(Date.now() > Date.parse(GivenDate)){
    alert('Google account is not verified -- please re-authenticate to continue using UBer');
  } else{

  var url = prompt("\
Welcome to UBer v3.6\n\
enter url, the one already there is Google. make sure to start with http://, https://, or //.\n\n\n\
-luphoria",
    placeholder = "//www.google.com/webhp?igu=1"); /* google with flag used by agoogleaday -- allows google.com for cross-origin iframe */
  if ("" != url && null != url) {
    if (url.includes("//", 0) || url.includes("http://", 0) || url.includes("https://", 0)) {
      document.body.innerHTML = '<body style="margin:0px;padding:0px;overflow:hidden"><iframe src="' + url + '" id="uberFrame" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></body>'
      window.onbeforeunload = function() {
        /* lyft implementation built-in Just in Case(tm) :) */
        console.log("Lyft implementation courtesy of UBer");
        return "UBer on top.";
      }
      document.title = "UBer | long live sproikes"
    } else {
      alert("invalid url, quitting.\nmake sure to start with 'http://', 'https://', or '//'.");
    }
  }
  }
};
UBer()
