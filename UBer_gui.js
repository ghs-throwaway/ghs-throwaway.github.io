/* UBerGUI by luphoria */
(function() {
      document.body.innerHTML = '<body style="margin:0px;padding:0px;overflow:hidden"><iframe src="https://luphoria.github.io/UBerGUI.html" id="uberFrame" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></body>'
      window.onbeforeunload = function() {
        /* lyft implementation built-in Just in Case(tm) :) */
        console.log("Lyft implementation courtesy of UBer");
        return "UBer on top.";
      }
      let title_carousel = [
        "long live sproikes",
        "luphoria.github.io",
        "bread is cool",
        "vistopher chrisser",
        "jaul pohnson",
        "cool kids only",
        "wear denim",
        "we love llamas",
        "aanderfort is cool",
        "mom come back",
        "blocked.com-default.ws",
        "Super E🅱️ic Games and Tips",
        "free robux",
        "chrome://inducebrowsercrashforrealz",
        "green day",
        "epic womginx moment"
      ];
      document.title = "UBer | long live sproikes"
      setInterval(function(){ 
        document.title = "UBer | " + title_carousel[Math.floor(Math.random()*16)]; // 0-15 value
      }, 30000);
    })()
