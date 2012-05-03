document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.naive_pac_data) {
        pac_data = naive_pac_data;
        console.log('use hard-coded naive_pac_data');
    } else {
        pac_data = localStorage.naive_pac_data;
        console.log('use localStorage.naive_pac_data');
    }

    var config = {
        mode: 'pac_script',
        pacScript: {
            data: pac_data
      	}
    };

    chrome.proxy.settings.set(
        {
            value: config, 
            scope: 'regular'
        },
    	function() {}
    );

    var my_date = new Date();
    if (!localStorage.naive_pac_data || !localStorage.naive_last_update ||
            my_date.getTime() - localStorage.naive_last_update > 1000 * 60 * 60 * 24) {
        console.log('to update localStorage.naive_pac_data');
        setTimeout(update_pac_data, 5000);
    } else {
        console.log('no need to update now');
    }

    function update_pac_data() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://c14993931.ssl.cf2.rackcdn.com/proxy.pac", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                localStorage.naive_pac_data = xhr.responseText;
                localStorage.naive_last_update = my_date.getTime();
                console.log('updated localStorage.naive_pac_data');
            }
        }
        xhr.send();
    }
});
