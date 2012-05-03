chrome.proxy.onProxyError.addListener(function(details) {
    console.log('Niave onProxyError [' + details.error + '](' + details.details + ')');

    if (details.fatal)
        title = 'Fatal Error! ' + details.error;
    else
        title = details.error;
    
    var error_notification = webkitNotifications.createNotification(
        'icons/icon48.jpg',
        title,
        details.details
    );
    error_notification.show();
});
