document.addEventListener("DOMContentLoaded", function() {
    var config = {
        mode: "pac_script",
        pacScript: {
            url: "https://c14993931.ssl.cf2.rackcdn.com/proxy.pac"
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
