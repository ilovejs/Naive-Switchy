document.addEventListener("DOMContentLoaded", function() {
    var config = {
        mode: 'pac_script',
        pacScript: {
            data: pac_data
            //url: 'file:///Users/b8zhu/Desktop/Naive-Switchy-PAC/proxy.pac'
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
