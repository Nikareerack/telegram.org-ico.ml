//<script src="http://megatimer.ru/s/544c710eb29fb8a02d36c8a6a21701bb.js"></script>
(function() {
    var _id = "544c710eb29fb8a02d36c8a6a21701bb";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:424px;height:73px;'></div>");
    var _t = document.createElement("script");
    _t.src = "timer/timer.min.js";
    var _f = function(_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "1",
                "params": {
                    "usertime": true,
                    "tz": "3",
                    "utc": 1520676000000
                }
            },
            "design": {
                "type": "text",
                "params": {
                    "number-font-family": {
                        "family": "Russo One",
                        "link": "<link href='https://fonts.googleapis.com/css?family=Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "60",
                    "number-font-color": "#ffffff",
                    "separator-margin": "33",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='https://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "12",
                    "text-font-color": "#c7c7c7"
                }
            },
            "designId": 1,
            "theme": "black",
            "width": 424,
            "height": 73
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function() {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this); // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}