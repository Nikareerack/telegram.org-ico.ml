(function() {
    var _id = "1f7513d8f689c7fe48087c9fe32e071c";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    //document.write("<div id='timer" + _id + "' style='min-width:489px;height:91px;'></div>");
	document.write("<div id='timer" + _id + "' style='min-width:489px;'></div>");
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
                    "utc": 1527761410000
                }
            },
            "design": {
                "type": "text",
                "params": {
                    "number-font-family": {
                        "family": "Arial"
                    },
                    "number-font-size": "38",
                    "number-font-color": "#f3f3f3",
                    "separator-margin": "20",
                    "separator-on": true,
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
            "width": 489,
            "height": 91
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function() {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);