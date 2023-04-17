/*!
* Tabler v1.0.0-beta17 (https://tabler.io)
* @version 1.0.0-beta17
* @link https://tabler.io
* Copyright 2018-2023 The Tabler Authors
* Copyright 2018-2023 codecalm.net Paweł Kuna
* Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
*/
!function (t) {
    "function" == typeof define && define.amd ? define(t) : t()
}((function () {
    "use strict";
    var t, e, n = "function" == typeof Map ? new Map : (t = [], e = [], {
        has: function (e) {
            return t.indexOf(e) > -1
        }, get: function (n) {
            return e[t.indexOf(n)]
        }, set: function (n, i) {
            -1 === t.indexOf(n) && (t.push(n), e.push(i))
        }, delete: function (n) {
            var i = t.indexOf(n);
            i > -1 && (t.splice(i, 1), e.splice(i, 1))
        }
    }), i = function (t) {
        return new Event(t, {bubbles: !0})
    };
    try {
        new Event("test")
    } catch (t) {
        i = function (t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !1), e
        }
    }

    function s(t) {
        var e = n.get(t);
        e && e.destroy()
    }

    function r(t) {
        var e = n.get(t);
        e && e.update()
    }

    var o = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((o = function (t) {
        return t
    }).destroy = function (t) {
        return t
    }, o.update = function (t) {
        return t
    }) : ((o = function (t, e) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], (function (t) {
            return function (t) {
                if (t && t.nodeName && "TEXTAREA" === t.nodeName && !n.has(t)) {
                    var e, s = null, r = null, o = null, a = function () {
                        t.clientWidth !== r && h()
                    }, u = function (e) {
                        window.removeEventListener("resize", a, !1), t.removeEventListener("input", h, !1), t.removeEventListener("keyup", h, !1), t.removeEventListener("autosize:destroy", u, !1), t.removeEventListener("autosize:update", h, !1), Object.keys(e).forEach((function (n) {
                            t.style[n] = e[n]
                        })), n.delete(t)
                    }.bind(t, {
                        height: t.style.height,
                        resize: t.style.resize,
                        overflowY: t.style.overflowY,
                        overflowX: t.style.overflowX,
                        wordWrap: t.style.wordWrap
                    });
                    t.addEventListener("autosize:destroy", u, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", h, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", h, !1), t.addEventListener("autosize:update", h, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", n.set(t, {
                        destroy: u,
                        update: h
                    }), "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), s = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(s) && (s = 0), h()
                }

                function l(e) {
                    var n = t.style.width;
                    t.style.width = "0px", t.style.width = n, t.style.overflowY = e
                }

                function c() {
                    if (0 !== t.scrollHeight) {
                        var e = function (t) {
                            for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && (t.parentNode.style.scrollBehavior = "auto", e.push([t.parentNode, t.parentNode.scrollTop])), t = t.parentNode;
                            return function () {
                                return e.forEach((function (t) {
                                    var e = t[0];
                                    e.scrollTop = t[1], e.style.scrollBehavior = null
                                }))
                            }
                        }(t);
                        t.style.height = "", t.style.height = t.scrollHeight + s + "px", r = t.clientWidth, e()
                    }
                }

                function h() {
                    c();
                    var e = Math.round(parseFloat(t.style.height)), n = window.getComputedStyle(t, null),
                        s = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : t.offsetHeight;
                    if (s < e ? "hidden" === n.overflowY && (l("scroll"), c(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== n.overflowY && (l("hidden"), c(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), o !== s) {
                        o = s;
                        var r = i("autosize:resized");
                        try {
                            t.dispatchEvent(r)
                        } catch (t) {
                        }
                    }
                }
            }(t)
        })), t
    }).destroy = function (t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], s), t
    }, o.update = function (t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], r), t
    });
    var a = o, u = document.querySelectorAll('[data-bs-toggle="autosize"]');

    function l(t) {
        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, l(t)
    }

    function c(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function h(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function d(t, e, n) {
        return e && h(t.prototype, e), n && h(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
    }

    function f(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {writable: !1}), e && g(t, e)
    }

    function p(t) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, p(t)
    }

    function g(t, e) {
        return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t
        }, g(t, e)
    }

    function m(t, e) {
        if (null == t) return {};
        var n, i, s = function (t, e) {
            if (null == t) return {};
            var n, i, s = {}, r = Object.keys(t);
            for (i = 0; i < r.length; i++) n = r[i], e.indexOf(n) >= 0 || (s[n] = t[n]);
            return s
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            for (i = 0; i < r.length; i++) n = r[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (s[n] = t[n])
        }
        return s
    }

    function v(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }

    function _(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, i = p(t);
            if (e) {
                var s = p(this).constructor;
                n = Reflect.construct(i, arguments, s)
            } else n = i.apply(this, arguments);
            return v(this, n)
        }
    }

    function b(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t));) ;
        return t
    }

    function y() {
        return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, n) {
            var i = b(t, e);
            if (i) {
                var s = Object.getOwnPropertyDescriptor(i, e);
                return s.get ? s.get.call(arguments.length < 3 ? t : n) : s.value
            }
        }, y.apply(this, arguments)
    }

    function k(t, e, n, i) {
        return k = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (t, e, n, i) {
            var s, r = b(t, e);
            if (r) {
                if ((s = Object.getOwnPropertyDescriptor(r, e)).set) return s.set.call(i, n), !0;
                if (!s.writable) return !1
            }
            if (s = Object.getOwnPropertyDescriptor(i, e)) {
                if (!s.writable) return !1;
                s.value = n, Object.defineProperty(i, e, s)
            } else !function (t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n
            }(i, e, n);
            return !0
        }, k(t, e, n, i)
    }

    function w(t, e, n, i, s) {
        if (!k(t, e, n, i || t) && s) throw new Error("failed to set property");
        return n
    }

    function A(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == n) return;
            var i, s, r = [], o = !0, a = !1;
            try {
                for (n = n.call(t); !(o = (i = n.next()).done) && (r.push(i.value), !e || r.length !== e); o = !0) ;
            } catch (t) {
                a = !0, s = t
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }(t, e) || E(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function E(t, e) {
        if (t) {
            if ("string" == typeof t) return C(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(t, e) : void 0
        }
    }

    function C(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    u.length && u.forEach((function (t) {
        a(t)
    }));
    var S = function () {
        function t(e) {
            c(this, t), Object.assign(this, {inserted: "", rawInserted: "", skip: !1, tailShift: 0}, e)
        }

        return d(t, [{
            key: "aggregate", value: function (t) {
                return this.rawInserted += t.rawInserted, this.skip = this.skip || t.skip, this.inserted += t.inserted, this.tailShift += t.tailShift, this
            }
        }, {
            key: "offset", get: function () {
                return this.tailShift + this.inserted.length
            }
        }]), t
    }();

    function x(t) {
        return "string" == typeof t || t instanceof String
    }

    var T = "NONE", F = "LEFT", D = "FORCE_LEFT", O = "RIGHT", B = "FORCE_RIGHT";

    function M(t) {
        switch (t) {
            case F:
                return D;
            case O:
                return B;
            default:
                return t
        }
    }

    function P(t) {
        return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }

    function I(t) {
        return Array.isArray(t) ? t : [t, new S]
    }

    function L(t, e) {
        if (e === t) return !0;
        var n, i = Array.isArray(e), s = Array.isArray(t);
        if (i && s) {
            if (e.length != t.length) return !1;
            for (n = 0; n < e.length; n++) if (!L(e[n], t[n])) return !1;
            return !0
        }
        if (i != s) return !1;
        if (e && t && "object" === l(e) && "object" === l(t)) {
            var r = e instanceof Date, o = t instanceof Date;
            if (r && o) return e.getTime() == t.getTime();
            if (r != o) return !1;
            var a = e instanceof RegExp, u = t instanceof RegExp;
            if (a && u) return e.toString() == t.toString();
            if (a != u) return !1;
            var c = Object.keys(e);
            for (n = 0; n < c.length; n++) if (!Object.prototype.hasOwnProperty.call(t, c[n])) return !1;
            for (n = 0; n < c.length; n++) if (!L(t[c[n]], e[c[n]])) return !1;
            return !0
        }
        return !(!e || !t || "function" != typeof e || "function" != typeof t) && e.toString() === t.toString()
    }

    var j = function () {
        function t(e, n, i, s) {
            for (c(this, t), this.value = e, this.cursorPos = n, this.oldValue = i, this.oldSelection = s; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
        }

        return d(t, [{
            key: "startChangePos", get: function () {
                return Math.min(this.cursorPos, this.oldSelection.start)
            }
        }, {
            key: "insertedCount", get: function () {
                return this.cursorPos - this.startChangePos
            }
        }, {
            key: "inserted", get: function () {
                return this.value.substr(this.startChangePos, this.insertedCount)
            }
        }, {
            key: "removedCount", get: function () {
                return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
            }
        }, {
            key: "removed", get: function () {
                return this.oldValue.substr(this.startChangePos, this.removedCount)
            }
        }, {
            key: "head", get: function () {
                return this.value.substring(0, this.startChangePos)
            }
        }, {
            key: "tail", get: function () {
                return this.value.substring(this.startChangePos + this.insertedCount)
            }
        }, {
            key: "removeDirection", get: function () {
                return !this.removedCount || this.insertedCount ? T : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos || this.oldSelection.end !== this.oldSelection.start ? F : O
            }
        }]), t
    }(), N = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 ? arguments[2] : void 0;
            c(this, t), this.value = e, this.from = n, this.stop = i
        }

        return d(t, [{
            key: "toString", value: function () {
                return this.value
            }
        }, {
            key: "extend", value: function (t) {
                this.value += String(t)
            }
        }, {
            key: "appendTo", value: function (t) {
                return t.append(this.toString(), {tail: !0}).aggregate(t._appendPlaceholder())
            }
        }, {
            key: "state", get: function () {
                return {value: this.value, from: this.from, stop: this.stop}
            }, set: function (t) {
                Object.assign(this, t)
            }
        }, {
            key: "unshift", value: function (t) {
                if (!this.value.length || null != t && this.from >= t) return "";
                var e = this.value[0];
                return this.value = this.value.slice(1), e
            }
        }, {
            key: "shift", value: function () {
                if (!this.value.length) return "";
                var t = this.value[this.value.length - 1];
                return this.value = this.value.slice(0, -1), t
            }
        }]), t
    }();

    function R(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new R.InputMask(t, e)
    }

    var V = function () {
        function t(e) {
            c(this, t), this._value = "", this._update(Object.assign({}, t.DEFAULTS, e)), this.isInitialized = !0
        }

        return d(t, [{
            key: "updateOptions", value: function (t) {
                Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t))
            }
        }, {
            key: "_update", value: function (t) {
                Object.assign(this, t)
            }
        }, {
            key: "state", get: function () {
                return {_value: this.value}
            }, set: function (t) {
                this._value = t._value
            }
        }, {
            key: "reset", value: function () {
                this._value = ""
            }
        }, {
            key: "value", get: function () {
                return this._value
            }, set: function (t) {
                this.resolve(t)
            }
        }, {
            key: "resolve", value: function (t) {
                return this.reset(), this.append(t, {input: !0}, ""), this.doCommit(), this.value
            }
        }, {
            key: "unmaskedValue", get: function () {
                return this.value
            }, set: function (t) {
                this.reset(), this.append(t, {}, ""), this.doCommit()
            }
        }, {
            key: "typedValue", get: function () {
                return this.doParse(this.value)
            }, set: function (t) {
                this.value = this.doFormat(t)
            }
        }, {
            key: "rawInputValue", get: function () {
                return this.extractInput(0, this.value.length, {raw: !0})
            }, set: function (t) {
                this.reset(), this.append(t, {raw: !0}, ""), this.doCommit()
            }
        }, {
            key: "isComplete", get: function () {
                return !0
            }
        }, {
            key: "isFilled", get: function () {
                return this.isComplete
            }
        }, {
            key: "nearestInputPos", value: function (t, e) {
                return t
            }
        }, {
            key: "extractInput", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return this.value.slice(t, e)
            }
        }, {
            key: "extractTail", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return new N(this.extractInput(t, e), t)
            }
        }, {
            key: "appendTail", value: function (t) {
                return x(t) && (t = new N(String(t))), t.appendTo(this)
            }
        }, {
            key: "_appendCharRaw", value: function (t) {
                return t ? (this._value += t, new S({inserted: t, rawInserted: t})) : new S
            }
        }, {
            key: "_appendChar", value: function (t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = arguments.length > 2 ? arguments[2] : void 0, s = this.state, r = I(this.doPrepare(t, n)),
                    o = A(r, 2);
                if (t = o[0], (e = (e = o[1]).aggregate(this._appendCharRaw(t, n))).inserted) {
                    var a, u = !1 !== this.doValidate(n);
                    if (u && null != i) {
                        var l = this.state;
                        !0 === this.overwrite && (a = i.state, i.unshift(this.value.length));
                        var c = this.appendTail(i);
                        (u = c.rawInserted === i.toString()) && c.inserted || "shift" !== this.overwrite || (this.state = l, a = i.state, i.shift(), u = (c = this.appendTail(i)).rawInserted === i.toString()), u && c.inserted && (this.state = l)
                    }
                    u || (e = new S, this.state = s, i && a && (i.state = a))
                }
                return e
            }
        }, {
            key: "_appendPlaceholder", value: function () {
                return new S
            }
        }, {
            key: "_appendEager", value: function () {
                return new S
            }
        }, {
            key: "append", value: function (t, e, n) {
                if (!x(t)) throw new Error("value should be string");
                var i = new S, s = x(n) ? new N(String(n)) : n;
                null != e && e.tail && (e._beforeTailState = this.state);
                for (var r = 0; r < t.length; ++r) i.aggregate(this._appendChar(t[r], e, s));
                return null != s && (i.tailShift += this.appendTail(s).tailShift), this.eager && null != e && e.input && t && i.aggregate(this._appendEager()), i
            }
        }, {
            key: "remove", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return this._value = this.value.slice(0, t) + this.value.slice(e), new S
            }
        }, {
            key: "withValueRefresh", value: function (t) {
                if (this._refreshing || !this.isInitialized) return t();
                this._refreshing = !0;
                var e = this.rawInputValue, n = this.value, i = t();
                return this.rawInputValue = e, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, i
            }
        }, {
            key: "runIsolated", value: function (t) {
                if (this._isolated || !this.isInitialized) return t(this);
                this._isolated = !0;
                var e = this.state, n = t(this);
                return this.state = e, delete this._isolated, n
            }
        }, {
            key: "doPrepare", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.prepare ? this.prepare(t, this, e) : t
            }
        }, {
            key: "doValidate", value: function (t) {
                return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t))
            }
        }, {
            key: "doCommit", value: function () {
                this.commit && this.commit(this.value, this)
            }
        }, {
            key: "doFormat", value: function (t) {
                return this.format ? this.format(t, this) : t
            }
        }, {
            key: "doParse", value: function (t) {
                return this.parse ? this.parse(t, this) : t
            }
        }, {
            key: "splice", value: function (t, e, n, i) {
                var s, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {input: !0}, o = t + e,
                    a = this.extractTail(o);
                this.eager && (i = M(i), s = this.extractInput(0, o, {raw: !0}));
                var u = this.nearestInputPos(t, e > 1 && 0 !== t && !this.eager ? T : i),
                    l = new S({tailShift: u - t}).aggregate(this.remove(u));
                if (this.eager && i !== T && s === this.rawInputValue) if (i === D) for (var c; s === this.rawInputValue && (c = this.value.length);) l.aggregate(new S({tailShift: -1})).aggregate(this.remove(c - 1)); else i === B && a.unshift();
                return l.aggregate(this.append(n, r, a))
            }
        }, {
            key: "maskEquals", value: function (t) {
                return this.mask === t
            }
        }, {
            key: "typedValueEquals", value: function (e) {
                var n = this.typedValue;
                return e === n || t.EMPTY_VALUES.includes(e) && t.EMPTY_VALUES.includes(n) || this.doFormat(e) === this.doFormat(this.typedValue)
            }
        }]), t
    }();

    function z(t) {
        if (null == t) throw new Error("mask property should be defined");
        return t instanceof RegExp ? R.MaskedRegExp : x(t) ? R.MaskedPattern : t instanceof Date || t === Date ? R.MaskedDate : t instanceof Number || "number" == typeof t || t === Number ? R.MaskedNumber : Array.isArray(t) || t === Array ? R.MaskedDynamic : R.Masked && t.prototype instanceof R.Masked ? t : t instanceof R.Masked ? t.constructor : t instanceof Function ? R.MaskedFunction : (console.warn("Mask not found for mask", t), R.Masked)
    }

    function H(t) {
        if (R.Masked && t instanceof R.Masked) return t;
        var e = (t = Object.assign({}, t)).mask;
        if (R.Masked && e instanceof R.Masked) return e;
        var n = z(e);
        if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
        return new n(t)
    }

    V.DEFAULTS = {
        format: function (t) {
            return t
        }, parse: function (t) {
            return t
        }
    }, V.EMPTY_VALUES = [void 0, null, ""], R.Masked = V, R.createMask = H;
    var q = ["mask"], W = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./
    }, $ = function () {
        function t(e) {
            c(this, t);
            var n = e.mask, i = m(e, q);
            this.masked = H({mask: n}), Object.assign(this, i)
        }

        return d(t, [{
            key: "reset", value: function () {
                this.isFilled = !1, this.masked.reset()
            }
        }, {
            key: "remove", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return 0 === t && e >= 1 ? (this.isFilled = !1, this.masked.remove(t, e)) : new S
            }
        }, {
            key: "value", get: function () {
                return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
            }
        }, {
            key: "unmaskedValue", get: function () {
                return this.masked.unmaskedValue
            }
        }, {
            key: "isComplete", get: function () {
                return Boolean(this.masked.value) || this.isOptional
            }
        }, {
            key: "_appendChar", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.isFilled) return new S;
                var n = this.masked.state, i = this.masked._appendChar(t, e);
                return i.inserted && !1 === this.doValidate(e) && (i.inserted = i.rawInserted = "", this.masked.state = n), i.inserted || this.isOptional || this.lazy || e.input || (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = Boolean(i.inserted), i
            }
        }, {
            key: "append", value: function () {
                var t;
                return (t = this.masked).append.apply(t, arguments)
            }
        }, {
            key: "_appendPlaceholder", value: function () {
                var t = new S;
                return this.isFilled || this.isOptional || (this.isFilled = !0, t.inserted = this.placeholderChar), t
            }
        }, {
            key: "_appendEager", value: function () {
                return new S
            }
        }, {
            key: "extractTail", value: function () {
                var t;
                return (t = this.masked).extractTail.apply(t, arguments)
            }
        }, {
            key: "appendTail", value: function () {
                var t;
                return (t = this.masked).appendTail.apply(t, arguments)
            }
        }, {
            key: "extractInput", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return this.masked.extractInput(t, e, n)
            }
        }, {
            key: "nearestInputPos", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T, n = 0,
                    i = this.value.length, s = Math.min(Math.max(t, n), i);
                switch (e) {
                    case F:
                    case D:
                        return this.isComplete ? s : n;
                    case O:
                    case B:
                        return this.isComplete ? s : i;
                    default:
                        return s
                }
            }
        }, {
            key: "doValidate", value: function () {
                var t, e;
                return (t = this.masked).doValidate.apply(t, arguments) && (!this.parent || (e = this.parent).doValidate.apply(e, arguments))
            }
        }, {
            key: "doCommit", value: function () {
                this.masked.doCommit()
            }
        }, {
            key: "state", get: function () {
                return {masked: this.masked.state, isFilled: this.isFilled}
            }, set: function (t) {
                this.masked.state = t.masked, this.isFilled = t.isFilled
            }
        }]), t
    }(), U = function () {
        function t(e) {
            c(this, t), Object.assign(this, e), this._value = "", this.isFixed = !0
        }

        return d(t, [{
            key: "value", get: function () {
                return this._value
            }
        }, {
            key: "unmaskedValue", get: function () {
                return this.isUnmasking ? this.value : ""
            }
        }, {
            key: "reset", value: function () {
                this._isRawInput = !1, this._value = ""
            }
        }, {
            key: "remove", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                return this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new S
            }
        }, {
            key: "nearestInputPos", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T, n = 0,
                    i = this._value.length;
                switch (e) {
                    case F:
                    case D:
                        return n;
                    default:
                        return i
                }
            }
        }, {
            key: "extractInput", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return n.raw && this._isRawInput && this._value.slice(t, e) || ""
            }
        }, {
            key: "isComplete", get: function () {
                return !0
            }
        }, {
            key: "isFilled", get: function () {
                return Boolean(this._value)
            }
        }, {
            key: "_appendChar", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = new S;
                if (this._value) return n;
                var i = this.char === t,
                    s = i && (this.isUnmasking || e.input || e.raw) && (!e.raw || !this.eager) && !e.tail;
                return s && (n.rawInserted = this.char), this._value = n.inserted = this.char, this._isRawInput = s && (e.raw || e.input), n
            }
        }, {
            key: "_appendEager", value: function () {
                return this._appendChar(this.char, {tail: !0})
            }
        }, {
            key: "_appendPlaceholder", value: function () {
                var t = new S;
                return this._value || (this._value = t.inserted = this.char), t
            }
        }, {
            key: "extractTail", value: function () {
                return arguments.length > 1 && void 0 !== arguments[1] || this.value.length, new N("")
            }
        }, {
            key: "appendTail", value: function (t) {
                return x(t) && (t = new N(String(t))), t.appendTo(this)
            }
        }, {
            key: "append", value: function (t, e, n) {
                var i = this._appendChar(t[0], e);
                return null != n && (i.tailShift += this.appendTail(n).tailShift), i
            }
        }, {
            key: "doCommit", value: function () {
            }
        }, {
            key: "state", get: function () {
                return {_value: this._value, _isRawInput: this._isRawInput}
            }, set: function (t) {
                Object.assign(this, t)
            }
        }]), t
    }(), Y = ["chunks"], K = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            c(this, t), this.chunks = e, this.from = n
        }

        return d(t, [{
            key: "toString", value: function () {
                return this.chunks.map(String).join("")
            }
        }, {
            key: "extend", value: function (e) {
                if (String(e)) {
                    x(e) && (e = new N(String(e)));
                    var n = this.chunks[this.chunks.length - 1],
                        i = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
                    if (e instanceof N) i ? n.extend(e.toString()) : this.chunks.push(e); else if (e instanceof t) {
                        if (null == e.stop) for (var s; e.chunks.length && null == e.chunks[0].stop;) (s = e.chunks.shift()).from += e.from, this.extend(s);
                        e.toString() && (e.stop = e.blockIndex, this.chunks.push(e))
                    }
                }
            }
        }, {
            key: "appendTo", value: function (e) {
                if (!(e instanceof R.MaskedPattern)) return new N(this.toString()).appendTo(e);
                for (var n = new S, i = 0; i < this.chunks.length && !n.skip; ++i) {
                    var s = this.chunks[i], r = e._mapPosToBlock(e.value.length), o = s.stop, a = void 0;
                    if (null != o && (!r || r.index <= o) && ((s instanceof t || e._stops.indexOf(o) >= 0) && n.aggregate(e._appendPlaceholder(o)), a = s instanceof t && e._blocks[o]), a) {
                        var u = a.appendTail(s);
                        u.skip = !1, n.aggregate(u), e._value += u.inserted;
                        var l = s.toString().slice(u.rawInserted.length);
                        l && n.aggregate(e.append(l, {tail: !0}))
                    } else n.aggregate(e.append(s.toString(), {tail: !0}))
                }
                return n
            }
        }, {
            key: "state", get: function () {
                return {
                    chunks: this.chunks.map((function (t) {
                        return t.state
                    })), from: this.from, stop: this.stop, blockIndex: this.blockIndex
                }
            }, set: function (e) {
                var n = e.chunks, i = m(e, Y);
                Object.assign(this, i), this.chunks = n.map((function (e) {
                    var n = "chunks" in e ? new t : new N;
                    return n.state = e, n
                }))
            }
        }, {
            key: "unshift", value: function (t) {
                if (!this.chunks.length || null != t && this.from >= t) return "";
                for (var e = null != t ? t - this.from : t, n = 0; n < this.chunks.length;) {
                    var i = this.chunks[n], s = i.unshift(e);
                    if (i.toString()) {
                        if (!s) break;
                        ++n
                    } else this.chunks.splice(n, 1);
                    if (s) return s
                }
                return ""
            }
        }, {
            key: "shift", value: function () {
                if (!this.chunks.length) return "";
                for (var t = this.chunks.length - 1; 0 <= t;) {
                    var e = this.chunks[t], n = e.shift();
                    if (e.toString()) {
                        if (!n) break;
                        --t
                    } else this.chunks.splice(t, 1);
                    if (n) return n
                }
                return ""
            }
        }]), t
    }(), X = function () {
        function t(e, n) {
            c(this, t), this.masked = e, this._log = [];
            var i = e._mapPosToBlock(n) || (n < 0 ? {index: 0, offset: 0} : {
                index: this.masked._blocks.length,
                offset: 0
            }), s = i.offset, r = i.index;
            this.offset = s, this.index = r, this.ok = !1
        }

        return d(t, [{
            key: "block", get: function () {
                return this.masked._blocks[this.index]
            }
        }, {
            key: "pos", get: function () {
                return this.masked._blockStartPos(this.index) + this.offset
            }
        }, {
            key: "state", get: function () {
                return {index: this.index, offset: this.offset, ok: this.ok}
            }, set: function (t) {
                Object.assign(this, t)
            }
        }, {
            key: "pushState", value: function () {
                this._log.push(this.state)
            }
        }, {
            key: "popState", value: function () {
                var t = this._log.pop();
                return this.state = t, t
            }
        }, {
            key: "bindBlock", value: function () {
                this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.value.length))
            }
        }, {
            key: "_pushLeft", value: function (t) {
                for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (null === (e = this.block) || void 0 === e ? void 0 : e.value.length) || 0) {
                    var e;
                    if (t()) return this.ok = !0
                }
                return this.ok = !1
            }
        }, {
            key: "_pushRight", value: function (t) {
                for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (t()) return this.ok = !0;
                return this.ok = !1
            }
        }, {
            key: "pushLeftBeforeFilled", value: function () {
                var t = this;
                return this._pushLeft((function () {
                    if (!t.block.isFixed && t.block.value) return t.offset = t.block.nearestInputPos(t.offset, D), 0 !== t.offset || void 0
                }))
            }
        }, {
            key: "pushLeftBeforeInput", value: function () {
                var t = this;
                return this._pushLeft((function () {
                    if (!t.block.isFixed) return t.offset = t.block.nearestInputPos(t.offset, F), !0
                }))
            }
        }, {
            key: "pushLeftBeforeRequired", value: function () {
                var t = this;
                return this._pushLeft((function () {
                    if (!(t.block.isFixed || t.block.isOptional && !t.block.value)) return t.offset = t.block.nearestInputPos(t.offset, F), !0
                }))
            }
        }, {
            key: "pushRightBeforeFilled", value: function () {
                var t = this;
                return this._pushRight((function () {
                    if (!t.block.isFixed && t.block.value) return t.offset = t.block.nearestInputPos(t.offset, B), t.offset !== t.block.value.length || void 0
                }))
            }
        }, {
            key: "pushRightBeforeInput", value: function () {
                var t = this;
                return this._pushRight((function () {
                    if (!t.block.isFixed) return t.offset = t.block.nearestInputPos(t.offset, T), !0
                }))
            }
        }, {
            key: "pushRightBeforeRequired", value: function () {
                var t = this;
                return this._pushRight((function () {
                    if (!(t.block.isFixed || t.block.isOptional && !t.block.value)) return t.offset = t.block.nearestInputPos(t.offset, T), !0
                }))
            }
        }]), t
    }(), Q = function (t) {
        f(n, t);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }

        return d(n, [{
            key: "_update", value: function (t) {
                t.mask && (t.validate = function (e) {
                    return e.search(t.mask) >= 0
                }), y(p(n.prototype), "_update", this).call(this, t)
            }
        }]), n
    }(V);
    R.MaskedRegExp = Q;
    var Z = ["_blocks"], G = function (t) {
        f(n, t);
        var e = _(n);

        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return c(this, n), t.definitions = Object.assign({}, W, t.definitions), e.call(this, Object.assign({}, n.DEFAULTS, t))
        }

        return d(n, [{
            key: "_update", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.definitions = Object.assign({}, this.definitions, t.definitions), y(p(n.prototype), "_update", this).call(this, t), this._rebuildMask()
            }
        }, {
            key: "_rebuildMask", value: function () {
                var t = this, e = this.definitions;
                this._blocks = [], this._stops = [], this._maskedBlocks = {};
                var i = this.mask;
                if (i && e) for (var s = !1, r = !1, o = 0; o < i.length; ++o) {
                    if (this.blocks) {
                        var a = function () {
                            var e = i.slice(o), n = Object.keys(t.blocks).filter((function (t) {
                                return 0 === e.indexOf(t)
                            }));
                            n.sort((function (t, e) {
                                return e.length - t.length
                            }));
                            var s = n[0];
                            if (s) {
                                var r = H(Object.assign({
                                    parent: t,
                                    lazy: t.lazy,
                                    eager: t.eager,
                                    placeholderChar: t.placeholderChar,
                                    overwrite: t.overwrite
                                }, t.blocks[s]));
                                return r && (t._blocks.push(r), t._maskedBlocks[s] || (t._maskedBlocks[s] = []), t._maskedBlocks[s].push(t._blocks.length - 1)), o += s.length - 1, "continue"
                            }
                        }();
                        if ("continue" === a) continue
                    }
                    var u = i[o], l = u in e;
                    if (u !== n.STOP_CHAR) if ("{" !== u && "}" !== u) if ("[" !== u && "]" !== u) {
                        if (u === n.ESCAPE_CHAR) {
                            if (++o, !(u = i[o])) break;
                            l = !1
                        }
                        var c = l ? new $({
                            parent: this,
                            lazy: this.lazy,
                            eager: this.eager,
                            placeholderChar: this.placeholderChar,
                            mask: e[u],
                            isOptional: r
                        }) : new U({char: u, eager: this.eager, isUnmasking: s});
                        this._blocks.push(c)
                    } else r = !r; else s = !s; else this._stops.push(this._blocks.length)
                }
            }
        }, {
            key: "state", get: function () {
                return Object.assign({}, y(p(n.prototype), "state", this), {
                    _blocks: this._blocks.map((function (t) {
                        return t.state
                    }))
                })
            }, set: function (t) {
                var e = t._blocks, i = m(t, Z);
                this._blocks.forEach((function (t, n) {
                    return t.state = e[n]
                })), w(p(n.prototype), "state", i, this, !0)
            }
        }, {
            key: "reset", value: function () {
                y(p(n.prototype), "reset", this).call(this), this._blocks.forEach((function (t) {
                    return t.reset()
                }))
            }
        }, {
            key: "isComplete", get: function () {
                return this._blocks.every((function (t) {
                    return t.isComplete
                }))
            }
        }, {
            key: "isFilled", get: function () {
                return this._blocks.every((function (t) {
                    return t.isFilled
                }))
            }
        }, {
            key: "isFixed", get: function () {
                return this._blocks.every((function (t) {
                    return t.isFixed
                }))
            }
        }, {
            key: "isOptional", get: function () {
                return this._blocks.every((function (t) {
                    return t.isOptional
                }))
            }
        }, {
            key: "doCommit", value: function () {
                this._blocks.forEach((function (t) {
                    return t.doCommit()
                })), y(p(n.prototype), "doCommit", this).call(this)
            }
        }, {
            key: "unmaskedValue", get: function () {
                return this._blocks.reduce((function (t, e) {
                    return t + e.unmaskedValue
                }), "")
            }, set: function (t) {
                w(p(n.prototype), "unmaskedValue", t, this, !0)
            }
        }, {
            key: "value", get: function () {
                return this._blocks.reduce((function (t, e) {
                    return t + e.value
                }), "")
            }, set: function (t) {
                w(p(n.prototype), "value", t, this, !0)
            }
        }, {
            key: "appendTail", value: function (t) {
                return y(p(n.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder())
            }
        }, {
            key: "_appendEager", value: function () {
                var t, e = new S,
                    n = null === (t = this._mapPosToBlock(this.value.length)) || void 0 === t ? void 0 : t.index;
                if (null == n) return e;
                this._blocks[n].isFilled && ++n;
                for (var i = n; i < this._blocks.length; ++i) {
                    var s = this._blocks[i]._appendEager();
                    if (!s.inserted) break;
                    e.aggregate(s)
                }
                return e
            }
        }, {
            key: "_appendCharRaw", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = this._mapPosToBlock(this.value.length), i = new S;
                if (!n) return i;
                for (var s = n.index; ; ++s) {
                    var r, o, a = this._blocks[s];
                    if (!a) break;
                    var u = a._appendChar(t, Object.assign({}, e, {_beforeTailState: null === (r = e._beforeTailState) || void 0 === r || null === (o = r._blocks) || void 0 === o ? void 0 : o[s]})),
                        l = u.skip;
                    if (i.aggregate(u), l || u.rawInserted) break
                }
                return i
            }
        }, {
            key: "extractTail", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length, i = new K;
                return e === n || this._forEachBlocksInRange(e, n, (function (e, n, s, r) {
                    var o = e.extractTail(s, r);
                    o.stop = t._findStopBefore(n), o.from = t._blockStartPos(n), o instanceof K && (o.blockIndex = n), i.extend(o)
                })), i
            }
        }, {
            key: "extractInput", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (t === e) return "";
                var i = "";
                return this._forEachBlocksInRange(t, e, (function (t, e, s, r) {
                    i += t.extractInput(s, r, n)
                })), i
            }
        }, {
            key: "_findStopBefore", value: function (t) {
                for (var e, n = 0; n < this._stops.length; ++n) {
                    var i = this._stops[n];
                    if (!(i <= t)) break;
                    e = i
                }
                return e
            }
        }, {
            key: "_appendPlaceholder", value: function (t) {
                var e = this, n = new S;
                if (this.lazy && null == t) return n;
                var i = this._mapPosToBlock(this.value.length);
                if (!i) return n;
                var s = i.index, r = null != t ? t : this._blocks.length;
                return this._blocks.slice(s, r).forEach((function (i) {
                    if (!i.lazy || null != t) {
                        var s = null != i._blocks ? [i._blocks.length] : [], r = i._appendPlaceholder.apply(i, s);
                        e._value += r.inserted, n.aggregate(r)
                    }
                })), n
            }
        }, {
            key: "_mapPosToBlock", value: function (t) {
                for (var e = "", n = 0; n < this._blocks.length; ++n) {
                    var i = this._blocks[n], s = e.length;
                    if (t <= (e += i.value).length) return {index: n, offset: t - s}
                }
            }
        }, {
            key: "_blockStartPos", value: function (t) {
                return this._blocks.slice(0, t).reduce((function (t, e) {
                    return t + e.value.length
                }), 0)
            }
        }, {
            key: "_forEachBlocksInRange", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = arguments.length > 2 ? arguments[2] : void 0, i = this._mapPosToBlock(t);
                if (i) {
                    var s = this._mapPosToBlock(e), r = s && i.index === s.index, o = i.offset,
                        a = s && r ? s.offset : this._blocks[i.index].value.length;
                    if (n(this._blocks[i.index], i.index, o, a), s && !r) {
                        for (var u = i.index + 1; u < s.index; ++u) n(this._blocks[u], u, 0, this._blocks[u].value.length);
                        n(this._blocks[s.index], s.index, 0, s.offset)
                    }
                }
            }
        }, {
            key: "remove", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    i = y(p(n.prototype), "remove", this).call(this, t, e);
                return this._forEachBlocksInRange(t, e, (function (t, e, n, s) {
                    i.aggregate(t.remove(n, s))
                })), i
            }
        }, {
            key: "nearestInputPos", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T;
                if (!this._blocks.length) return 0;
                var n = new X(this, t);
                if (e === T) return n.pushRightBeforeInput() ? n.pos : (n.popState(), n.pushLeftBeforeInput() ? n.pos : this.value.length);
                if (e === F || e === D) {
                    if (e === F) {
                        if (n.pushRightBeforeFilled(), n.ok && n.pos === t) return t;
                        n.popState()
                    }
                    if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), e === F) {
                        if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= t) return n.pos;
                        if (n.popState(), n.ok && n.pos <= t) return n.pos;
                        n.popState()
                    }
                    return n.ok ? n.pos : e === D ? 0 : (n.popState(), n.ok ? n.pos : (n.popState(), n.ok ? n.pos : 0))
                }
                return e === O || e === B ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : e === B ? this.value.length : (n.popState(), n.ok ? n.pos : (n.popState(), n.ok ? n.pos : this.nearestInputPos(t, F)))) : t
            }
        }, {
            key: "maskedBlock", value: function (t) {
                return this.maskedBlocks(t)[0]
            }
        }, {
            key: "maskedBlocks", value: function (t) {
                var e = this, n = this._maskedBlocks[t];
                return n ? n.map((function (t) {
                    return e._blocks[t]
                })) : []
            }
        }]), n
    }(V);
    G.DEFAULTS = {
        lazy: !0,
        placeholderChar: "_"
    }, G.STOP_CHAR = "`", G.ESCAPE_CHAR = "\\", G.InputDefinition = $, G.FixedDefinition = U, R.MaskedPattern = G;
    var J = function (t) {
        f(n, t);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }

        return d(n, [{
            key: "_matchFrom", get: function () {
                return this.maxLength - String(this.from).length
            }
        }, {
            key: "_update", value: function (t) {
                t = Object.assign({to: this.to || 0, from: this.from || 0, maxLength: this.maxLength || 0}, t);
                var e = String(t.to).length;
                null != t.maxLength && (e = Math.max(e, t.maxLength)), t.maxLength = e;
                for (var i = String(t.from).padStart(e, "0"), s = String(t.to).padStart(e, "0"), r = 0; r < s.length && s[r] === i[r];) ++r;
                t.mask = s.slice(0, r).replace(/0/g, "\\0") + "0".repeat(e - r), y(p(n.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "isComplete", get: function () {
                return y(p(n.prototype), "isComplete", this) && Boolean(this.value)
            }
        }, {
            key: "boundaries", value: function (t) {
                var e = "", n = "", i = A(t.match(/^(\D*)(\d*)(\D*)/) || [], 3), s = i[1], r = i[2];
                return r && (e = "0".repeat(s.length) + r, n = "9".repeat(s.length) + r), [e = e.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")]
            }
        }, {
            key: "doPrepare", value: function (t) {
                var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = I(y(p(n.prototype), "doPrepare", this).call(this, t.replace(/\D/g, ""), i)), r = A(s, 2);
                if (t = r[0], e = r[1], !this.autofix || !t) return t;
                var o = String(this.from).padStart(this.maxLength, "0"),
                    a = String(this.to).padStart(this.maxLength, "0"), u = this.value + t;
                if (u.length > this.maxLength) return "";
                var l = this.boundaries(u), c = A(l, 2), h = c[0], d = c[1];
                return Number(d) < this.from ? o[u.length - 1] : Number(h) > this.to ? "pad" === this.autofix && u.length < this.maxLength ? ["", e.aggregate(this.append(o[u.length - 1] + t, i))] : a[u.length - 1] : t
            }
        }, {
            key: "doValidate", value: function () {
                var t, e = this.value, i = e.search(/[^0]/);
                if (-1 === i && e.length <= this._matchFrom) return !0;
                for (var s = this.boundaries(e), r = A(s, 2), o = r[0], a = r[1], u = arguments.length, l = new Array(u), c = 0; c < u; c++) l[c] = arguments[c];
                return this.from <= Number(a) && Number(o) <= this.to && (t = y(p(n.prototype), "doValidate", this)).call.apply(t, [this].concat(l))
            }
        }]), n
    }(G);
    R.MaskedRange = J;
    var tt = function (t) {
        f(n, t);
        var e = _(n);

        function n(t) {
            return c(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t))
        }

        return d(n, [{
            key: "_update", value: function (t) {
                t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
                var e = t.blocks;
                t.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS()), t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, this.blocks, e), Object.keys(t.blocks).forEach((function (e) {
                    var n = t.blocks[e];
                    !("autofix" in n) && "autofix" in t && (n.autofix = t.autofix)
                })), y(p(n.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "doValidate", value: function () {
                for (var t, e = this.date, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                return (t = y(p(n.prototype), "doValidate", this)).call.apply(t, [this].concat(s)) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max))
            }
        }, {
            key: "isDateExist", value: function (t) {
                return this.format(this.parse(t, this), this).indexOf(t) >= 0
            }
        }, {
            key: "date", get: function () {
                return this.typedValue
            }, set: function (t) {
                this.typedValue = t
            }
        }, {
            key: "typedValue", get: function () {
                return this.isComplete ? y(p(n.prototype), "typedValue", this) : null
            }, set: function (t) {
                w(p(n.prototype), "typedValue", t, this, !0)
            }
        }, {
            key: "maskEquals", value: function (t) {
                return t === Date || y(p(n.prototype), "maskEquals", this).call(this, t)
            }
        }]), n
    }(G);
    tt.DEFAULTS = {
        pattern: "d{.}`m{.}`Y", format: function (t) {
            return t ? [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".") : ""
        }, parse: function (t) {
            var e = A(t.split("."), 3), n = e[0], i = e[1], s = e[2];
            return new Date(s, i - 1, n)
        }
    }, tt.GET_DEFAULT_BLOCKS = function () {
        return {
            d: {mask: J, from: 1, to: 31, maxLength: 2},
            m: {mask: J, from: 1, to: 12, maxLength: 2},
            Y: {mask: J, from: 1900, to: 9999}
        }
    }, R.MaskedDate = tt;
    var et = function () {
        function t() {
            c(this, t)
        }

        return d(t, [{
            key: "selectionStart", get: function () {
                var t;
                try {
                    t = this._unsafeSelectionStart
                } catch (t) {
                }
                return null != t ? t : this.value.length
            }
        }, {
            key: "selectionEnd", get: function () {
                var t;
                try {
                    t = this._unsafeSelectionEnd
                } catch (t) {
                }
                return null != t ? t : this.value.length
            }
        }, {
            key: "select", value: function (t, e) {
                if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd)) try {
                    this._unsafeSelect(t, e)
                } catch (t) {
                }
            }
        }, {
            key: "_unsafeSelect", value: function (t, e) {
            }
        }, {
            key: "isActive", get: function () {
                return !1
            }
        }, {
            key: "bindEvents", value: function (t) {
            }
        }, {
            key: "unbindEvents", value: function () {
            }
        }]), t
    }();
    R.MaskElement = et;
    var nt = function (t) {
        f(n, t);
        var e = _(n);

        function n(t) {
            var i;
            return c(this, n), (i = e.call(this)).input = t, i._handlers = {}, i
        }

        return d(n, [{
            key: "rootElement", get: function () {
                var t, e, n;
                return null !== (t = null === (e = (n = this.input).getRootNode) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : document
            }
        }, {
            key: "isActive", get: function () {
                return this.input === this.rootElement.activeElement
            }
        }, {
            key: "_unsafeSelectionStart", get: function () {
                return this.input.selectionStart
            }
        }, {
            key: "_unsafeSelectionEnd", get: function () {
                return this.input.selectionEnd
            }
        }, {
            key: "_unsafeSelect", value: function (t, e) {
                this.input.setSelectionRange(t, e)
            }
        }, {
            key: "value", get: function () {
                return this.input.value
            }, set: function (t) {
                this.input.value = t
            }
        }, {
            key: "bindEvents", value: function (t) {
                var e = this;
                Object.keys(t).forEach((function (i) {
                    return e._toggleEventHandler(n.EVENTS_MAP[i], t[i])
                }))
            }
        }, {
            key: "unbindEvents", value: function () {
                var t = this;
                Object.keys(this._handlers).forEach((function (e) {
                    return t._toggleEventHandler(e)
                }))
            }
        }, {
            key: "_toggleEventHandler", value: function (t, e) {
                this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]), e && (this.input.addEventListener(t, e), this._handlers[t] = e)
            }
        }]), n
    }(et);
    nt.EVENTS_MAP = {
        selectionChange: "keydown",
        input: "input",
        drop: "drop",
        click: "click",
        focus: "focus",
        commit: "blur"
    }, R.HTMLMaskElement = nt;
    var it = function (t) {
        f(n, t);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }

        return d(n, [{
            key: "_unsafeSelectionStart", get: function () {
                var t = this.rootElement, e = t.getSelection && t.getSelection(), n = e && e.anchorOffset,
                    i = e && e.focusOffset;
                return null == i || null == n || n < i ? n : i
            }
        }, {
            key: "_unsafeSelectionEnd", get: function () {
                var t = this.rootElement, e = t.getSelection && t.getSelection(), n = e && e.anchorOffset,
                    i = e && e.focusOffset;
                return null == i || null == n || n > i ? n : i
            }
        }, {
            key: "_unsafeSelect", value: function (t, e) {
                if (this.rootElement.createRange) {
                    var n = this.rootElement.createRange();
                    n.setStart(this.input.firstChild || this.input, t), n.setEnd(this.input.lastChild || this.input, e);
                    var i = this.rootElement, s = i.getSelection && i.getSelection();
                    s && (s.removeAllRanges(), s.addRange(n))
                }
            }
        }, {
            key: "value", get: function () {
                return this.input.textContent
            }, set: function (t) {
                this.input.textContent = t
            }
        }]), n
    }(nt);
    R.HTMLContenteditableMaskElement = it;
    var st = ["mask"], rt = function () {
        function t(e, n) {
            c(this, t), this.el = e instanceof et ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new it(e) : new nt(e), this.masked = H(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
        }

        return d(t, [{
            key: "mask", get: function () {
                return this.masked.mask
            }, set: function (t) {
                if (!this.maskEquals(t)) if (t instanceof R.Masked || this.masked.constructor !== z(t)) {
                    var e = H({mask: t});
                    e.unmaskedValue = this.masked.unmaskedValue, this.masked = e
                } else this.masked.updateOptions({mask: t})
            }
        }, {
            key: "maskEquals", value: function (t) {
                var e;
                return null == t || (null === (e = this.masked) || void 0 === e ? void 0 : e.maskEquals(t))
            }
        }, {
            key: "value", get: function () {
                return this._value
            }, set: function (t) {
                this.value !== t && (this.masked.value = t, this.updateControl(), this.alignCursor())
            }
        }, {
            key: "unmaskedValue", get: function () {
                return this._unmaskedValue
            }, set: function (t) {
                this.unmaskedValue !== t && (this.masked.unmaskedValue = t, this.updateControl(), this.alignCursor())
            }
        }, {
            key: "typedValue", get: function () {
                return this.masked.typedValue
            }, set: function (t) {
                this.masked.typedValueEquals(t) || (this.masked.typedValue = t, this.updateControl(), this.alignCursor())
            }
        }, {
            key: "_bindEvents", value: function () {
                this.el.bindEvents({
                    selectionChange: this._saveSelection,
                    input: this._onInput,
                    drop: this._onDrop,
                    click: this._onClick,
                    focus: this._onFocus,
                    commit: this._onChange
                })
            }
        }, {
            key: "_unbindEvents", value: function () {
                this.el && this.el.unbindEvents()
            }
        }, {
            key: "_fireEvent", value: function (t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                var s = this._listeners[t];
                s && s.forEach((function (t) {
                    return t.apply(void 0, n)
                }))
            }
        }, {
            key: "selectionStart", get: function () {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
            }
        }, {
            key: "cursorPos", get: function () {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
            }, set: function (t) {
                this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection())
            }
        }, {
            key: "_saveSelection", value: function () {
                this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos
                }
            }
        }, {
            key: "updateValue", value: function () {
                this.masked.value = this.el.value, this._value = this.masked.value
            }
        }, {
            key: "updateControl", value: function () {
                var t = this.masked.unmaskedValue, e = this.masked.value,
                    n = this.unmaskedValue !== t || this.value !== e;
                this._unmaskedValue = t, this._value = e, this.el.value !== e && (this.el.value = e), n && this._fireChangeEvents()
            }
        }, {
            key: "updateOptions", value: function (t) {
                var e = t.mask, n = m(t, st), i = !this.maskEquals(e), s = !L(this.masked, n);
                i && (this.mask = e), s && this.masked.updateOptions(n), (i || s) && this.updateControl()
            }
        }, {
            key: "updateCursor", value: function (t) {
                null != t && (this.cursorPos = t, this._delayUpdateCursor(t))
            }
        }, {
            key: "_delayUpdateCursor", value: function (t) {
                var e = this;
                this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout((function () {
                    e.el && (e.cursorPos = e._changingCursorPos, e._abortUpdateCursor())
                }), 10)
            }
        }, {
            key: "_fireChangeEvents", value: function () {
                this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
            }
        }, {
            key: "_abortUpdateCursor", value: function () {
                this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
            }
        }, {
            key: "alignCursor", value: function () {
                this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, F))
            }
        }, {
            key: "alignCursorFriendly", value: function () {
                this.selectionStart === this.cursorPos && this.alignCursor()
            }
        }, {
            key: "on", value: function (t, e) {
                return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this
            }
        }, {
            key: "off", value: function (t, e) {
                if (!this._listeners[t]) return this;
                if (!e) return delete this._listeners[t], this;
                var n = this._listeners[t].indexOf(e);
                return n >= 0 && this._listeners[t].splice(n, 1), this
            }
        }, {
            key: "_onInput", value: function (t) {
                if (this._inputEvent = t, this._abortUpdateCursor(), !this._selection) return this.updateValue();
                var e = new j(this.el.value, this.cursorPos, this.value, this._selection),
                    n = this.masked.rawInputValue,
                    i = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection, {
                        input: !0,
                        raw: !0
                    }).offset, s = n === this.masked.rawInputValue ? e.removeDirection : T,
                    r = this.masked.nearestInputPos(e.startChangePos + i, s);
                s !== T && (r = this.masked.nearestInputPos(r, T)), this.updateControl(), this.updateCursor(r), delete this._inputEvent
            }
        }, {
            key: "_onChange", value: function () {
                this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
            }
        }, {
            key: "_onDrop", value: function (t) {
                t.preventDefault(), t.stopPropagation()
            }
        }, {
            key: "_onFocus", value: function (t) {
                this.alignCursorFriendly()
            }
        }, {
            key: "_onClick", value: function (t) {
                this.alignCursorFriendly()
            }
        }, {
            key: "destroy", value: function () {
                this._unbindEvents(), this._listeners.length = 0, delete this.el
            }
        }]), t
    }();
    R.InputMask = rt;
    var ot = function (t) {
        f(n, t);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }

        return d(n, [{
            key: "_update", value: function (t) {
                t.enum && (t.mask = "*".repeat(t.enum[0].length)), y(p(n.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "doValidate", value: function () {
                for (var t, e = this, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                return this.enum.some((function (t) {
                    return t.indexOf(e.unmaskedValue) >= 0
                })) && (t = y(p(n.prototype), "doValidate", this)).call.apply(t, [this].concat(s))
            }
        }]), n
    }(G);
    R.MaskedEnum = ot;
    var at, ut = function (t) {
        f(n, t);
        var e = _(n);

        function n(t) {
            return c(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t))
        }

        return d(n, [{
            key: "_update", value: function (t) {
                y(p(n.prototype), "_update", this).call(this, t), this._updateRegExps()
            }
        }, {
            key: "_updateRegExps", value: function () {
                var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                    e = (this.scale ? "(" + P(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
                this._numberRegExpInput = new RegExp(t + "(0|([1-9]+\\d*))?" + e), this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(P).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(P(this.thousandsSeparator), "g")
            }
        }, {
            key: "_removeThousandsSeparators", value: function (t) {
                return t.replace(this._thousandsSeparatorRegExp, "")
            }
        }, {
            key: "_insertThousandsSeparators", value: function (t) {
                var e = t.split(this.radix);
                return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix)
            }
        }, {
            key: "doPrepare", value: function (t) {
                var e;
                t = t.replace(this._mapToRadixRegExp, this.radix);
                for (var i = this._removeThousandsSeparators(t), s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) r[o - 1] = arguments[o];
                var a = I((e = y(p(n.prototype), "doPrepare", this)).call.apply(e, [this, i].concat(r))), u = A(a, 2),
                    l = u[0], c = u[1];
                return t && !i && (c.skip = !0), [l, c]
            }
        }, {
            key: "_separatorsCount", value: function (t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, i = 0; i < t; ++i) this._value.indexOf(this.thousandsSeparator, i) === i && (++n, e && (t += this.thousandsSeparator.length));
                return n
            }
        }, {
            key: "_separatorsCountFromSlice", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
                return this._separatorsCount(this._removeThousandsSeparators(t).length, !0)
            }
        }, {
            key: "extractInput", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    i = arguments.length > 2 ? arguments[2] : void 0, s = this._adjustRangeWithSeparators(t, e),
                    r = A(s, 2);
                return t = r[0], e = r[1], this._removeThousandsSeparators(y(p(n.prototype), "extractInput", this).call(this, t, e, i))
            }
        }, {
            key: "_appendCharRaw", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.thousandsSeparator) return y(p(n.prototype), "_appendCharRaw", this).call(this, t, e);
                var i = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                    s = this._separatorsCountFromSlice(i);
                this._value = this._removeThousandsSeparators(this.value);
                var r = y(p(n.prototype), "_appendCharRaw", this).call(this, t, e);
                this._value = this._insertThousandsSeparators(this._value);
                var o = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
                    a = this._separatorsCountFromSlice(o);
                return r.tailShift += (a - s) * this.thousandsSeparator.length, r.skip = !r.rawInserted && t === this.thousandsSeparator, r
            }
        }, {
            key: "_findSeparatorAround", value: function (t) {
                if (this.thousandsSeparator) {
                    var e = t - this.thousandsSeparator.length + 1, n = this.value.indexOf(this.thousandsSeparator, e);
                    if (n <= t) return n
                }
                return -1
            }
        }, {
            key: "_adjustRangeWithSeparators", value: function (t, e) {
                var n = this._findSeparatorAround(t);
                n >= 0 && (t = n);
                var i = this._findSeparatorAround(e);
                return i >= 0 && (e = i + this.thousandsSeparator.length), [t, e]
            }
        }, {
            key: "remove", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = this._adjustRangeWithSeparators(t, e), i = A(n, 2);
                t = i[0], e = i[1];
                var s = this.value.slice(0, t), r = this.value.slice(e), o = this._separatorsCount(s.length);
                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + r));
                var a = this._separatorsCountFromSlice(s);
                return new S({tailShift: (a - o) * this.thousandsSeparator.length})
            }
        }, {
            key: "nearestInputPos", value: function (t, e) {
                if (!this.thousandsSeparator) return t;
                switch (e) {
                    case T:
                    case F:
                    case D:
                        var n = this._findSeparatorAround(t - 1);
                        if (n >= 0) {
                            var i = n + this.thousandsSeparator.length;
                            if (t < i || this.value.length <= i || e === D) return n
                        }
                        break;
                    case O:
                    case B:
                        var s = this._findSeparatorAround(t);
                        if (s >= 0) return s + this.thousandsSeparator.length
                }
                return t
            }
        }, {
            key: "doValidate", value: function (t) {
                var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));
                if (e) {
                    var i = this.number;
                    e = e && !isNaN(i) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
                }
                return e && y(p(n.prototype), "doValidate", this).call(this, t)
            }
        }, {
            key: "doCommit", value: function () {
                if (this.value) {
                    var t = this.number, e = t;
                    null != this.min && (e = Math.max(e, this.min)), null != this.max && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = String(e));
                    var i = this.value;
                    this.normalizeZeros && (i = this._normalizeZeros(i)), this.padFractionalZeros && this.scale > 0 && (i = this._padFractionalZeros(i)), this._value = i
                }
                y(p(n.prototype), "doCommit", this).call(this)
            }
        }, {
            key: "_normalizeZeros", value: function (t) {
                var e = this._removeThousandsSeparators(t).split(this.radix);
                return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, (function (t, e, n, i) {
                    return e + i
                })), t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""), e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix))
            }
        }, {
            key: "_padFractionalZeros", value: function (t) {
                if (!t) return t;
                var e = t.split(this.radix);
                return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix)
            }
        }, {
            key: "unmaskedValue", get: function () {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".")
            }, set: function (t) {
                w(p(n.prototype), "unmaskedValue", t.replace(".", this.radix), this, !0)
            }
        }, {
            key: "typedValue", get: function () {
                return Number(this.unmaskedValue)
            }, set: function (t) {
                w(p(n.prototype), "unmaskedValue", String(t), this, !0)
            }
        }, {
            key: "number", get: function () {
                return this.typedValue
            }, set: function (t) {
                this.typedValue = t
            }
        }, {
            key: "allowNegative", get: function () {
                return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
            }
        }, {
            key: "typedValueEquals", value: function (t) {
                return (y(p(n.prototype), "typedValueEquals", this).call(this, t) || n.EMPTY_VALUES.includes(t) && n.EMPTY_VALUES.includes(this.typedValue)) && !(0 === t && "" === this.value)
            }
        }]), n
    }(V);
    ut.DEFAULTS = {
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: ["."],
        scale: 2,
        signed: !1,
        normalizeZeros: !0,
        padFractionalZeros: !1
    }, ut.EMPTY_VALUES = [].concat(function (t) {
        if (Array.isArray(t)) return C(t)
    }(at = V.EMPTY_VALUES) || function (t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(at) || E(at) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }(), [0]), R.MaskedNumber = ut;
    var lt = function (t) {
        f(n, t);
        var e = _(n);

        function n() {
            return c(this, n), e.apply(this, arguments)
        }

        return d(n, [{
            key: "_update", value: function (t) {
                t.mask && (t.validate = t.mask), y(p(n.prototype), "_update", this).call(this, t)
            }
        }]), n
    }(V);
    R.MaskedFunction = lt;
    var ct = ["compiledMasks", "currentMaskRef", "currentMask"], ht = function (t) {
        f(n, t);
        var e = _(n);

        function n(t) {
            var i;
            return c(this, n), (i = e.call(this, Object.assign({}, n.DEFAULTS, t))).currentMask = null, i
        }

        return d(n, [{
            key: "_update", value: function (t) {
                y(p(n.prototype), "_update", this).call(this, t), "mask" in t && (this.compiledMasks = Array.isArray(t.mask) ? t.mask.map((function (t) {
                    return H(t)
                })) : [])
            }
        }, {
            key: "_appendCharRaw", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = this._applyDispatch(t, e);
                return this.currentMask && n.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(e))), n
            }
        }, {
            key: "_applyDispatch", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
                    i = this.rawInputValue,
                    s = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : i,
                    r = i.slice(s.length), o = this.currentMask, a = new S, u = null == o ? void 0 : o.state;
                if (this.currentMask = this.doDispatch(t, Object.assign({}, e)), this.currentMask) if (this.currentMask !== o) {
                    if (this.currentMask.reset(), s) {
                        var l = this.currentMask.append(s, {raw: !0});
                        a.tailShift = l.inserted.length - n.length
                    }
                    r && (a.tailShift += this.currentMask.append(r, {raw: !0, tail: !0}).tailShift)
                } else this.currentMask.state = u;
                return a
            }
        }, {
            key: "_appendPlaceholder", value: function () {
                var t = this._applyDispatch.apply(this, arguments);
                return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t
            }
        }, {
            key: "_appendEager", value: function () {
                var t = this._applyDispatch.apply(this, arguments);
                return this.currentMask && t.aggregate(this.currentMask._appendEager()), t
            }
        }, {
            key: "currentMaskFlags", value: function (t) {
                var e, n;
                return Object.assign({}, t, {_beforeTailState: (null === (e = t._beforeTailState) || void 0 === e ? void 0 : e.currentMaskRef) === this.currentMask && (null === (n = t._beforeTailState) || void 0 === n ? void 0 : n.currentMask) || t._beforeTailState})
            }
        }, {
            key: "doDispatch", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.dispatch(t, this, e)
            }
        }, {
            key: "doValidate", value: function (t) {
                return y(p(n.prototype), "doValidate", this).call(this, t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)))
            }
        }, {
            key: "doPrepare", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = I(y(p(n.prototype), "doPrepare", this).call(this, t, e)), s = A(i, 2), r = s[0], o = s[1];
                if (this.currentMask) {
                    var a, u = I(y(p(n.prototype), "doPrepare", this).call(this, r, this.currentMaskFlags(e))),
                        l = A(u, 2);
                    r = l[0], a = l[1], o = o.aggregate(a)
                }
                return [r, o]
            }
        }, {
            key: "reset", value: function () {
                var t;
                null === (t = this.currentMask) || void 0 === t || t.reset(), this.compiledMasks.forEach((function (t) {
                    return t.reset()
                }))
            }
        }, {
            key: "value", get: function () {
                return this.currentMask ? this.currentMask.value : ""
            }, set: function (t) {
                w(p(n.prototype), "value", t, this, !0)
            }
        }, {
            key: "unmaskedValue", get: function () {
                return this.currentMask ? this.currentMask.unmaskedValue : ""
            }, set: function (t) {
                w(p(n.prototype), "unmaskedValue", t, this, !0)
            }
        }, {
            key: "typedValue", get: function () {
                return this.currentMask ? this.currentMask.typedValue : ""
            }, set: function (t) {
                var e = String(t);
                this.currentMask && (this.currentMask.typedValue = t, e = this.currentMask.unmaskedValue), this.unmaskedValue = e
            }
        }, {
            key: "isComplete", get: function () {
                var t;
                return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isComplete)
            }
        }, {
            key: "isFilled", get: function () {
                var t;
                return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isFilled)
            }
        }, {
            key: "remove", value: function () {
                var t, e = new S;
                this.currentMask && e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch());
                return e
            }
        }, {
            key: "state", get: function () {
                var t;
                return Object.assign({}, y(p(n.prototype), "state", this), {
                    _rawInputValue: this.rawInputValue,
                    compiledMasks: this.compiledMasks.map((function (t) {
                        return t.state
                    })),
                    currentMaskRef: this.currentMask,
                    currentMask: null === (t = this.currentMask) || void 0 === t ? void 0 : t.state
                })
            }, set: function (t) {
                var e = t.compiledMasks, i = t.currentMaskRef, s = t.currentMask, r = m(t, ct);
                this.compiledMasks.forEach((function (t, n) {
                    return t.state = e[n]
                })), null != i && (this.currentMask = i, this.currentMask.state = s), w(p(n.prototype), "state", r, this, !0)
            }
        }, {
            key: "extractInput", value: function () {
                var t;
                return this.currentMask ? (t = this.currentMask).extractInput.apply(t, arguments) : ""
            }
        }, {
            key: "extractTail", value: function () {
                for (var t, e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                return this.currentMask ? (t = this.currentMask).extractTail.apply(t, s) : (e = y(p(n.prototype), "extractTail", this)).call.apply(e, [this].concat(s))
            }
        }, {
            key: "doCommit", value: function () {
                this.currentMask && this.currentMask.doCommit(), y(p(n.prototype), "doCommit", this).call(this)
            }
        }, {
            key: "nearestInputPos", value: function () {
                for (var t, e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                return this.currentMask ? (t = this.currentMask).nearestInputPos.apply(t, s) : (e = y(p(n.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(s))
            }
        }, {
            key: "overwrite", get: function () {
                return this.currentMask ? this.currentMask.overwrite : y(p(n.prototype), "overwrite", this)
            }, set: function (t) {
                console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
            }
        }, {
            key: "eager", get: function () {
                return this.currentMask ? this.currentMask.eager : y(p(n.prototype), "eager", this)
            }, set: function (t) {
                console.warn('"eager" option is not available in dynamic mask, use this option in siblings')
            }
        }, {
            key: "maskEquals", value: function (t) {
                return Array.isArray(t) && this.compiledMasks.every((function (e, n) {
                    var i;
                    return e.maskEquals(null === (i = t[n]) || void 0 === i ? void 0 : i.mask)
                }))
            }
        }, {
            key: "typedValueEquals", value: function (t) {
                var e;
                return Boolean(null === (e = this.currentMask) || void 0 === e ? void 0 : e.typedValueEquals(t))
            }
        }]), n
    }(V);
    ht.DEFAULTS = {
        dispatch: function (t, e, n) {
            if (e.compiledMasks.length) {
                var i = e.rawInputValue, s = e.compiledMasks.map((function (s, r) {
                    return s.reset(), s.append(i, {raw: !0}), s.append(t, e.currentMaskFlags(n)), {
                        weight: s.rawInputValue.length,
                        index: r
                    }
                }));
                return s.sort((function (t, e) {
                    return e.weight - t.weight
                })), e.compiledMasks[s[0].index]
            }
        }
    }, R.MaskedDynamic = ht;
    var dt = {MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue"};

    function ft(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dt.MASKED,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dt.MASKED, i = H(t);
        return function (t) {
            return i.runIsolated((function (i) {
                return i[e] = t, i[n]
            }))
        }
    }

    R.PIPE_TYPE = dt, R.createPipe = ft, R.pipe = function (t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
        return ft.apply(void 0, n)(t)
    };
    try {
        globalThis.IMask = R
    } catch (t) {
    }
    [].slice.call(document.querySelectorAll("[data-mask]")).map((function (t) {
        return new R(t, {mask: t.dataset.mask, lazy: "true" === t.dataset["mask-visible"]})
    }));
    var pt = "top", gt = "bottom", mt = "right", vt = "left", _t = "auto", bt = [pt, gt, mt, vt], yt = "start",
        kt = "end", wt = "clippingParents", At = "viewport", Et = "popper", Ct = "reference",
        St = bt.reduce((function (t, e) {
            return t.concat([e + "-" + yt, e + "-" + kt])
        }), []), xt = [].concat(bt, [_t]).reduce((function (t, e) {
            return t.concat([e, e + "-" + yt, e + "-" + kt])
        }), []), Tt = "beforeRead", Ft = "read", Dt = "afterRead", Ot = "beforeMain", Bt = "main", Mt = "afterMain",
        Pt = "beforeWrite", It = "write", Lt = "afterWrite", jt = [Tt, Ft, Dt, Ot, Bt, Mt, Pt, It, Lt];

    function Nt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function Rt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function Vt(t) {
        return t instanceof Rt(t).Element || t instanceof Element
    }

    function zt(t) {
        return t instanceof Rt(t).HTMLElement || t instanceof HTMLElement
    }

    function Ht(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Rt(t).ShadowRoot || t instanceof ShadowRoot)
    }

    var qt = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function (t) {
                var n = e.styles[t] || {}, i = e.attributes[t] || {}, s = e.elements[t];
                zt(s) && Nt(s) && (Object.assign(s.style, n), Object.keys(i).forEach((function (t) {
                    var e = i[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        }, effect: function (t) {
            var e = t.state, n = {
                popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
                Object.keys(e.elements).forEach((function (t) {
                    var i = e.elements[t], s = e.attributes[t] || {},
                        r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function (t, e) {
                            return t[e] = "", t
                        }), {});
                    zt(i) && Nt(i) && (Object.assign(i.style, r), Object.keys(s).forEach((function (t) {
                        i.removeAttribute(t)
                    })))
                }))
            }
        }, requires: ["computeStyles"]
    };

    function Wt(t) {
        return t.split("-")[0]
    }

    var $t = Math.max, Ut = Math.min, Yt = Math.round;

    function Kt() {
        var t = navigator.userAgentData;
        return null != t && t.brands ? t.brands.map((function (t) {
            return t.brand + "/" + t.version
        })).join(" ") : navigator.userAgent
    }

    function Xt() {
        return !/^((?!chrome|android).)*safari/i.test(Kt())
    }

    function Qt(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var i = t.getBoundingClientRect(), s = 1, r = 1;
        e && zt(t) && (s = t.offsetWidth > 0 && Yt(i.width) / t.offsetWidth || 1, r = t.offsetHeight > 0 && Yt(i.height) / t.offsetHeight || 1);
        var o = (Vt(t) ? Rt(t) : window).visualViewport, a = !Xt() && n, u = (i.left + (a && o ? o.offsetLeft : 0)) / s,
            l = (i.top + (a && o ? o.offsetTop : 0)) / r, c = i.width / s, h = i.height / r;
        return {width: c, height: h, top: l, right: u + c, bottom: l + h, left: u, x: u, y: l}
    }

    function Zt(t) {
        var e = Qt(t), n = t.offsetWidth, i = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: n,
            height: i
        }
    }

    function Gt(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && Ht(n)) {
            var i = e;
            do {
                if (i && t.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function Jt(t) {
        return Rt(t).getComputedStyle(t)
    }

    function te(t) {
        return ["table", "td", "th"].indexOf(Nt(t)) >= 0
    }

    function ee(t) {
        return ((Vt(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function ne(t) {
        return "html" === Nt(t) ? t : t.assignedSlot || t.parentNode || (Ht(t) ? t.host : null) || ee(t)
    }

    function ie(t) {
        return zt(t) && "fixed" !== Jt(t).position ? t.offsetParent : null
    }

    function se(t) {
        for (var e = Rt(t), n = ie(t); n && te(n) && "static" === Jt(n).position;) n = ie(n);
        return n && ("html" === Nt(n) || "body" === Nt(n) && "static" === Jt(n).position) ? e : n || function (t) {
            var e = /firefox/i.test(Kt());
            if (/Trident/i.test(Kt()) && zt(t) && "fixed" === Jt(t).position) return null;
            var n = ne(t);
            for (Ht(n) && (n = n.host); zt(n) && ["html", "body"].indexOf(Nt(n)) < 0;) {
                var i = Jt(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter) return n;
                n = n.parentNode
            }
            return null
        }(t) || e
    }

    function re(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function oe(t, e, n) {
        return $t(t, Ut(e, n))
    }

    function ae(t) {
        return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, t)
    }

    function ue(t, e) {
        return e.reduce((function (e, n) {
            return e[n] = t, e
        }), {})
    }

    var le = {
        name: "arrow", enabled: !0, phase: "main", fn: function (t) {
            var e, n = t.state, i = t.name, s = t.options, r = n.elements.arrow, o = n.modifiersData.popperOffsets,
                a = Wt(n.placement), u = re(a), l = [vt, mt].indexOf(a) >= 0 ? "height" : "width";
            if (r && o) {
                var c = function (t, e) {
                        return ae("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {placement: e.placement})) : t) ? t : ue(t, bt))
                    }(s.padding, n), h = Zt(r), d = "y" === u ? pt : vt, f = "y" === u ? gt : mt,
                    p = n.rects.reference[l] + n.rects.reference[u] - o[u] - n.rects.popper[l],
                    g = o[u] - n.rects.reference[u], m = se(r),
                    v = m ? "y" === u ? m.clientHeight || 0 : m.clientWidth || 0 : 0, _ = p / 2 - g / 2, b = c[d],
                    y = v - h[l] - c[f], k = v / 2 - h[l] / 2 + _, w = oe(b, k, y), A = u;
                n.modifiersData[i] = ((e = {})[A] = w, e.centerOffset = w - k, e)
            }
        }, effect: function (t) {
            var e = t.state, n = t.options.element, i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && Gt(e.elements.popper, i) && (e.elements.arrow = i)
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };

    function ce(t) {
        return t.split("-")[1]
    }

    var he = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function de(t) {
        var e, n = t.popper, i = t.popperRect, s = t.placement, r = t.variation, o = t.offsets, a = t.position,
            u = t.gpuAcceleration, l = t.adaptive, c = t.roundOffsets, h = t.isFixed, d = o.x, f = void 0 === d ? 0 : d,
            p = o.y, g = void 0 === p ? 0 : p, m = "function" == typeof c ? c({x: f, y: g}) : {x: f, y: g};
        f = m.x, g = m.y;
        var v = o.hasOwnProperty("x"), _ = o.hasOwnProperty("y"), b = vt, y = pt, k = window;
        if (l) {
            var w = se(n), A = "clientHeight", E = "clientWidth";
            if (w === Rt(n) && "static" !== Jt(w = ee(n)).position && "absolute" === a && (A = "scrollHeight", E = "scrollWidth"), s === pt || (s === vt || s === mt) && r === kt) y = gt, g -= (h && w === k && k.visualViewport ? k.visualViewport.height : w[A]) - i.height, g *= u ? 1 : -1;
            if (s === vt || (s === pt || s === gt) && r === kt) b = mt, f -= (h && w === k && k.visualViewport ? k.visualViewport.width : w[E]) - i.width, f *= u ? 1 : -1
        }
        var C, S = Object.assign({position: a}, l && he), x = !0 === c ? function (t) {
            var e = t.x, n = t.y, i = window.devicePixelRatio || 1;
            return {x: Yt(e * i) / i || 0, y: Yt(n * i) / i || 0}
        }({x: f, y: g}) : {x: f, y: g};
        return f = x.x, g = x.y, u ? Object.assign({}, S, ((C = {})[y] = _ ? "0" : "", C[b] = v ? "0" : "", C.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", C)) : Object.assign({}, S, ((e = {})[y] = _ ? g + "px" : "", e[b] = v ? f + "px" : "", e.transform = "", e))
    }

    var fe = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
            var e = t.state, n = t.options, i = n.gpuAcceleration, s = void 0 === i || i, r = n.adaptive,
                o = void 0 === r || r, a = n.roundOffsets, u = void 0 === a || a, l = {
                    placement: Wt(e.placement),
                    variation: ce(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, l, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: o,
                roundOffsets: u
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, l, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: u
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
        }, data: {}
    }, pe = {passive: !0};
    var ge = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, n = t.instance, i = t.options, s = i.scroll, r = void 0 === s || s, o = i.resize,
                a = void 0 === o || o, u = Rt(e.elements.popper),
                l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && l.forEach((function (t) {
                t.addEventListener("scroll", n.update, pe)
            })), a && u.addEventListener("resize", n.update, pe), function () {
                r && l.forEach((function (t) {
                    t.removeEventListener("scroll", n.update, pe)
                })), a && u.removeEventListener("resize", n.update, pe)
            }
        }, data: {}
    }, me = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function ve(t) {
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return me[t]
        }))
    }

    var _e = {start: "end", end: "start"};

    function be(t) {
        return t.replace(/start|end/g, (function (t) {
            return _e[t]
        }))
    }

    function ye(t) {
        var e = Rt(t);
        return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
    }

    function ke(t) {
        return Qt(ee(t)).left + ye(t).scrollLeft
    }

    function we(t) {
        var e = Jt(t), n = e.overflow, i = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + s + i)
    }

    function Ae(t) {
        return ["html", "body", "#document"].indexOf(Nt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ae(ne(t))
    }

    function Ee(t, e) {
        var n;
        void 0 === e && (e = []);
        var i = Ae(t), s = i === (null == (n = t.ownerDocument) ? void 0 : n.body), r = Rt(i),
            o = s ? [r].concat(r.visualViewport || [], we(i) ? i : []) : i, a = e.concat(o);
        return s ? a : a.concat(Ee(ne(o)))
    }

    function Ce(t) {
        return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
    }

    function Se(t, e, n) {
        return e === At ? Ce(function (t, e) {
            var n = Rt(t), i = ee(t), s = n.visualViewport, r = i.clientWidth, o = i.clientHeight, a = 0, u = 0;
            if (s) {
                r = s.width, o = s.height;
                var l = Xt();
                (l || !l && "fixed" === e) && (a = s.offsetLeft, u = s.offsetTop)
            }
            return {width: r, height: o, x: a + ke(t), y: u}
        }(t, n)) : Vt(e) ? function (t, e) {
            var n = Qt(t, !1, "fixed" === e);
            return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n
        }(e, n) : Ce(function (t) {
            var e, n = ee(t), i = ye(t), s = null == (e = t.ownerDocument) ? void 0 : e.body,
                r = $t(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                o = $t(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -i.scrollLeft + ke(t), u = -i.scrollTop;
            return "rtl" === Jt(s || n).direction && (a += $t(n.clientWidth, s ? s.clientWidth : 0) - r), {
                width: r,
                height: o,
                x: a,
                y: u
            }
        }(ee(t)))
    }

    function xe(t, e, n, i) {
        var s = "clippingParents" === e ? function (t) {
            var e = Ee(ne(t)), n = ["absolute", "fixed"].indexOf(Jt(t).position) >= 0 && zt(t) ? se(t) : t;
            return Vt(n) ? e.filter((function (t) {
                return Vt(t) && Gt(t, n) && "body" !== Nt(t)
            })) : []
        }(t) : [].concat(e), r = [].concat(s, [n]), o = r[0], a = r.reduce((function (e, n) {
            var s = Se(t, n, i);
            return e.top = $t(s.top, e.top), e.right = Ut(s.right, e.right), e.bottom = Ut(s.bottom, e.bottom), e.left = $t(s.left, e.left), e
        }), Se(t, o, i));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
    }

    function Te(t) {
        var e, n = t.reference, i = t.element, s = t.placement, r = s ? Wt(s) : null, o = s ? ce(s) : null,
            a = n.x + n.width / 2 - i.width / 2, u = n.y + n.height / 2 - i.height / 2;
        switch (r) {
            case pt:
                e = {x: a, y: n.y - i.height};
                break;
            case gt:
                e = {x: a, y: n.y + n.height};
                break;
            case mt:
                e = {x: n.x + n.width, y: u};
                break;
            case vt:
                e = {x: n.x - i.width, y: u};
                break;
            default:
                e = {x: n.x, y: n.y}
        }
        var l = r ? re(r) : null;
        if (null != l) {
            var c = "y" === l ? "height" : "width";
            switch (o) {
                case yt:
                    e[l] = e[l] - (n[c] / 2 - i[c] / 2);
                    break;
                case kt:
                    e[l] = e[l] + (n[c] / 2 - i[c] / 2)
            }
        }
        return e
    }

    function Fe(t, e) {
        void 0 === e && (e = {});
        var n = e, i = n.placement, s = void 0 === i ? t.placement : i, r = n.strategy,
            o = void 0 === r ? t.strategy : r, a = n.boundary, u = void 0 === a ? wt : a, l = n.rootBoundary,
            c = void 0 === l ? At : l, h = n.elementContext, d = void 0 === h ? Et : h, f = n.altBoundary,
            p = void 0 !== f && f, g = n.padding, m = void 0 === g ? 0 : g,
            v = ae("number" != typeof m ? m : ue(m, bt)), _ = d === Et ? Ct : Et, b = t.rects.popper,
            y = t.elements[p ? _ : d], k = xe(Vt(y) ? y : y.contextElement || ee(t.elements.popper), u, c, o),
            w = Qt(t.elements.reference), A = Te({reference: w, element: b, strategy: "absolute", placement: s}),
            E = Ce(Object.assign({}, b, A)), C = d === Et ? E : w, S = {
                top: k.top - C.top + v.top,
                bottom: C.bottom - k.bottom + v.bottom,
                left: k.left - C.left + v.left,
                right: C.right - k.right + v.right
            }, x = t.modifiersData.offset;
        if (d === Et && x) {
            var T = x[s];
            Object.keys(S).forEach((function (t) {
                var e = [mt, gt].indexOf(t) >= 0 ? 1 : -1, n = [pt, gt].indexOf(t) >= 0 ? "y" : "x";
                S[t] += T[n] * e
            }))
        }
        return S
    }

    function De(t, e) {
        void 0 === e && (e = {});
        var n = e, i = n.placement, s = n.boundary, r = n.rootBoundary, o = n.padding, a = n.flipVariations,
            u = n.allowedAutoPlacements, l = void 0 === u ? xt : u, c = ce(i),
            h = c ? a ? St : St.filter((function (t) {
                return ce(t) === c
            })) : bt, d = h.filter((function (t) {
                return l.indexOf(t) >= 0
            }));
        0 === d.length && (d = h);
        var f = d.reduce((function (e, n) {
            return e[n] = Fe(t, {placement: n, boundary: s, rootBoundary: r, padding: o})[Wt(n)], e
        }), {});
        return Object.keys(f).sort((function (t, e) {
            return f[t] - f[e]
        }))
    }

    var Oe = {
        name: "flip", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, n = t.options, i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var s = n.mainAxis, r = void 0 === s || s, o = n.altAxis, a = void 0 === o || o, u = n.fallbackPlacements, l = n.padding, c = n.boundary, h = n.rootBoundary, d = n.altBoundary, f = n.flipVariations, p = void 0 === f || f, g = n.allowedAutoPlacements, m = e.options.placement, v = Wt(m), _ = u || (v === m || !p ? [ve(m)] : function (t) {
                    if (Wt(t) === _t) return [];
                    var e = ve(t);
                    return [be(t), e, be(e)]
                }(m)), b = [m].concat(_).reduce((function (t, n) {
                    return t.concat(Wt(n) === _t ? De(e, {
                        placement: n,
                        boundary: c,
                        rootBoundary: h,
                        padding: l,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : n)
                }), []), y = e.rects.reference, k = e.rects.popper, w = new Map, A = !0, E = b[0], C = 0; C < b.length; C++) {
                    var S = b[C], x = Wt(S), T = ce(S) === yt, F = [pt, gt].indexOf(x) >= 0, D = F ? "width" : "height",
                        O = Fe(e, {placement: S, boundary: c, rootBoundary: h, altBoundary: d, padding: l}),
                        B = F ? T ? mt : vt : T ? gt : pt;
                    y[D] > k[D] && (B = ve(B));
                    var M = ve(B), P = [];
                    if (r && P.push(O[x] <= 0), a && P.push(O[B] <= 0, O[M] <= 0), P.every((function (t) {
                        return t
                    }))) {
                        E = S, A = !1;
                        break
                    }
                    w.set(S, P)
                }
                if (A) for (var I = function (t) {
                    var e = b.find((function (e) {
                        var n = w.get(e);
                        if (n) return n.slice(0, t).every((function (t) {
                            return t
                        }))
                    }));
                    if (e) return E = e, "break"
                }, L = p ? 3 : 1; L > 0; L--) {
                    if ("break" === I(L)) break
                }
                e.placement !== E && (e.modifiersData[i]._skip = !0, e.placement = E, e.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function Be(t, e, n) {
        return void 0 === n && (n = {x: 0, y: 0}), {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }

    function Me(t) {
        return [pt, mt, gt, vt].some((function (e) {
            return t[e] >= 0
        }))
    }

    var Pe = {
        name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
            var e = t.state, n = t.name, i = e.rects.reference, s = e.rects.popper, r = e.modifiersData.preventOverflow,
                o = Fe(e, {elementContext: "reference"}), a = Fe(e, {altBoundary: !0}), u = Be(o, i), l = Be(a, s, r),
                c = Me(u), h = Me(l);
            e.modifiersData[n] = {
                referenceClippingOffsets: u,
                popperEscapeOffsets: l,
                isReferenceHidden: c,
                hasPopperEscaped: h
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": c,
                "data-popper-escaped": h
            })
        }
    };
    var Ie = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
            var e = t.state, n = t.options, i = t.name, s = n.offset, r = void 0 === s ? [0, 0] : s,
                o = xt.reduce((function (t, n) {
                    return t[n] = function (t, e, n) {
                        var i = Wt(t), s = [vt, pt].indexOf(i) >= 0 ? -1 : 1,
                            r = "function" == typeof n ? n(Object.assign({}, e, {placement: t})) : n, o = r[0],
                            a = r[1];
                        return o = o || 0, a = (a || 0) * s, [vt, mt].indexOf(i) >= 0 ? {x: a, y: o} : {x: o, y: a}
                    }(n, e.rects, r), t
                }), {}), a = o[e.placement], u = a.x, l = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += l), e.modifiersData[i] = o
        }
    };
    var Le = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, n = t.name;
            e.modifiersData[n] = Te({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        }, data: {}
    };
    var je = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, n = t.options, i = t.name, s = n.mainAxis, r = void 0 === s || s, o = n.altAxis,
                a = void 0 !== o && o, u = n.boundary, l = n.rootBoundary, c = n.altBoundary, h = n.padding,
                d = n.tether, f = void 0 === d || d, p = n.tetherOffset, g = void 0 === p ? 0 : p,
                m = Fe(e, {boundary: u, rootBoundary: l, padding: h, altBoundary: c}), v = Wt(e.placement),
                _ = ce(e.placement), b = !_, y = re(v), k = "x" === y ? "y" : "x", w = e.modifiersData.popperOffsets,
                A = e.rects.reference, E = e.rects.popper,
                C = "function" == typeof g ? g(Object.assign({}, e.rects, {placement: e.placement})) : g,
                S = "number" == typeof C ? {mainAxis: C, altAxis: C} : Object.assign({mainAxis: 0, altAxis: 0}, C),
                x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, T = {x: 0, y: 0};
            if (w) {
                if (r) {
                    var F, D = "y" === y ? pt : vt, O = "y" === y ? gt : mt, B = "y" === y ? "height" : "width",
                        M = w[y], P = M + m[D], I = M - m[O], L = f ? -E[B] / 2 : 0, j = _ === yt ? A[B] : E[B],
                        N = _ === yt ? -E[B] : -A[B], R = e.elements.arrow, V = f && R ? Zt(R) : {width: 0, height: 0},
                        z = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, H = z[D], q = z[O], W = oe(0, A[B], V[B]),
                        $ = b ? A[B] / 2 - L - W - H - S.mainAxis : j - W - H - S.mainAxis,
                        U = b ? -A[B] / 2 + L + W + q + S.mainAxis : N + W + q + S.mainAxis,
                        Y = e.elements.arrow && se(e.elements.arrow),
                        K = Y ? "y" === y ? Y.clientTop || 0 : Y.clientLeft || 0 : 0,
                        X = null != (F = null == x ? void 0 : x[y]) ? F : 0, Q = M + U - X,
                        Z = oe(f ? Ut(P, M + $ - X - K) : P, M, f ? $t(I, Q) : I);
                    w[y] = Z, T[y] = Z - M
                }
                if (a) {
                    var G, J = "x" === y ? pt : vt, tt = "x" === y ? gt : mt, et = w[k],
                        nt = "y" === k ? "height" : "width", it = et + m[J], st = et - m[tt],
                        rt = -1 !== [pt, vt].indexOf(v), ot = null != (G = null == x ? void 0 : x[k]) ? G : 0,
                        at = rt ? it : et - A[nt] - E[nt] - ot + S.altAxis,
                        ut = rt ? et + A[nt] + E[nt] - ot - S.altAxis : st, lt = f && rt ? function (t, e, n) {
                            var i = oe(t, e, n);
                            return i > n ? n : i
                        }(at, et, ut) : oe(f ? at : it, et, f ? ut : st);
                    w[k] = lt, T[k] = lt - et
                }
                e.modifiersData[i] = T
            }
        }, requiresIfExists: ["offset"]
    };

    function Ne(t, e, n) {
        void 0 === n && (n = !1);
        var i, s, r = zt(e), o = zt(e) && function (t) {
            var e = t.getBoundingClientRect(), n = Yt(e.width) / t.offsetWidth || 1,
                i = Yt(e.height) / t.offsetHeight || 1;
            return 1 !== n || 1 !== i
        }(e), a = ee(e), u = Qt(t, o, n), l = {scrollLeft: 0, scrollTop: 0}, c = {x: 0, y: 0};
        return (r || !r && !n) && (("body" !== Nt(e) || we(a)) && (l = (i = e) !== Rt(i) && zt(i) ? {
            scrollLeft: (s = i).scrollLeft,
            scrollTop: s.scrollTop
        } : ye(i)), zt(e) ? ((c = Qt(e, !0)).x += e.clientLeft, c.y += e.clientTop) : a && (c.x = ke(a))), {
            x: u.left + l.scrollLeft - c.x,
            y: u.top + l.scrollTop - c.y,
            width: u.width,
            height: u.height
        }
    }

    function Re(t) {
        var e = new Map, n = new Set, i = [];

        function s(t) {
            n.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function (t) {
                if (!n.has(t)) {
                    var i = e.get(t);
                    i && s(i)
                }
            })), i.push(t)
        }

        return t.forEach((function (t) {
            e.set(t.name, t)
        })), t.forEach((function (t) {
            n.has(t.name) || s(t)
        })), i
    }

    var Ve = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function ze() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some((function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function He(t) {
        void 0 === t && (t = {});
        var e = t, n = e.defaultModifiers, i = void 0 === n ? [] : n, s = e.defaultOptions, r = void 0 === s ? Ve : s;
        return function (t, e, n) {
            void 0 === n && (n = r);
            var s, o, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Ve, r),
                modifiersData: {},
                elements: {reference: t, popper: e},
                attributes: {},
                styles: {}
            }, u = [], l = !1, c = {
                state: a, setOptions: function (n) {
                    var s = "function" == typeof n ? n(a.options) : n;
                    h(), a.options = Object.assign({}, r, a.options, s), a.scrollParents = {
                        reference: Vt(t) ? Ee(t) : t.contextElement ? Ee(t.contextElement) : [],
                        popper: Ee(e)
                    };
                    var o, l, d = function (t) {
                        var e = Re(t);
                        return jt.reduce((function (t, n) {
                            return t.concat(e.filter((function (t) {
                                return t.phase === n
                            })))
                        }), [])
                    }((o = [].concat(i, a.options.modifiers), l = o.reduce((function (t, e) {
                        var n = t[e.name];
                        return t[e.name] = n ? Object.assign({}, n, e, {
                            options: Object.assign({}, n.options, e.options),
                            data: Object.assign({}, n.data, e.data)
                        }) : e, t
                    }), {}), Object.keys(l).map((function (t) {
                        return l[t]
                    }))));
                    return a.orderedModifiers = d.filter((function (t) {
                        return t.enabled
                    })), a.orderedModifiers.forEach((function (t) {
                        var e = t.name, n = t.options, i = void 0 === n ? {} : n, s = t.effect;
                        if ("function" == typeof s) {
                            var r = s({state: a, name: e, instance: c, options: i}), o = function () {
                            };
                            u.push(r || o)
                        }
                    })), c.update()
                }, forceUpdate: function () {
                    if (!l) {
                        var t = a.elements, e = t.reference, n = t.popper;
                        if (ze(e, n)) {
                            a.rects = {
                                reference: Ne(e, se(n), "fixed" === a.options.strategy),
                                popper: Zt(n)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }));
                            for (var i = 0; i < a.orderedModifiers.length; i++) if (!0 !== a.reset) {
                                var s = a.orderedModifiers[i], r = s.fn, o = s.options, u = void 0 === o ? {} : o,
                                    h = s.name;
                                "function" == typeof r && (a = r({state: a, options: u, name: h, instance: c}) || a)
                            } else a.reset = !1, i = -1
                        }
                    }
                }, update: (s = function () {
                    return new Promise((function (t) {
                        c.forceUpdate(), t(a)
                    }))
                }, function () {
                    return o || (o = new Promise((function (t) {
                        Promise.resolve().then((function () {
                            o = void 0, t(s())
                        }))
                    }))), o
                }), destroy: function () {
                    h(), l = !0
                }
            };
            if (!ze(t, e)) return c;

            function h() {
                u.forEach((function (t) {
                    return t()
                })), u = []
            }

            return c.setOptions(n).then((function (t) {
                !l && n.onFirstUpdate && n.onFirstUpdate(t)
            })), c
        }
    }

    var qe = He(), We = He({defaultModifiers: [ge, Le, fe, qt]}),
        $e = He({defaultModifiers: [ge, Le, fe, qt, Ie, Oe, je, le, Pe]}), Ue = Object.freeze({
            __proto__: null,
            popperGenerator: He,
            detectOverflow: Fe,
            createPopperBase: qe,
            createPopper: $e,
            createPopperLite: We,
            top: pt,
            bottom: gt,
            right: mt,
            left: vt,
            auto: _t,
            basePlacements: bt,
            start: yt,
            end: kt,
            clippingParents: wt,
            viewport: At,
            popper: Et,
            reference: Ct,
            variationPlacements: St,
            placements: xt,
            beforeRead: Tt,
            read: Ft,
            afterRead: Dt,
            beforeMain: Ot,
            main: Bt,
            afterMain: Mt,
            beforeWrite: Pt,
            write: It,
            afterWrite: Lt,
            modifierPhases: jt,
            applyStyles: qt,
            arrow: le,
            computeStyles: fe,
            eventListeners: ge,
            flip: Oe,
            hide: Pe,
            offset: Ie,
            popperOffsets: Le,
            preventOverflow: je
        });
    /*!
          * Bootstrap v5.3.0-alpha1 (https://getbootstrap.com/)
          * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
          */
    const Ye = "transitionend",
        Ke = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))), t),
        Xe = t => {
            t.dispatchEvent(new Event(Ye))
        }, Qe = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Ze = t => Qe(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(Ke(t)) : null,
        Ge = t => {
            if (!Qe(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                n = t.closest("details:not([open])");
            if (!n) return e;
            if (n !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== n) return !1;
                if (null === e) return !1
            }
            return e
        },
        Je = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
        tn = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? tn(t.parentNode) : null
        }, en = () => {
        }, nn = t => {
            t.offsetHeight
        }, sn = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, rn = [],
        on = () => "rtl" === document.documentElement.dir, an = t => {
            var e;
            e = () => {
                const e = sn();
                if (e) {
                    const n = t.NAME, i = e.fn[n];
                    e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = () => (e.fn[n] = i, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (rn.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const t of rn) t()
            })), rn.push(e)) : e()
        }, un = (t, e = [], n = t) => "function" == typeof t ? t(...e) : n, ln = (t, e, n = !0) => {
            if (!n) return void un(t);
            const i = (t => {
                if (!t) return 0;
                let {transitionDuration: e, transitionDelay: n} = window.getComputedStyle(t);
                const i = Number.parseFloat(e), s = Number.parseFloat(n);
                return i || s ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
            })(e) + 5;
            let s = !1;
            const r = ({target: n}) => {
                n === e && (s = !0, e.removeEventListener(Ye, r), un(t))
            };
            e.addEventListener(Ye, r), setTimeout((() => {
                s || Xe(e)
            }), i)
        }, cn = (t, e, n, i) => {
            const s = t.length;
            let r = t.indexOf(e);
            return -1 === r ? !n && i ? t[s - 1] : t[0] : (r += n ? 1 : -1, i && (r = (r + s) % s), t[Math.max(0, Math.min(r, s - 1))])
        }, hn = /[^.]*(?=\..*)\.|.*/, dn = /\..*/, fn = /::\d+$/, pn = {};
    let gn = 1;
    const mn = {mouseenter: "mouseover", mouseleave: "mouseout"},
        vn = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function _n(t, e) {
        return e && `${e}::${gn++}` || t.uidEvent || gn++
    }

    function bn(t) {
        const e = _n(t);
        return t.uidEvent = e, pn[e] = pn[e] || {}, pn[e]
    }

    function yn(t, e, n = null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === n))
    }

    function kn(t, e, n) {
        const i = "string" == typeof e, s = i ? n : e || n;
        let r = Cn(t);
        return vn.has(r) || (r = t), [i, s, r]
    }

    function wn(t, e, n, i, s) {
        if ("string" != typeof e || !t) return;
        let [r, o, a] = kn(e, n, i);
        if (e in mn) {
            const t = t => function (e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            o = t(o)
        }
        const u = bn(t), l = u[a] || (u[a] = {}), c = yn(l, o, r ? n : null);
        if (c) return void (c.oneOff = c.oneOff && s);
        const h = _n(o, e.replace(hn, "")), d = r ? function (t, e, n) {
            return function i(s) {
                const r = t.querySelectorAll(e);
                for (let {target: o} = s; o && o !== this; o = o.parentNode) for (const a of r) if (a === o) return xn(s, {delegateTarget: o}), i.oneOff && Sn.off(t, s.type, e, n), n.apply(o, [s])
            }
        }(t, n, o) : function (t, e) {
            return function n(i) {
                return xn(i, {delegateTarget: t}), n.oneOff && Sn.off(t, i.type, e), e.apply(t, [i])
            }
        }(t, o);
        d.delegationSelector = r ? n : null, d.callable = o, d.oneOff = s, d.uidEvent = h, l[h] = d, t.addEventListener(a, d, r)
    }

    function An(t, e, n, i, s) {
        const r = yn(e[n], i, s);
        r && (t.removeEventListener(n, r, Boolean(s)), delete e[n][r.uidEvent])
    }

    function En(t, e, n, i) {
        const s = e[n] || {};
        for (const [r, o] of Object.entries(s)) r.includes(i) && An(t, e, n, o.callable, o.delegationSelector)
    }

    function Cn(t) {
        return t = t.replace(dn, ""), mn[t] || t
    }

    const Sn = {
        on(t, e, n, i) {
            wn(t, e, n, i, !1)
        }, one(t, e, n, i) {
            wn(t, e, n, i, !0)
        }, off(t, e, n, i) {
            if ("string" != typeof e || !t) return;
            const [s, r, o] = kn(e, n, i), a = o !== e, u = bn(t), l = u[o] || {}, c = e.startsWith(".");
            if (void 0 === r) {
                if (c) for (const n of Object.keys(u)) En(t, u, n, e.slice(1));
                for (const [n, i] of Object.entries(l)) {
                    const s = n.replace(fn, "");
                    a && !e.includes(s) || An(t, u, o, i.callable, i.delegationSelector)
                }
            } else {
                if (!Object.keys(l).length) return;
                An(t, u, o, r, s ? n : null)
            }
        }, trigger(t, e, n) {
            if ("string" != typeof e || !t) return null;
            const i = sn();
            let s = null, r = !0, o = !0, a = !1;
            e !== Cn(e) && i && (s = i.Event(e, n), i(t).trigger(s), r = !s.isPropagationStopped(), o = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            let u = new Event(e, {bubbles: r, cancelable: !0});
            return u = xn(u, n), a && u.preventDefault(), o && t.dispatchEvent(u), u.defaultPrevented && s && s.preventDefault(), u
        }
    };

    function xn(t, e = {}) {
        for (const [n, i] of Object.entries(e)) try {
            t[n] = i
        } catch (e) {
            Object.defineProperty(t, n, {configurable: !0, get: () => i})
        }
        return t
    }

    const Tn = new Map, Fn = {
        set(t, e, n) {
            Tn.has(t) || Tn.set(t, new Map);
            const i = Tn.get(t);
            i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        }, get: (t, e) => Tn.has(t) && Tn.get(t).get(e) || null, remove(t, e) {
            if (!Tn.has(t)) return;
            const n = Tn.get(t);
            n.delete(e), 0 === n.size && Tn.delete(t)
        }
    };

    function Dn(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function On(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }

    const Bn = {
        setDataAttribute(t, e, n) {
            t.setAttribute(`data-bs-${On(e)}`, n)
        }, removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${On(e)}`)
        }, getDataAttributes(t) {
            if (!t) return {};
            const e = {}, n = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const i of n) {
                let n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = Dn(t.dataset[i])
            }
            return e
        }, getDataAttribute: (t, e) => Dn(t.getAttribute(`data-bs-${On(e)}`))
    };

    class Mn {
        static get Default() {
            return {}
        }

        static get DefaultType() {
            return {}
        }

        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }

        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        _configAfterMerge(t) {
            return t
        }

        _mergeConfigObj(t, e) {
            const n = Qe(e) ? Bn.getDataAttribute(e, "config") : {};
            return {...this.constructor.Default, ..."object" == typeof n ? n : {}, ...Qe(e) ? Bn.getDataAttributes(e) : {}, ..."object" == typeof t ? t : {}}
        }

        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [i, s] of Object.entries(e)) {
                const e = t[i],
                    r = Qe(e) ? "element" : null == (n = e) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)
            }
            var n
        }
    }

    class Pn extends Mn {
        constructor(t, e) {
            super(), (t = Ze(t)) && (this._element = t, this._config = this._getConfig(e), Fn.set(this._element, this.constructor.DATA_KEY, this))
        }

        dispose() {
            Fn.remove(this._element, this.constructor.DATA_KEY), Sn.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null
        }

        _queueCallback(t, e, n = !0) {
            ln(t, e, n)
        }

        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        static getInstance(t) {
            return Fn.get(Ze(t), this.DATA_KEY)
        }

        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }

        static get VERSION() {
            return "5.3.0-alpha1"
        }

        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }

        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }

        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }

    const In = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let n = t.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith(".")) return null;
            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), e = n && "#" !== n ? n.trim() : null
        }
        return Ke(e)
    }, Ln = {
        find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
        parents(t, e) {
            const n = [];
            let i = t.parentNode.closest(e);
            for (; i;) n.push(i), i = i.parentNode.closest(e);
            return n
        },
        prev(t, e) {
            let n = t.previousElementSibling;
            for (; n;) {
                if (n.matches(e)) return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let n = t.nextElementSibling;
            for (; n;) {
                if (n.matches(e)) return [n];
                n = n.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
            return this.find(e, t).filter((t => !Je(t) && Ge(t)))
        },
        getSelectorFromElement(t) {
            const e = In(t);
            return e && Ln.findOne(e) ? e : null
        },
        getElementFromSelector(t) {
            const e = In(t);
            return e ? Ln.findOne(e) : null
        },
        getMultipleElementsFromSelector(t) {
            const e = In(t);
            return e ? Ln.find(e) : []
        }
    }, jn = (t, e = "hide") => {
        const n = `click.dismiss${t.EVENT_KEY}`, i = t.NAME;
        Sn.on(document, n, `[data-bs-dismiss="${i}"]`, (function (n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Je(this)) return;
            const s = Ln.getElementFromSelector(this) || this.closest(`.${i}`);
            t.getOrCreateInstance(s)[e]()
        }))
    };

    class Nn extends Pn {
        static get NAME() {
            return "alert"
        }

        close() {
            if (Sn.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }

        _destroyElement() {
            this._element.remove(), Sn.trigger(this._element, "closed.bs.alert"), this.dispose()
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Nn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    jn(Nn, "close"), an(Nn);
    const Rn = '[data-bs-toggle="button"]';

    class Vn extends Pn {
        static get NAME() {
            return "button"
        }

        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Vn.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }

    Sn.on(document, "click.bs.button.data-api", Rn, (t => {
        t.preventDefault();
        const e = t.target.closest(Rn);
        Vn.getOrCreateInstance(e).toggle()
    })), an(Vn);
    const zn = ".bs.swipe", Hn = {endCallback: null, leftCallback: null, rightCallback: null},
        qn = {endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)"};

    class Wn extends Mn {
        constructor(t, e) {
            super(), this._element = t, t && Wn.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }

        static get Default() {
            return Hn
        }

        static get DefaultType() {
            return qn
        }

        static get NAME() {
            return "swipe"
        }

        dispose() {
            Sn.off(this._element, zn)
        }

        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }

        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), un(this._config.endCallback)
        }

        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }

        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && un(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }

        _initEvents() {
            this._supportPointerEvents ? (Sn.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), Sn.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : (Sn.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), Sn.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), Sn.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
        }

        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }

        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }

    const $n = "next", Un = "prev", Yn = "left", Kn = "right", Xn = "slid.bs.carousel", Qn = "carousel", Zn = "active",
        Gn = ".active", Jn = ".carousel-item", ti = {ArrowLeft: Kn, ArrowRight: Yn},
        ei = {interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0}, ni = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };

    class ii extends Pn {
        constructor(t, e) {
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Ln.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Qn && this.cycle()
        }

        static get Default() {
            return ei
        }

        static get DefaultType() {
            return ni
        }

        static get NAME() {
            return "carousel"
        }

        next() {
            this._slide($n)
        }

        nextWhenVisible() {
            !document.hidden && Ge(this._element) && this.next()
        }

        prev() {
            this._slide(Un)
        }

        pause() {
            this._isSliding && Xe(this._element), this._clearInterval()
        }

        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
        }

        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? Sn.one(this._element, Xn, (() => this.cycle())) : this.cycle())
        }

        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void Sn.one(this._element, Xn, (() => this.to(t)));
            const n = this._getItemIndex(this._getActive());
            if (n === t) return;
            const i = t > n ? $n : Un;
            this._slide(i, e[t])
        }

        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }

        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t
        }

        _addEventListeners() {
            this._config.keyboard && Sn.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (Sn.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), Sn.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && Wn.isSupported() && this._addTouchEventListeners()
        }

        _addTouchEventListeners() {
            for (const t of Ln.find(".carousel-item img", this._element)) Sn.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(Yn)),
                rightCallback: () => this._slide(this._directionToOrder(Kn)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new Wn(this._element, t)
        }

        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = ti[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }

        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }

        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = Ln.findOne(Gn, this._indicatorsElement);
            e.classList.remove(Zn), e.removeAttribute("aria-current");
            const n = Ln.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            n && (n.classList.add(Zn), n.setAttribute("aria-current", "true"))
        }

        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }

        _slide(t, e = null) {
            if (this._isSliding) return;
            const n = this._getActive(), i = t === $n, s = e || cn(this._getItems(), n, i, this._config.wrap);
            if (s === n) return;
            const r = this._getItemIndex(s), o = e => Sn.trigger(this._element, e, {
                relatedTarget: s,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(n),
                to: r
            });
            if (o("slide.bs.carousel").defaultPrevented) return;
            if (!n || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(r), this._activeElement = s;
            const u = i ? "carousel-item-start" : "carousel-item-end",
                l = i ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(l), nn(s), n.classList.add(u), s.classList.add(u);
            this._queueCallback((() => {
                s.classList.remove(u, l), s.classList.add(Zn), n.classList.remove(Zn, l, u), this._isSliding = !1, o(Xn)
            }), n, this._isAnimated()), a && this.cycle()
        }

        _isAnimated() {
            return this._element.classList.contains("slide")
        }

        _getActive() {
            return Ln.findOne(".active.carousel-item", this._element)
        }

        _getItems() {
            return Ln.find(Jn, this._element)
        }

        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }

        _directionToOrder(t) {
            return on() ? t === Yn ? Un : $n : t === Yn ? $n : Un
        }

        _orderToDirection(t) {
            return on() ? t === Un ? Yn : Kn : t === Un ? Kn : Yn
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = ii.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else e.to(t)
            }))
        }
    }

    Sn.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function (t) {
        const e = Ln.getElementFromSelector(this);
        if (!e || !e.classList.contains(Qn)) return;
        t.preventDefault();
        const n = ii.getOrCreateInstance(e), i = this.getAttribute("data-bs-slide-to");
        return i ? (n.to(i), void n._maybeEnableCycle()) : "next" === Bn.getDataAttribute(this, "slide") ? (n.next(), void n._maybeEnableCycle()) : (n.prev(), void n._maybeEnableCycle())
    })), Sn.on(window, "load.bs.carousel.data-api", (() => {
        const t = Ln.find('[data-bs-ride="carousel"]');
        for (const e of t) ii.getOrCreateInstance(e)
    })), an(ii);
    const si = "show", ri = "collapse", oi = "collapsing", ai = '[data-bs-toggle="collapse"]',
        ui = {parent: null, toggle: !0}, li = {parent: "(null|element)", toggle: "boolean"};

    class ci extends Pn {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const n = Ln.find(ai);
            for (const t of n) {
                const e = Ln.getSelectorFromElement(t), n = Ln.find(e).filter((t => t === this._element));
                null !== e && n.length && this._triggerArray.push(t)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }

        static get Default() {
            return ui
        }

        static get DefaultType() {
            return li
        }

        static get NAME() {
            return "collapse"
        }

        toggle() {
            this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => ci.getOrCreateInstance(t, {toggle: !1})))), t.length && t[0]._isTransitioning) return;
            if (Sn.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ri), this._element.classList.add(oi), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const n = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(oi), this._element.classList.add(ri, si), this._element.style[e] = "", Sn.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[e] = `${this._element[n]}px`
        }

        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (Sn.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, nn(this._element), this._element.classList.add(oi), this._element.classList.remove(ri, si);
            for (const t of this._triggerArray) {
                const e = Ln.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0;
            this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(oi), this._element.classList.add(ri), Sn.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }

        _isShown(t = this._element) {
            return t.classList.contains(si)
        }

        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = Ze(t.parent), t
        }

        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }

        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(ai);
            for (const e of t) {
                const t = Ln.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }

        _getFirstLevelChildren(t) {
            const e = Ln.find(":scope .collapse .collapse", this._config.parent);
            return Ln.find(t, this._config.parent).filter((t => !e.includes(t)))
        }

        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const n of t) n.classList.toggle("collapsed", !e), n.setAttribute("aria-expanded", e)
        }

        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function () {
                const n = ci.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                    n[t]()
                }
            }))
        }
    }

    Sn.on(document, "click.bs.collapse.data-api", ai, (function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of Ln.getMultipleElementsFromSelector(this)) ci.getOrCreateInstance(t, {toggle: !1}).toggle()
    })), an(ci);
    const hi = "dropdown", di = "ArrowUp", fi = "ArrowDown", pi = "click.bs.dropdown.data-api",
        gi = "keydown.bs.dropdown.data-api", mi = "show",
        vi = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', _i = `${vi}.show`, bi = ".dropdown-menu",
        yi = on() ? "top-end" : "top-start", ki = on() ? "top-start" : "top-end",
        wi = on() ? "bottom-end" : "bottom-start", Ai = on() ? "bottom-start" : "bottom-end",
        Ei = on() ? "left-start" : "right-start", Ci = on() ? "right-start" : "left-start", Si = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        }, xi = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };

    class Ti extends Pn {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = Ln.next(this._element, bi)[0] || Ln.prev(this._element, bi)[0] || Ln.findOne(bi, this._parent), this._inNavbar = this._detectNavbar()
        }

        static get Default() {
            return Si
        }

        static get DefaultType() {
            return xi
        }

        static get NAME() {
            return hi
        }

        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (Je(this._element) || this._isShown()) return;
            const t = {relatedTarget: this._element};
            if (!Sn.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children)) Sn.on(t, "mouseover", en);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(mi), this._element.classList.add(mi), Sn.trigger(this._element, "shown.bs.dropdown", t)
            }
        }

        hide() {
            if (Je(this._element) || !this._isShown()) return;
            const t = {relatedTarget: this._element};
            this._completeHide(t)
        }

        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }

        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }

        _completeHide(t) {
            if (!Sn.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) Sn.off(t, "mouseover", en);
                this._popper && this._popper.destroy(), this._menu.classList.remove(mi), this._element.classList.remove(mi), this._element.setAttribute("aria-expanded", "false"), Bn.removeDataAttribute(this._menu, "popper"), Sn.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }

        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !Qe(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${hi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }

        _createPopper() {
            if (void 0 === Ue) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : Qe(this._config.reference) ? t = Ze(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = $e(t, this._menu, e)
        }

        _isShown() {
            return this._menu.classList.contains(mi)
        }

        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Ei;
            if (t.classList.contains("dropstart")) return Ci;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ki : yi : e ? Ai : wi
        }

        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }

        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                    name: "offset",
                    options: {offset: this._getOffset()}
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (Bn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {...t, ...un(this._config.popperConfig, [t])}
        }

        _selectMenuItem({key: t, target: e}) {
            const n = Ln.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => Ge(t)));
            n.length && cn(n, e, t === fi, !n.includes(e)).focus()
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Ti.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }

        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = Ln.find(_i);
            for (const n of e) {
                const e = Ti.getInstance(n);
                if (!e || !1 === e._config.autoClose) continue;
                const i = t.composedPath(), s = i.includes(e._menu);
                if (i.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const r = {relatedTarget: e._element};
                "click" === t.type && (r.clickEvent = t), e._completeHide(r)
            }
        }

        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), n = "Escape" === t.key, i = [di, fi].includes(t.key);
            if (!i && !n) return;
            if (e && !n) return;
            t.preventDefault();
            const s = this.matches(vi) ? this : Ln.prev(this, vi)[0] || Ln.next(this, vi)[0] || Ln.findOne(vi, t.delegateTarget.parentNode),
                r = Ti.getOrCreateInstance(s);
            if (i) return t.stopPropagation(), r.show(), void r._selectMenuItem(t);
            r._isShown() && (t.stopPropagation(), r.hide(), s.focus())
        }
    }

    Sn.on(document, gi, vi, Ti.dataApiKeydownHandler), Sn.on(document, gi, bi, Ti.dataApiKeydownHandler), Sn.on(document, pi, Ti.clearMenus), Sn.on(document, "keyup.bs.dropdown.data-api", Ti.clearMenus), Sn.on(document, pi, vi, (function (t) {
        t.preventDefault(), Ti.getOrCreateInstance(this).toggle()
    })), an(Ti);
    const Fi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Di = ".sticky-top", Oi = "padding-right",
        Bi = "margin-right";

    class Mi {
        constructor() {
            this._element = document.body
        }

        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }

        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, Oi, (e => e + t)), this._setElementAttributes(Fi, Oi, (e => e + t)), this._setElementAttributes(Di, Bi, (e => e - t))
        }

        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Oi), this._resetElementAttributes(Fi, Oi), this._resetElementAttributes(Di, Bi)
        }

        isOverflowing() {
            return this.getWidth() > 0
        }

        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }

        _setElementAttributes(t, e, n) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + i) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${n(Number.parseFloat(s))}px`)
            }))
        }

        _saveInitialAttribute(t, e) {
            const n = t.style.getPropertyValue(e);
            n && Bn.setDataAttribute(t, e, n)
        }

        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const n = Bn.getDataAttribute(t, e);
                null !== n ? (Bn.removeDataAttribute(t, e), t.style.setProperty(e, n)) : t.style.removeProperty(e)
            }))
        }

        _applyManipulationCallback(t, e) {
            if (Qe(t)) e(t); else for (const n of Ln.find(t, this._element)) e(n)
        }
    }

    const Pi = "backdrop", Ii = "show", Li = "mousedown.bs.backdrop",
        ji = {className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body"},
        Ni = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };

    class Ri extends Mn {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }

        static get Default() {
            return ji
        }

        static get DefaultType() {
            return Ni
        }

        static get NAME() {
            return Pi
        }

        show(t) {
            if (!this._config.isVisible) return void un(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && nn(e), e.classList.add(Ii), this._emulateAnimation((() => {
                un(t)
            }))
        }

        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ii), this._emulateAnimation((() => {
                this.dispose(), un(t)
            }))) : un(t)
        }

        dispose() {
            this._isAppended && (Sn.off(this._element, Li), this._element.remove(), this._isAppended = !1)
        }

        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }

        _configAfterMerge(t) {
            return t.rootElement = Ze(t.rootElement), t
        }

        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), Sn.on(t, Li, (() => {
                un(this._config.clickCallback)
            })), this._isAppended = !0
        }

        _emulateAnimation(t) {
            ln(t, this._getElement(), this._config.isAnimated)
        }
    }

    const Vi = ".bs.focustrap", zi = "backward", Hi = {autofocus: !0, trapElement: null},
        qi = {autofocus: "boolean", trapElement: "element"};

    class Wi extends Mn {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }

        static get Default() {
            return Hi
        }

        static get DefaultType() {
            return qi
        }

        static get NAME() {
            return "focustrap"
        }

        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), Sn.off(document, Vi), Sn.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), Sn.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
        }

        deactivate() {
            this._isActive && (this._isActive = !1, Sn.off(document, Vi))
        }

        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const n = Ln.focusableChildren(e);
            0 === n.length ? e.focus() : this._lastTabNavDirection === zi ? n[n.length - 1].focus() : n[0].focus()
        }

        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? zi : "forward")
        }
    }

    const $i = ".bs.modal", Ui = "hidden.bs.modal", Yi = "show.bs.modal", Ki = "modal-open", Xi = "show",
        Qi = "modal-static", Zi = {backdrop: !0, focus: !0, keyboard: !0},
        Gi = {backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean"};

    class Ji extends Pn {
        constructor(t, e) {
            super(t, e), this._dialog = Ln.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Mi, this._addEventListeners()
        }

        static get Default() {
            return Zi
        }

        static get DefaultType() {
            return Gi
        }

        static get NAME() {
            return "modal"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            if (this._isShown || this._isTransitioning) return;
            Sn.trigger(this._element, Yi, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ki), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
        }

        hide() {
            if (!this._isShown || this._isTransitioning) return;
            Sn.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Xi), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated()))
        }

        dispose() {
            for (const t of [window, this._dialog]) Sn.off(t, $i);
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        handleUpdate() {
            this._adjustDialog()
        }

        _initializeBackDrop() {
            return new Ri({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
        }

        _initializeFocusTrap() {
            return new Wi({trapElement: this._element})
        }

        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = Ln.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), nn(this._element), this._element.classList.add(Xi);
            this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, Sn.trigger(this._element, "shown.bs.modal", {relatedTarget: t})
            }), this._dialog, this._isAnimated())
        }

        _addEventListeners() {
            Sn.on(this._element, "keydown.dismiss.bs.modal", (t => {
                if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
            })), Sn.on(window, "resize.bs.modal", (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), Sn.on(this._element, "mousedown.dismiss.bs.modal", (t => {
                Sn.one(this._element, "click.dismiss.bs.modal", (e => {
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }))
            }))
        }

        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(Ki), this._resetAdjustments(), this._scrollBar.reset(), Sn.trigger(this._element, Ui)
            }))
        }

        _isAnimated() {
            return this._element.classList.contains("fade")
        }

        _triggerBackdropTransition() {
            if (Sn.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(Qi) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Qi), this._queueCallback((() => {
                this._element.classList.remove(Qi), this._queueCallback((() => {
                    this._element.style.overflowY = e
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }

        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(), n = e > 0;
            if (n && !t) {
                const t = on() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!n && t) {
                const t = on() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }

        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }

        static jQueryInterface(t, e) {
            return this.each((function () {
                const n = Ji.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                    n[t](e)
                }
            }))
        }
    }

    Sn.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
        const e = Ln.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), Sn.one(e, Yi, (t => {
            t.defaultPrevented || Sn.one(e, Ui, (() => {
                Ge(this) && this.focus()
            }))
        }));
        const n = Ln.findOne(".modal.show");
        n && Ji.getInstance(n).hide();
        Ji.getOrCreateInstance(e).toggle(this)
    })), jn(Ji), an(Ji);
    const ts = "show", es = "showing", ns = "hiding", is = ".offcanvas.show", ss = "hidePrevented.bs.offcanvas",
        rs = "hidden.bs.offcanvas", os = {backdrop: !0, keyboard: !0, scroll: !1},
        as = {backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean"};

    class us extends Pn {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }

        static get Default() {
            return os
        }

        static get DefaultType() {
            return as
        }

        static get NAME() {
            return "offcanvas"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            if (this._isShown) return;
            if (Sn.trigger(this._element, "show.bs.offcanvas", {relatedTarget: t}).defaultPrevented) return;
            this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Mi).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(es);
            this._queueCallback((() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(ts), this._element.classList.remove(es), Sn.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: t})
            }), this._element, !0)
        }

        hide() {
            if (!this._isShown) return;
            if (Sn.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
            this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ns), this._backdrop.hide();
            this._queueCallback((() => {
                this._element.classList.remove(ts, ns), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Mi).reset(), Sn.trigger(this._element, rs)
            }), this._element, !0)
        }

        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ri({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : Sn.trigger(this._element, ss)
                } : null
            })
        }

        _initializeFocusTrap() {
            return new Wi({trapElement: this._element})
        }

        _addEventListeners() {
            Sn.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : Sn.trigger(this._element, ss))
            }))
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    Sn.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) {
        const e = Ln.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Je(this)) return;
        Sn.one(e, rs, (() => {
            Ge(this) && this.focus()
        }));
        const n = Ln.findOne(is);
        n && n !== e && us.getInstance(n).hide();
        us.getOrCreateInstance(e).toggle(this)
    })), Sn.on(window, "load.bs.offcanvas.data-api", (() => {
        for (const t of Ln.find(is)) us.getOrCreateInstance(t).show()
    })), Sn.on(window, "resize.bs.offcanvas", (() => {
        for (const t of Ln.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && us.getOrCreateInstance(t).hide()
    })), jn(us), an(us);
    const ls = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        cs = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        hs = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        ds = (t, e) => {
            const n = t.nodeName.toLowerCase();
            return e.includes(n) ? !ls.has(n) || Boolean(cs.test(t.nodeValue) || hs.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(n)))
        }, fs = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };
    const ps = {
        allowList: fs,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }, gs = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }, ms = {entry: "(string|element|function|null)", selector: "(string|element)"};

    class vs extends Mn {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }

        static get Default() {
            return ps
        }

        static get DefaultType() {
            return gs
        }

        static get NAME() {
            return "TemplateFactory"
        }

        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }

        hasContent() {
            return this.getContent().length > 0
        }

        changeContent(t) {
            return this._checkContent(t), this._config.content = {...this._config.content, ...t}, this
        }

        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, n] of Object.entries(this._config.content)) this._setContent(t, n, e);
            const e = t.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
            return n && e.classList.add(...n.split(" ")), e
        }

        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }

        _checkContent(t) {
            for (const [e, n] of Object.entries(t)) super._typeCheckConfig({selector: e, entry: n}, ms)
        }

        _setContent(t, e, n) {
            const i = Ln.findOne(n, t);
            i && ((e = this._resolvePossibleFunction(e)) ? Qe(e) ? this._putElementInTemplate(Ze(e), i) : this._config.html ? i.innerHTML = this._maybeSanitize(e) : i.textContent = e : i.remove())
        }

        _maybeSanitize(t) {
            return this._config.sanitize ? function (t, e, n) {
                if (!t.length) return t;
                if (n && "function" == typeof n) return n(t);
                const i = (new window.DOMParser).parseFromString(t, "text/html"),
                    s = [].concat(...i.body.querySelectorAll("*"));
                for (const t of s) {
                    const n = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(n)) {
                        t.remove();
                        continue
                    }
                    const i = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[n] || []);
                    for (const e of i) ds(e, s) || t.removeAttribute(e.nodeName)
                }
                return i.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }

        _resolvePossibleFunction(t) {
            return un(t, [this])
        }

        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent
        }
    }

    const _s = new Set(["sanitize", "allowList", "sanitizeFn"]), bs = "fade", ys = "show", ks = ".modal",
        ws = "hide.bs.modal", As = "hover", Es = "focus", Cs = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: on() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: on() ? "right" : "left"
        }, Ss = {
            allowList: fs,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        }, xs = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };

    class Ts extends Pn {
        constructor(t, e) {
            if (void 0 === Ue) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
        }

        static get Default() {
            return Ss
        }

        static get DefaultType() {
            return xs
        }

        static get NAME() {
            return "tooltip"
        }

        enable() {
            this._isEnabled = !0
        }

        disable() {
            this._isEnabled = !1
        }

        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }

        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
        }

        dispose() {
            clearTimeout(this._timeout), Sn.off(this._element.closest(ks), ws, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
        }

        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = Sn.trigger(this._element, this.constructor.eventName("show")),
                e = (tn(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const n = this._getTipElement();
            this._element.setAttribute("aria-describedby", n.getAttribute("id"));
            const {container: i} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(n), Sn.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add(ys), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) Sn.on(t, "mouseover", en);
            this._queueCallback((() => {
                Sn.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
            }), this.tip, this._isAnimated())
        }

        hide() {
            if (!this._isShown()) return;
            if (Sn.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            if (this._getTipElement().classList.remove(ys), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) Sn.off(t, "mouseover", en);
            this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null;
            this._queueCallback((() => {
                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), Sn.trigger(this._element, this.constructor.eventName("hidden")))
            }), this.tip, this._isAnimated())
        }

        update() {
            this._popper && this._popper.update()
        }

        _isWithContent() {
            return Boolean(this._getTitle())
        }

        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }

        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(bs, ys), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const n = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", n), this._isAnimated() && e.classList.add(bs), e
        }

        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
        }

        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new vs({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }

        _getContentForTemplate() {
            return {".tooltip-inner": this._getTitle()}
        }

        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }

        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }

        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(bs)
        }

        _isShown() {
            return this.tip && this.tip.classList.contains(ys)
        }

        _createPopper(t) {
            const e = un(this._config.placement, [this, t, this._element]), n = Cs[e.toUpperCase()];
            return $e(this._element, t, this._getPopperConfig(n))
        }

        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _resolvePossibleFunction(t) {
            return un(t, [this._element])
        }

        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {fallbackPlacements: this._config.fallbackPlacements}
                }, {name: "offset", options: {offset: this._getOffset()}}, {
                    name: "preventOverflow",
                    options: {boundary: this._config.boundary}
                }, {name: "arrow", options: {element: `.${this.constructor.NAME}-arrow`}}, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {...e, ...un(this._config.popperConfig, [e])}
        }

        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t) if ("click" === e) Sn.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                this._initializeOnDelegatedTarget(t).toggle()
            })); else if ("manual" !== e) {
                const t = e === As ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    n = e === As ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                Sn.on(this._element, t, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? Es : As] = !0, e._enter()
                })), Sn.on(this._element, n, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? Es : As] = e._element.contains(t.relatedTarget), e._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, Sn.on(this._element.closest(ks), ws, this._hideModalHandler)
        }

        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
        }

        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }

        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }

        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }

        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }

        _getConfig(t) {
            const e = Bn.getDataAttributes(this._element);
            for (const t of Object.keys(e)) _s.has(t) && delete e[t];
            return t = {...e, ..."object" == typeof t && t ? t : {}}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : Ze(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }

        _getDelegateConfig() {
            const t = {};
            for (const [e, n] of Object.entries(this._config)) this.constructor.Default[e] !== n && (t[e] = n);
            return t.selector = !1, t.trigger = "manual", t
        }

        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Ts.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    an(Ts);
    const Fs = {
        ...Ts.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, Ds = {...Ts.DefaultType, content: "(null|string|element|function)"};

    class Os extends Ts {
        static get Default() {
            return Fs
        }

        static get DefaultType() {
            return Ds
        }

        static get NAME() {
            return "popover"
        }

        _isWithContent() {
            return this._getTitle() || this._getContent()
        }

        _getContentForTemplate() {
            return {".popover-header": this._getTitle(), ".popover-body": this._getContent()}
        }

        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Os.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    an(Os);
    const Bs = "click.bs.scrollspy", Ms = "active", Ps = "[href]",
        Is = {offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1]}, Ls = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };

    class js extends Pn {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }

        static get Default() {
            return Is
        }

        static get DefaultType() {
            return Ls
        }

        static get NAME() {
            return "scrollspy"
        }

        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values()) this._observer.observe(t)
        }

        dispose() {
            this._observer.disconnect(), super.dispose()
        }

        _configAfterMerge(t) {
            return t.target = Ze(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t
        }

        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (Sn.off(this._config.target, Bs), Sn.on(this._config.target, Bs, Ps, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const n = this._rootElement || window, i = e.offsetTop - this._element.offsetTop;
                    if (n.scrollTo) return void n.scrollTo({top: i, behavior: "smooth"});
                    n.scrollTop = i
                }
            })))
        }

        _getNewObserver() {
            const t = {root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin};
            return new IntersectionObserver((t => this._observerCallback(t)), t)
        }

        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`), n = t => {
                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                }, i = (this._rootElement || document.documentElement).scrollTop,
                s = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const r of t) {
                if (!r.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(r));
                    continue
                }
                const t = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (n(r), !i) return
                } else s || t || n(r)
            }
        }

        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = Ln.find(Ps, this._config.target);
            for (const e of t) {
                if (!e.hash || Je(e)) continue;
                const t = Ln.findOne(e.hash, this._element);
                Ge(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t))
            }
        }

        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Ms), this._activateParents(t), Sn.trigger(this._element, "activate.bs.scrollspy", {relatedTarget: t}))
        }

        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) Ln.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Ms); else for (const e of Ln.parents(t, ".nav, .list-group")) for (const t of Ln.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(Ms)
        }

        _clearActiveClass(t) {
            t.classList.remove(Ms);
            const e = Ln.find("[href].active", t);
            for (const t of e) t.classList.remove(Ms)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = js.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    Sn.on(window, "load.bs.scrollspy.data-api", (() => {
        for (const t of Ln.find('[data-bs-spy="scroll"]')) js.getOrCreateInstance(t)
    })), an(js);
    const Ns = "ArrowLeft", Rs = "ArrowRight", Vs = "ArrowUp", zs = "ArrowDown", Hs = "active", qs = "fade",
        Ws = "show", $s = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Us = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${$s}`;

    class Ys extends Pn {
        constructor(t) {
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), Sn.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
        }

        static get NAME() {
            return "tab"
        }

        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), n = e ? Sn.trigger(e, "hide.bs.tab", {relatedTarget: t}) : null;
            Sn.trigger(t, "show.bs.tab", {relatedTarget: e}).defaultPrevented || n && n.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
        }

        _activate(t, e) {
            if (!t) return;
            t.classList.add(Hs), this._activate(Ln.getElementFromSelector(t));
            this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), Sn.trigger(t, "shown.bs.tab", {relatedTarget: e})) : t.classList.add(Ws)
            }), t, t.classList.contains(qs))
        }

        _deactivate(t, e) {
            if (!t) return;
            t.classList.remove(Hs), t.blur(), this._deactivate(Ln.getElementFromSelector(t));
            this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), Sn.trigger(t, "hidden.bs.tab", {relatedTarget: e})) : t.classList.remove(Ws)
            }), t, t.classList.contains(qs))
        }

        _keydown(t) {
            if (![Ns, Rs, Vs, zs].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = [Rs, zs].includes(t.key), n = cn(this._getChildren().filter((t => !Je(t))), t.target, e, !0);
            n && (n.focus({preventScroll: !0}), Ys.getOrCreateInstance(n).show())
        }

        _getChildren() {
            return Ln.find(Us, this._parent)
        }

        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }

        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t)
        }

        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), n = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), n !== t && this._setAttributeIfNotExists(n, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }

        _setInitialAttributesOnTargetPanel(t) {
            const e = Ln.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }

        _toggleDropDown(t, e) {
            const n = this._getOuterElement(t);
            if (!n.classList.contains("dropdown")) return;
            const i = (t, i) => {
                const s = Ln.findOne(t, n);
                s && s.classList.toggle(i, e)
            };
            i(".dropdown-toggle", Hs), i(".dropdown-menu", Ws), n.setAttribute("aria-expanded", e)
        }

        _setAttributeIfNotExists(t, e, n) {
            t.hasAttribute(e) || t.setAttribute(e, n)
        }

        _elemIsActive(t) {
            return t.classList.contains(Hs)
        }

        _getInnerElement(t) {
            return t.matches(Us) ? t : Ln.findOne(Us, t)
        }

        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Ys.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    Sn.on(document, "click.bs.tab", $s, (function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), Je(this) || Ys.getOrCreateInstance(this).show()
    })), Sn.on(window, "load.bs.tab", (() => {
        for (const t of Ln.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) Ys.getOrCreateInstance(t)
    })), an(Ys);
    const Ks = "hide", Xs = "show", Qs = "showing", Zs = {animation: "boolean", autohide: "boolean", delay: "number"},
        Gs = {animation: !0, autohide: !0, delay: 5e3};

    class Js extends Pn {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }

        static get Default() {
            return Gs
        }

        static get DefaultType() {
            return Zs
        }

        static get NAME() {
            return "toast"
        }

        show() {
            if (Sn.trigger(this._element, "show.bs.toast").defaultPrevented) return;
            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove(Ks), nn(this._element), this._element.classList.add(Xs, Qs), this._queueCallback((() => {
                this._element.classList.remove(Qs), Sn.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation)
        }

        hide() {
            if (!this.isShown()) return;
            if (Sn.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
            this._element.classList.add(Qs), this._queueCallback((() => {
                this._element.classList.add(Ks), this._element.classList.remove(Qs, Xs), Sn.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)
        }

        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(Xs), super.dispose()
        }

        isShown() {
            return this._element.classList.contains(Xs)
        }

        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }

        _onInteraction(t, e) {
            switch (t.type) {
                case"mouseover":
                case"mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case"focusin":
                case"focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const n = t.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }

        _setListeners() {
            Sn.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), Sn.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), Sn.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), Sn.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
        }

        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Js.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    jn(Js), an(Js);
    var tr = Object.freeze({
        __proto__: null,
        Alert: Nn,
        Button: Vn,
        Carousel: ii,
        Collapse: ci,
        Dropdown: Ti,
        Modal: Ji,
        Offcanvas: us,
        Popover: Os,
        ScrollSpy: js,
        Tab: Ys,
        Toast: Js,
        Tooltip: Ts
    });
    [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]')).map((function (t) {
        var e = {boundary: "viewport" === t.getAttribute("data-bs-boundary") ? document.querySelector(".btn") : "clippingParents"};
        return new Ti(t, e)
    })), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function (t) {
        var e, n, i = {
            delay: {show: 50, hide: 50},
            html: null !== (e = "true" === t.getAttribute("data-bs-html")) && void 0 !== e && e,
            placement: null !== (n = t.getAttribute("data-bs-placement")) && void 0 !== n ? n : "auto"
        };
        return new Ts(t, i)
    })), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function (t) {
        var e, n, i = {
            delay: {show: 50, hide: 50},
            html: null !== (e = "true" === t.getAttribute("data-bs-html")) && void 0 !== e && e,
            placement: null !== (n = t.getAttribute("data-bs-placement")) && void 0 !== n ? n : "auto"
        };
        return new Os(t, i)
    })), [].slice.call(document.querySelectorAll('[data-bs-toggle="switch-icon"]')).map((function (t) {
        t.addEventListener("click", (function (e) {
            e.stopPropagation(), t.classList.toggle("active")
        }))
    }));
    var er;
    (er = window.location.hash) && [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"]')).filter((function (t) {
        return t.hash === er
    })).map((function (t) {
        new Ys(t).show()
    })), [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]')).map((function (t) {
        return new Js(t)
    }));
    var nr = "tblr-", ir = function (t, e) {
        var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return n ? "rgba(".concat(parseInt(n[1], 16), ", ").concat(parseInt(n[2], 16), ", ").concat(parseInt(n[3], 16), ", ").concat(e, ")") : null
    }, sr = Object.freeze({
        __proto__: null, prefix: nr, hexToRgba: ir, getColor: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                n = getComputedStyle(document.body).getPropertyValue("--".concat(nr).concat(t)).trim();
            return 1 !== e ? ir(n, e) : n
        }
    });
    globalThis.bootstrap = tr, globalThis.tabler = sr
}));
