(function(z) {
    var BI = function(a, b) {
        return a.ca.m(b ? a.BJ : a.QE)
    }
    ;
    var CI = function(a) {
        if (z.A && !(9 <= z.Ug)) {
            var b = !1;
            try {
                b = a.parentNode
            } catch (c) {}
            return !!b
        }
        return z.mf(a.ownerDocument.body, a)
    }
    ;
    var DI = function(a) {
        z.yc.call(this);
        this.BJ = z.pq();
        this.QE = z.pq();
        this.KA = a.Zg();
        this.ca = z.H(a.wa());
        a.vh(this.ca.B("SPAN", {
            id: this.BJ
        }), this.ca.B("SPAN", {
            id: this.QE
        }))
    }
    ;
    var EI = function(a, b) {
        var c = b.nd();
        a.Sb[c] = b;
        for (var d in z.cz)
            b[z.cz[d]] && a.Kj[d].push(b);
        b.F = a;
        a.xc() && b.enable(a)
    }
    ;
    var FI = function(a) {
        return a.F && z.Hc ? (a = a.F.hb.Va(),
        a.scrollTo.bind(a, a.scrollX, a.scrollY)) : function() {}
    }
    ;
    var GI = function(a) {
        return a.F && a.F.hb
    }
    ;
    var HI = function(a) {
        var b = a.node.parentNode;
        return new z.Ju(b,z.mb(b.childNodes, a.node))
    }
    ;
    var II = function(a, b, c, d) {
        return z.bu(a, b, c, d)
    }
    ;
    var JI = function(a) {
        return a.Y() && a.la() ? new DI(a) : null
    }
    ;
    var KI = function(a) {
        var b;
        if (3 == a.node.nodeType)
            for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling)
                a.offset += z.Du(b);
        else
            b = a.node.previousSibling;
        var c = a.node.parentNode;
        a.node = b ? b.nextSibling : c.firstChild;
        return a
    }
    ;
    var LI = function(a, b) {
        return b ? z.Iu(a.Y(), a.xa()) : z.Iu(a.la(), a.La())
    }
    ;
    var MI = function(a) {
        for (var b = null , c = a.firstChild; c; ) {
            var d = c.nextSibling;
            3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue,
            a.removeChild(c)) : b = c : (MI(c),
            b = null );
            c = d
        }
    }
    ;
    var NI = function(a) {
        var b = a && a.nodeName;
        return !(!a || "block" != (1 != a.nodeType ? null  : z.A ? z.xg(a, "display") : z.wg(a, "display")) && "TD" != b && "TABLE" != b && "LI" != b)
    }
    ;
    var OI = function(a) {
        var b = a.Zg()
          , c = KI(LI(a, !b))
          , d = HI(c)
          , f = c.node.previousSibling;
        3 == c.node.nodeType && (c.node = null );
        var g = KI(LI(a, b))
          , h = HI(g)
          , k = g.node.previousSibling;
        3 == g.node.nodeType && (g.node = null );
        return function() {
            !c.node && f && (c.node = f.nextSibling,
            c.node || (c = new z.Ju(f,z.Du(f))));
            !g.node && k && (g.node = k.nextSibling,
            g.node || (g = new z.Ju(k,z.Du(k))));
            return z.bu(c.node || d.node.firstChild || d.node, c.offset, g.node || h.node.firstChild || h.node, g.offset)
        }
    }
    ;
    var PI = function(a) {
        return z.vf(a, NI, !0)
    }
    ;
    var QI = function(a, b) {
        if (b)
            var c = OI(b)
              , d = PI(b.Qb());
        d ? (d = z.Sp(d, a),
        z.A ? MI(d) : d.normalize()) : a && (z.A ? MI(a) : a.normalize());
        return c ? c() : null
    }
    ;
    var RI = function(a, b, c) {
        z.Vr.call(this, b, a || z.OC.aa(), c)
    }
    ;
    var SI = function(a) {
        return a.getAttribute && "true" == a.getAttribute("g_editable")
    }
    ;
    var TI = function(a) {
        DI.call(this, a)
    }
    ;
    var UI = function(a, b, c) {
        for (var d = (b = 1 == b) ? a.Y() : a.la(), f = b ? a.xa() : a.La(), g = a.Qb(); d != g && d != c && !(b && 0 != f || !b && f != z.Du(d)); )
            var h = d.parentNode
              , d = z.mb(h.childNodes, d)
              , f = b ? d : d + 1
              , d = h;
        return II(b ? d : a.Y(), b ? f : a.xa(), b ? a.la() : d, b ? a.La() : f)
    }
    ;
    var VI = function(a) {
        z.Ip(a, !1);
        if (z.jG) {
            var b = a;
            for (a = a.parentNode; a && "HTML" != a.tagName; ) {
                if (z.am ? "none" == a.style[z.am].toLowerCase() : (z.A || z.vg) && "on" == a.getAttribute("unselectable")) {
                    z.Ip(a, !1, !0);
                    for (var c = 0, d = a.childNodes.length; c < d; c++) {
                        var f = a.childNodes[c];
                        f != b && 1 == f.nodeType && z.Ip(a.childNodes[c], !0)
                    }
                }
                b = a;
                a = a.parentNode
            }
        }
    }
    ;
    var WI = function(a) {
        var b = a.target.tagName;
        "TEXTAREA" != b && "INPUT" != b && a.preventDefault()
    }
    ;
    var XI = function(a) {
        var b = z.Od(a);
        a = new z.Nd;
        var c = null ;
        a.next = function() {
            for (; ; ) {
                if (null  == c) {
                    var a = b.next();
                    c = z.Od(a)
                }
                try {
                    return c.next()
                } catch (f) {
                    if (f !== z.Pd)
                        throw f;
                    c = null
                }
            }
        }
        ;
        return a
    }
    ;
    var YI = function(a) {
        var b = a.Qb();
        return a.Y() != b.parentElement && SI(b) || !!z.vf(b, SI)
    }
    ;
    var ZI = function(a, b) {
        var c = UI(a, 1, b)
          , c = UI(c, 0, b)
          , d = c.Y()
          , f = c.la()
          , g = c.xa()
          , c = c.La();
        if (d == f) {
            for (; f != b && 0 == g && c == z.Du(f); )
                d = f.parentNode,
                g = z.mb(d.childNodes, f),
                c = g + 1,
                f = d;
            d = f
        }
        return z.bu(d, g, f, c)
    }
    ;
    var $I = function(a, b) {
        z.jG && b.g(a, "mousedown", WI, !0);
        z.Ip(a, !0);
        for (var c = a.getElementsByTagName("INPUT"), d = 0, f = c.length; d < f; d++) {
            var g = c[d];
            g.type in aJ && VI(g)
        }
        z.w(a.getElementsByTagName("TEXTAREA"), VI)
    }
    ;
    var bJ = function(a, b, c) {
        for (var d; a != c && (d = a.parentNode); ) {
            for (var f = d.cloneNode(!1); a.nextSibling; )
                f.appendChild(a.nextSibling);
            b && f.insertBefore(b, f.firstChild);
            b = f;
            a = d
        }
        return b
    }
    ;
    var cJ = function(a) {
        return !!dJ[a.tagName]
    }
    ;
    var eJ = function(a) {
        return z.zu(z.eq(new z.wu(a), z.Au))
    }
    ;
    var fJ = function(a) {
        return (a = String(a).toLowerCase()) ? z.qb([".jpg", ".jpeg", ".png"], function(b) {
            return z.Yo(a, b)
        }) : !1
    }
    ;
    var gJ = function(a, b) {
        var c = z.Od(a)
          , d = new z.Nd;
        d.next = function() {
            var a = c.next();
            if (b.call(void 0, a, void 0, c))
                return a;
            throw z.Pd;
        }
        ;
        return d
    }
    ;
    var hJ = function(a, b) {
        var c = z.Od(a)
          , d = new z.Nd
          , f = !0;
        d.next = function() {
            for (; ; ) {
                var a = c.next();
                if (!f || !b.call(void 0, a, void 0, c))
                    return f = !1,
                    a
            }
        }
        ;
        return d
    }
    ;
    var iJ = function(a) {
        return XI(arguments)
    }
    ;
    var jJ = function(a, b) {
        a = z.Od(a);
        try {
            for (; ; )
                if (b.call(void 0, a.next(), void 0, a))
                    return !0
        } catch (c) {
            if (c !== z.Pd)
                throw c;
        }
        return !1
    }
    ;
    var kJ = function(a) {
        z.F.call(this);
        this.ld = a
    }
    ;
    var lJ = function(a) {
        this.pl = a;
        this.Pi = new z.vj("",!0,this.pl.ld);
        this.wn = new z.Ij(this.pl.ld);
        this.vn = {};
        this.Jh("tr-dialog")
    }
    ;
    var mJ = function(a, b) {
        var c = z.u("OK");
        a.wn.set("ok", b || c, !0);
        a.vn.ok = (0,
        z.q)(a.pl.rP, a.pl)
    }
    ;
    var nJ = function(a, b) {
        var c = z.Im
          , d = z.u("Cancel");
        a.wn.set(c, b || d, !1, !0);
        a.vn[c] = (0,
        z.q)(a.pl.lo, a.pl);
        return a
    }
    ;
    var oJ = function(a) {
        a.wn.Yg() && (mJ(a),
        nJ(a));
        z.Fj(a.Pi, a.wn);
        var b = a.vn;
        a.vn = null ;
        a.Pi.g(z.Hj, function(a) {
            if (b[a.key])
                return b[a.key](a)
        });
        a.Pi.Mp(!0);
        var c = a.Pi;
        a.Pi = null ;
        return c
    }
    ;
    var pJ = function(a) {
        z.Xy.call(this);
        this.bN = a;
        this.YI = function() {}
    }
    ;
    var qJ = function(a) {
        var b = a.F
          , c = a.gJ;
        c && c.restore();
        b.focus();
        a.gJ = null
    }
    ;
    var rJ = function(a) {
        a.Ia && !a.$y && (a.$y = !0,
        a.Ia.H(),
        a.Ia = null ,
        a.$y = !1)
    }
    ;
    var sJ = function(a) {
        this.te = a;
        this.yx = []
    }
    ;
    var tJ = function(a) {
        if (!a.Vw) {
            var b = z.yu(a.te);
            a.Vw = b.tagName && "IMG" == b.tagName ? b.getAttribute("alt") : z.Qp(a.te)
        }
        return a.Vw
    }
    ;
    var uJ = function(a, b, c, d) {
        var f = new sJ(a);
        f.te.href = b;
        c && (a.target = c);
        d && (f.yx = d);
        return f
    }
    ;
    var vJ = function(a, b) {
        var c = new sJ(a), d;
        d = (0,
        z.bb)(tJ(c));
        d = wJ(d) ? 0 > d.search(/:/) ? "http://" + z.sq(d) : d : xJ.test(d) ? "mailto:" + d : null ;
        c.te.href = d ? d : "";
        b && (a.target = b)
    }
    ;
    var wJ = function(a) {
        if (/\s/.test(a) || xJ.test(a))
            return !1;
        var b = !1;
        /^[^:\/?#.]+:/.test(a) || (a = "http://" + a,
        b = !0);
        a = a.match(z.se);
        if (-1 != z.mb(["mailto", "aim"], a[1]))
            return !0;
        var c = a[3];
        if (!c || b && -1 == c.indexOf(".") || /[^\w\d\-\u0100-\uffff.%]/.test(c))
            return !1;
        b = a[5];
        return !b || 0 == b.indexOf("/")
    }
    ;
    var yJ = function() {
        z.Xy.call(this)
    }
    ;
    var zJ = function(a) {
        return GI(a).wa()
    }
    ;
    var AJ = function(a) {
        if (z.A || z.vg) {
            var b = a.Be()
              , c = b.Qb()
              , d = zJ(a);
            BJ.lastIndex = 0;
            BJ.test(c.innerHTML) && (a = JI(b),
            "P" == c.tagName ? CJ(c, !0) : (b = c.innerHTML.replace(BJ, '\x3cp$1 trtempbr\x3d"temp_br"\x3e'),
            z.Eu(c, b),
            c = z.wb(c.getElementsByTagName("P")),
            z.Qd(c, function(a) {
                "temp_br" == a.getAttribute("trtempbr") && (a.removeAttribute("trtempbr"),
                z.vq(z.pf(a)) && a.appendChild(z.A ? d.createTextNode(" ") : d.createElement("BR")),
                CJ(a))
            })),
            a.restore())
        }
    }
    ;
    var CJ = function(a, b) {
        if (z.A || z.vg) {
            var c = a.outerHTML.replace(/<(\/?)p/gi, "\x3c$1div");
            b && (c = c.replace(BJ, "\x3c/div\x3e\x3cdiv$1\x3e"));
            z.vg && !/<\/div>$/i.test(c) && (c += "\x3c/div\x3e");
            a.outerHTML = c
        }
    }
    ;
    var DJ = function(a) {
        return 0 == a.indexOf("+") ? a.substring(1) : a
    }
    ;
    var EJ = function(a) {
        a = PI(a);
        a.align && (a.style.textAlign = a.align,
        a.removeAttribute("align"))
    }
    ;
    var FJ = function(a, b, c, d, f) {
        var g = null ;
        d && (g = a.F.queryCommandValue("rtl") ? "rtl" : a.F.queryCommandValue("ltr") ? "ltr" : null );
        b = DJ(b);
        var h, k;
        if (z.A) {
            var m = b;
            k = [];
            d = null ;
            var n = a.Be();
            h = GI(a);
            if (m in GJ) {
                var t = n && n.Qb();
                if (t) {
                    for (var C = z.Me(window.document, "BLOCKQUOTE", null , t), J, K = 0; K < C.length; K++)
                        if (n.containsNode(C[K])) {
                            J = C[K];
                            break
                        }
                    if (t = J || z.uf(t, "BLOCKQUOTE"))
                        d = h.B("DIV", {
                            style: "height:0"
                        }),
                        t.appendChild(d),
                        k.push(d),
                        J ? n = z.bu(J, 0, d, 0) : n.containsNode(d) && (n = II(n.Y(), n.xa(), d, 0)),
                        n.select()
                }
            }
            J = a.F;
            !J.qc() &&
            !d && m in HJ && (J = J.m(),
            n && n.isCollapsed() && !z.hf(J) && (d = n.Ce(0).de(),
            n = d.duplicate(),
            n.moveToElementText(J),
            n.collapse(!1),
            n.isEqual(d) && (n = h.createTextNode(" "),
            J.appendChild(n),
            d.move("character", 1),
            d.move("character", -1),
            d.select(),
            k.push(n))),
            d = h.B("DIV", {
                style: "height:0"
            }),
            J.appendChild(d),
            k.push(d));
            h = k[0];
            k = k[1]
        }
        if (z.B) {
            h = b;
            var O;
            IJ[h] && (O = GI(a).B("DIV", {
                style: "height: 0"
            }, "x"),
            a.F.m().appendChild(O));
            !z.D(534) && JJ[h] && (h = a.F.m(),
            O = GI(a).B("DIV", {
                style: "height: 0"
            }, "x"),
            h.insertBefore(O, h.firstChild));
            h = O
        }
        z.y && (O = b,
        z.D("1.9") && "formatblock" == O.toLowerCase() && (O = a.Be(),
        J = O.Y(),
        O.isCollapsed() && J && "BODY" == J.tagName && (d = O.xa(),
        (J = J.childNodes[d]) && "BR" == J.tagName && (O = O.de(),
        O.setStart(J, 0),
        O.setEnd(J, 0)))));
        z.xG && "fontsize" == b.toLowerCase() && KJ(a);
        O = zJ(a);
        f && z.nG && (O.execCommand("styleWithCSS", !1, !0),
        z.vg && LJ(a));
        O.execCommand(b, !1, c);
        f && z.nG && O.execCommand("styleWithCSS", !1, !1);
        z.B && !z.D("526") && "formatblock" == b.toLowerCase() && c && /^[<]?h\d[>]?$/i.test(c) && MJ(a);
        /insert(un)?orderedlist/i.test(b) &&
        (z.B && !z.D(534) && NJ(a),
        z.A && (OJ(a),
        k && z.N(k)));
        h && z.N(h);
        g && a.F.execCommand(g)
    }
    ;
    var PJ = function(a, b, c, d) {
        var f = null
          , g = []
          , h = b && b.Qb();
        if (h && "IMG" == h.tagName || !b)
            return null ;
        if (b.isCollapsed())
            b = b.Ce(0).de(),
            z.gG ? (f = GI(a).createElement("A"),
            b.insertNode(f)) : z.fG && (b.pasteHTML("\x3ca id\x3d'newLink'\x3e\x3c/a\x3e"),
            f = GI(a).m("newLink"),
            f.removeAttribute("id"));
        else {
            var k = z.pq();
            FJ(a, "CreateLink", k);
            z.w(a.F.m().getElementsByTagName("A"), function(a) {
                z.Yo(a.href, k) && g.push(a)
            });
            g.length && (f = g.pop());
            a = function(a) {
                return wJ(z.Qp(a))
            }
            ;
            if (g.length && z.uo(g, a)) {
                for (a = 0; b = g[a]; a++)
                    vJ(b,
                    d);
                g = null
            }
        }
        return uJ(f, c, d, g)
    }
    ;
    var KJ = function(a) {
        var b = ZI(z.xz(a.F), a.F.m());
        z.Qd(z.eq(b, function(a, d, f) {
            return 1 == f.Vb && b.containsNode(a)
        }), function(a) {
            z.sg(a, "font-size", "");
            z.y && 0 == a.style.length && null  != a.getAttribute("style") && a.removeAttribute("style")
        })
    }
    ;
    var MJ = function(a) {
        z.Qd(a.Be(), function(a) {
            "Apple-style-span" == a.className && (a.style.fontSize = "",
            a.style.fontWeight = "")
        })
    }
    ;
    var NJ = function(a) {
        var b = !1;
        z.Qd(a.Be(), function(a) {
            var d = a.tagName;
            if ("UL" == d || "OL" == d)
                if (b) {
                    if (d = z.Up(a)) {
                        var f = a.ownerDocument.createRange();
                        f.setStartAfter(d);
                        f.setEndBefore(a);
                        if (z.Xo(f.toString()) && d.nodeName == a.nodeName) {
                            for (; d.lastChild; )
                                a.insertBefore(d.lastChild, a.firstChild);
                            d.parentNode.removeChild(d)
                        }
                    }
                } else
                    b = !0
        })
    }
    ;
    var OJ = function(a) {
        for (a = (a = a.Be()) && a.vc(); a && "UL" != a.tagName && "OL" != a.tagName; )
            a = a.parentNode;
        a && (a = a.parentNode);
        if (a) {
            var b = z.wb(a.getElementsByTagName("UL"));
            z.xb(b, z.wb(a.getElementsByTagName("OL")));
            z.w(b, function(a) {
                var b = a.type;
                b && !("UL" == a.tagName ? QJ : RJ)[b] && (a.type = "")
            })
        }
    }
    ;
    var LJ = function(a) {
        var b = []
          , c = z.xz(a.F).Qb();
        do
            b.push(c);
        while (c = c.parentNode);a = iJ(z.Od(z.xz(a.F)), z.Od(b));
        a = z.eq(a, NI);
        z.Qd(a, function(a) {
            var b = a.style.outline;
            a.style.outline = "0px solid red";
            a.style.outline = b
        })
    }
    ;
    var SJ = function(a) {
        var b = null ;
        z.Qd(a, function(a, d, f) {
            if (-1 != f.Vb) {
                a = PI(a).tagName;
                b = b || a;
                if (b != a)
                    throw b = null ,
                    z.Pd;
                f.Vp()
            }
        });
        return b
    }
    ;
    var TJ = function(a, b) {
        var c = b.replace("+justify", "").toLowerCase();
        "full" == c && (c = "justify");
        var d = a.F.Sb.Bidi;
        if (d)
            return c == d.GX();
        var f = a.Be();
        if (!f)
            return !1;
        for (var g = f.Qb(), d = z.nb(g.childNodes, function(a) {
            return z.Au(a) && f.containsNode(a, !0)
        }), d = d.length ? d : [g], g = 0; g < d.length; g++) {
            var h = PI(d[g]);
            if (c != UJ(h))
                return !1
        }
        return !0
    }
    ;
    var UJ = function(a) {
        var b = z.yg(a, "textAlign")
          , b = b.replace(/^-(moz|webkit)-/, "");
        VJ[b] || (b = a.align || "left");
        return b
    }
    ;
    var WJ = function(a, b, c, d, f) {
        d = DJ(d);
        if (f) {
            var g = zJ(a);
            g.execCommand("styleWithCSS", !1, !0)
        }
        a = b ? c.queryCommandState(d) : c.queryCommandValue(d);
        f && g.execCommand("styleWithCSS", !1, !1);
        return a
    }
    ;
    var XJ = function(a, b) {
        z.yc.call(this);
        this.Lt = [];
        for (this.Gt = []; a && "BODY" != a.nodeName && a != b; ) {
            for (var c = 0, d = a.previousSibling; d; )
                d = d.previousSibling,
                ++c;
            this.Lt.unshift(c);
            this.Gt.unshift(a.nodeName);
            a = a.parentNode
        }
    }
    ;
    var YJ = function(a, b) {
        for (var c, d = b, f = 0; c = a.Gt[f]; ++f)
            if (d = d.childNodes[a.Lt[f]],
            !d || d.nodeName != c)
                return null ;
        return d
    }
    ;
    var ZJ = function() {
        z.Xy.call(this)
    }
    ;
    var $J = function(a, b) {
        for (var c = z.xz(a.F), d = c.vc(), f = a.F.m(), g; d && d != f; ) {
            var h = d.nodeName, k;
            (k = "DIV" == h) || !(k = aK[h]) || (k = !b) || (k = d,
            k = !(z.Bu(k) && 1 == k.getElementsByTagName("BR").length));
            if (k) {
                if (z.vg && g) {
                    "DIV" == h && g == d.lastChild && z.Bu(g) && (z.cf(g, d),
                    z.tu(g).select());
                    break
                }
                return
            }
            z.vg && b && "P" == h && "DIV" != h && (g = d);
            d = d.parentNode
        }
        if (z.A && !z.D(9)) {
            var m = !1
              , c = c.de()
              , d = c.duplicate();
            d.moveEnd("character", 1);
            d.text.length && (m = d.parentElement(),
            d = d.duplicate(),
            d.collapse(!1),
            d = d.parentElement(),
            m = m != d && d !=
            c.parentElement()) && (c.move("character", -1),
            c.select())
        }
        a.F.hb.wa().execCommand("FormatBlock", !1, "\x3cDIV\x3e");
        m && (c.move("character", 1),
        c.select())
    }
    ;
    var bK = function(a) {
        if (z.gG) {
            if ((a = z.xz(a.F)) && !a.isCollapsed()) {
                var b = !0;
                if (z.vg) {
                    var c = a.Y()
                      , d = a.xa();
                    c == a.la() && c.lastChild && "BR" == c.lastChild.tagName && d == c.childNodes.length - 1 && (b = !1)
                }
                if (b) {
                    var f = a;
                    if (f && !f.isCollapsed()) {
                        var g = !0, b = f.Qb(), c = new XJ(f.Y(),b), d = f.xa(), h;
                        h = f;
                        var k = h.Y();
                        NI(k) && (k = k.childNodes[h.xa()] || k);
                        var k = PI(k)
                          , m = h.la();
                        NI(m) && (m = m.childNodes[h.La()] || m);
                        m = PI(m);
                        h = k == m;
                        if (k = !h)
                            a: {
                                var m = f
                                  , k = m.la()
                                  , m = m.La()
                                  , n = k;
                                if (NI(n)) {
                                    var t = n.childNodes[m];
                                    if (!t || 1 == t.nodeType && NI(t)) {
                                        k = !1;
                                        break a
                                    }
                                }
                                for (t = PI(n); t != n; ) {
                                    if (eJ(n)) {
                                        k = !0;
                                        break a
                                    }
                                    n = n.parentNode
                                }
                                k = m != z.Du(k)
                            }
                        f.bd();
                        (f = YJ(c, b)) ? f = z.uu(f, d) : (f = z.uu(b, b.childNodes.length),
                        g = !1);
                        f.select();
                        h && (h = PI(f.Y()),
                        z.Bu(h, !0) && (g = "\x26nbsp;",
                        z.vg && "LI" == h.tagName && (g = "\x3cbr\x3e"),
                        z.Eu(h, g),
                        z.Gu(h.firstChild),
                        g = !1));
                        k && (f = PI(f.Y()),
                        h = eJ(f),
                        f && h && (z.$e(f, h.childNodes),
                        z.N(h)));
                        g && (f = z.uu(YJ(c, b), d),
                        f.select())
                    }
                }
            }
            a = LI(a, !0)
        } else
            a = GI(a).wa(),
            b = a.selection.createRange(),
            c = z.pq(),
            b.pasteHTML('\x3cspan id\x3d"' + c + '"\x3e\x3c/span\x3e'),
            a = a.getElementById(c),
            a.id = "";
        return a
    }
    ;
    var cK = function() {}
    ;
    var dK = function(a) {
        z.F.call(this);
        this.gv = a || window;
        this.uz = z.E(this.gv, "resize", this.ry, !1, this);
        this.yc = z.Pe(this.gv)
    }
    ;
    var eK = function(a, b) {
        z.F.call(this);
        this.ca = z.H(a);
        this.S = new z.zd(this);
        this.eC = new dK(this.ca.Va());
        this.td = {};
        this.Dd = this.ca.B("DIV", {
            className: fK
        });
        z.P(this.Dd, !1);
        a.appendChild(this.Dd);
        z.sg(this.Dd, "zIndex", b);
        this.sn = this.Dd;
        this.ND = this.ca.B("DIV", {
            className: "tr_bubble_closebox",
            innerHTML: "\x26nbsp;"
        });
        this.sn.appendChild(this.ND);
        $I(this.Dd, this.S);
        this.lg = new z.Tn(this.Dd)
    }
    ;
    var gK = function(a, b) {
        return z.Gb(a.td, function(a) {
            return a.type == b
        })
    }
    ;
    var hK = function(a, b, c, d) {
        var f = null , g;
        for (g in a.td) {
            var h = a.td[g].zB;
            if (!f || z.mf(h, f))
                f = a.td[g].zB
        }
        return z.Es(f, b, a.Dd, c, null , iK, d, null , a.qO())
    }
    ;
    var jK = function(a, b, c, d, f, g) {
        this.type = c;
        this.zB = f;
        this.AT = g;
        this.element = a.B("DIV", {
            className: "tr_bubble_panel",
            id: b
        }, a.B("DIV", {
            className: "tr_bubble_panel_title"
        }, d ? d + ":" : ""), a.B("DIV", {
            className: "tr_bubble_panel_content"
        }))
    }
    ;
    var kK = function() {
        z.Xy.call(this);
        this.ic = new z.zd(this);
        this.IM = null
    }
    ;
    var lK = function(a, b) {
        return new eK(a,b)
    }
    ;
    var mK = function(a) {
        var b = a.tX || a.F.Vk.document.body;
        a.ca = z.H(b);
        var c = nK[a.F.id];
        c || (c = (a.IM || lK).call(null , b, a.F.BM || 0),
        nK[a.F.id] = c);
        return c
    }
    ;
    var oK = function(a) {
        if (a.ti) {
            var b = mK(a)
              , c = a.ti;
            z.N(b.td[c].element);
            delete b.td[c];
            c = z.to(b.td);
            1 >= c && z.dj(b.Dd, "tr_multi_bubble");
            0 == c ? b.OD() : b.ha();
            a.LF()
        }
    }
    ;
    var pK = function(a) {
        return a ? z.Zp("//www.zhihu.com/equation", "tex", a) : ""
    }
    ;
    var qK = function() {
        kK.call(this)
    }
    ;
    var rK = function(a) {
        this.UN = a
    }
    ;
    var sK = function(a) {
        z.Mc.call(this, "change");
        this.isValid = a
    }
    ;
    var tK = function(a) {
        z.Q.call(this, a)
    }
    ;
    var uK = function(a, b, c, d, f, g, h, k) {
        this.dc = b;
        this.bn = h || [];
        b = k || vK.aa();
        k = [];
        c = -c;
        d = -d;
        for (var m = 0; m < h.length; m++)
            k.push(a.L().B("DIV", {
                "class": b.T() + "-item",
                style: "width:" + f + "px;height:" + g + "px;background-position:" + c + "px " + d + "px;"
            })),
            c -= f;
        this.jg = a;
        z.HC.call(this, k, b, a.L())
    }
    ;
    var wK = function(a, b, c) {
        z.Mc.call(this, a, c);
        this.mT = b
    }
    ;
    var vK = function() {}
    ;
    var xK = function(a, b, c) {
        z.Q.call(this, c);
        this.Fj = b;
        this.jg = a.lT
    }
    ;
    var yK = function(a) {
        var b = a.Dl();
        if (b != a.VG) {
            a.VG = b;
            var c = !(1024 < b.length);
            a.dispatchEvent(new sK(c));
            a = a.FT;
            var d = z.H(a);
            d.xp(a);
            b && (c ? (b = pK(b),
            b = d.B("IMG", {
                src: b
            })) : (b = z.u("Equation is too long"),
            b = d.B("DIV", {
                "class": "ee-warning"
            }, b)),
            d.appendChild(a, b))
        }
    }
    ;
    var zK = function(a, b, c) {
        z.Q.call(this, c);
        this.ZD = a;
        this.Fj = b
    }
    ;
    var AK = function(a, b, c, d) {
        kJ.call(this, b);
        this.oj = new zK(a,d,b);
        this.oj.render();
        this.oj.YA(c);
        this.oj.addEventListener("+equation", this.Vz, !1, this)
    }
    ;
    var BK = function(a) {
        uK.call(this, a, "a", 0, 150, 18, 18, "\\leftarrow \\rightarrow \\leftrightarrow \\Leftarrow \\Rightarrow \\Leftrightarrow \\uparrow \\downarrow \\updownarrow \\Uparrow \\Downarrow \\Updownarrow".split(" "));
        z.JC(this, new z.Ie(12,1))
    }
    ;
    var CK = function(a) {
        uK.call(this, a, "c", 0, 70, 18, 18, "\\leq \\geq \\prec \\succ \\preceq \\succeq \\ll \\gg \\equiv \\sim \\simeq \\asymp \\approx \\ne \\subset \\supset \\subseteq \\supseteq \\in \\ni \\notin".split(" "));
        z.JC(this, new z.Ie(7,3))
    }
    ;
    var DK = function(a) {
        uK.call(this, a, "g", 0, 30, 18, 18, "\\alpha \\beta \\gamma \\delta \\epsilon \\varepsilon \\zeta \\eta \\theta \\vartheta \\iota \\kappa \\lambda \\mu \\nu \\xi \\pi \\varpi \\rho \\varrho \\sigma \\varsigma \\tau \\upsilon \\phi \\varphi \\chi \\psi \\omega \\Gamma \\Delta \\Theta \\Lambda \\Xi \\Pi \\Sigma \\Upsilon \\Phi \\Psi \\Omega".split(" "));
        z.JC(this, new z.Ie(7,6))
    }
    ;
    var EK = function(a) {
        uK.call(this, a, "m", 0, 90, 30, 56, "x_{a};x^{b};x_{a}^{b};\\bar{x};\\tilde{x};\\frac{a}{b};\\sqrt{x};\\sqrt[n]{x};\\bigcap_{a}^{b};\\bigcup_{a}^{b};\\prod_{a}^{b};\\coprod_{a}^{b};\\left( x \\right);\\left[ x \\right];\\left\\{ x \\right\\};\\left| x \\right|;\\int_{a}^{b};\\oint_{a}^{b};\\sum_{a}^{b}{x};\\lim_{a \\rightarrow b}{x}".split(";"));
        z.JC(this, new z.Ie(10,2))
    }
    ;
    var FK = function(a) {
        uK.call(this, a, "mn", 0, 0, 46, 18, ["g", "s", "c", "m", "a"], GK.aa());
        z.JC(this, new z.Ie(5,1))
    }
    ;
    var GK = function() {}
    ;
    var HK = function(a) {
        uK.call(this, a, "s", 0, 50, 18, 18, "\\times \\div \\cdot \\pm \\mp \\ast \\star \\circ \\bullet \\oplus \\ominus \\oslash \\otimes \\odot \\dagger \\ddagger \\vee \\wedge \\cap \\cup \\aleph \\Re \\Im \\top \\bot \\infty \\partial \\forall \\exists \\neg \\angle \\triangle \\diamond".split(" "));
        z.JC(this, new z.Ie(7,5))
    }
    ;
    var IK = function(a) {
        z.F.call(this);
        this.HN = a;
        this.pI = {};
        this.cn = null ;
        this.S = new z.zd(this);
        this.Ww = new z.ud(300);
        this.S.g(this.Ww, "tick", this.zF)
    }
    ;
    var JK = function(a) {
        this.Fj = a || "";
        pJ.call(this, "+equation")
    }
    ;
    var KK = function() {
        z.Xy.call(this)
    }
    ;
    var LK = function() {
        z.Xy.call(this)
    }
    ;
    var MK = function(a, b) {
        var c = z.xz(a.F);
        return z.uf(c.Qb(), "LI") || jJ(c, function(a) {
            return "LI" == a.tagName
        }) ? (a.F.execCommand(b.shiftKey ? "+outdent" : "+indent"),
        b.preventDefault(),
        !0) : !1
    }
    ;
    var NK = function(a) {
        z.Xy.call(this);
        this.qR = a
    }
    ;
    var OK = function(a) {
        z.F.call(this);
        this.pM = a
    }
    ;
    var PK = function() {
        z.F.call(this);
        this.mR = 100;
        this.Td = [];
        this.tk = [];
        this.Wt = []
    }
    ;
    var QK = function(a, b, c) {
        if (b.length) {
            var d = b.pop();
            c.push(d);
            a.Wt.push({
                type: b == a.Td ? "before_undo" : "before_redo",
                jF: b == a.Td ? d.RB : d.BA,
                state: d
            });
            1 == a.Wt.length && a.Jg();
            0 != b.length && 1 != c.length || a.dispatchEvent("state_change")
        }
    }
    ;
    var RK = function(a) {
        z.Xy.call(this);
        a = a || new PK;
        this.iH && z.od(this.iH);
        this.If = a;
        this.iH = z.E(this.If, "state_change", this.DN, !1, this);
        this.pj = {};
        this.Ln = {};
        this.tG = null ;
        this.EM = (0,
        z.q)(this.jU, this)
    }
    ;
    var SK = function(a, b) {
        var c = b.Tg, d, f;
        b.queryCommandValue("usinglorem") ? (d = "",
        f = null ) : (d = b.m().innerHTML,
        f = new TK(b),
        f = f.isValid() ? f : null );
        var g = a.Ln[c];
        if (g) {
            if (g.Ki == d)
                return;
            if ("" == d || "" == g.Ki) {
                var h;
                h = b.ju(8, "", {});
                if (d == h && "" == g.Ki || g.Ki == h && "" == d)
                    return
            }
            g.CA = d;
            g.PT = f;
            h = a.If;
            if (0 == h.Td.length || !g.equals(h.Td[h.Td.length - 1])) {
                h.Td.push(g);
                h.Td.length > h.mR && h.Td.shift();
                var k = h.tk.length;
                h.tk.length = 0;
                h.dispatchEvent({
                    type: "state_added",
                    state: g
                });
                (1 == h.Td.length || k) && h.dispatchEvent("state_change")
            }
        }
        a.Ln[c] =
        new UK(c,d,f,a.EM)
    }
    ;
    var UK = function(a, b, c, d) {
        OK.call(this, !0);
        this.Vn = a;
        this.ZI = d;
        this.Ki = b;
        this.$J = c
    }
    ;
    var TK = function(a) {
        this.ae = a;
        var b = a.hb.Va();
        a = (a = z.xz(a)) && a.cg() && a.Va() == b ? a : null ;
        if (z.gG) {
            if (b = a,
            this.et = !1,
            b) {
                var c = z.zt(b)
                  , d = z.Bt(b);
                if (c && d) {
                    a = z.At(b);
                    var c = new XJ(c,this.ae.m())
                      , f = z.Ct(b)
                      , d = new XJ(d,this.ae.m());
                    b.Zg() ? (this.Fa = d,
                    this.pB = f,
                    this.Da = c,
                    this.nx = a) : (this.Fa = c,
                    this.pB = a,
                    this.Da = d,
                    this.nx = f);
                    this.et = !0
                }
            }
        } else
            z.fG && (b = a,
            this.et = !1,
            b && (a = b.Ce(0).de(),
            z.mf(this.ae.m(), a.parentElement()) && (b = this.ae.hb.wa().body.createTextRange(),
            b.moveToElementText(this.ae.m()),
            d = a.duplicate(),
            d.collapse(!0),
            d.setEndPoint("StartToStart", b),
            this.Fa = VK(d),
            a = a.duplicate(),
            a.setEndPoint("StartToStart", b),
            this.Da = VK(a),
            this.et = !0)))
    }
    ;
    var VK = function(a) {
        var b = a.duplicate()
          , c = a.text
          , d = c.length;
        b.collapse(!0);
        b.moveEnd("character", d);
        for (var f, g = 10; (f = b.compareEndPoints("EndToEnd", a)) && (d -= f,
        b.moveEnd("character", -f),
        --g,
        0 != g); )
            ;
        a = 0;
        for (b = c.indexOf("\n\r"); -1 != b; )
            ++a,
            b = c.indexOf("\n\r", b + 1);
        return d + a
    }
    ;
    var WK = function(a, b) {
        z.F.call(this);
        this.fa = new z.zd(this);
        this.ae = a;
        this.Db = b;
        this.xA = [];
        z.ch(this.Db, function(a) {
            a.kb && this.xA.push(XK(a.ee()))
        }, this);
        this.Db.Qe(!1);
        this.fa.g(this.ae, "cvc", this.VV).g(this.Db, "action", this.uO)
    }
    ;
    var XK = function(a) {
        return a
    }
    ;
    var YK = function(a, b) {
        z.gy.call(this, a || z.NC.aa(), b)
    }
    ;
    var ZK = function(a) {
        z.Xy.call(this);
        this.VB = z.pm.bv + "/upload";
        z.Nb(this.J = {}, this.defaults, a || {})
    }
    ;
    var $K = function(a) {
        var b = GI(a)
          , c = (0,
        window.$)('\x3cdiv class\x3d"editable-dropzone"\x3e\x3cdiv class\x3d"row"\x3e\x3cdiv class\x3d"cell"\x3e\x3cdiv\x3e拖拽至此处上传\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        b.Wy(c[0], a.F.m());
        return c
    }
    ;
    var aL = function(a) {
        var b = GI(a)
          , c = b.B("IMG", {
            "class": "",
            style: "display:block",
            src: z.pm.rB + "/img/spinner2.gif"
        })
          , d = z.xz(a.F);
        d && YI(d) && z.mf(a.F.m(), d.Qb()) ? d.mg(c) : z.Bu(a.F.Ha) ? z.df(a.F.m(), c, 0) : a.F.m().appendChild(c);
        z.A || (z.Hu(c, !1),
        b.Va().focus());
        z.zz(a.F);
        return (0,
        window.$)(c)
    }
    ;
    var bL = function(a, b) {
        var c = [{
            display: "none"
        }, {
            display: "table",
            width: a.pC.width(),
            height: a.pC.height(),
            "background-color": "rgba(255, 255, 255, 0.5)"
        }];
        c[2] = window.$.extend({}, c[1], {
            "background-color": "rgba(245, 245, 245, 0.5)"
        });
        a.LK.css(c[b])
    }
    ;
    var cL = function(a, b) {
        var c = new window.FormData;
        c.append("via", "xhr2");
        c.append("upload_file", b);
        var d;
        d = window.$.ajaxSettings.xhr();
        d.withCredentials = !0;
        var f = window.$.ajax({
            url: a.VB,
            data: c,
            processData: !1,
            contentType: !1,
            xhr: function() {
                return d
            },
            type: "POST"
        }).done(function(a) {
            "string" === window.$.type(a) && (a = JSON.parse(a));
            if (1 === a.code)
                z.W.message(a.msg);
            else {
                var b = new window.Image;
                b.src = a.msg[0];
                b.setAttribute("originImgSrc", b.src.replace("_m.jpg", "_r.jpg"));
                b.setAttribute("data-rawWidth", a.msg[1]);
                b.setAttribute("data-rawHeight", a.msg[2]);
                f.ZB.after(b)
            }
        }).fail(function() {
            z.W.message("上传失败！\x3e_\x3c")
        }).always(function() {
            f.ZB.remove()
        });
        f.ZB = aL(a)
    }
    ;
    var dL = function() {
        z.Xy.call(this)
    }
    ;
    var eL = function(a) {
        return a && "BR" === a.tagName
    }
    ;
    var fL = function(a, b) {
        function c(a, b) {
            return {
                dB: a,
                CH: b
            }
        }
        z.B && (a.normalize(),
        b = z.qu());
        var d = gL(b);
        if (!d)
            return c(!1, null );
        if (z.Bu(a))
            return c(!0, a);
        for (var f = d; f !== a; ) {
            if (eJ(f))
                return c(!1, null );
            f = f.parentNode
        }
        if (eL(d) && eL(d.previousSibling))
            return c(!0, d);
        d = b.Qb();
        return !d || 1 !== d.nodeType || d.childNodes.length && !z.Bu(d) ? c(!1, null ) : c(!0, d)
    }
    ;
    var gL = function(a) {
        var b = a.la()
          , c = a.La();
        a = a.vc();
        var d = a.childNodes.length;
        3 !== b.nodeType && d && (b = a.childNodes[c === d ? d - 1 : c]);
        return b
    }
    ;
    var hL = function(a) {
        z.Q.call(this);
        z.Nb(this.J = {}, this.defaults, a || {});
        this.ne = null
    }
    ;
    var iL = function(a) {
        var b = z.ha(a);
        a = b.next().value;
        b = b.next().value;
        return {
            label: a,
            value: b,
            toString: z.jb(a)
        }
    }
    ;
    var jL = function(a) {
        var b = z.rb(kL, function(b) {
            var d = z.ha(b);
            b = d.next().value;
            d = d.next().value;
            return b === a || d === a
        });
        return b && iL(b)
    }
    ;
    var lL = function(a, b, c) {
        var d = a.J
          , f = {}
          , g = new z.es(mL,!1)
          , h = new z.Is(c,f);
        c = new z.vs(null ,null ,!1);
        g.xi = function(a) {
            return function(b, c, d) {
                (0,
                z.bb)(b) ? a.apply(this, arguments) : d(b, mL)
            }
        }(g.xi);
        f.ud = function(b, c, f) {
            b = b.data;
            b.value === a.ne && (z.V.add(f, d.KD),
            f.appendChild(z.M("i", "icon " + d.KD)));
            f.appendChild(window.document.createTextNode(b.toString()))
        }
        ;
        f = new z.hs(g,h,c);
        c.Z = f;
        c.Wk(b);
        return f
    }
    ;
    var nL = function(a, b, c) {
        var d = a.J
          , f = a.o()
          , g = lL(a, b, c);
        g.bm = 20;
        f.g(g, "suggestionsupdate", function() {
            g.ag(g.Wc + 0)
        }).g(g, "update", function(a) {
            this.$z(a.yi)
        }).g(g, "dismiss", function() {
            this.Ci(!0)
        });
        b = g.M;
        b.className = d.XQ;
        b.mh = d.gT;
        b.Kv = d.Cg;
        a.Z = g
    }
    ;
    var oL = function(a) {
        z.Xy.call(this);
        z.Nb(this.J = {}, this.defaults, a || {});
        this.ux = this.Db = null
    }
    ;
    var pL = function(a) {
        return "P" === a.tagName
    }
    ;
    var qL = function(a) {
        return 3 === a.nodeType
    }
    ;
    var rL = function(a) {
        return a && "PRE" === a.tagName
    }
    ;
    var sL = function(a) {
        var b, c = new z.ex(rL,!1,null ,a), d = z.M("div", {
            style: "display:none"
        });
        z.Qw(c, new z.qg(4,0,0,0));
        z.cx(c, new z.qg(4,0,0,0));
        c.Sp = 150;
        c.so = 100;
        c.ph(d);
        c.className = "hc-lang-select";
        z.E(c, "beforeshow", function(a) {
            b = a.target.anchor;
            c.setPosition(new z.Nw(b,1));
            if (b.lang) {
                a = f;
                var d = jL(b.lang);
                d && a.Ea(d.value);
                f.Ci(!0)
            } else
                f.xk("选择语言")
        });
        z.E(c, "beforehide", function(c) {
            b = null ;
            f.Ea(null );
            if ((c = c.target) && a.contains(c) && rL(c))
                return !1
        });
        var f = new hL;
        f.render(d);
        z.E(f, "change", function(a) {
            b &&
            (b.lang = a.fT.value,
            c.G(!1))
        });
        return {
            Wx: z.jb(c),
            EX: z.jb(f),
            H: function() {
                c.H();
                f.H()
            }
        }
    }
    ;
    var tL = function(a) {
        function b(a) {
            return z.x(f, a)
        }
        function c() {
            var a = window.document.createTextNode("\n");
            f.push(a);
            return a
        }
        var d = window.document.createElement("div");
        d.innerHTML = a;
        var f = []
          , g = z.lq(b);
        a = z.Lo(d, cJ);
        z.w(a, function(a) {
            a.lastChild && "BR" === a.lastChild.tagName && a.removeChild(a.lastChild);
            a.firstChild || a.appendChild(window.document.createTextNode(""));
            a.insertBefore(c(), a.firstChild);
            a.appendChild(c())
        });
        a = z.wb(d.getElementsByTagName("br"));
        z.w(a, function(a) {
            a !== a.parentNode.lastChild && z.Wp(window.document.createTextNode("\n"),
            a)
        });
        d = z.Lo(d, qL);
        d = z.Vo(function(a) {
            return z.nb(a, function(c, d) {
                var f = a[d - 1];
                return !f || !(b(f) && b(c))
            })
        }, function(a) {
            var b = z.jq(a, g);
            return -1 !== b ? a.slice(0, b + 1) : a
        }, function(a) {
            var b = z.sb(a, g);
            return -1 !== b ? a.slice(b) : a
        })(d);
        return z.ob(d, function(a) {
            return a.nodeValue
        }).join("").replace(/\xa0/g, " ")
    }
    ;
    var uL = function(a, b) {
        a.Db && a.ux && z.ch(a.Db, function(a) {
            a instanceof z.QC && a.Wa(!b || z.x(this.ux, a.ee()))
        }, a)
    }
    ;
    var vL = function(a, b, c) {
        for (a = a.F.Ha; b !== a; ) {
            if (c(b))
                return b;
            b = b.parentNode
        }
    }
    ;
    var wL = function(a) {
        var b, c = z.qu();
        c && a.F.Ha.contains(c.Qb()) ? (b = c.Y(),
        a = (b = vL(a, b, rL)) ? "1" : "2") : a = "0";
        return {
            state: a,
            iu: c,
            code: b
        }
    }
    ;
    var xL = function(a, b) {
        var c = window.document.createTextNode(b);
        a.mg(c);
        z.Hu(c)
    }
    ;
    var yL = function(a, b, c) {
        a.En("i", function(a, f) {
            b.mg(a);
            a = f();
            c = z.Ma(c);
            z.Wp(window.document.createTextNode(c), a)
        })
    }
    ;
    var zL = function(a, b) {
        for (var c = a, d = []; c && c !== b; )
            d.push([c.parentNode.childNodes.length, z.mb(c.parentNode.childNodes, c)]),
            c = c.parentNode;
        return d
    }
    ;
    var AL = function(a) {
        var b = wL(a);
        a = b.iu;
        var c = b.code;
        if ("1" === b.state) {
            var b = function(a, b) {
                return b === a.length || BL && b === a.length - 1 && "\n" === a.slice(-1)
            }
              , d = a.la()
              , f = zL(d, c)
              , f = !f.length || z.uo(f, function(a) {
                return a[0] === a[1] + 1
            })
              , g = qL(d);
            f && (!g || g && b(d.nodeValue, a.La())) && CL(c)
        }
    }
    ;
    var CL = function(a) {
        eJ(a) || z.cf(window.document.createElement("br"), a)
    }
    ;
    var DL = function(a, b) {
        a.En("i", function(a, d) {
            b.mg(a);
            (0,
            window.setTimeout)(function() {
                var b = window.document.createTextNode("\r");
                a = d();
                z.Wp(b, a);
                z.Hu(b)
            })
        })
    }
    ;
    var EL = function(a, b, c) {
        var d = a.J, f;
        b.bd();
        var g = FL(a, b);
        g ? (f = window.document.createElement("PRE"),
        g.parentNode.insertBefore(f, g)) : a.En("PRE", function(a, c) {
            b.insertNode(a);
            f = c()
        });
        !c && z.A && (c = " ");
        f.lang = d.uN;
        z.nf(f, c);
        z.Bu(f) ? z.Gu(f.firstChild) : z.Hu(f.lastChild);
        CL(f)
    }
    ;
    var FL = function(a, b) {
        function c(a) {
            return a.parentNode.insertBefore(window.document.createTextNode(""), a)
        }
        var d = LI(b, !0), f = d.node, g, h = a.F.Ha, k = vL(a, f, z.mq(cJ, z.lq(pL))) || h;
        if (qL(f)) {
            var m = f.parentNode;
            !f.nodeValue && m !== h && z.Bu(m) ? (g = c(m),
            f = c(g),
            m.parentNode.removeChild(m)) : g = z.A && d.offset === f.length ? z.cf(window.document.createTextNode(""), f) : f.splitText(d.offset)
        } else
            "BR" === f.tagName && (g = f,
            f = c(f));
        return g ? (d = bJ(f, g, k),
        f = d.firstChild,
        z.$e(k, d.childNodes),
        f) : null
    }
    ;
    var GL = function() {
        z.Xy.call(this);
        this.dT = null
    }
    ;
    var HL = function(a) {
        a.push("\x3cbr\x3e")
    }
    ;
    var IL = function(a) {
        if (!z.xz(a.F).isCollapsed()) {
            var b = a.dT || (0,
            z.q)(a.RI, a);
            JL(a, b);
            GI(a).wa().execCommand("RemoveFormat", !1, void 0);
            z.rG && JL(a, function(a) {
                var b = z.D("528") ? /&nbsp;/g : /\u00A0/g;
                return a.replace(b, " ")
            })
        }
    }
    ;
    var KL = function(a, b) {
        for (var c = a.F.m(); b && b != c; ) {
            if ("TABLE" == b.tagName)
                return b;
            b = b.parentNode
        }
        return null
    }
    ;
    var JL = function(a, b) {
        var c = z.xz(a.F);
        if (!(1 < c.zj())) {
            if (z.y || z.Hc) {
                var d = ZI(c, a.F.m())
                  , f = KL(a, d.Y())
                  , g = KL(a, d.la());
                if (f || g) {
                    if (f == g)
                        return;
                    var h, k = c;
                    h = f;
                    var c = g
                      , d = new TI(k)
                      , m = k.Y()
                      , n = k.xa()
                      , t = k.la()
                      , k = k.La()
                      , C = GI(a);
                    if (h) {
                        var J = C.createTextNode("");
                        z.cf(J, h);
                        m = J;
                        n = 0
                    }
                    c && (J = C.createTextNode(""),
                    z.bf(J, c),
                    t = J,
                    k = 0);
                    z.bu(m, n, t, k).select();
                    h = d;
                    f || (c = z.N(BI(h, !0)),
                    a.oB = c);
                    g || (c = z.N(BI(h, !1)),
                    a.mx = c);
                    c = z.xz(a.F);
                    d = ZI(c, a.F.m())
                }
                d.select();
                c = d
            }
            m = c;
            c = GI(a).B("DIV");
            d = m.de();
            z.gG ? c.appendChild(d.cloneContents()) :
            z.fG && (n = m.Kd(),
            n = n.replace(/\r\n/g, "\r"),
            t = n.length,
            m = t - z.sq(n).length,
            n = t - z.rq(n).length,
            d.moveStart("character", m),
            d.moveEnd("character", -n),
            m = d.htmlText,
            "Formatted" == d.queryCommandValue("formatBlock") && (m = z.Na(d.htmlText)),
            c.innerHTML = m);
            m = b(c.innerHTML);
            C = z.xz(a.F);
            c = GI(a);
            n = z.pq();
            d = z.pq();
            m = '\x3cspan id\x3d"' + n + '"\x3e\x3c/span\x3e' + m + '\x3cspan id\x3d"' + d + '"\x3e\x3c/span\x3e';
            k = z.pq();
            t = '\x3cspan id\x3d"' + k + '"\x3e\x3c/span\x3e';
            if (z.fG) {
                J = C.Ce(0).de();
                J.pasteHTML(t);
                for (var K; (K = J.parentElement()) &&
                z.Bu(K) && !SI(K); ) {
                    C = K.nodeName;
                    if ("TD" == C || "TR" == C || "TH" == C)
                        break;
                    z.N(K)
                }
                J.pasteHTML(m);
                (k = c.m(k)) && z.N(k)
            } else if (z.gG) {
                c.wa().execCommand("insertImage", !1, k);
                C = new RegExp("\x3c[^\x3c]*" + k + "[^\x3e]*\x3e");
                K = z.xz(a.F).Qb();
                3 == K.nodeType && (K = K.parentNode);
                for (; !C.test(K.innerHTML); )
                    K = K.parentNode;
                if (z.y)
                    z.Eu(K, K.innerHTML.replace(C, m));
                else {
                    z.Eu(K, K.innerHTML.replace(C, t));
                    for (K = k = c.m(k); (K = k.parentNode) && z.Bu(K) && !SI(K); ) {
                        C = K.nodeName;
                        if ("TD" == C || "TR" == C || "TH" == C)
                            break;
                        z.cf(k, K);
                        z.N(K)
                    }
                    z.Eu(K, K.innerHTML.replace(new RegExp(t,
                    "i"), m))
                }
            }
            K = c.m(n);
            c = c.m(d);
            z.bu(K, 0, c, c.childNodes.length).select();
            z.N(K);
            z.N(c);
            (z.y || z.Hc) && h && (c = z.xz(a.F),
            K = a.F.m(),
            a.oB && (K.insertBefore(a.oB, K.firstChild),
            a.oB = null ),
            a.mx && (K.appendChild(a.mx),
            a.mx = null ),
            K = null ,
            d = BI(h, !0),
            m = BI(h, !1),
            d && m && (K = z.bu(d, 0, m, 0)),
            f = f ? K : c,
            g = g ? K : c,
            II(f.Y(), f.xa(), g.la(), g.La()).select(),
            h.H())
        }
    }
    ;
    var LL = function() {
        GL.call(this)
    }
    ;
    var ML = function(a) {
        kJ.call(this, a);
        this.S = new z.zd(this);
        this.VB = z.pm.bv + "/upload";
        this.MM = !z.A
    }
    ;
    var NL = function(a) {
        z.Mc.call(this, "ok");
        var b = a[0];
        this.Ul = b;
        this.nI = b.replace("_m.jpg", "_r.jpg");
        this.JI = a[1];
        this.II = a[2]
    }
    ;
    var OL = function(a, b) {
        function c(a) {
            a.eq(b).addClass("selected").siblings().removeClass("selected")
        }
        var d = (0,
        window.$)(".tab-nav", a.xB)
          , f = (0,
        window.$)(".tab-content", a.form);
        z.P(a.hf, !1);
        var g = f.eq(b);
        g.find("input").val("");
        c(d);
        c(f);
        g.find(":text").focus()
    }
    ;
    var PL = function(a, b) {
        z.P(a.eh, !1);
        a.hf.innerHTML = b;
        z.P(a.hf, !0)
    }
    ;
    var QL = function() {
        pJ.call(this, "image");
        this.S = new z.zd(this)
    }
    ;
    var RL = function(a) {
        kJ.call(this, a);
        this.S = new z.zd(this)
    }
    ;
    var SL = function(a, b, c, d, f) {
        z.Mc.call(this, "ok");
        this.dW = a;
        this.cW = b;
        this.qK = f;
        this.eV = c;
        this.poster = d
    }
    ;
    var TL = function(a, b) {
        b = z.Ao(b);
        if (!b)
            return !1;
        var c = b.match(/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi);
        c || (z.P(a.eh, !1),
        a.hf.innerHTML = "我们无法识别你输入的视频页地址",
        z.P(a.hf, !0));
        return c
    }
    ;
    var UL = function() {
        pJ.call(this, VL);
        this.S = new z.zd(this)
    }
    ;
    var WL = function() {}
    ;
    var XL = function(a, b) {
        var c = [];
        b.enableFullScreen && c.push("toggleFullScreen");
        c.push("+bold", "+italic", "+underline", new YK, "+blockquote", "+code", "+insertOrderedList", "+insertUnorderedList", "+equation");
        b.canUploadMedia_ && c.push(new YK, "image", VL);
        b.useRemoveFormat_ && c.push(new YK, "+removeFormat");
        for (var d = z.H(a), f = [], g = 0, h; h = c[g]; g++) {
            if (z.pa(h)) {
                var k = void 0;
                if (h = z.FH[h]) {
                    var k = h.factory || z.vD
                      , m = h.Ca
                      , n = h.V
                      , t = h.caption
                      , C = h.Pa
                      , J = d || z.H()
                      , k = k(m, n, t, C, null , J);
                    h.kb && (k.kb = !0)
                }
                h = k
            }
            h && f.push(h)
        }
        c = z.H(a);
        c = new RI(z.OC.aa(),z.YF,c);
        d = z.Ng(a);
        c.rh(d);
        c.Qe(!1);
        for (g = 0; h = f[g]; g++)
            h.Ub(32, !1),
            h.rh(d),
            c.K(h, !0);
        c.render(a);
        return c
    }
    ;
    var YL = function(a, b) {
        var c = a.m()
          , d = new z.Uz;
        d.w(c);
        var f = z.M("div", {
            style: "display:none",
            className: "tr-spinner spinner-gray"
        });
        b.m().appendChild(f);
        d.on("willScrape", function() {
            z.P(f, !0)
        }).on("didScrape", function() {
            z.P(f, !1)
        });
        z.Bc(a, d)
    }
    ;
    z.Et.prototype.vh = z.Y(49, function(a, b) {
        this.insertNode(a, !0);
        this.insertNode(b, !1)
    });
    z.Jt.prototype.vh = z.Y(48, function(a, b) {
        var c = z.Se(z.Ke(this.Y()));
        if (c = z.qu(c))
            var d = c.Y()
              , f = c.la()
              , g = c.xa()
              , h = c.La();
        var k = this.O.cloneRange()
          , m = this.O.cloneRange();
        k.collapse(!1);
        m.collapse(!0);
        k.insertNode(b);
        m.insertNode(a);
        k.detach();
        m.detach();
        if (c) {
            if (3 == d.nodeType)
                for (; g > d.length; ) {
                    g -= d.length;
                    do
                        d = d.nextSibling;
                    while (d == a || d == b)
                }
            if (3 == f.nodeType)
                for (; h > f.length; ) {
                    h -= f.length;
                    do
                        f = f.nextSibling;
                    while (f == a || f == b)
                }
            z.bu(d, g, f, h).select()
        }
    });
    z.Ot.prototype.vh = z.Y(47, function(a, b) {
        var c = this.O.duplicate()
          , d = this.O.duplicate();
        z.Wt(c, a, !0);
        z.Wt(d, b, !1);
        this.Ed()
    });
    z.$t.prototype.vh = z.Y(46, function(a, b) {
        z.du(this).vh(a, b);
        this.Ed()
    });
    z.v(DI, z.ut);
    DI.prototype.wp = function(a) {
        z.N(BI(this, !0));
        z.N(BI(this, !1));
        return a
    }
    ;
    DI.prototype.su = function() {
        var a = null
          , b = BI(this, !this.KA)
          , c = BI(this, this.KA);
        if (b && c) {
            var a = b.parentNode
              , b = z.mb(a.childNodes, b)
              , d = c.parentNode
              , c = z.mb(d.childNodes, c);
            d == a && (this.KA ? b-- : c--);
            a = z.bu(a, b, d, c);
            a = this.wp(a);
            a.select()
        } else
            this.wp();
        return a
    }
    ;
    DI.prototype.D = function() {
        this.wp();
        this.ca = null
    }
    ;
    z.Rw.prototype.Xx = z.Y(44, function() {
        return this.m().innerHTML
    });
    z.Ot.prototype.cg = z.Y(41, function() {
        var a = this.Qr.body.createTextRange();
        a.moveToElementText(this.Qr.body);
        return this.Fg(new z.Ot(a,this.Qr), !0)
    });
    z.$t.prototype.cg = z.Y(40, function() {
        return (!this.Ba || CI(this.Ba)) && (!this.ua || CI(this.ua)) && (!(z.A && !(9 <= z.Ug)) || z.du(this).cg())
    });
    z.fu.prototype.cg = z.Y(39, function() {
        var a = !1;
        try {
            a = z.uo(this.ci(), function(a) {
                return z.A ? !!a.parentNode : z.mf(a.ownerDocument.body, a)
            })
        } catch (b) {}
        return a
    });
    z.lu.prototype.cg = z.Y(38, function() {
        return z.uo(z.yt(this), function(a) {
            return a.cg()
        })
    });
    z.Jt.prototype.bd = z.Y(37, function() {
        var a = this.O;
        a.extractContents();
        if (a.startContainer.hasChildNodes()) {
            var b = a.startContainer.childNodes[a.startOffset];
            if (b) {
                var c = b.previousSibling;
                "" == z.Qp(b) && z.N(b);
                c && "" == z.Qp(c) && z.N(c)
            }
        }
        if (z.Gl) {
            var b = this.Y()
              , c = this.xa()
              , d = this.la()
              , f = this.La()
              , g = b.nextSibling;
            b == d && b.parentNode && 3 == b.nodeType && g && 3 == g.nodeType && (b.nodeValue += g.nodeValue,
            z.N(g),
            a.setStart(b, c),
            a.setEnd(d, f))
        }
    });
    z.Ot.prototype.bd = z.Y(36, function() {
        if (!this.isCollapsed() && this.O.htmlText) {
            var a = this.Y()
              , b = this.la()
              , c = this.O.text
              , d = this.O.duplicate();
            d.moveStart("character", 1);
            d.moveStart("character", -1);
            d.text == c && (this.O = d);
            this.O.text = "";
            this.Ed();
            c = this.Y();
            d = this.xa();
            try {
                var f = a.nextSibling;
                a == b && a.parentNode && 3 == a.nodeType && f && 3 == f.nodeType && (a.nodeValue += f.nodeValue,
                z.N(f),
                this.O = z.Pt(c),
                this.O.move("character", d),
                this.Ed())
            } catch (g) {}
        }
    });
    z.$t.prototype.bd = z.Y(35, function() {
        z.du(this).bd();
        this.Ed()
    });
    z.fu.prototype.bd = z.Y(34, function() {
        if (this.O) {
            for (var a = [], b = 0, c = this.O.length; b < c; b++)
                a.push(this.O.item(b));
            z.w(a, z.N);
            this.collapse(!1)
        }
    });
    z.lu.prototype.bd = z.Y(33, function() {
        z.w(z.yt(this), function(a) {
            a.bd()
        })
    });
    z.wt.prototype.mg = z.Y(32, function(a) {
        this.isCollapsed() || this.bd();
        return this.insertNode(a, !0)
    });
    z.fu.prototype.mg = z.Y(31, function(a) {
        a = this.insertNode(a, !0);
        this.isCollapsed() || this.bd();
        return a
    });
    z.vt.prototype.Vp = z.Y(30, function() {
        var a = this.Lc ? -1 : 1;
        this.Vb == a && (this.Vb = -1 * a,
        this.depth += this.Vb * (this.Lc ? -1 : 1))
    });
    z.Ft.prototype.Vp = z.Y(29, function() {
        z.Ft.v.Vp.apply(this);
        if (z.mf(this.node, this.ua))
            throw z.Pd;
    });
    z.Xq.prototype.Ci = z.Y(28, function(a, b) {
        var c = a.rd()
          , d = this.T() + "-collapse-left"
          , f = this.T() + "-collapse-right";
        a.nj(c ? f : d, !!(b & 1));
        a.nj(c ? d : f, !!(b & 2))
    });
    z.gr.prototype.Ci = z.Y(27, function(a) {
        this.M.Ci(this, a)
    });
    z.vj.prototype.Rx = z.Y(23, function() {
        z.xj(this);
        return this.rc
    });
    z.ad.prototype.Fl = z.Y(2, function(a, b) {
        var c = this.kc[a.toString()]
          , d = [];
        if (c)
            for (var f = 0; f < c.length; ++f) {
                var g = c[f];
                g.el == b && d.push(g)
            }
        return d
    });
    z.F.prototype.Fl = z.Y(1, function(a, b) {
        return this.$d.Fl(String(a), b)
    });
    z.v(RI, z.Vr);
    RI.prototype.fe = function(a) {
        RI.v.fe.call(this, a);
        this.yf || z.Zr(this)
    }
    ;
    z.v(TI, DI);
    TI.prototype.wp = function(a) {
        var b = BI(this, !0)
          , c = BI(this, !1)
          , b = b && c ? z.Sp(b, c) : b || c;
        TI.v.wp.call(this);
        if (a)
            return QI(b, a);
        b && (a = z.qu(z.Se(z.Ke(b))),
        (a = QI(b, a)) && a.select())
    }
    ;
    var aJ = {
        text: !0,
        file: !0,
        url: !0
    }, dJ = {
        ADDRESS: !0,
        ARTICLE: !0,
        ASIDE: !0,
        BLOCKQUOTE: !0,
        BODY: !0,
        CAPTION: !0,
        CENTER: !0,
        COL: !0,
        COLGROUP: !0,
        DETAILS: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DD: !0,
        DT: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        ISINDEX: !0,
        OL: !0,
        LI: !0,
        MAP: !0,
        MENU: !0,
        NAV: !0,
        OPTGROUP: !0,
        OPTION: !0,
        P: !0,
        PRE: !0,
        SECTION: !0,
        SUMMARY: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TR: !0,
        UL: !0
    }, VL, ZL;
    z.v(kJ, z.F);
    kJ.prototype.show = function() {
        this.ef || (this.ef = this.Mw(),
        this.ef.g("hide", this.xO, !1, this));
        this.ef.G(!0)
    }
    ;
    kJ.prototype.hide = function() {
        this.ef && this.ef.G(!1)
    }
    ;
    kJ.prototype.sb = function() {
        return !!this.ef && this.ef.U()
    }
    ;
    lJ.prototype.Na = function(a) {
        this.Pi.Na(a);
        return this
    }
    ;
    lJ.prototype.Cd = function(a, b, c) {
        c = c || z.pq();
        this.wn.set(c, a);
        this.vn[c] = b;
        return this
    }
    ;
    lJ.prototype.Jh = function(a) {
        z.bj(this.Pi.bi(), a);
        return this
    }
    ;
    lJ.prototype.ka = function(a) {
        this.Pi.R().appendChild(a);
        return this
    }
    ;
    z.e = kJ.prototype;
    z.e.Rx = function(a) {
        return this.ef.sc.mf(a)
    }
    ;
    z.e.rP = function(a) {
        return (a = this.Gn(a)) ? this.dispatchEvent(a) : !1
    }
    ;
    z.e.lo = function() {
        return this.dispatchEvent("cancel")
    }
    ;
    z.e.D = function() {
        this.ef && (this.hide(),
        this.ef.H(),
        this.ef = null );
        kJ.v.D.call(this)
    }
    ;
    z.e.xO = function() {
        this.dispatchEvent("afterhide")
    }
    ;
    z.v(pJ, z.Xy);
    z.e = pJ.prototype;
    z.e.He = function(a) {
        return a == this.bN
    }
    ;
    z.e.execCommand = function(a, b) {
        return this.jf.apply(this, arguments)
    }
    ;
    z.e.oF = function() {
        return this.Ia
    }
    ;
    z.e.jf = function(a, b) {
        this.cJ || rJ(this);
        this.Ia || (this.Ia = this.Lw(z.H(this.F.Vk), b));
        var c = z.xz(this.F);
        this.YI = FI(this);
        this.gJ = c && new TI(c);
        z.vu(this.F.hb.Va());
        z.md(this.Ia, "afterhide", this.jo, !1, this);
        this.F.Vg = !0;
        this.Ia.show();
        this.dispatchEvent("dialogOpened");
        z.yz(this.F);
        return !0
    }
    ;
    z.e.jo = function() {
        this.F.Vg = !1;
        qJ(this);
        this.YI();
        this.cJ || rJ(this);
        this.dispatchEvent("dialogClosed");
        z.yz(this.F);
        this.F.Jr.selectionchange = (0,
        z.G)()
    }
    ;
    z.e.D = function() {
        rJ(this);
        pJ.v.D.call(this)
    }
    ;
    z.e.cJ = !1;
    z.e.$y = !1;
    var xJ = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
    z.v(yJ, z.Xy);
    yJ.prototype.nd = function() {
        return "BTF"
    }
    ;
    var $L = {
        QW: "+link",
        xW: "+createLink",
        GW: "+formatBlock",
        KW: "+indent",
        XW: "+outdent",
        dX: "+strikeThrough",
        IW: "+insertHorizontalRule",
        eX: "+subscript",
        fX: "+superscript",
        iX: "+underline",
        tW: "+bold",
        LW: "+italic",
        FW: "+fontSize",
        EW: "+fontName",
        DW: "+foreColor",
        nW: "+backColor",
        WW: "+insertOrderedList",
        mX: "+insertUnorderedList",
        MW: "+justifyCenter",
        NW: "+justifyFull",
        PW: "+justifyRight",
        OW: "+justifyLeft"
    }
      , aM = z.gq($L);
    yJ.prototype.He = function(a) {
        return a in aM
    }
    ;
    var bM = ["+createLink"];
    z.e = yJ.prototype;
    z.e.MG = function(a) {
        return z.x(bM, a)
    }
    ;
    z.e.Be = function() {
        return z.xz(this.F)
    }
    ;
    z.e.jf = function(a, b, c, d) {
        var f, g, h, k, m, n = b;
        switch (a) {
        case "+backColor":
            if (null  !== n)
                if (z.oG) {
                    a = n;
                    g = z.xz(this.F);
                    var t, C;
                    g && g.isCollapsed() && (t = GI(this).createTextNode(z.y ? " " : ""),
                    h = g.Y(),
                    C = 1 == h.nodeType ? h : h.parentNode,
                    "" == C.innerHTML ? (C.style.textIndent = "-10000px",
                    C.appendChild(t)) : (C = GI(this).B("SPAN", {
                        style: "text-indent:-10000px"
                    }, t),
                    g.mg(C)),
                    z.tu(t).select());
                    FJ(this, "hiliteColor", a, !1, !0);
                    t && (z.y && (t.data = ""),
                    C.style.textIndent = "")
                } else
                    z.vg ? FJ(this, "hiliteColor", n) : FJ(this, a, n);
            break;
        case "+createLink":
            m =
            PJ(this, b, c, d);
            break;
        case "+link":
            a: {
                m = n;
                this.F.wf || GI(this).Va().focus();
                g = (a = this.Be()) && a.Qb();
                if ((g = z.uf(g, "A")) && z.vf(g, SI))
                    z.ef(g);
                else if (m = PJ(this, a, "/", m)) {
                    if (!this.F.execCommand("link", m))
                        if (h = this.F.Vk.prompt(z.RG, "http://"))
                            a = tJ(m) || h,
                            g = m.te,
                            g.href = h,
                            n = tJ(m),
                            a != n && (h = z.yu(g),
                            h.tagName && "IMG" == h.tagName ? h.setAttribute("alt", a ? a : "") : (3 == h.nodeType && (h = h.parentNode),
                            z.Qp(h) != n && (h = g),
                            z.af(h),
                            g = z.H(h),
                            h.appendChild(g.createTextNode(a))),
                            m.Vw = null ),
                            a = m.te,
                            z.sG ? (g = a.nextSibling,
                            g && 3 == g.nodeType &&
                            (z.Ka(g.data, " ") || z.Ka(g.data, " ")) || (g = z.H(a).createTextNode(" "),
                            z.cf(g, a)),
                            z.uu(g, 1).select()) : z.Hu(a, !1);
                        else {
                            a = z.tu(m.te);
                            a = new TI(a);
                            z.ef(m.te);
                            for (m.te = null ; m.yx.length; )
                                z.ef(m.yx.pop());
                            a.restore().select();
                            m = null ;
                            break a
                        }
                    break a
                }
                m = null
            }
            break;
        case "+justifyCenter":
        case "+justifyFull":
        case "+justifyRight":
        case "+justifyLeft":
            FJ(this, a, null , !1, !0);
            z.y && FJ(this, a, null , !1, !0);
            z.nG && z.y || z.Qd(z.xz(this.F), EJ);
            break;
        default:
            z.A && "+formatBlock" == a && n && (n = "\x3c" + n + "\x3e");
            if ("+foreColor" == a && null  ===
            n)
                break;
            switch (a) {
            case "+indent":
            case "+outdent":
                z.nG && (z.y && (g = !0),
                z.vg && (g = "+outdent" == a ? !zJ(this).queryCommandEnabled("outdent") : !0));
            case "+insertOrderedList":
            case "+insertUnorderedList":
                if (t = z.vG)
                    t = zJ(this),
                    t = WJ(this, !0, t, a, void 0);
                t ? h = "P" != this.F.queryCommandValue("+defaultTag") : z.wG || AJ(this);
                z.y && z.uG && !this.queryCommandValue(a) && (t = this.F.queryCommandValue("+defaultTag"),
                "P" == t || "DIV" == t ? t = !1 : (t = this.Be(),
                t.isCollapsed() && 3 != t.vc().nodeType ? (f = GI(this).createTextNode(" "),
                t.insertNode(f,
                !1),
                z.tu(f).select(),
                t = !0) : t = !1),
                k |= t);
            case "+formatBlock":
                f = !!this.F.Sb.Bidi;
                break;
            case "+subscript":
            case "+superscript":
                z.tG && !this.queryCommandValue(a) && (t = "+subscript" == a ? "+superscript" : "+subscript",
                C = DJ(t),
                this.queryCommandValue(t) || zJ(this).execCommand(C, !1, null ),
                zJ(this).execCommand(C, !1, null ));
                break;
            case "+underline":
            case "+bold":
            case "+italic":
                g = z.y && z.nG && this.queryCommandValue(a);
                break;
            case "+foreColor":
            case "+fontName":
                g = z.nG && z.y
            }
            FJ(this, a, n, f, !!g);
            k && zJ(this).execCommand("Delete", !1,
            !0);
            h && zJ(this).execCommand("FormatBlock", !1, "\x3cdiv\x3e")
        }
        z.y && !this.F.Vg && GI(this).Va().focus();
        return m
    }
    ;
    z.e.queryCommandValue = function(a) {
        var b;
        switch (a) {
        case "+link":
            return a = (a = this.Be()) && a.Qb(),
            a = z.uf(a, "A"),
            !!a && !!z.vf(a, SI);
        case "+justifyCenter":
        case "+justifyFull":
        case "+justifyRight":
        case "+justifyLeft":
            return TJ(this, a);
        case "+formatBlock":
            return SJ(z.xz(this.F));
        case "+indent":
        case "+outdent":
        case "+insertHorizontalRule":
            return !1;
        case "+fontSize":
        case "+fontName":
        case "+foreColor":
        case "+backColor":
            return this.eu(zJ(this), a, z.nG && z.y);
        case "+underline":
        case "+bold":
        case "+italic":
            b = z.nG &&
            z.y;
        default:
            var c = zJ(this);
            return WJ(this, !0, c, a, b)
        }
    }
    ;
    z.e.wI = function(a) {
        z.lG && a.match(/^\s*<script/i) && (a = "\x26nbsp;" + a);
        z.mG && (a = a.replace(/<(\/?)strong([^\w])/gi, "\x3c$1b$2"),
        a = a.replace(/<(\/?)em([^\w])/gi, "\x3c$1i$2"));
        return a
    }
    ;
    z.e.TM = function(a) {
        a = a.getElementsByTagName("IMG");
        for (var b = 0, c; c = a[b]; b++)
            if (z.A) {
                c.removeAttribute("tabIndex");
                c.removeAttribute("tabIndexSet");
                var d = c;
                null  !== d && "removeAttribute" in d && d.removeAttribute(z.va);
                try {
                    delete d[z.va]
                } catch (f) {}
                c.DR && (c.tabIndex = c.DR)
            }
    }
    ;
    z.e.UM = function(a) {
        if (z.B) {
            for (var b = z.Me(this.F.hb.Ka, "HEAD", void 0, void 0), c = [], d = b.length, f = 1; f < d; ++f)
                for (var g = b[f].getElementsByTagName("STYLE"), h = g.length, k = 0; k < h; ++k)
                    c.push(g[k].outerHTML);
            return c.join("") + a
        }
        return a
    }
    ;
    z.e.As = function(a, b, c) {
        if (!c)
            return !1;
        var d;
        switch (b) {
        case "b":
            d = "+bold";
            break;
        case "i":
            d = "+italic";
            break;
        case "u":
            d = "+underline";
            break;
        case "s":
            return !0
        }
        return d ? (this.F.execCommand(d),
        !0) : !1
    }
    ;
    var BJ = z.A ? /<br([^\/>]*)\/?>/gi : /<br([^\/>]*)\/?>(?!<\/(div|p)>)/gi
      , HJ = {
        indent: 1,
        outdent: 1,
        insertOrderedList: 1,
        insertUnorderedList: 1,
        justifyCenter: 1,
        justifyFull: 1,
        justifyRight: 1,
        justifyLeft: 1,
        ltr: 1,
        rtl: 1
    }
      , GJ = {
        insertOrderedList: 1,
        insertUnorderedList: 1
    }
      , RJ = {
        1: 1,
        a: 1,
        A: 1,
        i: 1,
        I: 1
    }
      , QJ = {
        disc: 1,
        circle: 1,
        square: 1
    }
      , IJ = {
        justifyCenter: 1,
        justifyFull: 1,
        justifyRight: 1,
        justifyLeft: 1,
        formatBlock: 1
    }
      , JJ = {
        insertOrderedList: 1,
        insertUnorderedList: 1
    }
      , VJ = {
        center: 1,
        justify: 1,
        right: 1,
        left: 1
    };
    yJ.prototype.eu = function(a, b, c) {
        return WJ(this, !1, a, b, c)
    }
    ;
    z.v(XJ, z.yc);
    XJ.prototype.toString = function() {
        for (var a = [], b, c = 0; b = this.Gt[c]; c++)
            a.push(this.Lt[c] + "," + b);
        return a.join("\n")
    }
    ;
    XJ.prototype.D = function() {
        delete this.Lt;
        delete this.Gt
    }
    ;
    z.v(ZJ, z.Xy);
    z.e = ZJ.prototype;
    z.e.tag = "DIV";
    z.e.nd = function() {
        return "EnterHandler"
    }
    ;
    z.e.enable = function(a) {
        ZJ.v.enable.call(this, a);
        !z.yG || "P" != this.tag && "DIV" != this.tag || GI(this).wa().execCommand("opera-defaultBlock", !1, this.tag)
    }
    ;
    z.e.wI = function(a) {
        return !a || z.vq(a) ? z.lG ? this.nO() : "" : a
    }
    ;
    z.e.nO = z.jb("\x3cbr\x3e");
    z.e.gP = function(a) {
        if (z.y && this.F.Vg)
            return !1;
        if (8 == a.keyCode) {
            var b = z.xz(this.F)
              , c = this.F.m()
              , b = b && b.Y();
            c.firstChild == b && z.Bu(b) && (a.preventDefault(),
            a.stopPropagation())
        } else if (13 == a.keyCode)
            if (z.y) {
                if (!a.shiftKey) {
                    var c = z.xz(this.F)
                      , b = !c || c.isCollapsed()
                      , d = bK(this)
                      , f = this.F.execCommand("+splitBlockquote", d);
                    f && (a.preventDefault(),
                    a.stopPropagation());
                    z.gG || d.removeNode(!0);
                    f || this.XO(a, b, c)
                }
            } else {
                this.F.Zh();
                c = bK(this);
                if (b = !!this.F.execCommand("+splitBlockquote", c))
                    a.preventDefault(),
                    a.stopPropagation();
                z.gG || c.removeNode(!0);
                z.B && this.YO(a);
                if (z.A || z.vg)
                    $J(this);
                else if (!b && z.B) {
                    if (b = c = z.xz(this.F))
                        a: {
                            for (b = c.Qb(); b; b = b.parentNode)
                                if (cJ(b)) {
                                    b = "BLOCKQUOTE" == b.tagName;
                                    break a
                                }
                            b = !1
                        }
                    if (b) {
                        b = GI(this);
                        d = b.createElement("BR");
                        c.insertNode(d, !0);
                        if (c = cJ(d.parentNode)) {
                            for (c = d.nextSibling; c && 3 == c.nodeType && !c.nodeValue; )
                                c = c.nextSibling;
                            c = !c
                        }
                        c && z.bf(b.createElement("BR"), d);
                        z.Hu(d, !1);
                        a.preventDefault()
                    }
                }
                this.F.ff()
            }
        else
            z.y && 46 == a.keyCode && (b = z.xz(this.F),
            b.isCollapsed() && (c = b.la(),
            1 == c.nodeType && (b = c.childNodes[b.La()]) &&
            "BR" == b.tagName && (d = z.zu(z.eq(new z.wu(b,!1,!0), z.Au)),
            f = b.nextSibling,
            c.removeChild(b),
            a.preventDefault(),
            f && cJ(f) && (d && "BR" != d.tagName && !cJ(d) ? z.uu(d, z.Du(d)).select() : (a = z.yu(f),
            z.uu(a, 0).select())))));
        return !1
    }
    ;
    z.e.zs = function(a) {
        if (z.y && this.F.Vg)
            return !1;
        (z.A || z.vg) && 13 == a.keyCode && $J(this, !0);
        return !1
    }
    ;
    z.e.YO = z.p;
    z.e.XO = z.p;
    var aK = {
        LI: !0,
        DIV: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0
    };
    var cM = new cK
      , dM = ["click", z.y ? "keypress" : "keydown", "keyup"];
    cK.prototype.g = function(a, b, c, d, f) {
        function g(a) {
            var c = z.dd(b)
              , f = z.kf(a.target) ? a.target.getAttribute("role") || null  : null ;
            "click" == a.type && z.Uc(a) ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != f && "tab" != f || (c.call(d, a),
            a.preventDefault()) : (a.type = "keypress",
            c.call(d, a))
        }
        g.Yj = b;
        g.wu = d;
        f ? f.g(a, dM, g, c) : z.E(a, dM, g, c)
    }
    ;
    cK.prototype.qa = function(a, b, c, d, f) {
        for (var g, h = 0; g = dM[h]; h++) {
            var k;
            var m = a;
            k = g;
            var n = !!c;
            k = z.Wc(m) ? m.Fl(k, n) : m ? (m = z.fd(m)) ? m.Fl(k, n) : [] : [];
            for (m = 0; n = k[m]; m++)
                if (n.listener.Yj == b && n.listener.wu == d) {
                    f ? f.qa(a, g, n.listener, c, d) : z.nd(a, g, n.listener, c, d);
                    break
                }
        }
    }
    ;
    z.v(dK, z.F);
    dK.prototype.Qg = function() {
        return this.yc ? this.yc.clone() : null
    }
    ;
    dK.prototype.D = function() {
        dK.v.D.call(this);
        this.uz && (z.od(this.uz),
        this.uz = null );
        this.yc = this.gv = null
    }
    ;
    dK.prototype.ry = function() {
        var a = z.Pe(this.gv);
        z.Yp(a, this.yc) || (this.yc = a,
        this.dispatchEvent("resize"))
    }
    ;
    z.v(eK, z.F);
    var fK = "tr_bubble";
    z.e = eK.prototype;
    z.e.D = function() {
        eK.v.D.call(this);
        z.N(this.Dd);
        this.Dd = null ;
        this.S.H();
        this.S = null ;
        this.eC.H();
        this.eC = null
    }
    ;
    z.e.R = function() {
        return this.sn
    }
    ;
    z.e.Qb = function() {
        return this.Dd
    }
    ;
    z.e.MP = function() {
        this.U() && this.ha()
    }
    ;
    z.e.Am = function(a) {
        this.lg.Am(a)
    }
    ;
    z.e.OD = function() {
        this.lg.G(!1)
    }
    ;
    z.e.vP = function() {
        for (var a in this.td)
            z.N(this.td[a].element);
        this.td = {};
        z.dj(this.Dd, "tr_multi_bubble");
        this.S.removeAll();
        this.dispatchEvent("hide")
    }
    ;
    z.e.U = function() {
        return this.lg.U()
    }
    ;
    var eM = z.A ? 4 : 2
      , iK = new z.qg(eM,0,eM,0);
    eK.prototype.ha = function() {
        var a = null , b = !0, c;
        for (c in this.td)
            var d = this.td[c], a = d.zB, b = b && d.AT;
        c = 496;
        a = z.Ng(this.Dd) != z.Ng(a);
        b && (c = hK(this, a ? 7 : 5, 4, 9));
        c & 496 && (c = hK(this, a ? 6 : 4, 5, 9));
        c & 496 && hK(this, a ? 7 : 5, 4, 5)
    }
    ;
    eK.prototype.qO = z.Dl;
    jK.prototype.R = function() {
        return this.element.lastChild
    }
    ;
    z.v(kK, z.Xy);
    var nK = {};
    z.e = kK.prototype;
    z.e.ti = null ;
    z.e.kz = !1;
    z.e.nd = z.jb("AbstractBubblePlugin");
    z.e.zs = function() {
        this.U() && this.Ej();
        return !1
    }
    ;
    z.e.Ej = function(a, b) {
        var c;
        if (a)
            c = a.target;
        else if (b)
            c = b;
        else {
            var d = z.xz(this.F);
            if (d) {
                var f = d.Y()
                  , g = d.la()
                  , h = d.xa()
                  , k = d.La();
                z.A && d.isCollapsed() && f != g && (d = z.uu(f, h));
                1 == f.nodeType && f == g && h == k - 1 && (f = f.childNodes[h],
                1 == f.nodeType && (c = f))
            }
            c = c || d && d.Qb()
        }
        var m;
        a: {
            if (c) {
                if (d = c)
                    d = "IMG" == c.nodeName && (!!c.getAttribute("eeimg") || z.aj(c, "ee_img"));
                if (h = d ? c : null ) {
                    if (h != this.Pu || !this.ti)
                        if (this.ti && oK(this),
                        c = mK(this),
                        !gK(c, this.Qx())) {
                            this.Pu = h;
                            var f = this.Qx()
                              , k = this.mF()
                              , g = (0,
                            z.q)(this.kN, this)
                              , n = this.UU()
                              ,
                            d = z.pq()
                              , h = new jK(c.ca,d,f,k,h,!n);
                            c.td[d] = h;
                            k = 0;
                            for (n = c.sn.childNodes.length - 1; k < n; k++) {
                                var t = c.sn.childNodes[k];
                                if (c.td[t.id].type > f) {
                                    m = t;
                                    break
                                }
                            }
                            z.bf(h.element, m || c.sn.lastChild);
                            g(h.R());
                            $I(h.element, c.S);
                            m = z.to(c.td);
                            1 == m ? (c.S.g(c.ND, "click", c.OD).g(c.eC, "resize", c.MP).g(c.lg, "hide", c.vP),
                            c.lg.G(!0),
                            c.ha()) : 2 == m && z.bj(c.Dd, "tr_multi_bubble");
                            c.ha();
                            this.ti = d;
                            this.ic.g(c, "hide", this.LF);
                            this.si();
                            this.kz && this.ic.g(c.R(), "keydown", this.RR)
                        }
                    m = !1;
                    break a
                }
            }
            this.ti && oK(this);
            m = !1
        }
        return m
    }
    ;
    z.e.disable = function(a) {
        if (a.am == z.iz) {
            var b = nK[a.id];
            b && (a == this.F && oK(this),
            b.H(),
            delete nK[a.id])
        }
    }
    ;
    z.e.Qx = function() {
        return ""
    }
    ;
    z.e.mF = function() {
        return ""
    }
    ;
    z.e.UU = z.Bl;
    z.e.si = z.p;
    z.e.VM = z.p;
    z.e.LF = function() {
        this.ti = this.Pu = null ;
        this.ic.removeAll();
        this.VM()
    }
    ;
    z.e.oy = function(a) {
        if (this.kz && this.U() && 9 == a.keyCode && !a.shiftKey) {
            var b = mK(this).R();
            if (b = z.L("tr_bubble_tabbable", b))
                return b.focus(),
                a.preventDefault(),
                !0
        }
        return !1
    }
    ;
    z.e.RR = function(a) {
        if (this.U() && 9 == a.keyCode) {
            var b = mK(this).R()
              , b = z.Xp("tr_bubble_tabbable", b);
            (a.shiftKey ? b[0] : z.lb(b)) == a.target && (this.F.focus(),
            a.preventDefault())
        }
    }
    ;
    z.e.U = function() {
        return !!this.ti
    }
    ;
    z.e.ha = function() {
        var a = mK(this);
        a && a.ha()
    }
    ;
    z.e.Dr = function(a, b, c, d) {
        b = this.ca.B("SPAN", {
            className: "tr_bubble_link"
        }, b);
        this.kz && (b.hasAttribute("tabindex") || b.setAttribute("tabindex", 0),
        z.bj(b, "tr_bubble_tabbable"));
        b.setAttribute("role", "link");
        d ? d.appendChild(b) : (d = this.ca.m(a)) && z.Wp(b, d);
        b.id = a;
        $I(b, this.ic);
        c && (a = this.ic,
        cM.g(b, c, void 0, a.fa || a, a));
        return b
    }
    ;
    z.v(qK, kK);
    var fM = z.u("Equation:")
      , gM = z.u("Edit")
      , hM = z.u("Remove");
    z.e = qK.prototype;
    z.e.nd = function() {
        return "EquationBubble"
    }
    ;
    z.e.kN = function(a) {
        a.appendChild(a.ownerDocument.createTextNode(fM + " "));
        this.Dr("ee_bubble_edit", gM, this.JN, a);
        a.appendChild(a.ownerDocument.createTextNode(fM + " - "));
        this.Dr("ee_remove_remove", hM, this.WT, a)
    }
    ;
    z.e.Qx = function() {
        return "IMG"
    }
    ;
    z.e.mF = function() {
        return z.u("Equation")
    }
    ;
    z.e.WT = function() {
        this.F.Zh();
        z.N(this.Pu);
        oK(this);
        this.F.ff()
    }
    ;
    z.e.JN = function() {
        var a = this.Pu;
        oK(this);
        this.F.execCommand("+equation", a)
    }
    ;
    z.v(rK, z.Mc);
    rK.prototype.type = "ok";
    z.v(sK, z.Mc);
    z.v(tK, z.Q);
    tK.prototype.Fj = "";
    tK.prototype.G = function(a) {
        z.P(this.m(), a)
    }
    ;
    z.v(uK, z.HC);
    z.e = uK.prototype;
    z.e.hi = function() {
        return this.dc
    }
    ;
    z.e.zl = function(a) {
        return 0 <= a && a < this.bn.length ? this.bn[a] : null
    }
    ;
    z.e.qf = function(a) {
        uK.v.qf.call(this, a);
        this.jg.dispatchEvent(new wK(iM,this))
    }
    ;
    z.e.Ll = function(a) {
        uK.v.Ll.call(this, a);
        a.relatedTarget && !z.mf(this.m(), a.relatedTarget) && this.jg.Ir()
    }
    ;
    z.e.od = function(a) {
        uK.v.od.call(this, a);
        a.relatedTarget && !z.mf(this.m(), a.relatedTarget) && this.jg.Ww.stop()
    }
    ;
    var iM = "a";
    wK.prototype.Yx = function() {
        return this.mT
    }
    ;
    z.v(vK, z.zC);
    z.la(vK);
    vK.prototype.T = function() {
        return "ee-palette"
    }
    ;
    z.v(xK, tK);
    z.e = xK.prototype;
    z.e.VG = "";
    z.e.yw = 0;
    z.e.B = function() {
        var a = z.u("TeX 公式")
          , b = z.u("预览")
          , c = z.u("了解更多")
          , d = this.ca
          , c = d.B("DIV", {
            style: "display: none;"
        }, d.B("SPAN", {
            "class": "ee-section-title ee-section-title-floating"
        }, a), this.Fj ? d.B("A", {
            id: "ee-section-learn-more",
            target: "_blank",
            href: this.Fj
        }, c) : null , d.B("DIV", {
            style: "clear: both;"
        }), a = this.nQ = d.B("DIV", {
            style: "position: relative"
        }));
        this.jg.setActive("mn").render(a);
        a.appendChild(d.B("DIV", {
            style: "clear:both"
        }));
        var f = this.xh = d.B("textarea", {
            "class": "ee-tex",
            dir: "ltr"
        });
        a.appendChild(f);
        a.appendChild(d.B("DIV", {
            "class": "ee-section-title"
        }, b));
        b = this.FT = d.B("DIV", {
            "class": "ee-preview-container"
        });
        a.appendChild(b);
        this.h = c
    }
    ;
    z.e.C = function() {
        this.KJ = new z.hC(this.xh);
        z.E(this.KJ, "input", this.QF, !1, this);
        this.o().g(this.xh, "keydown", this.QF);
        this.o().g(this.jg, iM, this.uP)
    }
    ;
    z.e.G = function(a) {
        xK.v.G.call(this, a);
        a && z.wd(this.cO, 0, this)
    }
    ;
    z.e.cO = function() {
        this.xh.focus();
        z.ts(this.xh, this.xh.value.length)
    }
    ;
    z.e.QF = function() {
        this.yw++;
        z.wd((0,
        z.q)(this.DP, this, this.yw), 500)
    }
    ;
    z.e.DP = function(a) {
        a == this.yw && yK(this)
    }
    ;
    z.e.uP = function(a) {
        var b = a.Yx()
          , c = this.jg
          , d = c.cn;
        a = this.xh;
        if ("mn" == b.hi()) {
            var f = b.Ta
              , f = -1 != f ? b.zl(f) : null ;
            if (d != b && d.hi() == f) {
                c.zF();
                return
            }
            f && (b = this.jg.setActive(f),
            b.m() || b.render(this.nQ),
            b = b.m(),
            z.Ag(b, 0, -b.clientHeight))
        } else {
            d = this.jg.cn;
            f = d.zl(d.Ta);
            if (!f)
                return;
            z.wd((0,
            z.q)(this.wQ, this, f + " "), 0)
        }
        a.focus()
    }
    ;
    z.e.wQ = function(a) {
        var b = this.xh
          , c = z.qs(b)[0]
          , d = b.value
          , d = d.substring(0, c) + a + d.substring(c);
        b.value = d;
        z.ts(b, c + a.length);
        yK(this)
    }
    ;
    z.e.Dl = function() {
        return this.xh.value
    }
    ;
    z.e.YA = function(a) {
        this.xh.value = a;
        yK(this)
    }
    ;
    z.e.D = function() {
        this.KJ.H();
        this.jg = null ;
        xK.v.D.call(this)
    }
    ;
    z.v(zK, z.Q);
    z.e = zK.prototype;
    z.e.yh = null ;
    z.e.B = function() {
        zK.v.B.call(this);
        this.Br()
    }
    ;
    z.e.Br = function() {
        var a = this.m();
        this.yh = new xK(this.ZD,this.Fj,this.ca);
        this.K(this.yh);
        this.yh.render(a);
        this.yh.G(!0)
    }
    ;
    z.e.ga = function(a) {
        this.h = a;
        this.Br()
    }
    ;
    z.e.Dl = function() {
        return this.yh.Dl()
    }
    ;
    z.e.YA = function(a) {
        this.yh.YA(a)
    }
    ;
    z.e.Xx = function() {
        var a = this.Dl()
          , b = pK(a);
        return b ? '\x3cimg src\x3d"' + b + '" alt\x3d"' + z.Oa(a) + '" class\x3d"ee_img tr_noresize" eeimg\x3d"1" style\x3d"vertical-align: middle"\x3e' : ""
    }
    ;
    z.e.isValid = function() {
        return 1024 < this.Dl().length
    }
    ;
    z.e.G = function(a) {
        this.yh.G(a)
    }
    ;
    z.e.D = function() {
        this.yh && this.yh.H();
        this.ZD = null ;
        zK.v.D.call(this)
    }
    ;
    z.v(AK, kJ);
    AK.prototype.Mw = function() {
        var a = new lJ(this)
          , b = z.u("公式编辑器")
          , c = z.u("插入公式")
          , d = z.u("保存修改")
          , f = z.u("取消")
          , c = this.oj.Dl() ? d : c;
        mJ(nJ(a.Na(b).ka(this.oj.m()), f), c);
        return oJ(a)
    }
    ;
    AK.prototype.Gn = function() {
        if (this.oj.isValid())
            return null ;
        var a = this.oj.Xx();
        return new rK(a)
    }
    ;
    AK.prototype.Vz = function(a) {
        this.GH || (this.GH = this.Rx("ok"));
        this.GH.disabled = !a.isValid
    }
    ;
    z.v(BK, uK);
    z.v(CK, uK);
    z.v(DK, uK);
    z.v(EK, uK);
    z.v(FK, uK);
    FK.prototype.G = function(a, b) {
        return FK.v.G.call(this, !0, b)
    }
    ;
    z.v(GK, vK);
    z.la(GK);
    GK.prototype.T = function() {
        return "ee-menu-palette"
    }
    ;
    z.v(HK, uK);
    z.v(IK, z.F);
    z.e = IK.prototype;
    z.e.Yx = function(a) {
        var b = this.pI
          , c = b[a];
        if (!c) {
            switch (a) {
            case "mn":
                c = new FK(this);
                break;
            case "g":
                c = new DK(this);
                break;
            case "s":
                c = new HK(this);
                break;
            case "c":
                c = new CK(this);
                break;
            case "m":
                c = new EK(this);
                break;
            case "a":
                c = new BK(this);
                break;
            default:
                throw Error("Invalid palette type!");
            }
            b[a] = c
        }
        return c
    }
    ;
    z.e.setActive = function(a) {
        var b = this.cn;
        b && b.G(!1);
        this.cn = b = this.Yx(a);
        b.G(!0);
        return b
    }
    ;
    z.e.Ir = function() {
        this.Ww.start()
    }
    ;
    z.e.zF = function() {
        this.setActive("mn")
    }
    ;
    z.e.L = function() {
        return this.HN
    }
    ;
    z.e.D = function() {
        IK.v.D.call(this);
        this.pI = this.cn = null
    }
    ;
    z.v(JK, pJ);
    z.e = JK.prototype;
    z.e.nd = z.jb("EquationEditorPlugin");
    z.e.Lw = function(a, b) {
        var c = b || null , d;
        c ? (d = c.getAttribute("alt"),
        d || (d = (d = c.getAttribute("src")) ? z.ce(d, "tex") || "" : "")) : d = "";
        this.oI = c;
        c = {};
        c.lT = new IK(a);
        c = new AK(c,a,d,this.Fj);
        c.addEventListener("ok", this.po, !1, this);
        return c
    }
    ;
    z.e.enable = function(a) {
        JK.v.enable.call(this, a);
        this.isEnabled(a) && (this.tN = z.E(a.m(), "dblclick", (0,
        z.q)(this.MO, this), !1, this))
    }
    ;
    z.e.disable = function(a) {
        JK.v.disable.call(this, a);
        this.isEnabled(a) || z.od(this.tN)
    }
    ;
    z.e.MO = function(a) {
        (a = a.target) && "IMG" === a.nodeName && a.getAttribute("eeimg") && this.execCommand("+equation", a)
    }
    ;
    z.e.po = function(a) {
        qJ(this);
        this.F.Zh();
        a = z.Ye(GI(this).Ka, a.UN);
        if (this.oI)
            z.Wp(a, this.oI);
        else {
            var b = z.xz(this.F);
            b.isCollapsed() || b.bd();
            a = b.insertNode(a, !1)
        }
        z.Hu(a, !1);
        this.F.ff()
    }
    ;
    z.v(KK, z.Xy);
    KK.prototype.As = function(a) {
        return z.y && this.F.Vg ? !1 : 9 != a.keyCode || a.metaKey || a.ctrlKey ? !1 : MK(this, a)
    }
    ;
    z.v(LK, KK);
    LK.prototype.nd = function() {
        return "ListTabHandler"
    }
    ;
    z.v(NK, z.Xy);
    z.e = NK.prototype;
    z.e.nd = z.jb("LoremIpsum");
    z.e.Nq = z.Cl;
    z.e.wq = !1;
    z.e.queryCommandValue = function(a) {
        return "usinglorem" == a && this.wq
    }
    ;
    z.e.execCommand = function(a, b) {
        if ("clearlorem" == a) {
            var c = !!b
              , d = this.F;
            if (this.wq && !d.Vg) {
                var f = d.m();
                f || (f = d.Kc);
                this.wq = !1;
                f.style.fontStyle = this.CR;
                d.Pd(!0, null , !0);
                c && d.xc() && (z.B ? (z.Ke(d.m()).body.focus(),
                d.Wf()) : z.vg && z.Dz(d))
            }
        } else
            "updatelorem" == a && (c = this.F,
            this.wq || c.Vg || z.LG == c.id || ((d = c.m()) || (d = c.Kc),
            z.Bu(d) && (this.wq = !0,
            this.CR = d.style.fontStyle,
            d.style.fontStyle = "italic",
            c.Pd(!0, this.qR, !0))))
    }
    ;
    z.e.He = function(a) {
        return "clearlorem" == a || "updatelorem" == a || "usinglorem" == a
    }
    ;
    z.v(OK, z.F);
    z.v(PK, z.F);
    z.e = PK.prototype;
    z.e.Qs = null ;
    z.e.RB = function() {
        QK(this, this.Td, this.tk)
    }
    ;
    z.e.BA = function() {
        QK(this, this.tk, this.Td)
    }
    ;
    z.e.Jg = function() {
        if (!this.Qs && 0 != this.Wt.length) {
            var a = this.Wt.shift();
            this.dispatchEvent({
                type: a.type,
                state: a.state
            }) && (a.state.pM ? (this.Qs = z.E(a.state, "action_completed", this.YN, !1, this),
            a.jF.call(a.state)) : (a.jF.call(a.state),
            this.Jg()))
        }
    }
    ;
    z.e.YN = function() {
        z.od(this.Qs);
        this.Qs = null ;
        this.Jg()
    }
    ;
    z.v(RK, z.Xy);
    RK.prototype.wo = null ;
    var jM = z.gq({
        kX: "+undo",
        ZW: "+redo"
    });
    z.e = RK.prototype;
    z.e.He = function(a) {
        return a in jM
    }
    ;
    z.e.cK = function(a) {
        this.disable(a);
        this.F = null
    }
    ;
    z.e.enable = function(a) {
        if (!this.isEnabled(a)) {
            z.Az(a);
            var b = new z.zd(this);
            z.y || b.g(a, "beforechange", this.zO);
            b.g(a, z.ez, this.IO);
            b.g(a, "blur", this.ey);
            this.pj[a.Tg] = b;
            SK(this, a)
        }
    }
    ;
    z.e.disable = function(a) {
        z.Az(a);
        var b = this.pj[a.Tg];
        b && (b.H(),
        delete this.pj[a.Tg]);
        this.Ln[a.Tg] && delete this.Ln[a.Tg]
    }
    ;
    z.e.isEnabled = function(a) {
        return !!this.pj[a.Tg]
    }
    ;
    z.e.D = function() {
        RK.v.D.call(this);
        for (var a in this.pj)
            this.pj[a].H(),
            delete this.pj[a];
        this.F = null ;
        this.If && (this.If.H(),
        delete this.If)
    }
    ;
    z.e.nd = function() {
        return "UndoRedo"
    }
    ;
    z.e.execCommand = function(a) {
        "+undo" == a ? this.If.RB() : "+redo" == a && this.If.BA()
    }
    ;
    z.e.queryCommandValue = function(a) {
        var b = null ;
        "+undo" == a ? b = 0 < this.If.Td.length : "+redo" == a && (b = 0 < this.If.tk.length);
        return b
    }
    ;
    z.e.DN = function() {
        this.F.dispatchEvent({
            type: "cvc",
            cN: ["+redo", "+undo"]
        })
    }
    ;
    z.e.jU = function(a, b, c) {
        var d = this.F;
        if (d) {
            z.zz(d, !0, !0);
            try {
                d.Zh();
                d.execCommand("clearlorem", !0);
                z.Eu(d.m(), b);
                c && c.select();
                var f = this.F;
                d.focus();
                f && f.Tg != a.Vn && f.execCommand("updatelorem");
                var g = this.Ln[a.Vn];
                g.Ki = b;
                g.$J = c
            } catch (h) {} finally {
                this.wo = a,
                d.ff(),
                z.yz(d)
            }
        }
    }
    ;
    z.e.As = function(a, b, c) {
        if (c) {
            var d;
            "z" == b ? d = a.shiftKey ? "+redo" : "+undo" : "y" == b && (d = "+redo");
            if (d)
                return "+undo" == d ? (a = this.If,
                a = a.Td[a.Td.length - 1]) : (a = this.If,
                a = a.tk[a.tk.length - 1]),
                a && a.Vn ? this.F.execCommand(d) : this.execCommand(d),
                !0
        }
        return !1
    }
    ;
    z.e.zO = function(a) {
        if (!this.wo) {
            a = a.target;
            var b = a.Tg;
            this.tG != b && (this.tG = b,
            SK(this, a))
        }
    }
    ;
    z.e.IO = function(a) {
        this.wo ? (a = this.wo,
        this.wo = null ,
        a.dispatchEvent("action_completed")) : SK(this, a.target)
    }
    ;
    z.e.ey = function(a) {
        (a = a.target) && z.Az(a)
    }
    ;
    z.v(UK, OK);
    UK.prototype.RB = function() {
        this.ZI(this, this.Ki, this.$J)
    }
    ;
    UK.prototype.BA = function() {
        this.ZI(this, this.CA, this.PT)
    }
    ;
    UK.prototype.equals = function(a) {
        return this.Vn == a.Vn && this.Ki == a.Ki && this.CA == a.CA
    }
    ;
    TK.prototype.isValid = function() {
        return this.et
    }
    ;
    TK.prototype.toString = function() {
        return z.gG ? "W3C:" + this.Fa.toString() + "\n" + this.pB + ":" + this.Da.toString() + "\n" + this.nx : "IE:" + this.Fa + "," + this.Da
    }
    ;
    TK.prototype.select = function() {
        var a = this.Be(this.ae.m());
        a && (z.fG && this.ae.m().focus(),
        z.su(a).select())
    }
    ;
    TK.prototype.Be = function(a) {
        if (z.gG) {
            var b = YJ(this.Fa, a);
            a = YJ(this.Da, a);
            return b && a ? z.bu(b, this.pB, a, this.nx).de() : null
        }
        b = a.ownerDocument.body.createTextRange();
        b.moveToElementText(a);
        b.collapse(!0);
        b.moveEnd("character", this.Da);
        b.moveStart("character", this.Fa);
        return b
    }
    ;
    z.v(WK, z.F);
    z.e = WK.prototype;
    z.e.o = function() {
        return this.fa
    }
    ;
    z.e.Tx = function() {
        return this.ae
    }
    ;
    z.e.U = function() {
        return this.Db.U()
    }
    ;
    z.e.G = function(a) {
        this.Db.G(a)
    }
    ;
    z.e.isEnabled = function() {
        return this.Db.isEnabled()
    }
    ;
    z.e.Wa = function(a) {
        this.Db.Wa(a)
    }
    ;
    z.e.blur = function() {
        this.Db.Zc(null )
    }
    ;
    z.e.D = function() {
        WK.v.D.call(this);
        this.fa && (this.fa.H(),
        delete this.fa);
        this.Db && (this.Db.H(),
        delete this.Db);
        delete this.ae;
        delete this.xA
    }
    ;
    z.e.VV = function(a) {
        if (this.Db.isEnabled() && this.dispatchEvent("change")) {
            var b;
            try {
                b = this.ae.queryCommandValue(a.cN || this.xA)
            } catch (f) {
                b = {}
            }
            a = b;
            for (var c in a)
                if (b = z.$g(this.Db, c)) {
                    var d = a[c];
                    b.Mi ? b.Mi(d) : b.Mc(!!d)
                }
        }
    }
    ;
    z.e.uO = function(a) {
        var b = a.target.ee();
        this.ae.execCommand(b, a.target.W())
    }
    ;
    z.v(YK, z.gy);
    z.Yq("goog-toolbar-separator", function() {
        return new YK
    });
    z.v(ZK, z.Xy);
    z.e = ZK.prototype;
    z.e.defaults = {
        RX: z.p
    };
    z.e.nd = z.jb("FastUpload");
    z.e.enable = function(a) {
        if (!this.isEnabled(a) && (window.URL || window.webkitURL) && window.FileReader && window.FormData && window.document.addEventListener) {
            window.$.fn.draghover = function() {
                return this.each(function() {
                    var a = (0,
                    window.$)()
                      , b = (0,
                    window.$)(this)
                      , f = !0;
                    b.on("dragenter", function(g) {
                        g = g.originalEvent;
                        0 === a.size() && f && z.x(g.dataTransfer.types, "Files") && b.trigger("draghoverstart", g);
                        a = a.add(g.target)
                    });
                    b.on("dragleave", function(g) {
                        (0,
                        window.setTimeout)(function() {
                            a = a.not(g.target);
                            0 === a.size() && f &&
                            b.trigger("draghoverend", g)
                        }, 1)
                    });
                    b.on("dragstart", function() {
                        f = !1
                    });
                    b.on("drop dragend", function() {
                        a = (0,
                        window.$)();
                        b.trigger("draghoverend");
                        f = !0
                    })
                })
            }
            ;
            this.pC = (0,
            window.$)(this.F.m());
            var b = this.LK = $K(this);
            new z.zd(this);
            a.m().addEventListener("paste", (0,
            z.q)(this.qy, this));
            window.document.addEventListener("dragover", (0,
            z.q)(this.VO, this), !1);
            b.on("dragover", (0,
            z.q)(this.UO, this));
            b.get(0).addEventListener("drop", (0,
            z.q)(this.ws, this), !1);
            (0,
            window.$)(window).draghover().on({
                draghoverstart: (0,
                z.q)(this.BF,
                this),
                draghoverend: (0,
                z.q)(this.WO, this)
            });
            b.draghover().on({
                draghoverstart: (0,
                z.q)(this.OO, this),
                draghoverend: (0,
                z.q)(this.BF, this)
            })
        }
    }
    ;
    z.e.VO = function(a) {
        z.x(a.dataTransfer.types, "Files") && (a.dataTransfer.dropEffect = "none",
        a.preventDefault())
    }
    ;
    z.e.UO = function(a) {
        a = a.originalEvent;
        a.dataTransfer.dropEffect = "copy";
        a.preventDefault();
        a.stopPropagation()
    }
    ;
    z.e.BF = function(a) {
        a.preventDefault();
        a.stopPropagation();
        bL(this, 1)
    }
    ;
    z.e.OO = function(a) {
        bL(this, 2);
        a.stopPropagation()
    }
    ;
    z.e.WO = function(a) {
        a.preventDefault();
        bL(this, 0)
    }
    ;
    z.e.qy = function(a) {
        var b = this;
        a.clipboardData && z.x(a.clipboardData.types, "Files") && 1 === a.clipboardData.items.length && z.w(a.clipboardData.items, function(c) {
            -1 < c.type.indexOf("image") && (cL(b, c.getAsFile()),
            a.preventDefault())
        })
    }
    ;
    z.e.ws = function(a) {
        var b = this;
        b.F.execCommand("clearlorem");
        var c = a.dataTransfer.files;
        a.preventDefault();
        var d = [];
        z.w(c, function(a) {
            -1 < a.type.indexOf("image") ? (cL(b, a),
            d.push(!0)) : d.push(!1)
        });
        z.uo(d, function(a) {
            return !a
        }) && z.W.message("文件类型不支持！");
        bL(b, 0)
    }
    ;
    var kM = {};
    (function() {
        function a(a, c, d) {
            function t(a) {
                z.ef(a)
            }
            function ca(b, c) {
                for (; b !== a; ) {
                    if (c(b))
                        return b;
                    b = b.parentNode
                }
                return null
            }
            function Xa(a) {
                return a.tagName && a.tagName === c
            }
            if (!a)
                throw "Missing Editable Container";
            c || (c = "blockquote");
            c = c.toUpperCase();
            var cb = z.qu();
            if (function(b) {
                return b && g(a, z.zt(b)) && g(a, z.Bt(b))
            }(cb)) {
                var Ha = h(cb), Ba = k(cb), yd = cb.Qb(), hi = ca(yd, Xa), pe = z.pb(Ba, function(a, b) {
                    1 === b.nodeType && (Xa(b) ? a.push(b) : a.push.apply(a, z.wb(b.getElementsByTagName(c))));
                    return a
                }, []), Hd;
                if (hi) {
                    if (d)
                        return n.Fv;
                    z.ef(hi)
                } else if (pe.length) {
                    if (d)
                        return n.Fv;
                    z.w(pe, t)
                } else {
                    if (d)
                        return n.HC;
                    if (d = ca(yd, function(a) {
                        return z.x(m, a.tagName.toLowerCase())
                    }))
                        Hd = window.document.createElement(c),
                        d.parentNode.insertBefore(Hd, d),
                        Hd.appendChild(d);
                    else if (cb.Y() !== cb.la())
                        Hd = window.document.createElement(c),
                        Ba[0].parentNode.insertBefore(Hd, Ba[0]),
                        z.w(Ba, function(a) {
                            Hd.appendChild(a)
                        });
                    else
                        return f(a, c)
                }
                b(a, Ha)
            } else if (d)
                return n.HC
        }
        function b(a, b) {
            if (b) {
                var c = function(b, c) {
                    return b && g(a, b) && z.Du(b) >= c
                }
                ;
                c(b.Y(), b.xa()) &&
                c(b.la(), b.La()) && b.select()
            }
        }
        function c(a) {
            return a && "BR" === a.tagName || cJ(a) || NI(a)
        }
        function d(a) {
            a = z.vf(a, function(a) {
                a = a.parentNode;
                return cJ(a) || NI(a)
            }, !0);
            var b = gJ(new z.wu(a,!0,!0), z.lq(c));
            a = gJ(new z.wu(a,!1,!1), z.lq(c));
            return z.Rd(b).reverse().concat(z.Rd(a))
        }
        function f(a, b) {
            if (t.AL)
                window.document.execCommand("formatBlock", !1, b);
            else {
                var c = z.qu()
                  , f = c.vc();
                if (z.kf(f) && z.Bu(f))
                    c = window.document.createElement(b),
                    f === a ? f.appendChild(c) : z.Wp(c, f),
                    (z.B || z.y) && c.appendChild(window.document.createElement("br")),
                    z.Gu(c);
                else if (f = c.la(),
                f = d(f),
                f.length) {
                    var c = window.document.createElement(b)
                      , g = z.lb(f)
                      , h = g.nextSibling;
                    h && h && "BR" === h.tagName && z.N(h);
                    z.cf(c, g);
                    z.$e(c, f);
                    (z.B || z.y) && c.appendChild(window.document.createElement("br"));
                    z.Hu(c.lastChild)
                }
            }
        }
        function g(a, b) {
            return 3 === a.nodeType ? a === b : a.contains(3 === b.nodeType ? b.parentNode : b)
        }
        function h(a) {
            return II(a.Y(), a.xa(), a.la(), a.La())
        }
        function k(a) {
            function b(a) {
                return !(a.previousSibling && g(a.previousSibling, h))
            }
            function c(a) {
                return f !== d && !g(a, f)
            }
            if (a.isCollapsed())
                return [];
            var d = a.vc()
              , f = a.Y()
              , h = a.la();
            a = d.childNodes;
            return z.Rd(1 === a.length ? a : gJ(hJ(a, c), b))
        }
        var m = ["ul", "ol", "dl", "table"]
          , n = {
            Fv: 1,
            HC: 0
        }
          , t = kM;
        t.AL = !z.A;
        t.toggle = a;
        t.getState = function(b, c) {
            return a(b, c, !0)
        }
        ;
        t.vL = n
    })();
    z.v(dL, z.Xy);
    z.e = dL.prototype;
    z.e.nd = z.jb("Blockquote");
    z.e.He = function(a) {
        return "+blockquote" === a
    }
    ;
    z.e.jf = function(a) {
        this.He(a) && kM.toggle(this.F.m())
    }
    ;
    z.e.queryCommandValue = function() {
        return kM.vL.Fv === kM.getState(this.F.m())
    }
    ;
    z.e.oy = function(a) {
        if (13 === a.keyCode)
            return this.ky(a)
    }
    ;
    z.e.dB = function(a, b) {
        return fL(a, b).dB
    }
    ;
    z.e.ky = function(a) {
        var b = z.xz(this.F);
        if (b.isCollapsed()) {
            var c;
            a: {
                c = b.la();
                for (var d = this.F.Ha; c !== d; ) {
                    if ("BLOCKQUOTE" === c.tagName)
                        break a;
                    c = c.parentNode
                }
                c = void 0
            }
            if (c && (b = fL(c, b),
            b.dB)) {
                a.preventDefault();
                a = window.document.createElement("div");
                z.cf(a, c);
                if (z.B || z.y)
                    c = c.nextSibling,
                    (c = eL(c) && c) || (c = window.document.createElement("br")),
                    a.appendChild(c);
                z.uu(a, 0).select();
                b.CH && z.N(b.CH)
            }
        }
    }
    ;
    z.FH["+blockquote"] = {
        kb: !0,
        V: "引用内容",
        Ca: "+blockquote",
        Pa: "tr-icon tr-blockquote",
        factory: z.vD
    };
    z.v(hL, z.Q);
    var kL = [["ABAP", "abap"], ["ABNF", "abnf"], ["ActionScript 3", "as3"], ["ActionScript", "as"], ["Ada", "ada"], ["ADL", "adl"], ["Agda", "agda"], ["Alloy", "alloy"], ["AmbientTalk", "at"], ["ANTLR", "antlr"], ["ApacheConf", "apacheconf"], ["APL", "apl"], ["AppleScript", "applescript"], ["Arduino", "arduino"], ["AspectJ", "aspectj"], ["aspx-cs", "aspx-cs"], ["aspx-vb", "aspx-vb"], ["Asymptote", "asy"], ["autohotkey", "ahk"], ["AutoIt", "autoit"], ["Awk", "awk"], ["Base Makefile", "basemake"], ["Bash Session", "console"], ["Bash", "bash"], ["Batchfile",
    "bat"], ["BBCode", "bbcode"], ["BC", "bc"], ["Befunge", "befunge"], ["BlitzBasic", "blitzbasic"], ["BlitzMax", "blitzmax"], ["BNF", "bnf"], ["Boo", "boo"], ["Boogie", "boogie"], ["Brainfuck", "brainfuck"], ["Bro", "bro"], ["BUGS", "bugs"], ["C", "c"], ["C#", "csharp"], ["C++", "cpp"], ["c-objdump", "c-objdump"], ["ca65 assembler", "ca65"], ["cADL", "cadl"], ["CAmkES", "camkes"], ["CBM BASIC V2", "cbmbas"], ["Ceylon", "ceylon"], ["CFEngine3", "cfengine3"], ["cfstatement", "cfs"], ["ChaiScript", "chai"], ["Chapel", "chapel"], ["Cheetah", "cheetah"],
    ["Cirru", "cirru"], ["Clay", "clay"], ["Clojure", "clojure"], ["ClojureScript", "clojurescript"], ["CMake", "cmake"], ["COBOL", "cobol"], ["COBOLFree", "cobolfree"], ["CoffeeScript", "coffee-script"], ["Coldfusion CFC", "cfc"], ["Coldfusion HTML", "cfm"], ["Common Lisp", "common-lisp"], ["Component Pascal", "componentpascal"], ["Coq", "coq"], ["cpp-objdump", "cpp-objdump"], ["CPSA", "cpsa"], ["Crmsh", "crmsh"], ["Croc", "croc"], ["Cryptol", "cryptol"], ["Csound Document", "csound-document"], ["Csound Orchestra", "csound"], ["Csound Score",
    "csound-score"], ["CSS", "css"], ["CUDA", "cuda"], ["Cypher", "cypher"], ["Cython", "cython"], ["D", "d"], ["d-objdump", "d-objdump"], ["Darcs Patch", "dpatch"], ["Dart", "dart"], ["Debian Control file", "control"], ["Debian Sourcelist", "sourceslist"], ["Delphi", "delphi"], ["dg", "dg"], ["Diff", "diff"], ["Django/Jinja", "django"], ["Docker", "docker"], ["DTD", "dtd"], ["Duel", "duel"], ["Dylan session", "dylan-console"], ["Dylan", "dylan"], ["DylanLID", "dylan-lid"], ["Earl Grey", "earl-grey"], ["Easytrieve", "easytrieve"], ["EBNF", "ebnf"],
    ["eC", "ec"], ["ECL", "ecl"], ["Eiffel", "eiffel"], ["Elixir iex session", "iex"], ["Elixir", "elixir"], ["Elm", "elm"], ["EmacsLisp", "emacs"], ["Embedded Ragel", "ragel-em"], ["ERB", "erb"], ["Erlang erl session", "erl"], ["Erlang", "erlang"], ["Evoque", "evoque"], ["Ezhil", "ezhil"], ["Factor", "factor"], ["Fancy", "fancy"], ["Fantom", "fan"], ["Felix", "felix"], ["Fish", "fish"], ["Fortran", "fortran"], ["FortranFixed", "fortranfixed"], ["FoxPro", "foxpro"], ["FSharp", "fsharp"], ["GAP", "gap"], ["GAS", "gas"], ["Genshi Text", "genshitext"],
    ["Genshi", "genshi"], ["Gettext Catalog", "pot"], ["Gherkin", "cucumber"], ["GLSL", "glsl"], ["Gnuplot", "gnuplot"], ["Go", "go"], ["Golo", "golo"], ["GoodData-CL", "gooddata-cl"], ["Gosu Template", "gst"], ["Gosu", "gosu"], ["Groff", "groff"], ["Groovy", "groovy"], ["Haml", "haml"], ["Handlebars", "handlebars"], ["Haskell", "haskell"], ["Haxe", "hx"], ["Hexdump", "hexdump"], ["HTML", "html"], ["HTML+Django/Jinja", "html+django"], ["HTML+Handlebars", "html+handlebars"], ["HTTP", "http"], ["Hxml", "haxeml"], ["Hy", "hylang"], ["Hybris", "hybris"],
    ["IDL", "idl"], ["Idris", "idris"], ["Igor", "igor"], ["Inform 6 template", "i6t"], ["Inform 6", "inform6"], ["Inform 7", "inform7"], ["INI", "ini"], ["Io", "io"], ["Ioke", "ioke"], ["IRC logs", "irc"], ["Isabelle", "isabelle"], ["J", "j"], ["Jade", "jade"], ["JAGS", "jags"], ["Jasmin", "jasmin"], ["Java Server Page", "jsp"], ["Java", "java"], ["JavaScript", "js"], ["JCL", "jcl"], ["JSON", "json"], ["JSON-LD", "jsonld"], ["Julia console", "jlcon"], ["Julia", "julia"], ["Kal", "kal"], ["Kconfig", "kconfig"], ["Koka", "koka"], ["Kotlin", "kotlin"], ["Lasso",
    "lasso"], ["Lean", "lean"], ["LessCss", "less"], ["Lighttpd configuration file", "lighty"], ["Limbo", "limbo"], ["liquid", "liquid"], ["Literate Agda", "lagda"], ["Literate Cryptol", "lcry"], ["Literate Haskell", "lhs"], ["Literate Idris", "lidr"], ["LiveScript", "live-script"], ["LLVM", "llvm"], ["Logos", "logos"], ["Logtalk", "logtalk"], ["LSL", "lsl"], ["Lua", "lua"], ["Makefile", "make"], ["Mako", "mako"], ["MAQL", "maql"], ["Mask", "mask"], ["Mason", "mason"], ["Mathematica", "mathematica"], ["Matlab session", "matlabsession"], ["Matlab",
    "matlab"], ["MiniD", "minid"], ["Modelica", "modelica"], ["Modula-2", "modula2"], ["MoinMoin/Trac Wiki markup", "trac-wiki"], ["Monkey", "monkey"], ["MOOCode", "moocode"], ["MoonScript", "moon"], ["mozhashpreproc", "mozhashpreproc"], ["mozpercentpreproc", "mozpercentpreproc"], ["MQL", "mql"], ["Mscgen", "mscgen"], ["MSDOS Session", "doscon"], ["MuPAD", "mupad"], ["MXML", "mxml"], ["Myghty", "myghty"], ["MySQL", "mysql"], ["NASM", "nasm"], ["Nemerle", "nemerle"], ["nesC", "nesc"], ["NewLisp", "newlisp"], ["Newspeak", "newspeak"], ["Nginx configuration file",
    "nginx"], ["Nimrod", "nimrod"], ["Nit", "nit"], ["Nix", "nixos"], ["NSIS", "nsis"], ["NumPy", "numpy"], ["objdump", "objdump"], ["objdump-nasm", "objdump-nasm"], ["Objective-C", "objective-c"], ["Objective-C++", "objective-c++"], ["Objective-J", "objective-j"], ["OCaml", "ocaml"], ["Octave", "octave"], ["ODIN", "odin"], ["Ooc", "ooc"], ["Opa", "opa"], ["OpenEdge ABL", "openedge"], ["PacmanConf", "pacmanconf"], ["Pan", "pan"], ["ParaSail", "parasail"], ["Pawn", "pawn"], ["Perl", "perl"], ["Perl6", "perl6"], ["PHP", "php"], ["Pig", "pig"], ["Pike",
    "pike"], ["PkgConfig", "pkgconfig"], ["PL/pgSQL", "plpgsql"], ["PostgreSQL console (psql)", "psql"], ["PostgreSQL SQL dialect", "postgresql"], ["PostScript", "postscript"], ["POVRay", "pov"], ["PowerShell Session", "ps1con"], ["PowerShell", "powershell"], ["Praat", "praat"], ["Prolog", "prolog"], ["Properties", "properties"], ["Protocol Buffer", "protobuf"], ["Puppet", "puppet"], ["PyPy Log", "pypylog"], ["Python 3", "python3"], ["Python 3.0 Traceback", "py3tb"], ["Python console session", "pycon"], ["Python Traceback", "pytb"], ["Python",
    "python"], ["QBasic", "qbasic"], ["QML", "qml"], ["QVTO", "qvto"], ["Racket", "racket"], ["Ragel", "ragel"], ["RConsole", "rconsole"], ["Rd", "rd"], ["REBOL", "rebol"], ["Red", "red"], ["Redcode", "redcode"], ["reg", "registry"], ["ResourceBundle", "resource"], ["reStructuredText", "rst"], ["Rexx", "rexx"], ["RHTML", "rhtml"], ["Roboconf Graph", "roboconf-graph"], ["Roboconf Instances", "roboconf-instances"], ["RobotFramework", "robotframework"], ["RPMSpec", "spec"], ["RQL", "rql"], ["RSL", "rsl"], ["Ruby irb session", "rbcon"], ["Ruby", "rb"],
    ["Rust", "rust"], ["S", "splus"], ["Sass", "sass"], ["Scala", "scala"], ["Scalate Server Page", "ssp"], ["Scaml", "scaml"], ["Scheme", "scheme"], ["Scilab", "scilab"], ["SCSS", "scss"], ["Shen", "shen"], ["Slim", "slim"], ["Smali", "smali"], ["Smalltalk", "smalltalk"], ["Smarty", "smarty"], ["Snobol", "snobol"], ["SourcePawn", "sp"], ["SPARQL", "sparql"], ["SQL", "sql"], ["sqlite3con", "sqlite3"], ["SquidConf", "squidconf"], ["Stan", "stan"], ["Standard ML", "sml"], ["SuperCollider", "sc"], ["Swift", "swift"], ["SWIG", "swig"], ["systemverilog",
    "systemverilog"], ["TADS 3", "tads3"], ["TAP", "tap"], ["Tcl", "tcl"], ["Tcsh Session", "tcshcon"], ["Tcsh", "tcsh"], ["Tea", "tea"], ["Termcap", "termcap"], ["Terminfo", "terminfo"], ["Terraform", "terraform"], ["TeX", "tex"], ["Text only", "text"], ["Thrift", "thrift"], ["Todotxt", "todotxt"], ["TrafficScript", "rts"], ["Treetop", "treetop"], ["Turtle", "turtle"], ["Twig", "twig"], ["TypeScript", "ts"], ["UrbiScript", "urbiscript"], ["Vala", "vala"], ["VB.net", "vb.net"], ["VCTreeStatus", "vctreestatus"], ["Velocity", "velocity"], ["verilog",
    "verilog"], ["VGL", "vgl"], ["vhdl", "vhdl"], ["VimL", "vim"], ["X10", "x10"], ["XML", "xml"], ["XQuery", "xquery"], ["XSLT", "xslt"], ["Xtend", "xtend"], ["XUL+mozpreproc", "xul+mozpreproc"], ["YAML", "yaml"], ["YAML+Jinja", "yaml+jinja"], ["Zephir", "zephir"]]
      , mL = z.ob(kL, iL);
    z.e = hL.prototype;
    z.e.defaults = {
        EU: "lang-select",
        sr: "collapsed",
        XQ: "lang-list",
        gT: "lang-option",
        Cg: "active",
        KD: "checked"
    };
    z.e.D = function() {
        hL.v.D.call(this);
        this.o().H();
        this.Z.H();
        z.N(this.h);
        this.ds = this.Tu = this.h = null
    }
    ;
    z.e.B = function() {
        var a = this.J;
        this.h = z.M("div", {
            innerHTML: this.template,
            className: [a.EU, a.sr].join(" ")
        })
    }
    ;
    z.e.template = '\x3cdiv class\x3d"title-button"\x3e选择语言\x3c/div\x3e\x3ci class\x3d"zg-icon zg-icon-double-arrow"\x3e\x3c/i\x3e\x3cdiv class\x3d"input-wrapper"\x3e\x3cinput class\x3d"filter-input zg-form-text-input" placeholder\x3d"搜索语言"\x3e\x3c/div\x3e';
    z.e.C = function() {
        hL.v.C.call(this);
        this.Tu = z.L("title-button", this.h);
        this.ds = z.L("filter-input", this.h);
        z.Ip(this.Tu, !0);
        nL(this, this.ds, this.h);
        this.o().g(this.h, "click", this.Il).g(this.Tu, "click", this.EP)
    }
    ;
    z.e.W = function() {
        return this.ne
    }
    ;
    z.e.Ea = function(a) {
        var b = a && z.rb(mL, function(b) {
            return b.value === a
        });
        b && (this.xk(b.label),
        this.dispatchEvent({
            type: "change",
            fT: b
        }));
        this.ne = a
    }
    ;
    z.e.Il = function(a) {
        var b = this.Z
          , c = b.M.m();
        c && window.document.activeElement !== this.ds && !c.contains(a.target) && (a.preventDefault(),
        a.stopPropagation(),
        z.os(b))
    }
    ;
    z.e.EP = function() {
        this.isCollapsed() && this.Ci(!1)
    }
    ;
    z.e.hs = function() {
        return this.Z
    }
    ;
    z.e.isCollapsed = function() {
        return z.V.has(this.h, this.J.sr)
    }
    ;
    z.e.Ci = function(a) {
        if (this.isCollapsed() !== a) {
            var b = this.ds
              , c = this.J;
            a ? z.V.add(this.h, c.sr) : (z.V.remove(this.h, c.sr),
            a = this.Z,
            c = a.M,
            a.um(mL),
            c.m().scrollTop = 0,
            c.show(),
            b.value = "",
            b.focus())
        }
    }
    ;
    z.e.xk = function(a) {
        var b = this.Tu;
        b.title = a;
        z.nf(b, a)
    }
    ;
    z.e.$z = function(a) {
        this.Ea(a.value);
        this.Z.Fc()
    }
    ;
    z.v(oL, z.Xy);
    var BL = z.B || z.vg || z.y;
    z.e = oL.prototype;
    z.e.nd = z.jb("CodePlugin");
    z.e.He = function(a) {
        return "+code" === a
    }
    ;
    z.e.jf = function(a) {
        this.He(a) && this.trigger()
    }
    ;
    z.e.queryCommandValue = function() {
        var a = "1" === wL(this).state
          , b = this.F.Sb.EnterHandler;
        b && (a ? b.disable(this.F) : b.enable(this.F));
        uL(this, a);
        return a
    }
    ;
    z.e.defaults = {
        uN: ""
    };
    z.e.PU = function(a) {
        this.Db = a;
        this.ux = ["toggleFullScreen"].concat("+code")
    }
    ;
    z.e.D = function() {
        oL.v.D.call(this);
        this.Db = null
    }
    ;
    z.e.trigger = function() {
        var a = wL(this)
          , b = a.iu
          , c = a.code;
        switch (a.state) {
        case "1":
            var d = !(0,
            z.bb)(z.Qp(c))
              , a = eJ(c);
            d ? (c.parentNode.removeChild(c),
            a && z.Hu(a, !0)) : (b = JI(b),
            d = z.Na(c.innerHTML),
            z.zu(z.eq(new z.wu(c,!1,!0), z.Au)) && (d = "\x3cbr\x3e" + d),
            a && "BR" !== a.tagName && (d += "\x3cbr\x3e"),
            a = z.Xe(d),
            c.parentNode.replaceChild(a, c),
            b.restore());
            break;
        case "2":
            c = EL,
            a = (0,
            z.bb)(b.Kd()) ? tL(b.$f()) : BL ? "\n" : "",
            c(this, b, a)
        }
    }
    ;
    z.e.En = function(a, b) {
        var c = window.document.createElement(a);
        c.id = z.Xg(z.Wg.aa());
        return b(c, function() {
            c = z.I(c.id);
            c.removeAttribute("id");
            return c
        })
    }
    ;
    z.e.Bg = function() {
        var a = this.F;
        this.an = sL(this.F.Ha);
        z.Bc(a, this.an);
        z.E(a, "delayedchange", this.eU, !1, this);
        z.E(a.Ha, "paste", this.qy, !1, this)
    }
    ;
    z.e.eU = function() {
        var a = this.an && this.an.Wx();
        a && a.U() && a.anchor && a.ha()
    }
    ;
    z.e.qy = function(a) {
        var b = wL(this)
          , c = b.iu
          , d = b.code;
        if ("1" === b.state)
            if (b = a.jc.clipboardData)
                b.types && z.x(b.types, "text/plain") && (a.preventDefault(),
                b = b.getData("text/plain"),
                xL(c, b));
            else if (window.clipboardData) {
                if (b = window.clipboardData.getData("Text"))
                    a.preventDefault(),
                    yL(this, c, b)
            } else {
                var f = c.xa();
                a = c.Kd().length;
                var g = (d.firstChild ? z.Du(d.firstChild) : 0) - f - a;
                (0,
                window.setTimeout)(function() {
                    var a = tL(d.innerHTML);
                    z.nf(d, a);
                    a = (d.firstChild ? z.Du(d.firstChild) : 0) - g;
                    d.firstChild && z.uu(d.firstChild,
                    Math.max(f, a)).select()
                })
            }
    }
    ;
    z.e.oy = function(a) {
        if (13 === a.keyCode)
            return this.ky(a);
        if (40 === a.keyCode)
            return AL(this)
    }
    ;
    z.e.ky = function(a) {
        var b = wL(this)
          , c = b.iu;
        if ("1" === b.state)
            return a.preventDefault(),
            z.A ? DL(this, c) : window.document.queryCommandSupported("insertLineBreak") ? window.document.execCommand("insertLineBreak") : (a = window.document.createTextNode("\n"),
            c.insertNode(a),
            z.Hu(a)),
            this.F.ff(),
            !0
    }
    ;
    z.FH["+code"] = {
        kb: !0,
        V: "插入代码",
        Ca: "+code",
        Pa: "tr-icon tr-code",
        factory: z.vD
    };
    z.v(GL, z.Xy);
    var lM = /^(DIV|TR|LI|BLOCKQUOTE|H\d|PRE|XMP)/;
    z.e = GL.prototype;
    z.e.nd = function() {
        return "RemoveFormatting"
    }
    ;
    z.e.He = function(a) {
        return "+removeFormat" == a
    }
    ;
    z.e.jf = function(a) {
        "+removeFormat" == a && IL(this)
    }
    ;
    z.e.As = function(a, b, c) {
        return c ? " " == b ? (this.F.execCommand("+removeFormat"),
        !0) : !1 : !1
    }
    ;
    z.e.RI = function(a) {
        var b = window.document.createElement("DIV");
        b.innerHTML = a;
        a = [];
        for (var b = [b.childNodes, 0], c = [], d = 0, f = [], g = 0, h = 0; 0 <= h; h -= 2) {
            for (var k = !1; 0 < g && h <= f[g - 1]; )
                g--,
                k = !0;
            k && HL(a);
            for (k = !1; 0 < d && h <= c[d - 1]; )
                d--,
                k = !0;
            k && HL(a);
            for (var k = b[h], m = b[h + 1]; m < k.length; ) {
                var n = k[m++]
                  , t = n.nodeName
                  , C = this.wF(n);
                if (null  != C)
                    a.push(C);
                else {
                    switch (t) {
                    case "#text":
                        n = 0 < d ? n.nodeValue : z.uq(n.nodeValue);
                        n = z.Oa(n);
                        a.push(n);
                        continue;
                    case "P":
                        HL(a);
                        HL(a);
                        break;
                    case "BR":
                        HL(a);
                        continue;
                    case "TABLE":
                        HL(a);
                        f[g++] = h;
                        break;
                    case "PRE":
                    case "XMP":
                        c[d++] = h;
                        break;
                    case "STYLE":
                    case "SCRIPT":
                    case "SELECT":
                        continue;
                    case "A":
                        if (n.href && "" != n.href) {
                            a.push("\x3ca href\x3d'");
                            a.push(n.href);
                            a.push("'\x3e");
                            a.push(this.RI(n.innerHTML));
                            a.push("\x3c/a\x3e");
                            continue
                        } else
                            break;
                    case "IMG":
                        a.push("\x3cimg src\x3d'");
                        a.push(n.src);
                        a.push("'");
                        "0" == n.border && a.push(" border\x3d'0'");
                        a.push("\x3e");
                        continue;
                    case "TD":
                        n.previousSibling && a.push(" ");
                        break;
                    case "TR":
                        n.previousSibling && HL(a);
                        break;
                    case "DIV":
                        if (C = n.parentNode,
                        C.firstChild ==
                        n && lM.test(C.tagName))
                            break;
                    default:
                        lM.test(t) && HL(a)
                    }
                    n = n.childNodes;
                    0 < n.length && (b[h++] = k,
                    b[h++] = m,
                    k = n,
                    m = 0)
                }
            }
        }
        return a.join("").replace(/\xa0|[ \t]+/g, " ")
    }
    ;
    z.e.wF = function() {
        return null
    }
    ;
    z.v(LL, GL);
    LL.prototype.wF = function(a) {
        var b;
        if ("IMG" !== a.nodeName)
            return null ;
        b = [];
        b.push('\x3cimg src\x3d"');
        b.push(z.Oa(a.src));
        b.push('"');
        a.getAttribute("eeimg") && a.getAttribute("alt") && b.push(' eeimg\x3d"' + z.Oa(a.getAttribute("eeimg")) + '" alt\x3d"' + z.Oa(a.getAttribute("alt")) + '"');
        b.push("\x3e");
        return b.join("")
    }
    ;
    z.v(ML, kJ);
    z.v(NL, z.Mc);
    z.e = ML.prototype;
    z.e.template = (0,
    z.jn)('\x3cdiv class\x3d"zm-img-uploader"\x3e\x3ciframe src\x3d"about:blank" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0; width: 0; left: -9000px; "\x3e\x3c/iframe\x3e\x3cdiv class\x3d"zg-section zm-img-uploader-tab"\x3e\x3ca href\x3d"javascript:;" class\x3d"tab-nav selected"\x3e上传图片\x3c/a\x3e 或 \x3ca href\x3d"javascript:;" class\x3d"tab-nav"\x3e引用站外图片\x3c/a\x3e\x3c/div\x3e\x3cform class\x3d"zg-clear" target\x3d"av_up_frame" method\x3d"POST" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3d uploadURL %\x3e"\x3e\x3cdiv class\x3d"tab-content selected \x3c% if (canStylize) { %\x3einline\x3c% } %\x3e"\x3e\x3c% if (canStylize) { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file" style\x3d"opacity:0;height:0;width:0;font-size:0;position:absolute;"\x3e\x3ca href\x3d"javascript:;" class\x3d"browser zg-btn-blue"\x3e选择图片\x3c/a\x3e\x3c% } else { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file"\x3e\x3c% } %\x3e\x3c/div\x3e\x3cdiv class\x3d"tab-content"\x3e\x3cinput type\x3d"text" autocomplete\x3d"off" name\x3d"upload_file_url" class\x3d"zm-editable-editor-input zg-form-text-input"\x3e\x3ca href\x3d"javascript:;" class\x3d"insert zg-btn-blue zm-uploader-button-fix"\x3e确认\x3c/a\x3e\x3c/div\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-loading"\x3e正在上传\x3c/span\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-error"\x3e上传图片失败，请稍后重试\x3c/span\x3e\x3c/form\x3e\x3cdiv class\x3d"zg-gray"\x3e请不要上传与回答问题无关的图片，详细请看 \x3ca href\x3d"/question/20064580" target\x3d"_blank"\x3e知乎图片使用规范\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"cancel" href\x3d"javascript:;"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e');
    z.e.Mw = function() {
        var a = z.Xe(this.template({
            uploadURL: this.VB,
            canStylize: this.MM
        }));
        z.Eb({
            form: "form",
            xB: ".zm-img-uploader-tab",
            eh: ".zm-img-uploader-loading",
            hf: ".zm-img-uploader-error",
            LJ: "input[type\x3dtext]",
            Wn: "input[type\x3dfile]",
            xD: ".browser",
            ww: ".cancel",
            uQ: ".insert"
        }, function(b, d) {
            this[d] = (0,
            window.$)(b, a).get(0)
        }, this);
        this.S.g(z.X, "iframe_data", this.Tv).g(this.Wn, "change", this.yT).g(this.uQ, "click", this.vQ).g(this.ww, "click", function() {
            this.lo();
            this.hide()
        }).g(this.xB, "click", function(a) {
            a =
            (0,
            window.$)(a.target);
            a.is("a") && !a.is(".selected") && OL(this, a.index())
        });
        this.YD = a;
        z.Tm || (OL(this, 1),
        (0,
        window.$)(this.xB).replaceWith("\x3cstrong\x3e输入站外图片地址：\x3c/strong\x3e"));
        this.xD && this.S.g(this.xD, "click", function() {
            this.Wn.click()
        });
        var b = new lJ(this);
        b.Na("插入图片").ka(this.YD);
        b = oJ(b);
        z.Fj(b, null );
        return b
    }
    ;
    z.e.yT = function() {
        this.Wn.value && (fJ(this.Wn.value) ? (this.LJ.value = "",
        z.P(this.eh, !0),
        z.P(this.hf, !1),
        this.form.submit()) : PL(this, "图片不是 .jpg 或 .png 格式无法上传"))
    }
    ;
    z.e.vQ = function() {
        var a = z.Ao(this.LJ.value);
        a ? z.Ka(a, "http://") ? (this.Wn.value = "",
        z.P(this.eh, !0),
        z.P(this.hf, !1),
        this.form.submit()) : PL(this, "我们目前不支持该协议。") : PL(this, "请填写图片地址。")
    }
    ;
    z.e.Tv = function(a) {
        z.P(this.eh, !1);
        this.Em(a.zf)
    }
    ;
    z.e.Em = function(a) {
        a && !a.r ? (this.dispatchEvent(this.Gn(a.msg)),
        this.hide()) : PL(this, a.msg)
    }
    ;
    z.e.Gn = function(a) {
        return new NL(a)
    }
    ;
    z.e.D = function() {
        this.S.H();
        this.S = null ;
        ML.v.D.call(this)
    }
    ;
    z.v(QL, pJ);
    z.e = QL.prototype;
    z.e.nd = z.jb("ImageDialogPlugin");
    z.e.jf = function(a, b) {
        var c = this.F;
        return c.wf || (c.Wf(),
        c.wf) ? QL.v.jf.call(this, a, b) : !1
    }
    ;
    z.e.Ej = function(a) {
        if (a && "mouseup" === a.type) {
            var b = a.target;
            b && "IMG" === b.nodeName && (a = eJ(b),
            a || (a = window.document.createElement("br"),
            z.cf(a, b)),
            z.Gu(a))
        }
    }
    ;
    z.e.jo = function(a) {
        QL.v.jo.call(this, a)
    }
    ;
    z.e.Lw = function(a) {
        a = new ML(a);
        this.S.g(a, "ok", this.po).g(a, "cancel", this.fy);
        return a
    }
    ;
    z.e.D = function() {
        QL.v.D.call(this);
        this.S.H()
    }
    ;
    z.e.po = function(a) {
        qJ(this);
        var b = GI(this), c;
        c = a.nI ? b.B("IMG", {
            "class": "origin_image zh-lightbox-thumb",
            "data-original": a.nI,
            title: "点击查看原图",
            src: a.Ul
        }) : b.B("IMG", {
            "class": "content_image",
            src: a.Ul
        });
        a.JI && c.setAttribute("data-rawwidth", a.JI);
        a.II && c.setAttribute("data-rawheight", a.II);
        a = z.xz(this.F);
        if (YI(a))
            a.mg(c),
            z.A || (z.Hu(c, !1),
            b.Va().focus()),
            z.yz(this.F),
            this.F.ff();
        else
            return null ;
        this.S.removeAll()
    }
    ;
    z.e.fy = function() {
        this.S.removeAll()
    }
    ;
    z.v(RL, kJ);
    z.v(SL, z.Mc);
    z.e = RL.prototype;
    z.e.show = function() {
        RL.v.show.call(this);
        this.dv.focus()
    }
    ;
    z.e.hide = function() {
        RL.v.hide.call(this)
    }
    ;
    z.e.Mw = function() {
        var a = z.pm.bv + "/upload_video"
          , a = this.ld.B("div", "zm-img-uploader zm-img-uploader-upload-tab-selected", [this.ld.B("div", "zg-section", this.ld.B("strong", null , "输入视频页地址：")), this.ld.B("iframe", {
            id: "video_up_frame",
            src: "about:_blank",
            name: "video_up_frame",
            style: "visible:hidden;position:absolute;height:0;width:0;left:-9000px"
        }), this.hF = this.ld.B("form", {
            "class": "zg-section-title",
            target: "video_up_frame",
            method: "post",
            enctype: "multipart/form-data",
            action: a
        }, [this.dv = this.ld.B("input", {
            type: "text",
            "class": "zg-form-text-input",
            name: "upload_file_url",
            autocomplete: "off"
        }), this.Cn = this.ld.B("a", {
            "class": "zg-btn-blue zm-uploader-button-fix",
            name: "save",
            href: "javascript:;"
        }, "确定"), this.ld.B("div", "zm-video-uploader-info", [this.eh = this.ld.B("span", {
            style: "display:none",
            "class": "zm-img-uploader-loading"
        }, "正在上传"), this.hf = this.ld.B("span", {
            style: "display:none",
            "class": "zm-img-uploader-error"
        }, "插入视频失败，请稍后重试")])]), this.fQ = this.ld.B("div", "zg-gray"), this.An = this.ld.B("div", "zm-command", [this.ww = this.ld.B("a",
        {
            href: "javascript:;"
        }, "取消")])]);
        this.fQ.innerHTML = '我们目前支持\x3ca class\x3d"zg-link-gray" target\x3d"_blank" href\x3d"http://youku.com"\x3e优酷\x3c/a\x3e、\x3ca class\x3d"zg-link-gray" target\x3d"_blank" href\x3d"http://tudou.com"\x3e土豆\x3c/a\x3e、\x3ca href\x3d"http://video.sina.com.cn/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e新浪\x3c/a\x3e、\x3ca href\x3d"http://v.qq.com/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e腾讯\x3c/a\x3e、\x3ca href\x3d"http://www.56.com/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e56\x3c/a\x3e、\x3ca href\x3d"http://tv.sohu.com/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e搜狐\x3c/a\x3e、\x3ca href\x3d"http://www.iqiyi.com/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e爱奇艺\x3c/a\x3e视频服务。\x3cbr /\x3e请不要上传与回答问题无关的视频，详细请看 \x3ca href\x3d"http://www.zhihu.com/question/20118966" target\x3d"_blank"\x3e知乎视频使用规范\x3c/a\x3e';
        this.S.g(this.ww, "click", function() {
            this.lo();
            this.hide()
        }).g(this.Cn, "click", this.vI).g(this.An, "click", this.Qa).g(this.hF, "submit", function() {
            return TL(this, this.dv.value)
        }).g(z.X, "iframe_data", this.Tv);
        this.YD = a;
        var b = new lJ(this);
        b.Na("插入视频").ka(a);
        a = oJ(b);
        z.Fj(a, null );
        return a
    }
    ;
    z.e.vI = function() {
        if (this.dv.value) {
            var a = z.Ao(this.dv.value);
            a && TL(this, a) && (z.P(this.eh, !0),
            z.P(this.hf, !1),
            this.hF.submit())
        }
    }
    ;
    z.e.Qa = function(a) {
        "save" === (a.target && a.target.name) && this.vI()
    }
    ;
    z.e.Tv = function(a) {
        z.P(this.eh, !1);
        this.Em(a.zf)
    }
    ;
    z.e.Em = function(a) {
        a && !a.r ? (this.dispatchEvent(this.Gn(a.msg[0], a.msg[1], a.msg[2], a.msg[3], a.msg[4])),
        this.hide()) : (a = a.msg,
        z.P(this.eh, !1),
        this.hf.innerHTML = a,
        z.P(this.hf, !0))
    }
    ;
    z.e.Gn = function(a, b, c, d, f) {
        return new SL(a,b,c,d,f)
    }
    ;
    z.e.D = function() {
        this.S.H();
        this.S = null ;
        RL.v.D.call(this)
    }
    ;
    z.v(UL, pJ);
    z.e = UL.prototype;
    z.e.nd = z.jb("VideoDialogPlugin");
    z.e.jf = function(a, b) {
        var c = this.F;
        return c.wf || (c.Wf(),
        c.wf) ? UL.v.jf.call(this, a, b) : !1
    }
    ;
    z.e.jo = function(a) {
        UL.v.jo.call(this, a)
    }
    ;
    z.e.Lw = function(a) {
        a = new RL(a);
        this.S.g(a, "ok", this.po).g(a, "cancel", this.fy);
        return a
    }
    ;
    z.e.D = function() {
        UL.v.D.call(this);
        this.S.H()
    }
    ;
    z.e.po = function(a) {
        qJ(this);
        var b = GI(this)
          , c = b.B("a", {
            "class": "video-link",
            href: a.eV,
            "data-src": a.dW,
            "data-name": a.qK,
            "data-poster": a.poster,
            "data-videoid": a.cW
        });
        z.nf(c, a.qK);
        a = z.Rp(c);
        a = z.Xe(a + " ");
        var c = a.firstChild
          , d = z.xz(this.F);
        if (YI(d))
            d.mg(a),
            z.A ? window.document.selection && (b = window.document.selection.createRange(),
            b.move("character", -1),
            b.select()) : (z.Hu(c),
            b.Va().focus()),
            z.yz(this.F),
            this.F.ff();
        else
            return null ;
        this.S.removeAll()
    }
    ;
    z.e.fy = function() {
        this.S.removeAll()
    }
    ;
    z.az = !0;
    (function(a) {
        z.Xy.prototype.execCommand = function(b) {
            var c = this.F;
            return z.so($L, b) && !c.wf ? (c.Wf(),
            !1) : a.apply(this, arguments)
        }
    })(z.Xy.prototype.execCommand);
    (function(a, b) {
        pJ.prototype.execCommand = function(c) {
            var d = this.F;
            return !z.x(b, c) || d.wf || (d.Wf(),
            d.wf) ? a.apply(this, arguments) : !1
        }
    })(pJ.prototype.execCommand, ["+equation"]);
    VL = "video";
    ZL = z.Vc ? "⌘" : "ctrl";
    z.FH[VL] = {
        Ca: VL,
        V: "插入视频",
        Pa: "tr-icon tr-video",
        factory: z.tD
    };
    z.FH["+equation"] = {
        Ca: "+equation",
        V: {}.UW,
        Pa: "tr-icon tr-equation",
        factory: z.tD
    };
    z.FH["+bold"].V = "粗体 (" + ZL + "+b)";
    z.FH["+italic"].V = "斜体 (" + ZL + "+i)";
    z.FH["+underline"].V = "下划线 (" + ZL + "+u)";
    z.FH["+superscript"].V = "引用内容";
    z.FH["+insertOrderedList"].V = "有序列表";
    z.FH["+insertUnorderedList"].V = "无序列表";
    z.FH["+removeFormat"].V = "清除格式";
    z.FH.image.V = "插入图片";
    z.FH[VL].V = "插入视频";
    z.FH["+equation"].V = "插入公式";
    z.la(WL);
    WL.prototype.cf = function(a, b) {
        this.config = b;
        var c, d, f;
        d = z.L("zm-editable-toolbar-container", a);
        c = z.L("zm-editable-editor-outer", a);
        f = z.L("zm-editable-editor-field-element", a);
        var g = new z.Fz(f.id);
        g.BM = 89;
        var h = XL(d, b);
        new WK(g,h);
        z.Bc(g, h);
        EI(g, new yJ);
        EI(g, new LK);
        if (b.loremIpsum_ && (EI(g, new NK(b.loremIpsum_)),
        z.y))
            g.on("load", function() {
                z.md(g.m(), "focus", function() {
                    g.execCommand("clearlorem", !0)
                })
            });
        EI(g, new ZJ);
        EI(g, new LL);
        EI(g, new RK);
        d = new oL;
        EI(g, d);
        EI(g, new QL);
        EI(g, new UL);
        EI(g, new ZK);
        EI(g, new JK);
        EI(g, new qK);
        EI(g, new dL);
        b.enableFullScreen && (c = new z.DD({
            title: "写作模式",
            Fk: c
        }),
        EI(g, c));
        g.on("load", function() {
            b.useScraper_ && YL(g, h)
        }, !1, this);
        return [g, h]
    }
    ;
    z.Fa("ZH.createRichTextEditor", function(a, b) {
        return WL.aa().cf(a, b)
    });
    z.kg("richtexteditor");
}
).call(this, __z_z__);
