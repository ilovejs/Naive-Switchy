document.addEventListener("DOMContentLoaded", function() {
    var config = {
        mode: "pac_script",
        pacScript: {
            url: "https://d2o4ssz3p0edhu.cloudfront.net"
            // url: "https://pac.bozhu.me"
      	}
    };

    chrome.proxy.settings.set(
        {
            value: config, 
            scope: 'regular'
        },
    	function() {}
    );
});
