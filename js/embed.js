function checkMobile() {
    var e = null != navigator.userAgent.match(/iPad/i);
    if (e) return !1;
    var t = null != navigator.userAgent.match(/iphone|android|phone|mobile|wap|netfront|java|opera mobi|opera mini|ucweb|windows ce|symbian|symbianos|series|webos|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier|^lct|320x320|240x320|176x220/i);
    return !!t
}

function sskadmin(e) {
    var t = "";
    return 0x566430a867000400 == e.user_id ? t = checkMobile() ? '<span class="ua"><span class="sskadmin">Captain</span></span><br><br>' : '<span class="ua"><span class="sskadmin">Captain</span></span>' : checkMobile() && (t = "<br><br>"), t
}

function ua(e) {
    var t = new Array, s = "";
    if (t = e.match(/FireFox\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_firefox"><i class="fa fa-firefox"></i> FireFox'
    } else if (t = e.match(/Maxthon([\d]*)\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_maxthon"><i class="fa fa-globe"></i> Maxthon'
    } else if (t = e.match(/BIDUBrowser([\d]*)\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_ucweb"><i class="fa fa-globe"></i> 百度浏览器'
    } else if (t = e.match(/UBrowser([\d]*)\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_ucweb"><i class="fa fa-globe"></i> UCBrowser'
    } else if (t = e.match(/UCBrowser([\d]*)\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_ucweb"><i class="fa fa-globe"></i> UCBrowser'
    } else if (t = e.match(/MetaSr/gi)) s = '<span class="ua_sogou"><i class="fa fa-globe"></i> 搜狗浏览器'; else if (t = e.match(/2345Explorer/gi)) s = '<span class="ua_2345explorer"><i class="fa fa-globe"></i> 2345王牌浏览器'; else if (t = e.match(/2345chrome/gi)) s = '<span class="ua_2345chrome"><i class="fa fa-globe"></i> 2345加速浏览器'; else if (t = e.match(/LBBROWSER/gi)) s = '<span class="ua_lbbrowser"><i class="fa fa-globe"></i> 猎豹安全浏览器'; else if (t = e.match(/MicroMessenger\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_qq"><i class="fa fa-weixin"></i> 微信'
    } else if (t = e.match(/QQBrowser\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_qq"><i class="fa fa-qq"></i> QQ浏览器'
    } else if (t = e.match(/QQ\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_qq"><i class="fa fa-qq"></i> QQ浏览器'
    } else if (t = e.match(/MiuiBrowser\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_mi"><i class="fa fa-globe"></i> Miui浏览器'
    } else if (t = e.match(/Chrome([\d]*)\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_chrome"><i class="fa fa-chrome"></i> Chrome'
    } else if (t = e.match(/safari\/([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_apple"><i class="fa fa-safari"></i> Safari'
    } else if (t = e.match(/Opera[\s|\/]([^\s]+)/gi)) {
        t[0].split("/");
        s = '<span class="ua_opera"><i class="fa fa-opera"></i> Opera'
    } else s = (t = e.match(/Trident\/7.0/gi)) ? '<span class="ua_ie"><i class="fa fa-internet-explorer"></i> IE 11' : (t = e.match(/MSIE\s([^\s|;]+)/gi)) ? '<span class="ua_ie"><i class="fa fa-internet-explorer"></i> IE ' + t[0] : '<span class="ua_other"><i class="fa fa-globe"></i> 其它浏览器';
    return checkMobile() ? Mobile = "<br><br>" : Mobile = "", s + "</span>" + Mobile
}

function os(e) {
    var t = "";
    return t = e.match(/win/gi) ? e.match(/nt 5.1/gi) ? '<span class="os_xp"><i class="fa fa-windows"></i> Windows XP' : e.match(/nt 6.1/gi) ? '<span class="os_7"><i class="fa fa-windows"></i> Windows 7' : e.match(/nt 6.2/gi) ? '<span class="os_8"><i class="fa fa-windows"></i> Windows 8' : e.match(/nt 6.3/gi) ? '<span class="os_8_1"><i class="fa fa-windows"></i> Windows 8.1' : e.match(/nt 10.0/gi) ? '<span class="os_8_1"><i class="fa fa-windows"></i> Windows 10' : e.match(/nt 6.0/gi) ? '<span class="os_vista"><i class="fa fa-windows"></i> Windows Vista' : e.match(/nt 5/gi) ? '<span class="os_2000"><i class="fa fa-windows"></i> Windows 2000' : '<span class="os_windows"><i class="fa fa-windows"></i> Windows' : e.match(/android/gi) ? '<span class="os_android"><i class="fa fa-android"></i> Android' : e.match(/ubuntu/gi) ? '<span class="os_ubuntu"><i class="fa fa-desktop"></i> Ubuntu' : e.match(/linux/gi) ? '<span class="os_linux"><i class="fa fa-linux"></i> Linux' : e.match(/mac/gi) ? '<span class="os_mac"><i class="fa fa-apple"></i> Mac OS X' : e.match(/unix/gi) ? '<span class="os_unix"><i class="fa fa-desktop"></i> Unix' : e.match(/symbian/gi) ? '<span class="os_nokia"><i class="fa fa-mobile"></i> Nokia SymbianOS' : '<span class="os_other"><i class="fa fa-desktop"></i> 其它操作系统', t + "</span>"
}

(function (e, t, s) {
    function a(e, t) {
        for (var s in t) t[s] && (e[s] ? e[s].set(t[s]) : e[s] = new ne(t[s]))
    }

    function i(e, t) {
        for (var s in t) e[s] = t[s]
    }

    function n() {
        if (!g.checkPermission()) for (var t; t = R.shift();) {
            var s = g.createNotification(t.iconUrl, t.title, t.body), a = t.url;
            try {
                s.onclick = function () {
                    e.focus(), h.href = a, s.cancel()
                }
            } catch (e) {
            }
            s.show(), setTimeout(function () {
                s.cancel && s.cancel()
            }, 8e3)
        }
    }

    function r() {
        return 0 == de.data.user_id
    }

    function o(e, t, s) {
        if (v) try {
            v.removeItem(e), v.removeItem(e + ":timestamp"), v[e] = m.stringify(t), v[e + ":timestamp"] = Math.floor(s)
        } catch (e) {
        }
    }

    function d(e) {
        E.theme = e, "none" != e && E.injectStylesheet(S + "/styles/embed" + (e ? "." + e + ".css?" + j[e] : "." + short_name) + ".css")
    }

    if (!e.DUOSHUO) {
        var l, c, u, p, h = e.location, m = e.JSON, f = e.XMLHttpRequest, v = m && m.stringify && e.localStorage,
            g = e.webkitNotifications, b = t.getElementsByTagName("head")[0] || t.getElementsByTagName("body")[0],
            _ = e.navigator.userAgent, y = "https:" == t.location.protocol ? "https:" : "http:", w = 0,
            k = function () {
                var e = {"<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
                    t = /&(?!\w+;)|[<>"'`]/g, s = /[&<>"'`]/, a = function (t) {
                        return e[t] || "&amp;"
                    };
                return function (e) {
                    return null == e || e === !1 ? "" : s.test(e) ? e.replace(t, a) : e
                }
            }(), x = function (e) {
                if (e.match(/^(http|https):/)) return e;
                var s = t.createElement("a");
                return s.href = e, M.hrefNormalized ? s.href : s.getAttribute("href", 4)
            }, T = {start: 0, end: 0}, q = function (e) {
                var s, a, i, n, r, o = this, d = 0, l = 0;
                t.selection && (a = t.selection.createRange(), a && a.parentElement() == o && (n = o.value.length, s = o.value.replace(/\r\n/g, "\n"), i = o.createTextRange(), i.moveToBookmark(a.getBookmark()), r = o.createTextRange(), r.collapse(!1), i.compareEndPoints("StartToEnd", r) > -1 ? d = l = n : (d = -i.moveStart("character", -n), d += s.slice(0, d).split("\n").length - 1, i.compareEndPoints("EndToEnd", r) > -1 ? l = n : (l = -i.moveEnd("character", -n), l += s.slice(0, l).split("\n").length - 1)))), T.start = d, T.end = l
            }, C = function (e) {
                return function () {
                    return e
                }
            }, j = {default: "d6149e1c", dark: "c11b5925", bluebox: "dbc0a9af"}, S = y + "//static.duoshuo.com",
            E = e.DUOSHUO = {
                DOMAIN: "duoshuo.com",
                REMOTE: "http://duoshuo.com",
                version: 140327,
                loaded: {
                    jQuery: "undefined" != typeof jQuery && jQuery.fn.jquery >= "1.5",
                    smilies: !1,
                    mzadxN: "undefined" != typeof mzadxN
                },
                libs: {
                    jQuery: S + "/libs/embed.compat.js?24f8ca3f.js",
                    smilies: S + "/libs/smilies.js?921e8eda.js",
                    mzadxN: "http://js.miaozhen.com/mz_ad_serving.js"
                },
                sourceName: {
                    weibo: "新浪微博",
                    qq: "QQ",
                    qzone: "QQ空间",
                    qqt: "腾讯微博",
                    renren: "人人网",
                    douban: "豆瓣网",
                    netease: "网易微博",
                    kaixin: "开心网",
                    sohu: "搜狐微博",
                    baidu: "百度",
                    taobao: "淘宝",
                    msn: "MSN",
                    google: "谷歌"
                },
                serviceNames: {
                    weibo: "微博",
                    qq: "QQ",
                    douban: "豆瓣",
                    renren: "人人",
                    netease: "网易",
                    kaixin: "开心",
                    sohu: "搜狐",
                    baidu: "百度",
                    taobao: "淘宝",
                    msn: "MSN",
                    google: "谷歌"
                },
                parseDate: function (e) {
                    return e.parse("2011-10-28T00:00:00+08:00") && function (t) {
                        return new e(t)
                    } || e.parse("2011/10/28T00:00:00+0800") && function (t) {
                        return new e(t.replace(/-/g, "/").replace(/:(\d\d)$/, "$1"))
                    } || e.parse("2011/10/28 00:00:00+0800") && function (t) {
                        return new e(t.replace(/-/g, "/").replace(/:(\d\d)$/, "$1").replace("T", " "))
                    } || function (t) {
                        return new e(t)
                    }
                }(Date),
                fullTime: function (e) {
                    var t = E.parseDate(e);
                    return t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日 " + t.toLocaleTimeString()
                },
                elapsedTime: function (e) {
                    var t = E.parseDate(e), s = new Date, a = (s - w - t) / 1e3;
                    return a < 10 ? "刚刚" : a < 60 ? Math.round(a) + "秒前" : a < 3600 ? Math.round(a / 60) + "分钟前" : a < 86400 ? Math.round(a / 3600) + "小时前" : (s.getFullYear() == t.getFullYear() ? "" : t.getFullYear() + "年") + (t.getMonth() + 1) + "月" + t.getDate() + "日"
                },
                require: function (e, t) {
                    if ("string" == typeof e) E.loaded[e] ? t() : W(E.libs[e], function () {
                        E.loaded[e] = !0, t()
                    }); else if ("object" == typeof e) {
                        var s, a = !0;
                        for (s = 0; s < e.length; s++) (function (i) {
                            E.loaded[e[s]] || (a = !1, W(E.libs[i], function () {
                                E.loaded[i] = !0;
                                for (var s = 0; s < e.length; s++) if (!E.loaded[e[s]]) return;
                                t()
                            }))
                        })(e[s]);
                        a && t()
                    }
                },
                getCookie: function (e) {
                    for (var a, i, n, r = " " + e + "=", o = t.cookie.split(";"), d = 0; d < o.length; d++) if (a = " " + o[d], i = a.indexOf(r), i >= 0 && i + r.length == (n = a.indexOf("=") + 1)) return decodeURIComponent(a.substring(n, a.length).replace(/\+/g, ""));
                    return s
                },
                param: function (e) {
                    var t = [];
                    for (var a in e) e[a] != s && t.push(a + "=" + encodeURIComponent(e[a]));
                    return t.join("&")
                },
                ajax: function (e, t, a, i, n) {
                    function r(e, t, s, a) {
                        var r, o, d, l = t;
                        if (e >= 200 && e < 300 || 304 === e) if (304 === e) l = "notmodified", r = !0; else try {
                            o = m.parse(s), l = "success", r = !0
                        } catch (e) {
                            l = "parsererror", d = e
                        } else {
                            d = l, l && !e || (l = "error", e < 0 && (e = 0));
                            try {
                                o = m.parse(s)
                            } catch (e) {
                                l = "parsererror", d = e
                            }
                        }
                        r ? i(o) : "parseerror" === l ? V("解析错误: " + s) : (n && n(o), V("出错啦(" + o.code + "): " + o.errorMessage), o.errorTrace && V(o.errorTrace))
                    }

                    var o = E.getCookie("duoshuo_token");
                    if (a.v = E.version, o ? a.jwt = o : p.remote_auth && (a.remote_auth = p.remote_auth), f && m && m.parse) {
                        var d = new f;
                        if (d && "withCredentials" in d) {
                            var l;
                            return d.open(e, E.hostUrl + t + ".json" + ("GET" == e ? "?" + E.param(a) : ""), !0), d.withCredentials = !0, d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), d.send("GET" == e ? null : E.param(a)), l = function (e, t) {
                                var a, i, n, o;
                                try {
                                    if (l && (t || 4 === d.readyState)) if (l = s, t) 4 !== d.readyState && d.abort(); else {
                                        a = d.status, n = d.getAllResponseHeaders();
                                        try {
                                            o = d.responseText
                                        } catch (e) {
                                        }
                                        try {
                                            i = d.statusText
                                        } catch (e) {
                                            i = ""
                                        }
                                    }
                                } catch (e) {
                                    t || r(-1, e)
                                }
                                o && r(a, i, o, n)
                            }, 4 === d.readyState ? l() : d.onreadystatechange = l, void 0
                        }
                    }
                    "GET" != e && (a._method = "POST");
                    var c = "cb_" + Math.round(1e6 * Math.random());
                    E[c] = function (e) {
                        switch (e.code) {
                            case 0:
                                i(e);
                                break;
                            default:
                                n && n(e), V("出错啦(" + e.code + "): " + e.errorMessage), e.errorTrace && V(e.errorTrace)
                        }
                    }, a.callback = "DUOSHUO['" + c + "']", W(E.hostUrl + t + ".jsonp?" + E.param(a))
                },
                injectStylesheet: function (e) {
                    var s = t.createElement("link");
                    s.type = "text/css", s.rel = "stylesheet", s.href = e, b.appendChild(s)
                },
                setCustomStyle: function (e) {
                    if (l || (l = t.createElement("style"), l.type = "text/css", b.appendChild(l)), e = e.replace(/\}/g, "}\n"), l.styleSheet) l.styleSheet.cssText = e; else {
                        for (; l.firstChild;) l.removeChild(l.firstChild);
                        l.appendChild(t.createTextNode(e))
                    }
                },
                compileStyle: function (e) {
                    var t = "", s = {textbox: "#ds-thread #ds-reset .ds-replybox .ds-textarea-wrapper"};
                    if (e) for (var a in e) t += s[a] + "{" + e[a] + "}\n";
                    return t
                },
                init: function (e, t) {
                    e && !O[e] && (O[e] = t || {type: "EmbedThread"}), E.initView && E.initView()
                }
            }, P = t.all, M = E.support = function () {
                var s = t.createElement("div");
                s.innerHTML = '<a href="/a">a</a><input type="checkbox"/>';
                var a = s.getElementsByTagName("a")[0], i = s.getElementsByTagName("input")[0], n = {
                    placeholder: "placeholder" in i,
                    touch: "ontouchstart" in e || "onmsgesturechange" in e,
                    hrefNormalized: "/a" === a.getAttribute("href"),
                    iOS: _.match(/ \((iPad|iPhone|iPod);( U;)? CPU( iPhone)? OS /),
                    android: _.match(/ \(Linux; U; Android /)
                };
                return c = !f && "undefined" == typeof s.style.maxHeight, n.authInWin = e.postMessage && e.screen.width > 800 && !n.iOS && !n.android && h.origin, n
            }(), U = function (e, s) {
                var a = (t.body || t.documentElement).style;
                if ("undefined" == typeof a) return !1;
                if ("string" == typeof a[e]) return !s || e;
                for (var i = ["Moz", "Webkit", "ms"], e = e.charAt(0).toUpperCase() + e.substr(1), n = 0; n < i.length; n++) if ("string" == typeof a[i[n] + e]) return !s || i[n] + e
            }, O = E.selectors = {
                ".ds-thread": {type: "EmbedThread"},
                ".ds-recent-comments": {type: "RecentComments"},
                ".ds-recent-visitors": {type: "RecentVisitors"},
                ".ds-top-users": {type: "TopUsers"},
                ".ds-top-threads": {type: "TopThreads"},
                ".ds-login": {type: "LoginWidget"},
                ".ds-thread-count": {type: "ThreadCount"}
            }, L = E.pagelets = [], I = {
                post: "发布",
                posting: "正在发布",
                settings: "设置",
                reply: "回复",
                like: "顶",
                repost: "转发",
                report: "举报",
                delete: "删除",
                reply_to: "回复 ",
                reposts: "转发",
                comments: "评论",
                floor: "楼",
                latest: "最新",
                earliest: "最早",
                hottest: "最热",
                share_to: "分享到:",
                leave_a_message: "说点什么吧…",
                no_comments_yet: "还没有评论，沙发等你来抢",
                repost_reason: "请输入转发理由",
                hot_posts_title: "被顶起来的评论",
                comments_zero: "暂无评论",
                comments_one: "1条评论",
                comments_multiple: "{num}条评论",
                reposts_zero: "暂无转发",
                reposts_one: "1条转发",
                reposts_multiple: "{num}条转发",
                weibo_reposts_zero: "暂无新浪微博",
                weibo_reposts_one: "1条新浪微博",
                weibo_reposts_multiple: "{num}条新浪微博",
                qqt_reposts_zero: "暂无腾讯微博",
                qqt_reposts_one: "1条腾讯微博",
                qqt_reposts_multiple: "{num}条腾讯微博"
            }, N = function (e, t, s, a) {
                E.ajax("GET", e, t, s || function () {
                }, a)
            }, z = function (e, t, s, a) {
                E.ajax("POST", e, t, s || function () {
                }, a)
            }, R = [], A = [], H = function (t) {
                return !!("WebSocket" in e && m) && (A.push(m.stringify(t)), u || (u = E.webSocket = new WebSocket("ws://ws.duoshuo.com:8201/"), u.onopen = function () {
                    var e;
                    if (1 === u.readyState) for (; e = A.shift();) u.send(e)
                }, u.onmessage = function (e) {
                    try {
                        var t, s = 0, a = m.parse(e.data)
                    } catch (e) {
                        return
                    }
                    switch (a.type) {
                        case"post":
                            for (; s < E.pagelets.length; s++) t = E.pagelets[s], t.threadId == a.thread_id && t.onMessage(a);
                            break;
                        case"notification":
                            R.push(a), n()
                    }
                }, e.addEventListener("beforeunload", function () {
                    u.close()
                })), u.onopen(), void 0)
            }, Q = E.Collections = {}, B = E.Views = {}, D = (E.Callbacks = {}, E.openDialog = function (e) {
                return E.dialog !== s && E.dialog.el.remove(), E.dialog = new B.Dialog('<div class="ds-dialog"><div class="ds-dialog-inner ds-rounded"><div class="ds-dialog-body">' + e + '</div><div class="ds-dialog-footer"><a href="http://duoshuo.com/" target="_blank" class="ds-logo"></a><span>社会化评论框</span></div><a class="ds-dialog-close" href="javascript:void(0)" title="关闭"></a></div></div>').open()
            }), W = E.injectScript = function (a, i) {
                var n = t.createElement("script"), r = t.head || t.getElementsByTagName("head")[0] || t.documentElement;
                n.type = "text/javascript", n.src = a, n.async = "async", n.charset = "utf-8", i && (n.onload = n.onreadystatechange = function (t, a) {
                    (a || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = s, a || i.call(e))
                }), r.insertBefore(n, r.firstChild)
            }, V = E.log = function (e) {
                "object" == typeof console && console.log(e)
            }, F = E.smilies = {},
            $ = ["EmbedThread", "RecentComments", "RecentVisitors", "TopUsers", "TopThreads", "LoginWidget", "ThreadCount"],
            J = 0, X = function () {
                for (var e = {}, t = 0; t < arguments.length; t++) arguments[t] && i(e, arguments[t]);
                var s = E.param(e);
                return s ? "?" + s : ""
            }, G = function () {
                var e = E.getCookie("duoshuo_token");
                return e ? {jwt: e} : p.remote_auth ? {short_name: p.short_name, remote_auth: p.remote_auth} : s
            }, Y = function () {
                return !p && (p = e.duoshuoQuery) && re.trigger("queryDefined"), p
            };
        for (var Z in Object.prototype) return alert("Object.prototype不为空，请不要给Object.prototype设置方法");
        for (var K = E.templates = {
            userUrl: function (e) {
                return e.url
            },
            avatarUrl: function (e, t) {
                return e.avatar_url || oe.data.default_avatar_url
            },
            userAnchor: function (e) {
                var t = K.userUrl(e);
                return t ? '<a rel="nofollow author" target="_blank" href="' + k(t) + '">' + k(e.name) + "</a>" : k(e.name)
            },
            avatarImg: function (e, t) {
                return '<img src="' + k(K.avatarUrl(e, t)) + '" alt="' + k(e.name) + '"' + (t ? ' style="width:' + t + "px;height:" + t + 'px"' : "") + "/>"
            },
            avatar: function (e, t) {
                var s = K.avatarImg(e, t), a = K.userUrl(e);
                return a ? '<a rel="nofollow author" target="_blank" href="' + k(a) + '" ' + (e.user_id ? " onclick=\"this.href='" + E.hostUrl + "/user-url/?user_id=" + e.user_id + "';\"" : "") + ' title="' + k(e.name) + '">' + s + "</a>" : s
            },
            timeHtml: function (e, t) {
                return e ? t ? '<a href="' + t + '" target="_blank"  class="ds-time" datetime="' + e + '" title="' + E.fullTime(e) + '">' + E.elapsedTime(e) + "</a>" : '<span class="ds-time" datetime="' + e + '" title="' + E.fullTime(e) + '">' + E.elapsedTime(e) + "</span>" : ""
            },
            serviceIcon: function (e, t) {
                return '<a href="javascript:void(0)" class="ds-service-icon' + (t ? "-grey" : "") + " ds-" + e + '" data-service="' + e + '" title="' + E.sourceName[e] + '"></a>'
            },
            loginButtons: function (e) {
                return '<div class="ds-login-buttons"><p>社交帐号登录:</p><div class="ds-social-links">' + K.serviceList() + K.additionalServices() + "</div></div>"
            },
            poweredBy: function (e) {
                return '<p class="ds-powered-by"><a href="http://duoshuo.com" target="_blank" >' + k(e) + "</a></p>"
            },
            indicator: C('<div id="ds-indicator"></div>'),
            waitingImg: C('<div id="ds-waiting"></div>'),
            serviceList: function (e) {
                for (var t = '<ul class="ds-service-list">', s = ["weibo", "qq", "renren", "douban"], a = 0; a < s.length; a++) t += K.loginItem(s[a], e);
                return t + '<li><a class="ds-more-services" href="javascript:void(0)">更多»</a></li></ul>'
            },
            additionalServices: function (e) {
                for (var t = '<ul class="ds-service-list ds-additional-services">', s = ["kaixin", "netease", "sohu", "baidu", "google"], a = 0; a < s.length; a++) t += K.loginItem(s[a], e);
                return t + "</ul>"
            },
            loginItem: function (e, t) {
                var s = K[t ? "bindUrl" : "loginUrl"](e);
                return '<li><a href="' + s + '"  class="ds-service-link ds-' + e + '">' + E.serviceNames[e] + (de.data.social_uid[e] ? ' <span class="ds-icon ds-icon-ok"></span>' : "") + "</a></li>"
            },
            loginUrl: function (e, t) {
                return t || (t = {}), p.sso && p.sso.login && (t.sso = 1, t.redirect_uri = p.sso.login), E.hostUrl + "/login/" + e + "/" + X(t)
            },
            bindUrl: function (e) {
                return E.hostUrl + "/bind/" + e + "/" + X(p.sso && p.sso.login ? {
                    sso: 1,
                    redirect_uri: p.sso.login
                } : null, G())
            },
            logoutUrl: function () {
                return E.hostUrl + "/logout/" + X(p.sso && p.sso.logout ? {sso: 1, redirect_uri: p.sso.logout} : null)
            },
            likePost: function (e) {
                return '<a class="ds-post-likes" href="javascript:void(0);"><span class="ds-icon ds-icon-like"></span>' + I.like + (e.likes > 0 ? "(" + e.likes + ")" : "") + "</a>"
            },
            ctxPost: function (e, t, s) {
                var a = ee(e);
                return '<li class="ds-ctx-entry"' + (s ? ' style="display:none"' : "") + ' data-post-id="' + e.post_id + '"><div class="ds-avatar">' + K.avatar(a) + '</div><div class="ds-ctx-body"><div class="ds-ctx-head">' + K.userAnchor(a) + K.timeHtml(e.created_at, e.url) + (t >= 0 ? '<div class="ds-ctx-nth" title="' + E.fullTime(e.created_at) + '">' + (t + 1) + I.floor + "</div>" : "") + '</div><div class="ds-ctx-content">' + e.message + (t >= 0 ? '　　　　　　　<div class="ds-comment-actions' + (e.vote > 0 ? " ds-post-liked" : "") + '">' + K.likePost(e) + ' <a class="ds-post-repost" href="javascript:void(0);"><span class="ds-icon ds-icon-share"></span>' + I.repost + '</a> <a class="ds-post-reply" href="javascript:void(0);"><span class="ds-icon ds-icon-reply"></span>' + I.reply + "</a></div>" : "") + "</div></div></li>"
            }
        }, ee = function (e) {
            return pe[e.author_id] && pe[e.author_id].data || e.author
        }, te = function (e) {
            var t = [];
            for (var s in e) t.push('<input type="hidden" name="' + s + '" value="' + k(e[s]) + '" />');
            return t.join("\n")
        }; J < $.length; J++) E[$[J]] = function (e) {
            return function (t, s) {
                s = s || {}, s.type = e, t && !O[t] && (O[t] = s), E.initSelector && E.initSelector(t, s)
            }
        }($[J]), E["create" + $[J]] = function (e) {
            return function (s, a) {
                var i = t.createElement(s);
                for (var n in a) i.setAttribute("data-" + n, a[n]);
                return E[e](i), i
            }
        }($[J]);
        E.RecentCommentsWidget = E.RecentComments;
        var se = 0, ae = E.Class = function () {
        };
        ae.extend = function (e) {
            function t() {
                !se && this.init && this.init.apply(this, arguments)
            }

            se = 1;
            var s = new this;
            se = 0;
            for (var a in e) s[a] = e[a];
            return t.prototype = s, t.prototype.constructor = t, t.extend = arguments.callee, t
        };
        var ie = E.Event = ae.extend({
                on: function (e, t) {
                    var a = this.handlers || (this.handlers = {});
                    return a[e] === s && (a[e] = []), a[e].push(t), this
                }, trigger: function (e, t) {
                    var s = (this.handlers || (this.handlers = {}))[e];
                    if (s) for (var a = 0; a < s.length && s[a].call(this, t) !== !1; a++) ;
                    return this
                }
            }), ne = E.Model = ie.extend({
                init: function (e) {
                    this.data = e
                }, reset: function (e) {
                    this.data = e, this.trigger("reset")
                }, remove: function (e) {
                    this.data.splice(e, 1), this.trigger("reset")
                }, set: function (e, t) {
                    if (t === s) for (var a in e) this.data[a] = e[a]; else this.data[e] = t;
                    this.trigger("reset")
                }
            }), re = E.events = new ie, oe = E.site = new ne, de = E.visitor = new ne, le = E.unread = new ne,
            ce = E.threads = {}, ue = E.postPool = {}, pe = E.users = {};
        re.on("queryDefined", function () {
            var e = p.short_name;
            if (E.hostUrl = e ? y + "//" + e + "." + E.DOMAIN : E.REMOTE, p.theme && d(p.theme), v) {
                var t = v["ds_site_" + e], s = v["ds_lang_" + e];
                t && oe.reset(m.parse(t)), s && i(I, m.parse(s))
            }
        }), Y(), E.loaded.jQuery && (E.jQuery = e.jQuery), E.require("jQuery", function () {
            function l(e, t, s) {
                if (!e.find(".ds-post[data-post-id=" + t.post_id + "]")[0]) return e.find(".ds-post-placeholder").remove(), y(K.post(t, s)).hide()["asc" == s.order ? "appendTo" : "prependTo"](e).slideDown(function () {
                })
            }

            function u(e, t) {
                var s;
                this.delegate("a.ds-post-likes", "click", function (e) {
                    if (r()) return f(), !1;
                    var t = y(this).parent();
                    return liked = t.hasClass("ds-post-liked"), matches = y(this).html().match(/\((\d+)\)/), likes = (matches ? parseInt(matches[1]) : 0) + (liked ? -1 : 1), z("/api/posts/vote", {
                        post_id: t.closest(".ds-ctx-entry, .ds-post-self").attr("data-post-id"),
                        vote: liked ? 0 : 1
                    }), y(this).html(y(this).html().replace(/\(\d+\)/, "") + (likes ? "(" + likes + ")" : "")), t[liked ? "removeClass" : "addClass"]("ds-post-liked"), !1
                }).delegate("a.ds-post-repost", "click", function (e) {
                    var t = y(this).closest(".ds-post-self"), s = ue[t.attr("data-post-id")];
                    return E.repostDialog(s, ""), !1
                }).delegate("a.ds-post-delete", "click", function (t) {
                    if (confirm("确定要删除这条评论吗？")) {
                        var s = y(this).closest(".ds-post-self");
                        z("/api/posts/remove", {post_id: s.attr("data-post-id")}), s.parent().fadeOut(200, function () {
                            e.data.comments--, e.updateCounter("duoshuo"), y(this).remove()
                        })
                    }
                    return !1
                }).delegate("a.ds-post-report", "click", function (e) {
                    if (confirm("确定要举报这条评论吗？")) {
                        var t = y(this).closest(".ds-post-self");
                        z("/api/posts/report", {post_id: t.attr("data-post-id")}), alert("感谢您的反馈！")
                    }
                    return !1
                }).delegate("a.ds-post-reply", "click", function (a) {
                    var i = y(this), n = i.closest(".ds-comment-actions");
                    if (n.hasClass("ds-reply-active")) s.el.fadeOut(200, function () {
                        y(this).detach()
                    }), n.removeClass("ds-reply-active"); else {
                        var r = i.closest(".ds-ctx-entry, .ds-post-self");
                        s ? s.actionsBar.removeClass("ds-reply-active") : (s = new B.Replybox(e), s.render(!0).el.addClass("ds-inline-replybox").detach()), s.el.find("[name=parent_id]").val(r.attr("data-post-id")), s.el.show().appendTo(i.closest(".ds-ctx-body, .ds-comment-body")).find("textarea").focus(), s.actionsBar = n.addClass("ds-reply-active"), t.max_depth <= 1 ? s.postList = e.postList.el : (s.postList = r.siblings(".ds-children"), s.postList[0] || (s.postList = y('<ul class="ds-children"></ul>').insertAfter(r)))
                    }
                    return !1
                }).delegate("a.ds-weibo-comments", "click", function (e) {
                    var s = y(this).closest(".ds-post-self"), a = s.attr("data-post-id");
                    s.data("source");
                    if (0 == s.attr("data-root-id")) {
                        var i = s.siblings(".ds-children");
                        i[0] ? i.remove() : (i = y('<ul class="ds-children"></ul>').insertAfter(s), N("/api/posts/listComments", b({post_id: a}), function (e) {
                            R(e), i.append(y.map(e.response, function (e) {
                                return K.post(e, t)
                            }).join(""))
                        }))
                    }
                    return !1
                }).delegate("a.ds-weibo-reposts", "click", function (t) {
                    var s = y(this).closest(".ds-post-self"), a = ue[s.attr("data-post-id")], i = a.data.source;
                    if (!de.data.social_uid["qqt" == i ? "qq" : i]) return void m(i);
                    var n = a.data.root_id, r = "0" != n ? ue[n] : a, o = "";
                    if ("0" != n) {
                        var d = ee(a.data);
                        o = ("weibo" == i ? "//@" + d.name : "|| @" + d.qqt_account) + ":" + a.data.message
                    }
                    return E.repostDialog(r, o, e, i), !1
                }).delegate("a.ds-expand", "click", function (e) {
                    var t = y(this).parent();
                    return t.siblings().show(), t.remove(), !1
                }), M.touch || this.delegate("a.ds-comment-context, .ds-avatar, .ds-user-name", "mouseenter", function (t) {
                    var s = this;
                    if (bubbleOutTimer && fe.owner == s) clearTimeout(bubbleOutTimer), bubbleOutTimer = 0; else {
                        var a = y(s);
                        ge = setTimeout(function () {
                            ge = 0, fe.owner = s, be();
                            var t = a.offset(), i = e.el.offset(), n = a.innerWidth() / 2,
                                r = e.el.innerHeight() - (t.top - i.top) + 6,
                                o = t.left - i.left - 35 + (n > 35 ? 35 : n);
                            try {
                                if (a.hasClass("ds-comment-context")) ve.attr("id", "ds-ctx-bubble").attr("data-post-id", a.attr("data-post-id")).html('<ul id="ds-ctx">' + K.ctxPost(ue[a.attr("data-parent-id")].data) + '</ul><div class="ds-bubble-footer"><a class="ds-ctx-open" href="javascript:void(0);">查看对话</a></div>'); else if (a.hasClass("ds-avatar") || a.hasClass("ds-user-name")) {
                                    var d = {}, l = d.user_id = a.attr("data-user-id");
                                    if (!l) throw"no info";
                                    ve.attr("id", "ds-user-card").attr("data-user-id", l).empty(), pe[l] ? ve.html(K.userInfo(pe[l].data)) : N("/api/users/profile", b(d), function (e) {
                                        var t = e.response;
                                        pe[l] ? pe[l].set(t) : pe[l] = new ne(t), fe.owner == s && ve.html(K.userInfo(t))
                                    })
                                }
                                fe.css({bottom: r, left: o}).appendTo(e.innerEl)
                            } catch (e) {
                                fe.detach()
                            }
                        }, 200)
                    }
                }).delegate("a.ds-comment-context, .ds-avatar, .ds-user-name", "mouseleave", function () {
                    ge ? (clearTimeout(ge), ge = 0) : bubbleOutTimer || bubbleOut()
                })
            }

            function m(e) {
                var t = K[r() ? "loginUrl" : "bindUrl"](e);
                M.authInWin && J(e, t) || (h.href = t)
            }

            function f() {
                var e = D("<h2>社交帐号登录</h2>" + K.serviceList() + K.additionalServices()).el.find(".ds-dialog").css("width", "300px");
                Z(e)
            }

            function b(e) {
                var s = {
                    require: "site,visitor,nonce,serverTime,lang" + (_e++ ? "" : ",unread,log,extraCss"),
                    site_ims: v && v["ds_site_" + p.short_name + ":timestamp"],
                    lang_ims: v && v["ds_lang_" + p.short_name + ":timestamp"],
                    referer: t.referrer
                };
                p.stylePatch && (s.style_patch = p.stylePatch);
                for (var a in s) s[a] && (!c || encodeURIComponent(s[a]).length < 200) && (e[a] = s[a]);
                return e
            }

            var y = E.jQuery, C = y(e), j = y(t), R = E.loadRequire = function (e) {
                if (e.serverTime && (w = (new Date).getTime() - 1e3 * e.serverTime), e.visitor && (!de.data && e.visitor.user_id && g && !g.checkPermission() && H({logged_user_id: e.visitor.user_id}), de.reset(e.visitor)), e.site && (oe.reset(e.site), o("ds_site_" + p.short_name, e.site, e.serverTime)), !E.theme && oe.data.theme && d(oe.data.theme), e.lang && (i(I, e.lang), o("ds_lang_" + p.short_name, e.lang, e.serverTime)), e.stylesheets) for (var t = 0; t < e.stylesheets.length; t++) E.injectStylesheet(e.stylesheets[t]);
                e.nonce && (E.nonce = e.nonce), e.style && E.setCustomStyle((e.style || "") + E.compileStyle(p.component_style)), e.unread && le.reset(e.unread)
            }, A = function (e) {
                e.stopPropagation()
            }, W = function (e) {
                (e.ctrlKey && 13 == e.which || 10 == e.which) && y(this.form).trigger("submit")
            }, $ = function (e) {
                var t = y(this);
                t.height(Math.max(54, t.next(".ds-hidden-text").text(this.value).height() + 27))
            }, J = function (t, s) {
                var a = {
                    weibo: [760, 600],
                    renren: [420, 322],
                    qq: [504, 445],
                    netease: [810, 645],
                    sohu: [972, 600],
                    google: [600, 440],
                    taobao: [480, 585]
                }[t] || [550, 400];
                return e.open(s + (s.indexOf("?") == -1 ? "?" : "&") + E.param({origin: h.origin || "http://" + h.host}), "_blank", "width=" + a[0] + ",height=" + a[1] + ",toolbar=no,menubar=no,location=yes")
            }, Z = function (e, t) {
                M.authInWin && e.find(t || "a.ds-service-link").click(function (e) {
                    var t = this.href.match(/\/(login|bind)\/(\w+)\//i);
                    if (t && E.serviceNames[t[2]]) return !J(t[2], this.href)
                })
            }, se = function (e) {
                return M.touch && e.addClass("ds-touch"), U("transition") || e.addClass("ds-no-transition"), c && e.addClass("ds-ie6"), y.support.opacity || e.addClass("ds-no-opacity"), e
            }, ae = function (e) {
                if (!M.placeholder) {
                    var t = e.attr("placeholder");
                    e.val(t).focus(function () {
                        this.value === t && (this.value = "")
                    }).blur(function () {
                        "" === this.value && (this.value = t)
                    })
                }
                return e
            };
            if (e.postMessage) {
                var re = function (e) {
                    if ("http://duoshuo.com" === e.origin) switch (e.data.type) {
                        case"login":
                            h.href = e.data.redirectUrl
                    }
                };
                e.addEventListener ? e.addEventListener("message", re, !1) : e.attachEvent && e.attachEvent("onmessage", re)
            }
            E.scrollTo = function (e) {
                var t = e.offset().top;
                (t < C.scrollTop() || t > C.scrollTop() + C.height()) && y("html, body").animate({scrollTop: t - 40}, 200, "swing")
            }, E.toJSON = function (e) {
                var t = /\r?\n/g,
                    s = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                    a = /^(?:select|textarea)/i, i = e.map(function () {
                        return this.elements ? y.makeArray(this.elements) : this
                    }).filter(function () {
                        return this.name && !this.disabled && (this.checked || a.test(this.nodeName) || s.test(this.type))
                    }).map(function (e, s) {
                        var a = y(this).val();
                        return null == a ? null : y.isArray(a) ? y.map(a, function (e, a) {
                            return {name: s.name, value: e.replace(t, "\r\n")}
                        }) : {name: s.name, value: a.replace(t, "\r\n")}
                    }).toArray(), n = {};
                return y.each(i, function () {
                    n[this.name] = this.value
                }), n
            };
            var he = E.Widget = ie.extend({
                init: function (e, t) {
                    this.el = e, this.options = t || {}, this.render()
                }, render: function () {
                }, reset: function () {
                }, load: function (e) {
                    switch (e.code) {
                        case 0:
                            R(e), this.onload(e);
                            break;
                        default:
                            this.onError(e)
                    }
                }, onload: function (e) {
                    this.el.html(K[this.tmpl].call(K, e.response, y.extend(this.options, e.options)))
                }, onMessage: function () {
                }, onError: function (e) {
                    V("出错啦(" + e.code + "): " + e.errorMessage), e.errorTrace && V(e.errorTrace)
                }
            }), me = function (e) {
                var t = {
                    "unread-comments": {
                        title: "新留言及回复", apiUrl: "/api/users/unreadComments", tmpl: function (e) {
                            return '<li data-thread-id="' + e.thread.thread_id + '">' + y.map(e.authors, K.userAnchor).join("、") + ' 在 <a class="ds-read" href="' + e.thread.url + '#comments" target="_blank">' + k(e.thread.title || "无标题") + '</a> 中回复了你 <a class="ds-delete ds-read" title="知道了" href="javascript:void(0)">知道了</a></li>'
                        }, read: function (e) {
                            var t = e.attr("data-thread-id");
                            z("/api/threads/read", {thread_id: t}), le.data.comments--
                        }
                    },
                    "unread-notifications": {
                        title: "系统消息",
                        apiUrl: "/api/users/unreadNotifications",
                        tmpl: function (e) {
                            return '<li data-notification-id="' + e.notification_id + '" data-notification-type="' + e.type + '">' + e.content + ' <a class="ds-delete ds-read" title="知道了" href="javascript:void(0)">知道了</a></li>'
                        },
                        read: function (e) {
                            var t = e.attr("data-notification-id");
                            z("/api/notifications/read", {notification_id: t}), le.data.notifications--
                        }
                    }
                }[e], s = D("<h2>" + t.title + '</h2><ul class="ds-unread-list"></ul>');
                s.on("close", E.resetNotify);
                var a = s.el.find(".ds-unread-list").delegate(".ds-delete", "click", function (e) {
                    return y(this).parent().remove(), 0 === a.children().length && s.close(), !1
                }).delegate(".ds-read", "click", function (e) {
                    t.read(y(this).parent())
                });
                y("#ds-notify").hide(), N(t.apiUrl, {}, function (e) {
                    s.el.find(".ds-unread-list").html(y.map(e.response, t.tmpl).join("\n"))
                }), g && g.checkPermission() && g.requestPermission(n)
            };
            E.resetNotify = function () {
                var e = y("#ds-notify"), s = le.data;
                e[0] || (e = y('<div id="ds-notify"></div>').css({
                    hidden: {display: "none"},
                    "top-right": {top: "24px", right: "24px"},
                    "bottom-right": {bottom: "24px", right: "24px"}
                }[oe.data.notify_position]).delegate(".ds-notify-unread a", "click", function (e) {
                    return me(y(this).data("type")), !1
                }).appendTo(t.body)), e.html('<div id="ds-reset"><a class="ds-logo" href="http://duoshuo.com/" target="_blank" title="多说"></a><ul class="ds-notify-unread"><li' + (s.comments ? "" : ' style="display:none;"') + '><a data-type="unread-comments" href="javascript:void(0);">你有' + s.comments + "条新回复</a></li><li" + (s.notifications ? "" : ' style="display:none;"') + '><a data-type="unread-notifications" href="javascript:void(0);">你有' + s.notifications + "条系统消息</a></li></ul></div>")[!s.comments && !s.notifications || "hidden" === oe.data.notify_position || y(".ds-dialog")[0] ? "hide" : "show"]()
            }, le.on("reset", E.resetNotify), K.replybox = function (e, t) {
                var s, a = e.options, i = de.data, n = [], o = "",
                    d = {thread_id: e.threadId, parent_id: "", nonce: E.nonce};
                for (var l in i.repostOptions) i.repostOptions[l] && (n.push(l), s = 1), o += K.serviceIcon(l, !i.repostOptions[l]);
                return '<div class="ds-replybox"><a class="ds-avatar"' + (r() ? ' href="javascript:void(0);" onclick="return false"' : ' href="' + E.REMOTE + "/settings/avatar/" + X(G()) + '" target="_blank" title="设置头像"') + ">" + K.avatarImg(i) + '</a><form method="post">' + te(d) + '<div class="ds-textarea-wrapper ds-rounded-top"><textarea name="message" title="Ctrl+Enter快捷提交" placeholder="' + k(I.leave_a_message) + '"></textarea><pre class="ds-hidden-text"></pre></div><div class="ds-post-toolbar"><div class="ds-post-options ds-gradient-bg"><span class="ds-sync">' + (!r() && o ? '<input id="ds-sync-checkbox' + (t ? "-inline" : "") + '" type="checkbox" name="repost" ' + (s ? 'checked="checked" ' : "") + 'value="' + n.join(",") + '"> <label for="ds-sync-checkbox' + (t ? "-inline" : "") + '">' + I.share_to + "</label>" + o : "") + '</span></div><button class="ds-post-button" type="submit">' + k(I.post) + '</button><div class="ds-toolbar-buttons">' + (a.use_smilies ? '<a class="ds-toolbar-button ds-add-emote" title="插入表情"></a>' : "") + (a.use_images && a.parse_html_enabled ? '<a class="ds-toolbar-button ds-add-image" title="插入图片"></a>' : "") + "</div></div></form></div>"
            }, B.Replybox = function (e) {
                this.embedThread = e
            }, B.Replybox.prototype = {
                render: function (e) {
                    function s(e) {
                        e.data("submitting", !0), e.find(".ds-post-button").addClass("ds-waiting").html(I.posting)[0].disabled = !0
                    }

                    function a(e) {
                        e.data("submitting", !1), e.find(".ds-post-button").removeClass("ds-waiting").html(I.post)[0].disabled = !1
                    }

                    var i = this, n = i.embedThread, o = n.options, d = function (e) {
                            E.require("smilies", function () {
                            })
                        }, c = i.el = y(K.replybox(n, e)).click(d), u = c.find("form"),
                        p = u.find("input[type=checkbox]")[0], h = u.find("a.ds-service-icon, a.ds-service-icon-grey"),
                        m = ae(u.find("textarea")).focus(d).keyup(W).keyup($).bind("focus mousedown mouseup keyup", q),
                        f = c.find(".ds-add-emote").click(function (e) {
                            var s = E.smiliesTooltip;
                            return f.toggleClass("ds-expanded").hasClass("ds-expanded") ? (s || (s = E.smiliesTooltip = new B.SmiliesTooltip, s.render(), E.require("smilies", function () {
                                s.reset("微博-默认")
                            })), s.replybox = i, s.el.appendTo(t.body).css({
                                top: i.el.offset().top + i.el.outerHeight() + 4 + "px",
                                left: i.el.find(".ds-textarea-wrapper").offset().left + "px"
                            }), y(t.body).click(g)) : g(e), !1
                        }), g = (c.find(".ds-add-image").click(function (e) {
                            var s = m[0], a = s.value, i = "请输入图片地址", n = '<img src="' + i + '" />';
                            if (t.selection) {
                                s.value = a.substring(0, T.start) + n + a.substring(T.end, a.length), s.value = s.value.replace("说点什么吧 ...", ""), s.focus();
                                var r = t.selection.createRange();
                                r.collapse(), r.findText(i), r.select()
                            } else {
                                s.value = a.substring(0, s.selectionStart) + n + a.substring(s.selectionEnd);
                                var o = s.value.search(i);
                                s.setSelectionRange(o, o + i.length), s.focus()
                            }
                            e.preventDefault()
                        }), i.hideSmilies = function (e) {
                            f.removeClass("ds-expanded"), E.smiliesTooltip.el.detach(), y(t.body).unbind("click", g)
                        }), b = function (e, t) {
                            var s = D('<h2>社交帐号登录</h2><div class="ds-icons-32">' + y.map(["weibo", "qq", "renren", "kaixin", "douban", "netease", "sohu"], function (e) {
                                    return '<a class="ds-' + e + '" href="' + K.loginUrl(e) + '">' + E.sourceName[e] + "</a>"
                                }).join("") + "</div>" + (o.deny_anonymous ? "" : '<h2>作为游客留言</h2><form><div class="ds-control-group"><input type="text" name="author_name" id="ds-dialog-name" value="' + k(de.data.name) + '" required /><label for="ds-dialog-name">名字(必填)</label></div>' + (o.require_guest_email ? '<div class="ds-control-group"><input type="email" name="author_email" id="ds-dialog-email" value="' + k(de.data.email) + '" required /><label for="ds-dialog-email">邮箱(必填)</label></div>' : "") + (o.require_guest_url ? '<div class="ds-control-group"><input type="url" name="author_url" id="ds-dialog-url" placeholder="http://" value="' + k(de.data.url || "") + '" /><label for="ds-dialog-url">网址(可选)</label></div>' : "") + '<button type="submit">发布</button></form>')),
                                a = s.el.find(".ds-dialog").css("width", "320px");
                            if (Z(a, ".ds-icons-32 a"), !o.deny_anonymous) {
                                var i = s.el.find("form");
                                i.submit(function (e) {
                                    var a = i.find("input[name=author_email]").val();
                                    return !a && !o.require_guest_email || a.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? (t(E.toJSON(i)), s.close(), !1) : (alert("请输入一个有效的email地址."), !1)
                                }), i.find("input[name=author_name]")[0].focus()
                            }
                        };
                    o.deny_anonymous && m.focus(function (e) {
                        if (r()) {
                            b(u, _);
                            var t = function (e) {
                                e.stopPropagation(), m.unbind("click", t)
                            };
                            m.click(t)
                        }
                        return !1
                    });
                    var _ = function (e) {
                        s(u), z("/api/posts/create", y.extend(E.toJSON(u), e), function (e) {
                            var t = e.response, s = l(i.postList, t, o);
                            if ("asc" == o.order == ("top" == o.formPosition) && E.scrollTo(s), ue[t.post_id] = new ne(t), n.data.comments++, n.updateCounter("duoshuo"), m.val("").trigger("keyup"), a(u), c.hasClass("ds-inline-replybox") && (c.detach(), i.actionsBar.removeClass("ds-reply-active")), v) try {
                                v.removeItem("ds_draft_" + n.threadId)
                            } catch (e) {
                            }
                        }, function (e) {
                            a(u), alert(e.errorMessage)
                        })
                    };
                    u.submit(function (e) {
                        if (u.data("submitting")) return !1;
                        var t = y.trim(u[0].message.value);
                        return "" == t || !M.placeholder && t == m.attr("placeholder") ? (alert("您还没写内容呢"), !1) : (r() ? b(u, _) : _(), !1)
                    });
                    var w = function (e) {
                        return y(e).hasClass("ds-service-icon-grey") ? null : y(e).attr("data-service")
                    };
                    return h.click(function () {
                        return y(this).toggleClass("ds-service-icon-grey").toggleClass("ds-service-icon"), p.value = y.map(h, w).join(","), p.checked = "" != p.value, !1
                    }), y(p).change(function () {
                        var e = this.checked;
                        h[e ? "removeClass" : "addClass"]("ds-service-icon-grey")[e ? "addClass" : "removeClass"]("ds-service-icon"), this.value = y.map(h, w).join(",")
                    }), this
                }
            }, B.Dialog = ie.extend({
                init: function (e, t) {
                    (this.el = y("#ds-wrapper"))[0] || (this.el = se(y('<div id="ds-wrapper"></div>'))), this.options = y.extend({width: 600}, t), e !== s && y(e).attr("id", "ds-reset").appendTo(this.el)
                }, open: function () {
                    var e = this;
                    e.el.hide().appendTo(t.body).fadeIn(200), c && e.el.css("top", C.scrollTop() + 100), e.el.show().find(".ds-dialog").delegate("a.ds-dialog-close", "click", function (t) {
                        return e.close(), !1
                    }).click(A);
                    var s = function (t) {
                        if (27 == t.which) return e.close(), !1
                    }, a = function (t) {
                        return e.close(), !1
                    };
                    return j.keydown(s), y(t.body).click(a), e.close = function (i) {
                        j.unbind("keydown", s), y(t.body).unbind("click", a), e.el.fadeOut(200, function () {
                            y(this).remove()
                        }), e.trigger("close")
                    }, e
                }
            }), K.likePanel = function (e) {
                return e.likes ? '<span class="ds-highlight">' + e.likes + "</span> 人喜欢" : ""
            }, K.likeTooltip = function (e) {
                var t = {
                    qzone: "QQ空间",
                    weibo: "新浪微博",
                    qqt: "腾讯微博",
                    renren: "人人网",
                    kaixin: "开心网",
                    douban: "豆瓣网",
                    baidu: "百度搜藏",
                    netease: "网易微博",
                    sohu: "搜狐微博"
                }, s = [];
                for (var a in t) s.push('<li><a class="ds-share-to-' + a + " ds-service-link ds-" + a + '" href="' + E.hostUrl + "/share-proxy/?" + E.param({
                    service: a,
                    thread_id: e.thread_id
                }) + '">' + t[a] + "</a></li>");
                var i = Math.ceil(s.length / 2);
                return '<div class="ds-like-tooltip ds-rounded"><p>很高兴你能喜欢，分享一下吧：</p><ul>' + s.slice(0, i).join("") + "</ul><ul>" + s.slice(i).join("") + '</ul><p class="ds-like-tooltip-footer"><a class="ds-like-tooltip-close">算了</a></p></div>'
            }, B.Meta = function (e) {
                this.embedThread = e
            }, B.Meta.prototype = {
                render: function () {
                    var a = this, i = a.embedThread, n = i.data,
                        o = a.el = y('<div class="ds-meta"><a href="javascript:void(0)" class="ds-like-thread-button ds-rounded' + (n.user_vote > 0 ? " ds-thread-liked" : "") + '"><span class="ds-icon ds-icon-heart"></span> <span class="ds-thread-like-text">' + (n.user_vote > 0 ? "已喜欢" : "喜欢") + '</span><span class="ds-thread-cancel-like">取消喜欢</span></a><span class="ds-like-panel"></span></div>'),
                        d = o.find(".ds-like-thread-button").click(function (r) {
                            var l = d.hasClass("ds-thread-liked");
                            z("/api/threads/vote", {thread_id: i.threadId, vote: l ? 0 : 1}, function (e) {
                                y.each(e.response.thread, function (e, t) {
                                    n[e] = t
                                }), a.resetLikePanel()
                            }), d.toggleClass("ds-thread-liked"), d.find(".ds-thread-like-text").text(l ? "喜欢" : "已喜欢");
                            var c = function (e) {
                                a.tooltip.detach(), y(t.body).unbind("click", c)
                            };
                            return l ? a.tooltip && c(r) : (a.tooltip === s && (a.tooltip = y(K.likeTooltip(n)).click(A).delegate("a", "click", function (t) {
                                switch (this.className) {
                                    case"ds-like-tooltip-close":
                                        c(t);
                                        break;
                                    default:
                                        if (!e.open(this.href, "_blank", "height=500,width=600,top=0,left=0,toolbar=no,menubar=no,resizable=yes,location=yes,status=no")) return
                                }
                                return !1
                            })), a.tooltip.appendTo(i.innerEl).css({
                                top: o.position().top + o.outerHeight() - 4 + "px",
                                left: 0
                            }), y(t.body).click(c)), !1
                        });
                    return a.resetLikePanel(), r() && o.hide(), a
                }, resetLikePanel: function () {
                    this.el.find(".ds-like-panel").html(K.likePanel(this.embedThread.data))
                }
            }, K.postListHead = function (e) {
                var t = e.data, s = e.options;
                return '<div class="ds-comments-info"><div class="ds-sort"><a class="ds-order-desc">' + I.latest + '</a><a class="ds-order-asc">' + I.earliest + '</a><a class="ds-order-hot">' + I.hottest + '</a></div><ul class="ds-comments-tabs"><li class="ds-tab"><a class="ds-comments-tab-duoshuo ds-current" href="javascript:void(0);"></a></li>' + (s.show_reposts && t.reposts ? '<li class="ds-tab"><a class="ds-comments-tab-repost" href="javascript:void(0);"></a></li>' : "") + (s.show_weibo && t.weibo_reposts ? '<li class="ds-tab"><a class="ds-comments-tab-weibo" href="javascript:void(0);"></a></li>' : "") + (s.show_qqt && t.qqt_reposts ? '<li class="ds-tab"><a class="ds-comments-tab-qqt" href="javascript:void(0);"></a></li>' : "") + "</ul></div>"
            }, B.PostListHead = function (e) {
                this.embedThread = e
            }, B.PostListHead.prototype = {
                render: function () {
                    var e = this.embedThread, t = e.options, s = e.postList, a = this.el = y(K.postListHead(e)),
                        i = a.find("ul.ds-comments-tabs").delegate(".ds-tab a", "click", function (t) {
                            i.find("a.ds-current").removeClass("ds-current"), s.params.page = 1;
                            var a = t.currentTarget;
                            switch (a.className) {
                                case"ds-comments-tab-duoshuo":
                                    s.params.source = "duoshuo", e.replybox.el.show();
                                    break;
                                case"ds-comments-tab-repost":
                                    s.params.source = "repost", e.replybox.el.hide();
                                    break;
                                case"ds-comments-tab-weibo":
                                    s.params.source = "weibo", e.replybox.el.hide();
                                    break;
                                case"ds-comments-tab-qqt":
                                    s.params.source = "qqt", e.replybox.el.hide()
                            }
                            return y(a).addClass("ds-current"), s.refetch(), !1
                        }), n = a.find(".ds-sort").delegate("a", "click", function (e) {
                            return n.find("a.ds-current").removeClass("ds-current"), s.params.order = t.order = this.className.replace("ds-order-", ""), s.params.page = 1, s.refetch(), y(this).addClass("ds-current"), !1
                        });
                    return n.find(".ds-order-" + s.params.order).addClass("ds-current"), this
                }
            }, B.Paginator = function (e) {
                e = e || {};
                var t = this, s = t.el = e.el || y('<div class="ds-paginator"></div>'), a = t.collection = e.collection;
                s.delegate("a", "click", function (e) {
                    return a.params.page = parseInt(this.innerHTML), a.refetch(), s.find(".ds-current").removeClass("ds-current"), y(this).addClass("ds-current"), !1
                })
            }, B.Paginator.prototype = {
                reset: function (e) {
                    function t(e) {
                        i.push('<a data-page="' + e + '" href="javascript:void(0);">' + e + "</a>")
                    }

                    var s, a = this.collection.params.page || 1, i = [];
                    if (a > 1) for (t(1), s = a > 4 ? a - 2 : 2, s > 2 && i.push('<span class="page-break">...</span>'); s < a; s++) t(s);
                    if (i.push('<a data-page="' + a + '" href="javascript:void(0);" class="ds-current">' + a + "</a>"), a < e.pages) {
                        for (s = a + 1; s <= a + 4 && s < e.pages; s++) t(s);
                        s < e.pages && i.push('<span class="page-break">...</span>'), t(e.pages)
                    }
                    this.el.html('<div class="ds-border"></div>' + i.join(" "))[e.pages > 1 ? "show" : "hide"]()
                }
            }, K.smiliesTooltip = function (e) {
                var t = '<div id="ds-smilies-tooltip"><ul class="ds-smilies-tabs">';
                for (var s in e) t += "<li><a>" + s + "</a></li>";
                return t + '</ul><div class="ds-smilies-container"></div></div>'
            }, E.addSmilies = function (e, t) {
                var s = E.smiliesTooltip;
                s && s.el.find("ul.ds-smilies-tabs").append("<li><a>" + e + "</a></li>"), E.smilies[e] = t
            }, B.SmiliesTooltip = function () {
            }, B.SmiliesTooltip.prototype = {
                render: function () {
                    var e = this, s = e.el = y(K.smiliesTooltip(F));
                    return s.click(A).find("ul.ds-smilies-tabs").delegate("a", "click", function (t) {
                        e.reset(this.innerHTML)
                    }), s.find(".ds-smilies-container").delegate("img", "click", function (s) {
                        var a = e.replybox, i = a.el.find("textarea")[0], n = i.value;
                        if (t.selection) {
                            i.value = n.substring(0, T.start) + this.title + n.substring(T.end, n.length), i.value = i.value.replace(I.leave_a_message, ""), i.focus();
                            var r = t.selection.createRange();
                            r.moveStart("character", T.start + this.title.length), r.collapse(), r.select()
                        } else {
                            var o = i.selectionStart + this.title.length;
                            i.value = n.substring(0, i.selectionStart) + this.title + n.substring(i.selectionEnd), i.setSelectionRange(o, o)
                        }
                        a.hideSmilies(), i.focus()
                    }), this
                }, reset: function (e) {
                    var t = this.el.find("ul.ds-smilies-tabs");
                    t.find("a.ds-current").removeClass("ds-current"), t.find("a").filter(function () {
                        return this.innerHTML == e
                    }).addClass("ds-current");
                    var s = "<ul>";
                    return y.each(F[e], function (t, a) {
                        var i = 0 === e.indexOf("微博") ? "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/" + a.replace("_org", "_thumb") : S + "/images/smilies/" + a;
                        "WordPress" === e && (t = " " + t + " "), s += '<li><img src="' + i + '" title="' + k(t) + '" /></li>'
                    }), s += "</ul>", this.el.find(".ds-smilies-container").html(s), this
                }
            }, K.postPlaceholder = function () {
                return '<li class="ds-post ds-post-placeholder">' + I.no_comments_yet + "</li>"
            }, K.post = function (e, t) {
                var s = ee(e), a = s.user_id ? ' data-user-id="' + s.user_id + '"' : "", i = s.qqt_account || "",
                    n = K.timeHtml(e.created_at, e.url), r = e.parents || [];
                switch (e.source) {
                    case"duoshuo":
                        n += '<a class="ds-post-reply" href="javascript:void(0);"><span class="ds-icon ds-icon-reply"></span>' + I.reply + "</a>" + K.likePost(e) + '<a class="ds-post-repost" href="javascript:void(0);"><span class="ds-icon ds-icon-share"></span>' + I.repost + '</a><a class="ds-post-report" href="javascript:void(0);"><span class="ds-icon ds-icon-report"></span>' + I.report + "</a>" + (e.privileges.delete ? '<a class="ds-post-delete" href="javascript:void(0);"><span class="ds-icon ds-icon-delete"></span>' + I.delete + "</a>" : "");
                        break;
                    case"qqt":
                    case"weibo":
                        n += '<a class="ds-weibo-comments" href="javascript:void(0);">' + I.comments + (e.type.match(/\-comment$/) ? "" : '(<span class="ds-count">' + e.comments + "</span>)") + '</a><a class="ds-weibo-reposts" href="javascript:void(0);">' + I.reposts + (e.type.match(/\-comment$/) ? "" : '(<span class="ds-count">' + e.reposts + "</span>)") + "</a>"
                }
                return '<li class="ds-post" data-post-id="' + e.post_id + '"><div class="ds-post-self" data-post-id="' + e.post_id + '" data-thread-id="' + e.thread_id + '" data-root-id="' + e.root_id + '" data-source="' + e.source + '"><div class="ds-avatar"' + a + ">" + K.avatar(s) + (E.sourceName[e.source] ? K.serviceIcon(e.source) : "") + '</div><div class="ds-comment-body"><div class="ds-comment-header">' + (s.url ? '<a class="ds-user-name ds-highlight" data-qqt-account="' + i + '" href="' + k(s.url) + '" ' + (s.user_id ? " onclick=\"this.href='" + E.hostUrl + "/user-url/?user_id=" + s.user_id + "';\"" : "") + '  target="_blank"' + a + ">" + k(s.name) + "</a>" : '<span class="ds-user-name"' + a + ' data-qqt-account="' + i + '">' + k(s.name) + "</span>") + '<span class="ua">' + sskadmin(e.author) + '</span><span class="ua">' + ua(e.agent) + '</span><span class="ua">' + os(e.agent) + "</span></div>" + (1 == t.max_depth && t.show_context && r.length ? '<ol id="ds-ctx">' + y.map(r, function (e, t) {
                    return (1 == t && r.length > 2 ? '<li class="ds-ctx-entry"><a href="javascript:void(0);" class="ds-expand">还有' + (r.length - 2) + "条评论</a></li>" : "") + (ue[e] ? K.ctxPost(ue[e].data, t, t && t < r.length - 1) : "")
                }).join("") + "</ol>" : "") + "<p>" + (r.length >= t.max_depth && (!t.show_context || t.max_depth > 1) && e.parent_id && ue[e.parent_id] ? '<a class="ds-comment-context" data-post-id="' + e.post_id + '" data-parent-id="' + e.parent_id + '">' + I.reply_to + k(ee(ue[e.parent_id].data).name) + ": </a>" : "") + e.message + '</p><div class="ds-comment-footer ds-comment-actions' + (e.vote > 0 ? " ds-post-liked" : "") + '">' + n + "</div></div></div>" + (t.max_depth > 1 && (e.childrenArray || e.children) && "weibo" != e.source && "qqt" != e.source ? '<ul class="ds-children">' + y.map(e.childrenArray || e.children, function (e) {
                    return ue[e] ? K.post(ue[e].data, t) : ""
                }).join("") + "</ul>" : "") + "</li>"
            };
            var fe = y('<div id="ds-bubble"><div class="ds-bubble-content"></div><div class="ds-arrow ds-arrow-down ds-arrow-border"></div><div class="ds-arrow ds-arrow-down"></div></div>'),
                ve = fe.find(".ds-bubble-content").delegate("a.ds-ctx-open", "click", function (e) {
                    N("/api/posts/conversation", {post_id: ve.attr("data-post-id")}, function (e) {
                        t.el.find("ol").html(y.map(e.response, K.ctxPost).join("\n"))
                    });
                    var t = D('<h2>查看对话</h2><ol id="ds-ctx"></ol>');
                    return t.el.find(".ds-dialog").css("width", "600px"), t.el.find(".ds-dialog-body").css({
                        "max-height": "350px",
                        _height: "350px",
                        "overflow-y": "auto",
                        "padding-top": "10px"
                    }), !1
                }), ge = bubbleOutTimer = 0, be = function () {
                    bubbleOutTimer && (clearTimeout(bubbleOutTimer), bubbleOutTimer = 0)
                };
            bubbleOut = function () {
                bubbleOutTimer = setTimeout(function () {
                    bubbleOutTimer = 0, fe.detach()
                }, 400)
            }, fe.mouseenter(be).mouseleave(bubbleOut), K.userInfo = function (e) {
                var t = [];
                return y.each(e.social_uid, function (e, s) {
                    t.push('<a href="' + E.REMOTE + "/user-proxy/" + e + "/" + s + '/" target="_blank" class="ds-service-icon ds-' + e + '" title="' + E.sourceName[e] + '"></a>')
                }), '<a href="' + k(e.url) + '" class="ds-avatar" target="_blank">' + K.avatarImg(e) + '</a><a href="' + k(e.url) + '" class="ds-user-name ds-highlight" target="_blank">' + k(e.name) + "</a>" + t.join("") + '<p class="ds-user-card-meta"><a href="' + E.REMOTE + "/profile/" + e.user_id + '/" target="_blank"><span class="ds-highlight">' + e.comments + "</span>条评论</a></p>" + (e.description ? '<p class="ds-user-description">' + k(e.description) + "</p>" : "")
            }, Q.PostList = function (e) {
                e && (e.params && (this.params = e.params), e.embedThread && (this.embedThread = e.embedThread)), this.el = y('<ul class="ds-comments"></ul>')
            }, Q.PostList.prototype = {
                url: "/api/threads/listPosts", render: function () {
                    return u.call(this.el, this.embedThread, this.embedThread.options), this
                }, reset: function (e) {
                    var t = this.embedThread.options;
                    this.el.html(e[0] ? y.map(e, function (e) {
                        return ue[e] ? K.post(ue[e].data, t) : ""
                    }).join("") : K.postPlaceholder())
                }, refetch: function () {
                    var e = this, s = y(K.indicator()).appendTo(t.body).fadeIn(200);
                    e.el.fadeTo(200, .5), N(e.url, e.params, function (t) {
                        a(ue, t.parentPosts || t.relatedPosts), a(pe, t.users), e.reset(t.response), e.embedThread.paginator.reset(t.cursor), e.el.fadeTo(200, 1), E.scrollTo(e.el), s.remove()
                    })
                }
            }, E.repostDialog = function (e, t, s, a) {
                var i = D('<h2>转发到微博</h2><div class="ds-quote"><strong>@' + k(ee(e.data).name) + "</strong>: " + e.data.message + "</div><form>" + te({post_id: e.data.post_id}) + '<div class="ds-textarea-wrapper"><textarea name="message" title="Ctrl+Enter快捷提交" placeholder="' + k(I.repost_reason) + '">' + k(t) + '</textarea><pre class="ds-hidden-text"></pre></div><div class="ds-actions">' + (a ? te({"service[]": a}) : '<label><input type="checkbox" name="service[]" value="weibo"' + (de.data.social_uid.weibo ? ' checked="checked"' : "") + ' /><span class="ds-service-icon ds-weibo"></span>新浪微博</label>  <label><input type="checkbox" name="service[]" value="qqt"' + (de.data.social_uid.qq ? ' checked="checked"' : "") + ' /><span class="ds-service-icon ds-qqt"></span>腾讯微博</label>') + '<button type="submit">' + I.repost + "</button></div></form>"),
                    n = i.el.find("form").submit(function (e) {
                        return a || n.find("[type=checkbox]:checked")[0] ? (z("/api/posts/repost", E.toJSON(n), function (e) {
                            if (s && a) {
                                var t = s.options, i = l(s.postList.el, e.response[a], t);
                                "asc" == t.order == ("top" == t.formPosition) && E.scrollTo(i);
                                var n = s.el.find(".ds-comments-tab-" + a + " span.ds-highlight");
                                n.html(parseInt(n.html()) + 1)
                            }
                        }), i.close(), !1) : (alert("还没有选发布到哪儿呢"), !1)
                    });
                return n.find(".ds-actions [type=checkbox]").change(function (e) {
                    var t = this.value;
                    if (this.checked && !de.data.social_uid["qqt" == t ? "qq" : t]) return void m(t)
                }), ae(n.find("textarea")).keyup(W).keyup($).focus(), !1
            }, K.toolbar = function (e) {
                var t = K.logoutUrl();
                return '<div class="ds-toolbar"><div class="ds-account-control"><span class="ds-icon ds-icon-settings"></span> <span>帐号管理</span><ul><li><a class="ds-bind-more" href="javascript:void(0);" style="border-top: none">绑定更多</a></li><li><a target="_blank" href="' + E.REMOTE + "/settings/" + X(G()) + '">' + k(I.settings) + '</a></li><li><a  href="' + t + '" style="border-bottom: none">登出</a></li></ul></div><div class="ds-visitor">' + (de.data.url ? '<a class="ds-visitor-name" href="' + k(de.data.url) + '" target="_blank">' + k(de.data.name) + "</a>" : '<span class="ds-visitor-name">' + k(de.data.name) + "</span>") + '<a class="ds-unread-comments-count" href="javascript:void(0);" title="新回复"></a></div></div>'
            }, B.EmbedThread = he.extend({
                uri: "/api/threads/listPosts",
                params: "thread-id local-thread-id source-thread-id thread-key category channel-key author-key author-id url limit order max-depth form-position container-url" + (_.match(/MSIE 6\.0/) ? "" : " title image thumbnail"),
                render: function () {
                    var e = this.el.attr("id", "ds-thread").append(K.waitingImg()), t = e.width(),
                        s = e.data("url") || !e.attr("data-thread-id") && y("link[rel=canonical]").attr("href");
                    s ? e.data("url", x(s)) : e.data("container-url", h.href), t && t <= 400 && e.addClass("ds-narrow").data("max-depth", 1)
                },
                updateCounter: function (e) {
                    var t = {
                        duoshuo: ["comments", "评论"],
                        repost: ["reposts", "转载"],
                        weibo: ["weibo_reposts", "新浪微博"],
                        qqt: ["qqt_reposts", "腾讯微博"]
                    };
                    for (var s in t) if (!e || e == s) {
                        var a = this.data[t[s][0]];
                        this.el.find(".ds-comments-tab-" + s).html(this.el.hasClass("ds-narrow") ? '<span class="ds-service-icon ds-' + s + '"></span>' + a : (a ? '<span class="ds-highlight">' + a + "</span>条" : "") + t[s][1])
                    }
                },
                onError: function (e) {
                    this.el.html("评论框出错啦(" + e.code + "): " + e.errorMessage)
                },
                onload: function (t) {
                    var i = this, n = i.threadId = t.thread.thread_id, o = t.cursor, d = i.options = t.options,
                        l = i.innerEl = se(y('<div id="ds-reset"></div>').appendTo(i.el));
                    i.data = t.thread, a(ue, t.parentPosts || t.relatedPosts), a(pe, t.users), i.el.find("#ds-waiting").remove(), d.like_thread_enabled && (i.meta = new B.Meta(i), i.meta.render().el.appendTo(l)), d.hot_posts && t.hotPosts && t.hotPosts.length && (i.hotPosts = new B.HotPosts(y('<div class="ds-rounded"></div>'), {
                        max_depth: 1,
                        show_context: d.show_context
                    }), i.hotPosts.thread = i, i.hotPosts.el.appendTo(l), i.hotPosts.onload({
                        response: t.hotPosts,
                        options: {}
                    })), i.postListHead = new B.PostListHead(i), i.postList = new Q.PostList({
                        embedThread: i,
                        params: {
                            source: "duoshuo",
                            thread_id: n,
                            max_depth: d.max_depth,
                            order: d.order,
                            limit: d.limit
                        }
                    }), i.postList.render().reset(t.response), i.paginator = new B.Paginator({collection: i.postList}), i.paginator.reset(o);
                    var c = i.replybox = new B.Replybox(i), u = c.render().el.find("textarea");
                    if (c.postList = i.postList.el, v) {
                        var p = "ds_draft_" + n;
                        u.bind("focus blur keyup", function (e) {
                            var t = y(e.currentTarget).val();
                            try {
                                v[p] = t
                            } catch (e) {
                            }
                        }), v[p] && u.val(v[p])
                    }
                    if (r()) {
                        var h = y(K.loginButtons()).delegate("a.ds-more-services", "click", function () {
                            return h.find(".ds-additional-services").toggle(), !1
                        });
                        Z(h)
                    } else i.toolbar = y(K.toolbar()).delegate(".ds-account-control", "mouseenter", function () {
                        y(this).addClass("ds-active")
                    }).delegate(".ds-account-control", "mouseleave", function () {
                        y(this).removeClass("ds-active")
                    }).delegate("a.ds-bind-more", "click", function () {
                        var e = D("<h2>绑定更多帐号</h2>" + K.serviceList(1) + K.additionalServices(1) + '<div style="clear:both"></div>').el.find(".ds-dialog").addClass("ds-dialog-bind-more").css("width", "300px");
                        return Z(e), !1
                    }).delegate("a.ds-unread-comments-count", "click", function (e) {
                        return me("unread-comments"), !1
                    });
                    i.postListHead.render().el.appendTo(l)["top" == d.formPosition ? "before" : "after"]('<a name="respond"></a>', i.toolbar || h, c.el).after(i.postList.el, i.paginator.el), i.updateCounter(), t.alerts && y.each(t.alerts, function (e, t) {
                        y('<div class="ds-alert">' + t + "</div>").insertBefore(i.toolbar || h)
                    }), d.message && u.val(d.message).focus(), y(K.poweredBy(d.poweredby_text)).appendTo(l), le.on("reset", function () {
                        var e = le.data.comments || 0;
                        l.find("a.ds-unread-comments-count").html(e).attr("title", e ? "你有" + e + "条新回复" : "你没有新回复").css("display", e ? "inline" : "none")
                    }), d.mzadx_id && (E.require("mzadxN", function () {
                    }), y('<div id="MZADX_' + d.mzadx_id + '" style="margin:0 auto;"></div>').appendTo(l), __mz_rpq = e.__mz_rpq || [], __mz_rpq.push({
                        l: [d.mzadx_id],
                        r: "1",
                        _srv: "MZADX",
                        _callback: function (e, t) {
                        }
                    })), E.thread = i, le.data !== s && le.trigger("reset"), r() || H({visit_thread_id: i.threadId})
                },
                onMessage: function (e) {
                    l(this.postList.el, e, this.options)
                }
            }), K.hotPosts = function (e, t) {
                return '<div class="ds-header ds-gradient-bg">' + I.hot_posts_title + "</div><ul>" + y.map(e, function (e) {
                    return ue[e] ? K.post(ue[e].data, t) : ""
                }).join("") + "</ul>"
            }, B.HotPosts = he.extend({
                params: "show-quote", tmpl: "hotPosts", render: function () {
                    return this.el.attr("id", "ds-hot-posts"), this
                }, onload: function (e) {
                    he.prototype.onload.call(this, e), u.call(this.el.find("ul"), this.thread, this.options)
                }
            }), K.commentList = function (e, t) {
                return y.map(e, function (e) {
                    var s = ee(e);
                    return '<li class="ds-comment' + (t.show_avatars ? " ds-show-avatars" : "") + '" data-post-id="' + e.post_id + '">' + (t.show_avatars ? '<div class="ds-avatar">' + K.avatar(s, t.avatar_size) + "</div>" : "") + '<div class="ds-meta">' + K.userAnchor(s) + (t.show_time ? K.timeHtml(e.created_at) : "") + "</div>" + (t.show_title ? '<div class="ds-thread-title">在 <a href="' + k(e.thread.url + "#comments") + '">' + k(e.thread.title) + '</a> 中评论</div><div class="ds-excerpt">' + e.message + "</div>" : '<a class="ds-excerpt" title="' + k(e.thread.title) + ' 中的评论" href="' + k(e.thread.url + "#comments") + '">' + e.message + "</a>") + "</li>"
                }).join("")
            }, B.RecentComments = he.extend({
                uri: "/api/sites/listRecentPosts",
                params: "show-avatars show-time show-title avatar-size show-admin excerpt-length num-items channel-key",
                tmpl: "commentList",
                render: function () {
                    this.el.attr("id", "ds-recent-comments")
                }
            }), K.recentVisitors = function (e, t) {
                return y.map(e, function (e) {
                    return '<div class="ds-avatar">' + K.avatar(e, t.avatar_size) + "</div>"
                }).join("")
            }, B.RecentVisitors = he.extend({
                uri: "/api/sites/listVisitors",
                params: "show-time avatar-size num-items channel-key",
                tmpl: "recentVisitors",
                render: function () {
                    this.el.children().detach(), this.el.attr("id", "ds-recent-visitors").append(this.waitingEl = y(K.waitingImg()))
                }
            }), K.topUsers = function (e, t) {
                return y.map(e, function (e) {
                    return '<div class="ds-avatar">' + K.avatar(e, t.avatar_size) + "<h4>" + e.name + "</h4></div>"
                }).join("")
            }, B.TopUsers = he.extend({
                uri: "/api/sites/listTopUsers",
                params: "show-time avatar-size num-items channel-key",
                tmpl: "topUsers",
                render: function () {
                    this.el.children().detach(), this.el.attr("id", "ds-top-users").append(this.waitingEl = y(K.waitingImg()))
                }
            }), K.topThreads = function (e, t) {
                return y.map(e, function (e) {
                    return '<li><a target="_blank" href="' + k(e.url) + '" title="' + e.title + '">' + e.title + "</a></li>"
                }).join("")
            }, B.TopThreads = he.extend({
                uri: "/api/sites/listTopThreads",
                params: "range num-items channel-key",
                tmpl: "topThreads",
                render: function () {
                    this.el.children().detach(), this.el.attr("id", "ds-top-threads").append(this.waitingEl = y(K.waitingImg()))
                }
            }), K.loginWidget = function () {
                var e = '<div class="ds-icons-32">';
                return y.each(["weibo", "qq", "renren", "kaixin", "douban", "netease", "sohu"], function (t, s) {
                    e += '<a class="ds-' + s + '" href="' + K.loginUrl(s) + '">' + E.sourceName[s] + "</a>"
                }), e + "</div>"
            }, B.LoginWidget = he.extend({
                tmpl: "loginWidget", render: function () {
                    var e = this.el;
                    e.attr("id", "ds-login").html(K.loginWidget()), Z(e, "a"), e.find("a.ds-logout").attr("href", K.logoutUrl())
                }
            }), B.ThreadCount = he.extend({
                onload: function (e) {
                    var t = this.el, s = t.data("count-type") || "comments", a = e.data[s];
                    t[t.data("replace") ? "replaceWith" : "html"](I[s + "_" + (a ? a > 1 ? "multiple" : "one" : "zero")].replace("{num}", a))
                }
            });
            var _e = 0;
            E.initSelector = function (e, t) {
                var s = [];
                Y() && (y.isReady || !P) && y(e).each(function (e, a) {
                    var i = y(a);
                    if (!i.data("initialized")) {
                        i.data("initialized", !0);
                        var n = new B[t.type](i, t);
                        if (L.push(n), "ThreadCount" === t.type) {
                            var r = i.attr("data-thread-key");
                            i.attr("data-channel-key") && (r = i.attr("data-channel-key") + ":" + r), s.push(r), ce[r] || (ce[r] = new ne({})), ce[r].on("reset", function () {
                                n.onload(this)
                            })
                        } else if (n.uri) {
                            var o = {};
                            y.each(n.params.split(" "), function (e, t) {
                                o[t.replace(/-/g, "_")] = i.attr("data-" + t) || i.data(t)
                            }), N(n.uri, b(o), function (e) {
                                n.load(e)
                            })
                        }
                    }
                }), s.length && N("/api/threads/counts", b({threads: s.join(",")}), function (e) {
                    R(e), i(I, e.options), a(ce, e.response)
                })
            }, (E.initView = function () {
                y.each(O, E.initSelector)
            })(), y(function () {
                return Y() ? (setInterval(function () {
                    y(".ds-time").each(function () {
                        var e = y(this).attr("datetime");
                        e && (this.innerHTML = E.elapsedTime(e))
                    })
                }, 2e4), p.ondomready && p.ondomready(), E.initView(), !_e && p.short_name && N("/api/analytics/ping", b({}), R), void 0) : V("缺少duoshuoQuery的定义")
            })
        })
    }
})(window, document);