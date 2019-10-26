window.W = {
        version: "19.7.2",
        assets: "19.7.2.lib.64e0",
        sha: "a08d64e0",
        target: "lib",
        build: "2019-05-09, 14:39"
    },
    /*! Copyright (c) Windyty SE, 2018 all rights reserved */
    function() {
        var p = function(t) {
            var e = function() {
                document.getElementById("windy").innerHTML = '\n\t\t\t\t<p style="text-align: center; margin-top: 200px;">\n\t\t\t\t\t' + t + '<br /><br />\n\t\t\t\t\tvisit <a style="color: inherit" href="http://www.windy.com/" target="_blank">www.windy.com</a> or <a style="color: inherit" href="http://api.windy.com/" target="_blank">api.windy.com</a>\n\t\t\t\t</p>'
            };
            console.error(t), "complete" === document.readyState ? e() : window.addEventListener("load", e)
        };
        if (window.W && window.W.version)
            if (window.L) {
                var e = /^0\.7/.test(L.version);
                if (e) {
                    if (setTimeout(function() {
                            console.log("%c New version of Windy API is here, supporting Leaflet 1.4. Check https://api.windy.com for API documentation. ", "color: #9D0805; font-size: large")
                        }, 600), Date.now() > new Date("2019-05-24T15:45:02.423Z").getTime()) return p("Please upgrade to new version of Windy API");
                    window.W = {
                        version: "16.17.0",
                        sha: "ee85ff8f",
                        assets: "16.17.0.lib.ff8f",
                        build: "2018-11-20, 08:32"
                    }
                }
                //var o = "https://www.windy.com/v/" + W.assets;
				var o = 'lib';
                0;
                window.windyInit = function(d, l) {
                    var c = d.key,
                       /// u = new XMLHttpRequest;
                    // u.open("POST", "https://api4.windy.com/api4/auth", !0), u.setRequestHeader("Content-type", "application/json; charset=utf-8"), 
					// u.onload = function() {
                        //var e;
                        //try {
                        //    e = JSON.parse(u.responseText)
                        //} catch (t) {
                        //    e = {}
                        //}
						//console.log(e);
						e = {"auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1YSI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdPVzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBjb2NfY29jX2Jyb3dzZXIvNzkuMC4xMDggQ2hyb21lLzczLjAuMzY4My4xMDggU2FmYXJpLzUzNy4zNiIsImlhdCI6MTU1OTA5NDg0MywiZXhwIjoxNTY2Mjk0ODQzfQ.WGE_B0KeseAF5SzJ1cjYUDEptdH9viB77Zd0f5TAfC8","type":"basic","apiUser":"vietly","status":"ok","id":1123551,"name":""};
                        var t = e.auth,
                            n = e.paid,
                            o = e.domains,
                            i = e.apiUser,
                            a = e.id,
                            r = e.name,
                            s = e.type;
                        //4 == u.readyState && parseInt(u.status) < 300 ? (
						true?(window.W.windyBoot = {
                            options: d,
                            cb: l,
                            auth: t,
                            id: a,
                            name: r,
                            type: s,
                            paid: n,
                            apiUser: i
                        }, f(c, o) ? w(t) : p("Windy API used on unauthorized domain.")) : p("Not authorized to Windy API.")
                    // }
					// , u.send(JSON.stringify({
                        // key: c
                    // }))
                };
                var f = function(t, e) {
                        if (!e || !/\S+/.test(e)) return !0;
                        var n = document.location,
                            o = n.hostname,
                            i = n.port;
                        if (!/PsLAtXpsPTZexBwUkO7Mx5I/.test(t) && (80 < parseInt(i) || /localhost|127\.0\.0\.1/.test(o))) return !0;
                        var a = e.split(",").map(function(t) {
                            return t.trim()
                        }).map(function(t) {
                            return t.toLowerCase()
                        }).map(function(t) {
                            return new RegExp(t)
                        }).filter(function(t) {
                            return t.test(o)
                        });
                        return !!(a && 0 < a.length)
                    },
                    w = function() {
                        ! function(t) {
                            var e = document.createElement("link");
                            e.rel = "stylesheet", e.href = o + "/" + t, document.head.appendChild(e)
                        }("lib.css"),
                        function(t, e) {
                            var n = document.createElement("script");
							//console.log(e);
							//console.log(t);
                            n.type = "text/javascript", document.head.appendChild(n), n.async = !0, e && (n.onload = e), n.onerror = function() {
                                return p("Failed to load Windy API.")
                            }, n.src = o + "/" + t
                        }("lib.js", function() {
                            var t = window.W.windyBoot.name;
                            e ? n("New version of Windy API available.<br/>Please update your codes.") : (!t || t.length < 5) && n("    ")
                        })
                    },
                    n = function(t) {
                        document.querySelector("#windy").insertAdjacentHTML("beforeend", '<section style="position: absolute;\n\t\t\t\t\t\tleft: 50%;\n\t\t\t\t\t\tbottom: 20%;\n\t\t\t\t\t\topacity: .6;\n\t\t\t\t\t\tpointer-events: none;\n\t\t\t\t\t\tline-height: 1.6;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\ttransform: translate(-50%,-50%);\n\t\t\t\t\t\tfont-size: 16px;">' + t + "</section>")
                    }
            } else p("Leaflet library missing");
        else p("Missing global object W. Have you loaded libManifest?")
    }();