window.htconfig = {
    Style: {
        'texture.cache': true
    },
    Default: {
        // Resolve cross-domain issues
        crossOrigin: 'anonymous',
        convertURL: function(url) {
            var storagePrefix = /mini-browser/.test(window.location.href) ? '/a' :'storage';
            if (storagePrefix && url && !/^data:image/.test(url) && !/^http/.test(url) && !/^https/.test(url)) {
                url = storagePrefix + '/' + url
            }
            return url;
        }
    },
    HttpUrl: 'http:// 192.168.100.141:9005/',
    URL: {
        alarm_list: 'model_view/alarm_list',
        msg_receive:'model_view/msg_receive',
    }
};