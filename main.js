(() => {
  "use strict";
  var e = {
      365: (e, t, n) => {
        n.d(t, { A: () => u });
        var r = n(354),
          o = n.n(r),
          a = n(314),
          s = n.n(a),
          i = n(417),
          A = n.n(i),
          c = new URL(n(746), n.b),
          l = s()(o()),
          f = A()(c);
        l.push([
          e.id,
          `* {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n}\n\nbody {\n  color: white;\n  background-color: #000000;\n  background-image: url(${f});\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#attr-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\na {\n  font-size: 0.5vw;\n  color: white;\n  position: absolute;\n  bottom: 0;\n}\n\n.search-div {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.visible {\n  visibility: visible;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-right: 60px;\n  font-weight: 600;\n  text-align: center;\n  color: red;\n}\n\n#search-input {\n  width: 12vw;\n  height: 5vh;\n  margin: 25px;\n  margin-bottom: 7px;\n  background-color: #181717;\n  color: white;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding-left: 5px;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  width: 90vw;\n  height: 70vh;\n  gap: 120px;\n}\n\n#city {\n  font-weight: 800;\n\n  font-size: clamp(1rem, 10vw, 5rem);\n  text-transform: capitalize;\n}\n\n#weather-type {\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  font-weight: 500;\n}\n\n#giphy-sticker {\n  width: 15vw;\n  height: 20vh;\n}\n\n#temperature {\n  font-size: 100px;\n  font-size: clamp(1.2rem, 11vw, 6rem);\n}\n\nsup {\n  font-size: 35px;\n}\n\n.small-weather-card {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 40px;\n  width: 500px;\n}\n\n#more-weather-info {\n  display: flex;\n  flex-direction: column;\n\n  gap: 5px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2196f3;\n\n  transition: 0.4s;\n  border-radius: 4px;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Slider moves when checked */\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n.label {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  user-select: none;\n\n  transition: opacity 0.4s;\n}\n\n/* Label "C" (off state) */\n.label.off {\n  left: 8px;\n  opacity: 1;\n}\n\n/* Label "F" (on state) */\n.label.on {\n  right: 8px;\n  opacity: 1;\n}\n`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles.css"],
            names: [],
            mappings:
              "AAAA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,yDAAwkG;EACxkG,4BAA4B;EAC5B,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;;EAEnB,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,gBAAgB;;EAEhB,kCAAkC;EAClC,0BAA0B;AAC5B;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,yBAAyB;;EAEzB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA,8BAA8B;AAC9B;EACE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,iBAAiB;;EAEjB,wBAAwB;AAC1B;;AAEA,0BAA0B;AAC1B;EACE,SAAS;EACT,UAAU;AACZ;;AAEA,yBAAyB;AACzB;EACE,UAAU;EACV,UAAU;AACZ",
            sourcesContent: [
              "* {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n}\n\nbody {\n  color: white;\n  background-color: #000000;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%2395C1DD' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='1.8' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999'/%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999'/%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999'/%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999'/%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999'/%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999'/%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(0 0 0)' %3E%3Ccircle fill='%2395C1DD' r='10'/%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(.2) rotate(100 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23b' transform='scale(.4) rotate(200 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(45 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#attr-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\na {\n  font-size: 0.5vw;\n  color: white;\n  position: absolute;\n  bottom: 0;\n}\n\n.search-div {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.visible {\n  visibility: visible;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-right: 60px;\n  font-weight: 600;\n  text-align: center;\n  color: red;\n}\n\n#search-input {\n  width: 12vw;\n  height: 5vh;\n  margin: 25px;\n  margin-bottom: 7px;\n  background-color: #181717;\n  color: white;\n  border: 1px solid white;\n  border-radius: 5px;\n  padding-left: 5px;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  width: 90vw;\n  height: 70vh;\n  gap: 120px;\n}\n\n#city {\n  font-weight: 800;\n\n  font-size: clamp(1rem, 10vw, 5rem);\n  text-transform: capitalize;\n}\n\n#weather-type {\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  font-weight: 500;\n}\n\n#giphy-sticker {\n  width: 15vw;\n  height: 20vh;\n}\n\n#temperature {\n  font-size: 100px;\n  font-size: clamp(1.2rem, 11vw, 6rem);\n}\n\nsup {\n  font-size: 35px;\n}\n\n.small-weather-card {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 40px;\n  width: 500px;\n}\n\n#more-weather-info {\n  display: flex;\n  flex-direction: column;\n\n  gap: 5px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2196f3;\n\n  transition: 0.4s;\n  border-radius: 4px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\n/* Slider moves when checked */\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n.label {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  user-select: none;\n\n  transition: opacity 0.4s;\n}\n\n/* Label \"C\" (off state) */\n.label.off {\n  left: 8px;\n  opacity: 1;\n}\n\n/* Label \"F\" (on state) */\n.label.on {\n  right: 8px;\n  opacity: 1;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const u = l;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var A = this[i][0];
                  null != A && (s[A] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c]);
                (r && s[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      417: (e) => {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : e)
              : e
          );
        };
      },
      354: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [t].concat([a]).join("\n");
          }
          return [t].join("\n");
        };
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, s = [], i = 0; i < e.length; i++) {
            var A = e[i],
              c = r.base ? A[0] + r.base : A[0],
              l = a[c] || 0,
              f = "".concat(c, " ").concat(l);
            a[c] = l + 1;
            var u = n(f),
              C = {
                css: A[1],
                media: A[2],
                sourceMap: A[3],
                supports: A[4],
                layer: A[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(C);
            else {
              var E = o(C, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: f, updater: E, references: 1 });
            }
            s.push(f);
          }
          return s;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < a.length; s++) {
              var i = n(a[s]);
              t[i].references--;
            }
            for (var A = r(e, o), c = 0; c < a.length; c++) {
              var l = n(a[c]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = A;
          };
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      746: (e) => {
        e.exports =
          "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3Ccircle stroke=%27%2395C1DD%27 vector-effect=%27non-scaling-stroke%27 id=%27a%27 fill=%27none%27 stroke-width=%271.8%27 r=%27315%27/%3E%3Cuse id=%27f%27 href=%27%23a%27 stroke-dasharray=%27100 100 100 9999%27/%3E%3Cuse id=%27b%27 href=%27%23a%27 stroke-dasharray=%27250 250 250 250 250 9999%27/%3E%3Cuse id=%27e%27 href=%27%23a%27 stroke-dasharray=%271000 500 1000 500 9999%27/%3E%3Cuse id=%27g%27 href=%27%23a%27 stroke-dasharray=%271500 9999%27/%3E%3Cuse id=%27h%27 href=%27%23a%27 stroke-dasharray=%272000 500 500 9999%27/%3E%3Cuse id=%27j%27 href=%27%23a%27 stroke-dasharray=%27800 800 800 800 800 9999%27/%3E%3Cuse id=%27k%27 href=%27%23a%27 stroke-dasharray=%271200 1200 1200 1200 1200 9999%27/%3E%3Cuse id=%27l%27 href=%27%23a%27 stroke-dasharray=%271600 1600 1600 1600 1600 9999%27/%3E%3C/defs%3E%3Cg transform=%27translate%281000 750%29%27 %3E%3Cg transform=%27rotate%280 0 0%29%27 %3E%3Ccircle fill=%27%2395C1DD%27 r=%2710%27/%3E%3Cg transform=%27rotate%280 0 0%29%27%3E%3Cuse href=%27%23f%27 transform=%27scale%28.1%29 rotate%2850 0 0%29%27 /%3E%3Cuse href=%27%23f%27 transform=%27scale%28.2%29 rotate%28100 0 0%29%27 /%3E%3Cuse href=%27%23f%27 transform=%27scale%28.3%29 rotate%28150 0 0%29%27 /%3E%3C/g%3E%3Cg transform=%27rotate%280 0 0%29%27%3E%3Cuse href=%27%23b%27 transform=%27scale%28.4%29 rotate%28200 0 0%29%27 /%3E%3Cuse href=%27%23z%27 transform=%27scale%28.5%29 rotate%28250 0 0%29%27 /%3E%3C/g%3E%3Cg id=%27z%27 transform=%27rotate%280 0 0%29%27%3E%3Cg transform=%27rotate%280 0 0%29%27%3E%3Cuse href=%27%23b%27/%3E%3Cuse href=%27%23b%27 transform=%27scale%281.2%29 rotate%2890 0 0%29%27 /%3E%3Cuse href=%27%23b%27 transform=%27scale%281.4%29 rotate%2860 0 0%29%27 /%3E%3Cuse href=%27%23e%27 transform=%27scale%281.6%29 rotate%28120 0 0%29%27 /%3E%3Cuse href=%27%23e%27 transform=%27scale%281.8%29 rotate%2830 0 0%29%27 /%3E%3C/g%3E%3C/g%3E%3Cg id=%27y%27 transform=%27rotate%280 0 0%29%27%3E%3Cg transform=%27rotate%280 0 0%29%27%3E%3Cuse href=%27%23e%27 transform=%27scale%281.1%29 rotate%2820 0 0%29%27 /%3E%3Cuse href=%27%23g%27 transform=%27scale%281.3%29 rotate%28-40 0 0%29%27 /%3E%3Cuse href=%27%23g%27 transform=%27scale%281.5%29 rotate%2860 0 0%29%27 /%3E%3Cuse href=%27%23h%27 transform=%27scale%281.7%29 rotate%28-80 0 0%29%27 /%3E%3Cuse href=%27%23j%27 transform=%27scale%281.9%29 rotate%28100 0 0%29%27 /%3E%3C/g%3E%3C/g%3E%3Cg transform=%27rotate%280 0 0%29%27%3E%3Cg transform=%27rotate%280 0 0%29%27%3E%3Cg transform=%27rotate%280 0 0%29%27%3E%3Cuse href=%27%23h%27 transform=%27scale%282%29 rotate%2860 0 0%29%27/%3E%3Cuse href=%27%23j%27 transform=%27scale%282.1%29 rotate%28120 0 0%29%27/%3E%3Cuse href=%27%23j%27 transform=%27scale%282.3%29 rotate%28180 0 0%29%27/%3E%3Cuse href=%27%23h%27 transform=%27scale%282.4%29 rotate%28240 0 0%29%27/%3E%3Cuse href=%27%23j%27 transform=%27scale%282.5%29 rotate%28300 0 0%29%27/%3E%3C/g%3E%3Cuse href=%27%23y%27 transform=%27scale%282%29 rotate%28180 0 0%29%27 /%3E%3Cuse href=%27%23j%27 transform=%27scale%282.7%29%27/%3E%3Cuse href=%27%23j%27 transform=%27scale%282.8%29 rotate%2845 0 0%29%27/%3E%3Cuse href=%27%23j%27 transform=%27scale%282.9%29 rotate%2890 0 0%29%27/%3E%3Cuse href=%27%23k%27 transform=%27scale%283.1%29 rotate%28135 0 0%29%27/%3E%3Cuse href=%27%23k%27 transform=%27scale%283.2%29 rotate%28180 0 0%29%27/%3E%3C/g%3E%3Cuse href=%27%23k%27 transform=%27scale%283.3%29 rotate%28225 0 0%29%27/%3E%3Cuse href=%27%23k%27 transform=%27scale%283.5%29 rotate%28270 0 0%29%27/%3E%3Cuse href=%27%23k%27 transform=%27scale%283.6%29 rotate%28315 0 0%29%27/%3E%3Cuse href=%27%23k%27 transform=%27scale%283.7%29%27/%3E%3Cuse href=%27%23k%27 transform=%27scale%283.9%29 rotate%2875 0 0%29%27/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (
        !e &&
        t &&
        (t.currentScript &&
          "SCRIPT" === t.currentScript.tagName.toUpperCase() &&
          (e = t.currentScript.src),
        !e)
      ) {
        var r = t.getElementsByTagName("script");
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
            e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    n.d({}, { v: () => S, H: () => z });
  var r = n(72),
    o = n.n(r),
    a = n(825),
    s = n.n(a),
    i = n(659),
    A = n.n(i),
    c = n(56),
    l = n.n(c),
    f = n(540),
    u = n.n(f),
    C = n(113),
    E = n.n(C),
    d = n(365),
    h = {};
  (h.styleTagTransform = E()),
    (h.setAttributes = l()),
    (h.insert = A().bind(null, "head")),
    (h.domAPI = s()),
    (h.insertStyleElement = u()),
    o()(d.A, h),
    d.A && d.A.locals && d.A.locals;
  let m = document.querySelector("#weather-type"),
    p = document.querySelector("#city"),
    g = document.querySelector("#temperature"),
    B = document.querySelector("#toggle"),
    y = document.querySelector("#feels-like"),
    v = document.querySelector("#todays-high"),
    x = document.querySelector("#humidity"),
    b = document.querySelector("#giphy-sticker"),
    w = document.querySelector("#location-not-found");
  B.addEventListener("change", () => {
    console.log(p.value),
      B.checked ? S(p.textContent, "metric") : S(p.textContent, "us");
  });
  const k = n.p + "ea884a188d5387241492.jpg",
    j = document.querySelector("#search-input");
  async function S(e, t) {
    let n = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=7PAMJ4SDEAKVH7K2V8XXH6DZ8&unitGroup=${t}`;
    try {
      const e = await fetch(n, { mode: "cors" }),
        t = await e.json();
      console.log(t),
        (async function (e) {
          if (
            ((p.textContent = e.address),
            (m.textContent = e.currentConditions.conditions),
            (x.textContent = `Humidity :  ${e.currentConditions.humidity}%`),
            (b.src = await z(e.currentConditions.conditions)),
            !0 === B.checked)
          )
            (g.textContent = `${Math.round(e.currentConditions.temp)}°C`),
              (y.textContent = `Feels like : ${Math.round(e.currentConditions.feelslike)}°C`),
              (v.textContent = `Today's high : ${Math.round(e.days[0].tempmax)}°C`);
          else if (!1 === B.checked) {
            const t = Math.round(e.currentConditions.temp),
              n = Math.round(e.currentConditions.feelslike),
              r = Math.round(e.days[0].tempmax);
            (g.textContent = `${t}°F`),
              (y.textContent = `Feels like : ${n}°F`),
              (v.textContent = `Today's high : ${r}°F`);
          }
        })(t);
    } catch (e) {
      w.classList.add("visible"),
        setTimeout(() => {
          w.classList.remove("visible");
        }, 1500),
        console.log(e);
    }
  }
  async function z(e) {
    let t =
      "https://api.giphy.com/v1/stickers/search?api_key=MUzjBZUJN1WQ7PnlpYY6uH4OLET8rAJL&q=" +
      e;
    console.log(t);
    try {
      let e = await fetch(t, { mode: "cors" }),
        n = await e.json();
      return (
        console.log(n),
        n.data && n.data.length > 0
          ? n.data[0].images.fixed_height.url
          : (console.log("No stickers found. Using fallback image"), k)
      );
    } catch (e) {
      return console.log(e), k;
    }
  }
  S("Mumbai", "metric"),
    j.addEventListener("keydown", (e) => {
      if ("Enter" === e.key) {
        let e,
          t = j.value;
        (e = B.checked ? "metric" : "us"), S(t, e);
      }
    });
})();
//# sourceMappingURL=main.js.map
