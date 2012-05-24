document.addEventListener("DOMContentLoaded", function() {
    var pac_data;
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
    	update_local_pac_data);

    function update_local_pac_data() {
        var my_date = new Date();
        if (!localStorage.naive_pac_data || !localStorage.naive_last_update ||
                my_date.getTime() - localStorage.naive_last_update > 1000 * 60 * 60 * 24) {
            console.log('to update localStorage.naive_pac_data');

            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://c14993931.ssl.cf2.rackcdn.com/proxy.pac", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    localStorage.naive_pac_data = xhr.responseText;
                    localStorage.naive_last_update = my_date.getTime();
                    console.log('updated localStorage.naive_pac_data');

                    // change to the updated pac file instantly
                    var new_config = {
                        mode: 'pac_script',
                        pacScript: {
                            data: localStorage.naive_pac_data
                        }
                    };
                    chrome.proxy.settings.set(
                        {
                            value: new_config,
                            scope: 'regular'
                        },
                        function () {}
                    );
                    console.log('using new local.Storage.naive_pac_data now');
                }
            };
            xhr.send();
        } else {
            console.log('no need to update localStorage.naive_pac_data now');
        }
    }
});
