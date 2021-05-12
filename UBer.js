/* 
  UBer v3.1 by luphoria.
  Bookmarklet versions:
   - Static 3.1: javascript:%21function%28%29%7Bvar%20t%3Dprompt%28%22Welcome%20to%20UBer%20v3.1%5Cnenter%20url%2C%20the%20one%20already%20there%20is%20Google.%20make%20sure%20to%20start%20with%20http%20or%3A%2F%2F%20https%3A%2F%2F.%5CnOR%20enter%20%27proxy%27%20to%20go%20to%20a%20proxy%20site.%5Cn%5Cn%5Cn-luphoria%22%2Cplaceholder%3D%22%2F%2Fwww.google.com%2Fwebhp%3Figu%3D1%22%29%3Bif%28%22proxy%22%3D%3Dt%29%7Bvar%20o%3Dprompt%28%22Welcome%20to%20UBer%20v3.1%5Cnenter%20url.%20make%20sure%20to%20start%20with%20http%20or%3A%2F%2F%20https%3A%2F%2F.%5Cn%5Cn%5Cn-luphoria%22%2Cplaceholder%3D%22https%3A%2F%2Fgoogle.com%2F%22%29%3B%22%22%21%3Do%26%26null%21%3Do%26%26%28t%3D%22https%3A%2F%2Fa.mutualbooks.biz%2Fgo%2F%22%2Bo%29%7D%22%22%21%3Dt%26%26null%21%3Dt%26%26%22proxy%22%21%3Dt%26%26%22https%3A%2F%2Fa.mutualbooks.biz%2Fgo%2Fhttps%3A%2F%2Fnull%22%21%3Dt%26%26document.write%28%22%3Ctitle%3EUBer%203.1%3C%2Ftitle%3E%3Cdiv%20position%3Aabsolute%3B%20left%3A%200%3B%20right%3A%200%3B%20bottom%3A%200%3B%20top%3A%200px%3B%20%3E%3Ciframe%20src%3D%27%22%2Bt%2B%22%27%20id%3D%27uberFrame%27%20style%3D%27%20position%3A%20fixed%3B%20top%3A%200px%3B%20bottom%3A%200px%3B%20right%3A%200px%3B%20width%3A%20100%25%3B%20border%3A%20none%3B%20margin%3A%200%3B%20padding%3A%200%3B%20overflow%3A%20hidden%3B%20z-index%3A%20999999%3B%20height%3A%20100%25%3B%27%20%3E%3E%3C%2Fiframe%3E%3C%2Fdiv%3E%22%29%7D%28%29%2Cwindow.onbeforeunload%3Dfunction%28%29%7Breturn%20console.log%28%22Lyft%20implementation%20courtesy%20of%20UBer%22%29%2C%22UBer%20on%20top.%22%7D%3B
   - Dynamic UBer (WIP): javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://ghs-throwaway.github.io/UBer.js' })()
  Changelog: actually made a formatted version, made failsafe for proxy being null/""
*/


// TODO fucking fix this you braindead child

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
