var cookieHandle = {
    getCookie: function (name) {
        var cookies = document.cookie.split("; "),
            arr;
        for (var i = 0, len = cookies.length; i < len;i++) {
            arr = cookies[i].split("=");
            if(arr[0] == encodeURIComponent(name)) {
                return decodeURIComponent(arr[1]);
            }
        }
        return "";
    },
    setCookie: function (option) {
        var cookieStr = encodeURIComponent(option.name) + "=" + encodeURIComponent(option.value);
        if (option.expiresHours) {
            var date = new Date();
            date.setTime(date.getTime() + option.expiresHours * 3600 * 1000);
            cookieStr = cookieStr + "; expires=" + date.toUTCString();
        }
        if (option.path) {
            cookieStr = cookieStr + "; path=" + option.path;
        }
        if (option.domain) {
            cookieStr = cookieStr + "; domain=" + option.domain;
        }
        document.cookie = cookieStr;
    },
    deleteCookie: function (name, option) {
        var date = new Date(0);
        document.cookie = name + "=88; expires=" + date.toUTCString() +
                            (option.path ? ("; path=" + option.path) : "") +
                            (option.domain ? ("; domain=" + option.domain) : "");
    }
};