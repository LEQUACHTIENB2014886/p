(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "+ZDr": function (e, r, s) {
      "use strict";
      s("2Spj"), s("0l/t"), s("8+KV"), s("pIFo");
      var i = s("TqRt");
      (r.__esModule = !0),
        (r.withPrefix = g),
        (r.withAssetPrefix = function (e) {
          return ["/react-chords"].concat([e.replace(/^\//, "")]).join("/");
        }),
        (r.navigateTo = r.replace = r.push = r.navigate = r.default = void 0);
      var t = i(s("8OQS")),
        a = i(s("pVnL")),
        f = i(s("PJYZ")),
        n = i(s("VbXa")),
        b = i(s("lSNA")),
        o = i(s("17x9")),
        u = i(s("q1tI")),
        d = s("YwZP"),
        m = s("cu4x");
      function g(e) {
        return (function (e) {
          return e.replace(/\/+/g, "/");
        })(["/react-chords", e].join("/"));
      }
      r.parsePath = m.parsePath;
      var c = {
          activeClassName: o.default.string,
          activeStyle: o.default.object,
          partiallyActive: o.default.bool,
        },
        p = (function (e) {
          function r(r) {
            var s;
            (s = e.call(this, r) || this),
              (0, b.default)(
                (0, f.default)(s),
                "defaultGetProps",
                function (e) {
                  var r = e.isPartiallyCurrent,
                    i = e.isCurrent;
                  return (s.props.partiallyActive ? r : i)
                    ? {
                        className: [s.props.className, s.props.activeClassName]
                          .filter(Boolean)
                          .join(" "),
                        style: (0, a.default)(
                          {},
                          s.props.style,
                          {},
                          s.props.activeStyle
                        ),
                      }
                    : null;
                }
              );
            var i = !1;
            return (
              "undefined" != typeof window &&
                window.IntersectionObserver &&
                (i = !0),
              (s.state = { IOSupported: i }),
              (s.handleRef = s.handleRef.bind((0, f.default)(s))),
              s
            );
          }
          (0, n.default)(r, e);
          var s = r.prototype;
          return (
            (s.componentDidUpdate = function (e, r) {
              this.props.to === e.to ||
                this.state.IOSupported ||
                ___loader.enqueue((0, m.parsePath)(this.props.to).pathname);
            }),
            (s.componentDidMount = function () {
              this.state.IOSupported ||
                ___loader.enqueue((0, m.parsePath)(this.props.to).pathname);
            }),
            (s.componentWillUnmount = function () {
              if (this.io) {
                var e = this.io,
                  r = e.instance,
                  s = e.el;
                r.unobserve(s), r.disconnect();
              }
            }),
            (s.handleRef = function (e) {
              var r,
                s,
                i,
                t = this;
              this.props.innerRef &&
              this.props.innerRef.hasOwnProperty("current")
                ? (this.props.innerRef.current = e)
                : this.props.innerRef && this.props.innerRef(e),
                this.state.IOSupported &&
                  e &&
                  (this.io =
                    ((r = e),
                    (s = function () {
                      ___loader.enqueue((0, m.parsePath)(t.props.to).pathname);
                    }),
                    (i = new window.IntersectionObserver(function (e) {
                      e.forEach(function (e) {
                        r === e.target &&
                          (e.isIntersecting || e.intersectionRatio > 0) &&
                          (i.unobserve(r), i.disconnect(), s());
                      });
                    })).observe(r),
                    { instance: i, el: r }));
            }),
            (s.render = function () {
              var e = this,
                r = this.props,
                s = r.to,
                i = r.getProps,
                f = void 0 === i ? this.defaultGetProps : i,
                n = r.onClick,
                b = r.onMouseEnter,
                o =
                  (r.activeClassName,
                  r.activeStyle,
                  r.innerRef,
                  r.partiallyActive,
                  r.state),
                c = r.replace,
                p = (0, t.default)(r, [
                  "to",
                  "getProps",
                  "onClick",
                  "onMouseEnter",
                  "activeClassName",
                  "activeStyle",
                  "innerRef",
                  "partiallyActive",
                  "state",
                  "replace",
                ]);
              var F = g(s);
              return u.default.createElement(
                d.Link,
                (0, a.default)(
                  {
                    to: F,
                    state: o,
                    getProps: f,
                    innerRef: this.handleRef,
                    onMouseEnter: function (e) {
                      b && b(e),
                        ___loader.hovering((0, m.parsePath)(s).pathname);
                    },
                    onClick: function (r) {
                      return (
                        n && n(r),
                        0 !== r.button ||
                          e.props.target ||
                          r.defaultPrevented ||
                          r.metaKey ||
                          r.altKey ||
                          r.ctrlKey ||
                          r.shiftKey ||
                          (r.preventDefault(), y(s, { state: o, replace: c })),
                        !0
                      );
                    },
                  },
                  p
                )
              );
            }),
            r
          );
        })(u.default.Component);
      p.propTypes = (0, a.default)({}, c, {
        onClick: o.default.func,
        to: o.default.string.isRequired,
        replace: o.default.bool,
      });
      var F = function (e, r, s) {
          return console.warn(
            'The "' +
              e +
              '" method is now deprecated and will be removed in Gatsby v' +
              s +
              '. Please use "' +
              r +
              '" instead.'
          );
        },
        l = u.default.forwardRef(function (e, r) {
          return u.default.createElement(p, (0, a.default)({ innerRef: r }, e));
        });
      r.default = l;
      var y = function (e, r) {
        window.___navigate(g(e), r);
      };
      r.navigate = y;
      var h = function (e) {
        F("push", "navigate", 3), window.___push(g(e));
      };
      r.push = h;
      r.replace = function (e) {
        F("replace", "navigate", 3), window.___replace(g(e));
      };
      r.navigateTo = function (e) {
        return F("navigateTo", "navigate", 3), h(e);
      };
    },
    "+i7v": function (e, r, s) {
      "use strict";
      var i = s("TqRt");
      (r.__esModule = !0),
        (r.default = function (e, r) {
          var s = (0, t.default)(e);
          if (void 0 === r)
            return s
              ? "pageXOffset" in s
                ? s.pageXOffset
                : s.document.documentElement.scrollLeft
              : e.scrollLeft;
          s
            ? s.scrollTo(
                r,
                "pageYOffset" in s
                  ? s.pageYOffset
                  : s.document.documentElement.scrollTop
              )
            : (e.scrollLeft = r);
        });
      var t = i(s("8Y+z"));
      e.exports = r.default;
    },
    "+lvF": function (e, r, s) {
      e.exports = s("VTer")("native-function-to-string", Function.toString);
    },
    "+rLv": function (e, r, s) {
      var i = s("dyZX").document;
      e.exports = i && i.documentElement;
    },
    "/SS/": function (e, r, s) {
      var i = s("XKFU");
      i(i.S, "Object", { setPrototypeOf: s("i5dc").set });
    },
    "/e88": function (e, r) {
      e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    },
    "0/R4": function (e, r) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    "0dz0": function (e) {
      e.exports = JSON.parse(
        '{"main":{"strings":4,"fretsOnChord":4,"name":"ukulele","numberOfChords":2114},"tunings":{"standard":["G4","C4","E4","A4"]},"keys":["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],"suffixes":["major","minor","dim","dim7","sus2","sus4","7sus4","alt","aug","6","69","7","7b5","aug7","9","9b5","aug9","7b9","7b9#5","7#9","11","9#11","13","13b9","13b5b9","b13b9","b13#9","maj7","maj7b5","maj7#5","maj9","maj11","maj13","m6","m7","m7b5","m9","m69","m9b5","m11","mmaj7","mmaj7b5","mmaj9","mmaj11","add9","madd9"],"chords":{"A":[{"key":"A","suffix":"major","positions":[{"frets":[2,1,0,0],"fingers":[2,1,0,0],"baseFret":1,"barres":[],"midi":[69,61,64,69]},{"frets":[1,3,4,3],"fingers":[1,2,4,3],"baseFret":2,"barres":[],"midi":[69,64,69,73]},{"frets":[3,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":4,"midi":[73,64,69,73]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,73,81]}]},{"key":"A","suffix":"minor","positions":[{"frets":[2,0,0,0],"fingers":[2,0,0,0],"baseFret":1,"barres":[],"midi":[69,60,64,69]},{"frets":[2,0,0,3],"fingers":[2,0,0,3],"baseFret":1,"barres":[],"midi":[69,60,64,72]},{"frets":[1,3,4,2],"fingers":[1,3,4,2],"baseFret":2,"barres":[],"midi":[69,64,69,72]},{"frets":[3,2,3,1],"fingers":[3,2,4,1],"baseFret":3,"barres":[],"midi":[72,64,69,72]}]},{"key":"A","suffix":"dim","positions":[{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":2,"barres":[],"midi":[69,63,69,72]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[72,63,69,72]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":6,"barres":[],"midi":[75,69,72,75]},{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":11,"barres":[],"midi":[81,72,75,81]}]},{"key":"A","suffix":"dim7","positions":[{"frets":[2,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,63,66,72]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,66,69,75]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,69,72,78]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,72,75,81]}]},{"key":"A","suffix":"sus2","positions":[{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":2,"midi":[69,64,69,71]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":4,"midi":[71,64,69,76]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[76,69,71,76]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":9,"midi":[76,71,76,81]}]},{"key":"A","suffix":"sus4","positions":[{"frets":[2,2,0,0],"fingers":[2,3,0,0],"baseFret":1,"barres":[],"midi":[69,62,64,69]},{"frets":[1,3,4,4],"fingers":[1,2,3,4],"baseFret":2,"barres":[],"midi":[69,64,69,74]},{"frets":[4,1,2,2],"fingers":[4,1,2,2],"barres":[2],"baseFret":4,"midi":[74,64,69,74]},{"frets":[4,1,2,4],"fingers":[3,1,2,4],"baseFret":4,"barres":[],"midi":[74,64,69,76]}]},{"key":"A","suffix":"7sus4","positions":[{"frets":[0,2,0,0],"fingers":[0,2,0,0],"baseFret":1,"barres":[],"midi":[67,62,64,69]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":2,"barres":[],"midi":[69,64,67,74]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[74,67,69,76]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":9,"midi":[76,69,74,79]}]},{"key":"A","suffix":"alt","positions":[{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":2,"barres":[],"midi":[69,63,69,73]},{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":3,"barres":[],"midi":[73,63,69,73]},{"frets":[1,4,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,69,73,75]}]},{"key":"A","suffix":"aug","positions":[{"frets":[2,1,1,0],"fingers":[3,1,2,0],"baseFret":1,"barres":[],"midi":[69,61,65,69]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,73]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":2,"barres":[],"midi":[69,65,69,73]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[73,65,69,77]}]},{"key":"A","suffix":"6","positions":[{"frets":[2,4,2,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,64,66,73]},{"frets":[2,2,1,3],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,66,69,76]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,73,78]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":11,"barres":[],"midi":[78,73,76,81]}]},{"key":"A","suffix":"69","positions":[{"frets":[4,4,2,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[71,64,66,73]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":6,"midi":[73,66,71,76]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,78]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,73,76,83]}]},{"key":"A","suffix":"7","positions":[{"frets":[0,1,0,0],"fingers":[0,1,0,0],"baseFret":1,"barres":[],"midi":[67,61,64,69]},{"frets":[2,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,64,67,73]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,67,69,76]},{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,73,79]}]},{"key":"A","suffix":"7b5","positions":[{"frets":[2,3,3,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,67,73]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,67,69,75]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,79]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":11,"barres":[],"midi":[79,73,75,81]}]},{"key":"A","suffix":"aug7","positions":[{"frets":[0,1,1,0],"fingers":[0,1,2,0],"baseFret":1,"barres":[],"midi":[67,61,65,69]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":2,"barres":[],"midi":[69,65,67,73]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,67,69,77]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[77,69,73,79]}]},{"key":"A","suffix":"9","positions":[{"frets":[0,1,0,2],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,71]},{"frets":[4,4,3,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[71,64,67,73]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,76]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,79]}]},{"key":"A","suffix":"9b5","positions":[{"frets":[4,3,3,4],"fingers":[2,1,1,3],"barres":[3],"capo":true,"baseFret":1,"midi":[71,63,67,73]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":6,"midi":[73,67,71,75]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":8,"barres":[],"midi":[75,71,73,79]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,73,75,83]}]},{"key":"A","suffix":"aug9","positions":[{"frets":[0,1,1,2],"fingers":[0,1,1,2],"barres":[1],"baseFret":1,"midi":[67,61,65,71]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,65,67,73]},{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":6,"midi":[73,67,71,77]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":9,"barres":[],"midi":[77,71,73,79]}]},{"key":"A","suffix":"7b9","positions":[{"frets":[0,1,0,1],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,70]},{"frets":[3,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[70,64,67,73]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,67,70,76]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,70,73,79]}]},{"key":"A","suffix":"7b9#5","positions":[{"frets":[0,1,1,1],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,70]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,73]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,77]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,70,73,79]}]},{"key":"A","suffix":"7#9","positions":[{"frets":[0,1,0,3],"fingers":[0,1,0,3],"baseFret":1,"barres":[],"midi":[67,61,64,72]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":3,"barres":[],"midi":[72,64,67,73]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,64,67,72]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":6,"barres":[],"midi":[73,67,72,76]}]},{"key":"A","suffix":"11","positions":[{"frets":[4,2,3,4],"fingers":[3,1,2,4],"baseFret":1,"barres":[],"midi":[71,62,67,73]},{"frets":[4,4,4,1],"fingers":[2,3,4,1],"baseFret":4,"barres":[],"midi":[74,67,71,73]},{"frets":[2,3,3,1],"fingers":[2,3,4,1],"baseFret":5,"barres":[],"midi":[73,67,71,74]}]},{"key":"A","suffix":"9#11","positions":[{"frets":[4,3,3,4],"fingers":[2,1,1,3],"barres":[3],"capo":true,"baseFret":1,"midi":[71,63,67,73]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":6,"midi":[73,67,71,75]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":8,"barres":[],"midi":[75,71,73,79]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,73,75,83]}]},{"key":"A","suffix":"13","positions":[{"frets":[0,1,2,2],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,66,71]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,66,67,73]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,78]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":9,"barres":[],"midi":[78,71,73,79]}]},{"key":"A","suffix":"13b9","positions":[{"frets":[0,1,2,1],"fingers":[0,1,3,2],"baseFret":1,"barres":[],"midi":[67,61,66,70]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[70,66,67,73]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,78]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[79,70,73,78]}]},{"key":"A","suffix":"13b5b9","positions":[{"frets":[1,4,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[70,66,67,75]},{"frets":[3,2,1,4],"fingers":[3,2,1,4],"baseFret":6,"barres":[],"midi":[75,67,70,78]},{"frets":[0,2,3,1],"fingers":[0,2,3,1],"baseFret":9,"barres":[],"midi":[67,70,75,78]},{"frets":[2,1,2,1],"fingers":[3,1,4,2],"baseFret":10,"barres":[],"midi":[78,70,75,79]}]},{"key":"A","suffix":"b13b9","positions":[{"frets":[0,1,1,1],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,70]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,73]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,77]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,70,73,79]}]},{"key":"A","suffix":"b13#9","positions":[{"frets":[0,1,1,3],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,72]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":3,"barres":[],"midi":[72,65,67,73]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,65,67,72]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,72,77]}]},{"key":"A","suffix":"maj7","positions":[{"frets":[1,1,0,0],"fingers":[1,2,0,0],"baseFret":1,"barres":[],"midi":[68,61,64,69]},{"frets":[2,4,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,64,68,73]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,68,69,76]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,73,80]}]},{"key":"A","suffix":"maj7b5","positions":[{"frets":[2,3,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,68,73]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,68,69,75]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,80]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[81,73,75,80]}]},{"key":"A","suffix":"maj7#5","positions":[{"frets":[1,1,1,0],"fingers":[1,2,3,0],"baseFret":1,"barres":[],"midi":[68,61,65,69]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":2,"barres":[],"midi":[69,65,68,73]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,68,69,77]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[77,69,73,80]}]},{"key":"A","suffix":"maj9","positions":[{"frets":[1,1,0,2],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,61,64,71]},{"frets":[4,4,4,4],"fingers":[1,1,1,1],"barres":[4],"capo":true,"baseFret":1,"midi":[71,64,68,73]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":6,"midi":[73,68,71,76]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,71,73,80]}]},{"key":"A","suffix":"maj11","positions":[{"frets":[4,2,4,4],"fingers":[2,1,3,4],"baseFret":1,"barres":[],"midi":[71,62,68,73]},{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":5,"barres":[],"midi":[73,68,71,74]}]},{"key":"A","suffix":"maj13","positions":[{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":1,"midi":[68,61,66,71]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,73]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,68,71,78]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[78,71,73,80]}]},{"key":"A","suffix":"m6","positions":[{"frets":[2,4,2,3],"fingers":[1,3,1,2],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,66,72]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,76]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,69,72,78]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":11,"barres":[],"midi":[78,72,76,81]}]},{"key":"A","suffix":"m7","positions":[{"frets":[0,0,0,0],"fingers":[0,0,0,0],"baseFret":1,"barres":[],"midi":[67,60,64,69]},{"frets":[2,4,3,3],"fingers":[1,3,2,2],"barres":[3],"baseFret":1,"midi":[69,64,67,72]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,67,69,76]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":8,"midi":[76,69,72,79]}]},{"key":"A","suffix":"m7b5","positions":[{"frets":[2,3,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,67,72]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,75]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[75,69,72,79]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,72,75,81]}]},{"key":"A","suffix":"m9","positions":[{"frets":[0,0,0,2],"fingers":[0,0,0,2],"baseFret":1,"barres":[],"midi":[67,60,64,71]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":2,"barres":[],"midi":[72,64,67,71]},{"frets":[4,4,3,3],"fingers":[2,2,1,1],"barres":[3,4],"capo":true,"baseFret":1,"midi":[71,64,67,72]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,67,71,76]}]},{"key":"A","suffix":"m69","positions":[{"frets":[4,4,2,3],"fingers":[3,4,1,2],"baseFret":1,"barres":[],"midi":[71,64,66,72]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,64,66,71]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,71,76]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":8,"barres":[],"midi":[76,71,72,78]}]},{"key":"A","suffix":"m9b5","positions":[{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":2,"midi":[72,63,67,71]},{"frets":[4,3,3,3],"fingers":[2,1,1,1],"barres":[3],"capo":true,"baseFret":1,"midi":[71,63,67,72]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":5,"barres":[],"midi":[72,67,71,75]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[75,71,72,79]}]},{"key":"A","suffix":"m11","positions":[{"frets":[4,2,3,3],"fingers":[3,1,2,2],"barres":[3],"baseFret":1,"midi":[71,62,67,72]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,62,67,71]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,71,74]}]},{"key":"A","suffix":"mmaj7","positions":[{"frets":[1,0,0,0],"fingers":[1,0,0,0],"baseFret":1,"barres":[],"midi":[68,60,64,69]},{"frets":[2,4,4,3],"fingers":[1,3,4,2],"baseFret":1,"barres":[],"midi":[69,64,68,72]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,68,69,76]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":8,"midi":[76,69,72,80]}]},{"key":"A","suffix":"mmaj7b5","positions":[{"frets":[2,3,4,3],"fingers":[1,2,4,3],"baseFret":1,"barres":[],"midi":[69,63,68,72]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,68,69,75]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[75,69,72,80]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":11,"barres":[],"midi":[80,72,75,81]}]},{"key":"A","suffix":"mmaj9","positions":[{"frets":[1,0,0,2],"fingers":[1,0,0,2],"baseFret":1,"barres":[],"midi":[68,60,64,71]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":2,"barres":[],"midi":[72,64,68,71]},{"frets":[4,4,4,3],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[71,64,68,72]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":5,"barres":[],"midi":[72,68,71,76]}]},{"key":"A","suffix":"mmaj11","positions":[{"frets":[4,2,4,3],"fingers":[3,1,4,2],"baseFret":1,"barres":[],"midi":[71,62,68,72]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,62,68,71]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,68,71,74]}]},{"key":"A","suffix":"add9","positions":[{"frets":[2,1,0,2],"fingers":[2,1,0,3],"baseFret":1,"barres":[],"midi":[69,61,64,71]},{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,64,69,73]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":6,"midi":[73,69,71,76]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,81]}]},{"key":"A","suffix":"madd9","positions":[{"frets":[2,0,0,2],"fingers":[2,0,0,3],"baseFret":1,"barres":[],"midi":[69,60,64,71]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":2,"barres":[],"midi":[72,64,69,71]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":3,"midi":[71,64,69,72]}]}],"Ab":[{"key":"Ab","suffix":"major","positions":[{"frets":[1,3,4,3],"fingers":[1,2,4,3],"baseFret":1,"barres":[],"midi":[68,63,68,72]},{"frets":[3,1,2,1],"fingers":[3,1,2,1],"barres":[1],"capo":true,"baseFret":3,"midi":[72,63,68,72]},{"frets":[3,1,2,4],"fingers":[3,1,2,4],"baseFret":3,"barres":[],"midi":[72,63,68,75]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[75,68,72,80]}]},{"key":"Ab","suffix":"minor","positions":[{"frets":[1,3,4,2],"fingers":[1,3,4,2],"baseFret":1,"barres":[],"midi":[68,63,68,71]},{"frets":[4,3,4,2],"fingers":[3,2,4,1],"baseFret":1,"barres":[],"midi":[71,63,68,71]},{"frets":[2,1,2,4],"fingers":[2,1,3,4],"baseFret":3,"barres":[],"midi":[71,63,68,75]},{"frets":[3,3,2,1],"fingers":[3,4,2,1],"baseFret":6,"barres":[],"midi":[75,68,71,75]}]},{"key":"Ab","suffix":"dim","positions":[{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":1,"barres":[],"midi":[68,62,68,71]},{"frets":[4,2,4,2],"fingers":[3,1,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[71,62,68,71]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":5,"barres":[],"midi":[74,68,71,74]},{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":10,"barres":[],"midi":[80,71,74,80]}]},{"key":"Ab","suffix":"dim7","positions":[{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,62,65,71]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,65,68,74]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,68,71,77]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,71,74,80]}]},{"key":"Ab","suffix":"sus2","positions":[{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,68,70]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":3,"midi":[70,63,68,75]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[75,68,70,75]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":8,"midi":[75,70,75,80]}]},{"key":"Ab","suffix":"sus4","positions":[{"frets":[1,3,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,63,68,73]},{"frets":[4,1,2,2],"fingers":[4,1,2,2],"barres":[2],"baseFret":3,"midi":[73,63,68,73]},{"frets":[4,1,2,4],"fingers":[3,1,2,4],"baseFret":3,"barres":[],"midi":[73,63,68,75]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,73,75]}]},{"key":"Ab","suffix":"7sus4","positions":[{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,63,66,73]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[73,66,68,75]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":8,"midi":[75,68,73,78]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,80]}]},{"key":"Ab","suffix":"alt","positions":[{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":2,"barres":[],"midi":[72,62,68,72]},{"frets":[1,4,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,68,72,74]}]},{"key":"Ab","suffix":"aug","positions":[{"frets":[1,0,0,3],"fingers":[1,0,0,3],"baseFret":1,"barres":[],"midi":[68,60,64,72]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":1,"barres":[],"midi":[68,64,68,72]},{"frets":[3,2,2,1],"fingers":[3,2,2,1],"barres":[2],"baseFret":3,"midi":[72,64,68,72]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[72,64,68,76]}]},{"key":"Ab","suffix":"6","positions":[{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,63,65,72]},{"frets":[2,2,1,3],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,65,68,75]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,68,72,77]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":10,"barres":[],"midi":[77,72,75,80]}]},{"key":"Ab","suffix":"69","positions":[{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,65,72]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":5,"midi":[72,65,70,75]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,77]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,72,75,82]}]},{"key":"Ab","suffix":"7","positions":[{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,63,66,72]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,66,68,75]},{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,68,72,78]},{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,72,75,80]}]},{"key":"Ab","suffix":"7b5","positions":[{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,72]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,66,68,74]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,78]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":10,"barres":[],"midi":[78,72,74,80]}]},{"key":"Ab","suffix":"aug7","positions":[{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":1,"barres":[],"midi":[68,64,66,72]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,66,68,76]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[76,68,72,78]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":11,"midi":[78,72,76,80]}]},{"key":"Ab","suffix":"9","positions":[{"frets":[3,3,2,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,66,72]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,75]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,78]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":11,"midi":[78,72,75,82]}]},{"key":"Ab","suffix":"9b5","positions":[{"frets":[3,2,2,3],"fingers":[2,1,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[70,62,66,72]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":5,"midi":[72,66,70,74]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":7,"barres":[],"midi":[74,70,72,78]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,72,74,82]}]},{"key":"Ab","suffix":"aug9","positions":[{"frets":[3,4,2,3],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[70,64,66,72]},{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":5,"midi":[72,66,70,76]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":8,"barres":[],"midi":[76,70,72,78]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":11,"barres":[],"midi":[78,72,76,82]}]},{"key":"Ab","suffix":"7b9","positions":[{"frets":[2,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,63,66,72]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,66,69,75]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,69,72,78]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,72,75,81]}]},{"key":"Ab","suffix":"7b9#5","positions":[{"frets":[2,4,2,3],"fingers":[1,3,1,2],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,66,72]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,76]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,69,72,78]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":11,"barres":[],"midi":[78,72,76,81]}]},{"key":"Ab","suffix":"7#9","positions":[{"frets":[4,3,2,3],"fingers":[4,2,1,3],"baseFret":1,"barres":[],"midi":[71,63,66,72]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,63,66,71]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":5,"barres":[],"midi":[72,66,71,75]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,71,72,78]}]},{"key":"Ab","suffix":"11","positions":[{"frets":[3,1,2,3],"fingers":[3,1,2,4],"baseFret":1,"barres":[],"midi":[70,61,66,72]},{"frets":[4,4,4,1],"fingers":[2,3,4,1],"baseFret":3,"barres":[],"midi":[73,66,70,72]},{"frets":[2,3,3,1],"fingers":[2,3,4,1],"baseFret":4,"barres":[],"midi":[72,66,70,73]}]},{"key":"Ab","suffix":"9#11","positions":[{"frets":[3,2,2,3],"fingers":[2,1,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[70,62,66,72]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":5,"midi":[72,66,70,74]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":7,"barres":[],"midi":[74,70,72,78]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,72,74,82]}]},{"key":"Ab","suffix":"13","positions":[{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":2,"barres":[],"midi":[70,65,66,72]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,77]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":8,"barres":[],"midi":[77,70,72,78]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,70,72,77]}]},{"key":"Ab","suffix":"13b9","positions":[{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":2,"midi":[69,65,66,72]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,77]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,69,72,77]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":11,"barres":[],"midi":[78,72,77,81]}]},{"key":"Ab","suffix":"13b5b9","positions":[{"frets":[1,4,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[69,65,66,74]},{"frets":[3,2,1,4],"fingers":[3,2,1,4],"baseFret":5,"barres":[],"midi":[74,66,69,77]},{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":8,"barres":[],"midi":[78,69,74,77]},{"frets":[2,1,2,1],"fingers":[3,1,4,2],"baseFret":9,"barres":[],"midi":[77,69,74,78]}]},{"key":"Ab","suffix":"b13b9","positions":[{"frets":[2,4,2,3],"fingers":[1,3,1,2],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,66,72]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,76]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,69,72,78]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":11,"barres":[],"midi":[78,72,76,81]}]},{"key":"Ab","suffix":"b13#9","positions":[{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,64,66,71]},{"frets":[4,4,2,3],"fingers":[3,4,1,2],"baseFret":1,"barres":[],"midi":[71,64,66,72]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,71,76]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":8,"barres":[],"midi":[76,71,72,78]}]},{"key":"Ab","suffix":"maj7","positions":[{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,63,67,72]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,67,68,75]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[75,68,72,79]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":10,"barres":[],"midi":[80,72,75,79]}]},{"key":"Ab","suffix":"maj7b5","positions":[{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,67,72]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,67,68,74]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,79]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[80,72,74,79]}]},{"key":"Ab","suffix":"maj7#5","positions":[{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":1,"barres":[],"midi":[68,64,67,72]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,67,68,76]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[76,68,72,79]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":10,"barres":[],"midi":[80,72,76,79]}]},{"key":"Ab","suffix":"maj9","positions":[{"frets":[3,3,3,3],"fingers":[1,1,1,1],"barres":[3],"capo":true,"baseFret":1,"midi":[70,63,67,72]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":5,"midi":[72,67,70,75]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,70,72,79]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":11,"midi":[79,72,75,82]}]},{"key":"Ab","suffix":"maj11","positions":[{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":1,"barres":[],"midi":[70,61,67,72]},{"frets":[2,4,3,1],"fingers":[2,1,3,4],"baseFret":4,"barres":[],"midi":[72,67,70,73]}]},{"key":"Ab","suffix":"maj13","positions":[{"frets":[0,0,1,1],"fingers":[0,0,1,2],"baseFret":1,"barres":[],"midi":[67,60,65,70]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,72]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,67,70,77]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[77,70,72,79]}]},{"key":"Ab","suffix":"m6","positions":[{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,65,71]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,75]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,68,71,77]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":10,"barres":[],"midi":[77,71,75,80]}]},{"key":"Ab","suffix":"m7","positions":[{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":1,"midi":[68,63,66,71]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,66,68,75]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":7,"midi":[75,68,71,78]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,71,75,80]}]},{"key":"Ab","suffix":"m7b5","positions":[{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,71]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,74]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,78]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,71,74,80]}]},{"key":"Ab","suffix":"m9","positions":[{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":1,"barres":[],"midi":[71,63,66,70]},{"frets":[3,3,2,2],"fingers":[2,2,1,1],"barres":[2,3],"capo":true,"baseFret":1,"midi":[70,63,66,71]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,66,70,75]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,70,71,78]}]},{"key":"Ab","suffix":"m69","positions":[{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":1,"barres":[],"midi":[70,63,65,71]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,63,65,70]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,70,75]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,70,71,77]}]},{"key":"Ab","suffix":"m9b5","positions":[{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":1,"midi":[71,62,66,70]},{"frets":[3,2,2,2],"fingers":[2,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[70,62,66,71]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":4,"barres":[],"midi":[71,66,70,74]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,70,71,78]}]},{"key":"Ab","suffix":"m11","positions":[{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":1,"midi":[70,61,66,71]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,61,66,70]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,70,73]}]},{"key":"Ab","suffix":"mmaj7","positions":[{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":1,"barres":[],"midi":[68,63,67,71]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,67,68,75]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":7,"midi":[75,68,71,79]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":10,"midi":[80,71,75,79]}]},{"key":"Ab","suffix":"mmaj7b5","positions":[{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":1,"barres":[],"midi":[68,62,67,71]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,67,68,74]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,79]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":10,"barres":[],"midi":[79,71,74,80]}]},{"key":"Ab","suffix":"mmaj9","positions":[{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":1,"barres":[],"midi":[71,63,67,70]},{"frets":[3,3,3,2],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[70,63,67,71]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":4,"barres":[],"midi":[71,67,70,75]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,70,71,79]}]},{"key":"Ab","suffix":"mmaj11","positions":[{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":1,"barres":[],"midi":[70,61,67,71]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,61,67,70]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,67,70,73]}]},{"key":"Ab","suffix":"add9","positions":[{"frets":[3,3,4,3],"fingers":[1,1,2,1],"barres":[3],"capo":true,"baseFret":1,"midi":[70,63,68,72]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":5,"midi":[72,68,70,75]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,80]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":11,"barres":[],"midi":[80,72,75,82]}]},{"key":"Ab","suffix":"madd9","positions":[{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":1,"barres":[],"midi":[71,63,68,70]},{"frets":[3,3,4,2],"fingers":[2,2,3,1],"barres":[3],"baseFret":1,"midi":[70,63,68,71]},{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[80,71,75,82]}]}],"B":[{"key":"B","suffix":"major","positions":[{"frets":[4,3,2,2],"fingers":[3,2,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[71,63,66,71]},{"frets":[1,3,4,3],"fingers":[1,2,4,3],"baseFret":4,"barres":[],"midi":[71,66,71,75]},{"frets":[3,1,2,1],"fingers":[3,1,2,1],"barres":[1],"capo":true,"baseFret":6,"midi":[75,66,71,75]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[78,71,75,83]}]},{"key":"B","suffix":"minor","positions":[{"frets":[4,2,2,2],"fingers":[3,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[71,62,66,71]},{"frets":[3,1,1,4],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[71,62,66,74]},{"frets":[1,3,4,2],"fingers":[1,3,4,2],"baseFret":4,"barres":[],"midi":[71,66,71,74]},{"frets":[3,2,3,1],"fingers":[3,2,4,1],"baseFret":5,"barres":[],"midi":[74,66,71,74]}]},{"key":"B","suffix":"dim","positions":[{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":1,"barres":[],"midi":[71,62,65,71]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":4,"barres":[],"midi":[71,65,71,74]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[74,65,71,74]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":8,"barres":[],"midi":[77,71,74,77]}]},{"key":"B","suffix":"dim7","positions":[{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,62,65,71]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,65,68,74]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,68,71,77]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,71,74,80]}]},{"key":"B","suffix":"sus2","positions":[{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,71,73]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,71,78]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[78,71,73,78]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":11,"midi":[78,73,78,83]}]},{"key":"B","suffix":"sus4","positions":[{"frets":[4,4,2,2],"fingers":[3,4,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[71,64,66,71]},{"frets":[1,3,4,4],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,66,71,76]},{"frets":[4,1,2,2],"fingers":[4,1,2,2],"barres":[2],"baseFret":6,"midi":[76,66,71,76]},{"frets":[4,1,2,4],"fingers":[3,1,2,4],"baseFret":6,"barres":[],"midi":[76,66,71,78]}]},{"key":"B","suffix":"7sus4","positions":[{"frets":[2,4,2,2],"fingers":[1,3,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,66,71]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,66,69,76]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[76,69,71,78]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"baseFret":11,"midi":[78,71,76,81]}]},{"key":"B","suffix":"alt","positions":[{"frets":[4,3,1,2],"fingers":[4,3,1,2],"baseFret":1,"barres":[],"midi":[71,63,65,71]},{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":4,"barres":[],"midi":[71,65,71,75]},{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":5,"barres":[],"midi":[75,65,71,75]}]},{"key":"B","suffix":"aug","positions":[{"frets":[0,3,3,2],"fingers":[0,2,3,1],"baseFret":1,"barres":[],"midi":[67,63,67,71]},{"frets":[4,3,3,2],"fingers":[3,2,2,1],"barres":[3],"baseFret":1,"midi":[71,63,67,71]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[71,63,67,75]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":4,"barres":[],"midi":[71,67,71,75]}]},{"key":"B","suffix":"6","positions":[{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":1,"barres":[],"midi":[68,63,66,71]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,66,68,75]},{"frets":[2,2,1,3],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,68,71,78]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,71,75,80]}]},{"key":"B","suffix":"69","positions":[{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,63,66,73]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[73,66,68,75]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":8,"midi":[75,68,73,78]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,80]}]},{"key":"B","suffix":"7","positions":[{"frets":[2,3,2,2],"fingers":[1,2,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,63,66,71]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,66,69,75]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,69,71,78]},{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":11,"midi":[78,71,75,81]}]},{"key":"B","suffix":"7b5","positions":[{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,63,65,71]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,75]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,69,71,77]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":10,"barres":[],"midi":[77,71,75,81]}]},{"key":"B","suffix":"aug7","positions":[{"frets":[2,3,3,2],"fingers":[1,2,2,1],"barres":[2,3],"capo":true,"baseFret":1,"midi":[69,63,67,71]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":4,"barres":[],"midi":[71,67,69,75]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,69,71,79]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":11,"midi":[79,71,75,81]}]},{"key":"B","suffix":"9","positions":[{"frets":[2,3,2,4],"fingers":[1,2,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[69,63,66,73]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,66,69,75]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,78]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,81]}]},{"key":"B","suffix":"9b5","positions":[{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,63,65,73]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[73,65,69,75]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":8,"midi":[75,69,73,77]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":10,"barres":[],"midi":[77,73,75,81]}]},{"key":"B","suffix":"aug9","positions":[{"frets":[2,3,3,4],"fingers":[1,2,2,3],"barres":[3],"baseFret":1,"midi":[69,63,67,73]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,67,69,75]},{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":8,"midi":[75,69,73,79]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":11,"barres":[],"midi":[79,73,75,81]}]},{"key":"B","suffix":"7b9","positions":[{"frets":[2,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,63,66,72]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,66,69,75]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,69,72,78]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,72,75,81]}]},{"key":"B","suffix":"7b9#5","positions":[{"frets":[2,3,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,67,72]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,75]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"baseFret":8,"midi":[75,69,72,79]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,72,75,81]}]},{"key":"B","suffix":"7#9","positions":[{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[69,63,66,74]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":5,"barres":[],"midi":[74,66,69,75]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,66,69,74]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":8,"barres":[],"midi":[75,69,74,78]}]},{"key":"B","suffix":"11","positions":[{"frets":[2,3,0,4],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[69,63,64,73]},{"frets":[3,1,2,3],"fingers":[3,1,2,4],"baseFret":4,"barres":[],"midi":[73,64,69,75]},{"frets":[4,4,4,1],"fingers":[2,3,4,1],"baseFret":6,"barres":[],"midi":[76,69,73,75]},{"frets":[2,3,3,1],"fingers":[2,3,4,1],"baseFret":7,"barres":[],"midi":[75,69,73,76]}]},{"key":"B","suffix":"9#11","positions":[{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,63,65,73]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"baseFret":5,"midi":[73,65,69,75]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":8,"midi":[75,69,73,77]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":10,"barres":[],"midi":[77,73,75,81]}]},{"key":"B","suffix":"13","positions":[{"frets":[2,3,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,68,73]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,68,69,75]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,80]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":11,"barres":[],"midi":[80,73,75,81]}]},{"key":"B","suffix":"13b9","positions":[{"frets":[2,3,4,3],"fingers":[1,2,4,3],"baseFret":1,"barres":[],"midi":[69,63,68,72]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,68,69,75]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[75,69,72,80]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[81,72,75,80]}]},{"key":"B","suffix":"13b5b9","positions":[{"frets":[1,0,1,0],"fingers":[1,0,2,0],"baseFret":1,"barres":[],"midi":[68,60,65,69]},{"frets":[1,4,3,2],"fingers":[1,4,3,2],"baseFret":2,"barres":[],"midi":[69,65,68,72]},{"frets":[1,4,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[72,68,69,77]},{"frets":[3,2,1,4],"fingers":[3,2,1,4],"baseFret":8,"barres":[],"midi":[77,69,72,80]}]},{"key":"B","suffix":"b13b9","positions":[{"frets":[2,3,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,67,72]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,75]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[75,69,72,79]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,72,75,81]}]},{"key":"B","suffix":"b13#9","positions":[{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":2,"barres":[],"midi":[69,63,67,74]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,67,69,74]},{"frets":[3,3,1,2],"fingers":[4,3,1,2],"baseFret":5,"barres":[],"midi":[74,67,69,75]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,74,79]}]},{"key":"B","suffix":"maj7","positions":[{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":1,"barres":[],"midi":[71,63,66,70]},{"frets":[3,3,2,2],"fingers":[2,3,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[70,63,66,71]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,66,70,75]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,70,71,78]}]},{"key":"B","suffix":"maj7b5","positions":[{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,63,65,70]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":1,"barres":[],"midi":[70,63,65,71]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,70,75]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,70,71,77]}]},{"key":"B","suffix":"maj7#5","positions":[{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":1,"barres":[],"midi":[71,63,67,70]},{"frets":[3,3,3,2],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[70,63,67,71]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":4,"barres":[],"midi":[71,67,70,75]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,70,71,79]}]},{"key":"B","suffix":"maj9","positions":[{"frets":[3,3,2,4],"fingers":[2,2,1,3],"barres":[3],"baseFret":1,"midi":[70,63,66,73]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,70,75]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":8,"midi":[75,70,73,78]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,73,75,82]}]},{"key":"B","suffix":"maj11","positions":[{"frets":[3,3,0,4],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[70,63,64,73]},{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":4,"barres":[],"midi":[73,64,70,75]},{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":7,"barres":[],"midi":[75,70,73,76]}]},{"key":"B","suffix":"maj13","positions":[{"frets":[3,3,4,4],"fingers":[1,1,2,2],"barres":[3,4],"capo":true,"baseFret":1,"midi":[70,63,68,73]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,75]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,70,73,80]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[80,73,75,82]}]},{"key":"B","suffix":"m6","positions":[{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,71]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,74]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,78]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,71,74,80]}]},{"key":"B","suffix":"m7","positions":[{"frets":[2,2,2,2],"fingers":[1,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,62,66,71]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":4,"midi":[71,66,69,74]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,69,71,78]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":10,"midi":[78,71,74,81]}]},{"key":"B","suffix":"m7b5","positions":[{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,62,65,71]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,74]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,77]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[77,71,74,81]}]},{"key":"B","suffix":"m9","positions":[{"frets":[2,2,2,4],"fingers":[1,1,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[69,62,66,73]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":4,"barres":[],"midi":[74,66,69,73]},{"frets":[2,2,1,1],"fingers":[2,2,1,1],"barres":[1,2],"capo":true,"baseFret":5,"midi":[73,66,69,74]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,69,73,78]}]},{"key":"B","suffix":"m69","positions":[{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,73]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":4,"barres":[],"midi":[73,66,68,74]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,66,68,73]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,73,78]}]},{"key":"B","suffix":"m9b5","positions":[{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":1,"midi":[69,62,65,73]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":4,"midi":[74,65,69,73]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[73,65,69,74]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":7,"barres":[],"midi":[74,69,73,77]}]},{"key":"B","suffix":"m11","positions":[{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":4,"midi":[73,64,69,74]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,64,69,73]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"baseFret":7,"midi":[74,69,73,76]}]},{"key":"B","suffix":"mmaj7","positions":[{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":1,"midi":[71,62,66,70]},{"frets":[3,2,2,2],"fingers":[2,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[70,62,66,71]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":4,"barres":[],"midi":[71,66,70,74]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,70,71,78]}]},{"key":"B","suffix":"mmaj7b5","positions":[{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":1,"barres":[],"midi":[70,62,65,71]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,62,65,70]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":4,"barres":[],"midi":[71,65,70,74]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,70,71,77]}]},{"key":"B","suffix":"mmaj9","positions":[{"frets":[3,2,2,4],"fingers":[2,1,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[70,62,66,73]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":4,"barres":[],"midi":[74,66,70,73]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":5,"barres":[],"midi":[73,66,70,74]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":7,"barres":[],"midi":[74,70,73,78]}]},{"key":"B","suffix":"mmaj11","positions":[{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":4,"barres":[],"midi":[73,64,70,74]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,64,70,73]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,70,73,76]}]},{"key":"B","suffix":"add9","positions":[{"frets":[4,3,2,4],"fingers":[3,2,1,4],"baseFret":1,"barres":[],"midi":[71,63,66,73]},{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"baseFret":6,"midi":[73,66,71,75]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":8,"midi":[75,71,73,78]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,83]}]},{"key":"B","suffix":"madd9","positions":[{"frets":[2,0,0,2],"fingers":[2,0,0,3],"baseFret":1,"barres":[],"midi":[69,60,64,71]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":2,"barres":[],"midi":[72,64,69,71]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":3,"midi":[71,64,69,72]}]}],"Bb":[{"key":"Bb","suffix":"major","positions":[{"frets":[3,2,1,1],"fingers":[3,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[70,62,65,70]},{"frets":[1,3,4,3],"fingers":[1,2,4,3],"baseFret":3,"barres":[],"midi":[70,65,70,74]},{"frets":[3,1,2,1],"fingers":[3,1,2,1],"barres":[1],"capo":true,"baseFret":5,"midi":[74,65,70,74]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[77,70,74,82]}]},{"key":"Bb","suffix":"minor","positions":[{"frets":[3,1,1,1],"fingers":[3,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[70,61,65,70]},{"frets":[3,1,1,4],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[70,61,65,73]},{"frets":[1,3,4,2],"fingers":[1,3,4,2],"baseFret":3,"barres":[],"midi":[70,65,70,73]},{"frets":[3,2,3,1],"fingers":[3,2,4,1],"baseFret":4,"barres":[],"midi":[73,65,70,73]}]},{"key":"Bb","suffix":"dim","positions":[{"frets":[3,1,0,1],"fingers":[3,1,0,2],"baseFret":1,"barres":[],"midi":[70,61,64,70]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":3,"barres":[],"midi":[70,64,70,73]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[73,64,70,73]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":7,"barres":[],"midi":[76,70,73,76]}]},{"key":"Bb","suffix":"dim7","positions":[{"frets":[0,1,0,1],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,70]},{"frets":[3,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[70,64,67,73]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,67,70,76]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,70,73,79]}]},{"key":"Bb","suffix":"sus2","positions":[{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"baseFret":3,"midi":[70,65,70,72]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"baseFret":5,"midi":[72,65,70,77]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"baseFret":8,"midi":[77,70,72,77]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":10,"midi":[77,72,77,82]}]},{"key":"Bb","suffix":"sus4","positions":[{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[70,63,65,70]},{"frets":[1,3,4,4],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,65,70,75]},{"frets":[4,1,2,2],"fingers":[4,1,2,2],"barres":[2],"baseFret":5,"midi":[75,65,70,75]},{"frets":[4,1,2,4],"fingers":[3,1,2,4],"baseFret":5,"barres":[],"midi":[75,65,70,77]}]},{"key":"Bb","suffix":"7sus4","positions":[{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,65,70]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":3,"barres":[],"midi":[70,65,68,75]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[75,68,70,77]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":10,"midi":[77,70,75,80]}]},{"key":"Bb","suffix":"alt","positions":[{"frets":[3,2,0,1],"fingers":[3,2,0,1],"baseFret":1,"barres":[],"midi":[70,62,64,70]},{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":3,"barres":[],"midi":[70,64,70,74]},{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":4,"barres":[],"midi":[74,64,70,74]},{"frets":[1,4,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,70,74,76]}]},{"key":"Bb","suffix":"aug","positions":[{"frets":[3,2,2,1],"fingers":[3,2,2,1],"barres":[2],"baseFret":1,"midi":[70,62,66,70]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[70,62,66,74]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":3,"barres":[],"midi":[70,66,70,74]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,78]}]},{"key":"Bb","suffix":"6","positions":[{"frets":[0,2,1,1],"fingers":[0,2,1,1],"barres":[1],"baseFret":1,"midi":[67,62,65,70]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":3,"barres":[],"midi":[70,65,67,74]},{"frets":[2,2,1,3],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,67,70,77]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,70,74,79]}]},{"key":"Bb","suffix":"69","positions":[{"frets":[0,2,1,3],"fingers":[0,2,1,3],"baseFret":1,"barres":[],"midi":[67,62,65,72]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[72,65,67,74]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":7,"midi":[74,67,72,77]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,79]}]},{"key":"Bb","suffix":"7","positions":[{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,70]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":3,"barres":[],"midi":[70,65,68,74]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,68,70,77]},{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":10,"midi":[77,70,74,80]}]},{"key":"Bb","suffix":"7b5","positions":[{"frets":[1,2,0,1],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,62,64,70]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,68,74]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,68,70,76]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,80]}]},{"key":"Bb","suffix":"aug7","positions":[{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":1,"midi":[68,62,66,70]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":3,"barres":[],"midi":[70,66,68,74]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,68,70,78]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[78,70,74,80]}]},{"key":"Bb","suffix":"9","positions":[{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,72]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,65,68,74]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,77]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,80]}]},{"key":"Bb","suffix":"9b5","positions":[{"frets":[1,2,0,3],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,62,64,72]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"baseFret":4,"midi":[72,64,68,74]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"baseFret":7,"midi":[74,68,72,76]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":9,"barres":[],"midi":[76,72,74,80]}]},{"key":"Bb","suffix":"aug9","positions":[{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":1,"midi":[68,62,66,72]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,66,68,74]},{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":7,"midi":[74,68,72,78]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":10,"barres":[],"midi":[78,72,74,80]}]},{"key":"Bb","suffix":"7b9","positions":[{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,62,65,71]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,65,68,74]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,68,71,77]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,71,74,80]}]},{"key":"Bb","suffix":"7b9#5","positions":[{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,71]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,74]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,78]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,71,74,80]}]},{"key":"Bb","suffix":"7#9","positions":[{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,73]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":4,"barres":[],"midi":[73,65,68,74]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,65,68,73]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":7,"barres":[],"midi":[74,68,73,77]}]},{"key":"Bb","suffix":"11","positions":[{"frets":[3,1,2,3],"fingers":[3,1,2,4],"baseFret":3,"barres":[],"midi":[72,63,68,74]},{"frets":[4,4,4,1],"fingers":[2,3,4,1],"baseFret":5,"barres":[],"midi":[75,68,72,74]},{"frets":[2,3,3,1],"fingers":[2,3,4,1],"baseFret":6,"barres":[],"midi":[74,68,72,75]}]},{"key":"Bb","suffix":"9#11","positions":[{"frets":[1,2,0,3],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,62,64,72]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[72,64,68,74]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":7,"midi":[74,68,72,76]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":9,"barres":[],"midi":[76,72,74,80]}]},{"key":"Bb","suffix":"13","positions":[{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,67,72]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,67,68,74]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,79]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":10,"barres":[],"midi":[79,72,74,80]}]},{"key":"Bb","suffix":"13b9","positions":[{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":1,"barres":[],"midi":[68,62,67,71]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,67,68,74]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,79]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[80,71,74,79]}]},{"key":"Bb","suffix":"13b5b9","positions":[{"frets":[1,4,3,2],"fingers":[1,4,3,2],"baseFret":1,"barres":[],"midi":[68,64,67,71]},{"frets":[1,4,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[71,67,68,76]},{"frets":[3,2,1,4],"fingers":[3,2,1,4],"baseFret":7,"barres":[],"midi":[76,68,71,79]},{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":10,"barres":[],"midi":[80,71,76,79]}]},{"key":"Bb","suffix":"b13b9","positions":[{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,71]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,74]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,78]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,71,74,80]}]},{"key":"Bb","suffix":"b13#9","positions":[{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,73]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,66,68,73]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":4,"barres":[],"midi":[73,66,68,74]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,73,78]}]},{"key":"Bb","suffix":"maj7","positions":[{"frets":[3,2,1,0],"fingers":[3,2,1,0],"baseFret":1,"barres":[],"midi":[70,62,65,69]},{"frets":[2,2,1,1],"fingers":[2,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[69,62,65,70]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,65,69,74]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,69,70,77]}]},{"key":"Bb","suffix":"maj7b5","positions":[{"frets":[3,2,0,0],"fingers":[3,2,0,0],"baseFret":1,"barres":[],"midi":[70,62,64,69]},{"frets":[2,2,0,1],"fingers":[2,3,0,1],"baseFret":1,"barres":[],"midi":[69,62,64,70]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,69,74]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,69,70,76]}]},{"key":"Bb","suffix":"maj7#5","positions":[{"frets":[3,2,2,0],"fingers":[3,1,2,0],"baseFret":1,"barres":[],"midi":[70,62,66,69]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[69,62,66,70]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":3,"barres":[],"midi":[70,66,69,74]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,69,70,78]}]},{"key":"Bb","suffix":"maj9","positions":[{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":1,"midi":[69,62,65,72]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,65,69,74]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":7,"midi":[74,69,72,77]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,72,74,81]}]},{"key":"Bb","suffix":"maj11","positions":[{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":3,"barres":[],"midi":[72,63,69,74]},{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":6,"barres":[],"midi":[74,69,72,75]}]},{"key":"Bb","suffix":"maj13","positions":[{"frets":[2,2,3,3],"fingers":[1,1,2,2],"barres":[2,3],"capo":true,"baseFret":1,"midi":[69,62,67,72]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,74]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,69,72,79]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[79,72,74,81]}]},{"key":"Bb","suffix":"m6","positions":[{"frets":[0,1,1,1],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,70]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,73]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,77]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,70,73,79]}]},{"key":"Bb","suffix":"m7","positions":[{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,65,70]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":3,"midi":[70,65,68,73]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,68,70,77]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":9,"midi":[77,70,73,80]}]},{"key":"Bb","suffix":"m7b5","positions":[{"frets":[1,1,0,1],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,61,64,70]},{"frets":[3,4,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[70,64,68,73]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,76]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[76,70,73,80]}]},{"key":"Bb","suffix":"m9","positions":[{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,65,72]},{"frets":[2,2,1,1],"fingers":[2,2,1,1],"barres":[1,2],"capo":true,"baseFret":4,"midi":[72,65,68,73]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":3,"barres":[],"midi":[73,65,68,72]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,68,72,77]}]},{"key":"Bb","suffix":"m69","positions":[{"frets":[0,1,1,3],"fingers":[0,2,1,4],"baseFret":1,"barres":[],"midi":[67,61,65,72]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":3,"barres":[],"midi":[72,65,67,73]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,65,67,72]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,72,77]}]},{"key":"Bb","suffix":"m9b5","positions":[{"frets":[1,1,0,3],"fingers":[1,2,0,4],"baseFret":1,"barres":[],"midi":[68,61,64,72]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[72,64,68,73]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":3,"midi":[73,64,68,72]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":6,"barres":[],"midi":[73,68,72,76]}]},{"key":"Bb","suffix":"m11","positions":[{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":3,"midi":[72,63,68,73]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,63,68,72]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,72,75]}]},{"key":"Bb","suffix":"mmaj7","positions":[{"frets":[3,1,1,0],"fingers":[3,1,2,0],"baseFret":1,"barres":[],"midi":[70,61,65,69]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,70]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":3,"barres":[],"midi":[70,65,69,73]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[73,69,70,77]}]},{"key":"Bb","suffix":"mmaj7b5","positions":[{"frets":[2,1,0,1],"fingers":[3,1,0,2],"baseFret":1,"barres":[],"midi":[69,61,64,70]},{"frets":[3,1,0,0],"fingers":[3,1,0,0],"baseFret":1,"barres":[],"midi":[70,61,64,69]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":3,"barres":[],"midi":[70,64,69,73]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,69,70,76]}]},{"key":"Bb","suffix":"mmaj9","positions":[{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,72]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":4,"barres":[],"midi":[72,65,69,73]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":3,"barres":[],"midi":[73,65,69,72]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":6,"barres":[],"midi":[73,69,72,77]}]},{"key":"Bb","suffix":"mmaj11","positions":[{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":3,"barres":[],"midi":[72,63,69,73]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,63,69,72]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,69,72,75]}]},{"key":"Bb","suffix":"add9","positions":[{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":1,"barres":[],"midi":[70,62,65,72]},{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,65,70,74]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":7,"midi":[74,70,72,77]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,82]}]},{"key":"Bb","suffix":"madd9","positions":[{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[70,61,65,72]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":3,"barres":[],"midi":[73,65,70,72]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":4,"midi":[72,65,70,73]}]}],"C":[{"key":"C","suffix":"major","positions":[{"frets":[0,0,0,3],"fingers":[0,0,0,3],"baseFret":1,"barres":[],"midi":[67,60,64,72]},{"frets":[0,4,3,3],"fingers":[0,2,1,1],"barres":[3],"baseFret":1,"midi":[67,64,67,72]},{"frets":[3,2,1,1],"fingers":[3,2,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[72,64,67,72]},{"frets":[1,3,4,3],"fingers":[1,2,4,3],"baseFret":5,"barres":[],"midi":[72,67,72,76]}]},{"key":"C","suffix":"minor","positions":[{"frets":[0,3,3,3],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,63,67,72]},{"frets":[3,1,1,1],"fingers":[3,1,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[72,63,67,72]},{"frets":[3,1,1,4],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[72,63,67,75]},{"frets":[1,3,4,2],"fingers":[1,3,4,2],"baseFret":5,"barres":[],"midi":[72,67,72,75]}]},{"key":"C","suffix":"dim","positions":[{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":2,"barres":[],"midi":[72,63,66,72]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":5,"barres":[],"midi":[72,66,72,75]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[75,66,72,75]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":9,"barres":[],"midi":[78,72,75,78]}]},{"key":"C","suffix":"dim7","positions":[{"frets":[2,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,63,66,72]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,66,69,75]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,69,72,78]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,72,75,81]}]},{"key":"C","suffix":"sus2","positions":[{"frets":[0,2,3,3],"fingers":[0,1,2,2],"barres":[3],"baseFret":1,"midi":[67,62,67,72]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,72,74]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,72,79]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[79,72,74,79]}]},{"key":"C","suffix":"sus4","positions":[{"frets":[0,0,1,3],"fingers":[0,0,1,3],"baseFret":1,"barres":[],"midi":[67,60,65,72]},{"frets":[3,3,1,1],"fingers":[2,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[72,65,67,72]},{"frets":[1,3,4,4],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,67,72,77]},{"frets":[4,1,2,4],"fingers":[3,1,2,4],"baseFret":7,"barres":[],"midi":[77,67,72,79]}]},{"key":"C","suffix":"7sus4","positions":[{"frets":[0,0,1,1],"fingers":[0,0,1,2],"baseFret":1,"barres":[],"midi":[67,60,65,70]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,72]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,67,70,77]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[77,70,72,79]}]},{"key":"C","suffix":"alt","positions":[{"frets":[4,3,1,2],"fingers":[4,3,1,2],"baseFret":2,"barres":[],"midi":[72,64,66,72]},{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":5,"barres":[],"midi":[72,66,72,76]},{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":6,"barres":[],"midi":[76,66,72,76]}]},{"key":"C","suffix":"aug","positions":[{"frets":[1,0,0,3],"fingers":[1,0,0,4],"baseFret":1,"barres":[],"midi":[68,60,64,72]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":1,"barres":[],"midi":[68,64,68,72]},{"frets":[3,2,2,1],"fingers":[4,2,3,1],"baseFret":3,"barres":[],"midi":[72,64,68,72]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[72,64,68,76]}]},{"key":"C","suffix":"6","positions":[{"frets":[0,0,0,0],"fingers":[0,0,0,0],"baseFret":1,"barres":[],"midi":[67,60,64,69]},{"frets":[2,4,3,3],"fingers":[1,4,2,3],"baseFret":1,"barres":[],"midi":[69,64,67,72]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,67,69,76]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":8,"midi":[76,69,72,79]}]},{"key":"C","suffix":"69","positions":[{"frets":[0,2,0,0],"fingers":[0,2,0,0],"baseFret":1,"barres":[],"midi":[67,62,64,69]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":2,"barres":[],"midi":[69,64,67,74]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[74,67,69,76]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":9,"midi":[76,69,74,79]}]},{"key":"C","suffix":"7","positions":[{"frets":[0,0,0,1],"fingers":[0,0,0,1],"baseFret":1,"barres":[],"midi":[67,60,64,70]},{"frets":[3,4,3,3],"fingers":[1,2,1,1],"barres":[3],"capo":true,"baseFret":1,"midi":[70,64,67,72]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,67,70,76]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,70,72,79]}]},{"key":"C","suffix":"7b5","positions":[{"frets":[3,4,2,3],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[70,64,66,72]},{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":5,"midi":[72,66,70,76]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":8,"barres":[],"midi":[76,70,72,78]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":11,"barres":[],"midi":[78,72,76,82]}]},{"key":"C","suffix":"aug7","positions":[{"frets":[1,0,0,1],"fingers":[1,0,0,2],"baseFret":1,"barres":[],"midi":[68,60,64,70]},{"frets":[3,4,4,3],"fingers":[1,4,3,2],"baseFret":1,"barres":[],"midi":[70,64,68,72]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":5,"barres":[],"midi":[72,68,70,76]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,70,72,80]}]},{"key":"C","suffix":"9","positions":[{"frets":[0,2,0,1],"fingers":[0,2,0,1],"baseFret":1,"barres":[],"midi":[67,62,64,70]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[70,64,67,74]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,67,70,76]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,79]}]},{"key":"C","suffix":"9b5","positions":[{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":2,"barres":[],"midi":[70,64,66,74]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,76]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":9,"midi":[76,70,74,78]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":11,"barres":[],"midi":[78,74,76,82]}]},{"key":"C","suffix":"aug9","positions":[{"frets":[1,2,0,1],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,62,64,70]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,68,74]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,68,70,76]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,80]}]},{"key":"C","suffix":"7b9","positions":[{"frets":[0,1,0,1],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,70]},{"frets":[3,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[70,64,67,73]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,67,70,76]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,70,73,79]}]},{"key":"C","suffix":"7b9#5","positions":[{"frets":[1,1,0,1],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,61,64,70]},{"frets":[3,4,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[70,64,68,73]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,76]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[76,70,73,80]}]},{"key":"C","suffix":"7#9","positions":[{"frets":[0,3,0,1],"fingers":[0,3,0,1],"baseFret":1,"barres":[],"midi":[67,63,64,70]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[70,64,67,75]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":6,"barres":[],"midi":[75,67,70,76]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,67,70,75]}]},{"key":"C","suffix":"11","positions":[{"frets":[3,1,2,3],"fingers":[3,1,2,4],"baseFret":5,"barres":[],"midi":[74,65,70,76]}]},{"key":"C","suffix":"9#11","positions":[{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":2,"barres":[],"midi":[70,64,66,74]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,76]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":9,"midi":[76,70,74,78]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":11,"barres":[],"midi":[78,74,76,82]}]},{"key":"C","suffix":"13","positions":[{"frets":[2,2,0,1],"fingers":[2,3,0,1],"baseFret":1,"barres":[],"midi":[69,62,64,70]},{"frets":[3,2,0,0],"fingers":[3,2,0,0],"baseFret":1,"barres":[],"midi":[70,62,64,69]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,69,74]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,69,70,76]}]},{"key":"C","suffix":"13b9","positions":[{"frets":[2,1,0,1],"fingers":[3,1,0,2],"baseFret":1,"barres":[],"midi":[69,61,64,70]},{"frets":[3,1,0,0],"fingers":[3,1,0,0],"baseFret":1,"barres":[],"midi":[70,61,64,69]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":3,"barres":[],"midi":[70,64,69,73]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,69,70,76]}]},{"key":"C","suffix":"13b5b9","positions":[{"frets":[2,1,2,1],"fingers":[3,1,4,2],"baseFret":1,"barres":[],"midi":[69,61,66,70]},{"frets":[3,1,2,0],"fingers":[3,1,2,0],"baseFret":1,"barres":[],"midi":[70,61,66,69]},{"frets":[1,4,3,2],"fingers":[1,4,3,2],"baseFret":3,"barres":[],"midi":[70,66,69,73]}]},{"key":"C","suffix":"b13b9","positions":[{"frets":[1,1,0,1],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,61,64,70]},{"frets":[3,4,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[70,64,68,73]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,76]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[76,70,73,80]}]},{"key":"C","suffix":"b13#9","positions":[{"frets":[1,3,0,1],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,63,64,70]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,68,75]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,68,70,75]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":6,"barres":[],"midi":[75,68,70,76]}]},{"key":"C","suffix":"maj7","positions":[{"frets":[0,0,0,2],"fingers":[0,0,0,2],"baseFret":1,"barres":[],"midi":[67,60,64,71]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":2,"barres":[],"midi":[72,64,67,71]},{"frets":[4,4,3,3],"fingers":[2,3,1,1],"barres":[3],"capo":true,"baseFret":1,"midi":[71,64,67,72]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,67,71,76]}]},{"key":"C","suffix":"maj7b5","positions":[{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,64,66,71]},{"frets":[4,4,2,3],"fingers":[3,4,1,2],"baseFret":1,"barres":[],"midi":[71,64,66,72]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,71,76]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":8,"barres":[],"midi":[76,71,72,78]}]},{"key":"C","suffix":"maj7#5","positions":[{"frets":[1,0,0,2],"fingers":[1,0,0,2],"baseFret":1,"barres":[],"midi":[68,60,64,71]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":2,"barres":[],"midi":[72,64,68,71]},{"frets":[4,4,4,3],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[71,64,68,72]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":5,"barres":[],"midi":[72,68,71,76]}]},{"key":"C","suffix":"maj9","positions":[{"frets":[0,2,0,2],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,62,64,71]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":3,"midi":[71,64,67,74]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,71,76]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":9,"midi":[76,71,74,79]}]},{"key":"C","suffix":"maj11","positions":[{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":5,"barres":[],"midi":[74,65,71,76]},{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":8,"barres":[],"midi":[76,71,74,77]}]},{"key":"C","suffix":"maj13","positions":[{"frets":[2,2,0,2],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[69,62,64,71]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":4,"midi":[71,64,69,74]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,76]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,71,74,81]}]},{"key":"C","suffix":"m6","positions":[{"frets":[2,3,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,67,72]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,75]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[75,69,72,79]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,72,75,81]}]},{"key":"C","suffix":"m7","positions":[{"frets":[3,3,3,3],"fingers":[1,1,1,1],"barres":[3],"capo":true,"baseFret":1,"midi":[70,63,67,72]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":5,"midi":[72,67,70,75]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,70,72,79]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":11,"midi":[79,72,75,82]}]},{"key":"C","suffix":"m7b5","positions":[{"frets":[3,3,2,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,66,72]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,75]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,78]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":11,"midi":[78,72,75,82]}]},{"key":"C","suffix":"m9","positions":[{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"baseFret":3,"midi":[70,63,67,74]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":5,"barres":[],"midi":[75,67,70,74]},{"frets":[2,2,1,1],"fingers":[2,2,1,1],"barres":[1,2],"capo":true,"baseFret":6,"midi":[74,67,70,75]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,70,74,79]}]},{"key":"C","suffix":"m69","positions":[{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":2,"barres":[],"midi":[69,63,67,74]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":5,"barres":[],"midi":[74,67,69,75]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,67,69,74]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,74,79]}]},{"key":"C","suffix":"m9b5","positions":[{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":2,"midi":[70,63,66,74]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":5,"midi":[75,66,70,74]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,75]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":8,"barres":[],"midi":[75,70,74,78]}]},{"key":"C","suffix":"m11","positions":[{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":5,"midi":[74,65,70,75]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,65,70,74]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,74,77]}]},{"key":"C","suffix":"mmaj7","positions":[{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":2,"midi":[72,63,67,71]},{"frets":[4,3,3,3],"fingers":[2,1,1,1],"barres":[3],"capo":true,"baseFret":1,"midi":[71,63,67,72]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":5,"barres":[],"midi":[72,67,71,75]},{"frets":[1,4,1,3],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,71,72,79]}]},{"key":"C","suffix":"mmaj7b5","positions":[{"frets":[4,3,2,3],"fingers":[4,2,1,3],"baseFret":1,"barres":[],"midi":[71,63,66,72]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,63,66,71]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":5,"barres":[],"midi":[72,66,71,75]}]},{"key":"C","suffix":"mmaj9","positions":[{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[71,63,67,74]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":5,"barres":[],"midi":[75,67,71,74]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":6,"barres":[],"midi":[74,67,71,75]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":8,"barres":[],"midi":[75,71,74,79]}]},{"key":"C","suffix":"mmaj11","positions":[{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":5,"barres":[],"midi":[74,65,71,75]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,65,71,74]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,71,74,77]}]},{"key":"C","suffix":"add9","positions":[{"frets":[0,2,0,3],"fingers":[0,2,0,3],"baseFret":1,"barres":[],"midi":[67,62,64,72]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":3,"barres":[],"midi":[72,64,67,74]},{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,72,76]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":9,"midi":[76,72,74,79]}]},{"key":"C","suffix":"madd9","positions":[{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[72,63,67,74]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":5,"barres":[],"midi":[75,67,72,74]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":6,"midi":[74,67,72,75]}]}],"D":[{"key":"D","suffix":"major","positions":[{"frets":[2,2,2,0],"fingers":[1,2,3,0],"baseFret":1,"barres":[],"midi":[69,62,66,69]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[69,62,66,74]},{"frets":[3,2,1,1],"fingers":[3,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[74,66,69,74]},{"frets":[1,3,4,3],"fingers":[1,2,4,3],"baseFret":7,"barres":[],"midi":[74,69,74,78]}]},{"key":"D","suffix":"minor","positions":[{"frets":[2,2,1,0],"fingers":[2,3,1,0],"baseFret":1,"barres":[],"midi":[69,62,65,69]},{"frets":[1,4,4,4],"fingers":[1,2,3,4],"baseFret":2,"barres":[],"midi":[69,65,69,74]},{"frets":[3,1,1,1],"fingers":[3,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[74,65,69,74]},{"frets":[3,1,1,4],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[74,65,69,77]}]},{"key":"D","suffix":"dim","positions":[{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":4,"barres":[],"midi":[74,65,68,74]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":7,"barres":[],"midi":[74,68,74,77]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[77,68,74,77]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":11,"barres":[],"midi":[80,74,77,80]}]},{"key":"D","suffix":"dim7","positions":[{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,62,65,71]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,65,68,74]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,68,71,77]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,71,74,80]}]},{"key":"D","suffix":"sus2","positions":[{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":2,"midi":[69,64,69,74]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,74,76]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,74,81]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":12,"midi":[81,74,76,81]}]},{"key":"D","suffix":"sus4","positions":[{"frets":[0,2,3,0],"fingers":[0,2,3,0],"baseFret":1,"barres":[],"midi":[67,62,67,69]},{"frets":[2,2,3,0],"fingers":[1,2,3,0],"baseFret":1,"barres":[],"midi":[69,62,67,69]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":2,"midi":[69,62,67,74]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[74,67,69,74]}]},{"key":"D","suffix":"7sus4","positions":[{"frets":[2,2,3,3],"fingers":[1,1,2,2],"barres":[2,3],"capo":true,"baseFret":1,"midi":[69,62,67,72]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,74]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,69,72,79]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[79,72,74,81]}]},{"key":"D","suffix":"alt","positions":[{"frets":[4,3,1,2],"fingers":[4,3,1,2],"baseFret":4,"barres":[],"midi":[74,66,68,74]},{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":7,"barres":[],"midi":[74,68,74,78]},{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":8,"barres":[],"midi":[78,68,74,78]}]},{"key":"D","suffix":"aug","positions":[{"frets":[3,2,2,1],"fingers":[3,2,2,1],"barres":[2],"baseFret":1,"midi":[70,62,66,70]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[70,62,66,74]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":3,"barres":[],"midi":[70,66,70,74]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,78]}]},{"key":"D","suffix":"6","positions":[{"frets":[2,2,2,2],"fingers":[1,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,62,66,71]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":4,"barres":[],"midi":[71,66,69,74]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,69,71,78]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":10,"midi":[78,71,74,81]}]},{"key":"D","suffix":"69","positions":[{"frets":[2,4,2,2],"fingers":[1,3,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,66,71]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,66,69,76]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[76,69,71,78]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":11,"midi":[78,71,76,81]}]},{"key":"D","suffix":"7","positions":[{"frets":[2,2,2,3],"fingers":[1,1,1,2],"barres":[2],"capo":true,"baseFret":1,"midi":[69,62,66,72]},{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,74]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,69,72,78]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,72,74,81]}]},{"key":"D","suffix":"7b5","positions":[{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,72]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,66,68,74]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,78]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":10,"barres":[],"midi":[78,72,74,80]}]},{"key":"D","suffix":"aug7","positions":[{"frets":[3,2,2,3],"fingers":[2,1,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[70,62,66,72]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":5,"midi":[72,66,70,74]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":7,"barres":[],"midi":[74,70,72,78]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,72,74,82]}]},{"key":"D","suffix":"9","positions":[{"frets":[2,4,2,3],"fingers":[1,3,1,2],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,66,72]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,76]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,69,72,78]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":11,"barres":[],"midi":[78,72,76,81]}]},{"key":"D","suffix":"9b5","positions":[{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":1,"barres":[],"midi":[68,64,66,72]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,66,68,76]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[76,68,72,78]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":11,"midi":[78,72,76,80]}]},{"key":"D","suffix":"aug9","positions":[{"frets":[3,4,2,3],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[70,64,66,72]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,76]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":8,"barres":[],"midi":[76,70,72,78]}]},{"key":"D","suffix":"7b9","positions":[{"frets":[2,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,63,66,72]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,66,69,75]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,69,72,78]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,72,75,81]}]},{"key":"D","suffix":"7b9#5","positions":[{"frets":[3,3,2,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,66,72]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,75]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,78]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":11,"midi":[78,72,75,82]}]},{"key":"D","suffix":"7#9","positions":[{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":2,"midi":[69,65,66,72]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,77]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":8,"barres":[],"midi":[77,69,72,78]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,69,72,77]}]},{"key":"D","suffix":"11","positions":[{"frets":[0,4,2,3],"fingers":[0,3,1,2],"baseFret":1,"barres":[],"midi":[67,64,66,72]},{"frets":[3,1,2,3],"fingers":[3,1,2,4],"baseFret":7,"barres":[],"midi":[76,67,72,78]}]},{"key":"D","suffix":"9#11","positions":[{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":1,"barres":[],"midi":[68,64,66,72]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,66,68,76]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[76,68,72,78]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":11,"midi":[78,72,76,80]}]},{"key":"D","suffix":"13","positions":[{"frets":[4,4,2,3],"fingers":[3,4,1,2],"baseFret":1,"barres":[],"midi":[71,64,66,72]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,64,66,71]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,71,76]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":8,"barres":[],"midi":[76,71,72,78]}]},{"key":"D","suffix":"13b9","positions":[{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[72,63,66,71]},{"frets":[4,3,2,3],"fingers":[4,2,1,3],"baseFret":1,"barres":[],"midi":[71,63,66,72]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":5,"barres":[],"midi":[72,66,71,75]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,71,72,78]}]},{"key":"D","suffix":"13b5b9","positions":[{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":2,"barres":[],"midi":[72,63,68,71]},{"frets":[4,3,4,3],"fingers":[3,1,4,2],"baseFret":1,"barres":[],"midi":[71,63,68,72]},{"frets":[1,4,3,2],"fingers":[1,4,3,2],"baseFret":5,"barres":[],"midi":[72,68,71,75]}]},{"key":"D","suffix":"b13b9","positions":[{"frets":[3,3,2,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,66,72]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,75]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,78]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":11,"midi":[78,72,75,82]}]},{"key":"D","suffix":"b13#9","positions":[{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":2,"barres":[],"midi":[70,65,66,72]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,77]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,70,72,77]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":8,"barres":[],"midi":[77,70,72,78]}]},{"key":"D","suffix":"maj7","positions":[{"frets":[2,2,2,4],"fingers":[1,1,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[69,62,66,73]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":4,"barres":[],"midi":[74,66,69,73]},{"frets":[2,2,1,1],"fingers":[2,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[73,66,69,74]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,69,73,78]}]},{"key":"D","suffix":"maj7b5","positions":[{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,73]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,66,68,73]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":4,"barres":[],"midi":[73,66,68,74]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,73,78]}]},{"key":"D","suffix":"maj7#5","positions":[{"frets":[3,2,2,4],"fingers":[2,1,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[70,62,66,73]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":4,"barres":[],"midi":[74,66,70,73]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":5,"barres":[],"midi":[73,66,70,74]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":7,"barres":[],"midi":[74,70,73,78]}]},{"key":"D","suffix":"maj9","positions":[{"frets":[2,4,2,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,64,66,73]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":5,"midi":[73,66,69,76]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,73,78]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":11,"midi":[78,73,76,81]}]},{"key":"D","suffix":"maj11","positions":[{"frets":[0,4,2,4],"fingers":[0,2,1,3],"baseFret":1,"barres":[],"midi":[67,64,66,73]},{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":7,"barres":[],"midi":[76,67,73,78]},{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":10,"barres":[],"midi":[78,73,76,79]}]},{"key":"D","suffix":"maj13","positions":[{"frets":[4,4,2,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[71,64,66,73]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":6,"midi":[73,66,71,76]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,78]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,73,76,83]}]},{"key":"D","suffix":"m6","positions":[{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,62,65,71]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,74]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,77]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[77,71,74,81]}]},{"key":"D","suffix":"m7","positions":[{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":1,"midi":[69,62,65,72]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,65,69,74]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":7,"midi":[74,69,72,77]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,72,74,81]}]},{"key":"D","suffix":"m7b5","positions":[{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,72]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,65,68,74]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,77]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,80]}]},{"key":"D","suffix":"m9","positions":[{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,64,65,72]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,65,69,76]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":7,"barres":[],"midi":[77,69,72,76]},{"frets":[2,2,1,1],"fingers":[2,2,1,1],"barres":[1,2],"capo":true,"baseFret":8,"midi":[76,69,72,77]}]},{"key":"D","suffix":"m69","positions":[{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,64,65,71]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,76]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":7,"barres":[],"midi":[76,69,71,77]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,69,71,76]}]},{"key":"D","suffix":"m9b5","positions":[{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,64,65,72]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":4,"midi":[72,65,68,76]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":7,"midi":[77,68,72,76]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[76,68,72,77]}]},{"key":"D","suffix":"m11","positions":[{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":7,"midi":[76,67,72,77]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,67,72,76]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,76,79]}]},{"key":"D","suffix":"mmaj7","positions":[{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":1,"midi":[69,62,65,73]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":4,"midi":[74,65,69,73]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[73,65,69,74]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":7,"barres":[],"midi":[74,69,73,77]}]},{"key":"D","suffix":"mmaj7b5","positions":[{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,73]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":4,"barres":[],"midi":[73,65,68,74]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,65,68,73]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":7,"barres":[],"midi":[74,68,73,77]}]},{"key":"D","suffix":"mmaj9","positions":[{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,64,65,73]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[73,65,69,76]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":7,"barres":[],"midi":[77,69,73,76]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":8,"barres":[],"midi":[76,69,73,77]}]},{"key":"D","suffix":"mmaj11","positions":[{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":7,"barres":[],"midi":[76,67,73,77]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,67,73,76]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,73,76,79]}]},{"key":"D","suffix":"add9","positions":[{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[69,64,66,74]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":5,"barres":[],"midi":[74,66,69,76]},{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,74,78]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":11,"midi":[78,74,76,81]}]},{"key":"D","suffix":"madd9","positions":[{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[74,65,69,76]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":7,"barres":[],"midi":[77,69,74,76]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":8,"midi":[76,69,74,77]}]}],"Db":[{"key":"Db","suffix":"major","positions":[{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,65,73]},{"frets":[3,2,1,1],"fingers":[3,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[73,65,68,73]},{"frets":[1,3,4,3],"fingers":[1,2,4,3],"baseFret":6,"barres":[],"midi":[73,68,73,77]},{"frets":[3,1,2,1],"fingers":[3,1,2,1],"barres":[1],"capo":true,"baseFret":8,"midi":[77,68,73,77]}]},{"key":"Db","suffix":"minor","positions":[{"frets":[1,4,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,64,68,73]},{"frets":[3,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[73,64,68,73]},{"frets":[3,1,1,4],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[73,64,68,76]},{"frets":[1,3,4,2],"fingers":[1,3,4,2],"baseFret":6,"barres":[],"midi":[73,68,73,76]}]},{"key":"Db","suffix":"dim","positions":[{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":3,"barres":[],"midi":[73,64,67,73]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":6,"barres":[],"midi":[73,67,73,76]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[76,67,73,76]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":10,"barres":[],"midi":[79,73,76,79]}]},{"key":"Db","suffix":"dim7","positions":[{"frets":[0,1,0,1],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,70]},{"frets":[3,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[70,64,67,73]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,67,70,76]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,70,73,79]}]},{"key":"Db","suffix":"sus2","positions":[{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":1,"midi":[68,63,68,73]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,73,75]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":8,"midi":[75,68,73,80]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[80,73,75,80]}]},{"key":"Db","suffix":"sus4","positions":[{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,66,73]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[73,66,68,73]},{"frets":[1,3,4,4],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,68,73,78]},{"frets":[4,1,2,4],"fingers":[3,1,2,4],"baseFret":8,"barres":[],"midi":[78,68,73,80]}]},{"key":"Db","suffix":"7sus4","positions":[{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":1,"midi":[68,61,66,71]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,73]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,68,71,78]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[78,71,73,80]}]},{"key":"Db","suffix":"alt","positions":[{"frets":[0,1,1,4],"fingers":[0,1,1,4],"barres":[1],"baseFret":1,"midi":[67,61,65,73]},{"frets":[4,3,1,2],"fingers":[4,3,1,2],"baseFret":3,"barres":[],"midi":[73,65,67,73]},{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":6,"barres":[],"midi":[73,67,73,77]},{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":7,"barres":[],"midi":[77,67,73,77]}]},{"key":"Db","suffix":"aug","positions":[{"frets":[2,1,1,0],"fingers":[3,1,2,0],"baseFret":1,"barres":[],"midi":[69,61,65,69]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,73]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":2,"barres":[],"midi":[69,65,69,73]},{"frets":[3,2,2,1],"fingers":[4,2,3,1],"baseFret":4,"barres":[],"midi":[73,65,69,73]}]},{"key":"Db","suffix":"6","positions":[{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,65,70]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":3,"barres":[],"midi":[70,65,68,73]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,68,70,77]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":9,"midi":[77,70,73,80]}]},{"key":"Db","suffix":"69","positions":[{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,65,70]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":3,"barres":[],"midi":[70,65,68,75]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[75,68,70,77]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":10,"midi":[77,70,75,80]}]},{"key":"Db","suffix":"7","positions":[{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,65,71]},{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,73]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,68,71,77]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,71,73,80]}]},{"key":"Db","suffix":"7b5","positions":[{"frets":[0,1,1,2],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,71]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,65,67,73]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,77]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":9,"barres":[],"midi":[77,71,73,79]}]},{"key":"Db","suffix":"aug7","positions":[{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,71]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":4,"midi":[71,65,69,73]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":6,"barres":[],"midi":[73,69,71,77]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,71,73,81]}]},{"key":"Db","suffix":"9","positions":[{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,65,71]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,75]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,68,71,77]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":10,"barres":[],"midi":[77,71,75,80]}]},{"key":"Db","suffix":"9b5","positions":[{"frets":[0,3,1,2],"fingers":[0,3,1,2],"baseFret":1,"barres":[],"midi":[67,63,65,71]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[71,65,67,75]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[75,67,71,77]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":10,"midi":[77,71,75,79]}]},{"key":"Db","suffix":"aug9","positions":[{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,63,65,71]},{"frets":[4,3,1,0],"fingers":[3,2,1,0],"baseFret":1,"barres":[],"midi":[71,63,65,69]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,75]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,69,71,77]}]},{"key":"Db","suffix":"7b9","positions":[{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,62,65,71]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,65,68,74]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,68,71,77]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,71,74,80]}]},{"key":"Db","suffix":"7b9#5","positions":[{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,62,65,71]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,74]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,77]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[77,71,74,81]}]},{"key":"Db","suffix":"7#9","positions":[{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,64,65,71]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,76]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":7,"barres":[],"midi":[76,68,71,77]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,68,71,76]}]},{"key":"Db","suffix":"11","positions":[{"frets":[3,1,2,3],"fingers":[3,1,2,4],"baseFret":6,"barres":[],"midi":[75,66,71,77]}]},{"key":"Db","suffix":"9#11","positions":[{"frets":[0,3,1,2],"fingers":[0,3,1,2],"baseFret":1,"barres":[],"midi":[67,63,65,71]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[71,65,67,75]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[75,67,71,77]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":10,"midi":[77,71,75,79]}]},{"key":"Db","suffix":"13","positions":[{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":1,"barres":[],"midi":[70,63,65,71]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,63,65,70]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,70,75]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,70,71,77]}]},{"key":"Db","suffix":"13b9","positions":[{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,62,65,70]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":1,"barres":[],"midi":[70,62,65,71]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":4,"barres":[],"midi":[71,65,70,74]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,70,71,77]}]},{"key":"Db","suffix":"13b5b9","positions":[{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":1,"barres":[],"midi":[71,62,67,70]},{"frets":[3,2,3,2],"fingers":[3,1,4,2],"baseFret":1,"barres":[],"midi":[70,62,67,71]},{"frets":[1,4,3,2],"fingers":[1,4,3,2],"baseFret":4,"barres":[],"midi":[71,67,70,74]}]},{"key":"Db","suffix":"b13b9","positions":[{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,62,65,71]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,74]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,77]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[77,71,74,81]}]},{"key":"Db","suffix":"b13#9","positions":[{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,64,65,71]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,76]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,69,71,76]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":7,"barres":[],"midi":[76,69,71,77]}]},{"key":"Db","suffix":"maj7","positions":[{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,65,72]},{"frets":[2,2,1,1],"fingers":[2,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[72,65,68,73]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":3,"barres":[],"midi":[73,65,68,72]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,68,72,77]}]},{"key":"Db","suffix":"maj7b5","positions":[{"frets":[0,1,1,3],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,72]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":3,"barres":[],"midi":[72,65,67,73]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,65,67,72]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,72,77]}]},{"key":"Db","suffix":"maj7#5","positions":[{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,72]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":4,"barres":[],"midi":[72,65,69,73]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":3,"barres":[],"midi":[73,65,69,72]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":6,"barres":[],"midi":[73,69,72,77]}]},{"key":"Db","suffix":"maj9","positions":[{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,63,65,72]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":4,"midi":[72,65,68,75]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,68,72,77]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":10,"midi":[77,72,75,80]}]},{"key":"Db","suffix":"maj11","positions":[{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":6,"barres":[],"midi":[75,66,72,77]},{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":9,"barres":[],"midi":[77,72,75,78]}]},{"key":"Db","suffix":"maj13","positions":[{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,65,72]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":5,"midi":[72,65,70,75]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,77]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,72,75,82]}]},{"key":"Db","suffix":"m6","positions":[{"frets":[1,1,0,1],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,61,64,70]},{"frets":[3,4,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[70,64,68,73]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,76]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[76,70,73,80]}]},{"key":"Db","suffix":"m7","positions":[{"frets":[1,1,0,2],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,61,64,71]},{"frets":[4,4,4,4],"fingers":[1,1,1,1],"barres":[4],"capo":true,"baseFret":1,"midi":[71,64,68,73]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":6,"midi":[73,68,71,76]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,71,73,80]}]},{"key":"Db","suffix":"m7b5","positions":[{"frets":[0,1,0,2],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,71]},{"frets":[4,4,3,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[71,64,67,73]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,76]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,79]}]},{"key":"Db","suffix":"m9","positions":[{"frets":[1,3,0,2],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,63,64,71]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,64,68,75]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":6,"barres":[],"midi":[76,68,71,75]},{"frets":[2,2,1,1],"fingers":[2,2,1,1],"barres":[1,2],"capo":true,"baseFret":7,"midi":[75,68,71,76]}]},{"key":"Db","suffix":"m69","positions":[{"frets":[1,3,0,1],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,63,64,70]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,68,75]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":6,"barres":[],"midi":[75,68,70,76]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,68,70,75]}]},{"key":"Db","suffix":"m9b5","positions":[{"frets":[0,3,0,2],"fingers":[0,2,0,1],"baseFret":1,"barres":[],"midi":[67,63,64,71]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":3,"midi":[71,64,67,75]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":6,"midi":[76,67,71,75]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[75,67,71,76]}]},{"key":"Db","suffix":"m11","positions":[{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":6,"midi":[75,66,71,76]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,66,71,75]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,75,78]}]},{"key":"Db","suffix":"mmaj7","positions":[{"frets":[1,1,0,3],"fingers":[1,2,0,4],"baseFret":1,"barres":[],"midi":[68,61,64,72]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[72,64,68,73]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":3,"midi":[73,64,68,72]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":6,"barres":[],"midi":[73,68,72,76]}]},{"key":"Db","suffix":"mmaj7b5","positions":[{"frets":[0,1,0,3],"fingers":[0,1,0,3],"baseFret":1,"barres":[],"midi":[67,61,64,72]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":3,"barres":[],"midi":[72,64,67,73]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,64,67,72]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":6,"barres":[],"midi":[73,67,72,76]}]},{"key":"Db","suffix":"mmaj9","positions":[{"frets":[1,3,0,3],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,63,64,72]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[72,64,68,75]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":6,"barres":[],"midi":[76,68,72,75]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":7,"barres":[],"midi":[75,68,72,76]}]},{"key":"Db","suffix":"mmaj11","positions":[{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":6,"barres":[],"midi":[75,66,72,76]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,66,72,75]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,72,75,78]}]},{"key":"Db","suffix":"add9","positions":[{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"baseFret":1,"midi":[68,63,65,73]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":4,"barres":[],"midi":[73,65,68,75]},{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"baseFret":8,"midi":[75,68,73,77]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":10,"midi":[77,73,75,80]}]},{"key":"Db","suffix":"madd9","positions":[{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[73,64,68,75]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":6,"barres":[],"midi":[76,68,73,75]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":7,"midi":[75,68,73,76]}]}],"E":[{"key":"E","suffix":"major","positions":[{"frets":[1,4,0,2],"fingers":[1,4,0,2],"baseFret":1,"barres":[],"midi":[68,64,64,71]},{"frets":[4,4,4,2],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[71,64,68,71]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[71,64,68,76]},{"frets":[3,2,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[76,68,71,76]}]},{"key":"E","suffix":"minor","positions":[{"frets":[0,4,3,2],"fingers":[0,3,2,1],"baseFret":1,"barres":[],"midi":[67,64,67,71]},{"frets":[4,4,3,2],"fingers":[3,4,2,1],"baseFret":1,"barres":[],"midi":[71,64,67,71]},{"frets":[1,4,4,4],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,67,71,76]},{"frets":[3,1,1,1],"fingers":[3,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[76,67,71,76]}]},{"key":"E","suffix":"dim","positions":[{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":1,"barres":[],"midi":[70,64,67,70]},{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":6,"barres":[],"midi":[76,67,70,76]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":9,"barres":[],"midi":[76,70,76,79]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[79,70,76,79]}]},{"key":"E","suffix":"dim7","positions":[{"frets":[0,1,0,1],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,70]},{"frets":[3,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[70,64,67,73]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,67,70,76]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,70,73,79]}]},{"key":"E","suffix":"sus2","positions":[{"frets":[4,4,2,2],"fingers":[3,4,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[71,64,66,71]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":4,"midi":[71,66,71,76]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,76,78]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":11,"midi":[78,71,76,83]}]},{"key":"E","suffix":"sus4","positions":[{"frets":[1,3,4,1],"fingers":[1,2,3,1],"barres":[1],"capo":true,"baseFret":2,"midi":[69,64,69,71]},{"frets":[3,3,4,1],"fingers":[2,3,4,1],"baseFret":2,"barres":[],"midi":[71,64,69,71]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":4,"midi":[71,64,69,76]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[76,69,71,76]}]},{"key":"E","suffix":"7sus4","positions":[{"frets":[2,2,0,2],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[69,62,64,71]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":4,"midi":[71,64,69,74]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,76]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,71,74,81]}]},{"key":"E","suffix":"alt","positions":[{"frets":[4,3,1,2],"fingers":[4,3,1,2],"baseFret":6,"barres":[],"midi":[76,68,70,76]},{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":9,"barres":[],"midi":[76,70,76,80]},{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":10,"barres":[],"midi":[80,70,76,80]}]},{"key":"E","suffix":"aug","positions":[{"frets":[1,0,0,3],"fingers":[1,0,0,3],"baseFret":1,"barres":[],"midi":[68,60,64,72]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":1,"barres":[],"midi":[68,64,68,72]},{"frets":[3,2,2,1],"fingers":[3,2,2,1],"barres":[2],"baseFret":3,"midi":[72,64,68,72]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[72,64,68,76]}]},{"key":"E","suffix":"6","positions":[{"frets":[1,1,0,2],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,61,64,71]},{"frets":[4,4,4,4],"fingers":[1,1,1,1],"barres":[4],"capo":true,"baseFret":1,"midi":[71,64,68,73]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":6,"barres":[],"midi":[73,68,71,76]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,71,73,80]}]},{"key":"E","suffix":"69","positions":[{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":1,"midi":[68,61,66,71]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,73]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,68,71,78]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[78,71,73,80]}]},{"key":"E","suffix":"7","positions":[{"frets":[1,2,0,2],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,62,64,71]},{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,64,68,74]},{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,76]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,71,74,80]}]},{"key":"E","suffix":"7b5","positions":[{"frets":[1,2,0,1],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,62,64,70]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,68,74]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,68,70,76]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,80]}]},{"key":"E","suffix":"aug7","positions":[{"frets":[1,2,0,3],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,62,64,72]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"baseFret":4,"midi":[72,64,68,74]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"baseFret":7,"midi":[74,68,72,76]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":9,"barres":[],"midi":[76,72,74,80]}]},{"key":"E","suffix":"9","positions":[{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,71]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,74]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,78]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[78,71,74,80]}]},{"key":"E","suffix":"9b5","positions":[{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":1,"midi":[68,62,66,70]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":3,"barres":[],"midi":[70,66,68,74]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,68,70,78]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[78,70,74,80]}]},{"key":"E","suffix":"aug9","positions":[{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":1,"midi":[68,62,66,72]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,66,68,74]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,78]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":10,"barres":[],"midi":[78,72,74,80]}]},{"key":"E","suffix":"7b9","positions":[{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,62,65,71]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,65,68,74]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,68,71,77]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,71,74,80]}]},{"key":"E","suffix":"7b9#5","positions":[{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,72]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,65,68,74]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,77]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,80]}]},{"key":"E","suffix":"7#9","positions":[{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":1,"barres":[],"midi":[68,62,67,71]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[71,67,68,74]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[74,68,71,79]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":10,"barres":[],"midi":[79,71,74,80]}]},{"key":"E","suffix":"11","positions":[{"frets":[1,2,2,0],"fingers":[1,2,3,0],"baseFret":1,"barres":[],"midi":[68,62,66,69]}]},{"key":"E","suffix":"9#11","positions":[{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":1,"midi":[68,62,66,70]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":3,"barres":[],"midi":[70,66,68,74]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,68,70,78]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[78,70,74,80]}]},{"key":"E","suffix":"13","positions":[{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,66,73]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":4,"barres":[],"midi":[73,66,68,74]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,66,68,73]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,73,78]}]},{"key":"E","suffix":"13b9","positions":[{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,73]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[74,65,68,73]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":4,"barres":[],"midi":[73,65,68,74]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":10,"midi":[77,73,74,80]}]},{"key":"E","suffix":"13b5b9","positions":[{"frets":[3,2,1,4],"fingers":[3,2,1,4],"baseFret":1,"barres":[],"midi":[70,62,65,73]},{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":4,"barres":[],"midi":[74,65,70,73]},{"frets":[2,1,2,1],"fingers":[3,1,4,2],"baseFret":5,"barres":[],"midi":[73,65,70,74]},{"frets":[1,4,3,2],"fingers":[1,4,3,2],"baseFret":7,"barres":[],"midi":[74,70,73,77]}]},{"key":"E","suffix":"b13b9","positions":[{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,72]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,65,68,74]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,77]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,80]}]},{"key":"E","suffix":"b13#9","positions":[{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,67,72]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,67,68,74]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,79]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[80,72,74,79]}]},{"key":"E","suffix":"maj7","positions":[{"frets":[1,3,0,2],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,63,64,71]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,64,68,75]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":6,"barres":[],"midi":[76,68,71,75]},{"frets":[2,2,1,1],"fingers":[2,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[75,68,71,76]}]},{"key":"E","suffix":"maj7b5","positions":[{"frets":[1,3,0,1],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,63,64,70]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,68,75]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,68,70,75]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":6,"barres":[],"midi":[75,68,70,76]}]},{"key":"E","suffix":"maj7#5","positions":[{"frets":[1,3,0,3],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,63,64,72]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[72,64,68,75]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":6,"barres":[],"midi":[76,68,72,75]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":7,"barres":[],"midi":[75,68,72,76]}]},{"key":"E","suffix":"maj9","positions":[{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":1,"midi":[68,63,66,71]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,66,68,75]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":7,"midi":[75,68,71,78]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,71,75,80]}]},{"key":"E","suffix":"maj11","positions":[{"frets":[1,3,2,0],"fingers":[1,3,2,0],"baseFret":1,"barres":[],"midi":[68,63,66,69]},{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":9,"barres":[],"midi":[78,69,75,80]}]},{"key":"E","suffix":"maj13","positions":[{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,63,66,73]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[73,66,68,75]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":8,"midi":[75,68,73,78]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,80]}]},{"key":"E","suffix":"m6","positions":[{"frets":[0,1,0,2],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,71]},{"frets":[4,4,3,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[71,64,67,73]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,76]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,79]}]},{"key":"E","suffix":"m7","positions":[{"frets":[0,2,0,2],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,62,64,71]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":3,"midi":[71,64,67,74]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,71,76]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":9,"midi":[76,71,74,79]}]},{"key":"E","suffix":"m7b5","positions":[{"frets":[0,2,0,1],"fingers":[0,2,0,1],"baseFret":1,"barres":[],"midi":[67,62,64,70]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[70,64,67,74]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,67,70,76]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,79]}]},{"key":"E","suffix":"m9","positions":[{"frets":[0,2,2,2],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,62,66,71]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,66,67,74]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,71,78]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":9,"barres":[],"midi":[79,71,74,78]}]},{"key":"E","suffix":"m69","positions":[{"frets":[0,1,2,2],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,66,71]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,66,67,73]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,78]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":9,"barres":[],"midi":[78,71,73,79]}]},{"key":"E","suffix":"m9b5","positions":[{"frets":[0,2,2,1],"fingers":[0,2,3,1],"baseFret":1,"barres":[],"midi":[67,62,66,70]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[70,66,67,74]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":6,"midi":[74,67,70,78]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":9,"midi":[79,70,74,78]}]},{"key":"E","suffix":"m11","positions":[{"frets":[0,2,2,0],"fingers":[0,2,3,0],"baseFret":1,"barres":[],"midi":[67,62,66,69]},{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":9,"midi":[78,69,74,79]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":9,"midi":[79,69,74,78]}]},{"key":"E","suffix":"mmaj7","positions":[{"frets":[0,3,0,2],"fingers":[0,2,0,1],"baseFret":1,"barres":[],"midi":[67,63,64,71]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":3,"midi":[71,64,67,75]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":6,"midi":[76,67,71,75]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[75,67,71,76]}]},{"key":"E","suffix":"mmaj7b5","positions":[{"frets":[0,3,0,1],"fingers":[0,3,0,1],"baseFret":1,"barres":[],"midi":[67,63,64,70]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[70,64,67,75]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":6,"barres":[],"midi":[75,67,70,76]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,67,70,75]}]},{"key":"E","suffix":"mmaj9","positions":[{"frets":[0,3,2,2],"fingers":[0,3,1,2],"baseFret":1,"barres":[],"midi":[67,63,66,71]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[71,66,67,75]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[75,67,71,78]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":9,"barres":[],"midi":[79,71,75,78]}]},{"key":"E","suffix":"mmaj11","positions":[{"frets":[0,3,2,0],"fingers":[0,3,2,0],"baseFret":1,"barres":[],"midi":[67,63,66,69]},{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":9,"barres":[],"midi":[78,69,75,79]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[79,69,75,78]}]},{"key":"E","suffix":"add9","positions":[{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":1,"midi":[68,64,66,71]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,68,76]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":7,"barres":[],"midi":[76,68,71,78]},{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,71,76,80]}]},{"key":"E","suffix":"madd9","positions":[{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[76,67,71,78]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":9,"barres":[],"midi":[79,71,76,78]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":10,"midi":[78,71,76,79]}]}],"Eb":[{"key":"Eb","suffix":"major","positions":[{"frets":[0,3,3,1],"fingers":[0,3,4,1],"baseFret":1,"barres":[],"midi":[67,63,67,70]},{"frets":[3,3,3,1],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[70,63,67,70]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[70,63,67,75]},{"frets":[3,2,1,1],"fingers":[3,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[75,67,70,75]}]},{"key":"Eb","suffix":"minor","positions":[{"frets":[3,3,2,1],"fingers":[3,4,2,1],"baseFret":1,"barres":[],"midi":[70,63,66,70]},{"frets":[1,4,4,4],"fingers":[1,3,3,3],"barres":[4],"baseFret":3,"midi":[70,66,70,75]},{"frets":[3,1,1,1],"fingers":[3,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[75,66,70,75]},{"frets":[3,1,1,4],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[75,66,70,78]}]},{"key":"Eb","suffix":"dim","positions":[{"frets":[2,3,2,0],"fingers":[1,3,2,0],"baseFret":1,"barres":[],"midi":[69,63,66,69]},{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":5,"barres":[],"midi":[75,66,69,75]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":8,"barres":[],"midi":[75,69,75,78]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[78,69,75,78]}]},{"key":"Eb","suffix":"dim7","positions":[{"frets":[2,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,63,66,72]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,66,69,75]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,69,72,78]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,72,75,81]}]},{"key":"Eb","suffix":"sus2","positions":[{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[70,63,65,70]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":3,"midi":[70,65,70,75]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,75,77]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":10,"midi":[77,70,75,82]}]},{"key":"Eb","suffix":"sus4","positions":[{"frets":[1,3,4,1],"fingers":[1,2,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,68,70]},{"frets":[3,3,4,1],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[70,63,68,70]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":3,"midi":[70,63,68,75]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[75,68,70,75]}]},{"key":"Eb","suffix":"7sus4","positions":[{"frets":[3,3,4,4],"fingers":[1,1,2,2],"barres":[3,3],"capo":true,"baseFret":1,"midi":[70,63,68,73]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,75]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,70,73,80]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[80,73,75,82]}]},{"key":"Eb","suffix":"alt","positions":[{"frets":[4,3,1,2],"fingers":[3,4,1,2],"baseFret":5,"barres":[],"midi":[75,67,69,75]},{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":8,"barres":[],"midi":[75,69,75,79]},{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":9,"barres":[],"midi":[79,69,75,79]}]},{"key":"Eb","suffix":"aug","positions":[{"frets":[0,3,3,2],"fingers":[0,3,2,1],"baseFret":1,"barres":[],"midi":[67,63,67,71]},{"frets":[4,3,3,2],"fingers":[3,2,2,1],"barres":[3],"baseFret":1,"midi":[71,63,67,71]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[71,63,67,75]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":4,"barres":[],"midi":[71,67,71,75]}]},{"key":"Eb","suffix":"6","positions":[{"frets":[3,3,3,3],"fingers":[1,1,1,1],"barres":[3],"capo":true,"baseFret":1,"midi":[70,63,67,72]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":5,"barres":[],"midi":[72,67,70,75]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,70,72,79]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":11,"midi":[79,72,75,82]}]},{"key":"Eb","suffix":"69","positions":[{"frets":[0,0,1,1],"fingers":[0,0,1,2],"baseFret":1,"barres":[],"midi":[67,60,65,70]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,72]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,67,70,77]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[77,70,72,79]}]},{"key":"Eb","suffix":"7","positions":[{"frets":[3,3,3,4],"fingers":[1,1,1,2],"barres":[3],"capo":true,"baseFret":1,"midi":[70,63,67,73]},{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,75]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,70,73,79]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,73,75,82]}]},{"key":"Eb","suffix":"7b5","positions":[{"frets":[2,3,3,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,67,73]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,67,69,75]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,79]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":11,"barres":[],"midi":[79,73,75,81]}]},{"key":"Eb","suffix":"aug7","positions":[{"frets":[4,3,3,4],"fingers":[2,1,1,3],"barres":[3],"capo":true,"baseFret":1,"midi":[71,63,67,73]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":6,"midi":[73,67,71,75]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":8,"barres":[],"midi":[75,71,73,79]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,73,75,83]}]},{"key":"Eb","suffix":"9","positions":[{"frets":[0,1,1,1],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,70]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,73]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,77]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,70,73,79]}]},{"key":"Eb","suffix":"9b5","positions":[{"frets":[0,1,1,0],"fingers":[0,1,2,0],"baseFret":1,"barres":[],"midi":[67,61,65,69]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":2,"barres":[],"midi":[69,65,67,73]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,67,69,77]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[77,69,73,79]}]},{"key":"Eb","suffix":"aug9","positions":[{"frets":[0,1,1,2],"fingers":[0,1,1,2],"barres":[1],"baseFret":1,"midi":[67,61,65,71]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,65,67,73]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,77]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":9,"barres":[],"midi":[77,71,73,79]}]},{"key":"Eb","suffix":"7b9","positions":[{"frets":[0,1,0,1],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,70]},{"frets":[3,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[70,64,67,73]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,67,70,76]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,70,73,79]}]},{"key":"Eb","suffix":"7b9#5","positions":[{"frets":[0,1,0,2],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,71]},{"frets":[4,4,3,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[71,64,67,73]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,76]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,79]}]},{"key":"Eb","suffix":"7#9","positions":[{"frets":[0,1,2,1],"fingers":[0,1,3,2],"baseFret":1,"barres":[],"midi":[67,61,66,70]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[70,66,67,73]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,78]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":9,"barres":[],"midi":[78,70,73,79]}]},{"key":"Eb","suffix":"11","positions":[{"frets":[3,1,2,3],"fingers":[3,1,2,4],"baseFret":8,"barres":[],"midi":[77,68,73,79]}]},{"key":"Eb","suffix":"9#11","positions":[{"frets":[0,1,1,0],"fingers":[0,1,2,0],"baseFret":1,"barres":[],"midi":[67,61,65,69]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":2,"barres":[],"midi":[69,65,67,73]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,67,69,77]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[77,69,73,79]}]},{"key":"Eb","suffix":"13","positions":[{"frets":[0,1,1,3],"fingers":[0,1,2,4],"baseFret":1,"barres":[],"midi":[67,61,65,72]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":3,"barres":[],"midi":[72,65,67,73]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,65,67,72]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,72,77]}]},{"key":"Eb","suffix":"13b9","positions":[{"frets":[0,1,0,3],"fingers":[0,1,0,3],"baseFret":1,"barres":[],"midi":[67,61,64,72]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":3,"barres":[],"midi":[72,64,67,73]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[73,64,67,72]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":9,"midi":[76,72,73,79]}]},{"key":"Eb","suffix":"13b5b9","positions":[{"frets":[2,1,0,3],"fingers":[2,1,0,3],"baseFret":1,"barres":[],"midi":[69,61,64,72]},{"frets":[2,1,2,1],"fingers":[3,1,4,2],"baseFret":4,"barres":[],"midi":[72,64,69,73]},{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":3,"barres":[],"midi":[73,64,69,72]},{"frets":[1,4,3,2],"fingers":[1,4,3,2],"baseFret":6,"barres":[],"midi":[73,69,72,76]}]},{"key":"Eb","suffix":"b13b9","positions":[{"frets":[0,1,0,2],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,71]},{"frets":[4,4,3,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[71,64,67,73]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,76]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,79]}]},{"key":"Eb","suffix":"b13#9","positions":[{"frets":[0,1,2,2],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,66,71]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,66,67,73]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,78]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[79,71,73,78]}]},{"key":"Eb","suffix":"maj7","positions":[{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[70,63,67,74]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":5,"barres":[],"midi":[75,67,70,74]},{"frets":[2,2,1,1],"fingers":[2,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[74,67,70,75]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,70,74,79]}]},{"key":"Eb","suffix":"maj7b5","positions":[{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":2,"barres":[],"midi":[69,63,67,74]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,67,69,74]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":5,"barres":[],"midi":[74,67,69,75]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,74,79]}]},{"key":"Eb","suffix":"maj7#5","positions":[{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[71,63,67,74]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":5,"barres":[],"midi":[75,67,71,74]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":6,"barres":[],"midi":[74,67,71,75]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":8,"barres":[],"midi":[75,71,74,79]}]},{"key":"Eb","suffix":"maj9","positions":[{"frets":[0,2,1,1],"fingers":[0,2,1,1],"barres":[1],"baseFret":1,"midi":[67,62,65,70]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":3,"barres":[],"midi":[70,65,67,74]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":6,"midi":[74,67,70,77]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,70,74,79]}]},{"key":"Eb","suffix":"maj11","positions":[{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":8,"barres":[],"midi":[77,68,74,79]},{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":11,"barres":[],"midi":[79,74,77,80]}]},{"key":"Eb","suffix":"maj13","positions":[{"frets":[0,2,1,3],"fingers":[0,2,1,3],"baseFret":1,"barres":[],"midi":[67,62,65,72]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[72,65,67,74]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":7,"midi":[74,67,72,77]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,79]}]},{"key":"Eb","suffix":"m6","positions":[{"frets":[3,3,2,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,66,72]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,75]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,78]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":11,"midi":[78,72,75,82]}]},{"key":"Eb","suffix":"m7","positions":[{"frets":[3,3,2,4],"fingers":[2,2,1,3],"barres":[3],"baseFret":1,"midi":[70,63,66,73]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,70,75]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":8,"midi":[75,70,73,78]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,73,75,82]}]},{"key":"Eb","suffix":"m7b5","positions":[{"frets":[2,3,2,4],"fingers":[1,2,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[69,63,66,73]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,66,69,75]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,78]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,81]}]},{"key":"Eb","suffix":"m9","positions":[{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":2,"barres":[],"midi":[70,65,66,73]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,70,77]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":8,"barres":[],"midi":[78,70,73,77]},{"frets":[2,2,1,1],"fingers":[2,2,1,1],"barres":[1,2],"capo":true,"baseFret":9,"midi":[77,70,73,78]}]},{"key":"Eb","suffix":"m69","positions":[{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":2,"barres":[],"midi":[70,65,66,72]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,77]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":8,"barres":[],"midi":[77,70,72,78]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,70,72,77]}]},{"key":"Eb","suffix":"m9b5","positions":[{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":2,"midi":[69,65,66,73]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":5,"midi":[73,66,69,77]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":8,"midi":[78,69,73,77]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[77,69,73,78]}]},{"key":"Eb","suffix":"m11","positions":[{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":8,"midi":[77,68,73,78]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,68,73,77]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,77,80]}]},{"key":"Eb","suffix":"mmaj7","positions":[{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":2,"midi":[70,63,66,74]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":5,"midi":[75,66,70,74]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,75]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":8,"barres":[],"midi":[75,70,74,78]}]},{"key":"Eb","suffix":"mmaj7b5","positions":[{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[69,63,66,74]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":5,"barres":[],"midi":[74,66,69,75]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,66,69,74]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":8,"barres":[],"midi":[75,69,74,78]}]},{"key":"Eb","suffix":"mmaj9","positions":[{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":2,"barres":[],"midi":[70,65,66,74]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,77]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":8,"barres":[],"midi":[78,70,74,77]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":9,"barres":[],"midi":[77,70,74,78]}]},{"key":"Eb","suffix":"mmaj11","positions":[{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":8,"barres":[],"midi":[77,68,74,78]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,68,74,77]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,74,77,80]}]},{"key":"Eb","suffix":"add9","positions":[{"frets":[0,3,1,1],"fingers":[0,3,1,1],"barres":[1],"baseFret":1,"midi":[67,63,65,70]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,75]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":6,"barres":[],"midi":[75,67,70,77]},{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,70,75,79]}]},{"key":"Eb","suffix":"madd9","positions":[{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[75,66,70,77]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":8,"barres":[],"midi":[78,70,75,77]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":9,"midi":[77,70,75,78]}]}],"F":[{"key":"F","suffix":"major","positions":[{"frets":[2,0,1,0],"fingers":[2,0,1,0],"baseFret":1,"barres":[],"midi":[69,60,65,69]},{"frets":[2,0,1,3],"fingers":[2,0,1,3],"baseFret":1,"barres":[],"midi":[69,60,65,72]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[72,65,69,77]},{"frets":[3,2,1,1],"fingers":[3,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[77,69,72,77]}]},{"key":"F","suffix":"minor","positions":[{"frets":[1,0,1,3],"fingers":[1,0,2,4],"baseFret":1,"barres":[],"midi":[68,60,65,72]},{"frets":[3,3,2,1],"fingers":[3,4,2,1],"baseFret":3,"barres":[],"midi":[72,65,68,72]},{"frets":[1,4,4,4],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,68,72,77]},{"frets":[3,1,1,1],"fingers":[3,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[77,68,72,77]}]},{"key":"F","suffix":"dim","positions":[{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":2,"barres":[],"midi":[71,65,68,71]},{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":7,"barres":[],"midi":[77,68,71,77]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":10,"barres":[],"midi":[77,71,77,80]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[80,71,77,80]}]},{"key":"F","suffix":"dim7","positions":[{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,62,65,71]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,65,68,74]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,68,71,77]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,71,74,80]}]},{"key":"F","suffix":"sus2","positions":[{"frets":[0,0,1,3],"fingers":[0,0,1,3],"baseFret":1,"barres":[],"midi":[67,60,65,72]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[72,65,67,72]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":5,"midi":[72,67,72,77]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,77,79]}]},{"key":"F","suffix":"sus4","positions":[{"frets":[3,0,1,1],"fingers":[3,0,1,1],"barres":[1],"baseFret":1,"midi":[70,60,65,70]},{"frets":[3,0,1,3],"fingers":[2,0,1,3],"baseFret":1,"barres":[],"midi":[70,60,65,72]},{"frets":[1,3,4,1],"fingers":[1,2,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,70,72]},{"frets":[3,3,4,1],"fingers":[2,3,4,1],"baseFret":3,"barres":[],"midi":[72,65,70,72]}]},{"key":"F","suffix":"7sus4","positions":[{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,65,72]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":5,"midi":[72,65,70,75]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,70,72,77]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,72,75,82]}]},{"key":"F","suffix":"alt","positions":[{"frets":[1,4,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":2,"midi":[69,65,69,71]},{"frets":[4,3,1,2],"fingers":[4,3,1,2],"baseFret":7,"barres":[],"midi":[77,69,71,77]},{"frets":[1,2,4,3],"fingers":[1,2,4,3],"baseFret":10,"barres":[],"midi":[77,71,77,81]}]},{"key":"F","suffix":"aug","positions":[{"frets":[2,1,1,0],"fingers":[3,1,2,0],"baseFret":1,"barres":[],"midi":[69,61,65,69]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,73]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":2,"barres":[],"midi":[69,65,69,73]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[73,65,69,77]}]},{"key":"F","suffix":"6","positions":[{"frets":[2,2,1,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,62,65,72]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,65,69,74]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":7,"barres":[],"midi":[74,69,72,77]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,72,74,81]}]},{"key":"F","suffix":"69","positions":[{"frets":[2,2,3,3],"fingers":[1,1,2,2],"barres":[2,3],"capo":true,"baseFret":1,"midi":[69,62,67,72]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,74]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,69,72,79]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":10,"barres":[],"midi":[79,72,74,81]}]},{"key":"F","suffix":"7","positions":[{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,63,65,72]},{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,65,69,75]},{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,69,72,77]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,72,75,81]}]},{"key":"F","suffix":"7b5","positions":[{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,63,65,71]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,75]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,69,71,77]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":10,"barres":[],"midi":[77,71,75,81]}]},{"key":"F","suffix":"aug7","positions":[{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,63,65,73]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[73,65,69,75]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":8,"midi":[75,69,73,77]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":10,"barres":[],"midi":[77,73,75,81]}]},{"key":"F","suffix":"9","positions":[{"frets":[2,3,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,67,72]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,75]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[75,69,72,79]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[79,72,75,81]}]},{"key":"F","suffix":"9b5","positions":[{"frets":[2,3,3,2],"fingers":[1,2,2,1],"barres":[2,3],"capo":true,"baseFret":1,"midi":[69,63,67,71]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":4,"barres":[],"midi":[71,67,69,75]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,69,71,79]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":11,"midi":[79,71,75,81]}]},{"key":"F","suffix":"aug9","positions":[{"frets":[2,3,3,4],"fingers":[1,2,2,3],"barres":[3],"baseFret":1,"midi":[69,63,67,73]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,67,69,75]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,79]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":11,"barres":[],"midi":[79,73,75,81]}]},{"key":"F","suffix":"7b9","positions":[{"frets":[2,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,63,66,72]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,66,69,75]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,69,72,78]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,72,75,81]}]},{"key":"F","suffix":"7b9#5","positions":[{"frets":[2,3,2,4],"fingers":[1,2,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[69,63,66,73]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,66,69,75]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,78]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,81]}]},{"key":"F","suffix":"7#9","positions":[{"frets":[2,3,4,3],"fingers":[1,2,4,3],"baseFret":1,"barres":[],"midi":[69,63,68,72]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[72,68,69,75]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[75,69,72,80]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":11,"barres":[],"midi":[80,72,75,81]}]},{"key":"F","suffix":"11","positions":[{"frets":[1,2,2,0],"fingers":[1,2,3,0],"baseFret":1,"barres":[],"midi":[68,62,66,69]}]},{"key":"F","suffix":"9#11","positions":[{"frets":[2,3,3,2],"fingers":[1,2,2,1],"barres":[2,3],"capo":true,"baseFret":1,"midi":[69,63,67,71]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":4,"barres":[],"midi":[71,67,69,75]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,69,71,79]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":11,"midi":[79,71,75,81]}]},{"key":"F","suffix":"13","positions":[{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":2,"barres":[],"midi":[69,63,67,74]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":5,"barres":[],"midi":[74,67,69,75]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,67,69,74]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,74,79]}]},{"key":"F","suffix":"13b9","positions":[{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[69,63,66,74]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[75,66,69,74]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":8,"barres":[],"midi":[75,69,74,78]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":11,"midi":[78,74,75,81]}]},{"key":"F","suffix":"13b5b9","positions":[{"frets":[3,2,1,4],"fingers":[3,2,1,4],"baseFret":2,"barres":[],"midi":[71,63,66,74]},{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":5,"barres":[],"midi":[75,66,71,74]},{"frets":[2,1,2,1],"fingers":[3,1,4,2],"baseFret":6,"barres":[],"midi":[74,66,71,75]},{"frets":[1,4,3,2],"fingers":[1,4,3,2],"baseFret":8,"barres":[],"midi":[75,71,74,78]}]},{"key":"F","suffix":"b13b9","positions":[{"frets":[2,3,2,4],"fingers":[1,2,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[69,63,66,73]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,66,69,75]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,78]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,81]}]},{"key":"F","suffix":"b13#9","positions":[{"frets":[2,3,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,68,73]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,68,69,75]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,80]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[81,73,75,80]}]},{"key":"F","suffix":"maj7","positions":[{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,64,65,72]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,65,69,76]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":7,"barres":[],"midi":[77,69,72,76]},{"frets":[2,2,1,1],"fingers":[2,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[76,69,72,77]}]},{"key":"F","suffix":"maj7b5","positions":[{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,64,65,71]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,76]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,69,71,76]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":7,"barres":[],"midi":[76,69,71,77]}]},{"key":"F","suffix":"maj7#5","positions":[{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,64,65,73]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[73,65,69,76]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":7,"barres":[],"midi":[77,69,73,76]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":8,"barres":[],"midi":[76,69,73,77]}]},{"key":"F","suffix":"maj9","positions":[{"frets":[0,0,0,0],"fingers":[0,0,0,0],"baseFret":1,"barres":[],"midi":[67,60,64,69]},{"frets":[2,4,3,3],"fingers":[1,3,2,2],"barres":[3],"baseFret":1,"midi":[69,64,67,72]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,67,69,76]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":8,"midi":[76,69,72,79]}]},{"key":"F","suffix":"maj11","positions":[{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":1,"barres":[],"midi":[69,64,67,70]},{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":10,"barres":[],"midi":[79,70,76,81]}]},{"key":"F","suffix":"maj13","positions":[{"frets":[0,2,0,0],"fingers":[0,2,0,0],"baseFret":1,"barres":[],"midi":[67,62,64,69]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":2,"barres":[],"midi":[69,64,67,74]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[74,67,69,76]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":9,"midi":[76,69,74,79]}]},{"key":"F","suffix":"m6","positions":[{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,62,65,72]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,65,68,74]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,77]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,80]}]},{"key":"F","suffix":"m7","positions":[{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,63,65,72]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":4,"midi":[72,65,68,75]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[75,68,72,77]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":10,"midi":[77,72,75,80]}]},{"key":"F","suffix":"m7b5","positions":[{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,65,71]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,75]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,68,71,77]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":10,"barres":[],"midi":[77,71,75,80]}]},{"key":"F","suffix":"m9","positions":[{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,63,67,72]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,67,68,75]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[75,68,72,79]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":10,"barres":[],"midi":[80,72,75,79]}]},{"key":"F","suffix":"m69","positions":[{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[68,62,67,72]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":4,"barres":[],"midi":[72,67,68,74]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":7,"barres":[],"midi":[74,68,72,79]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":10,"barres":[],"midi":[79,72,74,80]}]},{"key":"F","suffix":"m9b5","positions":[{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":1,"barres":[],"midi":[68,63,67,71]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,67,68,75]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":7,"midi":[75,68,71,79]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":10,"midi":[80,71,75,79]}]},{"key":"F","suffix":"m11","positions":[{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,67,70]},{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":10,"midi":[79,70,75,80]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"capo":true,"baseFret":10,"midi":[80,70,75,79]}]},{"key":"F","suffix":"mmaj7","positions":[{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[68,64,65,72]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":4,"midi":[72,65,68,76]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":7,"midi":[77,68,72,76]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[76,68,72,77]}]},{"key":"F","suffix":"mmaj7b5","positions":[{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,64,65,71]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,76]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":7,"barres":[],"midi":[76,68,71,77]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,68,71,76]}]},{"key":"F","suffix":"mmaj9","positions":[{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":1,"barres":[],"midi":[68,64,67,72]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":4,"barres":[],"midi":[72,67,68,76]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[76,68,72,79]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":10,"barres":[],"midi":[80,72,76,79]}]},{"key":"F","suffix":"mmaj11","positions":[{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,64,67,70]},{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":10,"barres":[],"midi":[79,70,76,80]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[80,70,76,79]}]},{"key":"F","suffix":"add9","positions":[{"frets":[0,0,1,0],"fingers":[0,0,1,0],"baseFret":1,"barres":[],"midi":[67,60,65,69]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":2,"midi":[69,65,67,72]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,69,77]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":8,"barres":[],"midi":[77,69,72,79]}]},{"key":"F","suffix":"madd9","positions":[{"frets":[0,3,2,1],"fingers":[0,3,2,1],"baseFret":3,"barres":[],"midi":[67,65,68,72]},{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[77,68,72,79]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":10,"barres":[],"midi":[80,72,77,79]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":11,"midi":[79,72,77,80]}]}],"G":[{"key":"G","suffix":"major","positions":[{"frets":[0,2,3,2],"fingers":[0,1,3,2],"baseFret":1,"barres":[],"midi":[67,62,67,71]},{"frets":[4,2,3,2],"fingers":[3,1,2,1],"barres":[2],"capo":true,"baseFret":1,"midi":[71,62,67,71]},{"frets":[3,1,2,4],"fingers":[3,1,2,4],"baseFret":2,"barres":[],"midi":[71,62,67,74]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,71,79]}]},{"key":"G","suffix":"minor","positions":[{"frets":[0,2,3,1],"fingers":[0,2,3,1],"baseFret":1,"barres":[],"midi":[67,62,67,70]},{"frets":[3,2,3,1],"fingers":[3,2,4,1],"baseFret":1,"barres":[],"midi":[70,62,67,70]},{"frets":[2,1,2,4],"fingers":[2,1,3,4],"baseFret":2,"barres":[],"midi":[70,62,67,74]},{"frets":[3,3,2,1],"fingers":[3,4,2,1],"baseFret":5,"barres":[],"midi":[74,67,70,74]}]},{"key":"G","suffix":"dim","positions":[{"frets":[0,1,3,1],"fingers":[0,1,3,2],"baseFret":1,"barres":[],"midi":[67,61,67,70]},{"frets":[3,1,3,1],"fingers":[3,1,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[70,61,67,70]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":4,"barres":[],"midi":[73,67,70,73]},{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":9,"barres":[],"midi":[79,70,73,79]}]},{"key":"G","suffix":"dim7","positions":[{"frets":[0,1,0,1],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,70]},{"frets":[3,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[70,64,67,73]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,67,70,76]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,70,73,79]}]},{"key":"G","suffix":"sus2","positions":[{"frets":[0,2,3,0],"fingers":[0,2,3,0],"baseFret":1,"barres":[],"midi":[67,62,67,69]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":2,"midi":[69,62,67,74]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[74,67,69,74]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":7,"midi":[74,69,74,79]}]},{"key":"G","suffix":"sus4","positions":[{"frets":[0,2,3,3],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,62,67,72]},{"frets":[4,1,2,2],"fingers":[4,1,2,2],"barres":[2],"baseFret":2,"midi":[72,62,67,72]},{"frets":[4,1,2,4],"fingers":[3,1,2,4],"baseFret":2,"barres":[],"midi":[72,62,67,74]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[72,67,72,74]}]},{"key":"G","suffix":"7sus4","positions":[{"frets":[0,2,1,3],"fingers":[0,2,1,3],"baseFret":1,"barres":[],"midi":[67,62,65,72]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[72,65,67,74]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,1],"capo":true,"baseFret":7,"midi":[74,67,72,77]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,72,74,79]}]},{"key":"G","suffix":"alt","positions":[{"frets":[4,1,3,2],"fingers":[4,1,3,2],"baseFret":1,"barres":[],"midi":[71,61,67,71]},{"frets":[1,4,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,67,71,73]},{"frets":[4,3,1,2],"fingers":[4,3,1,2],"baseFret":9,"barres":[],"midi":[79,71,73,79]}]},{"key":"G","suffix":"aug","positions":[{"frets":[0,3,3,2],"fingers":[0,2,3,1],"baseFret":1,"barres":[],"midi":[67,63,67,71]},{"frets":[4,3,3,2],"fingers":[3,2,2,1],"barres":[3],"baseFret":1,"midi":[71,63,67,71]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[71,63,67,75]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":4,"barres":[],"midi":[71,67,71,75]}]},{"key":"G","suffix":"6","positions":[{"frets":[0,2,0,2],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,62,64,71]},{"frets":[2,2,1,3],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[71,64,67,74]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,71,76]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":9,"barres":[],"midi":[76,71,74,79]}]},{"key":"G","suffix":"69","positions":[{"frets":[2,2,0,2],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[69,62,64,71]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":4,"midi":[71,64,69,74]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,76]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,71,74,81]}]},{"key":"G","suffix":"7","positions":[{"frets":[0,2,1,2],"fingers":[0,2,1,3],"baseFret":1,"barres":[],"midi":[67,62,65,71]},{"frets":[2,3,1,3],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[71,65,67,74]},{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,71,77]},{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,71,74,79]}]},{"key":"G","suffix":"7b5","positions":[{"frets":[0,1,1,2],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,71]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,65,67,73]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,77]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":9,"barres":[],"midi":[77,71,73,79]}]},{"key":"G","suffix":"aug7","positions":[{"frets":[0,3,1,2],"fingers":[0,3,1,2],"baseFret":1,"barres":[],"midi":[67,63,65,71]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[71,65,67,75]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[75,67,71,77]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":10,"midi":[77,71,75,79]}]},{"key":"G","suffix":"9","positions":[{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[69,62,65,71]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,74]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,77]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[77,71,74,81]}]},{"key":"G","suffix":"9b5","positions":[{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"baseFret":1,"midi":[69,61,65,71]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":4,"midi":[71,65,69,73]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":6,"barres":[],"midi":[73,69,71,77]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,71,73,81]}]},{"key":"G","suffix":"aug9","positions":[{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,63,65,71]},{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":4,"midi":[71,65,69,75]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,69,71,77]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":10,"barres":[],"midi":[77,71,75,81]}]},{"key":"G","suffix":"7b9","positions":[{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[68,62,65,71]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,65,68,74]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,68,71,77]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":10,"barres":[],"midi":[77,71,74,80]}]},{"key":"G","suffix":"7b9#5","positions":[{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,65,71]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,75]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,68,71,77]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":10,"barres":[],"midi":[77,71,75,80]}]},{"key":"G","suffix":"7#9","positions":[{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":1,"barres":[],"midi":[70,62,65,71]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,62,65,70]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":4,"barres":[],"midi":[71,65,70,74]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[74,70,71,77]}]},{"key":"G","suffix":"11","positions":[{"frets":[2,0,1,2],"fingers":[2,0,1,3],"baseFret":1,"barres":[],"midi":[69,60,65,71]},{"frets":[4,4,4,1],"fingers":[2,3,4,1],"baseFret":2,"barres":[],"midi":[72,65,69,71]},{"frets":[2,3,3,1],"fingers":[2,3,4,1],"baseFret":3,"barres":[],"midi":[71,65,69,72]}]},{"key":"G","suffix":"9#11","positions":[{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,71]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":4,"midi":[71,65,69,73]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":6,"barres":[],"midi":[73,69,71,77]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,71,73,81]}]},{"key":"G","suffix":"13","positions":[{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[69,64,65,71]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,69,76]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":7,"barres":[],"midi":[76,69,71,77]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,69,71,76]}]},{"key":"G","suffix":"13b9","positions":[{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,64,65,71]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,76]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[77,68,71,76]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":10,"barres":[],"midi":[77,71,76,80]}]},{"key":"G","suffix":"13b5b9","positions":[{"frets":[1,4,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[68,64,65,73]},{"frets":[3,2,1,4],"fingers":[3,2,1,4],"baseFret":4,"barres":[],"midi":[73,65,68,76]},{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":7,"barres":[],"midi":[77,68,73,76]},{"frets":[2,1,2,1],"fingers":[3,1,4,2],"baseFret":8,"barres":[],"midi":[76,68,73,77]}]},{"key":"G","suffix":"b13b9","positions":[{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,65,71]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":4,"midi":[71,65,68,75]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[75,68,71,77]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":10,"barres":[],"midi":[77,71,75,80]}]},{"key":"G","suffix":"b13#9","positions":[{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[71,63,65,70]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":1,"barres":[],"midi":[70,63,65,71]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":4,"barres":[],"midi":[71,65,70,75]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":7,"barres":[],"midi":[75,70,71,77]}]},{"key":"G","suffix":"maj7","positions":[{"frets":[0,2,2,2],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,62,66,71]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,66,67,74]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[74,67,71,78]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":9,"barres":[],"midi":[79,71,74,78]}]},{"key":"G","suffix":"maj7b5","positions":[{"frets":[0,1,2,2],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,66,71]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":3,"barres":[],"midi":[71,66,67,73]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":6,"barres":[],"midi":[73,67,71,78]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[79,71,73,78]}]},{"key":"G","suffix":"maj7#5","positions":[{"frets":[0,3,2,2],"fingers":[0,2,1,1],"barres":[2],"baseFret":1,"midi":[67,63,66,71]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":3,"barres":[],"midi":[71,66,67,75]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[75,67,71,78]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":9,"barres":[],"midi":[79,71,75,78]}]},{"key":"G","suffix":"maj9","positions":[{"frets":[2,2,2,2],"fingers":[1,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,62,66,71]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":4,"midi":[71,66,69,74]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":7,"barres":[],"midi":[74,69,71,78]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":10,"midi":[78,71,74,81]}]},{"key":"G","suffix":"maj11","positions":[{"frets":[2,0,2,2],"fingers":[1,0,2,3],"baseFret":1,"barres":[],"midi":[69,60,66,71]},{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":3,"barres":[],"midi":[71,66,69,72]}]},{"key":"G","suffix":"maj13","positions":[{"frets":[2,4,2,2],"fingers":[1,3,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,66,71]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":4,"barres":[],"midi":[71,66,69,76]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":7,"barres":[],"midi":[76,69,71,78]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":11,"midi":[78,71,76,81]}]},{"key":"G","suffix":"m6","positions":[{"frets":[0,2,0,1],"fingers":[0,2,0,1],"baseFret":1,"barres":[],"midi":[67,62,64,70]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[70,64,67,74]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,67,70,76]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,79]}]},{"key":"G","suffix":"m7","positions":[{"frets":[0,2,1,1],"fingers":[0,2,1,1],"barres":[1],"baseFret":1,"midi":[67,62,65,70]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":3,"barres":[],"midi":[70,65,67,74]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":6,"midi":[74,67,70,77]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[77,70,74,79]}]},{"key":"G","suffix":"m7b5","positions":[{"frets":[0,1,1,1],"fingers":[0,1,2,3],"baseFret":1,"barres":[],"midi":[67,61,65,70]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,67,73]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,77]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":9,"barres":[],"midi":[77,70,73,79]}]},{"key":"G","suffix":"m9","positions":[{"frets":[3,2,1,0],"fingers":[3,2,1,0],"baseFret":1,"barres":[],"midi":[70,62,65,69]},{"frets":[2,2,1,1],"fingers":[2,2,1,1],"barres":[1,2],"capo":true,"baseFret":1,"midi":[69,62,65,70]},{"frets":[1,3,3,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,65,69,74]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,69,70,77]}]},{"key":"G","suffix":"m69","positions":[{"frets":[2,2,0,1],"fingers":[2,3,0,1],"baseFret":1,"barres":[],"midi":[69,62,64,70]},{"frets":[3,2,0,0],"fingers":[3,2,0,0],"baseFret":1,"barres":[],"midi":[70,62,64,69]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,69,74]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,69,70,76]}]},{"key":"G","suffix":"m9b5","positions":[{"frets":[3,1,1,0],"fingers":[3,1,2,0],"baseFret":1,"barres":[],"midi":[70,61,65,69]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[69,61,65,70]},{"frets":[1,3,3,2],"fingers":[1,3,4,2],"baseFret":3,"barres":[],"midi":[70,65,69,73]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"baseFret":6,"midi":[73,69,70,77]}]},{"key":"G","suffix":"m11","positions":[{"frets":[2,0,1,1],"fingers":[3,0,1,1],"barres":[1],"baseFret":1,"midi":[69,60,65,70]},{"frets":[3,0,1,0],"fingers":[3,0,1,0],"baseFret":1,"barres":[],"midi":[70,60,65,69]},{"frets":[1,3,3,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[70,65,69,72]},{"frets":[1,1,2,0],"fingers":[1,2,3,0],"baseFret":5,"barres":[],"midi":[72,65,70,69]}]},{"key":"G","suffix":"mmaj7","positions":[{"frets":[0,2,2,1],"fingers":[0,2,3,1],"baseFret":1,"barres":[],"midi":[67,62,66,70]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[70,66,67,74]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":6,"midi":[74,67,70,78]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":9,"midi":[79,70,74,78]}]},{"key":"G","suffix":"mmaj7b5","positions":[{"frets":[0,1,2,1],"fingers":[0,1,3,2],"baseFret":1,"barres":[],"midi":[67,61,66,70]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[70,66,67,73]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[73,67,70,78]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":9,"barres":[],"midi":[78,70,73,79]}]},{"key":"G","suffix":"mmaj9","positions":[{"frets":[3,2,2,0],"fingers":[3,1,2,0],"baseFret":1,"barres":[],"midi":[70,62,66,69]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[69,62,66,70]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":3,"barres":[],"midi":[70,66,69,74]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,69,70,78]}]},{"key":"G","suffix":"mmaj11","positions":[{"frets":[2,0,2,1],"fingers":[2,0,3,1],"baseFret":1,"barres":[],"midi":[69,60,66,70]},{"frets":[3,0,2,0],"fingers":[3,0,2,0],"baseFret":1,"barres":[],"midi":[70,60,66,69]},{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[70,66,69,72]},{"frets":[1,2,2,0],"fingers":[1,2,3,0],"baseFret":5,"barres":[],"midi":[72,66,70,69]}]},{"key":"G","suffix":"add9","positions":[{"frets":[2,2,3,2],"fingers":[1,1,2,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,62,67,71]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":4,"midi":[71,67,69,74]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[74,69,71,79]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":10,"barres":[],"midi":[79,71,74,81]}]},{"key":"G","suffix":"madd9","positions":[{"frets":[3,2,3,0],"fingers":[2,1,3,0],"baseFret":1,"barres":[],"midi":[70,62,67,69]},{"frets":[2,2,3,1],"fingers":[2,2,3,1],"barres":[2],"baseFret":1,"midi":[69,62,67,70]},{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[79,70,74,81]}]}],"Gb":[{"key":"Gb","suffix":"major","positions":[{"frets":[3,1,2,1],"fingers":[3,1,2,1],"barres":[1],"capo":true,"baseFret":1,"midi":[70,61,66,70]},{"frets":[3,1,2,4],"fingers":[3,1,2,4],"baseFret":1,"barres":[],"midi":[70,61,66,73]},{"frets":[1,1,1,4],"fingers":[1,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,70,78]},{"frets":[3,2,1,1],"fingers":[3,2,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[78,70,73,78]}]},{"key":"Gb","suffix":"minor","positions":[{"frets":[2,1,2,0],"fingers":[2,1,3,0],"baseFret":1,"barres":[],"midi":[69,61,66,69]},{"frets":[2,1,2,4],"fingers":[2,1,3,4],"baseFret":1,"barres":[],"midi":[69,61,66,73]},{"frets":[3,3,2,1],"fingers":[3,4,2,1],"baseFret":4,"barres":[],"midi":[73,66,69,73]},{"frets":[3,1,1,1],"fingers":[3,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[78,69,73,78]}]},{"key":"Gb","suffix":"dim","positions":[{"frets":[2,0,2,0],"fingers":[2,0,3,0],"baseFret":1,"barres":[],"midi":[69,60,66,69]},{"frets":[3,4,3,1],"fingers":[2,4,3,1],"baseFret":3,"barres":[],"midi":[72,66,69,72]},{"frets":[4,2,1,2],"fingers":[4,2,1,3],"baseFret":8,"barres":[],"midi":[78,69,72,78]},{"frets":[1,2,4,2],"fingers":[1,2,4,3],"baseFret":11,"barres":[],"midi":[78,72,78,81]}]},{"key":"Gb","suffix":"dim7","positions":[{"frets":[2,3,2,3],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,63,66,72]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":5,"barres":[],"midi":[72,66,69,75]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,69,72,78]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,72,75,81]}]},{"key":"Gb","suffix":"sus2","positions":[{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,66,73]},{"frets":[3,3,1,1],"fingers":[3,4,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[73,66,68,73]},{"frets":[1,3,4,4],"fingers":[1,2,3,3],"barres":[4],"baseFret":6,"midi":[73,68,73,78]},{"frets":[1,3,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,78,80]}]},{"key":"Gb","suffix":"sus4","positions":[{"frets":[4,1,2,4],"fingers":[3,1,2,4],"baseFret":1,"barres":[],"midi":[71,61,66,73]},{"frets":[1,3,4,1],"fingers":[1,2,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[71,66,71,73]},{"frets":[3,3,4,1],"fingers":[2,3,4,1],"baseFret":4,"barres":[],"midi":[73,66,71,73]},{"frets":[1,1,2,4],"fingers":[1,1,2,4],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,71,78]}]},{"key":"Gb","suffix":"7sus4","positions":[{"frets":[4,4,2,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[71,64,66,73]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":6,"midi":[73,66,71,76]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,71,73,78]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,73,76,83]}]},{"key":"Gb","suffix":"alt","positions":[{"frets":[3,0,2,1],"fingers":[3,0,2,1],"baseFret":1,"barres":[],"midi":[70,60,66,70]},{"frets":[1,4,4,1],"fingers":[1,3,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[70,66,70,72]},{"frets":[4,3,1,2],"fingers":[4,3,1,2],"baseFret":8,"barres":[],"midi":[78,70,72,78]}]},{"key":"Gb","suffix":"aug","positions":[{"frets":[3,2,2,1],"fingers":[3,2,2,1],"barres":[2],"baseFret":1,"midi":[70,62,66,70]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[70,62,66,74]},{"frets":[1,4,4,3],"fingers":[1,3,4,2],"baseFret":3,"barres":[],"midi":[70,66,70,74]},{"frets":[2,1,1,4],"fingers":[2,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,78]}]},{"key":"Gb","suffix":"6","positions":[{"frets":[3,3,2,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,63,66,73]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,70,75]},{"frets":[1,3,2,2],"fingers":[1,4,2,3],"baseFret":8,"barres":[],"midi":[75,70,73,78]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,73,75,82]}]},{"key":"Gb","suffix":"69","positions":[{"frets":[3,3,4,4],"fingers":[1,1,2,2],"barres":[3,4],"capo":true,"baseFret":1,"midi":[70,63,68,73]},{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,75]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":8,"barres":[],"midi":[75,70,73,80]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":11,"barres":[],"midi":[80,73,75,82]}]},{"key":"Gb","suffix":"7","positions":[{"frets":[3,4,2,4],"fingers":[2,3,1,4],"baseFret":1,"barres":[],"midi":[70,64,66,73]},{"frets":[1,1,1,2],"fingers":[1,1,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,70,76]},{"frets":[1,2,1,1],"fingers":[1,2,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,70,73,78]},{"frets":[1,3,2,3],"fingers":[1,3,2,4],"baseFret":11,"barres":[],"midi":[78,73,76,82]}]},{"key":"Gb","suffix":"7b5","positions":[{"frets":[3,4,2,3],"fingers":[2,4,1,3],"baseFret":1,"barres":[],"midi":[70,64,66,72]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,76]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":8,"barres":[],"midi":[76,70,72,78]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":11,"barres":[],"midi":[78,72,76,82]}]},{"key":"Gb","suffix":"aug7","positions":[{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":2,"barres":[],"midi":[70,64,66,74]},{"frets":[2,1,1,2],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,76]},{"frets":[1,2,2,1],"fingers":[1,2,2,1],"barres":[1,2],"capo":true,"baseFret":9,"midi":[76,70,74,78]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":11,"barres":[],"midi":[78,74,76,82]}]},{"key":"Gb","suffix":"9","positions":[{"frets":[1,1,0,1],"fingers":[1,2,0,3],"baseFret":1,"barres":[],"midi":[68,61,64,70]},{"frets":[3,4,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[70,64,68,73]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,76]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[76,70,73,80]}]},{"key":"Gb","suffix":"9b5","positions":[{"frets":[1,0,0,1],"fingers":[1,0,0,2],"baseFret":1,"barres":[],"midi":[68,60,64,70]},{"frets":[3,4,4,3],"fingers":[1,2,2,1],"barres":[3,4],"capo":true,"baseFret":1,"midi":[70,64,68,72]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":5,"barres":[],"midi":[72,68,70,76]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,70,72,80]}]},{"key":"Gb","suffix":"aug9","positions":[{"frets":[1,2,0,1],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,62,64,70]},{"frets":[1,2,2,3],"fingers":[1,2,2,3],"barres":[2],"baseFret":3,"midi":[70,64,68,74]},{"frets":[2,3,1,2],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,68,70,76]},{"frets":[1,2,2,3],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,80]}]},{"key":"Gb","suffix":"7b9","positions":[{"frets":[0,1,0,1],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,61,64,70]},{"frets":[3,4,3,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[70,64,67,73]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,67,70,76]},{"frets":[1,2,1,2],"fingers":[1,3,2,4],"baseFret":9,"barres":[],"midi":[76,70,73,79]}]},{"key":"Gb","suffix":"7b9#5","positions":[{"frets":[0,2,0,1],"fingers":[0,2,0,1],"baseFret":1,"barres":[],"midi":[67,62,64,70]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[70,64,67,74]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,67,70,76]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,79]}]},{"key":"Gb","suffix":"7#9","positions":[{"frets":[2,1,0,1],"fingers":[3,1,0,2],"baseFret":1,"barres":[],"midi":[69,61,64,70]},{"frets":[3,1,0,0],"fingers":[3,1,0,0],"baseFret":1,"barres":[],"midi":[70,61,64,69]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":3,"barres":[],"midi":[70,64,69,73]},{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[73,69,70,76]}]},{"key":"Gb","suffix":"11","positions":[{"frets":[3,4,4,2],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[70,64,68,71]},{"frets":[4,4,4,1],"fingers":[2,3,4,1],"baseFret":1,"barres":[],"midi":[71,64,68,70]}]},{"key":"Gb","suffix":"9#11","positions":[{"frets":[1,0,0,1],"fingers":[1,0,0,2],"baseFret":1,"barres":[],"midi":[68,60,64,70]},{"frets":[3,4,4,3],"fingers":[1,2,2,1],"barres":[3,4],"capo":true,"baseFret":1,"midi":[70,64,68,72]},{"frets":[1,4,2,3],"fingers":[1,4,2,3],"baseFret":5,"barres":[],"midi":[72,68,70,76]},{"frets":[2,3,1,4],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,70,72,80]}]},{"key":"Gb","suffix":"13","positions":[{"frets":[1,3,0,1],"fingers":[1,3,0,2],"baseFret":1,"barres":[],"midi":[68,63,64,70]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,68,75]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":6,"barres":[],"midi":[75,68,70,76]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,68,70,75]}]},{"key":"Gb","suffix":"13b9","positions":[{"frets":[0,3,0,1],"fingers":[0,3,0,1],"baseFret":1,"barres":[],"midi":[67,63,64,70]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[70,64,67,75]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[76,67,70,75]},{"frets":[1,2,3,2],"fingers":[1,2,4,3],"baseFret":9,"barres":[],"midi":[76,70,75,79]}]},{"key":"Gb","suffix":"13b5b9","positions":[{"frets":[0,3,0,3],"fingers":[0,1,0,2],"baseFret":1,"barres":[],"midi":[67,63,64,72]},{"frets":[3,2,1,4],"fingers":[3,2,1,4],"baseFret":3,"barres":[],"midi":[72,64,67,75]},{"frets":[4,2,3,1],"fingers":[4,2,3,1],"baseFret":6,"barres":[],"midi":[76,67,72,75]},{"frets":[2,1,2,1],"fingers":[3,1,4,2],"baseFret":7,"barres":[],"midi":[75,67,72,76]}]},{"key":"Gb","suffix":"b13b9","positions":[{"frets":[0,2,0,1],"fingers":[0,2,0,1],"baseFret":1,"barres":[],"midi":[67,62,64,70]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[70,64,67,74]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[74,67,70,76]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":9,"barres":[],"midi":[76,70,74,79]}]},{"key":"Gb","suffix":"b13#9","positions":[{"frets":[3,2,0,0],"fingers":[3,2,0,0],"baseFret":1,"barres":[],"midi":[70,62,64,69]},{"frets":[2,2,0,1],"fingers":[2,3,0,1],"baseFret":1,"barres":[],"midi":[69,62,64,70]},{"frets":[1,2,3,3],"fingers":[1,2,3,4],"baseFret":3,"barres":[],"midi":[70,64,69,74]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":6,"barres":[],"midi":[74,69,70,76]}]},{"key":"Gb","suffix":"maj7","positions":[{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":2,"barres":[],"midi":[70,65,66,73]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[73,66,70,77]},{"frets":[4,3,2,1],"fingers":[4,3,2,1],"baseFret":8,"barres":[],"midi":[78,70,73,77]},{"frets":[2,2,1,1],"fingers":[2,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[77,70,73,78]}]},{"key":"Gb","suffix":"maj7b5","positions":[{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":2,"barres":[],"midi":[70,65,66,72]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":5,"barres":[],"midi":[72,66,70,77]},{"frets":[4,3,1,1],"fingers":[4,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,70,72,77]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":8,"barres":[],"midi":[77,70,72,78]}]},{"key":"Gb","suffix":"maj7#5","positions":[{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":2,"barres":[],"midi":[70,65,66,74]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[74,66,70,77]},{"frets":[4,3,3,1],"fingers":[4,2,3,1],"baseFret":8,"barres":[],"midi":[78,70,74,77]},{"frets":[2,2,2,1],"fingers":[2,3,4,1],"baseFret":9,"barres":[],"midi":[77,70,74,78]}]},{"key":"Gb","suffix":"maj9","positions":[{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,65,70]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":3,"midi":[70,65,68,73]},{"frets":[1,3,1,3],"fingers":[1,3,2,4],"baseFret":6,"barres":[],"midi":[73,68,70,77]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":9,"midi":[77,70,73,80]}]},{"key":"Gb","suffix":"maj11","positions":[{"frets":[2,4,3,1],"fingers":[2,4,3,1],"baseFret":2,"barres":[],"midi":[70,65,68,71]},{"frets":[3,1,3,3],"fingers":[2,1,3,4],"baseFret":11,"barres":[],"midi":[80,71,77,82]}]},{"key":"Gb","suffix":"maj13","positions":[{"frets":[1,3,1,1],"fingers":[1,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,63,65,70]},{"frets":[1,3,2,4],"fingers":[1,3,2,4],"baseFret":3,"barres":[],"midi":[70,65,68,75]},{"frets":[3,3,1,3],"fingers":[2,3,1,4],"baseFret":6,"barres":[],"midi":[75,68,70,77]},{"frets":[1,1,2,2],"fingers":[1,1,2,2],"barres":[1,2],"capo":true,"baseFret":10,"midi":[77,70,75,80]}]},{"key":"Gb","suffix":"m6","positions":[{"frets":[2,3,2,4],"fingers":[1,2,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[69,63,66,73]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,66,69,75]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,78]},{"frets":[1,3,1,2],"fingers":[1,3,1,2],"barres":[1],"capo":true,"baseFret":11,"midi":[78,73,75,81]}]},{"key":"Gb","suffix":"m7","positions":[{"frets":[2,4,2,4],"fingers":[1,3,2,4],"baseFret":1,"barres":[],"midi":[69,64,66,73]},{"frets":[2,2,1,3],"fingers":[2,2,1,3],"barres":[2],"baseFret":5,"midi":[73,66,69,76]},{"frets":[1,1,1,1],"fingers":[1,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,73,78]},{"frets":[1,3,2,2],"fingers":[1,3,2,2],"barres":[2],"baseFret":11,"midi":[78,73,76,81]}]},{"key":"Gb","suffix":"m7b5","positions":[{"frets":[2,4,2,3],"fingers":[1,3,1,2],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,66,72]},{"frets":[1,2,1,3],"fingers":[1,2,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,76]},{"frets":[2,2,1,2],"fingers":[2,3,1,4],"baseFret":8,"barres":[],"midi":[76,69,72,78]},{"frets":[1,2,2,2],"fingers":[1,2,3,4],"baseFret":11,"barres":[],"midi":[78,72,76,81]}]},{"key":"Gb","suffix":"m9","positions":[{"frets":[1,1,0,0],"fingers":[1,2,0,0],"baseFret":1,"barres":[],"midi":[68,61,64,69]},{"frets":[2,4,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,64,68,73]},{"frets":[2,4,1,3],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,68,69,76]},{"frets":[1,1,1,3],"fingers":[1,1,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[76,69,73,80]}]},{"key":"Gb","suffix":"m69","positions":[{"frets":[2,3,4,4],"fingers":[1,2,3,4],"baseFret":1,"barres":[],"midi":[69,63,68,73]},{"frets":[2,4,1,2],"fingers":[2,4,1,3],"baseFret":5,"barres":[],"midi":[73,68,69,75]},{"frets":[1,2,2,4],"fingers":[1,2,3,4],"baseFret":8,"barres":[],"midi":[75,69,73,80]},{"frets":[3,3,1,2],"fingers":[3,4,1,2],"baseFret":11,"barres":[],"midi":[80,73,75,81]}]},{"key":"Gb","suffix":"m9b5","positions":[{"frets":[1,0,0,0],"fingers":[1,0,0,0],"baseFret":1,"barres":[],"midi":[68,60,64,69]},{"frets":[2,4,4,3],"fingers":[1,3,4,2],"baseFret":1,"barres":[],"midi":[69,64,68,72]},{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[72,68,69,76]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":8,"midi":[76,69,72,80]}]},{"key":"Gb","suffix":"m11","positions":[{"frets":[2,4,4,2],"fingers":[1,3,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[69,64,68,71]},{"frets":[3,1,2,2],"fingers":[3,1,2,2],"barres":[2],"baseFret":11,"midi":[80,71,76,81]},{"frets":[4,1,2,1],"fingers":[4,1,2,1],"barres":[1],"baseFret":11,"midi":[81,71,76,80]}]},{"key":"Gb","suffix":"mmaj7","positions":[{"frets":[1,4,1,3],"fingers":[1,4,1,3],"barres":[1],"capo":true,"baseFret":2,"midi":[69,65,66,73]},{"frets":[2,2,1,4],"fingers":[2,2,1,4],"barres":[2],"baseFret":5,"midi":[73,66,69,77]},{"frets":[4,2,2,1],"fingers":[4,2,2,1],"barres":[2],"baseFret":8,"midi":[78,69,73,77]},{"frets":[2,1,1,1],"fingers":[2,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[77,69,73,78]}]},{"key":"Gb","suffix":"mmaj7b5","positions":[{"frets":[1,4,1,2],"fingers":[1,4,1,2],"barres":[1],"capo":true,"baseFret":2,"midi":[69,65,66,72]},{"frets":[1,2,1,4],"fingers":[1,2,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[72,66,69,77]},{"frets":[3,2,1,2],"fingers":[4,2,1,3],"baseFret":8,"barres":[],"midi":[77,69,72,78]},{"frets":[4,2,1,1],"fingers":[4,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[78,69,72,77]}]},{"key":"Gb","suffix":"mmaj9","positions":[{"frets":[1,1,1,0],"fingers":[1,2,3,0],"baseFret":1,"barres":[],"midi":[68,61,65,69]},{"frets":[1,4,3,3],"fingers":[1,4,2,3],"baseFret":2,"barres":[],"midi":[69,65,68,73]},{"frets":[2,4,1,4],"fingers":[2,3,1,4],"baseFret":5,"barres":[],"midi":[73,68,69,77]},{"frets":[2,1,1,3],"fingers":[2,1,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[77,69,73,80]}]},{"key":"Gb","suffix":"mmaj11","positions":[{"frets":[1,4,3,1],"fingers":[1,4,3,1],"barres":[1],"capo":true,"baseFret":2,"midi":[69,65,68,71]},{"frets":[3,1,3,2],"fingers":[3,1,4,2],"baseFret":11,"barres":[],"midi":[80,71,77,81]},{"frets":[4,1,3,1],"fingers":[4,1,3,1],"barres":[1],"baseFret":11,"midi":[81,71,77,80]}]},{"key":"Gb","suffix":"add9","positions":[{"frets":[1,1,2,1],"fingers":[1,1,2,1],"barres":[1],"capo":true,"baseFret":1,"midi":[68,61,66,70]},{"frets":[1,4,2,2],"fingers":[1,4,2,2],"barres":[2],"baseFret":3,"midi":[70,66,68,73]},{"frets":[1,3,1,4],"fingers":[1,3,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[73,68,70,78]},{"frets":[3,2,1,3],"fingers":[3,2,1,4],"baseFret":9,"barres":[],"midi":[78,70,73,80]}]},{"key":"Gb","suffix":"madd9","positions":[{"frets":[1,1,2,0],"fingers":[1,2,3,0],"baseFret":1,"barres":[],"midi":[68,61,66,69]},{"frets":[3,1,1,3],"fingers":[3,1,1,4],"barres":[1],"baseFret":9,"midi":[78,69,73,80]},{"frets":[4,3,4,1],"fingers":[3,2,4,1],"baseFret":11,"barres":[],"midi":[81,73,78,80]}]}]}}'
      );
    },
    "0l/t": function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("CkkT")(2);
      i(i.P + i.F * !s("LyE8")([].filter, !0), "Array", {
        filter: function (e) {
          return t(this, e, arguments[1]);
        },
      });
    },
    "0mN4": function (e, r, s) {
      "use strict";
      s("OGtf")("fixed", function (e) {
        return function () {
          return e(this, "tt", "", "");
        };
      });
    },
    "0sh+": function (e, r, s) {
      var i = s("quPj"),
        t = s("vhPU");
      e.exports = function (e, r, s) {
        if (i(r)) throw TypeError("String#" + s + " doesn't accept regex!");
        return String(t(e));
      };
    },
    "16Al": function (e, r, s) {
      "use strict";
      s("f3/d");
      var i = s("WbBG");
      function t() {}
      function a() {}
      (a.resetWarningCache = t),
        (e.exports = function () {
          function e(e, r, s, t, a, f) {
            if (f !== i) {
              var n = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((n.name = "Invariant Violation"), n);
            }
          }
          function r() {
            return e;
          }
          e.isRequired = e;
          var s = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: r,
            element: e,
            elementType: e,
            instanceOf: r,
            node: e,
            objectOf: r,
            oneOf: r,
            oneOfType: r,
            shape: r,
            exact: r,
            checkPropTypes: a,
            resetWarningCache: t,
          };
          return (s.PropTypes = s), s;
        });
    },
    "17x9": function (e, r, s) {
      e.exports = s("16Al")();
    },
    "1MBn": function (e, r, s) {
      var i = s("DVgA"),
        t = s("JiEa"),
        a = s("UqcF");
      e.exports = function (e) {
        var r = i(e),
          s = t.f;
        if (s)
          for (var f, n = s(e), b = a.f, o = 0; n.length > o; )
            b.call(e, (f = n[o++])) && r.push(f);
        return r;
      };
    },
    "1TsA": function (e, r) {
      e.exports = function (e, r) {
        return { value: r, done: !!e };
      };
    },
    "1fHE": function (e, r, s) {
      "use strict";
      (r.__esModule = !0), (r.default = void 0);
      var i = (function () {
        function e() {}
        var r = e.prototype;
        return (
          (r.read = function (e, r) {
            var s = this.getStateKey(e, r);
            try {
              var i = window.sessionStorage.getItem(s);
              return JSON.parse(i);
            } catch (t) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[s]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[s]
                : {};
            }
          }),
          (r.save = function (e, r, s) {
            var i = this.getStateKey(e, r),
              t = JSON.stringify(s);
            try {
              window.sessionStorage.setItem(i, t);
            } catch (a) {
              window && window.___GATSBY_REACT_ROUTER_SCROLL
                ? (window.___GATSBY_REACT_ROUTER_SCROLL[i] = JSON.parse(t))
                : ((window.___GATSBY_REACT_ROUTER_SCROLL = {}),
                  (window.___GATSBY_REACT_ROUTER_SCROLL[i] = JSON.parse(t)));
            }
          }),
          (r.getStateKey = function (e, r) {
            var s = "@@scroll|" + (e.key || e.pathname);
            return null == r ? s : s + "|" + r;
          }),
          e
        );
      })();
      r.default = i;
    },
    "25dN": function (e, r, s) {
      var i = s("XKFU");
      i(i.S, "Object", { is: s("g6HL") });
    },
    "29s/": function (e, r, s) {
      var i = s("WEpk"),
        t = s("5T2Y"),
        a = t["__core-js_shared__"] || (t["__core-js_shared__"] = {});
      (e.exports = function (e, r) {
        return a[e] || (a[e] = void 0 !== r ? r : {});
      })("versions", []).push({
        version: i.version,
        mode: s("uOPS") ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    "2GTP": function (e, r, s) {
      var i = s("eaoh");
      e.exports = function (e, r, s) {
        if ((i(e), void 0 === r)) return e;
        switch (s) {
          case 1:
            return function (s) {
              return e.call(r, s);
            };
          case 2:
            return function (s, i) {
              return e.call(r, s, i);
            };
          case 3:
            return function (s, i, t) {
              return e.call(r, s, i, t);
            };
        }
        return function () {
          return e.apply(r, arguments);
        };
      };
    },
    "2OiF": function (e, r) {
      e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
      };
    },
    "2Spj": function (e, r, s) {
      var i = s("XKFU");
      i(i.P, "Function", { bind: s("8MEG") });
    },
    "2faE": function (e, r, s) {
      var i = s("5K7Z"),
        t = s("eUtF"),
        a = s("G8Mo"),
        f = Object.defineProperty;
      r.f = s("jmDH")
        ? Object.defineProperty
        : function (e, r, s) {
            if ((i(e), (r = a(r, !0)), i(s), t))
              try {
                return f(e, r, s);
              } catch (n) {}
            if ("get" in s || "set" in s)
              throw TypeError("Accessors not supported!");
            return "value" in s && (e[r] = s.value), e;
          };
    },
    "3Lyj": function (e, r, s) {
      var i = s("KroJ");
      e.exports = function (e, r, s) {
        for (var t in r) i(e, t, r[t], s);
        return e;
      };
    },
    "444f": function (e, r, s) {
      "use strict";
      var i = s("TqRt");
      (r.__esModule = !0), (r.default = void 0);
      var t = i(s("PJYZ")),
        a = i(s("VbXa")),
        f = i(s("lSNA")),
        n = i(s("q1tI")),
        b = i(s("LHMV")),
        o = i(s("17x9")),
        u = s("9Xx/"),
        d = i(s("1fHE")),
        m = {
          shouldUpdateScroll: o.default.func,
          children: o.default.element.isRequired,
          location: o.default.object.isRequired,
        },
        g = { scrollBehavior: o.default.object.isRequired },
        c = (function (e) {
          function r(r, s) {
            var i;
            return (
              (i = e.call(this, r, s) || this),
              (0, f.default)(
                (0, t.default)(i),
                "shouldUpdateScroll",
                function (e, r) {
                  var s = i.props.shouldUpdateScroll;
                  return !s || s.call(i.scrollBehavior, e, r);
                }
              ),
              (0, f.default)(
                (0, t.default)(i),
                "registerElement",
                function (e, r, s) {
                  i.scrollBehavior.registerElement(e, r, s, i.getRouterProps());
                }
              ),
              (0, f.default)(
                (0, t.default)(i),
                "unregisterElement",
                function (e) {
                  i.scrollBehavior.unregisterElement(e);
                }
              ),
              (i.scrollBehavior = new b.default({
                addTransitionHook: u.globalHistory.listen,
                stateStorage: new d.default(),
                getCurrentLocation: function () {
                  return i.props.location;
                },
                shouldUpdateScroll: i.shouldUpdateScroll,
              })),
              i
            );
          }
          (0, a.default)(r, e);
          var s = r.prototype;
          return (
            (s.getChildContext = function () {
              return { scrollBehavior: this };
            }),
            (s.componentDidUpdate = function (e) {
              var r = this.props.location;
              if (r !== e.location) {
                var s = { location: e.location };
                window.__navigatingToLink
                  ? (r.action = "PUSH")
                  : (r.action = "POP"),
                  this.scrollBehavior.updateScroll(s, {
                    history: u.globalHistory,
                    location: r,
                  });
              }
            }),
            (s.componentWillUnmount = function () {
              this.scrollBehavior.stop();
            }),
            (s.getRouterProps = function () {
              return {
                location: this.props.location,
                history: u.globalHistory,
              };
            }),
            (s.render = function () {
              return n.default.Children.only(this.props.children);
            }),
            r
          );
        })(n.default.Component);
      (c.propTypes = m), (c.childContextTypes = g);
      var p = c;
      r.default = p;
    },
    "4LiD": function (e, r, s) {
      "use strict";
      var i = s("dyZX"),
        t = s("XKFU"),
        a = s("KroJ"),
        f = s("3Lyj"),
        n = s("Z6vF"),
        b = s("SlkY"),
        o = s("9gX7"),
        u = s("0/R4"),
        d = s("eeVq"),
        m = s("XMVh"),
        g = s("fyDq"),
        c = s("Xbzi");
      e.exports = function (e, r, s, p, F, l) {
        var y = i[e],
          h = y,
          x = F ? "set" : "add",
          k = h && h.prototype,
          v = {},
          w = function (e) {
            var r = k[e];
            a(
              k,
              e,
              "delete" == e
                ? function (e) {
                    return !(l && !u(e)) && r.call(this, 0 === e ? 0 : e);
                  }
                : "has" == e
                ? function (e) {
                    return !(l && !u(e)) && r.call(this, 0 === e ? 0 : e);
                  }
                : "get" == e
                ? function (e) {
                    return l && !u(e) ? void 0 : r.call(this, 0 === e ? 0 : e);
                  }
                : "add" == e
                ? function (e) {
                    return r.call(this, 0 === e ? 0 : e), this;
                  }
                : function (e, s) {
                    return r.call(this, 0 === e ? 0 : e, s), this;
                  }
            );
          };
        if (
          "function" == typeof h &&
          (l ||
            (k.forEach &&
              !d(function () {
                new h().entries().next();
              })))
        ) {
          var j = new h(),
            E = j[x](l ? {} : -0, 1) != j,
            _ = d(function () {
              j.has(1);
            }),
            S = m(function (e) {
              new h(e);
            }),
            A =
              !l &&
              d(function () {
                for (var e = new h(), r = 5; r--; ) e[x](r, r);
                return !e.has(-0);
              });
          S ||
            (((h = r(function (r, s) {
              o(r, h, e);
              var i = c(new y(), r, h);
              return null != s && b(s, F, i[x], i), i;
            })).prototype = k),
            (k.constructor = h)),
            (_ || A) && (w("delete"), w("has"), F && w("get")),
            (A || E) && w(x),
            l && k.clear && delete k.clear;
        } else
          (h = p.getConstructor(r, e, F, x)), f(h.prototype, s), (n.NEED = !0);
        return (
          g(h, e),
          (v[e] = h),
          t(t.G + t.W + t.F * (h != y), v),
          l || p.setStrong(h, e, F),
          h
        );
      };
    },
    "4R4u": function (e, r) {
      e.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );
    },
    "5K7Z": function (e, r, s) {
      var i = s("93I4");
      e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e;
      };
    },
    "5T2Y": function (e, r) {
      var s = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = s);
    },
    "5vMV": function (e, r, s) {
      var i = s("B+OT"),
        t = s("NsO/"),
        a = s("W070")(!1),
        f = s("VVlx")("IE_PROTO");
      e.exports = function (e, r) {
        var s,
          n = t(e),
          b = 0,
          o = [];
        for (s in n) s != f && i(n, s) && o.push(s);
        for (; r.length > b; ) i(n, (s = r[b++])) && (~a(o, s) || o.push(s));
        return o;
      };
    },
    "5yr3": function (e, r, s) {
      "use strict";
      s("bWfx"), s("V+eJ"), s("hHhE");
      var i = (function (e) {
        return (
          (e = e || Object.create(null)),
          {
            on: function (r, s) {
              (e[r] || (e[r] = [])).push(s);
            },
            off: function (r, s) {
              e[r] && e[r].splice(e[r].indexOf(s) >>> 0, 1);
            },
            emit: function (r, s) {
              (e[r] || []).slice().map(function (e) {
                e(s);
              }),
                (e["*"] || []).slice().map(function (e) {
                  e(r, s);
                });
            },
          }
        );
      })();
      r.a = i;
    },
    "69bn": function (e, r, s) {
      var i = s("y3w9"),
        t = s("2OiF"),
        a = s("K0xU")("species");
      e.exports = function (e, r) {
        var s,
          f = i(e).constructor;
        return void 0 === f || null == (s = i(f)[a]) ? r : t(s);
      };
    },
    "6DQo": function (e, r, s) {
      "use strict";
      s("pIFo");
      e.exports = function () {};
    },
    "6FMO": function (e, r, s) {
      var i = s("0/R4"),
        t = s("EWmC"),
        a = s("K0xU")("species");
      e.exports = function (e) {
        var r;
        return (
          t(e) &&
            ("function" != typeof (r = e.constructor) ||
              (r !== Array && !t(r.prototype)) ||
              (r = void 0),
            i(r) && null === (r = r[a]) && (r = void 0)),
          void 0 === r ? Array : r
        );
      };
    },
    "7hJ6": function (e, r, s) {
      "use strict";
      var i = s("TqRt"),
        t = i(s("444f")),
        a = i(s("IVHb"));
      (r.ScrollContainer = a.default), (r.ScrollContext = t.default);
    },
    "8+KV": function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("CkkT")(0),
        a = s("LyE8")([].forEach, !0);
      i(i.P + i.F * !a, "Array", {
        forEach: function (e) {
          return t(this, e, arguments[1]);
        },
      });
    },
    "8MEG": function (e, r, s) {
      "use strict";
      var i = s("2OiF"),
        t = s("0/R4"),
        a = s("MfQN"),
        f = [].slice,
        n = {},
        b = function (e, r, s) {
          if (!(r in n)) {
            for (var i = [], t = 0; t < r; t++) i[t] = "a[" + t + "]";
            n[r] = Function("F,a", "return new F(" + i.join(",") + ")");
          }
          return n[r](e, s);
        };
      e.exports =
        Function.bind ||
        function (e) {
          var r = i(this),
            s = f.call(arguments, 1),
            n = function () {
              var i = s.concat(f.call(arguments));
              return this instanceof n ? b(r, i.length, i) : a(r, i, e);
            };
          return t(r.prototype) && (n.prototype = r.prototype), n;
        };
    },
    "8OQS": function (e, r) {
      e.exports = function (e, r) {
        if (null == e) return {};
        var s,
          i,
          t = {},
          a = Object.keys(e);
        for (i = 0; i < a.length; i++)
          (s = a[i]), r.indexOf(s) >= 0 || (t[s] = e[s]);
        return t;
      };
    },
    "8Y+z": function (e, r, s) {
      "use strict";
      (r.__esModule = !0),
        (r.default = function (e) {
          return e === e.window
            ? e
            : 9 === e.nodeType && (e.defaultView || e.parentWindow);
        }),
        (e.exports = r.default);
    },
    "8a7r": function (e, r, s) {
      "use strict";
      var i = s("hswa"),
        t = s("RjD/");
      e.exports = function (e, r, s) {
        r in e ? i.f(e, r, t(0, s)) : (e[r] = s);
      };
    },
    "91GP": function (e, r, s) {
      var i = s("XKFU");
      i(i.S + i.F, "Object", { assign: s("czNK") });
    },
    "93I4": function (e, r) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    "94VI": function (e, r) {
      r.polyfill = function (e) {
        return e;
      };
    },
    "9AAn": function (e, r, s) {
      "use strict";
      var i = s("wmvG"),
        t = s("s5qY");
      e.exports = s("4LiD")(
        "Map",
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function (e) {
            var r = i.getEntry(t(this, "Map"), e);
            return r && r.v;
          },
          set: function (e, r) {
            return i.def(t(this, "Map"), 0 === e ? 0 : e, r);
          },
        },
        i,
        !0
      );
    },
    "9VmF": function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("ne8i"),
        a = s("0sh+"),
        f = "".startsWith;
      i(i.P + i.F * s("UUeW")("startsWith"), "String", {
        startsWith: function (e) {
          var r = a(this, e, "startsWith"),
            s = t(
              Math.min(arguments.length > 1 ? arguments[1] : void 0, r.length)
            ),
            i = String(e);
          return f ? f.call(r, i, s) : r.slice(s, s + i.length) === i;
        },
      });
    },
    "9Xx/": function (e, r, s) {
      "use strict";
      s.r(r),
        s.d(r, "globalHistory", function () {
          return b;
        }),
        s.d(r, "navigate", function () {
          return o;
        }),
        s.d(r, "createHistory", function () {
          return a;
        }),
        s.d(r, "createMemorySource", function () {
          return f;
        });
      s("KKXr"),
        s("8+KV"),
        s("VRzm"),
        s("Btvt"),
        s("eM6i"),
        s("pIFo"),
        s("0l/t"),
        s("91GP");
      var i =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var s = arguments[r];
              for (var i in s)
                Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
            }
            return e;
          },
        t = function (e) {
          return i({}, e.location, {
            state: e.history.state,
            key: (e.history.state && e.history.state.key) || "initial",
          });
        },
        a = function (e, r) {
          var s = [],
            a = t(e),
            f = !1,
            n = function () {};
          return {
            get location() {
              return a;
            },
            get transitioning() {
              return f;
            },
            _onTransitionComplete: function () {
              (f = !1), n();
            },
            listen: function (r) {
              s.push(r);
              var i = function () {
                (a = t(e)), r({ location: a, action: "POP" });
              };
              return (
                e.addEventListener("popstate", i),
                function () {
                  e.removeEventListener("popstate", i),
                    (s = s.filter(function (e) {
                      return e !== r;
                    }));
                }
              );
            },
            navigate: function (r) {
              var b =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                o = b.state,
                u = b.replace,
                d = void 0 !== u && u;
              o = i({}, o, { key: Date.now() + "" });
              try {
                f || d
                  ? e.history.replaceState(o, null, r)
                  : e.history.pushState(o, null, r);
              } catch (g) {
                e.location[d ? "replace" : "assign"](r);
              }
              (a = t(e)), (f = !0);
              var m = new Promise(function (e) {
                return (n = e);
              });
              return (
                s.forEach(function (e) {
                  return e({ location: a, action: "PUSH" });
                }),
                m
              );
            },
          };
        },
        f = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            r = 0,
            s = [{ pathname: e, search: "" }],
            i = [];
          return {
            get location() {
              return s[r];
            },
            addEventListener: function (e, r) {},
            removeEventListener: function (e, r) {},
            history: {
              get entries() {
                return s;
              },
              get index() {
                return r;
              },
              get state() {
                return i[r];
              },
              pushState: function (e, t, a) {
                var f = a.split("?"),
                  n = f[0],
                  b = f[1],
                  o = void 0 === b ? "" : b;
                r++, s.push({ pathname: n, search: o }), i.push(e);
              },
              replaceState: function (e, t, a) {
                var f = a.split("?"),
                  n = f[0],
                  b = f[1],
                  o = void 0 === b ? "" : b;
                (s[r] = { pathname: n, search: o }), (i[r] = e);
              },
            },
          };
        },
        n = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        b = a(n ? window : f()),
        o = b.navigate;
    },
    "9eSz": function (e, r, s) {
      "use strict";
      s("rGqo"), s("yt8O"), s("Btvt"), s("XfO3"), s("EK0E"), s("0mN4");
      var i = s("TqRt");
      (r.__esModule = !0), (r.default = void 0);
      var t,
        a = i(s("PJYZ")),
        f = i(s("VbXa")),
        n = i(s("8OQS")),
        b = i(s("pVnL")),
        o = i(s("q1tI")),
        u = i(s("17x9")),
        d = function (e) {
          var r = (0, b.default)({}, e),
            s = r.resolutions,
            i = r.sizes,
            t = r.critical;
          return (
            s && ((r.fixed = s), delete r.resolutions),
            i && ((r.fluid = i), delete r.sizes),
            t && (r.loading = "eager"),
            r.fluid && (r.fluid = x([].concat(r.fluid))),
            r.fixed && (r.fixed = x([].concat(r.fixed))),
            r
          );
        },
        m = function (e) {
          var r = e.fluid,
            s = e.fixed;
          return ((r && r[0]) || (s && s[0])).src;
        },
        g = Object.create({}),
        c = function (e) {
          var r = d(e),
            s = m(r);
          return g[s] || !1;
        },
        p =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        F = "undefined" != typeof window,
        l = F && window.IntersectionObserver,
        y = new WeakMap();
      function h(e) {
        return e.map(function (e) {
          var r = e.src,
            s = e.srcSet,
            i = e.srcSetWebp,
            t = e.media,
            a = e.sizes;
          return o.default.createElement(
            o.default.Fragment,
            { key: r },
            i &&
              o.default.createElement("source", {
                type: "image/webp",
                media: t,
                srcSet: i,
                sizes: a,
              }),
            o.default.createElement("source", { media: t, srcSet: s, sizes: a })
          );
        });
      }
      function x(e) {
        var r = [],
          s = [];
        return (
          e.forEach(function (e) {
            return (e.media ? r : s).push(e);
          }),
          [].concat(r, s)
        );
      }
      function k(e) {
        return e.map(function (e) {
          var r = e.src,
            s = e.media,
            i = e.tracedSVG;
          return o.default.createElement("source", {
            key: r,
            media: s,
            srcSet: i,
          });
        });
      }
      function v(e) {
        return e.map(function (e) {
          var r = e.src,
            s = e.media,
            i = e.base64;
          return o.default.createElement("source", {
            key: r,
            media: s,
            srcSet: i,
          });
        });
      }
      function w(e, r) {
        var s = e.srcSet,
          i = e.srcSetWebp,
          t = e.media,
          a = e.sizes;
        return (
          "<source " +
          (r ? "type='image/webp' " : "") +
          (t ? 'media="' + t + '" ' : "") +
          'srcset="' +
          (r ? i : s) +
          '" ' +
          (a ? 'sizes="' + a + '" ' : "") +
          "/>"
        );
      }
      var j = function (e, r) {
          var s =
            (void 0 === t &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (t = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (y.has(e.target)) {
                      var r = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (t.unobserve(e.target), y.delete(e.target), r());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            t);
          return (
            s && (s.observe(e), y.set(e, r)),
            function () {
              s.unobserve(e), y.delete(e);
            }
          );
        },
        E = function (e) {
          var r = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            s = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            i = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            t = e.title ? 'title="' + e.title + '" ' : "",
            a = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            f = e.width ? 'width="' + e.width + '" ' : "",
            n = e.height ? 'height="' + e.height + '" ' : "",
            b = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            o = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? w(e, !0) : "") + w(e);
              })
              .join("") +
            "<img " +
            o +
            f +
            n +
            s +
            i +
            r +
            a +
            t +
            b +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        _ = function (e) {
          var r = e.src,
            s = e.imageVariants,
            i = e.generateSources,
            t = e.spreadProps,
            a = o.default.createElement(S, (0, b.default)({ src: r }, t));
          return s.length > 1
            ? o.default.createElement("picture", null, i(s), a)
            : a;
        },
        S = o.default.forwardRef(function (e, r) {
          var s = e.sizes,
            i = e.srcSet,
            t = e.src,
            a = e.style,
            f = e.onLoad,
            u = e.onError,
            d = e.onClick,
            m = e.loading,
            g = e.draggable,
            c = (0, n.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "onClick",
              "loading",
              "draggable",
            ]);
          return o.default.createElement(
            "img",
            (0, b.default)({ sizes: s, srcSet: i, src: t }, c, {
              onLoad: f,
              onError: u,
              onClick: d,
              ref: r,
              loading: m,
              draggable: g,
              style: (0, b.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                },
                a
              ),
            })
          );
        });
      S.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onClick: u.default.func,
        onLoad: u.default.func,
      };
      var A = (function (e) {
        function r(r) {
          var s;
          ((s = e.call(this, r) || this).seenBefore = F && c(r)),
            (s.isCritical = "eager" === r.loading || r.critical),
            (s.addNoScript = !(s.isCritical && !r.fadeIn)),
            (s.useIOSupport = !p && l && !s.isCritical && !s.seenBefore);
          var i = s.isCritical || (F && (p || !s.useIOSupport));
          return (
            (s.state = {
              isVisible: i,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !s.seenBefore && r.fadeIn,
            }),
            (s.imageRef = o.default.createRef()),
            (s.handleImageLoaded = s.handleImageLoaded.bind((0, a.default)(s))),
            (s.handleRef = s.handleRef.bind((0, a.default)(s))),
            s
          );
        }
        (0, f.default)(r, e);
        var s = r.prototype;
        return (
          (s.componentDidMount = function () {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: c(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (s.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (s.handleRef = function (e) {
            var r = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = j(e, function () {
                var e = c(r.props);
                r.state.isVisible ||
                  "function" != typeof r.props.onStartLoad ||
                  r.props.onStartLoad({ wasCached: e }),
                  r.setState({ isVisible: !0 }, function () {
                    return r.setState({
                      imgLoaded: e,
                      imgCached: !!r.imageRef.current.currentSrc,
                    });
                  });
              }));
          }),
          (s.handleImageLoaded = function () {
            var e, r, s;
            (e = this.props),
              (r = d(e)),
              (s = m(r)),
              (g[s] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (s.render = function () {
            var e = d(this.props),
              r = e.title,
              s = e.alt,
              i = e.className,
              t = e.style,
              a = void 0 === t ? {} : t,
              f = e.imgStyle,
              n = void 0 === f ? {} : f,
              u = e.placeholderStyle,
              m = void 0 === u ? {} : u,
              g = e.placeholderClassName,
              c = e.fluid,
              p = e.fixed,
              F = e.backgroundColor,
              l = e.durationFadeIn,
              y = e.Tag,
              x = e.itemProp,
              w = e.loading,
              j = e.draggable,
              A = !1 === this.state.fadeIn || this.state.imgLoaded,
              C = !0 === this.state.fadeIn && !this.state.imgCached,
              O = (0, b.default)(
                {
                  opacity: A ? 1 : 0,
                  transition: C ? "opacity " + l + "ms" : "none",
                },
                n
              ),
              P = "boolean" == typeof F ? "lightgray" : F,
              D = { transitionDelay: l + "ms" },
              R = (0, b.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                C && D,
                {},
                n,
                {},
                m
              ),
              B = {
                title: r,
                alt: this.state.isVisible ? "" : s,
                style: R,
                className: g,
                itemProp: x,
              };
            if (c) {
              var T = c,
                G = T[0];
              return o.default.createElement(
                y,
                {
                  className: (i || "") + " gatsby-image-wrapper",
                  style: (0, b.default)(
                    { position: "relative", overflow: "hidden" },
                    a
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(G.srcSet),
                },
                o.default.createElement(y, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / G.aspectRatio + "%",
                  },
                }),
                P &&
                  o.default.createElement(y, {
                    title: r,
                    style: (0, b.default)(
                      {
                        backgroundColor: P,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      C && D
                    ),
                  }),
                G.base64 &&
                  o.default.createElement(_, {
                    src: G.base64,
                    spreadProps: B,
                    imageVariants: T,
                    generateSources: v,
                  }),
                G.tracedSVG &&
                  o.default.createElement(_, {
                    src: G.tracedSVG,
                    spreadProps: B,
                    imageVariants: T,
                    generateSources: k,
                  }),
                this.state.isVisible &&
                  o.default.createElement(
                    "picture",
                    null,
                    h(T),
                    o.default.createElement(S, {
                      alt: s,
                      title: r,
                      sizes: G.sizes,
                      src: G.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: G.srcSet,
                      style: O,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      onClick: this.props.onClick,
                      itemProp: x,
                      loading: w,
                      draggable: j,
                    })
                  ),
                this.addNoScript &&
                  o.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: E(
                        (0, b.default)({ alt: s, title: r, loading: w }, G, {
                          imageVariants: T,
                        })
                      ),
                    },
                  })
              );
            }
            if (p) {
              var L = p,
                I = L[0],
                M = (0, b.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: I.width,
                    height: I.height,
                  },
                  a
                );
              return (
                "inherit" === a.display && delete M.display,
                o.default.createElement(
                  y,
                  {
                    className: (i || "") + " gatsby-image-wrapper",
                    style: M,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(I.srcSet),
                  },
                  P &&
                    o.default.createElement(y, {
                      title: r,
                      style: (0, b.default)(
                        {
                          backgroundColor: P,
                          width: I.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: I.height,
                        },
                        C && D
                      ),
                    }),
                  I.base64 &&
                    o.default.createElement(_, {
                      src: I.base64,
                      spreadProps: B,
                      imageVariants: L,
                      generateSources: v,
                    }),
                  I.tracedSVG &&
                    o.default.createElement(_, {
                      src: I.tracedSVG,
                      spreadProps: B,
                      imageVariants: L,
                      generateSources: k,
                    }),
                  this.state.isVisible &&
                    o.default.createElement(
                      "picture",
                      null,
                      h(L),
                      o.default.createElement(S, {
                        alt: s,
                        title: r,
                        width: I.width,
                        height: I.height,
                        sizes: I.sizes,
                        src: I.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: I.srcSet,
                        style: O,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        onClick: this.props.onClick,
                        itemProp: x,
                        loading: w,
                        draggable: j,
                      })
                    ),
                  this.addNoScript &&
                    o.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: E(
                          (0, b.default)({ alt: s, title: r, loading: w }, I, {
                            imageVariants: L,
                          })
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          r
        );
      })(o.default.Component);
      A.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var C = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        O = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        });
      A.propTypes = {
        resolutions: C,
        sizes: O,
        fixed: u.default.oneOfType([C, u.default.arrayOf(C)]),
        fluid: u.default.oneOfType([O, u.default.arrayOf(O)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onClick: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool,
      };
      var P = A;
      r.default = P;
    },
    "9gX7": function (e, r) {
      e.exports = function (e, r, s, i) {
        if (!(e instanceof r) || (void 0 !== i && i in e))
          throw TypeError(s + ": incorrect invocation!");
        return e;
      };
    },
    "9hXx": function (e, r, s) {
      "use strict";
      s("9VmF"), s("dRSK"), (r.__esModule = !0), (r.default = void 0);
      r.default = function (e, r) {
        if (!Array.isArray(r)) return "manifest.webmanifest";
        var s = r.find(function (r) {
          return e.startsWith(r.start_url);
        });
        return s
          ? "manifest_" + s.lang + ".webmanifest"
          : "manifest.webmanifest";
      };
    },
    A5AN: function (e, r, s) {
      "use strict";
      var i = s("AvRE")(!0);
      e.exports = function (e, r, s) {
        return r + (s ? i(e, r).length : 1);
      };
    },
    Afnz: function (e, r, s) {
      "use strict";
      var i = s("LQAc"),
        t = s("XKFU"),
        a = s("KroJ"),
        f = s("Mukb"),
        n = s("hPIQ"),
        b = s("QaDb"),
        o = s("fyDq"),
        u = s("OP3Y"),
        d = s("K0xU")("iterator"),
        m = !([].keys && "next" in [].keys()),
        g = function () {
          return this;
        };
      e.exports = function (e, r, s, c, p, F, l) {
        b(s, r, c);
        var y,
          h,
          x,
          k = function (e) {
            if (!m && e in E) return E[e];
            switch (e) {
              case "keys":
              case "values":
                return function () {
                  return new s(this, e);
                };
            }
            return function () {
              return new s(this, e);
            };
          },
          v = r + " Iterator",
          w = "values" == p,
          j = !1,
          E = e.prototype,
          _ = E[d] || E["@@iterator"] || (p && E[p]),
          S = _ || k(p),
          A = p ? (w ? k("entries") : S) : void 0,
          C = ("Array" == r && E.entries) || _;
        if (
          (C &&
            (x = u(C.call(new e()))) !== Object.prototype &&
            x.next &&
            (o(x, v, !0), i || "function" == typeof x[d] || f(x, d, g)),
          w &&
            _ &&
            "values" !== _.name &&
            ((j = !0),
            (S = function () {
              return _.call(this);
            })),
          (i && !l) || (!m && !j && E[d]) || f(E, d, S),
          (n[r] = S),
          (n[v] = g),
          p)
        )
          if (
            ((y = {
              values: w ? S : k("values"),
              keys: F ? S : k("keys"),
              entries: A,
            }),
            l)
          )
            for (h in y) h in E || a(E, h, y[h]);
          else t(t.P + t.F * (m || j), r, y);
        return y;
      };
    },
    AvRE: function (e, r, s) {
      var i = s("RYi7"),
        t = s("vhPU");
      e.exports = function (e) {
        return function (r, s) {
          var a,
            f,
            n = String(t(r)),
            b = i(s),
            o = n.length;
          return b < 0 || b >= o
            ? e
              ? ""
              : void 0
            : (a = n.charCodeAt(b)) < 55296 ||
              a > 56319 ||
              b + 1 === o ||
              (f = n.charCodeAt(b + 1)) < 56320 ||
              f > 57343
            ? e
              ? n.charAt(b)
              : a
            : e
            ? n.slice(b, b + 2)
            : f - 56320 + ((a - 55296) << 10) + 65536;
        };
      };
    },
    "B+OT": function (e, r) {
      var s = {}.hasOwnProperty;
      e.exports = function (e, r) {
        return s.call(e, r);
      };
    },
    Bp9Y: function (e, r, s) {
      "use strict";
      (r.__esModule = !0), (r.default = void 0);
      var i = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      (r.default = i), (e.exports = r.default);
    },
    Btvt: function (e, r, s) {
      "use strict";
      var i = s("I8a+"),
        t = {};
      (t[s("K0xU")("toStringTag")] = "z"),
        t + "" != "[object z]" &&
          s("KroJ")(
            Object.prototype,
            "toString",
            function () {
              return "[object " + i(this) + "]";
            },
            !0
          );
    },
    "C/va": function (e, r, s) {
      "use strict";
      var i = s("y3w9");
      e.exports = function () {
        var e = i(this),
          r = "";
        return (
          e.global && (r += "g"),
          e.ignoreCase && (r += "i"),
          e.multiline && (r += "m"),
          e.unicode && (r += "u"),
          e.sticky && (r += "y"),
          r
        );
      };
    },
    CkkT: function (e, r, s) {
      var i = s("m0Pp"),
        t = s("Ymqv"),
        a = s("S/j/"),
        f = s("ne8i"),
        n = s("zRwo");
      e.exports = function (e, r) {
        var s = 1 == e,
          b = 2 == e,
          o = 3 == e,
          u = 4 == e,
          d = 6 == e,
          m = 5 == e || d,
          g = r || n;
        return function (r, n, c) {
          for (
            var p,
              F,
              l = a(r),
              y = t(l),
              h = i(n, c, 3),
              x = f(y.length),
              k = 0,
              v = s ? g(r, x) : b ? g(r, 0) : void 0;
            x > k;
            k++
          )
            if ((m || k in y) && ((F = h((p = y[k]), k, l)), e))
              if (s) v[k] = F;
              else if (F)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return p;
                  case 6:
                    return k;
                  case 2:
                    v.push(p);
                }
              else if (u) return !1;
          return d ? -1 : o || u ? u : v;
        };
      };
    },
    D8kY: function (e, r, s) {
      var i = s("Ojgd"),
        t = Math.max,
        a = Math.min;
      e.exports = function (e, r) {
        return (e = i(e)) < 0 ? t(e + r, 0) : a(e, r);
      };
    },
    DNiP: function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("eyMr");
      i(i.P + i.F * !s("LyE8")([].reduce, !0), "Array", {
        reduce: function (e) {
          return t(this, e, arguments.length, arguments[1], !1);
        },
      });
    },
    DVgA: function (e, r, s) {
      var i = s("zhAb"),
        t = s("4R4u");
      e.exports =
        Object.keys ||
        function (e) {
          return i(e, t);
        };
    },
    EK0E: function (e, r, s) {
      "use strict";
      var i,
        t = s("dyZX"),
        a = s("CkkT")(0),
        f = s("KroJ"),
        n = s("Z6vF"),
        b = s("czNK"),
        o = s("ZD67"),
        u = s("0/R4"),
        d = s("s5qY"),
        m = s("s5qY"),
        g = !t.ActiveXObject && "ActiveXObject" in t,
        c = n.getWeak,
        p = Object.isExtensible,
        F = o.ufstore,
        l = function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        y = {
          get: function (e) {
            if (u(e)) {
              var r = c(e);
              return !0 === r
                ? F(d(this, "WeakMap")).get(e)
                : r
                ? r[this._i]
                : void 0;
            }
          },
          set: function (e, r) {
            return o.def(d(this, "WeakMap"), e, r);
          },
        },
        h = (e.exports = s("4LiD")("WeakMap", l, y, o, !0, !0));
      m &&
        g &&
        (b((i = o.getConstructor(l, "WeakMap")).prototype, y),
        (n.NEED = !0),
        a(["delete", "has", "get", "set"], function (e) {
          var r = h.prototype,
            s = r[e];
          f(r, e, function (r, t) {
            if (u(r) && !p(r)) {
              this._f || (this._f = new i());
              var a = this._f[e](r, t);
              return "set" == e ? this : a;
            }
            return s.call(this, r, t);
          });
        }));
    },
    EWmC: function (e, r, s) {
      var i = s("LZWt");
      e.exports =
        Array.isArray ||
        function (e) {
          return "Array" == i(e);
        };
    },
    EemH: function (e, r, s) {
      var i = s("UqcF"),
        t = s("RjD/"),
        a = s("aCFj"),
        f = s("apmT"),
        n = s("aagx"),
        b = s("xpql"),
        o = Object.getOwnPropertyDescriptor;
      r.f = s("nh4g")
        ? o
        : function (e, r) {
            if (((e = a(e)), (r = f(r, !0)), b))
              try {
                return o(e, r);
              } catch (s) {}
            if (n(e, r)) return t(!i.f.call(e, r), e[r]);
          };
    },
    FJW5: function (e, r, s) {
      var i = s("hswa"),
        t = s("y3w9"),
        a = s("DVgA");
      e.exports = s("nh4g")
        ? Object.defineProperties
        : function (e, r) {
            t(e);
            for (var s, f = a(r), n = f.length, b = 0; n > b; )
              i.f(e, (s = f[b++]), r[s]);
            return e;
          };
    },
    FpHa: function (e, r) {
      e.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );
    },
    G8Mo: function (e, r, s) {
      var i = s("93I4");
      e.exports = function (e, r) {
        if (!i(e)) return e;
        var s, t;
        if (r && "function" == typeof (s = e.toString) && !i((t = s.call(e))))
          return t;
        if ("function" == typeof (s = e.valueOf) && !i((t = s.call(e))))
          return t;
        if (!r && "function" == typeof (s = e.toString) && !i((t = s.call(e))))
          return t;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    GZEu: function (e, r, s) {
      var i,
        t,
        a,
        f = s("m0Pp"),
        n = s("MfQN"),
        b = s("+rLv"),
        o = s("Iw71"),
        u = s("dyZX"),
        d = u.process,
        m = u.setImmediate,
        g = u.clearImmediate,
        c = u.MessageChannel,
        p = u.Dispatch,
        F = 0,
        l = {},
        y = function () {
          var e = +this;
          if (l.hasOwnProperty(e)) {
            var r = l[e];
            delete l[e], r();
          }
        },
        h = function (e) {
          y.call(e.data);
        };
      (m && g) ||
        ((m = function (e) {
          for (var r = [], s = 1; arguments.length > s; )
            r.push(arguments[s++]);
          return (
            (l[++F] = function () {
              n("function" == typeof e ? e : Function(e), r);
            }),
            i(F),
            F
          );
        }),
        (g = function (e) {
          delete l[e];
        }),
        "process" == s("LZWt")(d)
          ? (i = function (e) {
              d.nextTick(f(y, e, 1));
            })
          : p && p.now
          ? (i = function (e) {
              p.now(f(y, e, 1));
            })
          : c
          ? ((a = (t = new c()).port2),
            (t.port1.onmessage = h),
            (i = f(a.postMessage, a, 1)))
          : u.addEventListener &&
            "function" == typeof postMessage &&
            !u.importScripts
          ? ((i = function (e) {
              u.postMessage(e + "", "*");
            }),
            u.addEventListener("message", h, !1))
          : (i =
              "onreadystatechange" in o("script")
                ? function (e) {
                    b.appendChild(o("script")).onreadystatechange =
                      function () {
                        b.removeChild(this), y.call(e);
                      };
                  }
                : function (e) {
                    setTimeout(f(y, e, 1), 0);
                  })),
        (e.exports = { set: m, clear: g });
    },
    GddB: function (e, r, s) {
      "use strict";
      s.r(r);
      s("OEcT");
      var i = s("q1tI"),
        t = s.n(i),
        a =
          (s("pIFo"),
          s("rGqo"),
          s("yt8O"),
          s("Btvt"),
          s("RW0V"),
          s("91GP"),
          s("IRj2")),
        f = (s("0mN4"), s("dbLC")),
        n = s("Wbzz"),
        b = s("9eSz"),
        o = s.n(b),
        u = function (e) {
          var r = e.siteTitle,
            s = e.instrument;
          return t.a.createElement(n.StaticQuery, {
            query: "1924833158",
            render: function (e) {
              return t.a.createElement(
                "header",
                { className: "text-gray-800" },
                t.a.createElement(
                  "div",
                  {
                    className: "flex items-center justify-between mx-auto px-4",
                  },
                  t.a.createElement(
                    "h1",
                    {
                      className:
                        "flex-grow hidden sm:block sm:text-3xl md:text-4xl lg:text-5xl font-bold",
                    },
                    t.a.createElement(
                      n.Link,
                      { to: "/", style: { textDecoration: "none" } },
                      r
                    )
                  ),
                  t.a.createElement(
                    "ul",
                    { className: "p-4 flex" },
                    t.a.createElement(
                      "li",
                      { className: "mr-3" },
                      t.a.createElement(
                        n.Link,
                        {
                          className:
                            ("guitar" === s
                              ? "bg-blue-500 text-white hover:bg-blue-500 hover:border-blue-200 "
                              : "border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 ") +
                            "inline-block border font-bold rounded py-1 px-3",
                          to: "/guitar",
                        },
                        "Guitar"
                      )
                    ),
                    t.a.createElement(
                      "li",
                      { className: "mr-3" },
                      t.a.createElement(
                        n.Link,
                        {
                          className:
                            ("ukulele" === s
                              ? "bg-blue-500 text-white hover:bg-blue-500 hover:border-blue-200 "
                              : "border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 ") +
                            "inline-block border font-bold rounded py-1 px-3",
                          to: "/ukulele",
                        },
                        "Ukulele"
                      )
                    )
                  ),
                  t.a.createElement(
                    "div",
                    {
                      className:
                        "max-w-sm mx-auto flex p-1 pb-0  hover:bg-gray-100 rounded-lg border shadow-xs",
                    },
                    t.a.createElement(
                      "a",
                      { href: "http://github.com/tombatossals/react-chords" },
                      t.a.createElement(o.a, {
                        style: { margin: 0 },
                        fixed: e.file.childImageSharp.fixed,
                      }),
                      " "
                    ),
                    " "
                  ),
                  " "
                ),
                " "
              );
            },
            data: f,
          });
        };
      u.defaultProps = { siteTitle: "" };
      var d = u,
        m = function (e) {
          var r = e.instrument,
            s = e.keys,
            i = e.selectedKey;
          return t.a.createElement(
            "ul",
            { className: "pl-3 flex flex-wrap" },
            t.a.createElement("li", { className: "font-bold p-1" }, "Keys:"),
            s.map(function (e) {
              return t.a.createElement(
                "li",
                { key: e, className: "mr-3" },
                t.a.createElement(
                  n.Link,
                  {
                    className:
                      (e === i.replace("sharp", "#") ||
                      ("All" === e && "" === i)
                        ? "bg-blue-500 text-white hover:bg-blue-500 hover:border-blue-200 "
                        : "border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 ") +
                      "inline-block border font-bold rounded py-1 px-3",
                    to:
                      "All" === e
                        ? "/" + r
                        : "/" + r + "/" + e.replace("#", "sharp"),
                  },
                  e
                )
              );
            })
          );
        },
        g = function (e) {
          var r = e.instrument,
            s = e.selectedKey,
            i = e.suffixes,
            a = e.selectedSuffix;
          return (
            s &&
            t.a.createElement(
              "ul",
              { className: "pl-3" },
              t.a.createElement(
                "li",
                { className: "p-1 text-xl" },
                "Suffixes:"
              ),
              i.map(function (e) {
                return t.a.createElement(
                  "li",
                  { key: e, className: "mr-3 block" },
                  t.a.createElement(
                    n.Link,
                    {
                      className:
                        (e === a.replace("sharp", "#").replace("_", "/")
                          ? "text-blue-500 font-bold hover:text-grey-800 "
                          : "text-grey-800 hover:text-blue-500 ") + "py-1 px-3",
                      to:
                        "/" +
                        r +
                        "/" +
                        s.replace("#", "sharp") +
                        "/" +
                        e.replace("#", "sharp").replace("/", "_"),
                    },
                    s.replace("sharp", "#"),
                    t.a.createElement("span", { className: "text-sm" }, e)
                  )
                );
              })
            )
          );
        },
        c = (s("wmEu"), s("ISVb")),
        p = s("0dz0"),
        F = function (e) {
          return e.map(function (e) {
            return e.suffix;
          });
        },
        l = function (e) {
          return Object.assign({}, e, { positions: [e.positions[0]] });
        },
        y = function (e) {
          var r = e.children,
            s = e.pageContext,
            i = a.data,
            f = { guitar: c, ukulele: p },
            n = s.instrument ? s.instrument : "guitar",
            b = s.key ? s.key.replace("#", "sharp") : "",
            o = s.suffix ? s.suffix.replace("#", "sharp") : "",
            u = (function (e, r, s) {
              var i = [];
              if (r || s)
                if (s) {
                  if (r)
                    return e[r].filter(function (e) {
                      return e.suffix === s;
                    });
                  Object.keys(e).map(function (r) {
                    return e[r]
                      .filter(function (e) {
                        return e.suffix === s;
                      })
                      .map(function (e) {
                        return i.push(l(e));
                      });
                  });
                } else
                  e[r].map(function (e) {
                    return i.push(l(e));
                  });
              else
                Object.keys(e).map(function (r) {
                  return e[r].map(function (e) {
                    return i.push(l(e));
                  });
                });
              return i;
            })(f[n].chords, b, o.replace("sharp", "#")),
            y = Object.assign(f[n].main, { tunings: f[n].tunings }),
            h = !b && !o,
            x = s.key && s.suffix;
          return t.a.createElement(
            "div",
            { className: "container mx-auto text-gray-700" },
            t.a.createElement(d, {
              siteTitle: i.site.siteMetadata.title,
              instrument: n,
            }),
            t.a.createElement(m, {
              keys: ["All"].concat(f[n].keys),
              instrument: n,
              selectedKey: b,
            }),
            t.a.createElement(
              "main",
              { className: "flex mb-4 content-center" },
              b &&
                t.a.createElement(
                  "div",
                  { className: "w-1/8 hidden sm:block" },
                  t.a.createElement(g, {
                    selectedKey: b,
                    instrument: n,
                    suffixes: F(f[n].chords[b]),
                    selectedSuffix: o,
                  })
                ),
              t.a.createElement(
                "div",
                { className: b ? "w-7/8" : "w-8/8" },
                t.a.createElement(
                  "div",
                  { className: h ? "litegrid" : "maingrid" },
                  t.a.cloneElement(r, {
                    chords: u,
                    instrument: y,
                    lite: h,
                    svg: x,
                  })
                )
              )
            )
          );
        };
      s.d(r, "wrapPageElement", function () {
        return h;
      });
      var h = function (e) {
        var r = e.element,
          s = e.props;
        return t.a.createElement(y, s, r);
      };
    },
    H6hf: function (e, r, s) {
      var i = s("y3w9");
      e.exports = function (e, r, s, t) {
        try {
          return t ? r(i(s)[0], s[1]) : r(s);
        } catch (f) {
          var a = e.return;
          throw (void 0 !== a && i(a.call(e)), f);
        }
      };
    },
    "HAE/": function (e, r, s) {
      var i = s("XKFU");
      i(i.S + i.F * !s("nh4g"), "Object", { defineProperty: s("hswa").f });
    },
    HEwt: function (e, r, s) {
      "use strict";
      var i = s("m0Pp"),
        t = s("XKFU"),
        a = s("S/j/"),
        f = s("H6hf"),
        n = s("M6Qj"),
        b = s("ne8i"),
        o = s("8a7r"),
        u = s("J+6e");
      t(
        t.S +
          t.F *
            !s("XMVh")(function (e) {
              Array.from(e);
            }),
        "Array",
        {
          from: function (e) {
            var r,
              s,
              t,
              d,
              m = a(e),
              g = "function" == typeof this ? this : Array,
              c = arguments.length,
              p = c > 1 ? arguments[1] : void 0,
              F = void 0 !== p,
              l = 0,
              y = u(m);
            if (
              (F && (p = i(p, c > 2 ? arguments[2] : void 0, 2)),
              null == y || (g == Array && n(y)))
            )
              for (s = new g((r = b(m.length))); r > l; l++)
                o(s, l, F ? p(m[l], l) : m[l]);
            else
              for (d = y.call(m), s = new g(); !(t = d.next()).done; l++)
                o(s, l, F ? f(d, p, [t.value, l], !0) : t.value);
            return (s.length = l), s;
          },
        }
      );
    },
    Hsns: function (e, r, s) {
      var i = s("93I4"),
        t = s("5T2Y").document,
        a = i(t) && i(t.createElement);
      e.exports = function (e) {
        return a ? t.createElement(e) : {};
      };
    },
    "I8a+": function (e, r, s) {
      var i = s("LZWt"),
        t = s("K0xU")("toStringTag"),
        a =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          );
      e.exports = function (e) {
        var r, s, f;
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (s = (function (e, r) {
              try {
                return e[r];
              } catch (s) {}
            })((r = Object(e)), t))
          ? s
          : a
          ? i(r)
          : "Object" == (f = i(r)) && "function" == typeof r.callee
          ? "Arguments"
          : f;
      };
    },
    IOVJ: function (e, r, s) {
      "use strict";
      s("91GP");
      var i = s("q1tI"),
        t = s.n(i),
        a = s("emEt"),
        f = s("xtsi");
      var n = (function (e) {
        var r, s;
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (s = e),
          ((r = t).prototype = Object.create(s.prototype)),
          (r.prototype.constructor = r),
          (r.__proto__ = s),
          (t.prototype.render = function () {
            var e = Object.assign({}, this.props, {
                pathContext: this.props.pageContext,
              }),
              r =
                Object(f.apiRunner)("replaceComponentRenderer", {
                  props: this.props,
                  loader: a.publicLoader,
                })[0] ||
                Object(i.createElement)(
                  this.props.pageResources.component,
                  Object.assign({}, e, {
                    key: this.props.path || this.props.pageResources.page.path,
                  })
                );
            return Object(f.apiRunner)(
              "wrapPageElement",
              { element: r, props: e },
              r,
              function (r) {
                return { element: r.result, props: e };
              }
            ).pop();
          }),
          t
        );
      })(t.a.Component);
      r.a = n;
    },
    IRj2: function (e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Chords Database"}}}}'
      );
    },
    ISVb: function (e) {
      e.exports = JSON.parse(
        '{"main":{"strings":6,"fretsOnChord":4,"name":"guitar","numberOfChords":2069},"tunings":{"standard":["E2","A2","D3","G3","B3","E4"]},"keys":["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"],"suffixes":["major","minor","dim","dim7","sus2","sus4","7sus4","7sg","alt","aug","6","69","7","7b5","aug7","9","9b5","aug9","7b9","7#9","11","9#11","13","maj7","maj7b5","maj7#5","maj9","maj11","maj13","m6","m69","m7","m7b5","m9","m11","mmaj7","mmaj7b5","mmaj9","mmaj11","add9","madd9","/E","/F","/F#","/G","/G#","/A","/Bb","/B","/C","/C#","m/B","m/C","m/C#","/D","m/D","/D#","m/D#","m/E","m/F","m/F#","m/G","m/G#"],"chords":{"C":[{"key":"C","suffix":"major","positions":[{"frets":[-1,3,2,0,1,0],"fingers":[0,3,2,0,1,0],"baseFret":1,"barres":[],"midi":[48,52,55,60,64]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,60,64,67]},{"frets":[-1,-1,1,1,1,4],"fingers":[0,0,1,1,1,4],"barres":[1],"baseFret":5,"midi":[55,60,64,72]},{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,60,64,67,72]}]},{"key":"C","suffix":"minor","positions":[{"frets":[-1,3,1,0,1,3],"fingers":[0,3,2,0,1,4],"baseFret":1,"barres":[],"midi":[48,51,55,60,67]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,60,63,67]},{"frets":[4,2,1,1,-1,-1],"fingers":[4,2,1,1,0,0],"barres":[1],"baseFret":5,"midi":[48,51,55,60]},{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,60,63,67,72]}]},{"key":"C","suffix":"dim","positions":[{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":1,"barres":[],"midi":[48,51,60,66]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":3,"barres":[],"midi":[48,54,60,63]},{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":6,"barres":[],"midi":[48,51,63,66]},{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":10,"barres":[],"midi":[60,66,75]}]},{"key":"C","suffix":"dim7","positions":[{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[51,57,60,66]},{"frets":[-1,3,4,2,4,2],"fingers":[0,2,3,1,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[48,54,57,63,66]},{"frets":[2,-1,1,2,1,-1],"fingers":[2,0,1,3,1,0],"barres":[1],"baseFret":7,"midi":[48,57,63,66]},{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,1,4],"barres":[1],"baseFret":10,"midi":[60,66,69,75]}]},{"key":"C","suffix":"sus2","positions":[{"frets":[-1,3,0,0,1,3],"fingers":[0,3,0,0,1,4],"baseFret":1,"barres":[],"midi":[48,50,55,60,67]},{"frets":[-1,3,0,0,3,3],"fingers":[0,1,0,0,2,3],"baseFret":1,"barres":[],"midi":[48,50,55,62,67]},{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,60,62,67]},{"frets":[2,-1,0,1,2,2],"fingers":[2,0,0,1,3,4],"baseFret":7,"barres":[],"midi":[48,50,62,67,72]}]},{"key":"C","suffix":"sus4","positions":[{"frets":[-1,3,3,0,1,1],"fingers":[0,3,4,0,1,1],"barres":[1],"baseFret":1,"midi":[48,53,55,60,65]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,60,65,67]},{"frets":[3,3,-1,0,1,3],"fingers":[2,3,0,0,1,4],"baseFret":6,"barres":[],"midi":[48,53,55,65,72]},{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,60,65,67,72]}]},{"key":"C","suffix":"7sus4","positions":[{"frets":[-1,3,3,3,1,1],"fingers":[0,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[48,53,58,60,65]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,58,65,67]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,3],"barres":[1],"capo":true,"baseFret":5,"midi":[55,60,65,70]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,58,65,67,72]}]},{"key":"C","suffix":"alt","positions":[{"frets":[-1,2,1,4,4,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":2,"midi":[48,52,60,64,66]},{"frets":[-1,1,2,3,3,0],"fingers":[0,1,2,3,4,0],"baseFret":3,"barres":[],"midi":[48,54,60,64,64]},{"frets":[-1,-1,4,3,1,2],"fingers":[0,0,4,3,1,2],"baseFret":7,"barres":[],"midi":[60,64,66,72]},{"frets":[-1,-1,1,2,4,3],"fingers":[0,0,1,2,4,3],"baseFret":10,"barres":[],"midi":[60,66,72,76]}]},{"key":"C","suffix":"aug","positions":[{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"baseFret":1,"midi":[48,52,56,60]},{"frets":[-1,1,4,3,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":3,"barres":[],"midi":[48,56,60,64]},{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"baseFret":5,"midi":[48,52,56,60,64]},{"frets":[-1,-1,3,2,2,1],"fingers":[0,0,4,2,3,1],"baseFret":8,"barres":[],"midi":[60,64,68,72]}]},{"key":"C","suffix":"6","positions":[{"frets":[-1,3,2,2,1,0],"fingers":[0,4,2,3,1,0],"baseFret":1,"barres":[],"midi":[48,52,57,60,64]},{"frets":[-1,1,3,3,3,3],"fingers":[0,1,3,3,3,4],"barres":[3],"baseFret":3,"midi":[48,55,60,64,69]},{"frets":[2,-1,1,3,2,-1],"fingers":[2,0,1,4,3,0],"baseFret":7,"barres":[],"midi":[48,57,64,67]},{"frets":[1,-1,3,2,3,1],"fingers":[1,0,3,2,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,60,64,69,72]}]},{"key":"C","suffix":"69","positions":[{"frets":[-1,3,2,2,3,3],"fingers":[0,3,1,1,3,4],"barres":[2],"capo":true,"baseFret":1,"midi":[48,52,57,62,67]},{"frets":[-1,1,0,0,3,3],"fingers":[0,1,0,0,3,4],"baseFret":3,"barres":[],"midi":[48,50,55,64,69]},{"frets":[2,1,1,1,2,2],"fingers":[2,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":7,"midi":[48,52,57,62,67,72]},{"frets":[-1,2,2,1,2,2],"fingers":[0,2,2,1,3,4],"barres":[2],"baseFret":9,"midi":[55,60,64,69,74]}]},{"key":"C","suffix":"7","positions":[{"frets":[-1,3,2,3,1,0],"fingers":[0,3,2,4,1,0],"baseFret":1,"barres":[],"midi":[48,52,58,60,64]},{"frets":[1,1,3,1,3,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,58,64,67]},{"frets":[-1,-1,1,1,1,2],"fingers":[0,0,1,1,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[55,60,64,70]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,58,64,67,72]}]},{"key":"C","suffix":"7b5","positions":[{"frets":[-1,-1,2,3,1,2],"fingers":[0,0,2,4,1,3],"baseFret":1,"barres":[],"midi":[52,58,60,66]},{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"baseFret":3,"midi":[48,54,58,64]},{"frets":[2,-1,2,3,1,0],"fingers":[2,0,3,4,1,0],"baseFret":7,"barres":[],"midi":[48,58,64,66,64]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":10,"barres":[],"midi":[60,66,70,76]}]},{"key":"C","suffix":"7sg","positions":[{"frets":[3,3,2,3,-1,-1],"fingers":[2,3,1,4,0,0],"baseFret":1,"barres":[],"midi":[43,48,52,58]},{"frets":[3,1,2,0,1,0],"fingers":[4,2,3,0,1,0],"baseFret":1,"barres":[],"midi":[43,46,52,55,60,64]},{"frets":[1,1,3,1,3,1],"fingers":[1,1,3,1,4,1],"barres":[1],"baseFret":3,"midi":[43,48,55,58,64,67]}]},{"key":"C","suffix":"aug7","positions":[{"frets":[-1,3,2,3,-1,4],"fingers":[0,2,1,3,0,4],"baseFret":1,"barres":[],"midi":[48,52,58,68]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":3,"midi":[48,56,58,64,68]},{"frets":[1,-1,1,2,2,0],"fingers":[1,0,2,3,4,0],"baseFret":8,"barres":[],"midi":[48,58,64,68,64]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":10,"barres":[],"midi":[60,68,70,76]}]},{"key":"C","suffix":"9","positions":[{"frets":[0,3,2,0,3,0],"fingers":[0,2,3,0,4,0],"baseFret":1,"barres":[],"midi":[40,48,52,55,62,64]},{"frets":[3,3,2,3,3,3],"fingers":[2,2,1,3,3,4],"barres":[3],"baseFret":1,"midi":[43,48,52,58,62,67]},{"frets":[2,1,2,1,2,2],"fingers":[2,1,3,1,4,4],"barres":[1],"capo":true,"baseFret":7,"midi":[48,52,58,62,67,72]},{"frets":[2,4,2,1,2,4],"fingers":[1,3,1,2,1,4],"barres":[2],"capo":true,"baseFret":7,"midi":[48,55,58,62,67,74]},{"frets":[-1,-1,2,1,3,2],"fingers":[0,0,2,1,4,3],"baseFret":9,"barres":[],"midi":[60,64,70,74]}]},{"key":"C","suffix":"9b5","positions":[{"frets":[-1,3,2,3,3,2],"fingers":[0,2,1,3,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[48,52,58,62,66]},{"frets":[-1,3,4,3,3,0],"fingers":[0,1,4,2,3,0],"baseFret":1,"barres":[],"midi":[48,54,58,62,64]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[48,52,58,62,66,72]},{"frets":[1,2,1,2,-1,3],"fingers":[1,2,1,3,0,4],"barres":[1],"baseFret":8,"midi":[48,54,58,64,74]}]},{"key":"C","suffix":"aug9","positions":[{"frets":[-1,3,2,3,3,4],"fingers":[0,2,1,3,3,4],"barres":[3],"baseFret":1,"midi":[48,52,58,62,68]},{"frets":[-1,1,0,1,3,2],"fingers":[0,1,0,2,4,3],"baseFret":3,"barres":[],"midi":[48,50,58,64,68]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,56,60,64,70]},{"frets":[2,1,2,1,3,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"capo":true,"baseFret":7,"midi":[48,52,58,62,68]}]},{"key":"C","suffix":"7b9","positions":[{"frets":[-1,3,2,3,2,3],"fingers":[0,2,1,3,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[48,52,58,61,67]},{"frets":[3,2,3,1,-1,-1],"fingers":[3,2,4,1,0,0],"baseFret":6,"barres":[],"midi":[48,52,58,61]},{"frets":[1,-1,1,2,1,2],"fingers":[1,0,1,2,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[48,58,64,67,73]},{"frets":[-1,-1,2,1,3,1],"fingers":[0,0,3,1,4,2],"baseFret":9,"barres":[],"midi":[60,64,70,73]}]},{"key":"C","suffix":"7#9","positions":[{"frets":[-1,3,2,3,4,-1],"fingers":[0,2,1,3,4,0],"baseFret":1,"barres":[],"midi":[48,52,58,63]},{"frets":[-1,1,3,1,2,0],"fingers":[0,1,3,1,2,0],"barres":[1],"baseFret":3,"midi":[48,55,58,63,64]},{"frets":[1,3,1,2,1,4],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,58,64,67,75]},{"frets":[-1,-1,2,1,3,3],"fingers":[0,0,2,1,3,4],"baseFret":9,"barres":[],"midi":[60,64,70,75]}]},{"key":"C","suffix":"11","positions":[{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[48,52,58,60,65]},{"frets":[-1,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[48,53,58,64,67]},{"frets":[3,2,0,0,1,1],"fingers":[3,2,0,0,1,1],"barres":[1],"baseFret":6,"midi":[48,52,50,55,65,70]},{"frets":[1,1,1,2,1,1],"fingers":[1,1,1,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,58,64,67,72]}]},{"key":"C","suffix":"9#11","positions":[{"frets":[-1,3,2,3,3,2],"fingers":[0,2,1,3,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[48,52,58,62,66]},{"frets":[-1,1,2,1,3,1],"fingers":[0,1,2,1,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[48,54,58,64,67]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[48,52,58,62,66,72]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":10,"barres":[],"midi":[60,66,70,76]}]},{"key":"C","suffix":"13","positions":[{"frets":[-1,2,1,2,4,4],"fingers":[0,2,1,3,4,4],"barres":[4],"baseFret":2,"midi":[48,52,58,64,69]},{"frets":[1,1,1,1,3,3],"fingers":[1,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,53,58,64,69]},{"frets":[3,2,2,2,3,1],"fingers":[3,2,2,2,4,1],"barres":[2],"baseFret":6,"midi":[48,52,57,62,67,70]},{"frets":[1,3,1,2,3,1],"fingers":[1,3,1,2,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,58,64,69,72]}]},{"key":"C","suffix":"maj7","positions":[{"frets":[3,3,2,0,0,0],"fingers":[2,3,1,0,0,0],"baseFret":1,"barres":[],"midi":[43,48,52,55,59,64]},{"frets":[1,1,3,2,3,1],"fingers":[1,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,59,64,67]},{"frets":[-1,-1,1,1,1,3],"fingers":[0,0,1,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[55,60,64,71]},{"frets":[-1,-1,1,3,3,3],"fingers":[0,0,1,3,3,3],"barres":[3],"baseFret":10,"midi":[60,67,71,76]}]},{"key":"C","suffix":"maj7b5","positions":[{"frets":[-1,3,2,4,0,2],"fingers":[0,3,1,4,0,2],"baseFret":1,"barres":[],"midi":[48,52,59,59,66]},{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":3,"barres":[],"midi":[48,54,59,64]},{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[48,52,59,64,66,71]},{"frets":[-1,-1,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":10,"barres":[],"midi":[60,66,71,76]}]},{"key":"C","suffix":"maj7#5","positions":[{"frets":[-1,3,2,1,0,0],"fingers":[0,3,2,1,0,0],"baseFret":1,"barres":[],"midi":[48,52,56,59,64]},{"frets":[-1,1,4,2,3,0],"fingers":[0,1,4,2,3,0],"baseFret":3,"barres":[],"midi":[48,56,59,64,64]},{"frets":[4,3,2,1,0,0],"fingers":[4,3,2,1,0,0],"baseFret":5,"barres":[],"midi":[48,52,56,60,59,64]},{"frets":[1,4,3,2,0,0],"fingers":[1,4,3,2,0,0],"baseFret":8,"barres":[],"midi":[48,56,60,64,59,64]}]},{"key":"C","suffix":"maj9","positions":[{"frets":[-1,3,0,0,0,0],"fingers":[0,3,0,0,0,0],"baseFret":1,"barres":[],"midi":[48,50,55,59,64]},{"frets":[3,3,2,4,3,-1],"fingers":[2,2,1,4,3,0],"barres":[3],"baseFret":1,"midi":[43,48,52,59,62]},{"frets":[0,1,1,1,1,3],"fingers":[0,1,1,1,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[40,50,55,60,64,71]},{"frets":[1,-1,2,2,1,3],"fingers":[1,0,2,3,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[48,59,64,67,74]}]},{"key":"C","suffix":"maj11","positions":[{"frets":[-1,3,2,0,0,1],"fingers":[0,3,2,0,0,1],"baseFret":1,"barres":[],"midi":[48,52,55,59,65]},{"frets":[-1,3,3,0,0,0],"fingers":[0,1,1,0,0,0],"barres":[3],"baseFret":1,"midi":[48,53,55,59,64]},{"frets":[3,2,4,0,1,0],"fingers":[3,2,4,0,1,0],"baseFret":6,"barres":[],"midi":[48,52,59,55,65,64]},{"frets":[1,1,2,2,1,1],"fingers":[1,1,2,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,59,64,67,72]}]},{"key":"C","suffix":"maj13","positions":[{"frets":[-1,3,2,2,0,1],"fingers":[0,4,2,3,0,1],"baseFret":1,"barres":[],"midi":[48,52,57,59,65]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"baseFret":3,"midi":[48,53,59,64,69]},{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":7,"midi":[48,52,57,62,67,71]},{"frets":[1,1,2,2,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,59,64,69,72]}]},{"key":"C","suffix":"m6","positions":[{"frets":[-1,3,1,2,1,3],"fingers":[0,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[48,51,57,60,67]},{"frets":[-1,1,3,-1,2,3],"fingers":[0,1,3,0,2,4],"baseFret":3,"barres":[],"midi":[48,55,63,69]},{"frets":[2,-1,1,2,2,2],"fingers":[2,0,1,3,3,4],"barres":[2],"baseFret":7,"midi":[48,57,63,67,72]},{"frets":[1,3,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,60,63,69,72]}]},{"key":"C","suffix":"m7","positions":[{"frets":[-1,3,1,3,4,-1],"fingers":[0,2,1,3,4,0],"baseFret":1,"barres":[],"midi":[48,51,58,63]},{"frets":[1,1,3,1,2,1],"fingers":[1,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,58,63,67]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":4,"barres":[],"midi":[55,60,63,70]},{"frets":[1,3,1,1,1,1],"fingers":[1,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,58,63,67,72]}]},{"key":"C","suffix":"m7b5","positions":[{"frets":[-1,3,4,3,4,-1],"fingers":[0,1,3,2,4,0],"baseFret":1,"barres":[],"midi":[48,54,58,63]},{"frets":[-1,-1,1,2,1,3],"fingers":[0,0,1,2,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[54,60,63,70]},{"frets":[1,2,3,1,4,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,54,60,63,70,72]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,3,3,3],"barres":[2],"baseFret":10,"midi":[60,66,70,75]}]},{"key":"C","suffix":"m9","positions":[{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":1,"midi":[48,51,58,62,67]},{"frets":[-1,3,0,3,4,3],"fingers":[0,1,0,2,4,3],"baseFret":1,"barres":[],"midi":[48,50,58,63,67]},{"frets":[-1,1,3,2,3,3],"fingers":[0,1,3,2,4,4],"barres":[3],"baseFret":6,"midi":[51,58,62,67,72]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,58,63,67,74]}]},{"key":"C","suffix":"m69","positions":[{"frets":[-1,3,1,2,3,3],"fingers":[0,3,1,2,4,4],"barres":[3],"baseFret":1,"midi":[48,51,57,62,67]},{"frets":[-1,1,0,0,2,3],"fingers":[0,1,0,0,2,4],"baseFret":3,"barres":[],"midi":[48,50,55,63,69]},{"frets":[3,1,2,2,-1,-1],"fingers":[4,1,2,3,0,0],"baseFret":6,"barres":[],"midi":[48,51,57,62]},{"frets":[-1,3,3,1,3,3],"fingers":[0,2,2,1,3,4],"barres":[3],"baseFret":8,"midi":[55,60,63,69,74]}]},{"key":"C","suffix":"m11","positions":[{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[48,51,58,62,65]},{"frets":[-1,3,3,3,4,3],"fingers":[0,1,1,1,2,1],"barres":[3],"capo":true,"baseFret":1,"midi":[48,53,58,63,67]},{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[48,51,58,62,65,70]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,58,63,67,74]}]},{"key":"C","suffix":"mmaj7","positions":[{"frets":[-1,3,1,0,0,-1],"fingers":[0,3,1,0,0,0],"baseFret":1,"barres":[],"midi":[48,51,55,59]},{"frets":[1,1,3,2,2,1],"fingers":[1,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,55,59,63,67]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,59,63,67,72]},{"frets":[-1,-1,1,3,3,2],"fingers":[0,0,1,3,4,2],"baseFret":10,"barres":[],"midi":[60,67,71,75]}]},{"key":"C","suffix":"mmaj7b5","positions":[{"frets":[-1,3,-1,4,4,2],"fingers":[0,2,0,3,4,1],"baseFret":1,"barres":[],"midi":[48,59,63,66]},{"frets":[-1,3,4,4,4,-1],"fingers":[0,1,2,3,4,0],"baseFret":1,"barres":[],"midi":[48,54,59,63]},{"frets":[1,2,2,1,-1,1],"fingers":[1,2,3,1,0,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,54,59,63,72]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":10,"barres":[],"midi":[60,66,71,75]}]},{"key":"C","suffix":"mmaj9","positions":[{"frets":[-1,3,1,4,3,-1],"fingers":[0,2,1,4,3,0],"baseFret":1,"barres":[],"midi":[48,51,59,62]},{"frets":[-1,3,0,4,4,3],"fingers":[0,1,0,3,4,2],"baseFret":1,"barres":[],"midi":[48,50,59,63,67]},{"frets":[3,1,-1,2,0,3],"fingers":[3,1,0,2,0,4],"baseFret":6,"barres":[],"midi":[48,51,62,59,72]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[48,55,59,63,67,74]}]},{"key":"C","suffix":"mmaj11","positions":[{"frets":[-1,3,1,0,0,1],"fingers":[0,3,1,0,0,2],"baseFret":1,"barres":[],"midi":[48,51,55,59,65]},{"frets":[3,3,3,4,4,3],"fingers":[1,1,1,2,3,1],"barres":[3],"capo":true,"baseFret":1,"midi":[43,48,53,59,63,67]},{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,59,63,67,74]},{"frets":[-1,-1,1,1,3,2],"fingers":[0,0,1,1,3,2],"barres":[1],"capo":true,"baseFret":10,"midi":[60,65,71,75]}]},{"key":"C","suffix":"add9","positions":[{"frets":[-1,3,2,0,3,0],"fingers":[0,2,1,0,3,0],"baseFret":1,"barres":[],"midi":[48,52,55,62,64]},{"frets":[-1,3,0,0,3,0],"fingers":[0,1,0,0,3,0],"baseFret":1,"barres":[],"midi":[48,50,55,62,64]},{"frets":[2,1,0,0,2,0],"fingers":[2,1,0,0,3,0],"baseFret":7,"barres":[],"midi":[48,52,50,55,67,64]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":8,"barres":[],"midi":[60,64,67,74]}]},{"key":"C","suffix":"madd9","positions":[{"frets":[-1,3,1,0,3,3],"fingers":[0,2,1,0,3,4],"baseFret":1,"barres":[],"midi":[48,51,55,62,67]},{"frets":[-1,1,0,3,2,1],"fingers":[0,1,0,4,3,2],"baseFret":3,"barres":[],"midi":[48,50,60,63,67]},{"frets":[3,1,0,2,3,3],"fingers":[3,1,0,2,4,4],"barres":[3],"baseFret":6,"midi":[48,51,50,62,67,72]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[60,63,67,74]}]},{"key":"C","suffix":"/E","positions":[{"frets":[0,3,2,0,1,0],"fingers":[0,3,2,0,1,0],"baseFret":1,"barres":[],"midi":[40,48,52,55,60,64]},{"frets":[0,3,2,0,1,3],"fingers":[0,3,2,0,1,4],"baseFret":1,"barres":[],"midi":[40,48,52,55,60,67]},{"frets":[-1,3,1,1,4,4],"fingers":[0,3,1,1,4,4],"barres":[1],"baseFret":5,"midi":[52,55,60,67,72]}]},{"key":"C","suffix":"/F","positions":[{"frets":[-1,-1,3,0,1,0],"fingers":[0,0,3,0,1,0],"baseFret":1,"barres":[],"midi":[53,55,60,64]},{"frets":[1,3,2,0,1,0],"fingers":[1,4,3,0,2,0],"baseFret":1,"barres":[],"midi":[41,48,52,55,60,64]},{"frets":[-1,-1,1,3,3,1],"fingers":[0,0,1,3,4,2],"baseFret":3,"barres":[],"midi":[53,60,64,67]}]},{"key":"C","suffix":"/G","positions":[{"frets":[3,3,2,0,1,0],"fingers":[3,4,2,0,1,0],"baseFret":1,"barres":[],"midi":[43,48,52,55,60,64]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"baseFret":3,"midi":[43,48,55,60,64,67]},{"frets":[2,2,1,4,4,-1],"fingers":[2,3,1,4,4,0],"barres":[4],"baseFret":2,"midi":[43,48,52,60,64]}]}],"Csharp":[{"key":"C#","suffix":"major","positions":[{"frets":[-1,4,3,1,2,1],"fingers":[0,4,3,1,2,1],"barres":[1],"baseFret":1,"midi":[49,53,56,61,65]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,56,61,65,68]},{"frets":[4,3,1,1,1,4],"fingers":[3,2,1,1,1,4],"barres":[1],"baseFret":6,"midi":[49,53,56,61,65,73]},{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,61,65,68,73]}]},{"key":"C#","suffix":"minor","positions":[{"frets":[-1,4,2,1,2,-1],"fingers":[0,4,2,1,3,0],"baseFret":1,"barres":[],"midi":[49,52,56,61]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,56,61,64,68]},{"frets":[4,2,1,1,-1,4],"fingers":[3,2,1,1,0,4],"barres":[1],"baseFret":6,"midi":[49,52,56,61,73]},{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,61,64,68,73]}]},{"key":"C#","suffix":"dim","positions":[{"frets":[-1,4,2,-1,2,3],"fingers":[0,4,1,0,2,3],"baseFret":1,"barres":[],"midi":[49,52,61,67]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":4,"barres":[],"midi":[49,55,61,64]},{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":7,"barres":[],"midi":[49,52,64,67]},{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":11,"barres":[],"midi":[61,67,76]}]},{"key":"C#","suffix":"dim7","positions":[{"frets":[-1,-1,2,3,2,3],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[52,58,61,67]},{"frets":[-1,2,3,1,3,1],"fingers":[0,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[49,55,58,64,67]},{"frets":[2,-1,1,2,1,-1],"fingers":[2,0,1,3,1,0],"barres":[1],"baseFret":8,"midi":[49,58,64,67]},{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":11,"barres":[],"midi":[61,67,70,76]}]},{"key":"C#","suffix":"sus2","positions":[{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,56,61,63,68]},{"frets":[4,1,1,3,4,-1],"fingers":[0,1,0,0,2,3],"barres":[1],"capo":true,"baseFret":6,"midi":[49,51,56,63,68]},{"frets":[1,3,3,-1,1,3],"fingers":[1,2,3,0,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,61,68,75]},{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,61,68,73,75]}]},{"key":"C#","suffix":"sus4","positions":[{"frets":[-1,4,4,1,2,-1],"fingers":[0,3,4,1,2,0],"baseFret":1,"barres":[],"midi":[49,54,56,61]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,56,61,66,68]},{"frets":[4,-1,1,1,2,4],"fingers":[2,3,0,0,1,4],"baseFret":6,"barres":[],"midi":[49,56,61,66,73]},{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,61,66,68,73]}]},{"key":"C#","suffix":"7sus4","positions":[{"frets":[-1,4,4,4,2,2],"fingers":[0,2,3,4,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[49,54,59,61,66]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,56,59,66,68]},{"frets":[-1,-1,-1,1,2,2],"fingers":[0,0,0,1,2,3],"baseFret":6,"barres":[],"midi":[61,66,71]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,59,66,68,73]}]},{"key":"C#","suffix":"alt","positions":[{"frets":[-1,4,3,0,2,1],"fingers":[0,4,3,0,2,1],"baseFret":1,"barres":[],"midi":[49,53,55,61,65]},{"frets":[-1,2,3,0,4,1],"fingers":[0,2,3,0,4,1],"baseFret":3,"barres":[],"midi":[49,55,55,65,67]},{"frets":[-1,1,2,3,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":4,"barres":[],"midi":[49,55,61,65]},{"frets":[-1,-1,4,3,1,2],"fingers":[0,0,4,3,1,2],"baseFret":8,"barres":[],"midi":[61,65,67,73]}]},{"key":"C#","suffix":"aug","positions":[{"frets":[-1,4,4,4,2,2],"fingers":[0,2,3,4,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[49,54,59,61,66]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,56,59,66,68]},{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":6,"midi":[49,53,57,61,65]},{"frets":[1,-1,3,2,2,1],"fingers":[1,0,4,2,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,61,65,69,73]}]},{"key":"C#","suffix":"6","positions":[{"frets":[-1,4,3,3,2,-1],"fingers":[0,4,2,3,1,0],"baseFret":1,"barres":[],"midi":[49,53,58,61]},{"frets":[-1,1,3,3,3,3],"fingers":[0,1,3,3,3,3],"barres":[3],"baseFret":4,"midi":[49,56,61,65,70]},{"frets":[4,3,3,1,1,1],"fingers":[4,2,3,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[49,53,58,61,65,70]},{"frets":[1,-1,3,2,3,1],"fingers":[1,0,3,2,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,61,65,70,73]}]},{"key":"C#","suffix":"69","positions":[{"frets":[-1,4,1,3,2,1],"fingers":[0,4,1,3,2,1],"barres":[1],"capo":true,"baseFret":1,"midi":[49,51,58,61,65]},{"frets":[-1,4,3,3,4,4],"fingers":[0,2,1,1,3,4],"barres":[3],"capo":true,"baseFret":1,"midi":[49,53,58,63,68]},{"frets":[2,1,1,1,2,2],"fingers":[2,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":8,"midi":[49,53,58,63,68,73]},{"frets":[-1,-1,2,1,2,2],"fingers":[0,0,2,1,3,4],"baseFret":10,"barres":[],"midi":[61,65,70,75]}]},{"key":"C#","suffix":"7","positions":[{"frets":[-1,4,3,4,2,-1],"fingers":[0,3,2,4,1,0],"baseFret":1,"barres":[],"midi":[49,53,59,61]},{"frets":[-1,1,3,1,3,1],"fingers":[0,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[49,56,59,65,68]},{"frets":[4,3,1,1,1,2],"fingers":[4,3,1,1,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[49,53,56,61,65,71]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,59,65,68,73]}]},{"key":"C#","suffix":"7b5","positions":[{"frets":[-1,4,3,0,0,1],"fingers":[0,4,3,0,0,1],"baseFret":1,"barres":[],"midi":[49,53,55,59,65]},{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"capo":true,"baseFret":4,"midi":[49,55,59,65]},{"frets":[2,-1,2,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":8,"barres":[],"midi":[49,59,65,67]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":12,"barres":[],"midi":[62,68,72,78]}]},{"key":"C#","suffix":"aug7","positions":[{"frets":[-1,4,3,2,0,1],"fingers":[0,4,3,2,0,1],"baseFret":1,"barres":[],"midi":[49,53,57,59,65]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":4,"midi":[49,57,59,65,69]},{"frets":[3,2,1,-1,0,1],"fingers":[4,3,1,0,0,2],"baseFret":7,"barres":[],"midi":[49,53,57,59,71]},{"frets":[1,-1,1,2,2,-1],"fingers":[1,0,2,3,4,0],"baseFret":9,"barres":[],"midi":[49,59,65,69]}]},{"key":"C#","suffix":"9","positions":[{"frets":[4,4,3,4,4,4],"fingers":[2,2,1,3,3,4],"barres":[4],"baseFret":1,"midi":[44,49,53,59,63,68]},{"frets":[2,1,2,1,-1,-1],"fingers":[3,1,4,2,0,0],"baseFret":8,"barres":[],"midi":[49,53,59,63]},{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,59,65,68,75]},{"frets":[-1,-1,2,1,3,2],"fingers":[0,0,2,1,4,3],"baseFret":10,"barres":[],"midi":[61,65,71,75]}]},{"key":"C#","suffix":"9b5","positions":[{"frets":[-1,4,3,4,4,3],"fingers":[0,2,1,3,4,1],"barres":[3],"capo":true,"baseFret":1,"midi":[49,53,59,63,67]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[49,53,59,63,67,73]},{"frets":[1,2,-1,2,0,3],"fingers":[1,2,0,3,0,4],"baseFret":9,"barres":[],"midi":[49,55,65,59,75]}]},{"key":"C#","suffix":"aug9","positions":[{"frets":[-1,2,1,2,2,3],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":3,"midi":[49,53,59,63,69]},{"frets":[3,2,1,2,0,-1],"fingers":[4,2,1,3,0,0],"baseFret":7,"barres":[],"midi":[49,53,57,63,59]},{"frets":[2,1,2,1,3,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"capo":true,"baseFret":8,"midi":[49,53,59,63,69]},{"frets":[1,4,1,2,0,3],"fingers":[1,4,1,2,0,3],"barres":[1],"capo":true,"baseFret":9,"midi":[49,57,59,65,59,75]}]},{"key":"C#","suffix":"7b9","positions":[{"frets":[-1,4,3,4,3,4],"fingers":[0,2,1,3,1,4],"barres":[3],"capo":true,"baseFret":1,"midi":[49,53,59,62,68]},{"frets":[-1,1,0,1,3,4],"fingers":[0,1,0,2,3,4],"baseFret":4,"barres":[],"midi":[49,50,59,65,71]},{"frets":[3,2,3,1,0,-1],"fingers":[3,2,4,1,0,0],"baseFret":7,"barres":[],"midi":[49,53,59,62,59]},{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":9,"barres":[],"midi":[59,65,68,74]}]},{"key":"C#","suffix":"7#9","positions":[{"frets":[-1,4,3,4,2,0],"fingers":[0,3,2,4,1,0],"baseFret":1,"barres":[],"midi":[49,53,59,61,64]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":3,"barres":[],"midi":[49,53,59,64]},{"frets":[-1,1,2,2,2,2],"fingers":[0,1,2,2,3,4],"barres":[2],"baseFret":8,"midi":[53,59,64,68,73]},{"frets":[1,3,1,2,1,4],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,59,65,68,76]}]},{"key":"C#","suffix":"11","positions":[{"frets":[-1,4,3,0,0,4],"fingers":[0,2,1,0,0,3],"baseFret":1,"barres":[],"midi":[49,53,55,59,68]},{"frets":[-1,1,2,1,3,1],"fingers":[0,1,2,1,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[49,55,59,65,68]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[49,53,59,63,67,73]},{"frets":[1,2,1,2,1,1],"fingers":[1,2,1,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,55,59,65,68,73]}]},{"key":"C#","suffix":"9#11","positions":[{"frets":[-1,3,2,0,0,3],"fingers":[0,2,1,0,0,3],"baseFret":1,"barres":[],"midi":[48,52,55,59,67]},{"frets":[-1,1,2,1,3,1],"fingers":[0,1,2,1,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[49,55,59,65,68]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[49,53,59,63,67,73]},{"frets":[1,2,1,2,1,1],"fingers":[1,2,1,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,55,59,65,68,73]}]},{"key":"C#","suffix":"13","positions":[{"frets":[-1,4,3,3,0,2],"fingers":[0,4,2,3,0,1],"baseFret":1,"barres":[],"midi":[49,53,58,59,66]},{"frets":[1,1,1,1,3,3],"fingers":[1,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,54,59,65,70]},{"frets":[3,2,2,2,3,1],"fingers":[3,2,2,2,4,1],"barres":[2],"baseFret":7,"midi":[49,53,58,63,68,71]},{"frets":[1,1,1,2,3,3],"fingers":[1,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,59,65,70,75]}]},{"key":"C#","suffix":"maj7","positions":[{"frets":[-1,4,3,1,1,1],"fingers":[0,4,3,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[49,53,56,60,65]},{"frets":[1,1,3,2,3,1],"fingers":[1,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,56,60,65,68]},{"frets":[-1,-1,-1,1,1,3],"fingers":[0,0,0,1,1,3],"barres":[1],"baseFret":6,"midi":[61,65,72]},{"frets":[1,-1,2,2,1,-1],"fingers":[1,0,3,4,2,0],"baseFret":9,"barres":[],"midi":[49,60,65,68]}]},{"key":"C#","suffix":"maj7b5","positions":[{"frets":[-1,2,1,3,4,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[49,53,60,65,67]},{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":4,"barres":[],"midi":[49,55,60,65]},{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[49,53,60,65,67,72]},{"frets":[-1,-1,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":11,"barres":[],"midi":[61,67,72,77]}]},{"key":"C#","suffix":"maj7#5","positions":[{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,49,53,57,60,65]},{"frets":[-1,1,4,2,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":4,"barres":[],"midi":[49,57,60,65]},{"frets":[-1,-1,4,3,3,1],"fingers":[0,0,4,2,3,1],"baseFret":8,"barres":[],"midi":[61,65,69,72]},{"frets":[-1,-1,1,4,3,3],"fingers":[0,0,1,4,2,3],"baseFret":11,"barres":[],"midi":[61,69,72,77]}]},{"key":"C#","suffix":"maj9","positions":[{"frets":[-1,4,1,1,1,1],"fingers":[0,4,1,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[49,51,56,60,65]},{"frets":[-1,2,1,3,2,-1],"fingers":[0,2,1,4,3,0],"baseFret":3,"barres":[],"midi":[49,53,60,63]},{"frets":[2,1,3,1,2,1],"fingers":[2,1,4,1,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[49,53,60,63,68,72]},{"frets":[-1,-1,2,1,4,2],"fingers":[0,0,2,1,4,3],"baseFret":10,"barres":[],"midi":[61,65,72,75]}]},{"key":"C#","suffix":"maj11","positions":[{"frets":[-1,3,2,4,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[49,53,60,61,66]},{"frets":[1,1,1,2,3,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,54,60,65,68]},{"frets":[3,2,-1,-1,1,2],"fingers":[4,2,0,0,1,3],"baseFret":7,"barres":[],"midi":[49,53,66,72]},{"frets":[1,1,2,2,1,1],"fingers":[1,1,2,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,60,65,68,73]}]},{"key":"C#","suffix":"maj13","positions":[{"frets":[-1,4,1,3,1,1],"fingers":[0,4,2,3,0,1],"baseFret":1,"barres":[],"midi":[49,51,58,60,65]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,60,65,70]},{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[49,53,58,63,68,72]},{"frets":[1,1,2,2,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,60,65,70,73]}]},{"key":"C#","suffix":"m6","positions":[{"frets":[-1,4,2,3,2,4],"fingers":[0,3,1,2,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[49,52,58,61,68]},{"frets":[-1,-1,2,2,1,2],"fingers":[0,0,2,3,1,4],"baseFret":5,"barres":[],"midi":[56,61,64,70]},{"frets":[2,-1,1,2,2,-1],"fingers":[2,0,1,3,4,0],"baseFret":8,"barres":[],"midi":[49,58,64,68]},{"frets":[1,3,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,61,64,70,73]}]},{"key":"C#","suffix":"m7","positions":[{"frets":[-1,1,3,1,2,1],"fingers":[0,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":4,"midi":[49,56,59,64,68]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":5,"barres":[],"midi":[56,61,64,71]},{"frets":[1,3,1,1,1,1],"fingers":[1,4,1,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,59,64,68,73]},{"frets":[-1,-1,1,3,2,2],"fingers":[0,0,1,4,2,3],"baseFret":11,"barres":[],"midi":[61,68,71,76]}]},{"key":"C#","suffix":"m7b5","positions":[{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":4,"barres":[],"midi":[49,55,59,64]},{"frets":[-1,-1,1,2,1,3],"fingers":[0,0,1,2,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[55,61,64,71]},{"frets":[2,-1,2,2,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":8,"barres":[],"midi":[49,59,64,67]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,2,2],"barres":[2],"baseFret":11,"midi":[61,67,71,76]}]},{"key":"C#","suffix":"m9","positions":[{"frets":[-1,4,2,4,4,4],"fingers":[0,2,1,3,4,4],"barres":[4],"baseFret":1,"midi":[49,52,59,63,68]},{"frets":[-1,2,2,2,1,3],"fingers":[0,2,2,3,1,4],"barres":[2],"baseFret":5,"midi":[51,56,61,64,71]},{"frets":[-1,1,3,2,3,3],"fingers":[0,1,3,2,4,4],"barres":[3],"baseFret":7,"midi":[52,59,63,68,73]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,59,64,68,75]}]},{"key":"C#","suffix":"m69","positions":[{"frets":[-1,4,1,3,2,0],"fingers":[0,4,1,3,2,0],"baseFret":1,"barres":[],"midi":[49,51,58,61,64]},{"frets":[-1,4,2,3,4,-1],"fingers":[0,3,1,2,4,0],"baseFret":1,"barres":[],"midi":[49,52,58,63]},{"frets":[3,1,2,2,-1,0],"fingers":[4,1,2,3,0,0],"baseFret":7,"barres":[],"midi":[49,52,58,63,64]},{"frets":[-1,3,3,1,3,3],"fingers":[0,2,2,1,3,4],"barres":[3],"baseFret":9,"midi":[56,61,64,70,75]}]},{"key":"C#","suffix":"m11","positions":[{"frets":[-1,4,2,4,2,2],"fingers":[0,2,1,3,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[49,52,59,61,66]},{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[49,52,59,63,66,71]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,59,64,68,75]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,3],"barres":[1],"baseFret":11,"midi":[61,66,71,76]}]},{"key":"C#","suffix":"mmaj7","positions":[{"frets":[-1,4,2,1,1,-1],"fingers":[0,4,2,1,1,0],"barres":[1],"baseFret":1,"midi":[49,52,56,60]},{"frets":[1,1,3,2,2,1],"fingers":[1,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,56,60,64,68]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,60,64,68,73]},{"frets":[-1,1,1,3,3,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":11,"midi":[56,61,68,72,76]}]},{"key":"C#","suffix":"mmaj7b5","positions":[{"frets":[-1,4,2,0,1,0],"fingers":[0,4,2,0,1,0],"baseFret":1,"barres":[],"midi":[49,52,55,60,64]},{"frets":[-1,1,2,2,2,-1],"fingers":[0,1,2,3,4,0],"baseFret":4,"barres":[],"midi":[49,55,60,64]},{"frets":[1,2,2,1,-1,1],"fingers":[1,2,2,1,0,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,55,60,64,73]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":11,"barres":[],"midi":[61,67,72,76]}]},{"key":"C#","suffix":"mmaj9","positions":[{"frets":[-1,4,1,1,1,0],"fingers":[0,4,1,1,1,0],"barres":[1],"capo":true,"baseFret":1,"midi":[49,51,56,60,64]},{"frets":[-1,3,1,4,3,0],"fingers":[0,2,1,4,3,0],"baseFret":2,"barres":[],"midi":[49,52,60,63,64]},{"frets":[1,1,3,2,1,0],"fingers":[1,1,4,3,2,0],"barres":[1],"baseFret":4,"midi":[44,49,56,60,63,64]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,56,60,64,68,75]}]},{"key":"C#","suffix":"mmaj11","positions":[{"frets":[-1,3,1,4,3,1],"fingers":[0,3,1,4,3,1],"barres":[1],"capo":true,"baseFret":2,"midi":[49,52,60,63,66]},{"frets":[1,1,1,2,2,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,54,60,64,68]},{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,60,64,68,75]},{"frets":[-1,-1,1,1,3,2],"fingers":[0,0,1,1,3,2],"barres":[1],"capo":true,"baseFret":11,"midi":[61,66,72,76]}]},{"key":"C#","suffix":"add9","positions":[{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[49,53,56,63,65]},{"frets":[-1,4,3,-1,4,4],"fingers":[0,2,1,0,3,4],"baseFret":1,"barres":[],"midi":[49,53,63,68]},{"frets":[2,1,-1,1,2,-1],"fingers":[3,1,0,2,4,0],"baseFret":8,"barres":[],"midi":[49,53,63,68]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":9,"barres":[],"midi":[61,65,68,75]}]},{"key":"C#","suffix":"madd9","positions":[{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":1,"barres":[],"midi":[49,52,56,63]},{"frets":[-1,1,3,3,1,0],"fingers":[0,1,3,4,2,0],"baseFret":4,"barres":[],"midi":[49,56,61,63,64]},{"frets":[3,1,-1,2,3,0],"fingers":[3,1,0,2,4,0],"baseFret":7,"barres":[],"midi":[49,52,63,68,64]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[61,64,68,75]}]}],"D":[{"key":"D","suffix":"major","positions":[{"frets":[-1,-1,0,2,3,2],"fingers":[0,0,0,1,3,2],"baseFret":1,"barres":[],"midi":[50,57,62,66]},{"frets":[1,4,3,1,2,1],"fingers":[1,4,3,1,2,1],"barres":[1],"capo":true,"baseFret":2,"midi":[42,50,54,57,62,66]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,62,66,69]},{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,62,66,69,74]}]},{"key":"D","suffix":"minor","positions":[{"frets":[-1,-1,0,2,3,1],"fingers":[0,0,0,2,3,1],"baseFret":1,"barres":[],"midi":[50,57,62,65]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,62,65,69]},{"frets":[-1,3,2,2,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":6,"barres":[],"midi":[53,57,62,65]},{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,62,65,69,74]}]},{"key":"D","suffix":"dim","positions":[{"frets":[-1,-1,0,1,-1,1],"fingers":[0,0,0,1,0,2],"baseFret":1,"barres":[],"midi":[50,56,65]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":3,"barres":[],"midi":[50,53,62,68]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":5,"barres":[],"midi":[50,56,62,65]},{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":8,"barres":[],"midi":[50,53,65,68]}]},{"key":"D","suffix":"dim7","positions":[{"frets":[-1,-1,0,1,0,1],"fingers":[0,0,0,2,0,3],"baseFret":1,"barres":[],"midi":[50,56,59,65]},{"frets":[-1,2,3,1,3,1],"fingers":[0,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[50,56,59,65,68]},{"frets":[-1,2,0,4,3,1],"fingers":[0,2,0,4,3,1],"baseFret":7,"barres":[],"midi":[53,50,65,68,71]},{"frets":[1,2,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,56,62,65,71,74]}]},{"key":"D","suffix":"sus2","positions":[{"frets":[-1,-1,0,2,3,0],"fingers":[0,0,0,2,3,0],"baseFret":1,"barres":[],"midi":[50,57,62,64]},{"frets":[-1,-1,1,1,2,4],"fingers":[0,0,1,1,2,4],"barres":[1],"baseFret":2,"midi":[52,57,62,69]},{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,62,64,69]},{"frets":[-1,1,1,1,4,4],"fingers":[0,1,1,1,4,4],"barres":[1,4],"capo":true,"baseFret":7,"midi":[52,57,62,69,74]}]},{"key":"D","suffix":"sus4","positions":[{"frets":[-1,-1,0,2,3,3],"fingers":[0,0,0,1,2,3],"baseFret":1,"barres":[],"midi":[50,57,62,67]},{"frets":[-1,3,0,0,1,3],"fingers":[0,3,0,0,1,4],"baseFret":3,"barres":[],"midi":[50,50,55,62,69]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,62,67,69]},{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,62,67,69,74]}]},{"key":"D","suffix":"7sus4","positions":[{"frets":[-1,-1,0,2,1,3],"fingers":[0,0,0,2,1,4],"baseFret":1,"barres":[],"midi":[50,57,60,67]},{"frets":[-1,3,3,3,1,-1],"fingers":[0,2,3,4,1,0],"baseFret":3,"barres":[],"midi":[50,55,60,62]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,60,67,69]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,60,67,69,74]}]},{"key":"D","suffix":"alt","positions":[{"frets":[-1,-1,0,1,3,2],"fingers":[0,0,0,1,3,2],"baseFret":1,"barres":[],"midi":[50,56,62,66]},{"frets":[-1,3,2,-1,1,2],"fingers":[0,4,2,0,1,3],"baseFret":3,"barres":[],"midi":[50,54,62,68]},{"frets":[-1,1,2,3,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":5,"barres":[],"midi":[50,56,62,66]},{"frets":[-1,3,0,3,1,2],"fingers":[0,3,0,4,1,2],"baseFret":9,"barres":[],"midi":[56,50,66,68,74]}]},{"key":"D","suffix":"aug","positions":[{"frets":[-1,-1,0,3,3,2],"fingers":[0,0,0,2,3,1],"baseFret":1,"barres":[],"midi":[50,58,62,66]},{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"baseFret":3,"midi":[50,54,58,62]},{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"baseFret":7,"midi":[50,54,58,62,66]},{"frets":[1,-1,3,2,2,-1],"fingers":[1,0,4,2,3,0],"baseFret":10,"barres":[],"midi":[50,62,66,70]}]},{"key":"D","suffix":"6","positions":[{"frets":[-1,-1,0,2,0,2],"fingers":[0,0,0,2,0,3],"baseFret":1,"barres":[],"midi":[50,57,59,66]},{"frets":[-1,3,2,2,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":3,"barres":[],"midi":[50,54,59,62]},{"frets":[-1,1,3,3,3,3],"fingers":[0,1,3,3,3,4],"barres":[3],"baseFret":5,"midi":[50,57,62,66,71]},{"frets":[1,3,1,1,4,1],"fingers":[1,3,1,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,57,62,69,71]}]},{"key":"D","suffix":"69","positions":[{"frets":[-1,4,3,1,0,0],"fingers":[0,4,3,1,0,0],"baseFret":2,"barres":[],"midi":[50,54,57,59,64]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"baseFret":4,"midi":[50,54,59,64,69]},{"frets":[2,1,1,1,2,2],"fingers":[2,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":9,"midi":[50,54,59,64,69,74]},{"frets":[-1,2,2,1,2,2],"fingers":[0,2,2,1,3,4],"barres":[2],"baseFret":11,"midi":[57,62,66,71,76]}]},{"key":"D","suffix":"7","positions":[{"frets":[-1,-1,0,2,1,2],"fingers":[0,0,0,2,1,3],"baseFret":1,"barres":[],"midi":[50,57,60,66]},{"frets":[-1,3,2,3,1,-1],"fingers":[0,3,2,4,1,0],"baseFret":3,"barres":[],"midi":[50,54,60,62]},{"frets":[1,1,3,1,3,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,60,66,69]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,60,66,69,74]}]},{"key":"D","suffix":"7b5","positions":[{"frets":[-1,-1,0,1,1,2],"fingers":[0,0,0,1,1,2],"barres":[1],"baseFret":1,"midi":[50,56,60,66]},{"frets":[-1,-1,2,3,1,2],"fingers":[0,0,2,4,1,3],"baseFret":3,"barres":[],"midi":[54,60,62,68]},{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"baseFret":5,"midi":[50,56,60,66]},{"frets":[2,-1,2,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":9,"barres":[],"midi":[50,60,66,68]}]},{"key":"D","suffix":"aug7","positions":[{"frets":[-1,-1,0,3,1,2],"fingers":[0,0,0,4,1,2],"baseFret":1,"barres":[],"midi":[50,58,60,66]},{"frets":[-1,2,1,2,-1,3],"fingers":[0,2,1,3,0,4],"baseFret":4,"barres":[],"midi":[50,54,60,70]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":5,"midi":[50,58,60,66,70]},{"frets":[1,-1,1,2,2,-1],"fingers":[1,0,2,3,4,0],"baseFret":10,"barres":[],"midi":[50,60,66,70]}]},{"key":"D","suffix":"9","positions":[{"frets":[2,2,1,2,2,2],"fingers":[2,2,1,3,3,4],"barres":[2],"baseFret":4,"midi":[45,50,54,60,64,69]},{"frets":[-1,1,0,1,1,2],"fingers":[0,1,0,2,3,4],"baseFret":7,"barres":[],"midi":[52,50,62,66,72]},{"frets":[2,1,2,1,2,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"capo":true,"baseFret":9,"midi":[50,54,60,64,69]},{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,60,66,69,76]}]},{"key":"D","suffix":"9b5","positions":[{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[50,54,60,64,68]},{"frets":[-1,1,2,1,3,0],"fingers":[0,1,3,2,4,0],"baseFret":5,"barres":[],"midi":[50,56,60,66,64]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[50,54,60,64,68,74]},{"frets":[1,2,1,2,-1,3],"fingers":[1,2,1,3,0,4],"barres":[1],"baseFret":10,"midi":[50,56,60,66,76]}]},{"key":"D","suffix":"aug9","positions":[{"frets":[-1,2,1,2,2,3],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":4,"midi":[50,54,60,64,70]},{"frets":[-1,3,0,1,3,2],"fingers":[0,3,0,1,4,2],"baseFret":5,"barres":[],"midi":[52,50,60,66,70]},{"frets":[2,1,2,1,3,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"capo":true,"baseFret":9,"midi":[50,54,60,64,70]},{"frets":[1,-1,1,2,2,0],"fingers":[1,0,2,3,4,0],"baseFret":10,"barres":[],"midi":[50,60,66,70,64]}]},{"key":"D","suffix":"7b9","positions":[{"frets":[-1,-1,0,4,3,1],"fingers":[0,0,0,4,3,1],"baseFret":2,"barres":[],"midi":[50,60,63,66]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[50,54,60,63,69]},{"frets":[-1,2,0,1,3,1],"fingers":[0,2,0,1,4,1],"barres":[1],"baseFret":5,"midi":[51,50,60,66,69]},{"frets":[3,2,3,1,-1,-1],"fingers":[3,2,4,1,0,0],"baseFret":8,"barres":[],"midi":[50,54,60,63]}]},{"key":"D","suffix":"7#9","positions":[{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":4,"barres":[],"midi":[50,54,60,65]},{"frets":[0,0,0,4,1,2],"fingers":[0,0,0,4,1,2],"baseFret":7,"barres":[],"midi":[40,45,50,65,66,72]},{"frets":[-1,2,1,1,1,2],"fingers":[0,2,1,1,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[53,57,62,66,72]},{"frets":[1,3,1,2,1,4],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,60,66,69,77]}]},{"key":"D","suffix":"11","positions":[{"frets":[-1,-1,0,0,1,2],"fingers":[0,0,0,0,1,2],"baseFret":1,"barres":[],"midi":[50,55,60,66]},{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[50,54,60,62,67]},{"frets":[-1,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,60,66,69]},{"frets":[-1,3,1,1,2,2],"fingers":[1,1,1,2,1,1],"barres":[2],"capo":true,"baseFret":7,"midi":[54,57,62,67,72]}]},{"key":"D","suffix":"9#11","positions":[{"frets":[-1,-1,0,1,1,2],"fingers":[0,0,0,1,2,3],"baseFret":1,"barres":[],"midi":[50,56,60,66]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[50,54,60,64,68]},{"frets":[-1,3,0,1,3,2],"fingers":[0,3,0,1,4,2],"baseFret":7,"barres":[],"midi":[54,50,62,68,72]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[50,54,60,64,68,74]}]},{"key":"D","suffix":"13","positions":[{"frets":[-1,-1,0,4,1,2],"fingers":[0,0,0,4,1,2],"baseFret":1,"barres":[],"midi":[50,59,60,66]},{"frets":[1,1,1,1,3,3],"fingers":[1,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,55,60,66,71]},{"frets":[3,2,0,2,0,1],"fingers":[4,2,0,3,0,1],"baseFret":8,"barres":[],"midi":[50,54,50,64,59,72]},{"frets":[1,-1,1,2,3,-1],"fingers":[1,0,2,3,4,0],"baseFret":10,"barres":[],"midi":[50,60,66,71]}]},{"key":"D","suffix":"maj7","positions":[{"frets":[-1,-1,0,2,2,2],"fingers":[0,0,0,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[50,57,61,66]},{"frets":[-1,4,3,1,1,1],"fingers":[0,4,3,1,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[50,54,57,61,66]},{"frets":[1,1,3,2,3,1],"fingers":[1,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,61,66,69]},{"frets":[-1,-1,1,1,1,3],"fingers":[0,0,1,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[57,62,66,73]}]},{"key":"D","suffix":"maj7b5","positions":[{"frets":[-1,-1,0,1,2,2],"fingers":[0,0,0,1,2,3],"baseFret":1,"barres":[],"midi":[50,56,61,66]},{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":5,"barres":[],"midi":[50,56,61,66]},{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[50,54,61,66,68,73]},{"frets":[1,2,2,2,-1,1],"fingers":[1,2,3,4,0,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,56,61,66,74]}]},{"key":"D","suffix":"maj7#5","positions":[{"frets":[-1,-1,0,3,2,2],"fingers":[0,0,0,4,2,3],"baseFret":1,"barres":[],"midi":[50,58,61,66]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[42,50,54,58,61,66]},{"frets":[-1,1,0,2,3,2],"fingers":[0,1,0,2,4,3],"baseFret":5,"barres":[],"midi":[50,50,61,66,70]},{"frets":[-1,-1,0,3,3,1],"fingers":[0,0,0,2,3,1],"baseFret":9,"barres":[],"midi":[50,66,70,73]}]},{"key":"D","suffix":"maj9","positions":[{"frets":[-1,4,1,1,1,1],"fingers":[0,4,1,1,1,1],"barres":[1],"capo":true,"baseFret":2,"midi":[50,52,57,61,66]},{"frets":[-1,2,1,3,1,-1],"fingers":[0,2,1,4,3,0],"baseFret":4,"barres":[],"midi":[50,54,61,63]},{"frets":[-1,3,0,3,1,3],"fingers":[0,2,0,3,1,4],"baseFret":7,"barres":[],"midi":[54,50,64,66,73]},{"frets":[1,-1,2,2,1,3],"fingers":[1,0,2,3,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[50,61,66,69,76]}]},{"key":"D","suffix":"maj11","positions":[{"frets":[-1,-1,0,0,2,2],"fingers":[0,0,0,0,1,1],"barres":[2],"baseFret":1,"midi":[50,55,61,66]},{"frets":[1,1,1,2,3,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,55,61,66,69]},{"frets":[-1,3,0,1,2,3],"fingers":[0,3,0,1,2,4],"baseFret":7,"barres":[],"midi":[54,50,62,67,73]},{"frets":[1,1,2,2,1,1],"fingers":[1,1,2,3,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,61,66,69,74]}]},{"key":"D","suffix":"maj13","positions":[{"frets":[-1,-1,0,4,2,2],"fingers":[0,0,0,3,1,1],"barres":[2],"baseFret":1,"midi":[50,59,61,66]},{"frets":[-1,4,3,3,1,0],"fingers":[0,4,2,3,1,0],"baseFret":2,"barres":[],"midi":[50,54,59,61,64]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"baseFret":5,"midi":[50,55,61,66,71]},{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[50,54,59,64,69,73]}]},{"key":"D","suffix":"m6","positions":[{"frets":[-1,-1,0,2,0,1],"fingers":[0,0,0,2,0,1],"baseFret":1,"barres":[],"midi":[50,57,59,65]},{"frets":[-1,3,1,2,1,3],"fingers":[0,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[50,53,59,62,69]},{"frets":[-1,1,3,-1,2,3],"fingers":[0,1,3,0,2,4],"baseFret":5,"barres":[],"midi":[50,57,65,71]},{"frets":[2,-1,1,2,2,2],"fingers":[2,0,1,3,3,3],"barres":[2],"baseFret":9,"midi":[50,59,65,69,74]}]},{"key":"D","suffix":"m7","positions":[{"frets":[-1,-1,0,2,1,1],"fingers":[0,0,0,3,1,2],"baseFret":1,"barres":[],"midi":[50,57,60,65]},{"frets":[1,1,3,1,2,1],"fingers":[1,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,60,65,69]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":6,"barres":[],"midi":[57,62,65,72]},{"frets":[1,3,1,1,1,1],"fingers":[1,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,60,65,69,74]}]},{"key":"D","suffix":"m7b5","positions":[{"frets":[-1,-1,0,1,1,1],"fingers":[0,0,0,1,1,1],"barres":[1],"baseFret":1,"midi":[50,56,60,65]},{"frets":[-1,3,1,3,1,2],"fingers":[0,3,1,4,1,2],"barres":[1],"baseFret":3,"midi":[50,53,60,62,68]},{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":5,"barres":[],"midi":[50,56,60,65]},{"frets":[-1,1,0,3,2,1],"fingers":[0,1,0,4,3,2],"baseFret":8,"barres":[],"midi":[53,50,65,68,72]}]},{"key":"D","suffix":"m9","positions":[{"frets":[1,0,0,2,1,0],"fingers":[1,0,0,3,2,0],"baseFret":1,"barres":[],"midi":[41,45,50,57,60,64]},{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":3,"midi":[50,53,60,64,69]},{"frets":[-1,1,3,1,2,0],"fingers":[0,1,4,2,3,0],"baseFret":5,"barres":[],"midi":[50,57,60,65,64]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,60,65,69,76]}]},{"key":"D","suffix":"m69","positions":[{"frets":[-1,4,2,1,0,0],"fingers":[0,4,2,1,0,0],"baseFret":2,"barres":[],"midi":[50,53,57,59,64]},{"frets":[-1,3,1,2,3,0],"fingers":[0,3,1,2,4,0],"baseFret":3,"barres":[],"midi":[50,53,59,64,64]},{"frets":[-1,2,0,2,1,2],"fingers":[0,2,0,3,1,4],"baseFret":6,"barres":[],"midi":[52,50,62,65,71]},{"frets":[-1,3,3,1,3,3],"fingers":[0,2,2,1,3,4],"barres":[3],"baseFret":10,"midi":[57,62,65,71,76]}]},{"key":"D","suffix":"m11","positions":[{"frets":[-1,-1,0,0,1,1],"fingers":[0,0,0,0,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[50,55,60,65]},{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[50,53,60,64,67]},{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[50,53,60,64,67,72]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,60,65,69,76]}]},{"key":"D","suffix":"mmaj7","positions":[{"frets":[-1,-1,0,2,2,1],"fingers":[0,0,0,2,3,1],"baseFret":1,"barres":[],"midi":[50,57,61,65]},{"frets":[-1,4,2,1,1,0],"fingers":[0,4,2,1,1,0],"barres":[1],"baseFret":2,"midi":[50,53,57,61,64]},{"frets":[1,1,3,2,2,1],"fingers":[1,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,57,61,65,69]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,61,65,69,74]}]},{"key":"D","suffix":"mmaj7b5","positions":[{"frets":[-1,-1,0,1,2,1],"fingers":[0,0,0,1,3,2],"baseFret":1,"barres":[],"midi":[50,56,61,65]},{"frets":[1,2,3,3,3,-1],"fingers":[1,2,3,3,3,0],"barres":[3],"baseFret":4,"midi":[44,50,56,61,65]},{"frets":[-1,1,2,2,2,-1],"fingers":[0,1,2,3,4,0],"baseFret":5,"barres":[],"midi":[50,56,61,65]},{"frets":[1,2,2,1,-1,1],"fingers":[1,2,2,1,0,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,56,61,65,74]}]},{"key":"D","suffix":"mmaj9","positions":[{"frets":[-1,3,1,4,3,0],"fingers":[0,2,1,4,3,0],"baseFret":3,"barres":[],"midi":[50,53,61,64,64]},{"frets":[-1,3,0,2,2,1],"fingers":[0,4,0,2,3,1],"baseFret":5,"barres":[],"midi":[52,50,61,65,69]},{"frets":[-1,1,0,2,3,2],"fingers":[0,1,0,2,4,3],"baseFret":8,"barres":[],"midi":[53,50,64,69,73]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[50,57,61,65,69,76]}]},{"key":"D","suffix":"mmaj11","positions":[{"frets":[-1,-1,0,0,2,1],"fingers":[0,0,0,0,2,1],"baseFret":1,"barres":[],"midi":[50,55,61,65]},{"frets":[-1,3,1,4,3,1],"fingers":[0,2,1,4,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[50,53,61,64,67]},{"frets":[1,1,1,3,3,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,55,62,66,69]},{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,61,65,69,76]}]},{"key":"D","suffix":"add9","positions":[{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"baseFret":2,"midi":[50,54,57,64,66]},{"frets":[-1,1,3,3,3,0],"fingers":[0,1,2,3,4,0],"baseFret":5,"barres":[],"midi":[50,57,62,66,64]},{"frets":[-1,-1,0,3,1,4],"fingers":[0,0,0,3,1,4],"baseFret":7,"barres":[],"midi":[50,64,66,74]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":10,"barres":[],"midi":[62,66,69,76]}]},{"key":"D","suffix":"madd9","positions":[{"frets":[-1,4,2,1,2,0],"fingers":[0,4,2,1,3,0],"baseFret":2,"barres":[],"midi":[50,53,57,62,64]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":2,"barres":[],"midi":[50,53,57,64]},{"frets":[-1,1,3,3,2,0],"fingers":[0,1,3,4,2,0],"baseFret":5,"barres":[],"midi":[50,57,62,65,64]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[62,65,69,76]}]},{"key":"D","suffix":"/F#","positions":[{"frets":[2,0,0,2,3,2],"fingers":[1,0,0,2,4,3],"baseFret":1,"barres":[],"midi":[42,45,50,57,62,66]},{"frets":[1,4,3,1,2,1],"fingers":[1,4,3,1,2,1],"barres":[1],"baseFret":2,"midi":[42,50,54,57,62,66]},{"frets":[-1,-1,3,1,2,4],"fingers":[0,0,3,1,2,4],"baseFret":2,"barres":[],"midi":[54,57,62,69]}]},{"key":"D","suffix":"/A","positions":[{"frets":[-1,0,0,2,3,2],"fingers":[0,0,0,1,3,2],"baseFret":1,"barres":[],"midi":[45,50,57,62,66]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"baseFret":5,"midi":[45,50,57,62,66,69]},{"frets":[2,2,1,4,4,-1],"fingers":[2,3,1,4,4,0],"barres":[4],"baseFret":4,"midi":[45,50,54,62,66]}]},{"key":"D","suffix":"/Bb","positions":[{"frets":[-1,1,0,2,3,2],"fingers":[0,1,0,2,4,3],"baseFret":1,"barres":[],"midi":[46,50,57,62,66]},{"frets":[-1,1,4,2,3,2],"fingers":[0,1,4,2,3,2],"barres":[2],"baseFret":1,"midi":[46,54,57,62,66]},{"frets":[2,1,3,3,3,-1],"fingers":[2,1,3,3,3,0],"barres":[3],"baseFret":5,"midi":[46,50,57,62,66]}]},{"key":"D","suffix":"/B","positions":[{"frets":[-1,2,0,2,3,2],"fingers":[0,1,0,2,4,3],"baseFret":1,"barres":[],"midi":[47,50,57,62,66]},{"frets":[-1,2,4,2,3,2],"fingers":[0,1,3,1,2,1],"barres":[2],"baseFret":1,"midi":[47,54,57,62,66]},{"frets":[-1,1,3,1,2,4],"fingers":[0,1,3,1,2,4],"barres":[1],"baseFret":2,"midi":[47,54,57,62,69]}]},{"key":"D","suffix":"/C","positions":[{"frets":[-1,3,0,2,3,2],"fingers":[0,3,0,1,4,2],"baseFret":1,"barres":[],"midi":[48,50,57,62,66]},{"frets":[-1,3,4,2,3,2],"fingers":[0,2,4,1,3,1],"barres":[2],"baseFret":1,"midi":[48,54,57,62,66]},{"frets":[4,1,3,3,3,-1],"fingers":[4,1,3,3,3,0],"barres":[3],"baseFret":5,"midi":[48,50,57,62,66]}]}],"Eb":[{"key":"Eb","suffix":"major","positions":[{"frets":[-1,-1,1,3,4,3],"fingers":[0,0,1,2,4,3],"baseFret":1,"barres":[],"midi":[51,58,63,67]},{"frets":[-1,4,3,1,2,1],"fingers":[0,4,3,1,2,1],"barres":[1],"baseFret":3,"midi":[51,55,58,63,67]},{"frets":[-1,1,3,3,3,1],"fingers":[0,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[51,58,63,67,70]},{"frets":[-1,-1,1,1,1,4],"fingers":[0,0,1,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[58,63,67,75]}]},{"key":"Eb","suffix":"minor","positions":[{"frets":[-1,-1,1,3,4,2],"fingers":[0,0,1,3,4,2],"baseFret":1,"barres":[],"midi":[51,58,63,66]},{"frets":[-1,-1,4,3,4,2],"fingers":[0,0,3,2,4,1],"baseFret":1,"barres":[],"midi":[54,58,63,66]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,58,63,66,70]},{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,63,66,70,75]}]},{"key":"Eb","suffix":"dim","positions":[{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":1,"barres":[],"midi":[51,57,66]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":4,"barres":[],"midi":[51,54,63,69]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":6,"barres":[],"midi":[51,57,63,66]},{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":9,"barres":[],"midi":[51,54,66,69]}]},{"key":"Eb","suffix":"dim7","positions":[{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[51,57,60,66]},{"frets":[-1,2,3,1,3,1],"fingers":[0,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[51,57,60,66,69]},{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":7,"barres":[],"midi":[57,63,66,72]},{"frets":[2,-1,1,2,1,-1],"fingers":[2,0,1,3,1,0],"barres":[1],"baseFret":10,"midi":[51,60,66,69]}]},{"key":"Eb","suffix":"sus2","positions":[{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,46,51,58,63,65]},{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,58,63,65,70]},{"frets":[4,1,1,3,4,-1],"fingers":[3,1,1,2,4,0],"barres":[1],"capo":true,"baseFret":8,"midi":[51,53,58,65,70]},{"frets":[1,3,3,-1,1,3],"fingers":[1,2,3,0,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,63,70,77]}]},{"key":"Eb","suffix":"sus4","positions":[{"frets":[-1,-1,1,3,4,4],"fingers":[0,0,1,2,3,4],"baseFret":1,"barres":[],"midi":[51,58,63,68]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,58,63,68,70]},{"frets":[-1,-1,1,1,2,-1],"fingers":[0,0,1,1,2,0],"barres":[1],"baseFret":8,"midi":[58,63,68]},{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,63,68,70,75]}]},{"key":"Eb","suffix":"7sus4","positions":[{"frets":[-1,-1,1,3,2,4],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[51,58,61,68]},{"frets":[-1,3,3,3,1,1],"fingers":[0,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[51,56,61,63,68]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,58,61,68,70]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,61,68,70,75]}]},{"key":"Eb","suffix":"alt","positions":[{"frets":[-1,-1,1,2,4,3],"fingers":[0,0,1,2,4,3],"baseFret":1,"barres":[],"midi":[51,57,63,67]},{"frets":[-1,3,2,0,1,2],"fingers":[0,4,2,0,1,3],"baseFret":4,"barres":[],"midi":[51,55,55,63,69]},{"frets":[-1,1,2,0,3,-1],"fingers":[0,1,2,0,3,0],"baseFret":6,"barres":[],"midi":[51,57,55,67]},{"frets":[2,1,-1,3,1,2],"fingers":[2,1,0,4,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[51,55,67,69,75]}]},{"key":"Eb","suffix":"aug","positions":[{"frets":[-1,-1,3,2,2,1],"fingers":[0,0,4,2,3,1],"baseFret":3,"barres":[],"midi":[55,59,63,67]},{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":4,"midi":[51,55,59,63]},{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":8,"midi":[51,55,59,63,67]},{"frets":[1,-1,3,2,2,-1],"fingers":[1,0,4,2,3,0],"baseFret":11,"barres":[],"midi":[51,63,67,71]}]},{"key":"Eb","suffix":"6","positions":[{"frets":[-1,-1,1,3,1,3],"fingers":[0,0,1,3,1,4],"barres":[1],"baseFret":1,"midi":[51,58,60,67]},{"frets":[-1,3,2,2,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":4,"barres":[],"midi":[51,55,60,63]},{"frets":[-1,1,3,3,3,3],"fingers":[0,1,3,3,3,3],"barres":[3],"baseFret":6,"midi":[51,58,63,67,72]},{"frets":[2,-1,1,3,2,-1],"fingers":[2,0,1,4,3,0],"baseFret":10,"barres":[],"midi":[51,60,67,70]}]},{"key":"Eb","suffix":"69","positions":[{"frets":[-1,-1,1,0,1,1],"fingers":[0,0,2,0,3,4],"baseFret":1,"barres":[],"midi":[51,55,60,65]},{"frets":[-1,3,3,3,4,3],"fingers":[0,1,1,1,2,1],"barres":[3],"capo":true,"baseFret":1,"midi":[48,53,58,63,67]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":5,"midi":[51,55,60,65,70]},{"frets":[2,1,1,1,2,2],"fingers":[2,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":10,"midi":[51,55,60,65,70,75]}]},{"key":"Eb","suffix":"7","positions":[{"frets":[-1,-1,1,3,2,3],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[51,58,61,67]},{"frets":[-1,1,3,1,3,1],"fingers":[0,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[51,58,61,67,70]},{"frets":[-1,-1,1,1,1,2],"fingers":[0,0,1,1,1,2],"barres":[1],"capo":true,"baseFret":8,"midi":[58,63,67,73]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,61,67,70,75]}]},{"key":"Eb","suffix":"7b5","positions":[{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":1,"barres":[],"midi":[51,57,61,67]},{"frets":[-1,-1,2,3,1,2],"fingers":[0,0,2,4,1,3],"baseFret":4,"barres":[],"midi":[55,61,63,69]},{"frets":[-1,1,2,1,3,1],"fingers":[0,1,2,1,3,0],"barres":[1],"capo":true,"baseFret":6,"midi":[51,57,61,67,70]},{"frets":[2,-1,2,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":10,"barres":[],"midi":[51,61,67,69]}]},{"key":"Eb","suffix":"aug7","positions":[{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":1,"barres":[],"midi":[51,59,61,67]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":6,"midi":[51,59,61,67,71]},{"frets":[3,2,3,0,0,1],"fingers":[3,2,4,0,0,1],"baseFret":9,"barres":[],"midi":[51,55,61,55,59,73]},{"frets":[1,-1,1,2,2,-1],"fingers":[1,0,2,3,4,0],"baseFret":11,"barres":[],"midi":[51,61,67,71]}]},{"key":"Eb","suffix":"9","positions":[{"frets":[-1,-1,1,0,2,1],"fingers":[0,0,1,0,3,2],"baseFret":1,"barres":[],"midi":[51,55,61,65]},{"frets":[-1,2,1,2,2,2],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":5,"midi":[51,55,61,65,70]},{"frets":[2,1,2,1,-1,-1],"fingers":[3,1,4,2,0,0],"baseFret":10,"barres":[],"midi":[51,55,61,65]},{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,61,67,70,77]}]},{"key":"Eb","suffix":"9b5","positions":[{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[51,55,61,65,69]},{"frets":[-1,1,2,0,1,4],"fingers":[0,1,3,0,2,4],"baseFret":6,"barres":[],"midi":[51,57,55,65,73]},{"frets":[2,1,2,1,1,2],"fingers":[1,2,0,3,0,4],"barres":[1],"capo":true,"baseFret":10,"midi":[51,55,61,65,69,75]},{"frets":[1,2,1,2,-1,3],"fingers":[1,2,1,3,0,4],"barres":[1],"capo":true,"baseFret":11,"midi":[51,57,61,67,77]}]},{"key":"Eb","suffix":"aug9","positions":[{"frets":[3,4,3,4,4,3],"fingers":[1,2,1,3,4,1],"barres":[3],"capo":true,"baseFret":1,"midi":[43,49,53,59,63,67]},{"frets":[-1,2,1,2,2,3],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":5,"midi":[51,55,61,65,71]},{"frets":[3,2,-1,2,0,1],"fingers":[4,2,0,3,0,1],"baseFret":9,"barres":[],"midi":[51,55,65,59,73]},{"frets":[2,1,2,1,3,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"baseFret":10,"midi":[51,55,61,65,71]}]},{"key":"Eb","suffix":"7b9","positions":[{"frets":[-1,-1,1,0,2,0],"fingers":[0,0,2,0,4,0],"baseFret":1,"barres":[],"midi":[51,55,61,64]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[51,55,61,64,70]},{"frets":[-1,1,3,1,3,0],"fingers":[0,1,3,1,4,0],"barres":[1],"baseFret":6,"midi":[51,58,61,67,64]},{"frets":[3,2,3,1,-1,-1],"fingers":[3,2,4,1,0,0],"baseFret":9,"barres":[],"midi":[51,55,61,64]}]},{"key":"Eb","suffix":"7#9","positions":[{"frets":[-1,-1,1,0,2,2],"fingers":[0,0,2,0,3,4],"baseFret":1,"barres":[],"midi":[51,55,61,66]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":5,"barres":[],"midi":[51,55,61,66]},{"frets":[-1,2,1,1,1,2],"fingers":[0,2,1,1,1,3],"barres":[1],"capo":true,"baseFret":8,"midi":[54,58,63,67,73]},{"frets":[2,1,2,2,-1,-1],"fingers":[2,1,3,4,0,0],"baseFret":10,"barres":[],"midi":[51,55,61,66]}]},{"key":"Eb","suffix":"11","positions":[{"frets":[1,1,1,1,2,3],"fingers":[1,1,1,1,2,3],"barres":[1],"capo":true,"baseFret":1,"midi":[41,46,51,56,61,67]},{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[51,55,61,63,68]},{"frets":[0,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[40,51,56,61,67,70]},{"frets":[1,1,1,2,1,1],"fingers":[1,1,1,2,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,61,67,70,75]}]},{"key":"Eb","suffix":"9#11","positions":[{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":1,"barres":[],"midi":[51,57,61,67]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[51,55,61,65,69]},{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"capo":true,"baseFret":6,"midi":[51,57,61,67]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[51,55,61,65,69,75]}]},{"key":"Eb","suffix":"13","positions":[{"frets":[-1,2,1,2,4,4],"fingers":[0,2,1,3,4,4],"barres":[4],"baseFret":5,"midi":[51,55,61,67,72]},{"frets":[1,1,1,1,3,3],"fingers":[1,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,56,61,67,72]},{"frets":[3,2,2,0,1,1],"fingers":[4,2,3,0,1,1],"barres":[1],"baseFret":9,"midi":[51,55,60,55,68,73]},{"frets":[1,1,1,2,3,3],"fingers":[1,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,61,67,72,77]}]},{"key":"Eb","suffix":"maj7","positions":[{"frets":[-1,1,1,3,3,3],"fingers":[0,1,1,3,3,3],"barres":[1,3],"capo":true,"baseFret":1,"midi":[46,51,58,62,67]},{"frets":[-1,4,3,1,1,1],"fingers":[0,4,3,1,1,1],"barres":[1],"baseFret":3,"midi":[51,55,58,62,67]},{"frets":[1,1,3,2,3,1],"fingers":[1,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,58,62,67,70]},{"frets":[-1,-1,1,1,1,3],"fingers":[0,0,1,1,1,4],"barres":[1],"baseFret":8,"midi":[58,63,67,74]}]},{"key":"Eb","suffix":"maj7b5","positions":[{"frets":[-1,-1,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":1,"barres":[],"midi":[51,57,62,67]},{"frets":[-1,1,2,2,3,1],"fingers":[0,1,2,2,4,0],"barres":[1],"capo":true,"baseFret":6,"midi":[51,57,62,67,70]},{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[51,55,62,67,69,74]},{"frets":[1,2,2,2,-1,1],"fingers":[1,2,2,2,0,1],"barres":[1,2],"capo":true,"baseFret":11,"midi":[51,57,62,67,75]}]},{"key":"Eb","suffix":"maj7#5","positions":[{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"baseFret":3,"midi":[43,51,55,59,62,67]},{"frets":[-1,2,1,3,-1,3],"fingers":[0,2,1,3,0,4],"baseFret":5,"barres":[],"midi":[51,55,62,71]},{"frets":[-1,1,4,2,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":6,"barres":[],"midi":[51,59,62,67]},{"frets":[1,-1,2,2,2,1],"fingers":[1,0,2,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,62,67,71,75]}]},{"key":"Eb","suffix":"maj9","positions":[{"frets":[-1,4,1,1,1,1],"fingers":[0,4,1,1,1,1],"barres":[1],"baseFret":3,"midi":[51,53,58,62,67]},{"frets":[-1,2,1,3,2,-1],"fingers":[0,2,1,4,3,0],"baseFret":5,"barres":[],"midi":[51,55,62,65]},{"frets":[-1,1,1,1,1,3],"fingers":[0,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,63,67,74]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":11,"barres":[],"midi":[62,67,70,77]}]},{"key":"Eb","suffix":"maj11","positions":[{"frets":[-1,-1,1,1,3,3],"fingers":[0,0,1,1,3,4],"barres":[1],"baseFret":1,"midi":[51,56,62,67]},{"frets":[-1,3,2,4,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[51,55,62,63,68]},{"frets":[1,1,1,2,3,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,56,62,67,70]},{"frets":[1,1,2,2,1,1],"fingers":[1,1,2,3,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,62,67,70,75]}]},{"key":"Eb","suffix":"maj13","positions":[{"frets":[-1,3,1,0,3,-1],"fingers":[0,3,1,0,4,0],"baseFret":1,"barres":[],"midi":[48,51,55,62]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"baseFret":3,"midi":[51,55,60,62,67]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,62,67,72]},{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[51,55,60,65,70,74]}]},{"key":"Eb","suffix":"m6","positions":[{"frets":[-1,1,1,3,1,2],"fingers":[0,1,1,3,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[46,51,58,60,66]},{"frets":[-1,3,1,2,1,3],"fingers":[0,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[51,54,60,63,70]},{"frets":[-1,-1,2,2,1,2],"fingers":[0,0,2,3,1,4],"baseFret":7,"barres":[],"midi":[58,63,66,72]},{"frets":[1,3,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,63,66,72,75]}]},{"key":"Eb","suffix":"m7","positions":[{"frets":[-1,-1,1,3,2,2],"fingers":[0,0,1,4,2,3],"baseFret":1,"barres":[],"midi":[51,58,61,66]},{"frets":[1,1,3,1,2,1],"fingers":[1,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,58,61,66,70]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":7,"barres":[],"midi":[58,63,66,73]},{"frets":[1,3,1,1,1,1],"fingers":[1,4,1,1,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,61,66,70,75]}]},{"key":"Eb","suffix":"m7b5","positions":[{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,2,2],"barres":[2],"baseFret":1,"midi":[51,57,61,66]},{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":6,"barres":[],"midi":[51,57,61,66]},{"frets":[-1,-1,1,2,1,3],"fingers":[0,0,1,2,1,4],"barres":[1],"baseFret":7,"midi":[57,63,66,73]},{"frets":[2,-1,2,2,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":10,"barres":[],"midi":[51,61,66,69]}]},{"key":"Eb","suffix":"m9","positions":[{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":4,"midi":[51,54,61,65,70]},{"frets":[-1,-1,2,4,1,3],"fingers":[0,0,2,4,1,3],"baseFret":7,"barres":[],"midi":[58,65,66,73]},{"frets":[-1,1,3,2,3,3],"fingers":[0,1,3,2,4,4],"barres":[3],"baseFret":9,"midi":[54,61,65,70,75]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,61,66,70,77]}]},{"key":"Eb","suffix":"m69","positions":[{"frets":[2,-1,1,3,1,1],"fingers":[2,0,1,3,1,1],"barres":[1],"baseFret":1,"midi":[42,51,58,60,65]},{"frets":[-1,3,1,2,3,-1],"fingers":[0,3,1,2,4,0],"baseFret":4,"barres":[],"midi":[51,54,60,65]},{"frets":[3,1,2,2,1,1],"fingers":[4,1,2,3,0,0],"barres":[1],"capo":true,"baseFret":9,"midi":[51,54,60,65,68,73]},{"frets":[-1,-1,3,1,3,3],"fingers":[0,0,2,1,3,4],"baseFret":11,"barres":[],"midi":[63,66,72,77]}]},{"key":"Eb","suffix":"m11","positions":[{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,3,4],"barres":[1],"capo":true,"baseFret":1,"midi":[51,56,61,66]},{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[51,54,61,65,68]},{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[51,54,61,65,68,73]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,61,66,70,77]}]},{"key":"Eb","suffix":"mmaj7","positions":[{"frets":[-1,-1,1,3,3,2],"fingers":[0,0,1,3,4,2],"baseFret":1,"barres":[],"midi":[51,58,62,66]},{"frets":[-1,4,2,1,1,-1],"fingers":[0,4,3,1,2,0],"baseFret":3,"barres":[],"midi":[51,54,58,62]},{"frets":[-1,1,3,2,2,1],"fingers":[0,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[51,58,62,66,70]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,62,66,70,75]}]},{"key":"Eb","suffix":"mmaj7b5","positions":[{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":1,"barres":[],"midi":[51,57,62,66]},{"frets":[1,2,3,3,3,-1],"fingers":[1,2,3,3,3,0],"barres":[3],"baseFret":5,"midi":[45,51,57,62,66]},{"frets":[-1,1,2,2,2,-1],"fingers":[0,1,2,3,4,0],"baseFret":6,"barres":[],"midi":[51,57,62,66]},{"frets":[1,2,2,1,-1,1],"fingers":[1,2,2,1,0,1],"barres":[1,2],"capo":true,"baseFret":11,"midi":[51,57,62,66,75]}]},{"key":"Eb","suffix":"mmaj9","positions":[{"frets":[-1,3,1,4,3,-1],"fingers":[0,2,1,4,3,0],"baseFret":4,"barres":[],"midi":[51,54,62,65]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,54,58,62,65,70]},{"frets":[3,1,4,2,-1,-1],"fingers":[3,1,4,2,0,0],"baseFret":9,"barres":[],"midi":[51,54,62,65]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[51,58,62,66,70,77]}]},{"key":"Eb","suffix":"mmaj11","positions":[{"frets":[-1,1,1,1,3,2],"fingers":[0,1,1,1,3,2],"barres":[1],"capo":true,"baseFret":1,"midi":[46,51,56,62,66]},{"frets":[-1,3,1,4,3,1],"fingers":[0,3,1,4,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[51,54,62,65,68]},{"frets":[1,1,1,2,2,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,56,62,66,70]},{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,62,66,70,77]}]},{"key":"Eb","suffix":"add9","positions":[{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[51,55,58,65,67]},{"frets":[-1,2,1,0,2,2],"fingers":[0,2,1,0,3,4],"baseFret":5,"barres":[],"midi":[51,55,55,65,70]},{"frets":[2,1,-1,1,2,-1],"fingers":[3,1,0,2,4,0],"baseFret":10,"barres":[],"midi":[51,55,65,70]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":11,"barres":[],"midi":[63,67,70,77]}]},{"key":"Eb","suffix":"madd9","positions":[{"frets":[-1,-1,4,3,4,1],"fingers":[0,0,3,2,4,1],"baseFret":1,"barres":[],"midi":[54,58,63,65]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":3,"barres":[],"midi":[51,54,58,65]},{"frets":[-1,3,1,-1,3,3],"fingers":[0,2,1,0,3,4],"baseFret":4,"barres":[],"midi":[51,54,65,70]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[63,66,70,77]}]}],"E":[{"key":"E","suffix":"major","positions":[{"frets":[0,2,2,1,0,0],"fingers":[0,2,3,1,0,0],"baseFret":1,"barres":[],"midi":[40,47,52,56,59,64]},{"frets":[-1,-1,1,3,4,3],"fingers":[0,0,1,2,4,3],"baseFret":2,"barres":[],"midi":[52,59,64,68]},{"frets":[1,4,3,1,2,1],"fingers":[1,4,3,1,2,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,52,56,59,64,68]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,59,64,68,71]}]},{"key":"E","suffix":"minor","positions":[{"frets":[0,2,2,0,0,0],"fingers":[0,2,3,0,0,0],"baseFret":1,"barres":[],"midi":[40,47,52,55,59,64]},{"frets":[0,1,1,3,4,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":2,"midi":[40,47,52,59,64,67]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,59,64,67,71]},{"frets":[4,2,1,1,-1,-1],"fingers":[4,3,1,2,0,0],"baseFret":9,"barres":[],"midi":[52,55,59,64]}]},{"key":"E","suffix":"dim","positions":[{"frets":[-1,-1,2,3,-1,3],"fingers":[0,0,1,2,0,3],"baseFret":1,"barres":[],"midi":[52,58,67]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":5,"barres":[],"midi":[52,55,64,70]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":7,"barres":[],"midi":[52,58,64,67]},{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":10,"barres":[],"midi":[52,55,67,70]}]},{"key":"E","suffix":"dim7","positions":[{"frets":[0,1,2,0,2,0],"fingers":[0,1,2,0,3,0],"baseFret":1,"barres":[],"midi":[40,46,52,55,61,64]},{"frets":[-1,-1,2,3,2,3],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[52,58,61,67]},{"frets":[-1,2,3,1,3,-1],"fingers":[0,2,3,1,4,0],"baseFret":6,"barres":[],"midi":[52,58,61,67]},{"frets":[2,-1,1,2,1,-1],"fingers":[2,0,1,3,1,0],"barres":[1],"capo":true,"baseFret":11,"midi":[52,61,67,70]}]},{"key":"E","suffix":"sus2","positions":[{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":2,"midi":[42,47,52,59,64,66]},{"frets":[0,1,3,3,1,1],"fingers":[0,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[40,52,59,64,66,71]},{"frets":[0,1,1,1,0,0],"fingers":[0,1,2,3,0,0],"baseFret":9,"barres":[],"midi":[40,54,59,64,59,64]},{"frets":[1,3,3,-1,1,3],"fingers":[1,3,4,0,1,4],"barres":[1],"capo":true,"baseFret":12,"midi":[52,59,64,71,78]}]},{"key":"E","suffix":"sus4","positions":[{"frets":[0,2,2,2,0,0],"fingers":[0,2,3,4,0,0],"baseFret":1,"barres":[],"midi":[40,47,52,57,59,64]},{"frets":[0,1,1,3,4,4],"fingers":[0,1,1,2,3,4],"barres":[1],"baseFret":2,"midi":[40,47,52,59,64,69]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,59,64,69,71]},{"frets":[-1,-1,1,1,2,0],"fingers":[0,0,1,1,2,0],"barres":[1],"baseFret":9,"midi":[59,64,69,64]}]},{"key":"E","suffix":"7sus4","positions":[{"frets":[0,2,0,2,0,0],"fingers":[0,2,0,3,0,0],"baseFret":1,"barres":[],"midi":[40,47,50,57,59,64]},{"frets":[-1,3,3,3,1,1],"fingers":[0,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[52,57,62,64,69]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,59,62,69,71]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,3],"barres":[1],"capo":true,"baseFret":9,"midi":[59,64,69,74]}]},{"key":"E","suffix":"alt","positions":[{"frets":[0,1,2,1,-1,-1],"fingers":[0,1,3,2,0,0],"baseFret":1,"barres":[],"midi":[40,46,52,56]},{"frets":[-1,-1,1,2,4,3],"fingers":[0,0,1,2,4,3],"baseFret":2,"barres":[],"midi":[52,58,64,68]},{"frets":[0,3,2,-1,1,2],"fingers":[0,4,2,0,1,3],"baseFret":5,"barres":[],"midi":[40,52,56,64,70]},{"frets":[0,1,2,3,3,0],"fingers":[0,1,2,3,4,0],"baseFret":7,"barres":[],"midi":[40,52,58,64,68,64]}]},{"key":"E","suffix":"aug","positions":[{"frets":[0,3,2,1,1,0],"fingers":[0,4,3,1,2,0],"baseFret":1,"barres":[],"midi":[40,48,52,56,60,64]},{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":5,"midi":[52,56,60,64]},{"frets":[-1,1,4,3,3,-1],"fingers":[4,3,2,1,1,0],"baseFret":7,"barres":[],"midi":[52,60,64,68]},{"frets":[4,3,2,1,1,0],"fingers":[4,3,2,1,1,0],"barres":[1],"baseFret":9,"midi":[52,56,60,64,68,64]}]},{"key":"E","suffix":"6","positions":[{"frets":[0,2,2,1,2,0],"fingers":[0,2,3,1,4,0],"baseFret":1,"barres":[],"midi":[40,47,52,56,61,64]},{"frets":[0,2,2,4,2,4],"fingers":[0,1,1,3,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[40,47,52,59,61,68]},{"frets":[-1,3,2,2,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":5,"barres":[],"midi":[52,56,61,64]},{"frets":[-1,1,3,3,3,3],"fingers":[0,1,3,3,3,3],"barres":[3],"baseFret":7,"midi":[52,59,64,68,73]}]},{"key":"E","suffix":"69","positions":[{"frets":[0,2,2,1,2,2],"fingers":[0,2,2,1,3,4],"barres":[2],"baseFret":1,"midi":[40,47,52,56,61,66]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[52,56,61,66,71]},{"frets":[-1,1,1,1,1,1],"fingers":[0,1,1,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[54,59,64,68,73]},{"frets":[0,1,1,1,2,2],"fingers":[0,1,1,1,3,4],"barres":[1],"baseFret":11,"midi":[40,56,61,66,71,76]}]},{"key":"E","suffix":"7","positions":[{"frets":[0,2,0,1,0,0],"fingers":[0,2,0,1,0,0],"baseFret":1,"barres":[],"midi":[40,47,50,56,59,64]},{"frets":[-1,3,2,3,1,-1],"fingers":[0,3,2,4,1,0],"baseFret":5,"barres":[],"midi":[52,56,62,64]},{"frets":[1,1,3,1,3,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,59,62,68,71]},{"frets":[-1,-1,1,1,1,2],"fingers":[0,0,1,1,1,2],"barres":[1],"capo":true,"baseFret":9,"midi":[59,64,68,74]}]},{"key":"E","suffix":"7b5","positions":[{"frets":[0,1,0,1,3,0],"fingers":[0,1,0,2,4,0],"baseFret":1,"barres":[],"midi":[40,46,50,56,62,64]},{"frets":[-1,-1,2,3,3,4],"fingers":[0,0,1,2,3,4],"baseFret":1,"barres":[],"midi":[52,58,62,68]},{"frets":[-1,-1,2,3,1,2],"fingers":[0,0,2,4,1,3],"baseFret":5,"barres":[],"midi":[56,62,64,70]},{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"capo":true,"baseFret":7,"midi":[52,58,62,68]}]},{"key":"E","suffix":"aug7","positions":[{"frets":[0,3,0,1,1,0],"fingers":[0,4,0,1,2,0],"baseFret":1,"barres":[],"midi":[40,48,50,56,60,64]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":2,"barres":[],"midi":[52,60,62,68]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":7,"midi":[52,60,62,68,72]},{"frets":[1,-1,1,2,2,-1],"fingers":[1,0,2,3,4,0],"baseFret":12,"barres":[],"midi":[52,62,68,72]}]},{"key":"E","suffix":"9","positions":[{"frets":[0,2,0,1,0,2],"fingers":[0,2,0,1,0,3],"baseFret":1,"barres":[],"midi":[40,47,50,56,59,66]},{"frets":[4,-1,2,4,3,2],"fingers":[3,0,1,4,2,1],"barres":[2],"baseFret":1,"midi":[44,52,59,62,66]},{"frets":[2,2,1,2,2,2],"fingers":[2,2,1,3,3,4],"barres":[2],"baseFret":6,"midi":[47,52,56,62,66,71]},{"frets":[0,1,1,1,1,2],"fingers":[0,1,1,1,1,2],"barres":[1],"baseFret":9,"midi":[40,54,59,64,68,74]}]},{"key":"E","suffix":"9b5","positions":[{"frets":[0,1,2,1,3,2],"fingers":[0,1,2,1,4,3],"barres":[1],"baseFret":1,"midi":[40,46,52,56,62,66]},{"frets":[0,3,2,1,1,2],"fingers":[0,4,2,1,1,3],"barres":[1],"baseFret":3,"midi":[40,50,54,58,62,68]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[52,56,62,66,70]},{"frets":[0,3,2,1,3,0],"fingers":[0,3,2,1,4,0],"baseFret":7,"barres":[],"midi":[40,54,58,62,68,64]}]},{"key":"E","suffix":"aug9","positions":[{"frets":[0,3,0,1,3,2],"fingers":[0,3,0,1,4,2],"baseFret":1,"barres":[],"midi":[40,48,50,56,62,66]},{"frets":[0,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"baseFret":4,"midi":[40,50,54,60,64,68]},{"frets":[-1,2,1,2,2,3],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":6,"midi":[52,56,62,66,72]},{"frets":[0,1,2,1,1,2],"fingers":[0,1,2,1,1,3],"barres":[1],"baseFret":9,"midi":[40,54,60,64,68,74]}]},{"key":"E","suffix":"7b9","positions":[{"frets":[0,2,0,1,0,1],"fingers":[0,3,0,1,0,2],"baseFret":1,"barres":[],"midi":[40,47,50,56,59,65]},{"frets":[0,2,0,1,3,1],"fingers":[0,3,0,1,4,1],"barres":[1],"baseFret":4,"midi":[40,50,50,59,65,68]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[52,56,62,65,71]},{"frets":[3,2,3,1,-1,-1],"fingers":[3,2,4,1,0,0],"baseFret":10,"barres":[],"midi":[52,56,62,65]}]},{"key":"E","suffix":"7#9","positions":[{"frets":[0,2,0,1,0,3],"fingers":[0,2,0,1,0,4],"baseFret":1,"barres":[],"midi":[40,47,50,56,59,67]},{"frets":[0,3,0,0,1,2],"fingers":[0,3,0,0,1,2],"baseFret":3,"barres":[],"midi":[40,50,50,55,62,68]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":6,"barres":[],"midi":[52,56,62,67]},{"frets":[0,2,1,1,1,2],"fingers":[0,2,1,1,1,3],"barres":[1],"baseFret":9,"midi":[40,55,59,64,68,74]}]},{"key":"E","suffix":"11","positions":[{"frets":[0,0,0,1,0,0],"fingers":[0,0,0,1,0,0],"baseFret":1,"barres":[],"midi":[40,45,50,56,59,64]},{"frets":[0,0,4,4,3,4],"fingers":[0,0,2,3,1,4],"baseFret":1,"barres":[],"midi":[40,45,54,59,62,68]},{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[52,56,62,64,69]},{"frets":[-1,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":7,"midi":[52,57,62,68,71]}]},{"key":"E","suffix":"9#11","positions":[{"frets":[0,1,0,1,0,0],"fingers":[0,1,0,2,0,0],"baseFret":1,"barres":[],"midi":[40,46,50,56,59,64]},{"frets":[0,3,0,1,3,2],"fingers":[0,3,0,1,4,2],"baseFret":3,"barres":[],"midi":[40,50,50,58,64,68]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[52,56,62,66,70]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[52,56,62,66,70,76]}]},{"key":"E","suffix":"13","positions":[{"frets":[0,2,0,1,2,0],"fingers":[0,2,0,1,3,0],"baseFret":1,"barres":[],"midi":[40,47,50,56,61,64]},{"frets":[0,0,0,1,2,2],"fingers":[0,0,0,1,2,3],"baseFret":1,"barres":[],"midi":[40,45,50,56,61,66]},{"frets":[0,1,2,2,1,0],"fingers":[0,1,3,4,2,0],"baseFret":5,"barres":[],"midi":[40,50,56,61,64,64]},{"frets":[1,1,1,1,3,3],"fingers":[1,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,57,62,68,73]}]},{"key":"E","suffix":"maj7","positions":[{"frets":[0,2,1,1,0,0],"fingers":[0,3,1,2,0,0],"baseFret":1,"barres":[],"midi":[40,47,51,56,59,64]},{"frets":[-1,-1,2,4,4,4],"fingers":[0,0,1,3,3,3],"barres":[4],"baseFret":1,"midi":[52,59,63,68]},{"frets":[-1,4,3,1,1,1],"fingers":[0,4,3,1,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[52,56,59,63,68]},{"frets":[1,1,3,2,3,1],"fingers":[1,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,59,63,68,71]}]},{"key":"E","suffix":"maj7b5","positions":[{"frets":[0,1,1,1,4,0],"fingers":[0,1,1,1,4,0],"barres":[1],"baseFret":1,"midi":[40,46,51,56,63,64]},{"frets":[-1,-1,2,3,4,4],"fingers":[0,0,1,2,3,4],"baseFret":1,"barres":[],"midi":[52,58,63,68]},{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":7,"barres":[],"midi":[52,58,63,68]},{"frets":[0,1,3,3,1,1],"fingers":[0,1,3,4,1,1],"barres":[1],"baseFret":11,"midi":[40,56,63,68,70,75]}]},{"key":"E","suffix":"maj7#5","positions":[{"frets":[0,3,2,1,4,4],"fingers":[0,3,2,1,4,4],"barres":[4],"baseFret":1,"midi":[40,48,52,56,63,68]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,52,56,60,63,68]},{"frets":[-1,1,4,2,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":7,"barres":[],"midi":[52,60,63,68]},{"frets":[0,3,2,1,1,3],"fingers":[0,3,2,1,1,4],"barres":[1],"baseFret":9,"midi":[40,56,60,64,68,75]}]},{"key":"E","suffix":"maj9","positions":[{"frets":[0,2,1,1,0,2],"fingers":[0,3,1,2,0,4],"baseFret":1,"barres":[],"midi":[40,47,51,56,59,66]},{"frets":[4,2,2,4,4,2],"fingers":[2,1,1,3,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[44,47,52,59,63,66]},{"frets":[-1,2,1,3,2,-1],"fingers":[0,2,1,4,3,0],"baseFret":6,"barres":[],"midi":[52,56,63,66]},{"frets":[-1,-1,1,3,1,3],"fingers":[0,0,1,3,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[59,66,68,75]}]},{"key":"E","suffix":"maj11","positions":[{"frets":[0,0,1,1,0,0],"fingers":[0,0,1,2,0,0],"baseFret":1,"barres":[],"midi":[40,45,51,56,59,64]},{"frets":[0,0,3,1,1,2],"fingers":[0,0,3,1,1,2],"barres":[1],"baseFret":4,"midi":[40,45,56,59,63,69]},{"frets":[1,1,1,2,3,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,57,63,68,71]},{"frets":[0,3,1,1,2,3],"fingers":[0,3,1,1,2,4],"barres":[1],"baseFret":9,"midi":[40,56,59,64,69,75]}]},{"key":"E","suffix":"maj13","positions":[{"frets":[0,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"baseFret":1,"midi":[40,47,51,56,61,66]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"baseFret":4,"midi":[52,56,61,63,68]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":7,"midi":[52,57,63,68,73]},{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":11,"midi":[52,56,61,66,71,75]}]},{"key":"E","suffix":"m6","positions":[{"frets":[0,2,2,0,2,0],"fingers":[0,1,2,0,3,0],"baseFret":1,"barres":[],"midi":[40,47,52,55,61,64]},{"frets":[0,2,2,4,2,3],"fingers":[0,1,1,3,1,2],"barres":[2],"baseFret":1,"midi":[40,47,52,59,61,67]},{"frets":[-1,3,1,2,1,3],"fingers":[0,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[52,55,61,64,71]},{"frets":[-1,-1,2,2,1,2],"fingers":[0,0,2,3,1,4],"baseFret":8,"barres":[],"midi":[59,64,67,73]}]},{"key":"E","suffix":"m7","positions":[{"frets":[0,2,2,0,3,0],"fingers":[0,2,3,0,4,0],"baseFret":1,"barres":[],"midi":[40,47,52,55,62,64]},{"frets":[0,2,0,0,0,0],"fingers":[0,2,0,0,0,0],"baseFret":1,"barres":[],"midi":[40,47,50,55,59,64]},{"frets":[0,2,2,4,3,3],"fingers":[0,1,1,4,2,3],"barres":[2],"baseFret":1,"midi":[40,47,52,59,62,67]},{"frets":[1,1,3,1,2,1],"fingers":[1,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,59,62,67,71]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":8,"barres":[],"midi":[59,64,67,74]}]},{"key":"E","suffix":"m7b5","positions":[{"frets":[0,1,2,3,3,3],"fingers":[0,1,2,3,3,3],"barres":[3],"baseFret":1,"midi":[40,46,52,58,62,67]},{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":7,"barres":[],"midi":[52,58,62,67]},{"frets":[-1,-1,1,2,1,3],"fingers":[0,0,1,2,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[58,64,67,74]},{"frets":[2,-1,2,2,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":11,"barres":[],"midi":[52,62,67,70]}]},{"key":"E","suffix":"m9","positions":[{"frets":[0,2,0,0,0,2],"fingers":[0,2,0,0,0,4],"baseFret":1,"barres":[],"midi":[40,47,50,55,59,66]},{"frets":[0,2,2,0,3,2],"fingers":[0,1,2,0,4,3],"baseFret":1,"barres":[],"midi":[40,47,52,55,62,66]},{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":5,"midi":[52,55,62,66,71]},{"frets":[0,1,3,2,3,1],"fingers":[0,1,3,2,4,1],"barres":[1],"baseFret":10,"midi":[40,55,62,66,71,74]}]},{"key":"E","suffix":"m69","positions":[{"frets":[0,2,2,0,2,2],"fingers":[0,1,1,0,2,3],"barres":[2],"baseFret":1,"midi":[40,47,52,55,61,66]},{"frets":[3,-1,2,4,2,2],"fingers":[2,0,1,3,1,1],"barres":[2],"baseFret":1,"midi":[43,52,59,61,66]},{"frets":[-1,3,1,2,3,3],"fingers":[0,3,1,2,4,4],"barres":[3],"baseFret":5,"midi":[52,55,61,66,71]},{"frets":[0,1,2,2,3,0],"fingers":[0,1,2,3,4,0],"baseFret":10,"barres":[],"midi":[40,55,61,66,71,64]}]},{"key":"E","suffix":"m11","positions":[{"frets":[0,0,0,0,0,2],"fingers":[0,0,0,0,0,1],"baseFret":1,"barres":[],"midi":[40,45,50,55,59,66]},{"frets":[0,0,3,2,1,0],"fingers":[0,0,3,2,1,0],"baseFret":3,"barres":[],"midi":[40,45,55,59,62,64]},{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[52,55,62,66,69]},{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[52,55,62,66,69,74]}]},{"key":"E","suffix":"mmaj7","positions":[{"frets":[0,2,1,0,0,0],"fingers":[0,2,1,0,0,0],"baseFret":1,"barres":[],"midi":[40,47,51,55,59,64]},{"frets":[0,2,2,4,4,3],"fingers":[0,1,1,3,4,2],"barres":[2],"baseFret":1,"midi":[40,47,52,59,63,67]},{"frets":[-1,4,2,1,1,-1],"fingers":[0,4,2,1,1,0],"barres":[1],"capo":true,"baseFret":4,"midi":[52,55,59,63]},{"frets":[1,1,3,2,2,1],"fingers":[1,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,59,63,67,71]}]},{"key":"E","suffix":"mmaj7b5","positions":[{"frets":[0,1,1,0,-1,0],"fingers":[0,1,2,0,0,0],"baseFret":1,"barres":[],"midi":[40,46,51,55,64]},{"frets":[-1,-1,2,3,4,3],"fingers":[0,0,1,2,4,3],"baseFret":1,"barres":[],"midi":[52,58,63,67]},{"frets":[1,2,3,3,3,-1],"fingers":[1,2,3,3,3,0],"barres":[3],"baseFret":6,"midi":[46,52,58,63,67]},{"frets":[-1,1,2,2,2,-1],"fingers":[0,1,2,3,4,0],"baseFret":7,"barres":[],"midi":[52,58,63,67]}]},{"key":"E","suffix":"mmaj9","positions":[{"frets":[0,2,1,0,0,2],"fingers":[0,2,1,0,0,3],"baseFret":1,"barres":[],"midi":[40,47,51,55,59,66]},{"frets":[0,-1,4,4,4,3],"fingers":[0,0,2,2,4,1],"barres":[4],"baseFret":1,"midi":[40,54,59,63,67]},{"frets":[0,4,3,2,1,0],"fingers":[0,4,3,2,1,0],"baseFret":7,"barres":[],"midi":[40,55,59,63,66,64]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":12,"midi":[52,59,63,67,71,78]}]},{"key":"E","suffix":"mmaj11","positions":[{"frets":[0,0,1,0,0,2],"fingers":[0,0,1,0,0,3],"baseFret":1,"barres":[],"midi":[40,45,51,55,59,66]},{"frets":[-1,2,2,2,4,3],"fingers":[0,1,1,1,3,2],"barres":[2],"capo":true,"baseFret":1,"midi":[47,52,57,63,67]},{"frets":[-1,3,1,4,3,1],"fingers":[0,2,1,4,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[52,55,63,66,69]},{"frets":[1,1,1,2,2,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,57,63,67,71]}]},{"key":"E","suffix":"add9","positions":[{"frets":[0,2,2,1,0,2],"fingers":[0,2,3,1,0,4],"baseFret":1,"barres":[],"midi":[40,47,52,56,59,66]},{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[52,56,59,66,68]},{"frets":[-1,2,1,-1,2,2],"fingers":[0,2,1,0,3,4],"baseFret":6,"barres":[],"midi":[52,56,66,71]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":12,"barres":[],"midi":[64,68,71,78]}]},{"key":"E","suffix":"madd9","positions":[{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[53,56,60,67]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":5,"barres":[],"midi":[53,56,60,67]},{"frets":[-1,3,1,0,1,3],"fingers":[0,3,1,0,2,4],"baseFret":6,"barres":[],"midi":[53,56,55,65,72]},{"frets":[-1,1,3,0,2,1],"fingers":[0,1,4,0,3,2],"baseFret":8,"barres":[],"midi":[53,60,55,68,72]}]},{"key":"E","suffix":"/B","positions":[{"frets":[-1,2,2,1,0,0],"fingers":[0,2,3,1,0,0],"baseFret":1,"barres":[],"midi":[47,52,56,59,64]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,3,4,3],"barres":[1],"baseFret":2,"midi":[47,52,59,64,68]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"baseFret":7,"midi":[47,52,59,64,68,71]}]},{"key":"E","suffix":"m/B","positions":[{"frets":[-1,2,2,0,0,0],"fingers":[0,1,2,0,0,0],"baseFret":1,"barres":[],"midi":[47,52,55,59,64]},{"frets":[-1,2,2,0,0,3],"fingers":[0,1,2,0,0,3],"baseFret":1,"barres":[],"midi":[47,52,55,59,67]},{"frets":[-1,1,1,3,4,2],"fingers":[0,1,1,3,4,2],"baseFret":2,"barres":[],"midi":[47,52,59,64,67]}]},{"key":"E","suffix":"/C#","positions":[{"frets":[-1,1,3,1,2,1],"fingers":[0,1,3,1,2,1],"barres":[1],"baseFret":4,"midi":[49,56,59,64,68]},{"frets":[-1,1,3,1,2,4],"fingers":[0,1,3,1,2,4],"barres":[1],"baseFret":4,"midi":[49,56,59,64,71]},{"frets":[1,3,1,1,4,4],"fingers":[1,3,1,1,4,4],"barres":[1],"baseFret":9,"midi":[49,56,59,64,71,76]}]},{"key":"E","suffix":"m/C#","positions":[{"frets":[-1,4,2,0,0,0],"fingers":[0,3,1,0,0,0],"baseFret":1,"barres":[],"midi":[49,52,55,59,64]},{"frets":[-1,1,2,1,2,4],"fingers":[0,1,2,1,3,4],"baseFret":4,"barres":[],"midi":[49,55,59,64,71]},{"frets":[1,2,1,4,4,4],"fingers":[1,2,1,4,4,4],"barres":[1],"baseFret":9,"midi":[49,55,59,67,71,76]}]},{"key":"E","suffix":"/D","positions":[{"frets":[-1,-1,0,1,0,0],"fingers":[0,0,0,1,0,0],"baseFret":1,"barres":[],"midi":[50,56,59,64]},{"frets":[-1,2,3,1,2,1],"fingers":[0,2,4,1,3,1],"barres":[1],"baseFret":4,"midi":[50,56,59,64,68]},{"frets":[-1,4,1,3,4,3],"fingers":[0,3,1,2,4,2],"barres":[3],"baseFret":2,"midi":[50,52,59,64,68]}]},{"key":"E","suffix":"m/D","positions":[{"frets":[-1,-1,0,0,0,0],"fingers":[0,0,0,0,0,0],"baseFret":1,"barres":[],"midi":[50,55,59,64]},{"frets":[-1,2,2,1,2,-1],"fingers":[0,2,3,1,4,0],"baseFret":4,"barres":[],"midi":[50,55,59,64]},{"frets":[-1,-1,1,1,1,1],"fingers":[0,0,1,1,1,1],"barres":[1],"baseFret":12,"midi":[62,67,71,76]}]},{"key":"E","suffix":"/D#","positions":[{"frets":[-1,-1,1,1,0,0],"fingers":[0,0,1,2,0,0],"baseFret":1,"barres":[],"midi":[51,56,59,64]},{"frets":[-1,3,3,1,2,1],"fingers":[0,3,4,1,2,1],"barres":[1],"baseFret":4,"midi":[51,56,59,64,68]},{"frets":[3,3,1,1,4,4],"fingers":[2,3,1,1,4,4],"barres":[1],"baseFret":9,"midi":[51,56,59,64,71,76]}]},{"key":"E","suffix":"m/D#","positions":[{"frets":[-1,-1,1,0,0,0],"fingers":[0,0,1,0,0,0],"baseFret":1,"barres":[],"midi":[51,55,59,64]},{"frets":[-1,3,2,1,2,-1],"fingers":[0,4,2,1,3,0],"baseFret":4,"barres":[],"midi":[51,55,59,64]},{"frets":[-1,1,4,4,3,-1],"fingers":[0,1,3,4,2,0],"baseFret":6,"barres":[],"midi":[51,59,64,67]}]},{"key":"E","suffix":"/F","positions":[{"frets":[1,2,2,1,0,0],"fingers":[1,3,4,2,0,0],"baseFret":1,"barres":[],"midi":[41,47,52,56,59,64]},{"frets":[-1,-1,3,1,0,0],"fingers":[0,0,3,1,0,0],"baseFret":1,"barres":[],"midi":[53,56,59,64]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":3,"barres":[],"midi":[53,59,64,68]}]},{"key":"E","suffix":"/F#","positions":[{"frets":[2,2,2,1,0,0],"fingers":[2,3,4,1,0,0],"baseFret":1,"barres":[],"midi":[42,47,52,56,59,64]},{"frets":[-1,-1,1,1,2,1],"fingers":[0,0,1,1,2,1],"barres":[1],"baseFret":4,"midi":[54,59,64,68]},{"frets":[1,1,1,3,4,3],"fingers":[1,1,1,3,4,3],"barres":[1],"baseFret":2,"midi":[42,47,52,59,64,68]}]},{"key":"E","suffix":"/G","positions":[{"frets":[3,2,2,1,0,0],"fingers":[4,2,3,1,0,0],"baseFret":1,"barres":[],"midi":[43,47,52,56,59,64]},{"frets":[2,1,1,3,4,3],"fingers":[2,1,1,3,4,3],"barres":[1],"baseFret":2,"midi":[43,47,52,59,64,68]},{"frets":[-1,-1,2,1,2,1],"fingers":[0,0,3,1,4,2],"baseFret":4,"barres":[],"midi":[55,59,64,68]}]},{"key":"E","suffix":"/G#","positions":[{"frets":[-1,-1,-1,1,0,0],"fingers":[0,0,0,1,0,0],"baseFret":1,"barres":[],"midi":[56,59,64]},{"frets":[4,2,2,1,0,0],"fingers":[4,2,3,1,0,0],"baseFret":1,"barres":[],"midi":[44,47,52,56,59,64]},{"frets":[1,4,3,1,2,1],"fingers":[1,4,3,1,2,1],"barres":[1],"baseFret":4,"midi":[44,52,56,59,64,68]},{"frets":[3,1,1,3,4,-1],"fingers":[2,1,1,3,4,0],"barres":[1],"baseFret":2,"midi":[44,47,52,59,64]}]},{"key":"E","suffix":"m/F","positions":[{"frets":[-1,-1,3,0,0,0],"fingers":[0,0,1,0,0,0],"baseFret":1,"barres":[],"midi":[53,55,59,64]},{"frets":[1,2,2,0,0,0],"fingers":[1,2,3,0,0,0],"baseFret":1,"barres":[],"midi":[41,47,52,55,59,64]},{"frets":[1,2,2,0,0,3],"fingers":[1,2,3,0,0,4],"baseFret":1,"barres":[],"midi":[41,47,52,55,59,67]}]},{"key":"E","suffix":"m/F#","positions":[{"frets":[2,2,2,0,0,0],"fingers":[1,2,3,0,0,0],"baseFret":1,"barres":[],"midi":[42,47,52,55,59,64]},{"frets":[2,2,2,0,0,3],"fingers":[1,2,3,0,0,4],"baseFret":1,"barres":[],"midi":[42,47,52,55,59,67]},{"frets":[1,1,1,3,4,2],"fingers":[1,1,1,3,4,2],"barres":[1],"baseFret":2,"midi":[42,47,52,59,64,67]}]},{"key":"E","suffix":"m/G","positions":[{"frets":[3,2,2,0,0,0],"fingers":[3,1,2,0,0,0],"baseFret":1,"barres":[],"midi":[43,47,52,55,59,64]},{"frets":[3,2,2,0,0,3],"fingers":[3,1,2,0,0,4],"baseFret":1,"barres":[],"midi":[43,47,52,55,59,67]},{"frets":[2,1,1,3,4,0],"fingers":[2,1,1,3,4,0],"barres":[1],"baseFret":2,"midi":[43,47,52,59,64,64]}]},{"key":"E","suffix":"m/G#","positions":[{"frets":[4,2,2,0,0,0],"fingers":[4,1,2,0,0,0],"baseFret":1,"barres":[],"midi":[44,47,52,55,59,64]},{"frets":[1,4,2,1,2,-1],"fingers":[1,4,2,1,3,0],"barres":[1],"baseFret":4,"midi":[44,52,55,59,64]},{"frets":[-1,-1,4,2,3,1],"fingers":[0,0,4,2,3,1],"baseFret":3,"barres":[],"midi":[56,59,64,67]}]}],"F":[{"key":"F","suffix":"major","positions":[{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,53,57,60,65]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,2,4,3],"barres":[1],"capo":true,"baseFret":3,"midi":[48,53,60,65,69]},{"frets":[1,4,3,1,2,1],"fingers":[1,4,3,1,2,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,53,57,60,65,69]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,65,69,72]}]},{"key":"F","suffix":"minor","positions":[{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,53,56,60,65]},{"frets":[-1,-1,1,3,4,2],"fingers":[0,0,1,3,4,2],"baseFret":3,"barres":[],"midi":[53,60,65,68]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,65,68,72]},{"frets":[4,2,1,1,-1,-1],"fingers":[4,2,1,1,0,0],"barres":[1],"capo":true,"baseFret":10,"midi":[53,56,60,65]}]},{"key":"F","suffix":"dim","positions":[{"frets":[-1,-1,3,4,-1,4],"fingers":[0,0,1,2,0,3],"baseFret":1,"barres":[],"midi":[53,59,68]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":6,"barres":[],"midi":[53,56,65,71]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":8,"barres":[],"midi":[53,59,65,68]},{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":11,"barres":[],"midi":[53,56,68,71]}]},{"key":"F","suffix":"dim7","positions":[{"frets":[1,-1,0,1,0,1],"fingers":[1,0,0,2,0,3],"baseFret":1,"barres":[],"midi":[41,50,56,59,65]},{"frets":[-1,-1,3,4,3,4],"fingers":[0,0,1,3,1,4],"barres":[3],"capo":true,"baseFret":1,"midi":[53,59,62,68]},{"frets":[1,2,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,53,59,62,68,71]},{"frets":[2,-1,1,2,1,-1],"fingers":[3,0,1,4,2,0],"baseFret":12,"barres":[],"midi":[53,62,68,71]}]},{"key":"F","suffix":"sus2","positions":[{"frets":[1,3,3,-1,1,3],"fingers":[1,2,3,0,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,53,60,67]},{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,53,60,65,67]},{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,65,67,72]},{"frets":[4,1,1,3,4,-1],"fingers":[3,1,1,2,4,0],"barres":[1],"capo":true,"baseFret":10,"midi":[53,55,60,67,72]}]},{"key":"F","suffix":"sus4","positions":[{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,53,58,60,65]},{"frets":[-1,-1,1,3,4,4],"fingers":[0,0,1,2,3,4],"baseFret":3,"barres":[],"midi":[53,60,65,70]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,65,70,72]},{"frets":[-1,-1,1,1,2,-1],"fingers":[0,0,1,1,2,0],"barres":[1],"capo":true,"baseFret":10,"midi":[60,65,70]}]},{"key":"F","suffix":"7sus4","positions":[{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,51,58,60,65]},{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,58,63,65,70]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,63,70,72]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,3,4],"barres":[1],"capo":true,"baseFret":10,"midi":[60,65,70,75]}]},{"key":"F","suffix":"alt","positions":[{"frets":[1,2,3,2,0,-1],"fingers":[1,2,4,3,0,0],"baseFret":1,"barres":[],"midi":[41,47,53,57,59]},{"frets":[-1,-1,1,2,0,3],"fingers":[0,0,1,2,0,3],"baseFret":3,"barres":[],"midi":[53,59,59,69]},{"frets":[-1,1,2,3,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":8,"barres":[],"midi":[53,59,65,69]},{"frets":[2,1,-1,3,1,2],"fingers":[2,1,0,4,1,3],"barres":[1],"capo":true,"baseFret":12,"midi":[53,57,69,71,77]}]},{"key":"F","suffix":"aug","positions":[{"frets":[-1,-1,3,2,2,1],"fingers":[0,0,4,2,3,1],"baseFret":1,"barres":[],"midi":[53,57,61,65]},{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":6,"midi":[53,57,61,65]},{"frets":[-1,1,-1,3,3,2],"fingers":[0,1,0,3,4,2],"baseFret":8,"barres":[],"midi":[53,65,69,73]},{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"baseFret":10,"midi":[53,57,61,65,69]}]},{"key":"F","suffix":"6","positions":[{"frets":[1,-1,3,2,3,1],"fingers":[1,0,3,2,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,53,57,62,65]},{"frets":[-1,1,1,3,1,3],"fingers":[0,1,1,3,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[48,53,60,62,69]},{"frets":[-1,3,2,2,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":6,"barres":[],"midi":[53,57,62,65]},{"frets":[1,1,3,3,3,3],"fingers":[1,1,3,3,3,3],"barres":[1,3],"baseFret":8,"midi":[48,53,60,65,69,74]}]},{"key":"F","suffix":"69","positions":[{"frets":[1,0,0,0,1,1],"fingers":[1,0,0,0,2,3],"baseFret":1,"barres":[],"midi":[41,45,50,55,60,65]},{"frets":[-1,-1,3,2,3,3],"fingers":[0,0,2,1,3,4],"baseFret":1,"barres":[],"midi":[53,57,62,67]},{"frets":[-1,1,1,1,2,1],"fingers":[0,1,1,1,2,1],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,60,65,69]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":7,"midi":[53,57,62,67,72]}]},{"key":"F","suffix":"7","positions":[{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,51,57,60,65]},{"frets":[-1,1,1,3,2,3],"fingers":[0,1,1,3,2,4],"barres":[1],"capo":true,"baseFret":3,"midi":[48,53,60,63,69]},{"frets":[1,1,3,1,3,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,63,69,72]},{"frets":[-1,-1,1,1,1,2],"fingers":[0,0,1,1,1,2],"barres":[1],"capo":true,"baseFret":10,"midi":[60,65,69,75]}]},{"key":"F","suffix":"7b5","positions":[{"frets":[1,0,1,2,0,1],"fingers":[1,0,2,4,0,3],"baseFret":1,"barres":[],"midi":[41,45,51,57,59,65]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":3,"barres":[],"midi":[53,59,63,69]},{"frets":[-1,-1,2,3,1,2],"fingers":[0,0,2,4,1,3],"baseFret":6,"barres":[],"midi":[57,63,65,71]},{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"capo":true,"baseFret":8,"midi":[53,59,63,69]}]},{"key":"F","suffix":"aug7","positions":[{"frets":[1,0,1,2,2,-1],"fingers":[1,0,2,3,4,0],"baseFret":1,"barres":[],"midi":[41,45,51,57,61]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":3,"barres":[],"midi":[53,61,63,69]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":8,"midi":[53,61,63,69,73]},{"frets":[2,1,2,-1,3,-1],"fingers":[2,1,3,0,4,0],"baseFret":12,"barres":[],"midi":[53,57,63,73]}]},{"key":"F","suffix":"9","positions":[{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,51,57,60,67]},{"frets":[-1,-1,3,2,4,3],"fingers":[0,0,2,1,4,3],"baseFret":1,"barres":[],"midi":[53,57,63,67]},{"frets":[2,2,1,2,2,2],"fingers":[2,2,1,3,3,4],"barres":[2],"baseFret":7,"midi":[48,53,57,63,67,72]},{"frets":[-1,1,1,1,1,2],"fingers":[0,1,1,1,1,2],"barres":[1],"baseFret":10,"midi":[55,60,65,69,75]}]},{"key":"F","suffix":"9b5","positions":[{"frets":[1,0,1,0,0,1],"fingers":[1,0,2,0,0,3],"baseFret":1,"barres":[],"midi":[41,45,51,55,59,65]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[53,57,63,67,71]},{"frets":[-1,1,2,0,3,4],"fingers":[0,1,2,0,3,4],"baseFret":8,"barres":[],"midi":[53,59,55,69,75]},{"frets":[2,1,2,0,0,2],"fingers":[2,1,2,0,0,3],"barres":[2],"baseFret":12,"midi":[53,57,63,55,59,77]}]},{"key":"F","suffix":"aug9","positions":[{"frets":[1,0,1,0,2,1],"fingers":[1,0,2,0,4,3],"baseFret":1,"barres":[],"midi":[41,45,51,55,61,65]},{"frets":[1,2,1,2,2,1],"fingers":[1,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,51,55,61,65,69]},{"frets":[-1,2,1,2,2,3],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":7,"midi":[53,57,63,67,73]},{"frets":[2,1,2,1,3,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"capo":true,"baseFret":12,"midi":[53,57,63,67,73]}]},{"key":"F","suffix":"7b9","positions":[{"frets":[1,3,1,2,1,2],"fingers":[1,4,1,2,1,3],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,51,57,60,66]},{"frets":[-1,-1,3,2,4,2],"fingers":[0,0,2,1,3,1],"barres":[2],"capo":true,"baseFret":1,"midi":[53,57,63,66]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[53,57,63,66,72]},{"frets":[3,2,3,1,-1,-1],"fingers":[3,2,4,1,0,0],"baseFret":11,"barres":[],"midi":[53,57,63,66]}]},{"key":"F","suffix":"7#9","positions":[{"frets":[1,3,1,2,1,4],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,51,57,60,68]},{"frets":[-1,-1,3,2,4,4],"fingers":[0,0,2,1,3,4],"baseFret":1,"barres":[],"midi":[53,57,63,68]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":7,"barres":[],"midi":[53,57,63,68]},{"frets":[-1,2,1,1,1,2],"fingers":[0,2,1,1,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[56,60,65,69,75]}]},{"key":"F","suffix":"11","positions":[{"frets":[1,1,1,2,1,1],"fingers":[1,1,1,2,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,46,51,57,60,65]},{"frets":[1,1,1,1,2,3],"fingers":[1,1,1,1,2,3],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,53,58,63,69]},{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[53,57,63,65,70]},{"frets":[-1,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,63,69,72]}]},{"key":"F","suffix":"9#11","positions":[{"frets":[1,0,1,0,0,1],"fingers":[1,0,2,0,0,3],"baseFret":1,"barres":[],"midi":[41,45,51,55,59,65]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":3,"barres":[],"midi":[53,59,63,69]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[53,57,63,67,71]},{"frets":[-1,1,2,1,3,1],"fingers":[0,1,2,1,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[53,59,63,69,72]}]},{"key":"F","suffix":"13","positions":[{"frets":[1,3,1,2,3,1],"fingers":[1,3,1,2,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,51,57,62,65]},{"frets":[1,1,1,2,3,3],"fingers":[1,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":1,"midi":[41,46,51,57,62,67]},{"frets":[-1,2,1,2,4,4],"fingers":[0,2,1,3,4,4],"barres":[4],"baseFret":7,"midi":[53,57,63,69,74]},{"frets":[1,1,1,1,3,3],"fingers":[1,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,58,63,69,74]}]},{"key":"F","suffix":"maj7","positions":[{"frets":[-1,-1,3,2,1,0],"fingers":[0,0,3,2,1,0],"baseFret":1,"barres":[],"midi":[53,57,60,64]},{"frets":[1,3,2,2,1,1],"fingers":[1,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,52,57,60,65]},{"frets":[-1,1,1,3,3,3],"fingers":[0,1,1,3,3,3],"barres":[1],"capo":true,"baseFret":3,"midi":[48,53,60,64,69]},{"frets":[1,1,3,2,3,1],"fingers":[1,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,64,69,72]}]},{"key":"F","suffix":"maj7b5","positions":[{"frets":[1,0,2,2,0,0],"fingers":[1,0,2,3,0,0],"baseFret":1,"barres":[],"midi":[41,45,52,57,59,64]},{"frets":[-1,-1,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":3,"barres":[],"midi":[53,59,64,69]},{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":8,"barres":[],"midi":[53,59,64,69]},{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":12,"midi":[53,57,64,69,71,76]}]},{"key":"F","suffix":"maj7#5","positions":[{"frets":[1,0,2,2,2,0],"fingers":[1,0,2,3,4,0],"baseFret":1,"barres":[],"midi":[41,45,52,57,61,64]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,53,57,61,64,69]},{"frets":[-1,1,4,2,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":8,"barres":[],"midi":[53,61,64,69]},{"frets":[-1,-1,4,3,3,1],"fingers":[0,0,4,2,3,1],"baseFret":12,"barres":[],"midi":[65,69,73,76]}]},{"key":"F","suffix":"maj9","positions":[{"frets":[1,0,2,0,1,0],"fingers":[1,0,3,0,2,0],"baseFret":1,"barres":[],"midi":[41,45,52,55,60,64]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":1,"barres":[],"midi":[52,57,60,67]},{"frets":[-1,2,1,3,2,-1],"fingers":[0,2,1,4,3,0],"baseFret":7,"barres":[],"midi":[53,57,64,67]},{"frets":[-1,-1,1,3,1,3],"fingers":[0,0,1,3,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[60,67,69,76]}]},{"key":"F","suffix":"maj11","positions":[{"frets":[1,1,2,2,1,1],"fingers":[1,1,2,3,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,46,52,57,60,65]},{"frets":[-1,-1,1,1,3,3],"fingers":[0,0,1,1,3,4],"barres":[1],"capo":true,"baseFret":3,"midi":[53,58,64,69]},{"frets":[1,1,1,2,3,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,58,64,69,72]},{"frets":[3,2,4,0,1,0],"fingers":[3,2,4,0,1,0],"baseFret":11,"barres":[],"midi":[53,57,64,55,70,64]}]},{"key":"F","suffix":"maj13","positions":[{"frets":[1,0,0,0,1,0],"fingers":[1,0,0,0,2,0],"baseFret":1,"barres":[],"midi":[41,45,50,55,60,64]},{"frets":[-1,-1,3,2,3,0],"fingers":[0,0,2,1,3,0],"baseFret":1,"barres":[],"midi":[53,57,62,64]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"baseFret":5,"midi":[53,57,62,64,69]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,64,69,74]}]},{"key":"F","suffix":"m6","positions":[{"frets":[1,-1,0,1,1,1],"fingers":[1,0,0,2,3,4],"baseFret":1,"barres":[],"midi":[41,50,56,60,65]},{"frets":[-1,-1,1,3,1,2],"fingers":[0,0,1,3,1,2],"barres":[1],"capo":true,"baseFret":3,"midi":[53,60,62,68]},{"frets":[-1,3,1,2,1,3],"fingers":[0,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[53,56,62,65,72]},{"frets":[-1,-1,2,2,1,2],"fingers":[0,0,2,3,1,4],"baseFret":9,"barres":[],"midi":[60,65,68,74]}]},{"key":"F","suffix":"m7","positions":[{"frets":[1,3,1,1,1,1],"fingers":[1,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,51,56,60,65]},{"frets":[-1,-1,1,3,2,2],"fingers":[0,0,1,4,2,3],"baseFret":3,"barres":[],"midi":[53,60,63,68]},{"frets":[1,1,3,1,2,1],"fingers":[1,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,63,68,72]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":9,"barres":[],"midi":[60,65,68,75]}]},{"key":"F","suffix":"m7b5","positions":[{"frets":[1,-1,1,1,0,-1],"fingers":[1,0,2,3,0,0],"baseFret":1,"barres":[],"midi":[41,51,56,59]},{"frets":[-1,-1,3,4,4,4],"fingers":[0,0,1,2,2,2],"barres":[4],"baseFret":1,"midi":[53,59,63,68]},{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":8,"barres":[],"midi":[53,59,63,68]},{"frets":[3,1,3,3,0,-1],"fingers":[2,1,3,4,0,0],"baseFret":11,"barres":[],"midi":[53,56,63,68,59]}]},{"key":"F","suffix":"m9","positions":[{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,51,56,60,67]},{"frets":[-1,3,3,0,4,4],"fingers":[0,1,2,0,3,4],"baseFret":1,"barres":[],"midi":[48,53,55,63,68]},{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":6,"midi":[53,56,63,67,72]},{"frets":[3,1,3,0,3,3],"fingers":[2,1,3,0,4,4],"barres":[3],"baseFret":11,"midi":[53,56,63,55,72,77]}]},{"key":"F","suffix":"m69","positions":[{"frets":[1,3,3,1,3,3],"fingers":[1,2,2,1,3,4],"barres":[1,3],"capo":true,"baseFret":1,"midi":[41,48,53,56,62,67]},{"frets":[2,-1,1,3,1,1],"fingers":[2,0,1,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[44,53,60,62,67]},{"frets":[-1,3,1,2,3,-1],"fingers":[0,3,1,2,4,0],"baseFret":6,"barres":[],"midi":[53,56,62,67]},{"frets":[3,1,2,0,3,-1],"fingers":[3,1,2,0,4,0],"baseFret":11,"barres":[],"midi":[53,56,62,55,72]}]},{"key":"F","suffix":"m11","positions":[{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[41,46,51,56,60,67]},{"frets":[-1,-1,3,3,4,4],"fingers":[0,0,1,1,2,3],"barres":[3],"capo":true,"baseFret":1,"midi":[53,58,63,68]},{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[53,56,63,67,70]},{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[53,56,63,67,70,75]}]},{"key":"F","suffix":"mmaj7","positions":[{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,52,56,60,65]},{"frets":[-1,-1,1,3,3,2],"fingers":[0,0,1,3,4,2],"baseFret":3,"barres":[],"midi":[53,60,64,68]},{"frets":[1,1,3,2,2,1],"fingers":[1,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,60,64,68,72]},{"frets":[-1,-1,4,2,2,1],"fingers":[0,0,4,2,3,1],"baseFret":12,"barres":[],"midi":[65,68,72,76]}]},{"key":"F","suffix":"mmaj7b5","positions":[{"frets":[1,2,2,1,0,0],"fingers":[1,2,3,1,0,0],"barres":[1],"baseFret":1,"midi":[41,47,52,56,59,64]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":3,"barres":[],"midi":[53,59,64,68]},{"frets":[1,2,3,3,3,-1],"fingers":[1,2,3,3,3,0],"barres":[3],"baseFret":7,"midi":[47,53,59,64,68]},{"frets":[-1,1,2,2,2,-1],"fingers":[0,1,2,3,4,0],"baseFret":8,"barres":[],"midi":[53,59,64,68]}]},{"key":"F","suffix":"mmaj9","positions":[{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[41,48,52,56,60,67]},{"frets":[-1,-1,1,0,3,2],"fingers":[0,0,1,0,4,2],"baseFret":3,"barres":[],"midi":[53,55,64,68]},{"frets":[-1,3,1,4,3,-1],"fingers":[0,2,1,4,3,0],"baseFret":6,"barres":[],"midi":[53,56,64,67]},{"frets":[3,1,-1,2,3,0],"fingers":[3,1,0,2,4,0],"baseFret":11,"barres":[],"midi":[53,56,67,72,64]}]},{"key":"F","suffix":"mmaj11","positions":[{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[41,46,52,56,60,67]},{"frets":[-1,1,1,1,3,2],"fingers":[0,1,1,1,3,2],"barres":[1],"capo":true,"baseFret":3,"midi":[48,53,58,64,68]},{"frets":[-1,3,1,4,3,1],"fingers":[0,2,1,4,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[53,56,64,67,70]},{"frets":[1,1,1,2,2,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,58,64,68,72]}]},{"key":"F","suffix":"add9","positions":[{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":1,"barres":[],"midi":[53,57,60,67]},{"frets":[-1,-1,1,0,4,3],"fingers":[0,0,1,0,4,3],"baseFret":3,"barres":[],"midi":[53,55,65,69]},{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[53,57,60,67,69]},{"frets":[-1,2,1,0,2,2],"fingers":[0,2,1,0,3,4],"baseFret":7,"barres":[],"midi":[53,57,55,67,72]}]},{"key":"F","suffix":"madd9","positions":[{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[53,56,60,67]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":5,"barres":[],"midi":[53,56,60,67]},{"frets":[-1,3,1,0,1,3],"fingers":[0,3,1,0,2,4],"baseFret":6,"barres":[],"midi":[53,56,55,65,72]},{"frets":[-1,1,3,0,2,1],"fingers":[0,1,4,0,3,2],"baseFret":8,"barres":[],"midi":[53,60,55,68,72]}]},{"key":"F","suffix":"/C","positions":[{"frets":[-1,3,3,2,1,1],"fingers":[0,3,4,2,1,1],"barres":[1],"baseFret":1,"midi":[48,53,57,60,65]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,3,4,3],"barres":[1],"baseFret":3,"midi":[48,53,60,65,69]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"baseFret":8,"midi":[48,53,60,65,69,72]}]},{"key":"F","suffix":"/D","positions":[{"frets":[-1,-1,0,2,1,1],"fingers":[0,0,0,2,1,1],"barres":[1],"baseFret":1,"midi":[50,57,60,65]},{"frets":[-1,1,3,1,2,1],"fingers":[0,1,3,1,2,1],"barres":[1],"baseFret":5,"midi":[50,57,60,65,69]},{"frets":[-1,1,3,1,2,4],"fingers":[0,1,3,1,2,4],"baseFret":5,"barres":[],"midi":[50,57,60,65,72]}]},{"key":"F","suffix":"/D#","positions":[{"frets":[-1,-1,1,2,1,1],"fingers":[0,0,1,2,1,1],"barres":[1],"baseFret":1,"midi":[51,57,60,65]},{"frets":[-1,2,3,1,2,1],"fingers":[0,2,4,1,3,1],"barres":[1],"baseFret":5,"midi":[51,57,60,65,69]},{"frets":[-1,4,1,3,4,3],"fingers":[0,3,1,2,4,2],"barres":[3],"baseFret":3,"midi":[51,53,60,65,69]}]},{"key":"F","suffix":"/E","positions":[{"frets":[0,0,3,2,1,1],"fingers":[0,0,3,2,1,1],"barres":[1],"baseFret":1,"midi":[40,45,53,57,60,65]},{"frets":[-1,-1,2,2,1,1],"fingers":[0,0,2,3,1,1],"barres":[1],"baseFret":1,"midi":[52,57,60,65]},{"frets":[0,3,3,2,1,1],"fingers":[0,3,4,2,1,1],"barres":[1],"baseFret":1,"midi":[40,48,53,57,60,65]}]},{"key":"F","suffix":"/G","positions":[{"frets":[3,0,3,2,1,1],"fingers":[3,0,4,2,1,1],"barres":[1],"baseFret":1,"midi":[43,45,53,57,60,65]},{"frets":[3,3,3,2,-1,-1],"fingers":[2,3,4,1,0,0],"baseFret":1,"barres":[],"midi":[43,48,53,57]},{"frets":[1,1,1,3,4,3],"fingers":[1,1,1,3,4,3],"barres":[1],"baseFret":3,"midi":[43,48,53,60,65,69]}]},{"key":"F","suffix":"/A","positions":[{"frets":[-1,0,3,2,1,1],"fingers":[0,0,3,2,1,1],"barres":[1],"baseFret":1,"midi":[45,53,57,60,65]},{"frets":[4,2,2,1,-1,-1],"fingers":[4,2,3,1,0,0],"baseFret":2,"barres":[],"midi":[45,48,53,57]},{"frets":[3,1,1,3,4,0],"fingers":[2,1,1,3,4,0],"barres":[1],"baseFret":3,"midi":[45,48,53,60,65,64]}]},{"key":"F","suffix":"m/C","positions":[{"frets":[-1,3,3,1,1,1],"fingers":[0,3,4,1,1,1],"barres":[1],"baseFret":1,"midi":[48,53,56,60,65]},{"frets":[-1,3,3,1,1,4],"fingers":[0,2,3,1,1,4],"barres":[1],"baseFret":1,"midi":[48,53,56,60,68]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"baseFret":8,"midi":[48,53,60,65,68,72]}]}],"Fsharp":[{"key":"F#","suffix":"major","positions":[{"frets":[2,4,4,3,2,2],"fingers":[1,3,4,2,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,54,58,61,66]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,2,4,3],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,61,66,70]},{"frets":[1,4,3,1,2,1],"fingers":[1,4,3,1,2,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,54,58,61,66,70]},{"frets":[1,1,3,3,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,66,70,73]}]},{"key":"F#","suffix":"minor","positions":[{"frets":[2,4,4,2,2,2],"fingers":[1,3,4,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,54,57,61,66]},{"frets":[-1,1,1,3,4,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,61,66,69]},{"frets":[-1,-1,3,2,3,1],"fingers":[0,0,3,2,4,1],"baseFret":5,"barres":[],"midi":[57,61,66,69]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,66,69,73]}]},{"key":"F#","suffix":"dim","positions":[{"frets":[2,0,-1,2,1,-1],"fingers":[2,0,0,3,1,0],"baseFret":1,"barres":[],"midi":[42,45,57,60]},{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":4,"barres":[],"midi":[54,60,69]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":7,"barres":[],"midi":[54,57,66,72]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":9,"barres":[],"midi":[54,60,66,69]}]},{"key":"F#","suffix":"dim7","positions":[{"frets":[2,-1,1,2,1,-1],"fingers":[2,0,1,3,1,0],"barres":[1],"capo":true,"baseFret":1,"midi":[42,51,57,60]},{"frets":[2,3,4,2,4,2],"fingers":[1,2,3,1,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,48,54,57,63,66]},{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":4,"barres":[],"midi":[54,60,63,69]},{"frets":[1,2,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,54,60,63,69,72]}]},{"key":"F#","suffix":"sus2","positions":[{"frets":[2,-1,-1,1,2,2],"fingers":[2,0,0,1,3,4],"baseFret":1,"barres":[],"midi":[42,56,61,66]},{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,54,61,66,68]},{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,66,68,73]},{"frets":[4,1,1,3,4,-1],"fingers":[3,1,1,2,4,0],"barres":[1],"capo":true,"baseFret":11,"midi":[54,56,61,68,73]}]},{"key":"F#","suffix":"sus4","positions":[{"frets":[2,4,4,4,2,2],"fingers":[1,2,3,4,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,54,59,61,66]},{"frets":[-1,1,1,3,4,4],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,61,66,71]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,66,71,73]},{"frets":[-1,-1,1,1,2,4],"fingers":[0,0,1,1,2,4],"barres":[1],"capo":true,"baseFret":11,"midi":[61,66,71,78]}]},{"key":"F#","suffix":"7sus4","positions":[{"frets":[2,4,2,4,2,2],"fingers":[1,3,1,4,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,52,59,61,66]},{"frets":[-1,-1,1,3,2,4],"fingers":[0,0,1,3,2,4],"baseFret":4,"barres":[],"midi":[54,61,64,71]},{"frets":[-1,3,3,3,1,1],"fingers":[0,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[54,59,64,66,71]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,64,71,73]}]},{"key":"F#","suffix":"alt","positions":[{"frets":[-1,-1,4,3,1,2],"fingers":[0,0,4,3,1,2],"baseFret":1,"barres":[],"midi":[54,58,60,66]},{"frets":[2,3,4,3,-1,2],"fingers":[1,2,4,3,0,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,48,54,58,66]},{"frets":[-1,-1,1,2,4,3],"fingers":[0,0,1,2,4,3],"baseFret":4,"barres":[],"midi":[54,60,66,70]},{"frets":[-1,1,2,3,3,1],"fingers":[0,1,2,3,4,0],"barres":[1],"capo":true,"baseFret":9,"midi":[54,60,66,70,73]}]},{"key":"F#","suffix":"aug","positions":[{"frets":[-1,-1,4,3,3,2],"fingers":[0,0,4,2,3,1],"baseFret":1,"barres":[],"midi":[54,58,62,66]},{"frets":[-1,-1,4,3,3,-1],"fingers":[0,0,2,1,1,0],"barres":[3],"capo":true,"baseFret":1,"midi":[54,58,62]},{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":7,"midi":[54,58,62,66]},{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":11,"midi":[54,58,62,66,70]}]},{"key":"F#","suffix":"6","positions":[{"frets":[2,-1,1,3,2,-1],"fingers":[2,0,1,4,3,0],"baseFret":1,"barres":[],"midi":[42,51,58,61]},{"frets":[2,-1,4,3,4,2],"fingers":[1,0,3,2,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,54,58,63,66]},{"frets":[-1,1,1,3,1,3],"fingers":[0,1,1,3,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,61,63,70]},{"frets":[-1,1,3,3,3,3],"fingers":[0,1,3,3,3,3],"barres":[3],"baseFret":9,"midi":[54,61,66,70,75]}]},{"key":"F#","suffix":"69","positions":[{"frets":[2,1,1,1,2,2],"fingers":[2,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":1,"midi":[42,46,51,56,61,66]},{"frets":[-1,-1,4,3,4,4],"fingers":[0,0,2,1,3,4],"baseFret":1,"barres":[],"midi":[54,58,63,68]},{"frets":[-1,1,1,1,2,1],"fingers":[0,1,1,1,2,1],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,61,66,70]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":8,"midi":[54,58,63,68,73]}]},{"key":"F#","suffix":"7","positions":[{"frets":[2,4,2,3,2,2],"fingers":[1,3,1,2,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,52,58,61,66]},{"frets":[-1,1,1,3,2,3],"fingers":[0,1,1,3,2,4],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,61,64,70]},{"frets":[-1,3,2,3,1,-1],"fingers":[0,3,2,4,1,0],"baseFret":7,"barres":[],"midi":[54,58,64,66]},{"frets":[1,1,3,1,3,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,64,70,73]}]},{"key":"F#","suffix":"7b5","positions":[{"frets":[2,-1,2,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":1,"barres":[],"midi":[42,52,58,60]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":4,"barres":[],"midi":[54,60,64,70]},{"frets":[-1,1,2,3,1,2],"fingers":[0,1,2,4,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[52,58,64,66,72]},{"frets":[-1,1,2,1,3,0],"fingers":[0,1,2,1,3,0],"barres":[1],"baseFret":9,"midi":[54,60,64,70,64]}]},{"key":"F#","suffix":"aug7","positions":[{"frets":[2,-1,2,3,3,-1],"fingers":[1,0,2,3,4,0],"baseFret":1,"barres":[],"midi":[42,52,58,62]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":4,"barres":[],"midi":[54,62,64,70]},{"frets":[-1,3,2,1,1,0],"fingers":[0,4,3,1,2,0],"baseFret":7,"barres":[],"midi":[54,58,62,66,64]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":9,"midi":[54,62,64,70,74]}]},{"key":"F#","suffix":"9","positions":[{"frets":[2,4,2,3,2,4],"fingers":[1,3,1,2,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,52,58,61,68]},{"frets":[-1,-1,2,1,3,2],"fingers":[0,0,2,1,4,3],"baseFret":3,"barres":[],"midi":[54,58,64,68]},{"frets":[2,2,1,2,2,2],"fingers":[2,2,1,3,3,4],"barres":[2],"baseFret":8,"midi":[49,54,58,64,68,73]},{"frets":[-1,1,1,1,1,2],"fingers":[0,1,1,1,1,2],"barres":[1],"capo":true,"baseFret":11,"midi":[56,61,66,70,76]}]},{"key":"F#","suffix":"9b5","positions":[{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[42,46,52,56,60,66]},{"frets":[2,1,2,1,1,0],"fingers":[2,1,3,1,1,0],"barres":[1],"baseFret":1,"midi":[42,46,52,56,60,64]},{"frets":[-1,1,2,1,3,2],"fingers":[0,1,2,1,4,3],"barres":[1],"capo":true,"baseFret":3,"midi":[48,54,58,64,68]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[54,58,64,68,72]}]},{"key":"F#","suffix":"aug9","positions":[{"frets":[2,1,2,1,3,0],"fingers":[2,1,3,1,4,0],"barres":[1],"baseFret":1,"midi":[42,46,52,56,62,64]},{"frets":[-1,3,2,1,3,0],"fingers":[0,3,2,1,4,0],"baseFret":7,"barres":[],"midi":[54,58,62,68,64]},{"frets":[-1,2,1,2,2,3],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":8,"midi":[54,58,64,68,74]},{"frets":[4,-1,2,3,1,0],"fingers":[4,0,2,3,1,0],"baseFret":11,"barres":[],"midi":[54,62,68,70,64]}]},{"key":"F#","suffix":"7b9","positions":[{"frets":[2,1,2,0,2,0],"fingers":[2,1,3,0,4,0],"baseFret":1,"barres":[],"midi":[42,46,52,55,61,64]},{"frets":[-1,-1,2,1,3,1],"fingers":[0,0,2,1,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[54,58,64,67]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[54,58,64,67,73]},{"frets":[3,2,3,1,-1,-1],"fingers":[3,2,4,1,0,0],"baseFret":12,"barres":[],"midi":[54,58,64,67]}]},{"key":"F#","suffix":"7#9","positions":[{"frets":[2,1,2,2,2,2],"fingers":[2,1,3,3,3,4],"barres":[2],"baseFret":1,"midi":[42,46,52,57,61,66]},{"frets":[1,3,1,2,1,4],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[42,49,52,58,61,69]},{"frets":[-1,-1,2,1,3,3],"fingers":[0,0,2,1,3,4],"baseFret":3,"barres":[],"midi":[54,58,64,69]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":8,"barres":[],"midi":[54,58,64,69]}]},{"key":"F#","suffix":"11","positions":[{"frets":[2,1,2,1,0,0],"fingers":[3,1,4,2,0,0],"baseFret":1,"barres":[],"midi":[42,46,52,56,59,64]},{"frets":[1,1,1,1,2,3],"fingers":[1,1,1,1,2,3],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,54,59,64,70]},{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[54,58,64,66,71]},{"frets":[-1,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[54,59,64,70,73]}]},{"key":"F#","suffix":"9#11","positions":[{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[42,46,52,56,60,66]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":4,"barres":[],"midi":[54,60,64,70]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[54,58,64,68,72]},{"frets":[-1,1,2,1,3,1],"fingers":[0,1,2,1,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[54,60,64,70,73]}]},{"key":"F#","suffix":"13","positions":[{"frets":[2,2,1,3,0,0],"fingers":[2,3,1,4,0,0],"baseFret":1,"barres":[],"midi":[42,47,51,58,59,64]},{"frets":[2,2,2,3,4,4],"fingers":[1,1,1,2,3,4],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,52,58,63,68]},{"frets":[-1,3,2,2,1,0],"fingers":[0,4,2,3,1,0],"baseFret":7,"barres":[],"midi":[54,58,63,66,64]},{"frets":[1,1,1,1,3,3],"fingers":[1,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,59,64,70,75]}]},{"key":"F#","suffix":"maj7","positions":[{"frets":[2,4,3,3,2,2],"fingers":[1,4,2,3,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,53,58,61,66]},{"frets":[-1,1,1,3,3,3],"fingers":[0,1,1,3,3,3],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,61,65,70]},{"frets":[-1,4,3,1,1,1],"fingers":[0,4,3,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[54,58,61,65,70]},{"frets":[1,1,3,2,3,1],"fingers":[1,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,65,70,73]}]},{"key":"F#","suffix":"maj7b5","positions":[{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[42,46,53,58,60,65]},{"frets":[-1,-1,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":4,"barres":[],"midi":[54,60,65,70]},{"frets":[-1,2,1,3,4,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[54,58,65,70,72]},{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":9,"barres":[],"midi":[54,60,65,70]}]},{"key":"F#","suffix":"maj7#5","positions":[{"frets":[2,-1,3,3,3,-1],"fingers":[1,0,2,3,4,0],"baseFret":1,"barres":[],"midi":[42,53,58,62]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,54,58,62,65,70]},{"frets":[-1,1,4,2,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":9,"barres":[],"midi":[54,62,65,70]},{"frets":[-1,-1,2,1,1,3],"fingers":[0,0,2,1,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[62,66,70,77]}]},{"key":"F#","suffix":"maj9","positions":[{"frets":[2,1,3,1,2,1],"fingers":[2,1,4,1,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[42,46,53,56,61,65]},{"frets":[2,-1,3,3,2,4],"fingers":[1,0,2,3,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[42,53,58,61,68]},{"frets":[-1,-1,2,1,4,2],"fingers":[0,0,2,1,4,3],"baseFret":3,"barres":[],"midi":[54,58,65,68]},{"frets":[2,2,1,3,2,-1],"fingers":[2,2,1,4,3,0],"barres":[2],"baseFret":8,"midi":[49,54,58,65,68]}]},{"key":"F#","suffix":"maj11","positions":[{"frets":[2,2,3,3,2,2],"fingers":[1,1,2,3,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,53,58,61,66]},{"frets":[-1,-1,1,1,3,3],"fingers":[0,0,1,1,3,4],"barres":[1],"capo":true,"baseFret":4,"midi":[54,59,65,70]},{"frets":[-1,2,1,3,0,2],"fingers":[0,2,1,4,0,3],"baseFret":8,"barres":[],"midi":[54,58,65,59,73]},{"frets":[1,1,1,2,3,1],"fingers":[1,1,1,2,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,59,65,70,73]}]},{"key":"F#","suffix":"maj13","positions":[{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[42,46,51,56,61,65]},{"frets":[-1,3,1,1,3,3],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":4,"midi":[51,54,59,65,70]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"baseFret":6,"midi":[54,58,63,65,70]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":9,"midi":[54,59,65,70,75]}]},{"key":"F#","suffix":"m6","positions":[{"frets":[2,-1,1,2,2,2],"fingers":[2,0,1,3,3,4],"barres":[2],"baseFret":1,"midi":[42,51,57,61,66]},{"frets":[-1,1,1,3,1,2],"fingers":[0,1,1,3,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,61,63,69]},{"frets":[-1,3,1,2,1,3],"fingers":[0,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[54,57,63,66,73]},{"frets":[-1,2,4,1,3,-1],"fingers":[0,2,4,1,3,0],"baseFret":8,"barres":[],"midi":[54,61,63,69]}]},{"key":"F#","suffix":"m7","positions":[{"frets":[2,4,2,2,2,2],"fingers":[1,3,1,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,52,57,61,66]},{"frets":[-1,-1,1,3,2,2],"fingers":[0,0,1,4,2,3],"baseFret":4,"barres":[],"midi":[54,61,64,69]},{"frets":[1,1,3,1,2,1],"fingers":[1,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,64,69,73]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":10,"barres":[],"midi":[61,66,69,76]}]},{"key":"F#","suffix":"m7b5","positions":[{"frets":[2,0,2,2,1,0],"fingers":[2,0,3,4,1,0],"baseFret":1,"barres":[],"midi":[42,45,52,57,60,64]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,2,2],"barres":[2],"baseFret":4,"midi":[54,60,64,69]},{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":9,"barres":[],"midi":[54,60,64,69]},{"frets":[-1,-1,1,2,1,3],"fingers":[0,0,1,2,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[60,66,69,76]}]},{"key":"F#","suffix":"m9","positions":[{"frets":[2,0,2,1,2,0],"fingers":[2,0,3,1,4,0],"baseFret":1,"barres":[],"midi":[42,45,52,56,61,64]},{"frets":[2,4,2,2,2,4],"fingers":[1,2,1,1,1,3],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,52,57,61,68]},{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":7,"midi":[54,57,64,68,73]},{"frets":[-1,-1,2,4,1,3],"fingers":[0,0,2,4,1,3],"baseFret":10,"barres":[],"midi":[61,68,69,76]}]},{"key":"F#","suffix":"m69","positions":[{"frets":[2,0,1,1,2,2],"fingers":[2,0,1,1,3,4],"barres":[1],"baseFret":1,"midi":[42,45,51,56,61,66]},{"frets":[2,4,4,2,4,4],"fingers":[1,2,2,1,3,4],"barres":[4],"baseFret":1,"midi":[42,49,54,57,63,68]},{"frets":[2,1,1,3,1,1],"fingers":[2,1,1,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[45,49,54,61,63,68]},{"frets":[-1,3,1,2,3,-1],"fingers":[0,3,1,2,4,0],"baseFret":7,"barres":[],"midi":[54,57,63,68]}]},{"key":"F#","suffix":"m11","positions":[{"frets":[2,0,2,1,0,0],"fingers":[2,0,3,1,0,0],"baseFret":1,"barres":[],"midi":[42,45,52,56,59,64]},{"frets":[2,2,2,2,2,4],"fingers":[1,1,1,1,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,52,57,61,68]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,3],"barres":[1],"capo":true,"baseFret":4,"midi":[54,59,64,69]},{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[54,57,64,68,71]}]},{"key":"F#","suffix":"mmaj7","positions":[{"frets":[2,4,3,2,2,2],"fingers":[1,3,2,1,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,53,57,61,66]},{"frets":[-1,1,1,3,3,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,61,65,69]},{"frets":[-1,4,2,1,1,-1],"fingers":[0,4,2,1,1,0],"barres":[1],"capo":true,"baseFret":6,"midi":[54,57,61,65]},{"frets":[1,1,3,2,2,1],"fingers":[1,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,61,65,69,73]}]},{"key":"F#","suffix":"mmaj7b5","positions":[{"frets":[2,3,3,2,-1,2],"fingers":[1,2,3,1,0,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,48,53,57,66]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":4,"barres":[],"midi":[54,60,65,69]},{"frets":[1,2,3,3,3,-1],"fingers":[1,2,3,3,3,0],"barres":[3],"baseFret":8,"midi":[48,54,60,65,69]},{"frets":[-1,1,2,2,2,-1],"fingers":[0,1,2,3,4,0],"baseFret":9,"barres":[],"midi":[54,60,65,69]}]},{"key":"F#","suffix":"mmaj9","positions":[{"frets":[2,0,3,1,2,1],"fingers":[2,0,4,1,3,1],"barres":[1],"baseFret":1,"midi":[42,45,53,56,61,65]},{"frets":[2,0,3,1,2,-1],"fingers":[2,0,4,1,3,0],"baseFret":1,"barres":[],"midi":[42,45,53,56,61]},{"frets":[2,4,3,2,2,4],"fingers":[1,3,2,1,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,53,57,61,68]},{"frets":[-1,3,1,4,3,-1],"fingers":[0,2,1,4,3,0],"baseFret":7,"barres":[],"midi":[54,57,65,68]}]},{"key":"F#","suffix":"mmaj11","positions":[{"frets":[2,2,3,2,2,4],"fingers":[1,1,2,1,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,53,57,61,68]},{"frets":[-1,1,1,1,3,2],"fingers":[0,1,1,1,3,2],"barres":[1],"capo":true,"baseFret":4,"midi":[49,54,59,65,69]},{"frets":[-1,3,1,4,3,1],"fingers":[0,2,1,4,3,1],"barres":[1],"capo":true,"baseFret":7,"midi":[54,57,65,68,71]},{"frets":[1,1,1,2,2,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,59,65,69,73]}]},{"key":"F#","suffix":"add9","positions":[{"frets":[2,1,-1,1,2,2],"fingers":[3,1,0,2,4,4],"barres":[2],"baseFret":1,"midi":[42,46,56,61,66]},{"frets":[-1,-1,4,3,2,4],"fingers":[0,0,3,2,1,4],"baseFret":1,"barres":[],"midi":[54,58,61,68]},{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[54,58,61,68,70]},{"frets":[-1,2,1,-1,2,2],"fingers":[0,2,1,0,3,4],"baseFret":8,"barres":[],"midi":[54,58,68,73]}]},{"key":"F#","suffix":"madd9","positions":[{"frets":[-1,-1,4,2,2,4],"fingers":[0,0,3,1,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[54,57,61,68]},{"frets":[2,4,4,2,2,4],"fingers":[1,2,3,1,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[42,49,54,57,61,68]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":6,"barres":[],"midi":[54,57,61,68]},{"frets":[-1,3,1,-1,3,3],"fingers":[0,2,1,0,3,4],"baseFret":7,"barres":[],"midi":[54,57,68,73]}]}],"G":[{"key":"G","suffix":"major","positions":[{"frets":[3,2,0,0,0,3],"fingers":[2,1,0,0,0,3],"baseFret":1,"barres":[],"midi":[43,47,50,55,59,67]},{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,55,59,62,67]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,2,4,3],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,62,67,71]},{"frets":[1,4,3,1,2,1],"fingers":[1,4,3,1,2,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,55,59,62,67,71]}]},{"key":"G","suffix":"minor","positions":[{"frets":[3,1,0,0,3,3],"fingers":[2,1,0,0,3,4],"baseFret":1,"barres":[],"midi":[43,46,50,55,62,67]},{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,55,58,62,67]},{"frets":[-1,-1,1,3,4,2],"fingers":[0,0,1,3,4,2],"baseFret":5,"barres":[],"midi":[55,62,67,70]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,62,67,70,74]}]},{"key":"G","suffix":"dim","positions":[{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":1,"barres":[],"midi":[43,46,58,61]},{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":5,"barres":[],"midi":[55,61,70]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,1,2,4,3,0],"baseFret":8,"barres":[],"midi":[55,58,67,73]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":10,"barres":[],"midi":[55,61,67,70]}]},{"key":"G","suffix":"dim7","positions":[{"frets":[3,1,-1,3,2,0],"fingers":[3,1,0,4,2,0],"baseFret":1,"barres":[],"midi":[43,46,58,61,64]},{"frets":[3,-1,2,3,2,0],"fingers":[3,0,1,4,2,0],"baseFret":1,"barres":[],"midi":[43,52,58,61,64]},{"frets":[1,2,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,49,55,58,64,67]},{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":5,"barres":[],"midi":[55,61,64,70]}]},{"key":"G","suffix":"sus2","positions":[{"frets":[3,0,0,0,3,3],"fingers":[1,0,0,0,2,3],"baseFret":1,"barres":[],"midi":[43,45,50,55,62,67]},{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,55,62,67,69]},{"frets":[-1,4,1,1,2,4],"fingers":[0,3,1,1,2,4],"barres":[1],"capo":true,"baseFret":7,"midi":[55,57,62,67,74]},{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,62,67,69,74]}]},{"key":"G","suffix":"sus4","positions":[{"frets":[3,3,0,0,1,3],"fingers":[2,3,0,0,1,4],"baseFret":1,"barres":[],"midi":[43,48,50,55,60,67]},{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,55,60,62,67]},{"frets":[-1,1,1,3,4,4],"fingers":[0,1,1,3,4,4],"barres":[1,4],"capo":true,"baseFret":5,"midi":[50,55,62,67,72]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,62,67,72,74]}]},{"key":"G","suffix":"7sus4","positions":[{"frets":[3,3,0,0,1,1],"fingers":[2,3,0,0,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[43,48,50,55,60,65]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,53,60,62,67]},{"frets":[-1,3,3,3,1,1],"fingers":[0,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[55,60,65,67,72]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,62,65,72,74]}]},{"key":"G","suffix":"alt","positions":[{"frets":[3,2,-1,0,2,3],"fingers":[3,1,0,0,2,4],"baseFret":1,"barres":[],"midi":[43,47,55,61,67]},{"frets":[-1,-1,1,2,0,3],"fingers":[0,0,1,2,0,3],"baseFret":5,"barres":[],"midi":[55,61,59,71]},{"frets":[-1,2,1,0,0,1],"fingers":[0,3,1,0,0,2],"baseFret":9,"barres":[],"midi":[55,59,55,59,73]},{"frets":[-1,1,2,3,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":10,"barres":[],"midi":[55,61,67,71]}]},{"key":"G","suffix":"aug","positions":[{"frets":[3,2,1,0,0,-1],"fingers":[3,2,1,0,0,0],"baseFret":1,"barres":[],"midi":[43,47,51,55,59]},{"frets":[1,-1,3,2,2,-1],"fingers":[1,0,4,2,3,0],"baseFret":3,"barres":[],"midi":[43,55,59,63]},{"frets":[-1,-1,2,1,1,-1],"fingers":[0,0,2,1,1,0],"barres":[1],"capo":true,"baseFret":4,"midi":[55,59,63]},{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":8,"midi":[55,59,63,67]}]},{"key":"G","suffix":"6","positions":[{"frets":[3,2,0,0,0,0],"fingers":[2,1,0,0,0,0],"baseFret":1,"barres":[],"midi":[43,47,50,55,59,64]},{"frets":[3,-1,2,4,3,-1],"fingers":[2,0,1,4,3,0],"baseFret":1,"barres":[],"midi":[43,52,59,62]},{"frets":[-1,1,1,3,1,3],"fingers":[0,1,1,3,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,62,64,71]},{"frets":[-1,1,3,3,3,3],"fingers":[0,1,3,3,3,4],"barres":[3],"baseFret":10,"midi":[55,62,67,71,76]}]},{"key":"G","suffix":"69","positions":[{"frets":[3,0,0,0,0,0],"fingers":[1,0,0,0,0,0],"baseFret":1,"barres":[],"midi":[43,45,50,55,59,64]},{"frets":[3,2,2,2,3,3],"fingers":[2,1,1,1,3,4],"barres":[2],"capo":true,"baseFret":1,"midi":[43,47,52,57,62,67]},{"frets":[-1,2,2,1,2,2],"fingers":[0,2,2,1,3,4],"barres":[2],"capo":true,"baseFret":4,"midi":[50,55,59,64,69]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":9,"midi":[55,59,64,69,74]}]},{"key":"G","suffix":"7","positions":[{"frets":[3,2,0,0,0,1],"fingers":[3,2,0,0,0,1],"baseFret":1,"barres":[],"midi":[43,47,50,55,59,65]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,53,59,62,67]},{"frets":[-1,1,1,3,2,3],"fingers":[0,1,1,3,2,4],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,62,65,71]},{"frets":[1,1,3,1,3,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,62,65,71,74]}]},{"key":"G","suffix":"7b5","positions":[{"frets":[3,-1,3,4,2,-1],"fingers":[2,0,3,4,1,0],"baseFret":1,"barres":[],"midi":[43,53,59,61]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":5,"barres":[],"midi":[55,61,65,71]},{"frets":[-1,2,1,2,0,1],"fingers":[0,3,1,4,0,2],"baseFret":9,"barres":[],"midi":[55,59,65,59,73]},{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"capo":true,"baseFret":10,"midi":[55,61,65,71]}]},{"key":"G","suffix":"aug7","positions":[{"frets":[3,2,1,0,0,1],"fingers":[4,3,1,0,0,2],"baseFret":1,"barres":[],"midi":[43,47,51,55,59,65]},{"frets":[3,-1,3,4,4,-1],"fingers":[1,0,2,3,4,0],"baseFret":1,"barres":[],"midi":[43,53,59,63]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":5,"barres":[],"midi":[55,63,65,71]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":10,"midi":[55,63,65,71,75]}]},{"key":"G","suffix":"9","positions":[{"frets":[3,0,0,0,0,1],"fingers":[3,0,0,0,0,1],"baseFret":1,"barres":[],"midi":[43,45,50,55,59,65]},{"frets":[3,2,3,2,3,-1],"fingers":[2,1,3,1,4,0],"barres":[2],"capo":true,"baseFret":1,"midi":[43,47,53,57,62]},{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,53,59,62,69]},{"frets":[2,2,1,2,2,2],"fingers":[2,2,1,3,3,4],"barres":[2],"baseFret":9,"midi":[50,55,59,65,69,74]}]},{"key":"G","suffix":"9b5","positions":[{"frets":[3,2,3,2,2,3],"fingers":[2,1,3,1,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[43,47,53,57,61,67]},{"frets":[1,2,1,2,0,3],"fingers":[1,2,1,3,0,4],"barres":[1],"baseFret":3,"midi":[43,49,53,59,59,69]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[55,59,65,69,73]},{"frets":[-1,2,1,0,0,3],"fingers":[0,2,1,0,0,3],"baseFret":11,"barres":[],"midi":[57,61,55,59,77]}]},{"key":"G","suffix":"aug9","positions":[{"frets":[3,0,1,0,0,1],"fingers":[3,0,2,0,0,1],"baseFret":1,"barres":[],"midi":[43,45,51,55,59,65]},{"frets":[3,2,3,2,4,-1],"fingers":[2,1,3,1,4,0],"baseFret":1,"barres":[],"midi":[43,47,53,57,63]},{"frets":[-1,2,1,2,2,3],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":9,"midi":[55,59,65,69,75]},{"frets":[-1,1,2,0,1,2],"fingers":[0,1,3,0,2,4],"baseFret":12,"barres":[],"midi":[57,63,55,71,77]}]},{"key":"G","suffix":"7b9","positions":[{"frets":[3,2,0,1,3,1],"fingers":[3,2,0,1,4,1],"barres":[1],"baseFret":1,"midi":[43,47,50,56,62,65]},{"frets":[3,-1,3,4,3,4],"fingers":[1,0,1,2,1,3],"barres":[3],"capo":true,"baseFret":1,"midi":[43,53,59,62,68]},{"frets":[-1,-1,2,1,3,1],"fingers":[0,0,2,1,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[55,59,65,68]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[55,59,65,68,74]}]},{"key":"G","suffix":"7#9","positions":[{"frets":[3,2,0,3,0,1],"fingers":[3,2,0,4,0,1],"baseFret":1,"barres":[],"midi":[43,47,50,58,59,65]},{"frets":[1,3,1,2,4,4],"fingers":[1,3,1,2,4,4],"barres":[1,4],"capo":true,"baseFret":3,"midi":[43,50,53,59,65,70]},{"frets":[-1,2,2,1,3,3],"fingers":[0,2,3,1,4,4],"barres":[3],"baseFret":4,"midi":[50,55,59,65,70]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":9,"barres":[],"midi":[55,59,65,70]}]},{"key":"G","suffix":"11","positions":[{"frets":[3,2,0,0,1,1],"fingers":[3,2,0,0,1,1],"barres":[1],"baseFret":1,"midi":[43,47,50,55,60,65]},{"frets":[1,1,1,1,2,3],"fingers":[1,1,1,1,2,3],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,55,60,65,71]},{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[55,59,65,67,72]},{"frets":[-1,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[55,60,65,71,74]}]},{"key":"G","suffix":"9#11","positions":[{"frets":[3,2,3,2,2,3],"fingers":[2,1,3,1,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[43,47,53,57,61,67]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":5,"barres":[],"midi":[55,61,65,71]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[55,59,65,69,73]},{"frets":[-1,1,2,1,3,1],"fingers":[0,1,2,1,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[55,61,65,71,74]}]},{"key":"G","suffix":"13","positions":[{"frets":[3,0,2,0,0,1],"fingers":[3,0,2,0,0,1],"baseFret":1,"barres":[],"midi":[43,45,52,55,59,65]},{"frets":[1,-1,1,2,3,3],"fingers":[1,0,1,2,3,4],"barres":[1],"capo":true,"baseFret":3,"midi":[43,53,59,64,69]},{"frets":[1,3,1,2,3,1],"fingers":[1,3,1,2,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,53,59,64,67]},{"frets":[-1,2,1,2,2,4],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":9,"midi":[55,59,65,69,76]}]},{"key":"G","suffix":"maj7","positions":[{"frets":[3,2,0,0,0,2],"fingers":[3,2,0,0,0,1],"baseFret":1,"barres":[],"midi":[43,47,50,55,59,66]},{"frets":[1,3,2,2,1,1],"fingers":[1,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,54,59,62,67]},{"frets":[-1,1,1,3,3,3],"fingers":[0,1,1,3,3,3],"barres":[1,3],"capo":true,"baseFret":5,"midi":[50,55,62,66,71]},{"frets":[-1,1,3,2,3,1],"fingers":[0,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[55,62,66,71,74]}]},{"key":"G","suffix":"maj7b5","positions":[{"frets":[3,2,4,4,2,2],"fingers":[2,1,3,4,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[43,47,54,59,61,66]},{"frets":[3,4,4,4,-1,-1],"fingers":[1,2,3,4,0,0],"baseFret":1,"barres":[],"midi":[43,49,54,59]},{"frets":[-1,-1,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":5,"barres":[],"midi":[55,61,66,71]},{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":10,"barres":[],"midi":[55,61,66,71]}]},{"key":"G","suffix":"maj7#5","positions":[{"frets":[-1,-1,1,0,0,2],"fingers":[0,0,1,0,0,3],"baseFret":1,"barres":[],"midi":[51,55,59,66]},{"frets":[3,-1,4,4,4,-1],"fingers":[1,0,2,3,4,0],"baseFret":1,"barres":[],"midi":[43,54,59,63]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,55,59,63,66,71]},{"frets":[-1,1,4,2,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":10,"barres":[],"midi":[55,63,66,71]}]},{"key":"G","suffix":"maj9","positions":[{"frets":[3,0,0,0,0,2],"fingers":[2,0,0,0,0,1],"baseFret":1,"barres":[],"midi":[43,45,50,55,59,66]},{"frets":[3,2,4,2,3,2],"fingers":[2,1,4,1,3,1],"barres":[2],"capo":true,"baseFret":1,"midi":[43,47,54,57,62,66]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":3,"barres":[],"midi":[54,59,62,69]},{"frets":[-1,2,1,3,2,-1],"fingers":[0,2,1,4,3,0],"baseFret":9,"barres":[],"midi":[55,59,66,69]}]},{"key":"G","suffix":"maj11","positions":[{"frets":[3,2,0,0,1,2],"fingers":[4,2,0,0,1,3],"baseFret":1,"barres":[],"midi":[43,47,50,55,60,66]},{"frets":[3,3,4,4,3,3],"fingers":[1,1,2,3,1,1],"barres":[3],"capo":true,"baseFret":1,"midi":[43,48,54,59,62,67]},{"frets":[-1,-1,3,0,1,2],"fingers":[0,0,3,0,1,2],"baseFret":7,"barres":[],"midi":[59,55,66,72]},{"frets":[1,1,1,2,3,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,60,66,71,74]}]},{"key":"G","suffix":"maj13","positions":[{"frets":[3,2,2,2,3,2],"fingers":[3,1,1,1,3,1],"barres":[2,3],"capo":true,"baseFret":1,"midi":[43,47,52,57,62,66]},{"frets":[1,1,2,2,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,54,59,64,67]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"baseFret":7,"midi":[55,59,64,66,71]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":10,"midi":[55,60,66,71,76]}]},{"key":"G","suffix":"m6","positions":[{"frets":[3,-1,2,3,3,3],"fingers":[2,0,1,3,4,4],"barres":[3],"baseFret":1,"midi":[43,52,58,62,67]},{"frets":[1,3,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,55,58,64,67]},{"frets":[-1,1,1,3,1,2],"fingers":[0,1,1,3,1,2],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,62,64,70]},{"frets":[-1,3,1,2,1,3],"fingers":[0,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[55,58,64,67,74]}]},{"key":"G","suffix":"m7","positions":[{"frets":[1,3,1,1,1,1],"fingers":[1,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,53,58,62,67]},{"frets":[-1,1,1,3,2,2],"fingers":[0,1,1,4,2,3],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,62,65,70]},{"frets":[-1,3,1,3,1,3],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":8,"midi":[55,58,65,67,74]},{"frets":[1,1,3,1,2,1],"fingers":[1,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,62,65,70,74]}]},{"key":"G","suffix":"m7b5","positions":[{"frets":[3,-1,-1,3,2,1],"fingers":[3,0,0,4,2,1],"baseFret":1,"barres":[],"midi":[43,58,61,65]},{"frets":[3,-1,3,3,2,-1],"fingers":[2,0,3,4,1,0],"baseFret":1,"barres":[],"midi":[43,53,58,61]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,2,2],"barres":[2],"baseFret":5,"midi":[55,61,65,70]},{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":10,"barres":[],"midi":[55,61,65,70]}]},{"key":"G","suffix":"m9","positions":[{"frets":[3,0,0,3,3,1],"fingers":[2,0,0,3,4,1],"baseFret":1,"barres":[],"midi":[43,45,50,58,62,65]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,53,58,62,69]},{"frets":[-1,-1,2,0,1,1],"fingers":[0,0,2,0,1,1],"barres":[1],"baseFret":6,"midi":[57,55,65,70]},{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":8,"midi":[55,58,65,69,74]}]},{"key":"G","suffix":"m69","positions":[{"frets":[3,1,0,2,3,0],"fingers":[3,1,0,2,4,0],"baseFret":1,"barres":[],"midi":[43,46,50,57,62,64]},{"frets":[-1,3,3,1,3,3],"fingers":[0,2,2,1,3,4],"barres":[3],"baseFret":3,"midi":[50,55,58,64,69]},{"frets":[2,1,1,3,1,1],"fingers":[2,1,1,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,55,62,64,69]},{"frets":[-1,3,1,2,3,3],"fingers":[0,3,1,2,4,4],"barres":[3],"baseFret":8,"midi":[55,58,64,69,74]}]},{"key":"G","suffix":"m11","positions":[{"frets":[3,-1,3,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":1,"barres":[],"midi":[43,53,58,60]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,53,58,62,69]},{"frets":[-1,-1,1,1,3,3],"fingers":[0,0,1,1,2,3],"barres":[1],"capo":true,"baseFret":5,"midi":[55,60,66,71]},{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[55,58,65,69,72]}]},{"key":"G","suffix":"mmaj7","positions":[{"frets":[3,1,0,0,3,2],"fingers":[3,1,0,0,4,2],"baseFret":1,"barres":[],"midi":[43,46,50,55,62,66]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,54,58,62,67]},{"frets":[-1,1,1,3,3,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,62,66,70]},{"frets":[-1,1,3,2,2,1],"fingers":[0,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[55,62,66,70,74]}]},{"key":"G","suffix":"mmaj7b5","positions":[{"frets":[3,4,4,3,-1,3],"fingers":[1,2,3,1,0,1],"barres":[3],"capo":true,"baseFret":1,"midi":[43,49,54,58,67]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":5,"barres":[],"midi":[55,61,66,70]},{"frets":[1,2,3,3,3,-1],"fingers":[1,2,3,3,3,0],"barres":[3],"baseFret":9,"midi":[49,55,61,66,70]},{"frets":[-1,1,2,2,2,-1],"fingers":[0,1,2,3,4,0],"baseFret":10,"barres":[],"midi":[55,61,66,70]}]},{"key":"G","suffix":"mmaj9","positions":[{"frets":[3,0,0,3,3,2],"fingers":[2,0,0,3,4,1],"baseFret":1,"barres":[],"midi":[43,45,50,58,62,66]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[43,50,54,58,62,69]},{"frets":[-1,-1,2,0,2,1],"fingers":[0,0,2,0,3,1],"baseFret":6,"barres":[],"midi":[57,55,66,70]},{"frets":[-1,3,1,4,3,-1],"fingers":[0,2,1,4,3,0],"baseFret":8,"barres":[],"midi":[55,58,66,69]}]},{"key":"G","suffix":"mmaj11","positions":[{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[43,48,54,58,62,69]},{"frets":[-1,1,1,1,3,2],"fingers":[0,1,1,1,3,2],"barres":[1],"capo":true,"baseFret":5,"midi":[50,55,60,66,70]},{"frets":[-1,3,1,4,3,1],"fingers":[0,2,1,4,3,1],"barres":[1],"capo":true,"baseFret":8,"midi":[55,58,66,69,72]},{"frets":[1,1,1,2,2,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,55,60,66,70,74]}]},{"key":"G","suffix":"add9","positions":[{"frets":[3,0,0,2,0,3],"fingers":[2,0,0,1,0,3],"baseFret":1,"barres":[],"midi":[43,45,50,57,59,67]},{"frets":[-1,-1,3,2,1,4],"fingers":[0,0,3,2,1,4],"baseFret":1,"barres":[],"midi":[53,57,60,68]},{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[55,59,62,69,71]},{"frets":[-1,2,1,0,2,2],"fingers":[0,2,1,0,3,4],"baseFret":9,"barres":[],"midi":[55,59,55,69,74]}]},{"key":"G","suffix":"madd9","positions":[{"frets":[3,1,0,2,3,3],"fingers":[3,1,0,2,4,4],"barres":[3],"baseFret":1,"midi":[43,46,50,57,62,67]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[55,58,62,69]},{"frets":[-1,-1,2,0,3,1],"fingers":[0,0,2,0,3,1],"baseFret":6,"barres":[],"midi":[57,55,67,70]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":7,"barres":[],"midi":[55,58,62,69]}]},{"key":"G","suffix":"/F#","positions":[{"frets":[2,2,0,0,0,3],"fingers":[1,2,0,0,0,3],"baseFret":1,"barres":[],"midi":[42,47,50,55,59,67]},{"frets":[2,2,0,0,3,3],"fingers":[1,2,0,0,3,4],"baseFret":1,"barres":[],"midi":[42,47,50,55,62,67]},{"frets":[-1,-1,4,4,3,3],"fingers":[0,0,2,3,1,1],"barres":[3],"baseFret":1,"midi":[54,59,62,67]}]},{"key":"G","suffix":"/B","positions":[{"frets":[-1,2,0,0,3,3],"fingers":[0,1,0,0,2,3],"baseFret":1,"barres":[],"midi":[47,50,55,62,67]},{"frets":[-1,2,0,0,0,3],"fingers":[0,1,0,0,0,2],"baseFret":1,"barres":[],"midi":[47,50,55,59,67]},{"frets":[-1,1,4,3,2,2],"fingers":[0,1,4,3,2,2],"barres":[2],"baseFret":2,"midi":[47,55,59,62,67]}]},{"key":"G","suffix":"/D","positions":[{"frets":[-1,-1,0,0,0,3],"fingers":[0,0,0,0,0,1],"baseFret":1,"barres":[],"midi":[50,55,59,67]},{"frets":[-1,3,3,2,1,1],"fingers":[0,3,4,2,1,1],"barres":[1],"baseFret":3,"midi":[50,55,59,62,67]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,3,4,3],"barres":[1],"baseFret":5,"midi":[50,55,62,67,71]}]},{"key":"G","suffix":"/E","positions":[{"frets":[0,2,0,0,3,3],"fingers":[0,1,0,0,2,3],"baseFret":1,"barres":[],"midi":[40,47,50,55,62,67]},{"frets":[0,2,0,0,0,3],"fingers":[0,1,0,0,0,2],"baseFret":1,"barres":[],"midi":[40,47,50,55,59,67]},{"frets":[-1,-1,2,4,3,3],"fingers":[0,0,1,4,2,3],"baseFret":1,"barres":[],"midi":[52,59,62,67]}]},{"key":"G","suffix":"/F","positions":[{"frets":[1,2,0,0,3,3],"fingers":[1,2,0,0,3,4],"baseFret":1,"barres":[],"midi":[41,47,50,55,62,67]},{"frets":[1,2,0,0,0,3],"fingers":[1,2,0,0,0,3],"baseFret":1,"barres":[],"midi":[41,47,50,55,59,67]},{"frets":[-1,-1,3,4,3,3],"fingers":[0,0,1,2,1,1],"baseFret":1,"barres":[],"midi":[53,59,62,67]}]}],"Ab":[{"key":"Ab","suffix":"major","positions":[{"frets":[4,3,1,1,1,-1],"fingers":[3,2,1,1,1,0],"barres":[1],"capo":true,"baseFret":1,"midi":[44,48,51,56,60]},{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,56,60,63,68]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,2,4,3],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,63,68,72]},{"frets":[1,4,3,1,2,1],"fingers":[1,4,3,1,2,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,56,60,63,68,72]}]},{"key":"Ab","suffix":"minor","positions":[{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,56,59,63,68]},{"frets":[-1,-1,1,3,4,2],"fingers":[0,0,1,3,4,2],"baseFret":6,"barres":[],"midi":[56,63,68,71]},{"frets":[-1,-1,3,2,3,1],"fingers":[0,0,3,2,4,1],"baseFret":7,"barres":[],"midi":[59,63,68,71]},{"frets":[1,1,3,3,2,1],"fingers":[1,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,63,68,71,75]}]},{"key":"Ab","suffix":"dim","positions":[{"frets":[4,2,-1,4,3,-1],"fingers":[3,1,0,4,2,0],"baseFret":1,"barres":[],"midi":[44,47,59,62]},{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":6,"barres":[],"midi":[56,62,71]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":9,"barres":[],"midi":[56,59,68,74]},{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":11,"barres":[],"midi":[56,62,68,71]}]},{"key":"Ab","suffix":"dim7","positions":[{"frets":[-1,-1,0,1,0,1],"fingers":[0,0,0,1,0,2],"baseFret":1,"barres":[],"midi":[50,56,59,65]},{"frets":[4,-1,3,4,3,4],"fingers":[2,0,1,3,1,4],"barres":[3],"capo":true,"baseFret":1,"midi":[44,53,59,62,68]},{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":6,"barres":[],"midi":[56,62,65,71]},{"frets":[1,2,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,56,62,65,71,74]}]},{"key":"Ab","suffix":"sus2","positions":[{"frets":[4,-1,-1,3,4,4],"fingers":[2,0,0,1,3,4],"baseFret":1,"barres":[],"midi":[44,58,63,68]},{"frets":[1,3,3,-1,1,3],"fingers":[1,2,3,0,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,56,63,70]},{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,56,63,68,70]},{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,63,68,70,75]}]},{"key":"Ab","suffix":"sus4","positions":[{"frets":[-1,-1,1,1,2,4],"fingers":[0,0,1,1,2,4],"barres":[1],"capo":true,"baseFret":1,"midi":[51,56,61,68]},{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,56,61,63,68]},{"frets":[-1,1,1,3,4,4],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,63,68,73]},{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,63,68,73,75]}]},{"key":"Ab","suffix":"7sus4","positions":[{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,2],"barres":[1,2],"capo":true,"baseFret":1,"midi":[51,56,61,66]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,54,61,63,68]},{"frets":[-1,3,3,3,1,1],"fingers":[0,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[56,61,66,68,73]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,63,66,73,75]}]},{"key":"Ab","suffix":"alt","positions":[{"frets":[-1,-1,4,3,1,2],"fingers":[0,0,4,3,1,2],"baseFret":3,"barres":[],"midi":[56,60,62,68]},{"frets":[-1,-1,1,2,4,3],"fingers":[0,0,1,2,4,3],"baseFret":6,"barres":[],"midi":[56,62,68,72]},{"frets":[-1,2,1,4,4,1],"fingers":[0,2,1,4,4,1],"barres":[1,4],"capo":true,"baseFret":10,"midi":[56,60,68,72,74]},{"frets":[-1,1,2,3,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":11,"barres":[],"midi":[56,62,68,72]}]},{"key":"Ab","suffix":"aug","positions":[{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":1,"midi":[44,48,52,56,60]},{"frets":[1,-1,3,2,2,-1],"fingers":[1,0,4,2,3,0],"baseFret":4,"barres":[],"midi":[44,56,60,64]},{"frets":[-1,-1,2,1,1,-1],"fingers":[0,0,2,1,1,0],"barres":[1],"capo":true,"baseFret":5,"midi":[56,60,64]},{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":9,"midi":[56,60,64,68]}]},{"key":"Ab","suffix":"6","positions":[{"frets":[-1,3,1,1,1,1],"fingers":[0,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[48,51,56,60,65]},{"frets":[2,-1,1,3,2,-1],"fingers":[2,0,1,4,3,0],"baseFret":3,"barres":[],"midi":[44,53,60,63]},{"frets":[-1,1,1,3,1,3],"fingers":[0,1,1,3,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,63,65,72]},{"frets":[-1,3,2,2,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":9,"barres":[],"midi":[56,60,65,68]}]},{"key":"Ab","suffix":"69","positions":[{"frets":[-1,1,1,1,1,1],"fingers":[0,1,1,1,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,51,56,60,65]},{"frets":[4,3,3,3,4,4],"fingers":[2,1,1,1,3,4],"barres":[3],"capo":true,"baseFret":1,"midi":[44,48,53,58,63,68]},{"frets":[-1,-1,2,1,2,2],"fingers":[0,0,2,1,3,4],"baseFret":5,"barres":[],"midi":[56,60,65,70]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":10,"midi":[56,60,65,70,75]}]},{"key":"Ab","suffix":"7","positions":[{"frets":[-1,-1,1,1,1,2],"fingers":[0,0,1,1,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[51,56,60,66]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,54,60,63,68]},{"frets":[-1,1,1,3,2,3],"fingers":[0,1,1,3,2,4],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,63,66,72]},{"frets":[1,1,3,1,3,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,63,66,72,75]}]},{"key":"Ab","suffix":"7b5","positions":[{"frets":[2,-1,2,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":3,"barres":[],"midi":[44,54,60,62]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":6,"barres":[],"midi":[56,62,66,72]},{"frets":[-1,1,2,3,1,2],"fingers":[0,1,2,4,1,3],"barres":[1],"capo":true,"baseFret":9,"midi":[54,60,66,68,74]},{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"capo":true,"baseFret":11,"midi":[56,62,66,72]}]},{"key":"Ab","suffix":"aug7","positions":[{"frets":[1,-1,1,2,2,0],"fingers":[1,0,2,3,4,0],"baseFret":4,"barres":[],"midi":[44,54,60,64,64]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":6,"barres":[],"midi":[56,64,66,72]},{"frets":[-1,3,2,3,1,0],"fingers":[0,3,2,4,1,0],"baseFret":9,"barres":[],"midi":[56,60,66,68,64]},{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":11,"midi":[56,64,66,72,76]}]},{"key":"Ab","suffix":"9","positions":[{"frets":[4,3,4,3,4,-1],"fingers":[2,1,3,1,4,0],"barres":[3],"capo":true,"baseFret":1,"midi":[44,48,54,58,63]},{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,54,60,63,70]},{"frets":[-1,-1,2,1,3,2],"fingers":[0,0,2,1,4,3],"baseFret":5,"barres":[],"midi":[56,60,66,70]},{"frets":[2,2,1,2,2,2],"fingers":[2,2,1,3,3,4],"barres":[2],"baseFret":10,"midi":[51,56,60,66,70,75]}]},{"key":"Ab","suffix":"9b5","positions":[{"frets":[4,3,0,3,-1,2],"fingers":[4,2,0,3,0,1],"baseFret":1,"barres":[],"midi":[44,48,50,58,66]},{"frets":[4,3,4,3,3,4],"fingers":[2,1,3,1,1,4],"barres":[3],"capo":true,"baseFret":1,"midi":[44,48,54,58,62,68]},{"frets":[1,2,1,2,-1,3],"fingers":[1,2,1,3,0,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,50,54,60,70]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[56,60,66,70,74]}]},{"key":"Ab","suffix":"aug9","positions":[{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[42,46,52,56,60,66]},{"frets":[2,1,2,1,3,0],"fingers":[2,1,3,1,4,0],"barres":[1],"baseFret":3,"midi":[44,48,54,58,64,64]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":4,"barres":[],"midi":[54,60,64,70]},{"frets":[-1,2,1,2,2,0],"fingers":[0,2,1,3,4,0],"baseFret":10,"barres":[],"midi":[56,60,66,70,64]}]},{"key":"Ab","suffix":"7b9","positions":[{"frets":[-1,0,1,1,1,2],"fingers":[0,0,1,1,1,2],"barres":[1],"baseFret":1,"midi":[45,51,56,60,66]},{"frets":[-1,-1,1,2,1,2],"fingers":[1,0,1,2,1,3],"barres":[1],"baseFret":4,"midi":[54,60,63,69]},{"frets":[-1,-1,2,1,3,1],"fingers":[0,0,2,1,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[56,60,66,69]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":10,"midi":[56,60,66,69,75]}]},{"key":"Ab","suffix":"7#9","positions":[{"frets":[4,3,4,4,4,4],"fingers":[2,1,3,3,3,4],"barres":[4],"baseFret":1,"midi":[44,48,54,59,63,68]},{"frets":[1,3,1,2,4,4],"fingers":[1,3,1,2,4,4],"barres":[1,4],"capo":true,"baseFret":4,"midi":[44,51,54,60,66,71]},{"frets":[-1,-1,2,1,3,3],"fingers":[0,0,3,1,4,4],"barres":[3],"baseFret":5,"midi":[56,60,66,71]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":10,"barres":[],"midi":[56,60,66,71]}]},{"key":"Ab","suffix":"11","positions":[{"frets":[1,1,1,2,1,1],"fingers":[1,1,1,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,54,60,63,68]},{"frets":[1,1,1,1,2,3],"fingers":[1,1,1,1,2,3],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,56,61,66,72]},{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[56,60,66,68,73]},{"frets":[-1,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":11,"midi":[56,61,66,72,75]}]},{"key":"Ab","suffix":"9#11","positions":[{"frets":[2,-1,2,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":3,"barres":[],"midi":[44,54,60,62]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":6,"barres":[],"midi":[56,62,66,72]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[56,60,66,70,74]},{"frets":[-1,1,2,1,3,1],"fingers":[0,1,2,1,3,1],"barres":[1],"capo":true,"baseFret":11,"midi":[56,62,66,72,75]}]},{"key":"Ab","suffix":"13","positions":[{"frets":[4,1,3,1,1,2],"fingers":[4,1,3,1,1,2],"barres":[1],"capo":true,"baseFret":1,"midi":[44,46,53,56,60,66]},{"frets":[1,3,1,2,3,1],"fingers":[1,3,1,2,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,54,60,65,68]},{"frets":[1,1,1,2,3,3],"fingers":[1,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,54,60,65,70]},{"frets":[-1,2,1,2,4,4],"fingers":[0,2,1,3,4,4],"barres":[4],"baseFret":10,"midi":[56,60,66,72,77]}]},{"key":"Ab","suffix":"maj7","positions":[{"frets":[1,3,2,2,1,1],"fingers":[1,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,55,60,63,68]},{"frets":[-1,1,1,3,3,3],"fingers":[0,1,1,3,3,3],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,63,67,72]},{"frets":[-1,3,2,4,1,-1],"fingers":[0,3,2,4,1,0],"baseFret":9,"barres":[],"midi":[56,60,67,68]},{"frets":[1,1,3,2,3,1],"fingers":[1,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,63,67,72,75]}]},{"key":"Ab","suffix":"maj7b5","positions":[{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[44,48,55,60,62,67]},{"frets":[1,2,2,2,-1,-1],"fingers":[1,2,3,4,0,0],"baseFret":4,"barres":[],"midi":[44,50,55,60]},{"frets":[0,0,1,2,3,3],"fingers":[0,0,1,2,3,4],"barres":[3],"capo":true,"baseFret":6,"midi":[40,45,56,62,67,72]},{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,2,4,0],"barres":[2],"baseFret":11,"midi":[56,62,67,72]}]},{"key":"Ab","suffix":"maj7#5","positions":[{"frets":[4,3,2,0,1,0],"fingers":[4,3,2,0,1,0],"baseFret":1,"barres":[],"midi":[44,48,52,55,60,64]},{"frets":[2,1,3,0,3,0],"fingers":[2,1,3,0,4,0],"baseFret":3,"barres":[],"midi":[44,48,55,55,64,64]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,56,60,64,67,72]},{"frets":[-1,1,4,2,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":11,"barres":[],"midi":[56,64,67,72]}]},{"key":"Ab","suffix":"maj9","positions":[{"frets":[-1,1,1,1,1,3],"fingers":[0,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[46,51,56,60,67]},{"frets":[2,1,3,1,2,1],"fingers":[2,1,4,1,3,1],"barres":[1],"capo":true,"baseFret":3,"midi":[44,48,55,58,63,67]},{"frets":[1,3,2,2,1,3],"fingers":[1,3,2,2,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,55,60,63,70]},{"frets":[2,2,1,3,2,-1],"fingers":[2,2,1,4,3,0],"barres":[2],"baseFret":10,"midi":[51,56,60,67,70]}]},{"key":"Ab","suffix":"maj11","positions":[{"frets":[4,3,1,0,2,-1],"fingers":[4,3,1,0,2,0],"baseFret":1,"barres":[],"midi":[44,48,51,55,61]},{"frets":[1,1,2,2,1,1],"fingers":[1,1,2,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,55,60,63,68]},{"frets":[-1,-1,1,1,3,3],"fingers":[0,0,1,1,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[56,61,67,72]},{"frets":[1,1,1,2,3,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,61,67,72,75]}]},{"key":"Ab","suffix":"maj13","positions":[{"frets":[4,3,3,3,4,3],"fingers":[2,1,1,1,3,1],"barres":[3],"capo":true,"baseFret":1,"midi":[44,48,53,58,63,67]},{"frets":[1,1,2,2,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,55,60,65,68]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[56,60,65,67,72]},{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":11,"midi":[56,61,67,72,77]}]},{"key":"Ab","suffix":"m6","positions":[{"frets":[4,-1,3,4,4,-1],"fingers":[2,0,1,3,4,0],"baseFret":1,"barres":[],"midi":[44,53,59,63]},{"frets":[1,3,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,56,59,65,68]},{"frets":[-1,1,1,3,1,2],"fingers":[0,1,1,3,1,2],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,63,65,71]},{"frets":[-1,3,1,2,1,3],"fingers":[0,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[56,59,65,68,75]}]},{"key":"Ab","suffix":"m7","positions":[{"frets":[1,3,1,1,1,1],"fingers":[1,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,54,59,63,68]},{"frets":[-1,1,1,3,2,2],"fingers":[0,1,1,4,2,3],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,63,66,71]},{"frets":[-1,3,1,3,1,-1],"fingers":[0,2,1,3,1,0],"barres":[1],"capo":true,"baseFret":9,"midi":[56,59,66,68]},{"frets":[1,1,3,1,2,1],"fingers":[1,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,63,66,71,75]}]},{"key":"Ab","suffix":"m7b5","positions":[{"frets":[-1,-1,0,1,0,2],"fingers":[0,0,0,1,0,3],"baseFret":1,"barres":[],"midi":[50,56,59,66]},{"frets":[4,-1,4,4,3,-1],"fingers":[2,0,3,4,1,0],"baseFret":1,"barres":[],"midi":[44,54,59,62]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,2,2],"barres":[2],"baseFret":6,"midi":[56,62,66,71]},{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":11,"barres":[],"midi":[56,62,66,71]}]},{"key":"Ab","suffix":"m9","positions":[{"frets":[4,1,1,1,0,2],"fingers":[4,1,1,2,0,3],"barres":[1],"baseFret":1,"midi":[44,46,51,56,59,66]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,54,59,63,70]},{"frets":[1,3,2,2,3,1],"fingers":[1,3,2,2,4,1],"barres":[2],"baseFret":7,"midi":[47,54,58,63,68,71]},{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":9,"midi":[56,59,66,70,75]}]},{"key":"Ab","suffix":"m69","positions":[{"frets":[2,-1,1,2,2,4],"fingers":[2,0,1,3,3,4],"barres":[2],"baseFret":3,"midi":[44,53,59,63,70]},{"frets":[1,3,3,1,3,3],"fingers":[1,2,2,1,3,4],"barres":[1,3],"capo":true,"baseFret":4,"midi":[44,51,56,59,65,70]},{"frets":[2,1,1,3,1,1],"fingers":[2,1,1,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[47,51,56,63,65,70]},{"frets":[-1,3,1,2,3,3],"fingers":[0,3,1,2,4,4],"barres":[3],"baseFret":9,"midi":[56,59,65,70,75]}]},{"key":"Ab","suffix":"m11","positions":[{"frets":[4,2,4,3,2,2],"fingers":[3,1,4,2,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[44,47,54,58,61,66]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,54,59,63,70]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,3],"barres":[1],"capo":true,"baseFret":6,"midi":[56,61,66,71]},{"frets":[-1,3,1,3,3,1],"fingers":[0,3,1,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[56,59,66,70,73]}]},{"key":"Ab","suffix":"mmaj7","positions":[{"frets":[-1,2,1,1,4,3],"fingers":[0,2,1,1,4,3],"barres":[1],"capo":true,"baseFret":1,"midi":[47,51,56,63,67]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,55,59,63,68]},{"frets":[-1,1,1,3,3,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,63,67,71]},{"frets":[-1,1,3,2,2,1],"fingers":[0,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":11,"midi":[56,63,67,71,75]}]},{"key":"Ab","suffix":"mmaj7b5","positions":[{"frets":[1,2,2,1,-1,1],"fingers":[1,2,3,1,0,1],"barres":[1],"capo":true,"baseFret":4,"midi":[44,50,55,59,68]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":6,"barres":[],"midi":[56,62,67,71]},{"frets":[1,2,3,3,3,-1],"fingers":[1,2,3,3,3,0],"barres":[3],"baseFret":10,"midi":[50,56,62,67,71]},{"frets":[-1,1,2,2,2,-1],"fingers":[0,1,2,3,4,0],"baseFret":11,"barres":[],"midi":[56,62,67,71]}]},{"key":"Ab","suffix":"mmaj9","positions":[{"frets":[2,-1,3,1,0,2],"fingers":[2,0,4,1,0,3],"baseFret":3,"barres":[],"midi":[44,55,58,59,68]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,55,59,63,70]},{"frets":[1,1,1,3,3,2],"fingers":[1,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,56,63,67,71]},{"frets":[-1,3,1,4,3,-1],"fingers":[0,2,1,4,3,0],"baseFret":9,"barres":[],"midi":[56,59,67,70]}]},{"key":"Ab","suffix":"mmaj11","positions":[{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,49,55,59,63,70]},{"frets":[-1,1,1,1,3,2],"fingers":[0,1,1,1,3,2],"barres":[1],"capo":true,"baseFret":6,"midi":[51,56,61,67,71]},{"frets":[-1,3,1,4,3,1],"fingers":[0,2,1,4,3,1],"barres":[1],"capo":true,"baseFret":9,"midi":[56,59,67,70,73]},{"frets":[1,1,1,2,2,1],"fingers":[1,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,56,61,67,71,75]}]},{"key":"Ab","suffix":"add9","positions":[{"frets":[4,3,-1,3,4,-1],"fingers":[3,1,0,2,4,0],"baseFret":1,"barres":[],"midi":[44,48,58,63]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":4,"barres":[],"midi":[56,60,63,70]},{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[56,60,63,70,72]},{"frets":[-1,2,1,-1,2,2],"fingers":[0,2,1,0,3,4],"baseFret":10,"barres":[],"midi":[56,60,70,75]}]},{"key":"Ab","suffix":"madd9","positions":[{"frets":[4,2,-1,3,4,-1],"fingers":[3,1,0,2,4,0],"baseFret":1,"barres":[],"midi":[44,47,58,63]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[56,59,63,70]},{"frets":[1,3,3,1,1,3],"fingers":[1,2,3,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[44,51,56,59,63,70]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":8,"barres":[],"midi":[56,59,63,70]}]}],"A":[{"key":"A","suffix":"major","positions":[{"frets":[-1,0,2,2,2,0],"fingers":[0,0,1,2,3,0],"baseFret":1,"barres":[],"midi":[45,52,57,61,64]},{"frets":[-1,0,1,1,1,4],"fingers":[0,0,1,1,1,4],"barres":[1],"capo":true,"baseFret":2,"midi":[45,52,57,61,69]},{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,57,61,64,69]},{"frets":[-1,0,1,3,4,3],"fingers":[0,0,1,2,4,3],"baseFret":7,"barres":[],"midi":[45,57,64,69,73]}]},{"key":"A","suffix":"minor","positions":[{"frets":[-1,0,2,2,1,0],"fingers":[0,0,2,3,1,0],"baseFret":1,"barres":[],"midi":[45,52,57,60,64]},{"frets":[-1,0,1,4,4,4],"fingers":[0,0,1,4,4,4],"barres":[4],"capo":true,"baseFret":2,"midi":[45,52,60,64,69]},{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,57,60,64,69]},{"frets":[-1,0,1,3,4,2],"fingers":[0,0,1,3,4,2],"baseFret":7,"barres":[],"midi":[45,57,64,69,72]}]},{"key":"A","suffix":"dim","positions":[{"frets":[-1,0,1,2,1,-1],"fingers":[0,0,1,3,2,0],"baseFret":1,"barres":[],"midi":[45,51,57,60]},{"frets":[3,1,-1,2,1,-1],"fingers":[3,1,0,4,2,0],"baseFret":3,"barres":[],"midi":[45,48,59,62]},{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":7,"barres":[],"midi":[57,63,72]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":10,"barres":[],"midi":[57,60,69,75]}]},{"key":"A","suffix":"dim7","positions":[{"frets":[-1,0,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[45,51,57,60,66]},{"frets":[2,-1,1,2,1,-1],"fingers":[2,0,1,3,1,0],"barres":[1],"capo":true,"baseFret":4,"midi":[45,54,60,63]},{"frets":[1,2,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,51,57,60,66,69]},{"frets":[-1,0,1,2,1,2],"fingers":[0,0,1,3,2,4],"barres":[1],"baseFret":7,"midi":[45,57,63,66,72]}]},{"key":"A","suffix":"sus2","positions":[{"frets":[-1,0,2,2,0,0],"fingers":[0,0,2,3,0,0],"baseFret":1,"barres":[],"midi":[45,52,57,59,64]},{"frets":[-1,0,2,4,0,0],"fingers":[0,0,1,4,0,0],"baseFret":1,"barres":[],"midi":[45,52,59,59,64]},{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,57,64,69,71]},{"frets":[-1,0,1,1,0,0],"fingers":[0,0,1,2,0,0],"baseFret":9,"barres":[],"midi":[45,59,64,59,64]}]},{"key":"A","suffix":"sus4","positions":[{"frets":[-1,0,2,2,3,0],"fingers":[0,0,1,2,3,0],"baseFret":1,"barres":[],"midi":[45,52,57,62,64]},{"frets":[-1,0,0,-1,3,0],"fingers":[0,0,0,0,1,0],"baseFret":1,"barres":[],"midi":[45,50,62,64]},{"frets":[1,3,3,3,1,1],"fingers":[1,3,3,4,1,1],"barres":[1,3],"capo":true,"baseFret":5,"midi":[45,52,57,62,64,69]},{"frets":[-1,1,1,3,4,4],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":7,"midi":[52,57,64,69,74]}]},{"key":"A","suffix":"7sus4","positions":[{"frets":[-1,0,2,0,3,0],"fingers":[0,0,2,0,3,0],"baseFret":1,"barres":[],"midi":[45,52,55,62,64]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,55,62,64,69]},{"frets":[-1,0,1,3,2,4],"fingers":[0,0,1,3,2,4],"baseFret":7,"barres":[],"midi":[45,57,64,67,74]},{"frets":[-1,3,3,3,1,1],"fingers":[0,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[57,62,67,69,74]}]},{"key":"A","suffix":"alt","positions":[{"frets":[-1,0,1,2,2,-1],"fingers":[0,0,1,2,3,0],"baseFret":1,"barres":[],"midi":[45,51,57,61]},{"frets":[-1,0,4,3,1,2],"fingers":[0,0,4,3,1,2],"baseFret":4,"barres":[],"midi":[45,57,61,63,69]},{"frets":[-1,0,4,1,3,2],"fingers":[0,0,4,1,3,2],"baseFret":8,"barres":[],"midi":[45,61,63,69,73]},{"frets":[-1,1,2,3,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":12,"barres":[],"midi":[57,63,69,73]}]},{"key":"A","suffix":"aug","positions":[{"frets":[-1,0,3,2,2,1],"fingers":[0,0,4,2,3,1],"baseFret":1,"barres":[],"midi":[45,53,57,61,65]},{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":2,"midi":[45,49,53,57,61]},{"frets":[1,-1,3,2,2,1],"fingers":[1,0,4,2,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,57,61,65,69]},{"frets":[-1,3,2,1,1,-1],"fingers":[0,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":10,"midi":[57,61,65,69]}]},{"key":"A","suffix":"6","positions":[{"frets":[-1,0,2,2,2,2],"fingers":[0,0,1,1,1,1],"barres":[2],"baseFret":1,"midi":[45,52,57,61,66]},{"frets":[2,-1,1,3,2,-1],"fingers":[2,0,1,4,3,0],"baseFret":4,"barres":[],"midi":[45,54,61,64]},{"frets":[1,3,-1,2,3,1],"fingers":[1,3,0,2,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,61,66,69]},{"frets":[-1,3,2,2,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":10,"barres":[],"midi":[57,61,66,69]}]},{"key":"A","suffix":"69","positions":[{"frets":[-1,0,4,4,2,2],"fingers":[0,0,3,4,1,1],"barres":[2],"baseFret":1,"midi":[45,54,59,61,66]},{"frets":[2,1,1,1,2,2],"fingers":[2,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":4,"midi":[45,49,54,59,64,69]},{"frets":[-1,2,2,1,2,2],"fingers":[0,2,2,1,3,4],"barres":[2],"capo":true,"baseFret":6,"midi":[52,57,61,66,71]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":11,"midi":[57,61,66,71,76]}]},{"key":"A","suffix":"7","positions":[{"frets":[-1,0,2,0,2,0],"fingers":[0,0,2,0,3,0],"baseFret":1,"barres":[],"midi":[45,52,55,61,64]},{"frets":[-1,0,2,2,2,3],"fingers":[0,0,1,1,1,2],"barres":[2],"capo":true,"baseFret":1,"midi":[45,52,57,61,67]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,55,61,64,69]},{"frets":[-1,0,1,3,2,3],"fingers":[0,0,1,3,2,4],"baseFret":7,"barres":[],"midi":[45,57,64,67,73]}]},{"key":"A","suffix":"7b5","positions":[{"frets":[-1,0,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":1,"barres":[],"midi":[45,51,57,61,67]},{"frets":[-1,0,2,3,1,2],"fingers":[0,0,2,4,1,3],"baseFret":4,"barres":[],"midi":[45,55,61,63,69]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":7,"barres":[],"midi":[57,63,67,73]},{"frets":[-1,1,2,3,1,2],"fingers":[0,1,2,4,1,3],"barres":[1],"capo":true,"baseFret":10,"midi":[55,61,67,69,75]}]},{"key":"A","suffix":"aug7","positions":[{"frets":[-1,0,3,0,2,1],"fingers":[0,0,3,0,2,1],"baseFret":1,"barres":[],"midi":[45,53,55,61,65]},{"frets":[-1,0,3,2,2,3],"fingers":[0,0,2,1,1,3],"barres":[2],"baseFret":1,"midi":[45,53,57,61,67]},{"frets":[-1,0,1,2,2,1],"fingers":[0,0,1,2,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,55,61,65,69]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":7,"barres":[],"midi":[57,65,67,73]}]},{"key":"A","suffix":"9","positions":[{"frets":[4,3,1,0,0,0],"fingers":[4,3,1,0,0,0],"baseFret":2,"barres":[],"midi":[45,49,52,55,59,64]},{"frets":[-1,0,2,4,2,3],"fingers":[0,0,1,3,1,2],"barres":[2],"baseFret":1,"midi":[45,52,59,61,67]},{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,55,61,64,71]},{"frets":[-1,2,1,2,2,2],"fingers":[0,2,1,3,3,3],"barres":[2],"baseFret":11,"midi":[57,61,67,71,76]}]},{"key":"A","suffix":"9b5","positions":[{"frets":[-1,0,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":1,"barres":[],"midi":[45,51,59,61,67]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[45,49,55,59,63,69]},{"frets":[-1,0,2,1,1,2],"fingers":[0,0,2,1,1,3],"barres":[1],"baseFret":8,"midi":[45,59,63,67,73]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[57,61,67,71,75]}]},{"key":"A","suffix":"aug9","positions":[{"frets":[-1,0,3,4,2,3],"fingers":[0,0,2,4,1,3],"baseFret":1,"barres":[],"midi":[45,53,59,61,67]},{"frets":[3,2,1,0,0,3],"fingers":[3,2,1,0,0,4],"baseFret":3,"barres":[],"midi":[45,49,53,55,59,69]},{"frets":[-1,0,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":5,"barres":[],"midi":[45,55,61,65,71]},{"frets":[-1,2,1,2,0,3],"fingers":[0,2,1,3,0,4],"baseFret":11,"barres":[],"midi":[57,61,67,59,77]}]},{"key":"A","suffix":"7b9","positions":[{"frets":[-1,0,2,3,2,3],"fingers":[0,0,1,2,1,3],"barres":[2],"baseFret":1,"midi":[45,52,58,61,67]},{"frets":[1,3,1,2,1,2],"fingers":[1,4,1,2,1,3],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,55,61,64,70]},{"frets":[-1,-1,2,1,3,1],"fingers":[0,0,2,1,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[57,61,67,70]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":11,"midi":[57,61,67,70,76]}]},{"key":"A","suffix":"7#9","positions":[{"frets":[1,3,1,2,4,4],"fingers":[1,3,1,2,4,4],"barres":[1,4],"capo":true,"baseFret":5,"midi":[45,52,55,61,67,72]},{"frets":[-1,-1,2,1,3,3],"fingers":[0,0,2,1,3,4],"baseFret":6,"barres":[],"midi":[57,61,67,72]},{"frets":[-1,0,3,2,1,2],"fingers":[0,0,4,2,1,3],"baseFret":8,"barres":[],"midi":[45,60,64,67,73]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":11,"barres":[],"midi":[57,61,67,72]}]},{"key":"A","suffix":"11","positions":[{"frets":[-1,0,0,0,2,0],"fingers":[0,0,0,0,2,0],"baseFret":1,"barres":[],"midi":[45,50,55,61,64]},{"frets":[3,2,0,0,0,1],"fingers":[3,2,0,0,0,1],"baseFret":3,"barres":[],"midi":[45,49,50,55,59,67]},{"frets":[1,1,1,2,1,1],"fingers":[1,1,1,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,55,61,64,69]},{"frets":[1,1,1,1,2,3],"fingers":[1,1,1,1,2,3],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,57,62,67,73]}]},{"key":"A","suffix":"9#11","positions":[{"frets":[-1,0,1,0,2,0],"fingers":[0,0,1,0,3,0],"baseFret":1,"barres":[],"midi":[45,51,55,61,64]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[45,49,55,59,63,69]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":7,"barres":[],"midi":[57,63,67,73]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[57,61,67,71,75]}]},{"key":"A","suffix":"13","positions":[{"frets":[-1,0,2,0,2,2],"fingers":[0,0,1,0,2,3],"baseFret":1,"barres":[],"midi":[45,52,55,61,66]},{"frets":[3,2,2,0,1,0],"fingers":[4,2,3,0,1,0],"baseFret":3,"barres":[],"midi":[45,49,54,55,62,64]},{"frets":[1,3,1,2,3,1],"fingers":[1,3,1,2,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,55,61,66,69]},{"frets":[-1,2,1,2,4,4],"fingers":[0,2,1,3,4,4],"barres":[4],"baseFret":11,"midi":[57,61,67,73,78]}]},{"key":"A","suffix":"maj7","positions":[{"frets":[-1,0,2,1,2,0],"fingers":[0,0,2,1,3,0],"baseFret":1,"barres":[],"midi":[45,52,56,61,64]},{"frets":[-1,0,2,2,2,4],"fingers":[0,0,1,1,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[45,52,57,61,68]},{"frets":[1,3,2,2,1,1],"fingers":[1,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,56,61,64,69]},{"frets":[-1,0,1,3,3,3],"fingers":[0,0,1,3,3,3],"barres":[3],"baseFret":7,"midi":[45,57,64,68,73]}]},{"key":"A","suffix":"maj7b5","positions":[{"frets":[-1,0,1,1,2,4],"fingers":[0,0,1,1,2,4],"barres":[1],"baseFret":1,"midi":[45,51,56,61,68]},{"frets":[-1,0,1,2,2,4],"fingers":[0,0,1,2,2,4],"barres":[2],"baseFret":1,"midi":[45,51,57,61,68]},{"frets":[1,2,2,2,-1,-1],"fingers":[1,2,3,4,0,0],"baseFret":5,"barres":[],"midi":[45,51,56,61]},{"frets":[-1,0,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":7,"barres":[],"midi":[45,57,63,68,73]}]},{"key":"A","suffix":"maj7#5","positions":[{"frets":[-1,0,3,1,2,1],"fingers":[0,0,3,1,2,1],"barres":[1],"baseFret":1,"midi":[45,53,56,61,65]},{"frets":[-1,0,3,2,2,4],"fingers":[0,0,2,1,1,3],"barres":[2],"baseFret":1,"midi":[45,53,57,61,68]},{"frets":[-1,0,2,2,2,1],"fingers":[0,0,2,3,4,1],"baseFret":5,"barres":[],"midi":[45,56,61,65,69]},{"frets":[1,4,3,2,1,1],"fingers":[0,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,57,61,65,68,73]}]},{"key":"A","suffix":"maj9","positions":[{"frets":[-1,0,2,4,2,4],"fingers":[0,0,1,3,1,4],"barres":[2],"baseFret":1,"midi":[45,52,59,61,68]},{"frets":[2,1,3,1,2,0],"fingers":[2,1,4,1,3,0],"barres":[1],"baseFret":4,"midi":[45,49,56,59,64,64]},{"frets":[-1,0,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":5,"barres":[],"midi":[45,56,61,64,71]},{"frets":[2,2,1,3,2,-1],"fingers":[2,2,1,4,3,0],"barres":[2],"baseFret":11,"midi":[52,57,61,68,71]}]},{"key":"A","suffix":"maj11","positions":[{"frets":[-1,0,0,1,2,0],"fingers":[0,0,0,1,2,0],"baseFret":1,"barres":[],"midi":[45,50,56,61,64]},{"frets":[-1,0,0,2,2,4],"fingers":[0,0,0,1,1,4],"barres":[2],"baseFret":1,"midi":[45,50,57,61,68]},{"frets":[1,1,2,2,1,3],"fingers":[1,1,2,3,1,4],"barres":[1],"baseFret":5,"midi":[45,50,56,61,64,71]},{"frets":[2,0,1,1,1,1],"fingers":[2,0,1,1,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[50,45,59,64,68,73]}]},{"key":"A","suffix":"maj13","positions":[{"frets":[-1,0,2,1,2,2],"fingers":[0,0,2,1,3,4],"baseFret":1,"barres":[],"midi":[45,52,56,61,66]},{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":4,"midi":[45,49,54,59,64,68]},{"frets":[-1,0,1,1,2,2],"fingers":[0,0,1,1,3,4],"barres":[1],"baseFret":6,"midi":[45,56,61,66,71]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[57,61,66,68,73]}]},{"key":"A","suffix":"m6","positions":[{"frets":[-1,0,2,2,1,2],"fingers":[0,0,2,3,1,4],"baseFret":1,"barres":[],"midi":[45,52,57,60,66]},{"frets":[2,-1,1,2,2,2],"fingers":[2,0,1,3,3,4],"barres":[2],"baseFret":4,"midi":[45,54,60,64,69]},{"frets":[1,3,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,57,60,66,69]},{"frets":[-1,1,1,3,1,2],"fingers":[0,1,1,3,1,2],"barres":[1],"capo":true,"baseFret":7,"midi":[52,57,64,66,72]}]},{"key":"A","suffix":"m7","positions":[{"frets":[-1,0,2,0,1,0],"fingers":[0,0,2,0,1,0],"baseFret":1,"barres":[],"midi":[45,52,55,60,64]},{"frets":[-1,0,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":1,"barres":[],"midi":[45,52,57,60,67]},{"frets":[1,3,1,1,1,1],"fingers":[1,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,55,60,64,69]},{"frets":[-1,1,1,3,2,2],"fingers":[0,1,1,4,2,3],"barres":[1],"capo":true,"baseFret":7,"midi":[52,57,64,67,72]}]},{"key":"A","suffix":"m7b5","positions":[{"frets":[-1,0,1,0,1,-1],"fingers":[0,0,2,0,3,0],"baseFret":1,"barres":[],"midi":[45,51,55,60]},{"frets":[2,-1,2,2,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":4,"barres":[],"midi":[45,55,60,63]},{"frets":[1,2,3,1,4,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,51,57,60,67,69]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,2,2],"barres":[2],"baseFret":7,"midi":[57,63,67,72]}]},{"key":"A","suffix":"m9","positions":[{"frets":[-1,0,2,4,1,3],"fingers":[0,0,2,4,1,3],"baseFret":1,"barres":[],"midi":[45,52,59,60,67]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,55,60,64,71]},{"frets":[1,0,2,0,1,0],"fingers":[1,0,3,0,2,0],"baseFret":8,"barres":[],"midi":[48,45,59,55,67,64]},{"frets":[-1,3,1,3,3,3],"fingers":[0,2,1,3,4,4],"barres":[3],"baseFret":10,"midi":[57,60,67,71,76]}]},{"key":"A","suffix":"m69","positions":[{"frets":[-1,0,1,2,0,0],"fingers":[0,0,2,4,0,0],"baseFret":4,"barres":[],"midi":[45,54,60,59,64]},{"frets":[1,3,3,1,3,3],"fingers":[1,2,2,1,3,4],"barres":[1,3],"capo":true,"baseFret":5,"midi":[45,52,57,60,66,71]},{"frets":[2,0,1,3,1,1],"fingers":[2,0,1,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[48,45,57,64,66,71]},{"frets":[-1,3,1,2,3,3],"fingers":[0,3,1,2,4,4],"barres":[3],"baseFret":10,"midi":[57,60,66,71,76]}]},{"key":"A","suffix":"m11","positions":[{"frets":[-1,0,0,0,1,0],"fingers":[0,0,0,0,1,0],"baseFret":1,"barres":[],"midi":[45,50,55,60,64]},{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":3,"midi":[45,48,55,59,62,67]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,55,60,64,71]},{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[57,60,67,71,74]}]},{"key":"A","suffix":"mmaj7","positions":[{"frets":[-1,0,2,1,1,0],"fingers":[0,0,3,1,2,0],"baseFret":1,"barres":[],"midi":[45,52,56,60,64]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,56,60,64,69]},{"frets":[-1,1,1,3,3,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":7,"midi":[52,57,64,68,72]},{"frets":[-1,4,2,1,1,-1],"fingers":[0,4,2,1,1,0],"barres":[1],"capo":true,"baseFret":9,"midi":[57,60,64,68]}]},{"key":"A","suffix":"mmaj7b5","positions":[{"frets":[-1,0,1,1,1,4],"fingers":[0,0,1,1,1,4],"barres":[1],"baseFret":1,"midi":[45,51,56,60,68]},{"frets":[1,2,2,1,-1,1],"fingers":[1,2,3,1,0,1],"barres":[1],"capo":true,"baseFret":5,"midi":[45,51,56,60,69]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":7,"barres":[],"midi":[57,63,68,72]},{"frets":[1,2,3,3,3,-1],"fingers":[1,2,3,3,3,0],"barres":[3],"baseFret":11,"midi":[51,57,63,68,72]}]},{"key":"A","suffix":"mmaj9","positions":[{"frets":[3,1,4,2,0,0],"fingers":[3,1,4,2,0,0],"baseFret":3,"barres":[],"midi":[45,48,56,59,59,64]},{"frets":[-1,0,3,2,0,1],"fingers":[0,0,3,2,0,1],"baseFret":4,"barres":[],"midi":[45,56,60,59,68]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[45,52,56,60,64,71]},{"frets":[-1,0,2,2,2,1],"fingers":[0,0,2,3,4,1],"baseFret":8,"barres":[],"midi":[45,59,64,68,72]}]},{"key":"A","suffix":"mmaj11","positions":[{"frets":[-1,0,0,1,1,0],"fingers":[0,0,0,1,2,0],"baseFret":1,"barres":[],"midi":[45,50,56,60,64]},{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[45,50,56,60,64,71]},{"frets":[-1,0,1,1,3,2],"fingers":[0,0,1,1,3,2],"barres":[1],"baseFret":7,"midi":[45,57,62,68,72]},{"frets":[-1,3,1,4,3,1],"fingers":[0,2,1,4,3,1],"barres":[1],"capo":true,"baseFret":10,"midi":[57,60,68,71,74]}]},{"key":"A","suffix":"add9","positions":[{"frets":[-1,0,2,4,2,0],"fingers":[0,0,1,3,2,0],"baseFret":1,"barres":[],"midi":[45,52,59,61,64]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":5,"barres":[],"midi":[57,61,64,71]},{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[57,61,64,71,73]},{"frets":[-1,2,1,-1,2,2],"fingers":[0,2,1,0,3,4],"baseFret":11,"barres":[],"midi":[57,61,71,76]}]},{"key":"A","suffix":"madd9","positions":[{"frets":[-1,0,2,4,1,0],"fingers":[0,0,2,4,1,0],"baseFret":1,"barres":[],"midi":[45,52,59,60,64]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[57,60,64,71]},{"frets":[-1,-1,1,3,0,2],"fingers":[0,0,1,3,0,2],"baseFret":7,"barres":[],"midi":[57,64,59,72]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":9,"barres":[],"midi":[57,60,64,71]}]},{"key":"A","suffix":"/C#","positions":[{"frets":[-1,3,1,1,4,4],"fingers":[0,3,1,1,4,4],"barres":[1],"baseFret":2,"midi":[49,52,57,64,69]},{"frets":[-1,3,1,1,1,4],"fingers":[0,3,1,1,1,4],"barres":[1],"baseFret":2,"midi":[49,52,57,61,69]},{"frets":[-1,1,4,3,2,2],"fingers":[0,1,4,3,2,2],"barres":[2],"baseFret":4,"midi":[49,57,61,64,69]}]},{"key":"A","suffix":"/E","positions":[{"frets":[0,0,2,2,2,0],"fingers":[0,0,1,2,3,0],"baseFret":1,"barres":[],"midi":[40,45,52,57,61,64]},{"frets":[-1,3,3,2,1,1],"fingers":[0,3,4,2,1,1],"barres":[1],"baseFret":5,"midi":[52,57,61,64,69]},{"frets":[-1,-1,1,1,1,4],"fingers":[0,0,1,1,1,4],"barres":[1],"baseFret":2,"midi":[52,57,61,69]}]},{"key":"A","suffix":"/F","positions":[{"frets":[1,0,2,2,2,0],"fingers":[1,0,2,3,4,0],"baseFret":1,"barres":[],"midi":[41,45,52,57,61,64]},{"frets":[-1,-1,3,2,2,0],"fingers":[0,0,3,1,2,0],"baseFret":1,"barres":[],"midi":[53,57,61,64]},{"frets":[1,4,2,2,2,-1],"fingers":[1,4,2,2,2,0],"barres":[2],"baseFret":1,"midi":[41,49,52,57,61]}]},{"key":"A","suffix":"/F#","positions":[{"frets":[2,0,2,2,2,0],"fingers":[1,0,2,3,4,0],"baseFret":1,"barres":[],"midi":[42,45,52,57,61,64]},{"frets":[1,3,1,1,4,4],"fingers":[1,3,1,1,4,4],"barres":[1],"baseFret":2,"midi":[42,49,52,57,64,69]},{"frets":[1,3,1,1,1,4],"fingers":[1,3,1,1,1,4],"barres":[1],"baseFret":2,"midi":[42,49,52,57,61,69]}]},{"key":"A","suffix":"/G","positions":[{"frets":[3,0,2,2,2,0],"fingers":[4,0,1,2,3,0],"baseFret":1,"barres":[],"midi":[43,45,52,57,61,64]},{"frets":[-1,-1,1,2,1,1],"fingers":[0,0,1,2,1,1],"barres":[1],"baseFret":5,"midi":[55,61,64,69]},{"frets":[2,3,1,1,4,4],"fingers":[2,3,1,1,4,4],"baseFret":2,"barres":[],"midi":[43,49,52,57,64,69]}]},{"key":"A","suffix":"/G#","positions":[{"frets":[3,3,1,1,4,4],"fingers":[2,3,1,1,4,4],"barres":[1],"baseFret":2,"midi":[44,49,52,57,64,69]},{"frets":[3,3,1,1,1,4],"fingers":[2,3,1,1,1,4],"barres":[1],"baseFret":2,"midi":[44,49,52,57,61,69]},{"frets":[-1,-1,2,2,1,1],"fingers":[0,0,2,3,1,1],"barres":[1],"baseFret":5,"midi":[56,61,64,69]}]},{"key":"A","suffix":"m/C","positions":[{"frets":[-1,3,2,2,1,0],"fingers":[0,4,2,3,1,0],"baseFret":1,"barres":[],"midi":[48,52,57,60,64]},{"frets":[-1,2,1,4,4,4],"fingers":[0,2,1,4,4,4],"barres":[4],"baseFret":2,"midi":[48,52,60,64,69]},{"frets":[-1,2,1,1,4,4],"fingers":[0,2,1,1,4,4],"barres":[1],"baseFret":2,"midi":[48,52,57,64,69]}]},{"key":"A","suffix":"m/E","positions":[{"frets":[0,0,2,2,1,0],"fingers":[0,0,2,3,1,0],"baseFret":1,"barres":[],"midi":[40,45,52,57,60,64]},{"frets":[0,3,2,2,1,0],"fingers":[0,4,2,3,1,0],"baseFret":1,"barres":[],"midi":[40,48,52,57,60,64]},{"frets":[-1,3,3,1,1,1],"fingers":[0,3,4,1,1,1],"barres":[1],"baseFret":5,"midi":[52,57,60,64,69]}]},{"key":"A","suffix":"m/F","positions":[{"frets":[1,0,2,2,1,0],"fingers":[1,0,3,4,2,0],"baseFret":1,"barres":[],"midi":[41,45,52,57,60,64]},{"frets":[-1,-1,3,2,1,0],"fingers":[0,0,3,2,1,0],"baseFret":1,"barres":[],"midi":[53,57,60,64]},{"frets":[1,3,2,2,1,-1],"fingers":[1,4,2,3,1,0],"barres":[1],"baseFret":1,"midi":[41,48,52,57,60]}]},{"key":"A","suffix":"m/F#","positions":[{"frets":[2,0,2,2,1,0],"fingers":[2,0,3,4,1,0],"baseFret":1,"barres":[],"midi":[42,45,52,57,60,64]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,3,4],"baseFret":4,"barres":[],"midi":[54,60,64,69]},{"frets":[1,2,1,4,4,4],"fingers":[1,2,1,4,4,4],"barres":[1],"baseFret":2,"midi":[42,48,52,60,64,69]}]},{"key":"A","suffix":"m/G","positions":[{"frets":[-1,-1,1,1,1,1],"fingers":[0,0,1,1,1,1],"barres":[1],"baseFret":5,"midi":[55,60,64,69]},{"frets":[3,0,2,2,1,0],"fingers":[4,0,2,3,1,0],"baseFret":1,"barres":[],"midi":[43,45,52,57,60,64]},{"frets":[2,2,1,4,4,4],"fingers":[2,3,1,4,4,4],"barres":[4],"baseFret":2,"midi":[43,48,52,60,64,69]}]},{"key":"A","suffix":"m/G#","positions":[{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,2,1,1,1],"barres":[2],"baseFret":4,"midi":[54,60,64,69]},{"frets":[3,2,1,4,4,4],"fingers":[3,2,1,4,4,4],"barres":[4],"baseFret":2,"midi":[44,48,52,60,64,69]},{"frets":[3,2,1,1,4,4],"fingers":[3,2,1,1,4,4],"barres":[1],"baseFret":2,"midi":[44,48,52,57,64,69]}]}],"Bb":[{"key":"Bb","suffix":"major","positions":[{"frets":[-1,1,3,3,3,1],"fingers":[0,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,53,58,62,65]},{"frets":[4,3,1,1,1,-1],"fingers":[4,3,1,1,1,0],"barres":[1],"capo":true,"baseFret":3,"midi":[46,50,53,58,62]},{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,58,62,65,70]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,2,4,3],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,65,70,74]}]},{"key":"Bb","suffix":"minor","positions":[{"frets":[-1,1,3,3,2,1],"fingers":[0,1,3,4,2,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,53,58,61,65]},{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,58,61,65,70]},{"frets":[-1,-1,3,1,1,1],"fingers":[0,0,3,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[58,61,65,70]},{"frets":[-1,-1,1,3,4,2],"fingers":[0,0,1,3,4,2],"baseFret":8,"barres":[],"midi":[58,65,70,73]}]},{"key":"Bb","suffix":"dim","positions":[{"frets":[-1,1,2,3,2,-1],"fingers":[0,1,2,4,3,0],"baseFret":1,"barres":[],"midi":[46,52,58,61]},{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":4,"barres":[],"midi":[46,49,61,64]},{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":8,"barres":[],"midi":[58,64,73]},{"frets":[-1,3,1,-1,1,2],"fingers":[0,4,1,0,2,3],"baseFret":11,"barres":[],"midi":[58,61,70,76]}]},{"key":"Bb","suffix":"dim7","positions":[{"frets":[-1,1,2,0,2,0],"fingers":[0,1,2,0,3,0],"baseFret":1,"barres":[],"midi":[46,52,55,61,64]},{"frets":[-1,-1,2,3,2,3],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[52,58,61,67]},{"frets":[1,2,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,52,58,61,67,70]},{"frets":[-1,-1,1,2,1,2],"fingers":[0,0,1,3,2,4],"baseFret":8,"barres":[],"midi":[58,64,67,73]}]},{"key":"Bb","suffix":"sus2","positions":[{"frets":[1,1,3,3,1,1],"fingers":[1,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":1,"midi":[41,46,53,58,60,65]},{"frets":[4,1,1,3,4,-1],"fingers":[3,1,1,2,4,0],"barres":[1],"capo":true,"baseFret":3,"midi":[46,48,53,60,65]},{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,58,65,70,72]},{"frets":[-1,4,1,1,2,4],"fingers":[0,3,1,1,2,4],"barres":[1],"capo":true,"baseFret":10,"midi":[58,60,65,70,77]}]},{"key":"Bb","suffix":"sus4","positions":[{"frets":[-1,1,3,3,4,1],"fingers":[0,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,53,58,63,65]},{"frets":[-1,-1,1,1,2,4],"fingers":[0,0,1,1,2,4],"barres":[1],"capo":true,"baseFret":3,"midi":[53,58,63,70]},{"frets":[1,3,3,3,1,1],"fingers":[1,3,3,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,58,63,65,70]},{"frets":[-1,1,1,3,4,4],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,65,70,75]}]},{"key":"Bb","suffix":"7sus4","positions":[{"frets":[-1,1,3,1,4,1],"fingers":[0,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,53,56,63,65]},{"frets":[-1,-1,3,3,4,4],"fingers":[0,0,1,1,2,2],"barres":[3,4],"capo":true,"baseFret":1,"midi":[53,58,63,68]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,56,63,65,70]},{"frets":[-1,-1,1,3,2,4],"fingers":[0,0,1,3,2,4],"baseFret":8,"barres":[],"midi":[58,65,68,75]}]},{"key":"Bb","suffix":"alt","positions":[{"frets":[-1,1,2,3,3,0],"fingers":[0,1,2,3,4,0],"baseFret":1,"barres":[],"midi":[46,52,58,62,64]},{"frets":[2,3,0,3,1,0],"fingers":[2,3,0,4,1,0],"baseFret":5,"barres":[],"midi":[46,52,50,62,64,64]},{"frets":[1,2,0,2,-1,1],"fingers":[1,3,0,4,0,2],"baseFret":6,"barres":[],"midi":[46,52,50,62,70]},{"frets":[-1,-1,1,2,4,3],"fingers":[0,0,1,2,4,3],"baseFret":8,"barres":[],"midi":[58,64,70,74]}]},{"key":"Bb","suffix":"aug","positions":[{"frets":[-1,1,4,3,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":1,"barres":[],"midi":[46,54,58,62]},{"frets":[4,3,2,1,1,-1],"fingers":[4,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":3,"midi":[46,50,54,58,62]},{"frets":[-1,-1,3,2,2,1],"fingers":[0,0,4,2,3,1],"baseFret":6,"barres":[],"midi":[58,62,66,70]},{"frets":[-1,-1,2,1,1,-1],"fingers":[0,0,2,1,1,0],"barres":[1],"capo":true,"baseFret":7,"midi":[58,62,66]}]},{"key":"Bb","suffix":"6","positions":[{"frets":[-1,1,3,3,3,3],"fingers":[0,1,3,3,3,3],"barres":[3],"baseFret":1,"midi":[46,53,58,62,67]},{"frets":[2,1,0,0,2,2],"fingers":[2,1,0,0,3,4],"baseFret":5,"barres":[],"midi":[46,50,50,55,65,70]},{"frets":[1,3,-1,2,3,1],"fingers":[1,3,0,2,4,0],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,62,67,70]},{"frets":[-1,4,2,2,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":10,"barres":[],"midi":[58,61,66,69]}]},{"key":"Bb","suffix":"69","positions":[{"frets":[-1,1,0,0,1,1],"fingers":[0,1,0,0,2,3],"baseFret":1,"barres":[],"midi":[46,50,55,60,65]},{"frets":[2,1,1,1,2,2],"fingers":[2,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,55,60,65,70]},{"frets":[-1,2,2,1,2,2],"fingers":[0,2,2,1,3,4],"barres":[2],"baseFret":7,"midi":[53,58,62,67,72]},{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":12,"midi":[58,62,67,72,77]}]},{"key":"Bb","suffix":"7","positions":[{"frets":[-1,1,3,1,3,1],"fingers":[0,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,53,56,62,65]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,56,62,65,70]},{"frets":[-1,1,1,3,2,3],"fingers":[0,1,1,3,2,4],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,65,68,74]},{"frets":[-1,3,2,3,1,-1],"fingers":[0,3,2,4,1,0],"baseFret":11,"barres":[],"midi":[58,62,68,70]}]},{"key":"Bb","suffix":"7b5","positions":[{"frets":[-1,1,2,1,3,-1],"fingers":[0,1,2,1,3,0],"barres":[1],"capo":true,"baseFret":1,"midi":[46,52,56,62]},{"frets":[2,-1,2,3,1,0],"fingers":[2,0,3,4,1,0],"baseFret":5,"barres":[],"midi":[46,56,62,64,64]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":8,"barres":[],"midi":[58,64,68,74]},{"frets":[-1,3,2,3,1,0],"fingers":[0,3,2,4,1,0],"baseFret":11,"barres":[],"midi":[58,62,68,70,64]}]},{"key":"Bb","suffix":"aug7","positions":[{"frets":[-1,1,4,1,3,2],"fingers":[0,1,4,1,3,2],"barres":[1],"capo":true,"baseFret":1,"midi":[46,54,56,62,66]},{"frets":[1,-1,1,2,2,-1],"fingers":[1,0,2,3,4,0],"baseFret":6,"barres":[],"midi":[46,56,62,66]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":8,"barres":[],"midi":[58,66,68,74]},{"frets":[-1,2,1,2,-1,3],"fingers":[0,2,1,3,0,4],"baseFret":12,"barres":[],"midi":[58,62,68,78]}]},{"key":"Bb","suffix":"9","positions":[{"frets":[-1,1,0,1,1,1],"fingers":[0,1,0,2,3,4],"baseFret":1,"barres":[],"midi":[46,50,56,60,65]},{"frets":[2,1,2,1,2,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,56,60,65]},{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,56,62,65,72]},{"frets":[-1,2,1,2,2,2],"fingers":[0,2,1,3,3,3],"barres":[2],"baseFret":12,"midi":[58,62,68,72,77]}]},{"key":"Bb","suffix":"9b5","positions":[{"frets":[-1,1,0,1,1,0],"fingers":[0,1,0,2,3,0],"baseFret":1,"barres":[],"midi":[46,50,56,60,64]},{"frets":[3,-1,0,2,2,1],"fingers":[4,0,0,2,3,1],"baseFret":4,"barres":[],"midi":[46,50,60,64,68]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,56,60,64,70]},{"frets":[-1,2,1,2,2,0],"fingers":[0,2,1,3,4,0],"baseFret":12,"barres":[],"midi":[58,62,68,72,64]}]},{"key":"Bb","suffix":"aug9","positions":[{"frets":[-1,1,0,1,1,2],"fingers":[0,1,0,2,3,4],"baseFret":1,"barres":[],"midi":[46,50,56,60,66]},{"frets":[4,3,4,3,3,4],"fingers":[2,1,3,1,1,4],"barres":[3],"capo":true,"baseFret":1,"midi":[44,48,54,58,62,68]},{"frets":[2,1,2,1,3,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,56,60,66]},{"frets":[1,-1,1,2,2,3],"fingers":[1,0,1,2,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,56,62,66,72]}]},{"key":"Bb","suffix":"7b9","positions":[{"frets":[-1,1,0,1,0,1],"fingers":[0,1,0,2,0,3],"baseFret":1,"barres":[],"midi":[46,50,56,59,65]},{"frets":[3,2,3,1,-1,-1],"fingers":[3,2,4,1,0,0],"baseFret":4,"barres":[],"midi":[46,50,56,59]},{"frets":[1,-1,1,2,1,2],"fingers":[1,0,1,2,1,3],"barres":[1],"capo":true,"baseFret":6,"midi":[46,56,62,65,71]},{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":12,"midi":[58,62,68,71,77]}]},{"key":"Bb","suffix":"7#9","positions":[{"frets":[-1,1,0,1,2,-1],"fingers":[0,1,0,2,3,0],"baseFret":1,"barres":[],"midi":[46,50,56,61]},{"frets":[1,3,1,2,4,4],"fingers":[1,3,1,2,4,4],"barres":[1,4],"capo":true,"baseFret":6,"midi":[46,53,56,62,68,73]},{"frets":[-1,-1,2,1,3,3],"fingers":[0,0,2,1,3,4],"baseFret":7,"barres":[],"midi":[58,62,68,73]},{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":12,"barres":[],"midi":[58,62,68,73]}]},{"key":"Bb","suffix":"11","positions":[{"frets":[-1,1,1,1,3,1],"fingers":[0,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,51,56,62,65]},{"frets":[3,2,0,2,1,1],"fingers":[4,2,0,3,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[46,50,50,60,63,68]},{"frets":[1,1,1,1,2,3],"fingers":[1,1,1,1,2,3],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,58,63,68,74]},{"frets":[-1,3,2,3,1,1],"fingers":[0,3,2,4,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[58,62,68,70,75]}]},{"key":"Bb","suffix":"9#11","positions":[{"frets":[-1,1,0,1,1,0],"fingers":[0,1,0,2,3,0],"baseFret":1,"barres":[],"midi":[46,50,56,60,64]},{"frets":[2,1,2,1,1,-1],"fingers":[2,1,3,1,1,0],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,56,60,64]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":8,"barres":[],"midi":[58,64,68,74]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":12,"midi":[58,62,68,72,76]}]},{"key":"Bb","suffix":"13","positions":[{"frets":[-1,1,0,1,3,3],"fingers":[0,1,0,2,4,4],"barres":[3],"baseFret":1,"midi":[46,50,56,62,67]},{"frets":[3,2,0,0,1,1],"fingers":[3,2,0,0,1,1],"barres":[1],"baseFret":4,"midi":[46,50,50,55,63,68]},{"frets":[1,1,1,2,3,3],"fingers":[1,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,56,62,67,72]},{"frets":[-1,2,1,2,4,4],"fingers":[0,2,1,3,4,4],"barres":[4],"baseFret":12,"midi":[58,62,68,74,79]}]},{"key":"Bb","suffix":"maj7","positions":[{"frets":[-1,1,3,2,3,1],"fingers":[0,1,3,2,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,53,57,62,65]},{"frets":[-1,-1,1,1,1,3],"fingers":[0,0,1,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[53,58,62,69]},{"frets":[1,3,2,2,1,1],"fingers":[1,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,57,62,65,70]},{"frets":[-1,1,1,3,3,3],"fingers":[0,1,1,3,3,3],"barres":[1,3],"capo":true,"baseFret":8,"midi":[53,58,65,69,74]}]},{"key":"Bb","suffix":"maj7b5","positions":[{"frets":[-1,1,2,2,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":1,"barres":[],"midi":[46,52,57,62]},{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,57,62,64,69]},{"frets":[1,2,2,2,-1,0],"fingers":[1,2,3,4,0,0],"baseFret":6,"barres":[],"midi":[46,52,57,62,64]},{"frets":[-1,-1,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":8,"barres":[],"midi":[58,64,69,74]}]},{"key":"Bb","suffix":"maj7#5","positions":[{"frets":[-1,1,0,2,3,2],"fingers":[0,1,0,2,4,3],"baseFret":1,"barres":[],"midi":[46,50,57,62,66]},{"frets":[-1,-1,2,1,1,3],"fingers":[0,0,2,1,1,4],"barres":[1],"capo":true,"baseFret":3,"midi":[54,58,62,69]},{"frets":[1,-1,2,2,2,-1],"fingers":[1,0,2,3,4,0],"baseFret":6,"barres":[],"midi":[46,57,62,66]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[50,58,62,66,69,74]}]},{"key":"Bb","suffix":"maj9","positions":[{"frets":[1,1,0,2,1,-1],"fingers":[1,1,0,3,2,0],"barres":[1],"baseFret":1,"midi":[41,46,50,57,60]},{"frets":[4,1,1,1,1,3],"fingers":[4,1,1,1,1,3],"barres":[1],"capo":true,"baseFret":3,"midi":[46,48,53,58,62,69]},{"frets":[2,1,3,1,2,-1],"fingers":[2,1,4,1,3,0],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,57,60,65]},{"frets":[1,3,2,2,1,3],"fingers":[1,3,2,2,1,4],"barres":[1,2],"capo":true,"baseFret":6,"midi":[46,53,57,62,65,72]}]},{"key":"Bb","suffix":"maj11","positions":[{"frets":[-1,1,1,2,3,1],"fingers":[0,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,51,57,62,65]},{"frets":[3,-1,0,2,1,2],"fingers":[4,0,0,2,1,3],"baseFret":4,"barres":[],"midi":[46,50,60,63,69]},{"frets":[1,1,2,2,1,1],"fingers":[1,1,2,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,57,62,65,70]},{"frets":[-1,-1,1,1,3,3],"fingers":[0,0,1,1,3,4],"barres":[1],"capo":true,"baseFret":8,"midi":[58,63,69,74]}]},{"key":"Bb","suffix":"maj13","positions":[{"frets":[-1,1,1,2,3,3],"fingers":[0,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":1,"midi":[46,51,57,62,67]},{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":5,"midi":[46,50,55,60,65,69]},{"frets":[1,1,2,2,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,57,62,67,70]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":10,"midi":[58,62,67,69,74]}]},{"key":"Bb","suffix":"m6","positions":[{"frets":[-1,1,3,-1,2,3],"fingers":[0,1,3,0,2,4],"baseFret":1,"barres":[],"midi":[46,53,61,67]},{"frets":[-1,2,3,1,4,-1],"fingers":[0,2,3,1,4,0],"baseFret":3,"barres":[],"midi":[49,55,58,65]},{"frets":[2,-1,1,2,2,2],"fingers":[2,0,1,3,3,4],"barres":[2],"baseFret":5,"midi":[46,55,61,65,70]},{"frets":[1,3,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,58,61,67,70]}]},{"key":"Bb","suffix":"m7","positions":[{"frets":[-1,1,3,1,2,1],"fingers":[0,1,3,1,2,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,53,56,61,65]},{"frets":[-1,-1,3,3,2,4],"fingers":[0,0,2,3,1,4],"baseFret":1,"barres":[],"midi":[53,58,61,68]},{"frets":[1,3,1,1,1,1],"fingers":[1,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,56,61,65,70]},{"frets":[-1,1,1,3,2,2],"fingers":[0,1,1,4,2,3],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,65,68,73]}]},{"key":"Bb","suffix":"m7b5","positions":[{"frets":[-1,1,2,1,2,-1],"fingers":[0,1,3,2,4,0],"baseFret":1,"barres":[],"midi":[46,52,56,61]},{"frets":[-1,-1,2,3,2,4],"fingers":[0,0,1,2,1,4],"barres":[2],"capo":true,"baseFret":1,"midi":[52,58,61,68]},{"frets":[2,-1,2,2,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":5,"barres":[],"midi":[46,56,61,64]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,2,2],"barres":[2],"baseFret":8,"midi":[58,64,68,73]}]},{"key":"Bb","suffix":"m9","positions":[{"frets":[-1,-1,2,4,1,3],"fingers":[0,0,2,4,1,3],"baseFret":2,"barres":[],"midi":[53,60,61,68]},{"frets":[3,1,-1,2,3,1],"fingers":[3,1,0,2,4,1],"barres":[1],"capo":true,"baseFret":4,"midi":[46,49,60,65,68]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,56,61,65,72]},{"frets":[-1,3,1,3,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":11,"barres":[],"midi":[58,61,68,72]}]},{"key":"Bb","suffix":"m69","positions":[{"frets":[2,-1,1,2,2,4],"fingers":[2,0,1,3,3,4],"barres":[2],"baseFret":5,"midi":[46,55,61,65,72]},{"frets":[1,-1,3,1,3,3],"fingers":[1,0,2,1,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,58,61,67,72]},{"frets":[2,-1,1,3,1,1],"fingers":[2,0,1,4,1,1],"barres":[1],"capo":true,"baseFret":8,"midi":[49,58,65,67,72]},{"frets":[-1,3,1,2,3,-1],"fingers":[0,3,1,2,4,0],"baseFret":11,"barres":[],"midi":[58,61,67,72]}]},{"key":"Bb","suffix":"m11","positions":[{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":4,"midi":[46,49,56,60,63,68]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,56,61,65,72]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,3],"barres":[1],"capo":true,"baseFret":8,"midi":[58,63,68,73]},{"frets":[-1,3,1,3,3,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[58,61,68,72,75]}]},{"key":"Bb","suffix":"mmaj7","positions":[{"frets":[-1,1,3,2,2,1],"fingers":[0,1,4,2,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,53,57,61,65]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,57,61,65,70]},{"frets":[-1,1,1,3,3,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,65,69,73]},{"frets":[-1,4,2,1,1,-1],"fingers":[0,4,2,1,1,0],"barres":[1],"capo":true,"baseFret":10,"midi":[58,61,65,69]}]},{"key":"Bb","suffix":"mmaj7b5","positions":[{"frets":[-1,1,2,2,2,0],"fingers":[0,1,2,3,4,0],"baseFret":1,"barres":[],"midi":[46,52,57,61,64]},{"frets":[2,3,-1,2,1,1],"fingers":[2,4,0,3,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[46,52,61,64,69]},{"frets":[1,2,2,1,-1,1],"fingers":[1,2,3,1,0,1],"barres":[1],"capo":true,"baseFret":6,"midi":[46,52,57,61,70]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":8,"barres":[],"midi":[58,64,69,73]}]},{"key":"Bb","suffix":"mmaj9","positions":[{"frets":[3,1,-1,2,3,2],"fingers":[3,1,0,2,4,2],"barres":[2],"baseFret":4,"midi":[46,49,60,65,69]},{"frets":[3,1,4,2,-1,-1],"fingers":[3,1,4,2,0,0],"baseFret":4,"barres":[],"midi":[46,49,57,60]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,53,57,61,65,72]},{"frets":[1,1,1,3,3,2],"fingers":[1,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":8,"midi":[48,53,58,65,69,73]}]},{"key":"Bb","suffix":"mmaj11","positions":[{"frets":[-1,1,1,2,2,1],"fingers":[0,1,1,2,3,1],"barres":[1],"capo":true,"baseFret":1,"midi":[46,51,57,61,65]},{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[46,51,57,61,65,72]},{"frets":[-1,1,1,1,3,2],"fingers":[0,1,1,1,3,2],"barres":[1],"capo":true,"baseFret":8,"midi":[53,58,63,69,73]},{"frets":[-1,3,1,4,3,1],"fingers":[0,2,1,4,3,1],"barres":[1],"capo":true,"baseFret":11,"midi":[58,61,69,72,75]}]},{"key":"Bb","suffix":"add9","positions":[{"frets":[-1,1,0,3,1,1],"fingers":[0,1,0,4,2,3],"baseFret":1,"barres":[],"midi":[46,50,58,60,65]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":6,"barres":[],"midi":[58,62,65,72]},{"frets":[-1,-1,2,1,-1,2],"fingers":[0,0,2,1,0,3],"baseFret":7,"barres":[],"midi":[58,62,72]},{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":10,"midi":[58,62,65,72,74]}]},{"key":"Bb","suffix":"madd9","positions":[{"frets":[-1,4,3,3,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":1,"barres":[],"midi":[49,53,58,60]},{"frets":[3,1,-1,2,3,-1],"fingers":[3,1,0,2,4,0],"baseFret":4,"barres":[],"midi":[46,49,60,65]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[58,61,65,72]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":10,"barres":[],"midi":[58,61,65,72]}]}],"B":[{"key":"B","suffix":"major","positions":[{"frets":[2,2,4,4,4,2],"fingers":[1,1,2,3,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,54,59,63,66]},{"frets":[-1,-1,1,1,1,4],"fingers":[0,0,1,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[54,59,63,71]},{"frets":[1,3,3,2,1,1],"fingers":[1,3,4,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,59,63,66,71]},{"frets":[-1,1,1,3,4,3],"fingers":[0,1,1,2,4,3],"barres":[1],"capo":true,"baseFret":9,"midi":[54,59,66,71,75]}]},{"key":"B","suffix":"minor","positions":[{"frets":[2,2,4,4,3,2],"fingers":[1,1,3,4,2,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,54,59,62,66]},{"frets":[1,3,3,1,1,1],"fingers":[1,3,4,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,59,62,66,71]},{"frets":[-1,-1,1,3,4,2],"fingers":[0,0,1,3,4,2],"baseFret":9,"barres":[],"midi":[59,66,71,74]},{"frets":[-1,-1,3,2,3,1],"fingers":[0,0,3,2,4,1],"baseFret":10,"barres":[],"midi":[62,66,71,74]}]},{"key":"B","suffix":"dim","positions":[{"frets":[-1,2,0,-1,0,1],"fingers":[0,3,0,0,0,2],"baseFret":1,"barres":[],"midi":[47,50,59,65]},{"frets":[-1,2,3,4,3,-1],"fingers":[0,1,2,4,3,0],"baseFret":1,"barres":[],"midi":[47,53,59,62]},{"frets":[3,1,-1,3,2,-1],"fingers":[3,1,0,4,2,0],"baseFret":5,"barres":[],"midi":[47,50,62,65]},{"frets":[-1,-1,1,2,-1,2],"fingers":[0,0,1,2,0,3],"baseFret":9,"barres":[],"midi":[59,65,74]}]},{"key":"B","suffix":"dim7","positions":[{"frets":[-1,2,3,1,3,1],"fingers":[0,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[47,53,56,62,65]},{"frets":[-1,-1,3,4,3,4],"fingers":[0,0,1,3,2,4],"baseFret":1,"barres":[],"midi":[53,59,62,68]},{"frets":[2,-1,1,2,1,-1],"fingers":[3,0,1,4,2,0],"baseFret":6,"barres":[],"midi":[47,56,62,65]},{"frets":[1,2,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,53,59,62,68,71]}]},{"key":"B","suffix":"sus2","positions":[{"frets":[2,2,4,4,2,2],"fingers":[1,1,3,4,1,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,54,59,61,66]},{"frets":[2,-1,-1,1,2,2],"fingers":[2,0,0,1,3,4],"baseFret":6,"barres":[],"midi":[47,61,66,71]},{"frets":[1,1,1,3,4,1],"fingers":[1,1,1,3,4,1],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,59,66,71,73]},{"frets":[-1,4,1,1,2,4],"fingers":[0,3,1,1,2,4],"barres":[1],"capo":true,"baseFret":11,"midi":[59,61,66,71,78]}]},{"key":"B","suffix":"sus4","positions":[{"frets":[1,1,3,3,4,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":2,"midi":[42,47,54,59,64,66]},{"frets":[-1,-1,1,1,2,4],"fingers":[0,0,1,1,2,4],"barres":[1],"capo":true,"baseFret":4,"midi":[54,59,64,71]},{"frets":[1,3,3,3,1,1],"fingers":[1,2,3,4,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,59,64,66,71]},{"frets":[-1,1,1,3,4,4],"fingers":[0,1,1,3,4,4],"barres":[1,4],"capo":true,"baseFret":9,"midi":[54,59,66,71,76]}]},{"key":"B","suffix":"7sus4","positions":[{"frets":[-1,2,2,2,0,0],"fingers":[0,1,2,3,0,0],"baseFret":1,"barres":[],"midi":[47,52,57,59,64]},{"frets":[1,1,3,1,4,1],"fingers":[1,1,3,1,4,1],"barres":[1],"capo":true,"baseFret":2,"midi":[42,47,54,57,64,66]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,2],"barres":[1,2],"capo":true,"baseFret":4,"midi":[54,59,64,69]},{"frets":[1,3,1,3,1,1],"fingers":[1,3,1,4,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,57,64,66,71]}]},{"key":"B","suffix":"alt","positions":[{"frets":[-1,2,3,4,4,-1],"fingers":[0,1,2,3,4,0],"baseFret":1,"barres":[],"midi":[47,53,59,63]},{"frets":[-1,-1,4,3,1,2],"fingers":[0,0,4,3,1,2],"baseFret":6,"barres":[],"midi":[59,63,65,71]},{"frets":[1,2,3,2,0,-1],"fingers":[1,2,4,3,0,0],"baseFret":7,"barres":[],"midi":[47,53,59,63,59]},{"frets":[-1,-1,1,2,0,3],"fingers":[0,0,1,2,0,3],"baseFret":9,"barres":[],"midi":[59,65,59,75]}]},{"key":"B","suffix":"aug","positions":[{"frets":[-1,2,1,0,0,-1],"fingers":[0,2,1,0,0,0],"baseFret":1,"barres":[],"midi":[47,51,55,59]},{"frets":[-1,-1,3,2,2,1],"fingers":[0,0,4,2,3,1],"baseFret":3,"barres":[],"midi":[55,59,63,67]},{"frets":[1,-1,3,2,2,-1],"fingers":[1,0,4,2,3,0],"baseFret":7,"barres":[],"midi":[47,59,63,67]},{"frets":[-1,3,2,1,1,0],"fingers":[0,3,2,1,1,0],"barres":[1],"capo":true,"baseFret":12,"midi":[59,63,67,71,64]}]},{"key":"B","suffix":"6","positions":[{"frets":[-1,2,1,1,0,-1],"fingers":[0,3,1,2,0,0],"baseFret":1,"barres":[],"midi":[47,51,56,59]},{"frets":[-1,2,4,4,4,4],"fingers":[0,1,3,3,3,3],"barres":[4],"baseFret":1,"midi":[47,54,59,63,68]},{"frets":[1,-1,3,2,3,-1],"fingers":[1,0,3,2,4,0],"baseFret":7,"barres":[],"midi":[47,59,63,68]},{"frets":[-1,-1,1,3,1,3],"fingers":[0,0,1,3,1,4],"barres":[1],"capo":true,"baseFret":9,"midi":[59,66,68,75]}]},{"key":"B","suffix":"69","positions":[{"frets":[-1,2,1,1,2,2],"fingers":[0,2,1,1,3,4],"barres":[1],"capo":true,"baseFret":1,"midi":[47,51,56,61,66]},{"frets":[2,1,1,1,2,2],"fingers":[2,1,1,1,3,4],"barres":[1],"capo":true,"baseFret":6,"midi":[47,51,56,61,66,71]},{"frets":[-1,2,2,1,2,2],"fingers":[0,2,2,1,3,4],"barres":[2],"baseFret":8,"midi":[54,59,63,68,73]},{"frets":[-1,4,1,3,2,1],"fingers":[0,4,1,3,2,1],"barres":[1],"capo":true,"baseFret":11,"midi":[59,61,68,71,75]}]},{"key":"B","suffix":"7","positions":[{"frets":[-1,2,1,2,0,2],"fingers":[0,2,1,3,0,4],"baseFret":1,"barres":[],"midi":[47,51,57,59,66]},{"frets":[2,2,4,2,4,2],"fingers":[1,1,3,1,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,54,57,63,66]},{"frets":[-1,-1,1,1,1,2],"fingers":[0,0,1,1,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[54,59,63,69]},{"frets":[1,3,1,2,1,1],"fingers":[1,3,1,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,57,63,66,71]}]},{"key":"B","suffix":"7b5","positions":[{"frets":[-1,2,1,2,0,1],"fingers":[0,3,1,4,0,2],"baseFret":1,"barres":[],"midi":[47,51,57,59,65]},{"frets":[-1,2,3,2,4,-1],"fingers":[0,1,2,1,3,0],"baseFret":1,"barres":[],"midi":[47,53,57,63]},{"frets":[2,-1,2,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":6,"barres":[],"midi":[47,57,63,65]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":9,"barres":[],"midi":[59,65,69,75]}]},{"key":"B","suffix":"aug7","positions":[{"frets":[-1,2,1,2,0,3],"fingers":[0,2,1,3,0,4],"baseFret":1,"barres":[],"midi":[47,51,57,59,67]},{"frets":[-1,1,4,1,3,2],"fingers":[0,0,2,1,1,3],"barres":[1],"capo":true,"baseFret":2,"midi":[47,55,57,63,67]},{"frets":[1,-1,1,2,2,-1],"fingers":[1,0,2,3,4,0],"baseFret":7,"barres":[],"midi":[47,57,63,67]},{"frets":[-1,-1,1,4,2,3],"fingers":[0,0,1,4,2,3],"baseFret":9,"barres":[],"midi":[59,67,69,75]}]},{"key":"B","suffix":"9","positions":[{"frets":[-1,2,1,2,2,2],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":1,"midi":[47,51,57,61,66]},{"frets":[4,1,1,3,1,2],"fingers":[4,1,1,3,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[47,49,54,61,63,69]},{"frets":[1,3,1,2,1,3],"fingers":[1,3,1,2,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,57,63,66,73]},{"frets":[-1,-1,2,1,3,2],"fingers":[0,0,2,1,4,3],"baseFret":8,"barres":[],"midi":[59,63,69,73]}]},{"key":"B","suffix":"9b5","positions":[{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[47,51,57,61,65]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":6,"midi":[47,51,57,61,65,71]},{"frets":[1,2,1,2,-1,3],"fingers":[1,2,1,3,0,4],"barres":[1],"capo":true,"baseFret":7,"midi":[47,53,57,63,73]},{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":13,"midi":[59,63,69,73,77]}]},{"key":"B","suffix":"aug9","positions":[{"frets":[-1,2,1,2,2,3],"fingers":[0,2,1,3,3,4],"barres":[2],"baseFret":1,"midi":[47,51,57,61,67]},{"frets":[2,1,2,1,1,2],"fingers":[2,1,3,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[45,49,55,59,63,69]},{"frets":[2,1,2,1,3,-1],"fingers":[2,1,3,1,4,0],"barres":[1],"capo":true,"baseFret":6,"midi":[47,51,57,61,67]},{"frets":[1,2,1,2,2,1],"fingers":[1,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,57,61,67,71,75]}]},{"key":"B","suffix":"7b9","positions":[{"frets":[-1,2,1,2,1,2],"fingers":[0,2,1,3,1,4],"barres":[1],"capo":true,"baseFret":1,"midi":[47,51,57,60,66]},{"frets":[3,2,3,1,-1,-1],"fingers":[3,2,4,1,0,0],"baseFret":5,"barres":[],"midi":[47,51,57,60]},{"frets":[1,-1,1,2,1,2],"fingers":[1,0,1,2,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[47,57,63,66,72]},{"frets":[-1,-1,2,1,3,1],"fingers":[0,0,2,1,3,1],"barres":[1],"baseFret":8,"midi":[59,63,69,72]}]},{"key":"B","suffix":"7#9","positions":[{"frets":[-1,2,1,2,3,-1],"fingers":[0,2,1,3,4,0],"baseFret":1,"barres":[],"midi":[47,51,57,62]},{"frets":[3,2,0,3,0,1],"fingers":[3,2,0,4,0,1],"baseFret":5,"barres":[],"midi":[47,51,50,62,59,69]},{"frets":[1,3,1,2,4,4],"fingers":[1,3,1,2,4,4],"barres":[1,4],"capo":true,"baseFret":7,"midi":[47,54,57,63,69,74]},{"frets":[-1,-1,2,1,3,3],"fingers":[0,0,2,1,3,4],"baseFret":8,"barres":[],"midi":[59,63,69,74]}]},{"key":"B","suffix":"11","positions":[{"frets":[-1,2,1,2,0,0],"fingers":[0,2,1,3,0,0],"baseFret":1,"barres":[],"midi":[47,51,57,59,64]},{"frets":[2,2,2,2,4,2],"fingers":[1,1,1,1,3,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,52,57,63,66]},{"frets":[1,1,1,2,1,1],"fingers":[1,1,1,2,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,57,63,66,71]},{"frets":[1,1,1,1,2,3],"fingers":[1,1,1,1,2,3],"barres":[1],"capo":true,"baseFret":9,"midi":[49,54,59,64,69,75]}]},{"key":"B","suffix":"9#11","positions":[{"frets":[-1,2,1,2,2,1],"fingers":[0,2,1,3,4,1],"barres":[1],"capo":true,"baseFret":1,"midi":[47,51,57,61,65]},{"frets":[-1,2,3,2,4,2],"fingers":[0,1,2,1,3,1],"barres":[2],"capo":true,"baseFret":1,"midi":[47,53,57,63,66]},{"frets":[2,-1,2,3,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":6,"barres":[],"midi":[47,57,63,65]},{"frets":[-1,-1,1,2,2,3],"fingers":[0,0,1,2,3,4],"baseFret":9,"barres":[],"midi":[59,65,69,75]}]},{"key":"B","suffix":"13","positions":[{"frets":[-1,2,1,2,4,4],"fingers":[0,2,1,3,4,4],"barres":[4],"baseFret":1,"midi":[47,51,57,63,68]},{"frets":[2,2,2,2,4,4],"fingers":[1,1,1,1,3,4],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,52,57,63,68]},{"frets":[4,1,3,1,1,2],"fingers":[4,1,3,1,1,2],"barres":[1],"capo":true,"baseFret":4,"midi":[47,49,56,59,63,69]},{"frets":[1,1,1,2,3,3],"fingers":[1,1,1,2,3,4],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,57,63,68,73]}]},{"key":"B","suffix":"maj7","positions":[{"frets":[2,2,4,3,4,2],"fingers":[1,1,3,2,4,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,54,58,63,66]},{"frets":[-1,-1,1,1,1,3],"fingers":[0,0,1,1,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[54,59,63,70]},{"frets":[1,3,2,2,1,1],"fingers":[1,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,58,63,66,71]},{"frets":[-1,1,1,3,3,3],"fingers":[0,1,1,3,3,3],"barres":[1,3],"capo":true,"baseFret":9,"midi":[54,59,66,70,75]}]},{"key":"B","suffix":"maj7b5","positions":[{"frets":[-1,2,3,3,4,-1],"fingers":[0,1,2,3,4,0],"baseFret":1,"barres":[],"midi":[47,53,58,63]},{"frets":[2,1,3,3,1,1],"fingers":[2,1,3,4,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[47,51,58,63,65,70]},{"frets":[1,2,2,2,0,-1],"fingers":[1,2,3,4,0,0],"baseFret":7,"barres":[],"midi":[47,53,58,63,59]},{"frets":[-1,-1,1,2,3,3],"fingers":[0,0,1,2,3,4],"baseFret":9,"barres":[],"midi":[59,65,70,75]}]},{"key":"B","suffix":"maj7#5","positions":[{"frets":[-1,2,1,3,0,3],"fingers":[0,2,1,3,0,4],"baseFret":1,"barres":[],"midi":[47,51,58,59,67]},{"frets":[-1,1,4,2,3,-1],"fingers":[0,1,4,2,3,0],"baseFret":2,"barres":[],"midi":[47,55,58,63]},{"frets":[2,1,3,0,3,-1],"fingers":[2,1,3,0,3,0],"baseFret":6,"barres":[],"midi":[47,51,58,55,67]},{"frets":[1,4,3,2,1,1],"fingers":[1,4,3,2,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[51,59,63,67,70,75]}]},{"key":"B","suffix":"maj9","positions":[{"frets":[2,2,1,3,2,-1],"fingers":[2,2,1,4,3,0],"barres":[2],"baseFret":1,"midi":[42,47,51,58,61]},{"frets":[-1,-1,1,3,1,3],"fingers":[0,0,1,3,1,4],"barres":[1],"capo":true,"baseFret":4,"midi":[54,61,63,70]},{"frets":[2,1,3,1,2,-1],"fingers":[2,1,4,1,3,0],"barres":[1],"baseFret":6,"midi":[47,51,58,61,66]},{"frets":[-1,-1,2,1,4,2],"fingers":[0,0,2,1,4,3],"baseFret":8,"barres":[],"midi":[59,63,70,73]}]},{"key":"B","suffix":"maj11","positions":[{"frets":[-1,2,1,3,0,0],"fingers":[0,2,1,3,0,0],"baseFret":1,"barres":[],"midi":[47,51,58,59,64]},{"frets":[2,2,2,3,4,2],"fingers":[1,1,1,2,3,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,52,58,63,66]},{"frets":[1,1,2,2,1,3],"fingers":[1,1,2,2,1,3],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,58,63,66,73]},{"frets":[-1,-1,1,1,3,3],"fingers":[0,0,1,1,3,4],"barres":[1],"capo":true,"baseFret":9,"midi":[59,64,70,75]}]},{"key":"B","suffix":"maj13","positions":[{"frets":[-1,2,2,3,4,4],"fingers":[0,1,1,2,3,4],"barres":[2],"capo":true,"baseFret":1,"midi":[47,52,58,63,68]},{"frets":[2,1,1,1,2,1],"fingers":[2,1,1,1,3,1],"barres":[1],"capo":true,"baseFret":6,"midi":[47,51,56,61,66,70]},{"frets":[1,1,2,2,3,1],"fingers":[1,1,2,3,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,58,63,68,71]},{"frets":[-1,4,3,3,1,1],"fingers":[0,4,2,3,1,1],"barres":[1],"capo":true,"baseFret":11,"midi":[59,63,68,70,75]}]},{"key":"B","suffix":"m6","positions":[{"frets":[2,2,0,1,0,2],"fingers":[2,3,0,1,0,4],"baseFret":1,"barres":[],"midi":[42,47,50,56,59,66]},{"frets":[-1,-1,4,4,3,4],"fingers":[0,0,2,3,1,4],"baseFret":1,"barres":[],"midi":[54,59,62,68]},{"frets":[2,-1,1,2,2,-1],"fingers":[2,0,1,3,4,0],"baseFret":6,"barres":[],"midi":[47,56,62,66]},{"frets":[1,3,3,1,3,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,59,62,68,71]}]},{"key":"B","suffix":"m7","positions":[{"frets":[2,2,4,2,3,2],"fingers":[1,1,3,1,2,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,54,57,62,66]},{"frets":[-1,-1,2,2,1,3],"fingers":[0,0,2,3,1,4],"baseFret":3,"barres":[],"midi":[54,59,62,69]},{"frets":[1,3,1,1,1,1],"fingers":[1,3,1,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,57,62,66,71]},{"frets":[-1,1,1,3,2,2],"fingers":[0,1,1,4,2,3],"barres":[1],"capo":true,"baseFret":9,"midi":[54,59,66,69,74]}]},{"key":"B","suffix":"m7b5","positions":[{"frets":[-1,2,3,2,3,-1],"fingers":[0,1,3,2,4,0],"baseFret":1,"barres":[],"midi":[47,53,57,62]},{"frets":[2,-1,2,2,1,-1],"fingers":[2,0,3,4,1,0],"baseFret":6,"barres":[],"midi":[47,57,62,65]},{"frets":[1,2,3,1,4,1],"fingers":[1,2,3,1,4,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,53,59,62,69,71]},{"frets":[-1,-1,1,2,2,2],"fingers":[0,0,1,2,2,2],"barres":[2],"baseFret":9,"midi":[59,65,69,74]}]},{"key":"B","suffix":"m9","positions":[{"frets":[-1,2,0,2,2,2],"fingers":[0,1,0,2,3,4],"baseFret":1,"barres":[],"midi":[47,50,57,61,66]},{"frets":[-1,2,2,2,1,3],"fingers":[0,2,3,3,1,4],"barres":[2],"baseFret":3,"midi":[49,54,59,62,69]},{"frets":[1,3,1,1,1,3],"fingers":[1,3,1,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,57,62,66,73]},{"frets":[1,3,2,2,3,1],"fingers":[1,3,2,2,4,1],"barres":[1,2],"capo":true,"baseFret":10,"midi":[50,57,61,66,71,74]}]},{"key":"B","suffix":"m69","positions":[{"frets":[-1,2,0,1,2,2],"fingers":[0,2,0,1,3,4],"baseFret":1,"barres":[],"midi":[47,50,56,61,66]},{"frets":[-1,1,2,2,3,3],"fingers":[0,1,2,2,3,3],"barres":[2,3],"baseFret":5,"midi":[50,56,61,66,71]},{"frets":[1,3,3,1,3,3],"fingers":[1,2,2,1,3,4],"barres":[1,3],"capo":true,"baseFret":7,"midi":[47,54,59,62,68,73]},{"frets":[2,-1,1,3,1,1],"fingers":[2,0,1,3,1,1],"barres":[1],"capo":true,"baseFret":9,"midi":[50,59,66,68,73]}]},{"key":"B","suffix":"m11","positions":[{"frets":[-1,2,0,2,2,0],"fingers":[0,1,0,2,3,0],"baseFret":1,"barres":[],"midi":[47,50,57,61,64]},{"frets":[3,1,3,2,1,1],"fingers":[3,1,4,2,1,1],"barres":[1],"capo":true,"baseFret":5,"midi":[47,50,57,61,64,69]},{"frets":[1,1,1,1,1,3],"fingers":[1,1,1,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,57,62,66,73]},{"frets":[-1,-1,1,1,2,2],"fingers":[0,0,1,1,2,3],"barres":[1,2],"capo":true,"baseFret":9,"midi":[59,64,69,74]}]},{"key":"B","suffix":"mmaj7","positions":[{"frets":[-1,2,0,3,0,2],"fingers":[0,1,0,3,0,2],"baseFret":1,"barres":[],"midi":[47,50,58,59,66]},{"frets":[2,2,4,3,3,2],"fingers":[1,1,4,2,3,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,54,58,62,66]},{"frets":[1,3,2,1,1,1],"fingers":[1,3,2,1,1,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,58,62,66,71]},{"frets":[-1,1,1,3,3,2],"fingers":[0,1,1,3,4,2],"barres":[1],"capo":true,"baseFret":9,"midi":[54,59,66,70,74]}]},{"key":"B","suffix":"mmaj7b5","positions":[{"frets":[-1,2,3,3,3,-1],"fingers":[0,1,2,3,4,0],"baseFret":1,"barres":[],"midi":[47,53,58,62]},{"frets":[2,3,-1,2,1,1],"fingers":[2,4,0,3,1,1],"barres":[1],"capo":true,"baseFret":6,"midi":[47,53,62,65,70]},{"frets":[1,2,2,1,-1,1],"fingers":[1,2,3,1,0,1],"barres":[1],"capo":true,"baseFret":7,"midi":[47,53,58,62,71]},{"frets":[-1,-1,1,2,3,2],"fingers":[0,0,1,2,4,3],"baseFret":9,"barres":[],"midi":[59,65,70,74]}]},{"key":"B","suffix":"mmaj9","positions":[{"frets":[-1,2,0,3,2,2],"fingers":[0,1,0,4,2,3],"baseFret":1,"barres":[],"midi":[47,50,58,61,66]},{"frets":[3,1,4,2,0,-1],"fingers":[3,1,4,2,0,0],"baseFret":5,"barres":[],"midi":[47,50,58,61,59]},{"frets":[1,3,2,1,1,3],"fingers":[1,3,2,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[47,54,58,62,66,73]},{"frets":[-1,3,1,4,3,-1],"fingers":[0,3,1,4,3,0],"baseFret":12,"barres":[],"midi":[59,62,70,73]}]},{"key":"B","suffix":"mmaj11","positions":[{"frets":[-1,2,0,3,2,0],"fingers":[0,1,0,3,2,0],"baseFret":1,"barres":[],"midi":[47,50,58,61,64]},{"frets":[2,2,2,3,3,2],"fingers":[1,1,1,2,3,1],"barres":[2],"capo":true,"baseFret":1,"midi":[42,47,52,58,62,66]},{"frets":[1,1,2,1,1,3],"fingers":[1,1,2,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[47,52,58,62,66,73]},{"frets":[-1,1,1,1,3,2],"fingers":[0,1,1,1,3,2],"barres":[1],"capo":true,"baseFret":9,"midi":[54,59,64,70,74]}]},{"key":"B","suffix":"add9","positions":[{"frets":[-1,2,1,-1,2,2],"fingers":[0,2,1,0,3,4],"baseFret":1,"barres":[],"midi":[47,51,61,66]},{"frets":[2,1,-1,1,2,2],"fingers":[3,1,0,2,4,4],"barres":[2],"baseFret":6,"midi":[47,51,61,66,71]},{"frets":[-1,-1,3,2,1,3],"fingers":[0,0,3,2,1,4],"baseFret":7,"barres":[],"midi":[59,63,66,73]},{"frets":[-1,4,3,1,4,1],"fingers":[0,3,2,1,4,1],"barres":[1],"capo":true,"baseFret":11,"midi":[59,63,66,73,75]}]},{"key":"B","suffix":"madd9","positions":[{"frets":[-1,4,3,3,1,-1],"fingers":[0,4,2,3,1,0],"baseFret":2,"barres":[],"midi":[50,54,59,61]},{"frets":[3,1,0,2,3,-1],"fingers":[3,1,0,2,4,0],"baseFret":5,"barres":[],"midi":[47,50,50,61,66]},{"frets":[-1,-1,3,1,1,3],"fingers":[0,0,3,1,1,4],"barres":[1],"capo":true,"baseFret":7,"midi":[59,62,66,73]},{"frets":[-1,4,2,1,4,-1],"fingers":[0,3,2,1,4,0],"baseFret":11,"barres":[],"midi":[59,62,66,73]}]}]}}'
      );
    },
    "IU+Z": function (e, r, s) {
      "use strict";
      s("sMXx");
      var i = s("KroJ"),
        t = s("Mukb"),
        a = s("eeVq"),
        f = s("vhPU"),
        n = s("K0xU"),
        b = s("Ugos"),
        o = n("species"),
        u = !a(function () {
          var e = /./;
          return (
            (e.exec = function () {
              var e = [];
              return (e.groups = { a: "7" }), e;
            }),
            "7" !== "".replace(e, "$<a>")
          );
        }),
        d = (function () {
          var e = /(?:)/,
            r = e.exec;
          e.exec = function () {
            return r.apply(this, arguments);
          };
          var s = "ab".split(e);
          return 2 === s.length && "a" === s[0] && "b" === s[1];
        })();
      e.exports = function (e, r, s) {
        var m = n(e),
          g = !a(function () {
            var r = {};
            return (
              (r[m] = function () {
                return 7;
              }),
              7 != ""[e](r)
            );
          }),
          c = g
            ? !a(function () {
                var r = !1,
                  s = /a/;
                return (
                  (s.exec = function () {
                    return (r = !0), null;
                  }),
                  "split" === e &&
                    ((s.constructor = {}),
                    (s.constructor[o] = function () {
                      return s;
                    })),
                  s[m](""),
                  !r
                );
              })
            : void 0;
        if (!g || !c || ("replace" === e && !u) || ("split" === e && !d)) {
          var p = /./[m],
            F = s(f, m, ""[e], function (e, r, s, i, t) {
              return r.exec === b
                ? g && !t
                  ? { done: !0, value: p.call(r, s, i) }
                  : { done: !0, value: e.call(s, r, i) }
                : { done: !1 };
            }),
            l = F[0],
            y = F[1];
          i(String.prototype, e, l),
            t(
              RegExp.prototype,
              m,
              2 == r
                ? function (e, r) {
                    return y.call(e, this, r);
                  }
                : function (e) {
                    return y.call(e, this);
                  }
            );
        }
      };
    },
    IVHb: function (e, r, s) {
      "use strict";
      var i = s("TqRt");
      (r.__esModule = !0), (r.default = void 0);
      var t = i(s("PJYZ")),
        a = i(s("VbXa")),
        f = i(s("lSNA")),
        n = i(s("q1tI")),
        b = i(s("i8i4")),
        o = i(s("6DQo")),
        u = i(s("17x9")),
        d = {
          scrollKey: u.default.string.isRequired,
          shouldUpdateScroll: u.default.func,
          children: u.default.element.isRequired,
        },
        m = { scrollBehavior: u.default.object },
        g = (function (e) {
          function r(r, s) {
            var i;
            return (
              (i = e.call(this, r, s) || this),
              (0, f.default)(
                (0, t.default)(i),
                "shouldUpdateScroll",
                function (e, r) {
                  var s = i.props.shouldUpdateScroll;
                  return (
                    !s || s.call(i.context.scrollBehavior.scrollBehavior, e, r)
                  );
                }
              ),
              (i.scrollKey = r.scrollKey),
              i
            );
          }
          (0, a.default)(r, e);
          var s = r.prototype;
          return (
            (s.componentDidMount = function () {
              this.context.scrollBehavior.registerElement(
                this.props.scrollKey,
                b.default.findDOMNode(this),
                this.shouldUpdateScroll
              );
            }),
            (s.componentDidUpdate = function (e) {
              (0, o.default)(
                e.scrollKey === this.props.scrollKey,
                "<ScrollContainer> does not support changing scrollKey."
              );
            }),
            (s.componentWillUnmount = function () {
              this.context.scrollBehavior.unregisterElement(this.scrollKey);
            }),
            (s.render = function () {
              return this.props.children;
            }),
            r
          );
        })(n.default.Component);
      (g.propTypes = d), (g.contextTypes = m);
      var c = g;
      r.default = c;
    },
    Iw71: function (e, r, s) {
      var i = s("0/R4"),
        t = s("dyZX").document,
        a = i(t) && i(t.createElement);
      e.exports = function (e) {
        return a ? t.createElement(e) : {};
      };
    },
    "J+6e": function (e, r, s) {
      var i = s("I8a+"),
        t = s("K0xU")("iterator"),
        a = s("hPIQ");
      e.exports = s("g3g5").getIteratorMethod = function (e) {
        if (null != e) return e[t] || e["@@iterator"] || a[i(e)];
      };
    },
    J9Y1: function (e, r, s) {
      var i;
      s("f3/d"),
        s("rGqo"),
        s("yt8O"),
        s("XfO3"),
        s("VRzm"),
        s("SRfc"),
        s("pIFo"),
        s("KKXr"),
        s("eM6i"),
        s("a1Th"),
        s("h7Nl"),
        s("Btvt"),
        s("V+eJ"),
        s("2Spj"),
        (function () {
          function t(e, r, s) {
            return e.call.apply(e.bind, arguments);
          }
          function a(e, r, s) {
            if (!e) throw Error();
            if (2 < arguments.length) {
              var i = Array.prototype.slice.call(arguments, 2);
              return function () {
                var s = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(s, i), e.apply(r, s);
              };
            }
            return function () {
              return e.apply(r, arguments);
            };
          }
          function f(e, r, s) {
            return (f =
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf("native code")
                ? t
                : a).apply(null, arguments);
          }
          var n =
            Date.now ||
            function () {
              return +new Date();
            };
          function b(e, r) {
            (this.a = e), (this.o = r || e), (this.c = this.o.document);
          }
          var o = !!window.FontFace;
          function u(e, r, s, i) {
            if (((r = e.c.createElement(r)), s))
              for (var t in s)
                s.hasOwnProperty(t) &&
                  ("style" == t
                    ? (r.style.cssText = s[t])
                    : r.setAttribute(t, s[t]));
            return i && r.appendChild(e.c.createTextNode(i)), r;
          }
          function d(e, r, s) {
            (e = e.c.getElementsByTagName(r)[0]) ||
              (e = document.documentElement),
              e.insertBefore(s, e.lastChild);
          }
          function m(e) {
            e.parentNode && e.parentNode.removeChild(e);
          }
          function g(e, r, s) {
            (r = r || []), (s = s || []);
            for (
              var i = e.className.split(/\s+/), t = 0;
              t < r.length;
              t += 1
            ) {
              for (var a = !1, f = 0; f < i.length; f += 1)
                if (r[t] === i[f]) {
                  a = !0;
                  break;
                }
              a || i.push(r[t]);
            }
            for (r = [], t = 0; t < i.length; t += 1) {
              for (a = !1, f = 0; f < s.length; f += 1)
                if (i[t] === s[f]) {
                  a = !0;
                  break;
                }
              a || r.push(i[t]);
            }
            e.className = r
              .join(" ")
              .replace(/\s+/g, " ")
              .replace(/^\s+|\s+$/, "");
          }
          function c(e, r) {
            for (
              var s = e.className.split(/\s+/), i = 0, t = s.length;
              i < t;
              i++
            )
              if (s[i] == r) return !0;
            return !1;
          }
          function p(e, r, s) {
            function i() {
              n && t && a && (n(f), (n = null));
            }
            r = u(e, "link", { rel: "stylesheet", href: r, media: "all" });
            var t = !1,
              a = !0,
              f = null,
              n = s || null;
            o
              ? ((r.onload = function () {
                  (t = !0), i();
                }),
                (r.onerror = function () {
                  (t = !0), (f = Error("Stylesheet failed to load")), i();
                }))
              : setTimeout(function () {
                  (t = !0), i();
                }, 0),
              d(e, "head", r);
          }
          function F(e, r, s, i) {
            var t = e.c.getElementsByTagName("head")[0];
            if (t) {
              var a = u(e, "script", { src: r }),
                f = !1;
              return (
                (a.onload = a.onreadystatechange =
                  function () {
                    f ||
                      (this.readyState &&
                        "loaded" != this.readyState &&
                        "complete" != this.readyState) ||
                      ((f = !0),
                      s && s(null),
                      (a.onload = a.onreadystatechange = null),
                      "HEAD" == a.parentNode.tagName && t.removeChild(a));
                  }),
                t.appendChild(a),
                setTimeout(function () {
                  f || ((f = !0), s && s(Error("Script load timeout")));
                }, i || 5e3),
                a
              );
            }
            return null;
          }
          function l() {
            (this.a = 0), (this.c = null);
          }
          function y(e) {
            return (
              e.a++,
              function () {
                e.a--, x(e);
              }
            );
          }
          function h(e, r) {
            (e.c = r), x(e);
          }
          function x(e) {
            0 == e.a && e.c && (e.c(), (e.c = null));
          }
          function k(e) {
            this.a = e || "-";
          }
          function v(e, r) {
            (this.c = e), (this.f = 4), (this.a = "n");
            var s = (r || "n4").match(/^([nio])([1-9])$/i);
            s && ((this.a = s[1]), (this.f = parseInt(s[2], 10)));
          }
          function w(e) {
            var r = [];
            e = e.split(/,\s*/);
            for (var s = 0; s < e.length; s++) {
              var i = e[s].replace(/['"]/g, "");
              -1 != i.indexOf(" ") || /^\d/.test(i)
                ? r.push("'" + i + "'")
                : r.push(i);
            }
            return r.join(",");
          }
          function j(e) {
            return e.a + e.f;
          }
          function E(e) {
            var r = "normal";
            return (
              "o" === e.a ? (r = "oblique") : "i" === e.a && (r = "italic"), r
            );
          }
          function _(e) {
            var r = 4,
              s = "n",
              i = null;
            return (
              e &&
                ((i = e.match(/(normal|oblique|italic)/i)) &&
                  i[1] &&
                  (s = i[1].substr(0, 1).toLowerCase()),
                (i = e.match(/([1-9]00|normal|bold)/i)) &&
                  i[1] &&
                  (/bold/i.test(i[1])
                    ? (r = 7)
                    : /[1-9]00/.test(i[1]) &&
                      (r = parseInt(i[1].substr(0, 1), 10)))),
              s + r
            );
          }
          function S(e, r) {
            (this.c = e),
              (this.f = e.o.document.documentElement),
              (this.h = r),
              (this.a = new k("-")),
              (this.j = !1 !== r.events),
              (this.g = !1 !== r.classes);
          }
          function A(e) {
            if (e.g) {
              var r = c(e.f, e.a.c("wf", "active")),
                s = [],
                i = [e.a.c("wf", "loading")];
              r || s.push(e.a.c("wf", "inactive")), g(e.f, s, i);
            }
            C(e, "inactive");
          }
          function C(e, r, s) {
            e.j && e.h[r] && (s ? e.h[r](s.c, j(s)) : e.h[r]());
          }
          function O() {
            this.c = {};
          }
          function P(e, r) {
            (this.c = e),
              (this.f = r),
              (this.a = u(this.c, "span", { "aria-hidden": "true" }, this.f));
          }
          function D(e) {
            d(e.c, "body", e.a);
          }
          function R(e) {
            return (
              "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
              w(e.c) +
              ";font-style:" +
              E(e) +
              ";font-weight:" +
              e.f +
              "00;"
            );
          }
          function B(e, r, s, i, t, a) {
            (this.g = e),
              (this.j = r),
              (this.a = i),
              (this.c = s),
              (this.f = t || 3e3),
              (this.h = a || void 0);
          }
          function T(e, r, s, i, t, a, f) {
            (this.v = e),
              (this.B = r),
              (this.c = s),
              (this.a = i),
              (this.s = f || "BESbswy"),
              (this.f = {}),
              (this.w = t || 3e3),
              (this.u = a || null),
              (this.m = this.j = this.h = this.g = null),
              (this.g = new P(this.c, this.s)),
              (this.h = new P(this.c, this.s)),
              (this.j = new P(this.c, this.s)),
              (this.m = new P(this.c, this.s)),
              (e = R((e = new v(this.a.c + ",serif", j(this.a))))),
              (this.g.a.style.cssText = e),
              (e = R((e = new v(this.a.c + ",sans-serif", j(this.a))))),
              (this.h.a.style.cssText = e),
              (e = R((e = new v("serif", j(this.a))))),
              (this.j.a.style.cssText = e),
              (e = R((e = new v("sans-serif", j(this.a))))),
              (this.m.a.style.cssText = e),
              D(this.g),
              D(this.h),
              D(this.j),
              D(this.m);
          }
          (k.prototype.c = function (e) {
            for (var r = [], s = 0; s < arguments.length; s++)
              r.push(arguments[s].replace(/[\W_]+/g, "").toLowerCase());
            return r.join(this.a);
          }),
            (B.prototype.start = function () {
              var e = this.c.o.document,
                r = this,
                s = n(),
                i = new Promise(function (i, t) {
                  !(function a() {
                    n() - s >= r.f
                      ? t()
                      : e.fonts
                          .load(
                            (function (e) {
                              return E(e) + " " + e.f + "00 300px " + w(e.c);
                            })(r.a),
                            r.h
                          )
                          .then(
                            function (e) {
                              1 <= e.length ? i() : setTimeout(a, 25);
                            },
                            function () {
                              t();
                            }
                          );
                  })();
                }),
                t = null,
                a = new Promise(function (e, s) {
                  t = setTimeout(s, r.f);
                });
              Promise.race([a, i]).then(
                function () {
                  t && (clearTimeout(t), (t = null)), r.g(r.a);
                },
                function () {
                  r.j(r.a);
                }
              );
            });
          var G = { D: "serif", C: "sans-serif" },
            L = null;
          function I() {
            if (null === L) {
              var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                window.navigator.userAgent
              );
              L =
                !!e &&
                (536 > parseInt(e[1], 10) ||
                  (536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10)));
            }
            return L;
          }
          function M(e, r, s) {
            for (var i in G)
              if (G.hasOwnProperty(i) && r === e.f[G[i]] && s === e.f[G[i]])
                return !0;
            return !1;
          }
          function U(e) {
            var r,
              s = e.g.a.offsetWidth,
              i = e.h.a.offsetWidth;
            (r = s === e.f.serif && i === e.f["sans-serif"]) ||
              (r = I() && M(e, s, i)),
              r
                ? n() - e.A >= e.w
                  ? I() &&
                    M(e, s, i) &&
                    (null === e.u || e.u.hasOwnProperty(e.a.c))
                    ? N(e, e.v)
                    : N(e, e.B)
                  : (function (e) {
                      setTimeout(
                        f(function () {
                          U(this);
                        }, e),
                        50
                      );
                    })(e)
                : N(e, e.v);
          }
          function N(e, r) {
            setTimeout(
              f(function () {
                m(this.g.a), m(this.h.a), m(this.j.a), m(this.m.a), r(this.a);
              }, e),
              0
            );
          }
          function W(e, r, s) {
            (this.c = e),
              (this.a = r),
              (this.f = 0),
              (this.m = this.j = !1),
              (this.s = s);
          }
          T.prototype.start = function () {
            (this.f.serif = this.j.a.offsetWidth),
              (this.f["sans-serif"] = this.m.a.offsetWidth),
              (this.A = n()),
              U(this);
          };
          var K = null;
          function q(e) {
            0 == --e.f &&
              e.j &&
              (e.m
                ? ((e = e.a).g &&
                    g(
                      e.f,
                      [e.a.c("wf", "active")],
                      [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]
                    ),
                  C(e, "active"))
                : A(e.a));
          }
          function V(e) {
            (this.j = e),
              (this.a = new O()),
              (this.h = 0),
              (this.f = this.g = !0);
          }
          function X(e, r, s, i, t) {
            var a = 0 == --e.h;
            (e.f || e.g) &&
              setTimeout(function () {
                var e = t || null,
                  n = i || {};
                if (0 === s.length && a) A(r.a);
                else {
                  (r.f += s.length), a && (r.j = a);
                  var b,
                    o = [];
                  for (b = 0; b < s.length; b++) {
                    var u = s[b],
                      d = n[u.c],
                      m = r.a,
                      c = u;
                    if (
                      (m.g &&
                        g(m.f, [m.a.c("wf", c.c, j(c).toString(), "loading")]),
                      C(m, "fontloading", c),
                      (m = null),
                      null === K)
                    )
                      if (window.FontFace) {
                        c = /Gecko.*Firefox\/(\d+)/.exec(
                          window.navigator.userAgent
                        );
                        var p =
                          /OS X.*Version\/10\..*Safari/.exec(
                            window.navigator.userAgent
                          ) && /Apple/.exec(window.navigator.vendor);
                        K = c ? 42 < parseInt(c[1], 10) : !p;
                      } else K = !1;
                    (m = K
                      ? new B(f(r.g, r), f(r.h, r), r.c, u, r.s, d)
                      : new T(f(r.g, r), f(r.h, r), r.c, u, r.s, e, d)),
                      o.push(m);
                  }
                  for (b = 0; b < o.length; b++) o[b].start();
                }
              }, 0);
          }
          function H(e, r) {
            (this.c = e), (this.a = r);
          }
          function Y(e, r) {
            (this.c = e), (this.a = r);
          }
          function Z(e, r) {
            (this.c = e || z), (this.a = []), (this.f = []), (this.g = r || "");
          }
          (W.prototype.g = function (e) {
            var r = this.a;
            r.g &&
              g(
                r.f,
                [r.a.c("wf", e.c, j(e).toString(), "active")],
                [
                  r.a.c("wf", e.c, j(e).toString(), "loading"),
                  r.a.c("wf", e.c, j(e).toString(), "inactive"),
                ]
              ),
              C(r, "fontactive", e),
              (this.m = !0),
              q(this);
          }),
            (W.prototype.h = function (e) {
              var r = this.a;
              if (r.g) {
                var s = c(r.f, r.a.c("wf", e.c, j(e).toString(), "active")),
                  i = [],
                  t = [r.a.c("wf", e.c, j(e).toString(), "loading")];
                s || i.push(r.a.c("wf", e.c, j(e).toString(), "inactive")),
                  g(r.f, i, t);
              }
              C(r, "fontinactive", e), q(this);
            }),
            (V.prototype.load = function (e) {
              (this.c = new b(this.j, e.context || this.j)),
                (this.g = !1 !== e.events),
                (this.f = !1 !== e.classes),
                (function (e, r, s) {
                  var i = [],
                    t = s.timeout;
                  !(function (e) {
                    e.g && g(e.f, [e.a.c("wf", "loading")]), C(e, "loading");
                  })(r);
                  i = (function (e, r, s) {
                    var i,
                      t = [];
                    for (i in r)
                      if (r.hasOwnProperty(i)) {
                        var a = e.c[i];
                        a && t.push(a(r[i], s));
                      }
                    return t;
                  })(e.a, s, e.c);
                  var a = new W(e.c, r, t);
                  for (e.h = i.length, r = 0, s = i.length; r < s; r++)
                    i[r].load(function (r, s, i) {
                      X(e, a, r, s, i);
                    });
                })(this, new S(this.c, e), e);
            }),
            (H.prototype.load = function (e) {
              var r = this,
                s = r.a.projectId,
                i = r.a.version;
              if (s) {
                var t = r.c.o;
                F(
                  this.c,
                  (r.a.api || "https://fast.fonts.net/jsapi") +
                    "/" +
                    s +
                    ".js" +
                    (i ? "?v=" + i : ""),
                  function (i) {
                    i
                      ? e([])
                      : ((t["__MonotypeConfiguration__" + s] = function () {
                          return r.a;
                        }),
                        (function r() {
                          if (t["__mti_fntLst" + s]) {
                            var i,
                              a = t["__mti_fntLst" + s](),
                              f = [];
                            if (a)
                              for (var n = 0; n < a.length; n++) {
                                var b = a[n].fontfamily;
                                null != a[n].fontStyle &&
                                null != a[n].fontWeight
                                  ? ((i = a[n].fontStyle + a[n].fontWeight),
                                    f.push(new v(b, i)))
                                  : f.push(new v(b));
                              }
                            e(f);
                          } else
                            setTimeout(function () {
                              r();
                            }, 50);
                        })());
                  }
                ).id = "__MonotypeAPIScript__" + s;
              } else e([]);
            }),
            (Y.prototype.load = function (e) {
              var r,
                s,
                i = this.a.urls || [],
                t = this.a.families || [],
                a = this.a.testStrings || {},
                f = new l();
              for (r = 0, s = i.length; r < s; r++) p(this.c, i[r], y(f));
              var n = [];
              for (r = 0, s = t.length; r < s; r++)
                if ((i = t[r].split(":"))[1])
                  for (var b = i[1].split(","), o = 0; o < b.length; o += 1)
                    n.push(new v(i[0], b[o]));
                else n.push(new v(i[0]));
              h(f, function () {
                e(n, a);
              });
            });
          var z = "https://fonts.googleapis.com/css";
          function J(e) {
            (this.f = e), (this.a = []), (this.c = {});
          }
          var Q = {
              latin: "BESbswy",
              "latin-ext": "çöüğş",
              cyrillic: "йяЖ",
              greek: "αβΣ",
              khmer: "កខគ",
              Hanuman: "កខគ",
            },
            $ = {
              thin: "1",
              extralight: "2",
              "extra-light": "2",
              ultralight: "2",
              "ultra-light": "2",
              light: "3",
              regular: "4",
              book: "4",
              medium: "5",
              "semi-bold": "6",
              semibold: "6",
              "demi-bold": "6",
              demibold: "6",
              bold: "7",
              "extra-bold": "8",
              extrabold: "8",
              "ultra-bold": "8",
              ultrabold: "8",
              black: "9",
              heavy: "9",
              l: "3",
              r: "4",
              b: "7",
            },
            ee = { i: "i", italic: "i", n: "n", normal: "n" },
            re =
              /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
          function se(e, r) {
            (this.c = e), (this.a = r);
          }
          var ie = { Arimo: !0, Cousine: !0, Tinos: !0 };
          function te(e, r) {
            (this.c = e), (this.a = r);
          }
          function ae(e, r) {
            (this.c = e), (this.f = r), (this.a = []);
          }
          (se.prototype.load = function (e) {
            var r = new l(),
              s = this.c,
              i = new Z(this.a.api, this.a.text),
              t = this.a.families;
            !(function (e, r) {
              for (var s = r.length, i = 0; i < s; i++) {
                var t = r[i].split(":");
                3 == t.length && e.f.push(t.pop());
                var a = "";
                2 == t.length && "" != t[1] && (a = ":"), e.a.push(t.join(a));
              }
            })(i, t);
            var a = new J(t);
            !(function (e) {
              for (var r = e.f.length, s = 0; s < r; s++) {
                var i = e.f[s].split(":"),
                  t = i[0].replace(/\+/g, " "),
                  a = ["n4"];
                if (2 <= i.length) {
                  var f;
                  if (((f = []), (n = i[1])))
                    for (
                      var n, b = (n = n.split(",")).length, o = 0;
                      o < b;
                      o++
                    ) {
                      var u;
                      if ((u = n[o]).match(/^[\w-]+$/))
                        if (null == (m = re.exec(u.toLowerCase()))) u = "";
                        else {
                          if (
                            ((u = null == (u = m[2]) || "" == u ? "n" : ee[u]),
                            null == (m = m[1]) || "" == m)
                          )
                            m = "4";
                          else
                            var d = $[m],
                              m = d || (isNaN(m) ? "4" : m.substr(0, 1));
                          u = [u, m].join("");
                        }
                      else u = "";
                      u && f.push(u);
                    }
                  0 < f.length && (a = f),
                    3 == i.length &&
                      ((f = []),
                      0 < (i = (i = i[2]) ? i.split(",") : f).length &&
                        (i = Q[i[0]]) &&
                        (e.c[t] = i));
                }
                for (
                  e.c[t] || ((i = Q[t]) && (e.c[t] = i)), i = 0;
                  i < a.length;
                  i += 1
                )
                  e.a.push(new v(t, a[i]));
              }
            })(a),
              p(
                s,
                (function (e) {
                  if (0 == e.a.length) throw Error("No fonts to load!");
                  if (-1 != e.c.indexOf("kit=")) return e.c;
                  for (var r = e.a.length, s = [], i = 0; i < r; i++)
                    s.push(e.a[i].replace(/ /g, "+"));
                  return (
                    (r = e.c + "?family=" + s.join("%7C")),
                    0 < e.f.length && (r += "&subset=" + e.f.join(",")),
                    0 < e.g.length && (r += "&text=" + encodeURIComponent(e.g)),
                    r
                  );
                })(i),
                y(r)
              ),
              h(r, function () {
                e(a.a, a.c, ie);
              });
          }),
            (te.prototype.load = function (e) {
              var r = this.a.id,
                s = this.c.o;
              r
                ? F(
                    this.c,
                    (this.a.api || "https://use.typekit.net") + "/" + r + ".js",
                    function (r) {
                      if (r) e([]);
                      else if (
                        s.Typekit &&
                        s.Typekit.config &&
                        s.Typekit.config.fn
                      ) {
                        r = s.Typekit.config.fn;
                        for (var i = [], t = 0; t < r.length; t += 2)
                          for (
                            var a = r[t], f = r[t + 1], n = 0;
                            n < f.length;
                            n++
                          )
                            i.push(new v(a, f[n]));
                        try {
                          s.Typekit.load({
                            events: !1,
                            classes: !1,
                            async: !0,
                          });
                        } catch (b) {}
                        e(i);
                      }
                    },
                    2e3
                  )
                : e([]);
            }),
            (ae.prototype.load = function (e) {
              var r = this.f.id,
                s = this.c.o,
                i = this;
              r
                ? (s.__webfontfontdeckmodule__ ||
                    (s.__webfontfontdeckmodule__ = {}),
                  (s.__webfontfontdeckmodule__[r] = function (r, s) {
                    for (var t = 0, a = s.fonts.length; t < a; ++t) {
                      var f = s.fonts[t];
                      i.a.push(
                        new v(
                          f.name,
                          _(
                            "font-weight:" + f.weight + ";font-style:" + f.style
                          )
                        )
                      );
                    }
                    e(i.a);
                  }),
                  F(
                    this.c,
                    (this.f.api || "https://f.fontdeck.com/s/css/js/") +
                      (function (e) {
                        return e.o.location.hostname || e.a.location.hostname;
                      })(this.c) +
                      "/" +
                      r +
                      ".js",
                    function (r) {
                      r && e([]);
                    }
                  ))
                : e([]);
            });
          var fe = new V(window);
          (fe.a.c.custom = function (e, r) {
            return new Y(r, e);
          }),
            (fe.a.c.fontdeck = function (e, r) {
              return new ae(r, e);
            }),
            (fe.a.c.monotype = function (e, r) {
              return new H(r, e);
            }),
            (fe.a.c.typekit = function (e, r) {
              return new te(r, e);
            }),
            (fe.a.c.google = function (e, r) {
              return new se(r, e);
            });
          var ne = { load: f(fe.load, fe) };
          void 0 ===
            (i = function () {
              return ne;
            }.call(r, s, r, e)) || (e.exports = i);
        })();
    },
    JB68: function (e, r, s) {
      var i = s("Jes0");
      e.exports = function (e) {
        return Object(i(e));
      };
    },
    Jes0: function (e, r) {
      e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e;
      };
    },
    JiEa: function (e, r) {
      r.f = Object.getOwnPropertySymbols;
    },
    K0xU: function (e, r, s) {
      var i = s("VTer")("wks"),
        t = s("ylqs"),
        a = s("dyZX").Symbol,
        f = "function" == typeof a;
      (e.exports = function (e) {
        return i[e] || (i[e] = (f && a[e]) || (f ? a : t)("Symbol." + e));
      }).store = i;
    },
    KKXr: function (e, r, s) {
      "use strict";
      var i = s("quPj"),
        t = s("y3w9"),
        a = s("69bn"),
        f = s("A5AN"),
        n = s("ne8i"),
        b = s("Xxuz"),
        o = s("Ugos"),
        u = s("eeVq"),
        d = Math.min,
        m = [].push,
        g = !u(function () {
          RegExp(4294967295, "y");
        });
      s("IU+Z")("split", 2, function (e, r, s, u) {
        var c;
        return (
          (c =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
              ? function (e, r) {
                  var t = String(this);
                  if (void 0 === e && 0 === r) return [];
                  if (!i(e)) return s.call(t, e, r);
                  for (
                    var a,
                      f,
                      n,
                      b = [],
                      u =
                        (e.ignoreCase ? "i" : "") +
                        (e.multiline ? "m" : "") +
                        (e.unicode ? "u" : "") +
                        (e.sticky ? "y" : ""),
                      d = 0,
                      g = void 0 === r ? 4294967295 : r >>> 0,
                      c = new RegExp(e.source, u + "g");
                    (a = o.call(c, t)) &&
                    !(
                      (f = c.lastIndex) > d &&
                      (b.push(t.slice(d, a.index)),
                      a.length > 1 &&
                        a.index < t.length &&
                        m.apply(b, a.slice(1)),
                      (n = a[0].length),
                      (d = f),
                      b.length >= g)
                    );

                  )
                    c.lastIndex === a.index && c.lastIndex++;
                  return (
                    d === t.length
                      ? (!n && c.test("")) || b.push("")
                      : b.push(t.slice(d)),
                    b.length > g ? b.slice(0, g) : b
                  );
                }
              : "0".split(void 0, 0).length
              ? function (e, r) {
                  return void 0 === e && 0 === r ? [] : s.call(this, e, r);
                }
              : s),
          [
            function (s, i) {
              var t = e(this),
                a = null == s ? void 0 : s[r];
              return void 0 !== a ? a.call(s, t, i) : c.call(String(t), s, i);
            },
            function (e, r) {
              var i = u(c, e, this, r, c !== s);
              if (i.done) return i.value;
              var o = t(e),
                m = String(this),
                p = a(o, RegExp),
                F = o.unicode,
                l =
                  (o.ignoreCase ? "i" : "") +
                  (o.multiline ? "m" : "") +
                  (o.unicode ? "u" : "") +
                  (g ? "y" : "g"),
                y = new p(g ? o : "^(?:" + o.source + ")", l),
                h = void 0 === r ? 4294967295 : r >>> 0;
              if (0 === h) return [];
              if (0 === m.length) return null === b(y, m) ? [m] : [];
              for (var x = 0, k = 0, v = []; k < m.length; ) {
                y.lastIndex = g ? k : 0;
                var w,
                  j = b(y, g ? m : m.slice(k));
                if (
                  null === j ||
                  (w = d(n(y.lastIndex + (g ? 0 : k)), m.length)) === x
                )
                  k = f(m, k, F);
                else {
                  if ((v.push(m.slice(x, k)), v.length === h)) return v;
                  for (var E = 1; E <= j.length - 1; E++)
                    if ((v.push(j[E]), v.length === h)) return v;
                  k = x = w;
                }
              }
              return v.push(m.slice(x)), v;
            },
          ]
        );
      });
    },
    KUxP: function (e, r) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (r) {
          return !0;
        }
      };
    },
    KroJ: function (e, r, s) {
      var i = s("dyZX"),
        t = s("Mukb"),
        a = s("aagx"),
        f = s("ylqs")("src"),
        n = s("+lvF"),
        b = ("" + n).split("toString");
      (s("g3g5").inspectSource = function (e) {
        return n.call(e);
      }),
        (e.exports = function (e, r, s, n) {
          var o = "function" == typeof s;
          o && (a(s, "name") || t(s, "name", r)),
            e[r] !== s &&
              (o && (a(s, f) || t(s, f, e[r] ? "" + e[r] : b.join(String(r)))),
              e === i
                ? (e[r] = s)
                : n
                ? e[r]
                  ? (e[r] = s)
                  : t(e, r, s)
                : (delete e[r], t(e, r, s)));
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && this[f]) || n.call(this);
        });
    },
    Kuth: function (e, r, s) {
      var i = s("y3w9"),
        t = s("FJW5"),
        a = s("4R4u"),
        f = s("YTvA")("IE_PROTO"),
        n = function () {},
        b = function () {
          var e,
            r = s("Iw71")("iframe"),
            i = a.length;
          for (
            r.style.display = "none",
              s("+rLv").appendChild(r),
              r.src = "javascript:",
              (e = r.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              b = e.F;
            i--;

          )
            delete b.prototype[a[i]];
          return b();
        };
      e.exports =
        Object.create ||
        function (e, r) {
          var s;
          return (
            null !== e
              ? ((n.prototype = i(e)),
                (s = new n()),
                (n.prototype = null),
                (s[f] = e))
              : (s = b()),
            void 0 === r ? s : t(s, r)
          );
        };
    },
    L9s1: function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("0sh+");
      i(i.P + i.F * s("UUeW")("includes"), "String", {
        includes: function (e) {
          return !!~t(this, e, "includes").indexOf(
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      });
    },
    LHMV: function (e, r, s) {
      "use strict";
      s("LK8F"),
        s("rGqo"),
        s("yt8O"),
        s("Btvt"),
        s("RW0V"),
        s("8+KV"),
        (r.__esModule = !0);
      var i = u(s("c0Fl")),
        t = u(s("raBC")),
        a = u(s("+i7v")),
        f = u(s("ZfQF")),
        n = u(s("q5+k")),
        b = u(s("QLaP")),
        o = s("OysZ");
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = 2,
        m = (function () {
          function e(r) {
            var s = this,
              i = r.addTransitionHook,
              b = r.stateStorage,
              u = r.getCurrentLocation,
              m = r.shouldUpdateScroll;
            if (
              ((function (e, r) {
                if (!(e instanceof r))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (this._restoreScrollRestoration = function () {
                if (s._oldScrollRestoration)
                  try {
                    window.history.scrollRestoration = s._oldScrollRestoration;
                  } catch (e) {}
              }),
              (this._onWindowScroll = function () {
                if (
                  (s._saveWindowPositionHandle ||
                    (s._saveWindowPositionHandle = (0, n.default)(
                      s._saveWindowPosition
                    )),
                  s._windowScrollTarget)
                ) {
                  var e = s._windowScrollTarget,
                    r = e[0],
                    i = e[1],
                    t = (0, a.default)(window),
                    b = (0, f.default)(window);
                  t === r &&
                    b === i &&
                    ((s._windowScrollTarget = null),
                    s._cancelCheckWindowScroll());
                }
              }),
              (this._saveWindowPosition = function () {
                (s._saveWindowPositionHandle = null),
                  s._savePosition(null, window);
              }),
              (this._checkWindowScrollPosition = function () {
                (s._checkWindowScrollHandle = null),
                  s._windowScrollTarget &&
                    (s.scrollToTarget(window, s._windowScrollTarget),
                    ++s._numWindowScrollAttempts,
                    s._numWindowScrollAttempts >= d
                      ? (s._windowScrollTarget = null)
                      : (s._checkWindowScrollHandle = (0, n.default)(
                          s._checkWindowScrollPosition
                        )));
              }),
              (this._stateStorage = b),
              (this._getCurrentLocation = u),
              (this._shouldUpdateScroll = m),
              "scrollRestoration" in window.history && !(0, o.isMobileSafari)())
            ) {
              this._oldScrollRestoration = window.history.scrollRestoration;
              try {
                (window.history.scrollRestoration = "manual"),
                  (0, t.default)(
                    window,
                    "beforeunload",
                    this._restoreScrollRestoration
                  );
              } catch (g) {
                this._oldScrollRestoration = null;
              }
            } else this._oldScrollRestoration = null;
            (this._saveWindowPositionHandle = null),
              (this._checkWindowScrollHandle = null),
              (this._windowScrollTarget = null),
              (this._numWindowScrollAttempts = 0),
              (this._scrollElements = {}),
              (0, t.default)(window, "scroll", this._onWindowScroll),
              (this._removeTransitionHook = i(function () {
                n.default.cancel(s._saveWindowPositionHandle),
                  (s._saveWindowPositionHandle = null),
                  Object.keys(s._scrollElements).forEach(function (e) {
                    var r = s._scrollElements[e];
                    n.default.cancel(r.savePositionHandle),
                      (r.savePositionHandle = null),
                      s._saveElementPosition(e);
                  });
              }));
          }
          return (
            (e.prototype.registerElement = function (e, r, s, i) {
              var a = this;
              this._scrollElements[e] && (0, b.default)(!1);
              var f = function () {
                  a._saveElementPosition(e);
                },
                o = {
                  element: r,
                  shouldUpdateScroll: s,
                  savePositionHandle: null,
                  onScroll: function () {
                    o.savePositionHandle ||
                      (o.savePositionHandle = (0, n.default)(f));
                  },
                };
              (this._scrollElements[e] = o),
                (0, t.default)(r, "scroll", o.onScroll),
                this._updateElementScroll(e, null, i);
            }),
            (e.prototype.unregisterElement = function (e) {
              this._scrollElements[e] || (0, b.default)(!1);
              var r = this._scrollElements[e],
                s = r.element,
                t = r.onScroll,
                a = r.savePositionHandle;
              (0, i.default)(s, "scroll", t),
                n.default.cancel(a),
                delete this._scrollElements[e];
            }),
            (e.prototype.updateScroll = function (e, r) {
              var s = this;
              this._updateWindowScroll(e, r),
                Object.keys(this._scrollElements).forEach(function (i) {
                  s._updateElementScroll(i, e, r);
                });
            }),
            (e.prototype.stop = function () {
              this._restoreScrollRestoration(),
                (0, i.default)(window, "scroll", this._onWindowScroll),
                this._cancelCheckWindowScroll(),
                this._removeTransitionHook();
            }),
            (e.prototype._cancelCheckWindowScroll = function () {
              n.default.cancel(this._checkWindowScrollHandle),
                (this._checkWindowScrollHandle = null);
            }),
            (e.prototype._saveElementPosition = function (e) {
              var r = this._scrollElements[e];
              (r.savePositionHandle = null), this._savePosition(e, r.element);
            }),
            (e.prototype._savePosition = function (e, r) {
              this._stateStorage.save(this._getCurrentLocation(), e, [
                (0, a.default)(r),
                (0, f.default)(r),
              ]);
            }),
            (e.prototype._updateWindowScroll = function (e, r) {
              this._cancelCheckWindowScroll(),
                (this._windowScrollTarget = this._getScrollTarget(
                  null,
                  this._shouldUpdateScroll,
                  e,
                  r
                )),
                (this._numWindowScrollAttempts = 0),
                this._checkWindowScrollPosition();
            }),
            (e.prototype._updateElementScroll = function (e, r, s) {
              var i = this._scrollElements[e],
                t = i.element,
                a = i.shouldUpdateScroll,
                f = this._getScrollTarget(e, a, r, s);
              f && this.scrollToTarget(t, f);
            }),
            (e.prototype._getDefaultScrollTarget = function (e) {
              var r = e.hash;
              return r && "#" !== r
                ? "#" === r.charAt(0)
                  ? r.slice(1)
                  : r
                : [0, 0];
            }),
            (e.prototype._getScrollTarget = function (e, r, s, i) {
              var t = !r || r.call(this, s, i);
              if (!t || Array.isArray(t) || "string" == typeof t) return t;
              var a = this._getCurrentLocation();
              return (
                this._getSavedScrollTarget(e, a) ||
                this._getDefaultScrollTarget(a)
              );
            }),
            (e.prototype._getSavedScrollTarget = function (e, r) {
              return "PUSH" === r.action ? null : this._stateStorage.read(r, e);
            }),
            (e.prototype.scrollToTarget = function (e, r) {
              if ("string" == typeof r) {
                var s =
                  document.getElementById(r) ||
                  document.getElementsByName(r)[0];
                if (s) return void s.scrollIntoView();
                r = [0, 0];
              }
              var i = r,
                t = i[0],
                n = i[1];
              (0, a.default)(e, t), (0, f.default)(e, n);
            }),
            e
          );
        })();
      (r.default = m), (e.exports = r.default);
    },
    LK8F: function (e, r, s) {
      var i = s("XKFU");
      i(i.S, "Array", { isArray: s("EWmC") });
    },
    LQAc: function (e, r) {
      e.exports = !1;
    },
    LYrO: function (e, r, s) {
      "use strict";
      s.d(r, "e", function () {
        return a;
      }),
        s.d(r, "c", function () {
          return f;
        }),
        s.d(r, "b", function () {
          return n;
        }),
        s.d(r, "d", function () {
          return b;
        }),
        s.d(r, "a", function () {
          return o;
        }),
        s.d(r, "f", function () {
          return u;
        });
      s("pIFo"),
        s("DNiP"),
        s("0l/t"),
        s("Vd3H"),
        s("V+eJ"),
        s("bWfx"),
        s("KKXr");
      var i = s("QLaP"),
        t = s.n(i),
        a = function (e, r) {
          return e.substr(0, r.length) === r;
        },
        f = function (e, r) {
          for (
            var s = void 0,
              i = void 0,
              a = r.split("?")[0],
              f = p(a),
              n = "" === f[0],
              b = c(e),
              o = 0,
              u = b.length;
            o < u;
            o++
          ) {
            var m = !1,
              g = b[o].route;
            if (g.default) i = { route: g, params: {}, uri: r };
            else {
              for (
                var F = p(g.path),
                  y = {},
                  h = Math.max(f.length, F.length),
                  x = 0;
                x < h;
                x++
              ) {
                var k = F[x],
                  v = f[x];
                if ("*" === k) {
                  y["*"] = f.slice(x).map(decodeURIComponent).join("/");
                  break;
                }
                if (void 0 === v) {
                  m = !0;
                  break;
                }
                var w = d.exec(k);
                if (w && !n) {
                  -1 === l.indexOf(w[1]) || t()(!1);
                  var j = decodeURIComponent(v);
                  y[w[1]] = j;
                } else if (k !== v) {
                  m = !0;
                  break;
                }
              }
              if (!m) {
                s = { route: g, params: y, uri: "/" + f.slice(0, x).join("/") };
                break;
              }
            }
          }
          return s || i || null;
        },
        n = function (e, r) {
          return f([{ path: e }], r);
        },
        b = function (e, r) {
          if (a(e, "/")) return e;
          var s = e.split("?"),
            i = s[0],
            t = s[1],
            f = r.split("?")[0],
            n = p(i),
            b = p(f);
          if ("" === n[0]) return F(f, t);
          if (!a(n[0], ".")) {
            var o = b.concat(n).join("/");
            return F(("/" === f ? "" : "/") + o, t);
          }
          for (var u = b.concat(n), d = [], m = 0, g = u.length; m < g; m++) {
            var c = u[m];
            ".." === c ? d.pop() : "." !== c && d.push(c);
          }
          return F("/" + d.join("/"), t);
        },
        o = function (e, r) {
          return (
            "/" +
            p(e)
              .map(function (e) {
                var s = d.exec(e);
                return s ? r[s[1]] : e;
              })
              .join("/")
          );
        },
        u = function (e, r) {
          var s = function (e) {
            return m(e);
          };
          return (
            p(e).filter(s).sort().join("/") === p(r).filter(s).sort().join("/")
          );
        },
        d = /^:(.+)/,
        m = function (e) {
          return d.test(e);
        },
        g = function (e, r) {
          return {
            route: e,
            score: e.default
              ? 0
              : p(e.path).reduce(function (e, r) {
                  return (
                    (e += 4),
                    !(function (e) {
                      return "" === e;
                    })(r)
                      ? m(r)
                        ? (e += 2)
                        : !(function (e) {
                            return "*" === e;
                          })(r)
                        ? (e += 3)
                        : (e -= 5)
                      : (e += 1),
                    e
                  );
                }, 0),
            index: r,
          };
        },
        c = function (e) {
          return e.map(g).sort(function (e, r) {
            return e.score < r.score
              ? 1
              : e.score > r.score
              ? -1
              : e.index - r.index;
          });
        },
        p = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/");
        },
        F = function (e, r) {
          return e + (r ? "?" + r : "");
        },
        l = ["uri", "path"];
    },
    LZWt: function (e, r) {
      var s = {}.toString;
      e.exports = function (e) {
        return s.call(e).slice(8, -1);
      };
    },
    LeKB: function (e, r, s) {
      e.exports = [
        {
          plugin: s("LhCt"),
          options: {
            plugins: [],
            google: { families: ["Droid Sans", "Droid Serif"] },
          },
        },
        {
          plugin: s("npZl"),
          options: {
            plugins: [],
            name: "gatsby-starter-default",
            short_name: "starter",
            start_url: "/",
            background_color: "#663399",
            theme_color: "#663399",
            display: "minimal-ui",
            icon: "src/images/guitar-icon.png",
          },
        },
        { plugin: s("GddB"), options: { plugins: [] } },
      ];
    },
    LhCt: function (e, r, s) {
      "use strict";
      var i,
        t = s("QbLZ"),
        a = (i = t) && i.__esModule ? i : { default: i };
      var f = s("J9Y1");
      r.onInitialClientRender = function (e, r) {
        delete (r = (0, a.default)({}, r)).plugins, f.load(r);
      };
    },
    LyE8: function (e, r, s) {
      "use strict";
      var i = s("eeVq");
      e.exports = function (e, r) {
        return (
          !!e &&
          i(function () {
            r ? e.call(null, function () {}, 1) : e.call(null);
          })
        );
      };
    },
    M1xp: function (e, r, s) {
      var i = s("a0xu");
      e.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (e) {
            return "String" == i(e) ? e.split("") : Object(e);
          };
    },
    M6Qj: function (e, r, s) {
      var i = s("hPIQ"),
        t = s("K0xU")("iterator"),
        a = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (i.Array === e || a[t] === e);
      };
    },
    MMVs: function (e, r, s) {
      s("V+eJ"),
        (e.exports = (function () {
          var e = !1;
          -1 !== navigator.appVersion.indexOf("MSIE 10") && (e = !0);
          var r,
            s = [],
            i = "object" == typeof document && document,
            t = e ? i.documentElement.doScroll() : i.documentElement.doScroll,
            a = i && (t ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
          return (
            !a &&
              i &&
              i.addEventListener(
                "DOMContentLoaded",
                (r = function () {
                  for (
                    i.removeEventListener("DOMContentLoaded", r), a = 1;
                    (r = s.shift());

                  )
                    r();
                })
              ),
            function (e) {
              a ? setTimeout(e, 0) : s.push(e);
            }
          );
        })());
    },
    MfQN: function (e, r) {
      e.exports = function (e, r, s) {
        var i = void 0 === s;
        switch (r.length) {
          case 0:
            return i ? e() : e.call(s);
          case 1:
            return i ? e(r[0]) : e.call(s, r[0]);
          case 2:
            return i ? e(r[0], r[1]) : e.call(s, r[0], r[1]);
          case 3:
            return i ? e(r[0], r[1], r[2]) : e.call(s, r[0], r[1], r[2]);
          case 4:
            return i
              ? e(r[0], r[1], r[2], r[3])
              : e.call(s, r[0], r[1], r[2], r[3]);
        }
        return e.apply(s, r);
      };
    },
    MgzW: function (e, r, s) {
      "use strict";
      s("rGqo"),
        s("yt8O"),
        s("Btvt"),
        s("RW0V"),
        s("KKXr"),
        s("8+KV"),
        s("bWfx"),
        s("91GP"),
        s("ioFf");
      var i = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      function f(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var r = {}, s = 0; s < 10; s++)
            r["_" + String.fromCharCode(s)] = s;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(r)
              .map(function (e) {
                return r[e];
              })
              .join("")
          )
            return !1;
          var i = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              i[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, i)).join("")
          );
        } catch (t) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, r) {
            for (var s, n, b = f(e), o = 1; o < arguments.length; o++) {
              for (var u in (s = Object(arguments[o])))
                t.call(s, u) && (b[u] = s[u]);
              if (i) {
                n = i(s);
                for (var d = 0; d < n.length; d++)
                  a.call(s, n[d]) && (b[n[d]] = s[n[d]]);
              }
            }
            return b;
          };
    },
    Mukb: function (e, r, s) {
      var i = s("hswa"),
        t = s("RjD/");
      e.exports = s("nh4g")
        ? function (e, r, s) {
            return i.f(e, r, t(1, s));
          }
        : function (e, r, s) {
            return (e[r] = s), e;
          };
    },
    N8g3: function (e, r, s) {
      r.f = s("K0xU");
    },
    NSX3: function (e, r, s) {
      "use strict";
      s.r(r);
      var i = s("xtsi");
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/react-chords/sw.js")
            .then(function (e) {
              e.addEventListener("updatefound", function () {
                Object(i.apiRunner)("onServiceWorkerUpdateFound", {
                  serviceWorker: e,
                });
                var r = e.installing;
                console.log("installingWorker", r),
                  r.addEventListener("statechange", function () {
                    switch (r.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            Object(i.apiRunner)("onServiceWorkerUpdateReady", {
                              serviceWorker: e,
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            Object(i.apiRunner)("onServiceWorkerInstalled", {
                              serviceWorker: e,
                            }));
                        break;
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          Object(i.apiRunner)("onServiceWorkerRedundant", {
                            serviceWorker: e,
                          });
                        break;
                      case "activated":
                        Object(i.apiRunner)("onServiceWorkerActive", {
                          serviceWorker: e,
                        });
                    }
                  });
              });
            })
            .catch(function (e) {
              console.error("Error during service worker registration:", e);
            });
    },
    NV0k: function (e, r) {
      r.f = {}.propertyIsEnumerable;
    },
    NegM: function (e, r, s) {
      var i = s("2faE"),
        t = s("rr1i");
      e.exports = s("jmDH")
        ? function (e, r, s) {
            return i.f(e, r, t(1, s));
          }
        : function (e, r, s) {
            return (e[r] = s), e;
          };
    },
    "NsO/": function (e, r, s) {
      var i = s("M1xp"),
        t = s("Jes0");
      e.exports = function (e) {
        return i(t(e));
      };
    },
    OEbY: function (e, r, s) {
      s("nh4g") &&
        "g" != /./g.flags &&
        s("hswa").f(RegExp.prototype, "flags", {
          configurable: !0,
          get: s("C/va"),
        });
    },
    OG14: function (e, r, s) {
      "use strict";
      var i = s("y3w9"),
        t = s("g6HL"),
        a = s("Xxuz");
      s("IU+Z")("search", 1, function (e, r, s, f) {
        return [
          function (s) {
            var i = e(this),
              t = null == s ? void 0 : s[r];
            return void 0 !== t ? t.call(s, i) : new RegExp(s)[r](String(i));
          },
          function (e) {
            var r = f(s, e, this);
            if (r.done) return r.value;
            var n = i(e),
              b = String(this),
              o = n.lastIndex;
            t(o, 0) || (n.lastIndex = 0);
            var u = a(n, b);
            return (
              t(n.lastIndex, o) || (n.lastIndex = o), null === u ? -1 : u.index
            );
          },
        ];
      });
    },
    OGtf: function (e, r, s) {
      var i = s("XKFU"),
        t = s("eeVq"),
        a = s("vhPU"),
        f = /"/g,
        n = function (e, r, s, i) {
          var t = String(a(e)),
            n = "<" + r;
          return (
            "" !== s &&
              (n += " " + s + '="' + String(i).replace(f, "&quot;") + '"'),
            n + ">" + t + "</" + r + ">"
          );
        };
      e.exports = function (e, r) {
        var s = {};
        (s[e] = r(n)),
          i(
            i.P +
              i.F *
                t(function () {
                  var r = ""[e]('"');
                  return r !== r.toLowerCase() || r.split('"').length > 3;
                }),
            "String",
            s
          );
      };
    },
    OP3Y: function (e, r, s) {
      var i = s("aagx"),
        t = s("S/j/"),
        a = s("YTvA")("IE_PROTO"),
        f = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function (e) {
          return (
            (e = t(e)),
            i(e, a)
              ? e[a]
              : "function" == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? f
              : null
          );
        };
    },
    Ojgd: function (e, r) {
      var s = Math.ceil,
        i = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? i : s)(e);
      };
    },
    OnI7: function (e, r, s) {
      var i = s("dyZX"),
        t = s("g3g5"),
        a = s("LQAc"),
        f = s("N8g3"),
        n = s("hswa").f;
      e.exports = function (e) {
        var r = t.Symbol || (t.Symbol = a ? {} : i.Symbol || {});
        "_" == e.charAt(0) || e in r || n(r, e, { value: f.f(e) });
      };
    },
    OysZ: function (e, r, s) {
      "use strict";
      (r.__esModule = !0),
        (r.isMobileSafari = function () {
          return (
            /iPad|iPhone|iPod/.test(window.navigator.platform) &&
            /^((?!CriOS).)*Safari/.test(window.navigator.userAgent)
          );
        });
    },
    P2sY: function (e, r, s) {
      e.exports = { default: s("UbbE"), __esModule: !0 };
    },
    PJYZ: function (e, r) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    QLaP: function (e, r, s) {
      "use strict";
      s("f3/d"), s("pIFo");
      e.exports = function (e, r, s, i, t, a, f, n) {
        if (!e) {
          var b;
          if (void 0 === r)
            b = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var o = [s, i, t, a, f, n],
              u = 0;
            (b = new Error(
              r.replace(/%s/g, function () {
                return o[u++];
              })
            )).name = "Invariant Violation";
          }
          throw ((b.framesToPop = 1), b);
        }
      };
    },
    QaDb: function (e, r, s) {
      "use strict";
      var i = s("Kuth"),
        t = s("RjD/"),
        a = s("fyDq"),
        f = {};
      s("Mukb")(f, s("K0xU")("iterator"), function () {
        return this;
      }),
        (e.exports = function (e, r, s) {
          (e.prototype = i(f, { next: t(1, s) })), a(e, r + " Iterator");
        });
    },
    QbLZ: function (e, r, s) {
      "use strict";
      r.__esModule = !0;
      var i,
        t = s("P2sY"),
        a = (i = t) && i.__esModule ? i : { default: i };
      r.default =
        a.default ||
        function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            for (var i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
          }
          return e;
        };
    },
    RW0V: function (e, r, s) {
      var i = s("S/j/"),
        t = s("DVgA");
      s("Xtr8")("keys", function () {
        return function (e) {
          return t(i(e));
        };
      });
    },
    RYi7: function (e, r) {
      var s = Math.ceil,
        i = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? i : s)(e);
      };
    },
    "RjD/": function (e, r) {
      e.exports = function (e, r) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: r,
        };
      };
    },
    "S/j/": function (e, r, s) {
      var i = s("vhPU");
      e.exports = function (e) {
        return Object(i(e));
      };
    },
    SRfc: function (e, r, s) {
      "use strict";
      var i = s("y3w9"),
        t = s("ne8i"),
        a = s("A5AN"),
        f = s("Xxuz");
      s("IU+Z")("match", 1, function (e, r, s, n) {
        return [
          function (s) {
            var i = e(this),
              t = null == s ? void 0 : s[r];
            return void 0 !== t ? t.call(s, i) : new RegExp(s)[r](String(i));
          },
          function (e) {
            var r = n(s, e, this);
            if (r.done) return r.value;
            var b = i(e),
              o = String(this);
            if (!b.global) return f(b, o);
            var u = b.unicode;
            b.lastIndex = 0;
            for (var d, m = [], g = 0; null !== (d = f(b, o)); ) {
              var c = String(d[0]);
              (m[g] = c),
                "" === c && (b.lastIndex = a(o, t(b.lastIndex), u)),
                g++;
            }
            return 0 === g ? null : m;
          },
        ];
      });
    },
    SlkY: function (e, r, s) {
      var i = s("m0Pp"),
        t = s("H6hf"),
        a = s("M6Qj"),
        f = s("y3w9"),
        n = s("ne8i"),
        b = s("J+6e"),
        o = {},
        u = {};
      ((r = e.exports =
        function (e, r, s, d, m) {
          var g,
            c,
            p,
            F,
            l = m
              ? function () {
                  return e;
                }
              : b(e),
            y = i(s, d, r ? 2 : 1),
            h = 0;
          if ("function" != typeof l) throw TypeError(e + " is not iterable!");
          if (a(l)) {
            for (g = n(e.length); g > h; h++)
              if (
                (F = r ? y(f((c = e[h]))[0], c[1]) : y(e[h])) === o ||
                F === u
              )
                return F;
          } else
            for (p = l.call(e); !(c = p.next()).done; )
              if ((F = t(p, y, c.value, r)) === o || F === u) return F;
        }).BREAK = o),
        (r.RETURN = u);
    },
    T39b: function (e, r, s) {
      "use strict";
      var i = s("wmvG"),
        t = s("s5qY");
      e.exports = s("4LiD")(
        "Set",
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function (e) {
            return i.def(t(this, "Set"), (e = 0 === e ? 0 : e), e);
          },
        },
        i
      );
    },
    TqRt: function (e, r) {
      e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    Tze0: function (e, r, s) {
      "use strict";
      s("qncB")("trim", function (e) {
        return function () {
          return e(this, 3);
        };
      });
    },
    UUeW: function (e, r, s) {
      var i = s("K0xU")("match");
      e.exports = function (e) {
        var r = /./;
        try {
          "/./"[e](r);
        } catch (s) {
          try {
            return (r[i] = !1), !"/./"[e](r);
          } catch (t) {}
        }
        return !0;
      };
    },
    UbbE: function (e, r, s) {
      s("o8NH"), (e.exports = s("WEpk").Object.assign);
    },
    Ugos: function (e, r, s) {
      "use strict";
      var i,
        t,
        a = s("C/va"),
        f = RegExp.prototype.exec,
        n = String.prototype.replace,
        b = f,
        o =
          ((i = /a/),
          (t = /b*/g),
          f.call(i, "a"),
          f.call(t, "a"),
          0 !== i.lastIndex || 0 !== t.lastIndex),
        u = void 0 !== /()??/.exec("")[1];
      (o || u) &&
        (b = function (e) {
          var r,
            s,
            i,
            t,
            b = this;
          return (
            u && (s = new RegExp("^" + b.source + "$(?!\\s)", a.call(b))),
            o && (r = b.lastIndex),
            (i = f.call(b, e)),
            o && i && (b.lastIndex = b.global ? i.index + i[0].length : r),
            u &&
              i &&
              i.length > 1 &&
              n.call(i[0], s, function () {
                for (t = 1; t < arguments.length - 2; t++)
                  void 0 === arguments[t] && (i[t] = void 0);
              }),
            i
          );
        }),
        (e.exports = b);
    },
    UqcF: function (e, r) {
      r.f = {}.propertyIsEnumerable;
    },
    UxWs: function (e, r, s) {
      "use strict";
      s.r(r);
      s("OG14"), s("SRfc"), s("91GP");
      var i = s("xtsi"),
        t = s("q1tI"),
        a = s.n(t),
        f = s("i8i4"),
        n = s.n(f),
        b = s("YwZP"),
        o = s("7hJ6"),
        u = s("MMVs"),
        d = s.n(u),
        m = (s("pIFo"), s("emEt")),
        g = s("YLt+"),
        c = s("5yr3"),
        p = s("+ZDr");
      var F = g.reduce(function (e, r) {
        return (e[r.fromPath] = r), e;
      }, {});
      function l(e) {
        var r = F[e];
        return null != r && (window.___replace(r.toPath), !0);
      }
      var y = function (e, r) {
          l(e.pathname) ||
            Object(i.apiRunner)("onPreRouteUpdate", {
              location: e,
              prevLocation: r,
            });
        },
        h = function (e, r) {
          l(e.pathname) ||
            (Object(i.apiRunner)("onRouteUpdate", {
              location: e,
              prevLocation: r,
            }),
            (window.__navigatingToLink = !1));
        },
        x = function (e, r) {
          void 0 === r && (r = {}),
            r.replace || (window.__navigatingToLink = !0);
          var s = Object(p.parsePath)(e).pathname,
            t = F[s];
          if (
            (t && ((e = t.toPath), (s = Object(p.parsePath)(e).pathname)),
            window.___swUpdated)
          )
            window.location = s;
          else {
            var a = setTimeout(function () {
              c.a.emit("onDelayedLoadPageResources", { pathname: s }),
                Object(i.apiRunner)("onRouteUpdateDelayed", {
                  location: window.location,
                });
            }, 1e3);
            m.default.loadPage(s).then(function (i) {
              (i && "error" !== i.status) ||
                (window.history.replaceState({}, "", location.href),
                (window.location = s)),
                i &&
                  i.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ("serviceWorker" in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    "activated" === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: "clearPathResources",
                    }),
                  console.log("Site has changed on server. Reloading browser"),
                  (window.location = s)),
                Object(b.navigate)(e, r),
                clearTimeout(a);
            });
          }
        };
      function k(e, r) {
        var s = this,
          t = r.location,
          a = t.pathname,
          f = t.hash,
          n = Object(i.apiRunner)("shouldUpdateScroll", {
            prevRouterProps: e,
            pathname: a,
            routerProps: { location: t },
            getSavedScrollPosition: function (e) {
              return s._stateStorage.read(e);
            },
          });
        if (n.length > 0) return n[n.length - 1];
        if (e && e.location.pathname === a) return f ? f.slice(1) : [0, 0];
        return !0;
      }
      var v = (function (e) {
          var r, s;
          function i(r) {
            var s;
            return (s = e.call(this, r) || this), y(r.location, null), s;
          }
          (s = e),
            ((r = i).prototype = Object.create(s.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = s);
          var t = i.prototype;
          return (
            (t.componentDidMount = function () {
              h(this.props.location, null);
            }),
            (t.componentDidUpdate = function (e, r, s) {
              s && h(this.props.location, e.location);
            }),
            (t.getSnapshotBeforeUpdate = function (e) {
              return (
                this.props.location.pathname !== e.location.pathname &&
                (y(this.props.location, e.location), !0)
              );
            }),
            (t.render = function () {
              return this.props.children;
            }),
            i
          );
        })(a.a.Component),
        w = s("IOVJ"),
        j = s("pCP8"),
        E = s.n(j);
      function _(e, r) {
        for (var s in e) if (!(s in r)) return !0;
        for (var i in r) if (e[i] !== r[i]) return !0;
        return !1;
      }
      var S = (function (e) {
          var r, s;
          function i(r) {
            var s;
            s = e.call(this) || this;
            var i = r.location,
              t = r.pageResources;
            return (
              (s.state = {
                location: Object.assign({}, i),
                pageResources: t || m.default.loadPageSync(i.pathname),
              }),
              s
            );
          }
          (s = e),
            ((r = i).prototype = Object.create(s.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = s),
            (i.getDerivedStateFromProps = function (e, r) {
              var s = e.location;
              return r.location.href !== s.href
                ? {
                    pageResources: m.default.loadPageSync(s.pathname),
                    location: Object.assign({}, s),
                  }
                : { location: Object.assign({}, s) };
            });
          var t = i.prototype;
          return (
            (t.loadResources = function (e) {
              var r = this;
              m.default.loadPage(e).then(function (s) {
                s && "error" !== s.status
                  ? r.setState({
                      location: Object.assign({}, window.location),
                      pageResources: s,
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = e));
              });
            }),
            (t.shouldComponentUpdate = function (e, r) {
              return r.pageResources
                ? this.state.pageResources !== r.pageResources ||
                    this.state.pageResources.component !==
                      r.pageResources.component ||
                    this.state.pageResources.json !== r.pageResources.json ||
                    !(
                      this.state.location.key === r.location.key ||
                      !r.pageResources.page ||
                      (!r.pageResources.page.matchPath &&
                        !r.pageResources.page.path)
                    ) ||
                    (function (e, r, s) {
                      return _(e.props, r) || _(e.state, s);
                    })(this, e, r)
                : (this.loadResources(e.location.pathname), !1);
            }),
            (t.render = function () {
              return this.props.children(this.state);
            }),
            i
          );
        })(a.a.Component),
        A = s("cSJ8"),
        C = s("vf9c");
      var O = new m.ProdLoader(E.a, C);
      Object(m.setLoader)(O),
        O.setApiRunner(i.apiRunner),
        (window.asyncRequires = E.a),
        (window.___emitter = c.a),
        (window.___loader = m.publicLoader),
        (window.__navigatingToLink = !1),
        (window.___push = function (e) {
          return x(e, { replace: !1 });
        }),
        (window.___replace = function (e) {
          return x(e, { replace: !0 });
        }),
        (window.___navigate = function (e, r) {
          return x(e, r);
        }),
        l(window.location.pathname),
        Object(i.apiRunnerAsync)("onClientEntry").then(function () {
          Object(i.apiRunner)("registerServiceWorker").length > 0 && s("NSX3");
          var e = function (e) {
              return a.a.createElement(
                b.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                a.a.createElement(w.a, e)
              );
            },
            r = (function (r) {
              var s, i;
              function t() {
                return r.apply(this, arguments) || this;
              }
              return (
                (i = r),
                ((s = t).prototype = Object.create(i.prototype)),
                (s.prototype.constructor = s),
                (s.__proto__ = i),
                (t.prototype.render = function () {
                  var r = this,
                    s = this.props.location;
                  return a.a.createElement(S, { location: s }, function (s) {
                    var i = s.pageResources,
                      t = s.location;
                    return a.a.createElement(
                      v,
                      { location: t },
                      a.a.createElement(
                        o.ScrollContext,
                        { location: t, shouldUpdateScroll: k },
                        a.a.createElement(
                          b.Router,
                          {
                            basepath: "/react-chords",
                            location: t,
                            id: "gatsby-focus-wrapper",
                          },
                          a.a.createElement(
                            e,
                            Object.assign(
                              {
                                path: encodeURI(
                                  "/404.html" === i.page.path
                                    ? Object(A.a)(t.pathname, "/react-chords")
                                    : i.page.matchPath || i.page.path
                                ),
                              },
                              r.props,
                              { location: t, pageResources: i },
                              i.json
                            )
                          )
                        )
                      )
                    );
                  });
                }),
                t
              );
            })(a.a.Component),
            t = window,
            f = t.pagePath,
            u = t.location;
          f &&
            "/react-chords" + f !== u.pathname &&
            !(
              O.findMatchPath(Object(A.a)(u.pathname, "/react-chords")) ||
              "/404.html" === f ||
              f.match(/^\/404\/?$/) ||
              f.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(b.navigate)("/react-chords" + f + u.search + u.hash, {
              replace: !0,
            }),
            m.publicLoader.loadPage(u.pathname).then(function (e) {
              if (!e || "error" === e.status)
                throw new Error(
                  "page resources for " +
                    u.pathname +
                    " not found. Not rendering React"
                );
              window.___webpackCompilationHash = e.page.webpackCompilationHash;
              var s = function () {
                  return a.a.createElement(b.Location, null, function (e) {
                    return a.a.createElement(r, e);
                  });
                },
                t = Object(i.apiRunner)(
                  "wrapRootElement",
                  { element: a.a.createElement(s, null) },
                  a.a.createElement(s, null),
                  function (e) {
                    return { element: e.result };
                  }
                ).pop(),
                f = function () {
                  return t;
                },
                o = Object(i.apiRunner)(
                  "replaceHydrateFunction",
                  void 0,
                  n.a.hydrate
                )[0];
              d()(function () {
                o(
                  a.a.createElement(f, null),
                  "undefined" != typeof window
                    ? document.getElementById("___gatsby")
                    : void 0,
                  function () {
                    Object(i.apiRunner)("onInitialClientRender");
                  }
                );
              });
            });
        });
    },
    "V+eJ": function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("w2a5")(!1),
        a = [].indexOf,
        f = !!a && 1 / [1].indexOf(1, -0) < 0;
      i(i.P + i.F * (f || !s("LyE8")(a)), "Array", {
        indexOf: function (e) {
          return f ? a.apply(this, arguments) || 0 : t(this, e, arguments[1]);
        },
      });
    },
    VRzm: function (e, r, s) {
      "use strict";
      var i,
        t,
        a,
        f,
        n = s("LQAc"),
        b = s("dyZX"),
        o = s("m0Pp"),
        u = s("I8a+"),
        d = s("XKFU"),
        m = s("0/R4"),
        g = s("2OiF"),
        c = s("9gX7"),
        p = s("SlkY"),
        F = s("69bn"),
        l = s("GZEu").set,
        y = s("gHnn")(),
        h = s("pbhE"),
        x = s("nICZ"),
        k = s("ol8x"),
        v = s("vKrd"),
        w = b.TypeError,
        j = b.process,
        E = j && j.versions,
        _ = (E && E.v8) || "",
        S = b.Promise,
        A = "process" == u(j),
        C = function () {},
        O = (t = h.f),
        P = !!(function () {
          try {
            var e = S.resolve(1),
              r = ((e.constructor = {})[s("K0xU")("species")] = function (e) {
                e(C, C);
              });
            return (
              (A || "function" == typeof PromiseRejectionEvent) &&
              e.then(C) instanceof r &&
              0 !== _.indexOf("6.6") &&
              -1 === k.indexOf("Chrome/66")
            );
          } catch (i) {}
        })(),
        D = function (e) {
          var r;
          return !(!m(e) || "function" != typeof (r = e.then)) && r;
        },
        R = function (e, r) {
          if (!e._n) {
            e._n = !0;
            var s = e._c;
            y(function () {
              for (
                var i = e._v,
                  t = 1 == e._s,
                  a = 0,
                  f = function (r) {
                    var s,
                      a,
                      f,
                      n = t ? r.ok : r.fail,
                      b = r.resolve,
                      o = r.reject,
                      u = r.domain;
                    try {
                      n
                        ? (t || (2 == e._h && G(e), (e._h = 1)),
                          !0 === n
                            ? (s = i)
                            : (u && u.enter(),
                              (s = n(i)),
                              u && (u.exit(), (f = !0))),
                          s === r.promise
                            ? o(w("Promise-chain cycle"))
                            : (a = D(s))
                            ? a.call(s, b, o)
                            : b(s))
                        : o(i);
                    } catch (d) {
                      u && !f && u.exit(), o(d);
                    }
                  };
                s.length > a;

              )
                f(s[a++]);
              (e._c = []), (e._n = !1), r && !e._h && B(e);
            });
          }
        },
        B = function (e) {
          l.call(b, function () {
            var r,
              s,
              i,
              t = e._v,
              a = T(e);
            if (
              (a &&
                ((r = x(function () {
                  A
                    ? j.emit("unhandledRejection", t, e)
                    : (s = b.onunhandledrejection)
                    ? s({ promise: e, reason: t })
                    : (i = b.console) &&
                      i.error &&
                      i.error("Unhandled promise rejection", t);
                })),
                (e._h = A || T(e) ? 2 : 1)),
              (e._a = void 0),
              a && r.e)
            )
              throw r.v;
          });
        },
        T = function (e) {
          return 1 !== e._h && 0 === (e._a || e._c).length;
        },
        G = function (e) {
          l.call(b, function () {
            var r;
            A
              ? j.emit("rejectionHandled", e)
              : (r = b.onrejectionhandled) && r({ promise: e, reason: e._v });
          });
        },
        L = function (e) {
          var r = this;
          r._d ||
            ((r._d = !0),
            ((r = r._w || r)._v = e),
            (r._s = 2),
            r._a || (r._a = r._c.slice()),
            R(r, !0));
        },
        I = function (e) {
          var r,
            s = this;
          if (!s._d) {
            (s._d = !0), (s = s._w || s);
            try {
              if (s === e) throw w("Promise can't be resolved itself");
              (r = D(e))
                ? y(function () {
                    var i = { _w: s, _d: !1 };
                    try {
                      r.call(e, o(I, i, 1), o(L, i, 1));
                    } catch (t) {
                      L.call(i, t);
                    }
                  })
                : ((s._v = e), (s._s = 1), R(s, !1));
            } catch (i) {
              L.call({ _w: s, _d: !1 }, i);
            }
          }
        };
      P ||
        ((S = function (e) {
          c(this, S, "Promise", "_h"), g(e), i.call(this);
          try {
            e(o(I, this, 1), o(L, this, 1));
          } catch (r) {
            L.call(this, r);
          }
        }),
        ((i = function (e) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = s("3Lyj")(S.prototype, {
          then: function (e, r) {
            var s = O(F(this, S));
            return (
              (s.ok = "function" != typeof e || e),
              (s.fail = "function" == typeof r && r),
              (s.domain = A ? j.domain : void 0),
              this._c.push(s),
              this._a && this._a.push(s),
              this._s && R(this, !1),
              s.promise
            );
          },
          catch: function (e) {
            return this.then(void 0, e);
          },
        })),
        (a = function () {
          var e = new i();
          (this.promise = e),
            (this.resolve = o(I, e, 1)),
            (this.reject = o(L, e, 1));
        }),
        (h.f = O =
          function (e) {
            return e === S || e === f ? new a(e) : t(e);
          })),
        d(d.G + d.W + d.F * !P, { Promise: S }),
        s("fyDq")(S, "Promise"),
        s("elZq")("Promise"),
        (f = s("g3g5").Promise),
        d(d.S + d.F * !P, "Promise", {
          reject: function (e) {
            var r = O(this);
            return (0, r.reject)(e), r.promise;
          },
        }),
        d(d.S + d.F * (n || !P), "Promise", {
          resolve: function (e) {
            return v(n && this === f ? S : this, e);
          },
        }),
        d(
          d.S +
            d.F *
              !(
                P &&
                s("XMVh")(function (e) {
                  S.all(e).catch(C);
                })
              ),
          "Promise",
          {
            all: function (e) {
              var r = this,
                s = O(r),
                i = s.resolve,
                t = s.reject,
                a = x(function () {
                  var s = [],
                    a = 0,
                    f = 1;
                  p(e, !1, function (e) {
                    var n = a++,
                      b = !1;
                    s.push(void 0),
                      f++,
                      r.resolve(e).then(function (e) {
                        b || ((b = !0), (s[n] = e), --f || i(s));
                      }, t);
                  }),
                    --f || i(s);
                });
              return a.e && t(a.v), s.promise;
            },
            race: function (e) {
              var r = this,
                s = O(r),
                i = s.reject,
                t = x(function () {
                  p(e, !1, function (e) {
                    r.resolve(e).then(s.resolve, i);
                  });
                });
              return t.e && i(t.v), s.promise;
            },
          }
        );
    },
    VTer: function (e, r, s) {
      var i = s("g3g5"),
        t = s("dyZX"),
        a = t["__core-js_shared__"] || (t["__core-js_shared__"] = {});
      (e.exports = function (e, r) {
        return a[e] || (a[e] = void 0 !== r ? r : {});
      })("versions", []).push({
        version: i.version,
        mode: s("LQAc") ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    VVlx: function (e, r, s) {
      var i = s("29s/")("keys"),
        t = s("YqAc");
      e.exports = function (e) {
        return i[e] || (i[e] = t(e));
      };
    },
    VbXa: function (e, r) {
      e.exports = function (e, r) {
        (e.prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r);
      };
    },
    Vd3H: function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("2OiF"),
        a = s("S/j/"),
        f = s("eeVq"),
        n = [].sort,
        b = [1, 2, 3];
      i(
        i.P +
          i.F *
            (f(function () {
              b.sort(void 0);
            }) ||
              !f(function () {
                b.sort(null);
              }) ||
              !s("LyE8")(n)),
        "Array",
        {
          sort: function (e) {
            return void 0 === e ? n.call(a(this)) : n.call(a(this), t(e));
          },
        }
      );
    },
    W070: function (e, r, s) {
      var i = s("NsO/"),
        t = s("tEej"),
        a = s("D8kY");
      e.exports = function (e) {
        return function (r, s, f) {
          var n,
            b = i(r),
            o = t(b.length),
            u = a(f, o);
          if (e && s != s) {
            for (; o > u; ) if ((n = b[u++]) != n) return !0;
          } else
            for (; o > u; u++)
              if ((e || u in b) && b[u] === s) return e || u || 0;
          return !e && -1;
        };
      };
    },
    WEpk: function (e, r) {
      var s = (e.exports = { version: "2.6.10" });
      "number" == typeof __e && (__e = s);
    },
    WbBG: function (e, r, s) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    Wbzz: function (e, r, s) {
      "use strict";
      s.r(r),
        s.d(r, "graphql", function () {
          return c;
        }),
        s.d(r, "StaticQueryContext", function () {
          return u;
        }),
        s.d(r, "StaticQuery", function () {
          return m;
        }),
        s.d(r, "useStaticQuery", function () {
          return g;
        }),
        s.d(r, "prefetchPathname", function () {
          return o;
        });
      var i = s("q1tI"),
        t = s.n(i),
        a = s("+ZDr"),
        f = s.n(a);
      s.d(r, "Link", function () {
        return f.a;
      }),
        s.d(r, "withAssetPrefix", function () {
          return a.withAssetPrefix;
        }),
        s.d(r, "withPrefix", function () {
          return a.withPrefix;
        }),
        s.d(r, "parsePath", function () {
          return a.parsePath;
        }),
        s.d(r, "navigate", function () {
          return a.navigate;
        }),
        s.d(r, "push", function () {
          return a.push;
        }),
        s.d(r, "replace", function () {
          return a.replace;
        }),
        s.d(r, "navigateTo", function () {
          return a.navigateTo;
        });
      var n = s("lw3w"),
        b = s.n(n);
      s.d(r, "PageRenderer", function () {
        return b.a;
      });
      var o = s("emEt").default.enqueue,
        u = t.a.createContext({});
      function d(e) {
        var r = e.staticQueryData,
          s = e.data,
          i = e.query,
          a = e.render,
          f = s ? s.data : r[i] && r[i].data;
        return t.a.createElement(
          t.a.Fragment,
          null,
          f && a(f),
          !f && t.a.createElement("div", null, "Loading (StaticQuery)")
        );
      }
      var m = function (e) {
          var r = e.data,
            s = e.query,
            i = e.render,
            a = e.children;
          return t.a.createElement(u.Consumer, null, function (e) {
            return t.a.createElement(d, {
              data: r,
              query: s,
              render: i || a,
              staticQueryData: e,
            });
          });
        },
        g = function (e) {
          t.a.useContext;
          var r = t.a.useContext(u);
          if (r[e] && r[e].data) return r[e].data;
          throw new Error(
            "The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues"
          );
        };
      function c() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
    },
    XKFU: function (e, r, s) {
      var i = s("dyZX"),
        t = s("g3g5"),
        a = s("Mukb"),
        f = s("KroJ"),
        n = s("m0Pp"),
        b = function (e, r, s) {
          var o,
            u,
            d,
            m,
            g = e & b.F,
            c = e & b.G,
            p = e & b.S,
            F = e & b.P,
            l = e & b.B,
            y = c ? i : p ? i[r] || (i[r] = {}) : (i[r] || {}).prototype,
            h = c ? t : t[r] || (t[r] = {}),
            x = h.prototype || (h.prototype = {});
          for (o in (c && (s = r), s))
            (d = ((u = !g && y && void 0 !== y[o]) ? y : s)[o]),
              (m =
                l && u
                  ? n(d, i)
                  : F && "function" == typeof d
                  ? n(Function.call, d)
                  : d),
              y && f(y, o, d, e & b.U),
              h[o] != d && a(h, o, m),
              F && x[o] != d && (x[o] = d);
        };
      (i.core = t),
        (b.F = 1),
        (b.G = 2),
        (b.S = 4),
        (b.P = 8),
        (b.B = 16),
        (b.W = 32),
        (b.U = 64),
        (b.R = 128),
        (e.exports = b);
    },
    XMVh: function (e, r, s) {
      var i = s("K0xU")("iterator"),
        t = !1;
      try {
        var a = [7][i]();
        (a.return = function () {
          t = !0;
        }),
          Array.from(a, function () {
            throw 2;
          });
      } catch (f) {}
      e.exports = function (e, r) {
        if (!r && !t) return !1;
        var s = !1;
        try {
          var a = [7],
            n = a[i]();
          (n.next = function () {
            return { done: (s = !0) };
          }),
            (a[i] = function () {
              return n;
            }),
            e(a);
        } catch (f) {}
        return s;
      };
    },
    Xbzi: function (e, r, s) {
      var i = s("0/R4"),
        t = s("i5dc").set;
      e.exports = function (e, r, s) {
        var a,
          f = r.constructor;
        return (
          f !== s &&
            "function" == typeof f &&
            (a = f.prototype) !== s.prototype &&
            i(a) &&
            t &&
            t(e, a),
          e
        );
      };
    },
    XfO3: function (e, r, s) {
      "use strict";
      var i = s("AvRE")(!0);
      s("Afnz")(
        String,
        "String",
        function (e) {
          (this._t = String(e)), (this._i = 0);
        },
        function () {
          var e,
            r = this._t,
            s = this._i;
          return s >= r.length
            ? { value: void 0, done: !0 }
            : ((e = i(r, s)), (this._i += e.length), { value: e, done: !1 });
        }
      );
    },
    Xtr8: function (e, r, s) {
      var i = s("XKFU"),
        t = s("g3g5"),
        a = s("eeVq");
      e.exports = function (e, r) {
        var s = (t.Object || {})[e] || Object[e],
          f = {};
        (f[e] = r(s)),
          i(
            i.S +
              i.F *
                a(function () {
                  s(1);
                }),
            "Object",
            f
          );
      };
    },
    Xxuz: function (e, r, s) {
      "use strict";
      var i = s("I8a+"),
        t = RegExp.prototype.exec;
      e.exports = function (e, r) {
        var s = e.exec;
        if ("function" == typeof s) {
          var a = s.call(e, r);
          if ("object" != typeof a)
            throw new TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return a;
        }
        if ("RegExp" !== i(e))
          throw new TypeError("RegExp#exec called on incompatible receiver");
        return t.call(e, r);
      };
    },
    Y7ZC: function (e, r, s) {
      var i = s("5T2Y"),
        t = s("WEpk"),
        a = s("2GTP"),
        f = s("NegM"),
        n = s("B+OT"),
        b = function (e, r, s) {
          var o,
            u,
            d,
            m = e & b.F,
            g = e & b.G,
            c = e & b.S,
            p = e & b.P,
            F = e & b.B,
            l = e & b.W,
            y = g ? t : t[r] || (t[r] = {}),
            h = y.prototype,
            x = g ? i : c ? i[r] : (i[r] || {}).prototype;
          for (o in (g && (s = r), s))
            ((u = !m && x && void 0 !== x[o]) && n(y, o)) ||
              ((d = u ? x[o] : s[o]),
              (y[o] =
                g && "function" != typeof x[o]
                  ? s[o]
                  : F && u
                  ? a(d, i)
                  : l && x[o] == d
                  ? (function (e) {
                      var r = function (r, s, i) {
                        if (this instanceof e) {
                          switch (arguments.length) {
                            case 0:
                              return new e();
                            case 1:
                              return new e(r);
                            case 2:
                              return new e(r, s);
                          }
                          return new e(r, s, i);
                        }
                        return e.apply(this, arguments);
                      };
                      return (r.prototype = e.prototype), r;
                    })(d)
                  : p && "function" == typeof d
                  ? a(Function.call, d)
                  : d),
              p &&
                (((y.virtual || (y.virtual = {}))[o] = d),
                e & b.R && h && !h[o] && f(h, o, d)));
        };
      (b.F = 1),
        (b.G = 2),
        (b.S = 4),
        (b.P = 8),
        (b.B = 16),
        (b.W = 32),
        (b.U = 64),
        (b.R = 128),
        (e.exports = b);
    },
    "YLt+": function (e) {
      e.exports = JSON.parse("[]");
    },
    YTvA: function (e, r, s) {
      var i = s("VTer")("keys"),
        t = s("ylqs");
      e.exports = function (e) {
        return i[e] || (i[e] = t(e));
      };
    },
    Ymqv: function (e, r, s) {
      var i = s("LZWt");
      e.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (e) {
            return "String" == i(e) ? e.split("") : Object(e);
          };
    },
    YqAc: function (e, r) {
      var s = 0,
        i = Math.random();
      e.exports = function (e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++s + i).toString(36)
        );
      };
    },
    YwZP: function (e, r, s) {
      "use strict";
      s.r(r);
      s("pIFo"),
        s("bWfx"),
        s("VRzm"),
        s("Btvt"),
        s("/SS/"),
        s("hHhE"),
        s("V+eJ"),
        s("91GP");
      var i = s("q1tI"),
        t = s.n(i),
        a = (s("6DQo"), s("17x9"), s("QLaP")),
        f = s.n(a),
        n = t.a.createContext,
        b = s("94VI"),
        o = s("LYrO"),
        u = s("9Xx/");
      s.d(r, "Link", function () {
        return P;
      }),
        s.d(r, "Location", function () {
          return y;
        }),
        s.d(r, "LocationProvider", function () {
          return h;
        }),
        s.d(r, "Match", function () {
          return L;
        }),
        s.d(r, "Redirect", function () {
          return G;
        }),
        s.d(r, "Router", function () {
          return v;
        }),
        s.d(r, "ServerLocation", function () {
          return x;
        }),
        s.d(r, "isRedirect", function () {
          return R;
        }),
        s.d(r, "redirectTo", function () {
          return B;
        }),
        s.d(r, "BaseContext", function () {
          return k;
        }),
        s.d(r, "createHistory", function () {
          return u.createHistory;
        }),
        s.d(r, "createMemorySource", function () {
          return u.createMemorySource;
        }),
        s.d(r, "navigate", function () {
          return u.navigate;
        }),
        s.d(r, "globalHistory", function () {
          return u.globalHistory;
        });
      var d =
        Object.assign ||
        function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            for (var i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
          }
          return e;
        };
      function m(e, r) {
        var s = {};
        for (var i in e)
          r.indexOf(i) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, i) && (s[i] = e[i]));
        return s;
      }
      function g(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, r) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function p(e, r) {
        if ("function" != typeof r && null !== r)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof r
          );
        (e.prototype = Object.create(r && r.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          r &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, r)
              : (e.__proto__ = r));
      }
      var F = function (e, r) {
          var s = n(r);
          return (
            (s.Consumer.displayName = e + ".Consumer"),
            (s.Provider.displayName = e + ".Provider"),
            s
          );
        },
        l = F("Location"),
        y = function (e) {
          var r = e.children;
          return t.a.createElement(l.Consumer, null, function (e) {
            return e ? r(e) : t.a.createElement(h, null, r);
          });
        },
        h = (function (e) {
          function r() {
            var s, i;
            g(this, r);
            for (var t = arguments.length, a = Array(t), f = 0; f < t; f++)
              a[f] = arguments[f];
            return (
              (s = i = c(this, e.call.apply(e, [this].concat(a)))),
              (i.state = { context: i.getContext(), refs: { unlisten: null } }),
              c(i, s)
            );
          }
          return (
            p(r, e),
            (r.prototype.getContext = function () {
              var e = this.props.history;
              return { navigate: e.navigate, location: e.location };
            }),
            (r.prototype.componentDidCatch = function (e, r) {
              if (!R(e)) throw e;
              (0, this.props.history.navigate)(e.uri, { replace: !0 });
            }),
            (r.prototype.componentDidUpdate = function (e, r) {
              r.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (r.prototype.componentDidMount = function () {
              var e = this,
                r = this.state.refs,
                s = this.props.history;
              r.unlisten = s.listen(function () {
                Promise.resolve().then(function () {
                  requestAnimationFrame(function () {
                    e.unmounted ||
                      e.setState(function () {
                        return { context: e.getContext() };
                      });
                  });
                });
              });
            }),
            (r.prototype.componentWillUnmount = function () {
              var e = this.state.refs;
              (this.unmounted = !0), e.unlisten();
            }),
            (r.prototype.render = function () {
              var e = this.state.context,
                r = this.props.children;
              return t.a.createElement(
                l.Provider,
                { value: e },
                "function" == typeof r ? r(e) : r || null
              );
            }),
            r
          );
        })(t.a.Component);
      h.defaultProps = { history: u.globalHistory };
      var x = function (e) {
          var r = e.url,
            s = e.children;
          return t.a.createElement(
            l.Provider,
            {
              value: {
                location: { pathname: r, search: "", hash: "" },
                navigate: function () {
                  throw new Error("You can't call navigate on the server.");
                },
              },
            },
            s
          );
        },
        k = F("Base", { baseuri: "/", basepath: "/" }),
        v = function (e) {
          return t.a.createElement(k.Consumer, null, function (r) {
            return t.a.createElement(y, null, function (s) {
              return t.a.createElement(w, d({}, r, s, e));
            });
          });
        },
        w = (function (e) {
          function r() {
            return g(this, r), c(this, e.apply(this, arguments));
          }
          return (
            p(r, e),
            (r.prototype.render = function () {
              var e = this.props,
                r = e.location,
                s = e.navigate,
                i = e.basepath,
                a = e.primary,
                f = e.children,
                n = (e.baseuri, e.component),
                b = void 0 === n ? "div" : n,
                u = m(e, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                g = t.a.Children.map(f, M(i)),
                c = r.pathname,
                p = Object(o.c)(g, c);
              if (p) {
                var F = p.params,
                  l = p.uri,
                  y = p.route,
                  h = p.route.value;
                i = y.default ? i : y.path.replace(/\*$/, "");
                var x = d({}, F, {
                    uri: l,
                    location: r,
                    navigate: function (e, r) {
                      return s(Object(o.d)(e, l), r);
                    },
                  }),
                  w = t.a.cloneElement(
                    h,
                    x,
                    h.props.children
                      ? t.a.createElement(v, { primary: a }, h.props.children)
                      : void 0
                  ),
                  j = a ? E : b,
                  _ = a ? d({ uri: l, location: r, component: b }, u) : u;
                return t.a.createElement(
                  k.Provider,
                  { value: { baseuri: l, basepath: i } },
                  t.a.createElement(j, _, w)
                );
              }
              return null;
            }),
            r
          );
        })(t.a.PureComponent);
      w.defaultProps = { primary: !0 };
      var j = F("Focus"),
        E = function (e) {
          var r = e.uri,
            s = e.location,
            i = e.component,
            a = m(e, ["uri", "location", "component"]);
          return t.a.createElement(j.Consumer, null, function (e) {
            return t.a.createElement(
              A,
              d({}, a, { component: i, requestFocus: e, uri: r, location: s })
            );
          });
        },
        _ = !0,
        S = 0,
        A = (function (e) {
          function r() {
            var s, i;
            g(this, r);
            for (var t = arguments.length, a = Array(t), f = 0; f < t; f++)
              a[f] = arguments[f];
            return (
              (s = i = c(this, e.call.apply(e, [this].concat(a)))),
              (i.state = {}),
              (i.requestFocus = function (e) {
                i.state.shouldFocus || e.focus();
              }),
              c(i, s)
            );
          }
          return (
            p(r, e),
            (r.getDerivedStateFromProps = function (e, r) {
              if (null == r.uri) return d({ shouldFocus: !0 }, e);
              var s = e.uri !== r.uri,
                i =
                  r.location.pathname !== e.location.pathname &&
                  e.location.pathname === e.uri;
              return d({ shouldFocus: s || i }, e);
            }),
            (r.prototype.componentDidMount = function () {
              S++, this.focus();
            }),
            (r.prototype.componentWillUnmount = function () {
              0 === --S && (_ = !0);
            }),
            (r.prototype.componentDidUpdate = function (e, r) {
              e.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus();
            }),
            (r.prototype.focus = function () {
              var e = this.props.requestFocus;
              e
                ? e(this.node)
                : _
                ? (_ = !1)
                : this.node.contains(document.activeElement) ||
                  this.node.focus();
            }),
            (r.prototype.render = function () {
              var e = this,
                r = this.props,
                s = (r.children, r.style),
                i = (r.requestFocus, r.role),
                a = void 0 === i ? "group" : i,
                f = r.component,
                n = void 0 === f ? "div" : f,
                b =
                  (r.uri,
                  r.location,
                  m(r, [
                    "children",
                    "style",
                    "requestFocus",
                    "role",
                    "component",
                    "uri",
                    "location",
                  ]));
              return t.a.createElement(
                n,
                d(
                  {
                    style: d({ outline: "none" }, s),
                    tabIndex: "-1",
                    role: a,
                    ref: function (r) {
                      return (e.node = r);
                    },
                  },
                  b
                ),
                t.a.createElement(
                  j.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              );
            }),
            r
          );
        })(t.a.Component);
      Object(b.polyfill)(A);
      var C = function () {},
        O = t.a.forwardRef;
      void 0 === O &&
        (O = function (e) {
          return e;
        });
      var P = O(function (e, r) {
        var s = e.innerRef,
          i = m(e, ["innerRef"]);
        return t.a.createElement(k.Consumer, null, function (e) {
          e.basepath;
          var a = e.baseuri;
          return t.a.createElement(y, null, function (e) {
            var f = e.location,
              n = e.navigate,
              b = i.to,
              u = i.state,
              g = i.replace,
              c = i.getProps,
              p = void 0 === c ? C : c,
              F = m(i, ["to", "state", "replace", "getProps"]),
              l = Object(o.d)(b, a),
              y = f.pathname === l,
              h = Object(o.e)(f.pathname, l);
            return t.a.createElement(
              "a",
              d(
                { ref: r || s, "aria-current": y ? "page" : void 0 },
                F,
                p({
                  isCurrent: y,
                  isPartiallyCurrent: h,
                  href: l,
                  location: f,
                }),
                {
                  href: l,
                  onClick: function (e) {
                    F.onClick && F.onClick(e),
                      U(e) &&
                        (e.preventDefault(), n(l, { state: u, replace: g }));
                  },
                }
              )
            );
          });
        });
      });
      function D(e) {
        this.uri = e;
      }
      var R = function (e) {
          return e instanceof D;
        },
        B = function (e) {
          throw new D(e);
        },
        T = (function (e) {
          function r() {
            return g(this, r), c(this, e.apply(this, arguments));
          }
          return (
            p(r, e),
            (r.prototype.componentDidMount = function () {
              var e = this.props,
                r = e.navigate,
                s = e.to,
                i = (e.from, e.replace),
                t = void 0 === i || i,
                a = e.state,
                f =
                  (e.noThrow,
                  m(e, [
                    "navigate",
                    "to",
                    "from",
                    "replace",
                    "state",
                    "noThrow",
                  ]));
              Promise.resolve().then(function () {
                r(Object(o.a)(s, f), { replace: t, state: a });
              });
            }),
            (r.prototype.render = function () {
              var e = this.props,
                r = (e.navigate, e.to),
                s = (e.from, e.replace, e.state, e.noThrow),
                i = m(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                ]);
              return s || B(Object(o.a)(r, i)), null;
            }),
            r
          );
        })(t.a.Component),
        G = function (e) {
          return t.a.createElement(y, null, function (r) {
            return t.a.createElement(T, d({}, r, e));
          });
        },
        L = function (e) {
          var r = e.path,
            s = e.children;
          return t.a.createElement(k.Consumer, null, function (e) {
            var i = e.baseuri;
            return t.a.createElement(y, null, function (e) {
              var t = e.navigate,
                a = e.location,
                f = Object(o.d)(r, i),
                n = Object(o.b)(f, a.pathname);
              return s({
                navigate: t,
                location: a,
                match: n ? d({}, n.params, { uri: n.uri, path: r }) : null,
              });
            });
          });
        },
        I = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "");
        },
        M = function (e) {
          return function (r) {
            if (!r) return null;
            if (
              (r.props.path || r.props.default || r.type === G || f()(!1),
              r.type !== G || (r.props.from && r.props.to) || f()(!1),
              r.type !== G || Object(o.f)(r.props.from, r.props.to) || f()(!1),
              r.props.default)
            )
              return { value: r, default: !0 };
            var s = r.type === G ? r.props.from : r.props.path,
              i = "/" === s ? e : I(e) + "/" + I(s);
            return {
              value: r,
              default: r.props.default,
              path: r.props.children ? I(i) + "/*" : i,
            };
          };
        },
        U = function (e) {
          return (
            !e.defaultPrevented &&
            0 === e.button &&
            !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          );
        };
    },
    Z2Ku: function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("w2a5")(!0);
      i(i.P, "Array", {
        includes: function (e) {
          return t(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
        s("nGyu")("includes");
    },
    Z6vF: function (e, r, s) {
      var i = s("ylqs")("meta"),
        t = s("0/R4"),
        a = s("aagx"),
        f = s("hswa").f,
        n = 0,
        b =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = !s("eeVq")(function () {
          return b(Object.preventExtensions({}));
        }),
        u = function (e) {
          f(e, i, { value: { i: "O" + ++n, w: {} } });
        },
        d = (e.exports = {
          KEY: i,
          NEED: !1,
          fastKey: function (e, r) {
            if (!t(e))
              return "symbol" == typeof e
                ? e
                : ("string" == typeof e ? "S" : "P") + e;
            if (!a(e, i)) {
              if (!b(e)) return "F";
              if (!r) return "E";
              u(e);
            }
            return e[i].i;
          },
          getWeak: function (e, r) {
            if (!a(e, i)) {
              if (!b(e)) return !0;
              if (!r) return !1;
              u(e);
            }
            return e[i].w;
          },
          onFreeze: function (e) {
            return o && d.NEED && b(e) && !a(e, i) && u(e), e;
          },
        });
    },
    ZD67: function (e, r, s) {
      "use strict";
      var i = s("3Lyj"),
        t = s("Z6vF").getWeak,
        a = s("y3w9"),
        f = s("0/R4"),
        n = s("9gX7"),
        b = s("SlkY"),
        o = s("CkkT"),
        u = s("aagx"),
        d = s("s5qY"),
        m = o(5),
        g = o(6),
        c = 0,
        p = function (e) {
          return e._l || (e._l = new F());
        },
        F = function () {
          this.a = [];
        },
        l = function (e, r) {
          return m(e.a, function (e) {
            return e[0] === r;
          });
        };
      (F.prototype = {
        get: function (e) {
          var r = l(this, e);
          if (r) return r[1];
        },
        has: function (e) {
          return !!l(this, e);
        },
        set: function (e, r) {
          var s = l(this, e);
          s ? (s[1] = r) : this.a.push([e, r]);
        },
        delete: function (e) {
          var r = g(this.a, function (r) {
            return r[0] === e;
          });
          return ~r && this.a.splice(r, 1), !!~r;
        },
      }),
        (e.exports = {
          getConstructor: function (e, r, s, a) {
            var o = e(function (e, i) {
              n(e, o, r, "_i"),
                (e._t = r),
                (e._i = c++),
                (e._l = void 0),
                null != i && b(i, s, e[a], e);
            });
            return (
              i(o.prototype, {
                delete: function (e) {
                  if (!f(e)) return !1;
                  var s = t(e);
                  return !0 === s
                    ? p(d(this, r)).delete(e)
                    : s && u(s, this._i) && delete s[this._i];
                },
                has: function (e) {
                  if (!f(e)) return !1;
                  var s = t(e);
                  return !0 === s ? p(d(this, r)).has(e) : s && u(s, this._i);
                },
              }),
              o
            );
          },
          def: function (e, r, s) {
            var i = t(a(r), !0);
            return !0 === i ? p(e).set(r, s) : (i[e._i] = s), e;
          },
          ufstore: p,
        });
    },
    ZfQF: function (e, r, s) {
      "use strict";
      var i = s("TqRt");
      (r.__esModule = !0),
        (r.default = function (e, r) {
          var s = (0, t.default)(e);
          if (void 0 === r)
            return s
              ? "pageYOffset" in s
                ? s.pageYOffset
                : s.document.documentElement.scrollTop
              : e.scrollTop;
          s
            ? s.scrollTo(
                "pageXOffset" in s
                  ? s.pageXOffset
                  : s.document.documentElement.scrollLeft,
                r
              )
            : (e.scrollTop = r);
        });
      var t = i(s("8Y+z"));
      e.exports = r.default;
    },
    a0xu: function (e, r) {
      var s = {}.toString;
      e.exports = function (e) {
        return s.call(e).slice(8, -1);
      };
    },
    a1Th: function (e, r, s) {
      "use strict";
      s("OEbY");
      var i = s("y3w9"),
        t = s("C/va"),
        a = s("nh4g"),
        f = /./.toString,
        n = function (e) {
          s("KroJ")(RegExp.prototype, "toString", e, !0);
        };
      s("eeVq")(function () {
        return "/a/b" != f.call({ source: "a", flags: "b" });
      })
        ? n(function () {
            var e = i(this);
            return "/".concat(
              e.source,
              "/",
              "flags" in e
                ? e.flags
                : !a && e instanceof RegExp
                ? t.call(e)
                : void 0
            );
          })
        : "toString" != f.name &&
          n(function () {
            return f.call(this);
          });
    },
    aCFj: function (e, r, s) {
      var i = s("Ymqv"),
        t = s("vhPU");
      e.exports = function (e) {
        return i(t(e));
      };
    },
    aagx: function (e, r) {
      var s = {}.hasOwnProperty;
      e.exports = function (e, r) {
        return s.call(e, r);
      };
    },
    apmT: function (e, r, s) {
      var i = s("0/R4");
      e.exports = function (e, r) {
        if (!i(e)) return e;
        var s, t;
        if (r && "function" == typeof (s = e.toString) && !i((t = s.call(e))))
          return t;
        if ("function" == typeof (s = e.valueOf) && !i((t = s.call(e))))
          return t;
        if (!r && "function" == typeof (s = e.toString) && !i((t = s.call(e))))
          return t;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    bWfx: function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("CkkT")(1);
      i(i.P + i.F * !s("LyE8")([].map, !0), "Array", {
        map: function (e) {
          return t(this, e, arguments[1]);
        },
      });
    },
    c0Fl: function (e, r, s) {
      "use strict";
      var i = s("TqRt");
      (r.__esModule = !0), (r.default = void 0);
      var t = function () {};
      i(s("Bp9Y")).default &&
        (t = document.addEventListener
          ? function (e, r, s, i) {
              return e.removeEventListener(r, s, i || !1);
            }
          : document.attachEvent
          ? function (e, r, s) {
              return e.detachEvent("on" + r, s);
            }
          : void 0);
      var a = t;
      (r.default = a), (e.exports = r.default);
    },
    cSJ8: function (e, r, s) {
      "use strict";
      r.a = function (e, r) {
        return (
          void 0 === r && (r = ""),
          e.substr(0, r.length) === r ? e.slice(r.length) : e
        );
      };
    },
    cu4x: function (e, r, s) {
      "use strict";
      s("V+eJ"),
        (r.__esModule = !0),
        (r.parsePath = function (e) {
          var r = e || "/",
            s = "",
            i = "",
            t = r.indexOf("#");
          -1 !== t && ((i = r.substr(t)), (r = r.substr(0, t)));
          var a = r.indexOf("?");
          -1 !== a && ((s = r.substr(a)), (r = r.substr(0, a)));
          return {
            pathname: r,
            search: "?" === s ? "" : s,
            hash: "#" === i ? "" : i,
          };
        });
    },
    czNK: function (e, r, s) {
      "use strict";
      var i = s("nh4g"),
        t = s("DVgA"),
        a = s("JiEa"),
        f = s("UqcF"),
        n = s("S/j/"),
        b = s("Ymqv"),
        o = Object.assign;
      e.exports =
        !o ||
        s("eeVq")(function () {
          var e = {},
            r = {},
            s = Symbol(),
            i = "abcdefghijklmnopqrst";
          return (
            (e[s] = 7),
            i.split("").forEach(function (e) {
              r[e] = e;
            }),
            7 != o({}, e)[s] || Object.keys(o({}, r)).join("") != i
          );
        })
          ? function (e, r) {
              for (
                var s = n(e), o = arguments.length, u = 1, d = a.f, m = f.f;
                o > u;

              )
                for (
                  var g,
                    c = b(arguments[u++]),
                    p = d ? t(c).concat(d(c)) : t(c),
                    F = p.length,
                    l = 0;
                  F > l;

                )
                  (g = p[l++]), (i && !m.call(c, g)) || (s[g] = c[g]);
              return s;
            }
          : o;
    },
    "d/Gc": function (e, r, s) {
      var i = s("RYi7"),
        t = Math.max,
        a = Math.min;
      e.exports = function (e, r) {
        return (e = i(e)) < 0 ? t(e + r, 0) : a(e, r);
      };
    },
    dRSK: function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("CkkT")(5),
        a = !0;
      "find" in [] &&
        Array(1).find(function () {
          a = !1;
        }),
        i(i.P + i.F * a, "Array", {
          find: function (e) {
            return t(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        s("nGyu")("find");
    },
    "dZ+Y": function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("CkkT")(3);
      i(i.P + i.F * !s("LyE8")([].some, !0), "Array", {
        some: function (e) {
          return t(this, e, arguments[1]);
        },
      });
    },
    dbLC: function (e) {
      e.exports = JSON.parse(
        '{"data":{"file":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABMUlEQVQoz5WSv0uCQRjHX1MKQ7iX97130gKHBoXAIcHFjIbEBNuEaOzH4ChCkNDSoOhsc4suDYVQOEStYljgYNAg/Sf1eV9OveFdOvjwfe655xd3Zxgsx7QDhs/CH/T3W4YU1mIv2RO7SAoo3YZz2II1CCn/CsSlaa+iG7CuNYxA1LOFNhTdDjn4gTs4ILmJ7sMZxNiPVYFHyGqTFl3fclJVFGePotd0SWHn4IZ9C/2FK/iGDnzALWdltOzZpj1F3yCv39U9VODSEdaIzs/YVRhCEmbQUInvUnhN6sSNKd7GrqEP+iUfE/SlCg+YdICWYAIX8Kkad4nto6/oC/rkxkrTi2/Pi80fZZfpamgCdmgg0D0okJAhMYydhk04gSOmcqfP88qnxFj6hL7f5r/L/Tp/TmBCQ9QBTlMAAAAASUVORK5CYII=","width":100,"height":41,"src":"/react-chords/static/cefc20232703e5e3c24efd5f50d75e26/d7db0/github-logo.png","srcSet":"/react-chords/static/cefc20232703e5e3c24efd5f50d75e26/d7db0/github-logo.png 1x,\\n/react-chords/static/cefc20232703e5e3c24efd5f50d75e26/508fa/github-logo.png 1.5x,\\n/react-chords/static/cefc20232703e5e3c24efd5f50d75e26/91ab3/github-logo.png 2x"}}}}}'
      );
    },
    dyZX: function (e, r) {
      var s = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = s);
    },
    e7yV: function (e, r, s) {
      var i = s("aCFj"),
        t = s("kJMx").f,
        a = {}.toString,
        f =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      e.exports.f = function (e) {
        return f && "[object Window]" == a.call(e)
          ? (function (e) {
              try {
                return t(e);
              } catch (r) {
                return f.slice();
              }
            })(e)
          : t(i(e));
      };
    },
    eM6i: function (e, r, s) {
      var i = s("XKFU");
      i(i.S, "Date", {
        now: function () {
          return new Date().getTime();
        },
      });
    },
    eUtF: function (e, r, s) {
      e.exports =
        !s("jmDH") &&
        !s("KUxP")(function () {
          return (
            7 !=
            Object.defineProperty(s("Hsns")("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    eaoh: function (e, r) {
      e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
      };
    },
    eeVq: function (e, r) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (r) {
          return !0;
        }
      };
    },
    elZq: function (e, r, s) {
      "use strict";
      var i = s("dyZX"),
        t = s("hswa"),
        a = s("nh4g"),
        f = s("K0xU")("species");
      e.exports = function (e) {
        var r = i[e];
        a &&
          r &&
          !r[f] &&
          t.f(r, f, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    emEt: function (e, r, s) {
      "use strict";
      s.r(r);
      s("HEwt"),
        s("a1Th"),
        s("rE2o"),
        s("ioFf"),
        s("T39b"),
        s("rGqo"),
        s("yt8O"),
        s("XfO3"),
        s("9AAn"),
        s("Z2Ku"),
        s("L9s1"),
        s("91GP"),
        s("VRzm"),
        s("Btvt"),
        s("rvZc");
      var i = (function (e) {
          if ("undefined" == typeof document) return !1;
          var r = document.createElement("link");
          try {
            if (r.relList && "function" == typeof r.relList.supports)
              return r.relList.supports(e);
          } catch (s) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (e) {
              return new Promise(function (r, s) {
                if ("undefined" != typeof document) {
                  var i = document.createElement("link");
                  i.setAttribute("rel", "prefetch"),
                    i.setAttribute("href", e),
                    (i.onload = r),
                    (i.onerror = s),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(i);
                } else s();
              });
            }
          : function (e) {
              return new Promise(function (r, s) {
                var i = new XMLHttpRequest();
                i.open("GET", e, !0),
                  (i.onload = function () {
                    200 === i.status ? r() : s();
                  }),
                  i.send(null);
              });
            },
        t = {},
        a = function (e) {
          return new Promise(function (r) {
            t[e]
              ? r()
              : i(e)
                  .then(function () {
                    r(), (t[e] = !0);
                  })
                  .catch(function () {});
          });
        },
        f = s("5yr3"),
        n = (s("KKXr"), s("LYrO")),
        b = s("cSJ8"),
        o = function (e) {
          return void 0 === e
            ? e
            : "/" === e
            ? "/"
            : "/" === e.charAt(e.length - 1)
            ? e.slice(0, -1)
            : e;
        },
        u = new Map(),
        d = [],
        m = function (e) {
          var r = decodeURIComponent(e);
          return Object(b.a)(r, "/react-chords").split("#")[0].split("?")[0];
        },
        g = function (e) {
          d = e;
        },
        c = function (e) {
          var r = F(e),
            s = d,
            i = Array.isArray(s),
            t = 0;
          for (s = i ? s : s[Symbol.iterator](); ; ) {
            var a;
            if (i) {
              if (t >= s.length) break;
              a = s[t++];
            } else {
              if ((t = s.next()).done) break;
              a = t.value;
            }
            var f = a,
              b = f.matchPath,
              u = f.path;
            if (Object(n.b)(b, r)) return o(u);
          }
          return null;
        },
        p = function (e) {
          var r = m(e);
          if (u.has(r)) return u.get(r);
          var s = c(r);
          return s || (s = F(e)), u.set(r, s), s;
        },
        F = function (e) {
          var r = m(e);
          return "/index.html" === r && (r = "/"), (r = o(r));
        };
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var r = 0, s = new Array(e.length); r < e.length; r++)
                s[r] = e[r];
              return s;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      s.d(r, "BaseLoader", function () {
        return j;
      }),
        s.d(r, "ProdLoader", function () {
          return _;
        }),
        s.d(r, "setLoader", function () {
          return S;
        }),
        s.d(r, "publicLoader", function () {
          return A;
        });
      var y,
        h = function (e) {
          return (e && e.default) || e;
        },
        x = function (e) {
          var r;
          return (
            "/react-chords/page-data/" +
            ("/" === e
              ? "index"
              : (r = (r = "/" === (r = e)[0] ? r.slice(1) : r).endsWith("/")
                  ? r.slice(0, -1)
                  : r)) +
            "/page-data.json"
          );
        },
        k = function (e, r) {
          return (
            void 0 === r && (r = "GET"),
            new Promise(function (s, i) {
              var t = new XMLHttpRequest();
              t.open(r, e, !0),
                (t.onreadystatechange = function () {
                  4 == t.readyState && s(t);
                }),
                t.send(null);
            })
          );
        },
        v = function (e) {
          var r = e.pagePath,
            s = e.retries,
            i = void 0 === s ? 0 : s,
            t = x(r);
          return k(t).then(function (s) {
            var t = s.status,
              a = s.responseText;
            if (200 === t)
              try {
                var f = JSON.parse(a);
                if (void 0 === f.path)
                  throw new Error("not a valid pageData response");
                return Object.assign(e, { status: "success", payload: f });
              } catch (n) {}
            return 404 === t || 200 === t
              ? "/404.html" === r
                ? Object.assign(e, { status: "failure" })
                : v(Object.assign(e, { pagePath: "/404.html", notFound: !0 }))
              : 500 === t
              ? Object.assign(e, { status: "error" })
              : i < 3
              ? v(Object.assign(e, { retries: i + 1 }))
              : Object.assign(e, { status: "error" });
          });
        },
        w = function (e, r) {
          void 0 === r && (r = null);
          var s = {
            componentChunkName: e.componentChunkName,
            path: e.path,
            webpackCompilationHash: e.webpackCompilationHash,
            matchPath: e.matchPath,
          };
          return { component: r, json: e.result, page: s };
        },
        j = (function () {
          function e(e, r) {
            (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = e),
              g(r);
          }
          var r = e.prototype;
          return (
            (r.setApiRunner = function (e) {
              (this.apiRunner = e),
                (this.prefetchDisabled = e("disableCorePrefetching").some(
                  function (e) {
                    return e;
                  }
                ));
            }),
            (r.loadPageDataJson = function (e) {
              var r = this,
                s = p(e);
              return this.pageDataDb.has(s)
                ? Promise.resolve(this.pageDataDb.get(s))
                : v({ pagePath: s }).then(function (e) {
                    return r.pageDataDb.set(s, e), e;
                  });
            }),
            (r.findMatchPath = function (e) {
              return c(e);
            }),
            (r.loadPage = function (e) {
              var r = this,
                s = p(e);
              if (this.pageDb.has(s)) {
                var i = this.pageDb.get(s);
                return Promise.resolve(i.payload);
              }
              if (this.inFlightDb.has(s)) return this.inFlightDb.get(s);
              var t = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(s),
              ])
                .then(function (e) {
                  var i = e[1];
                  if ("error" === i.status) return { status: "error" };
                  if ("failure" === i.status)
                    throw new Error(
                      "404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/"
                    );
                  var t = i.payload,
                    a = t.componentChunkName;
                  return r.loadComponent(a).then(function (a) {
                    var n,
                      b = { createdAt: new Date() };
                    return (
                      a
                        ? ((b.status = "success"),
                          !0 === i.notFound && (b.notFound = !0),
                          (t = Object.assign(t, {
                            webpackCompilationHash: e[0]
                              ? e[0].webpackCompilationHash
                              : "",
                          })),
                          (n = w(t, a)),
                          (b.payload = n),
                          f.a.emit("onPostLoadPageResources", {
                            page: n,
                            pageResources: n,
                          }))
                        : (b.status = "error"),
                      r.pageDb.set(s, b),
                      n
                    );
                  });
                })
                .then(function (e) {
                  return r.inFlightDb.delete(s), e;
                })
                .catch(function (e) {
                  throw (r.inFlightDb.delete(s), e);
                });
              return this.inFlightDb.set(s, t), t;
            }),
            (r.loadPageSync = function (e) {
              var r = p(e);
              if (this.pageDb.has(r)) return this.pageDb.get(r).payload;
            }),
            (r.shouldPrefetch = function (e) {
              return (
                !!(function () {
                  if (
                    "connection" in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || "").includes("2g")
                    )
                      return !1;
                    if (navigator.connection.saveData) return !1;
                  }
                  return !0;
                })() && !this.pageDb.has(e)
              );
            }),
            (r.prefetch = function (e) {
              var r = this;
              if (!this.shouldPrefetch(e)) return !1;
              if (
                (this.prefetchTriggered.has(e) ||
                  (this.apiRunner("onPrefetchPathname", { pathname: e }),
                  this.prefetchTriggered.add(e)),
                this.prefetchDisabled)
              )
                return !1;
              var s = p(e);
              return (
                this.doPrefetch(s).then(function () {
                  r.prefetchCompleted.has(e) ||
                    (r.apiRunner("onPostPrefetchPathname", { pathname: e }),
                    r.prefetchCompleted.add(e));
                }),
                !0
              );
            }),
            (r.doPrefetch = function (e) {
              throw new Error("doPrefetch not implemented");
            }),
            (r.hovering = function (e) {
              this.loadPage(e);
            }),
            (r.getResourceURLsForPathname = function (e) {
              var r = p(e),
                s = this.pageDataDb.get(r);
              if (s) {
                var i = w(s.payload);
                return [].concat(l(E(i.page.componentChunkName)), [x(r)]);
              }
              return null;
            }),
            (r.isPageNotFound = function (e) {
              var r = p(e),
                s = this.pageDb.get(r);
              return s && !0 === s.notFound;
            }),
            (r.loadAppData = function (e) {
              var r = this;
              return (
                void 0 === e && (e = 0),
                k("/react-chords/page-data/app-data.json").then(function (s) {
                  var i,
                    t = s.status,
                    a = s.responseText;
                  if (200 !== t && e < 3) return r.loadAppData(e + 1);
                  if (200 === t)
                    try {
                      var f = JSON.parse(a);
                      if (void 0 === f.webpackCompilationHash)
                        throw new Error("not a valid app-data response");
                      i = f;
                    } catch (n) {}
                  return i;
                })
              );
            }),
            e
          );
        })(),
        E = function (e) {
          return window.___chunkMapping[e].map(function (e) {
            return "/react-chords" + e;
          });
        },
        _ = (function (e) {
          var r, s;
          function i(r, s) {
            return (
              e.call(
                this,
                function (e) {
                  return r.components[e]().then(h);
                },
                s
              ) || this
            );
          }
          return (
            (s = e),
            ((r = i).prototype = Object.create(s.prototype)),
            (r.prototype.constructor = r),
            (r.__proto__ = s),
            (i.prototype.doPrefetch = function (e) {
              var r = this,
                s = x(e);
              return a(s)
                .then(function () {
                  return r.loadPageDataJson(e);
                })
                .then(function (e) {
                  if ("success" !== e.status) return Promise.resolve();
                  var r = e.payload,
                    s = r.componentChunkName,
                    i = E(s);
                  return Promise.all(i.map(a)).then(function () {
                    return r;
                  });
                });
            }),
            i
          );
        })(j),
        S = function (e) {
          y = e;
        },
        A = {
          getResourcesForPathname: function (e) {
            return (
              console.warn(
                "Warning: getResourcesForPathname is deprecated. Use loadPage instead"
              ),
              y.i.loadPage(e)
            );
          },
          getResourcesForPathnameSync: function (e) {
            return (
              console.warn(
                "Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead"
              ),
              y.i.loadPageSync(e)
            );
          },
          enqueue: function (e) {
            return y.prefetch(e);
          },
          getResourceURLsForPathname: function (e) {
            return y.getResourceURLsForPathname(e);
          },
          loadPage: function (e) {
            return y.loadPage(e);
          },
          loadPageSync: function (e) {
            return y.loadPageSync(e);
          },
          prefetch: function (e) {
            return y.prefetch(e);
          },
          isPageNotFound: function (e) {
            return y.isPageNotFound(e);
          },
          hovering: function (e) {
            return y.hovering(e);
          },
          loadAppData: function () {
            return y.loadAppData();
          },
        };
      r.default = A;
    },
    eyMr: function (e, r, s) {
      var i = s("2OiF"),
        t = s("S/j/"),
        a = s("Ymqv"),
        f = s("ne8i");
      e.exports = function (e, r, s, n, b) {
        i(r);
        var o = t(e),
          u = a(o),
          d = f(o.length),
          m = b ? d - 1 : 0,
          g = b ? -1 : 1;
        if (s < 2)
          for (;;) {
            if (m in u) {
              (n = u[m]), (m += g);
              break;
            }
            if (((m += g), b ? m < 0 : d <= m))
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; b ? m >= 0 : d > m; m += g) m in u && (n = r(n, u[m], m, o));
        return n;
      };
    },
    "f3/d": function (e, r, s) {
      var i = s("hswa").f,
        t = Function.prototype,
        a = /^\s*function ([^ (]*)/;
      "name" in t ||
        (s("nh4g") &&
          i(t, "name", {
            configurable: !0,
            get: function () {
              try {
                return ("" + this).match(a)[1];
              } catch (e) {
                return "";
              }
            },
          }));
    },
    fyDq: function (e, r, s) {
      var i = s("hswa").f,
        t = s("aagx"),
        a = s("K0xU")("toStringTag");
      e.exports = function (e, r, s) {
        e &&
          !t((e = s ? e : e.prototype), a) &&
          i(e, a, { configurable: !0, value: r });
      };
    },
    g3g5: function (e, r) {
      var s = (e.exports = { version: "2.6.10" });
      "number" == typeof __e && (__e = s);
    },
    g6HL: function (e, r) {
      e.exports =
        Object.is ||
        function (e, r) {
          return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r;
        };
    },
    gHnn: function (e, r, s) {
      var i = s("dyZX"),
        t = s("GZEu").set,
        a = i.MutationObserver || i.WebKitMutationObserver,
        f = i.process,
        n = i.Promise,
        b = "process" == s("LZWt")(f);
      e.exports = function () {
        var e,
          r,
          s,
          o = function () {
            var i, t;
            for (b && (i = f.domain) && i.exit(); e; ) {
              (t = e.fn), (e = e.next);
              try {
                t();
              } catch (a) {
                throw (e ? s() : (r = void 0), a);
              }
            }
            (r = void 0), i && i.enter();
          };
        if (b)
          s = function () {
            f.nextTick(o);
          };
        else if (!a || (i.navigator && i.navigator.standalone))
          if (n && n.resolve) {
            var u = n.resolve(void 0);
            s = function () {
              u.then(o);
            };
          } else
            s = function () {
              t.call(i, o);
            };
        else {
          var d = !0,
            m = document.createTextNode("");
          new a(o).observe(m, { characterData: !0 }),
            (s = function () {
              m.data = d = !d;
            });
        }
        return function (i) {
          var t = { fn: i, next: void 0 };
          r && (r.next = t), e || ((e = t), s()), (r = t);
        };
      };
    },
    h7Nl: function (e, r, s) {
      var i = Date.prototype,
        t = i.toString,
        a = i.getTime;
      new Date(NaN) + "" != "Invalid Date" &&
        s("KroJ")(i, "toString", function () {
          var e = a.call(this);
          return e == e ? t.call(this) : "Invalid Date";
        });
    },
    hHhE: function (e, r, s) {
      var i = s("XKFU");
      i(i.S, "Object", { create: s("Kuth") });
    },
    hPIQ: function (e, r) {
      e.exports = {};
    },
    hswa: function (e, r, s) {
      var i = s("y3w9"),
        t = s("xpql"),
        a = s("apmT"),
        f = Object.defineProperty;
      r.f = s("nh4g")
        ? Object.defineProperty
        : function (e, r, s) {
            if ((i(e), (r = a(r, !0)), i(s), t))
              try {
                return f(e, r, s);
              } catch (n) {}
            if ("get" in s || "set" in s)
              throw TypeError("Accessors not supported!");
            return "value" in s && (e[r] = s.value), e;
          };
    },
    i5dc: function (e, r, s) {
      var i = s("0/R4"),
        t = s("y3w9"),
        a = function (e, r) {
          if ((t(e), !i(r) && null !== r))
            throw TypeError(r + ": can't set as prototype!");
        };
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function (e, r, i) {
                try {
                  (i = s("m0Pp")(
                    Function.call,
                    s("EemH").f(Object.prototype, "__proto__").set,
                    2
                  ))(e, []),
                    (r = !(e instanceof Array));
                } catch (t) {
                  r = !0;
                }
                return function (e, s) {
                  return a(e, s), r ? (e.__proto__ = s) : i(e, s), e;
                };
              })({}, !1)
            : void 0),
        check: a,
      };
    },
    ioFf: function (e, r, s) {
      "use strict";
      var i = s("dyZX"),
        t = s("aagx"),
        a = s("nh4g"),
        f = s("XKFU"),
        n = s("KroJ"),
        b = s("Z6vF").KEY,
        o = s("eeVq"),
        u = s("VTer"),
        d = s("fyDq"),
        m = s("ylqs"),
        g = s("K0xU"),
        c = s("N8g3"),
        p = s("OnI7"),
        F = s("1MBn"),
        l = s("EWmC"),
        y = s("y3w9"),
        h = s("0/R4"),
        x = s("S/j/"),
        k = s("aCFj"),
        v = s("apmT"),
        w = s("RjD/"),
        j = s("Kuth"),
        E = s("e7yV"),
        _ = s("EemH"),
        S = s("JiEa"),
        A = s("hswa"),
        C = s("DVgA"),
        O = _.f,
        P = A.f,
        D = E.f,
        R = i.Symbol,
        B = i.JSON,
        T = B && B.stringify,
        G = g("_hidden"),
        L = g("toPrimitive"),
        I = {}.propertyIsEnumerable,
        M = u("symbol-registry"),
        U = u("symbols"),
        N = u("op-symbols"),
        W = Object.prototype,
        K = "function" == typeof R && !!S.f,
        q = i.QObject,
        V = !q || !q.prototype || !q.prototype.findChild,
        X =
          a &&
          o(function () {
            return (
              7 !=
              j(
                P({}, "a", {
                  get: function () {
                    return P(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (e, r, s) {
                var i = O(W, r);
                i && delete W[r], P(e, r, s), i && e !== W && P(W, r, i);
              }
            : P,
        H = function (e) {
          var r = (U[e] = j(R.prototype));
          return (r._k = e), r;
        },
        Y =
          K && "symbol" == typeof R.iterator
            ? function (e) {
                return "symbol" == typeof e;
              }
            : function (e) {
                return e instanceof R;
              },
        Z = function (e, r, s) {
          return (
            e === W && Z(N, r, s),
            y(e),
            (r = v(r, !0)),
            y(s),
            t(U, r)
              ? (s.enumerable
                  ? (t(e, G) && e[G][r] && (e[G][r] = !1),
                    (s = j(s, { enumerable: w(0, !1) })))
                  : (t(e, G) || P(e, G, w(1, {})), (e[G][r] = !0)),
                X(e, r, s))
              : P(e, r, s)
          );
        },
        z = function (e, r) {
          y(e);
          for (var s, i = F((r = k(r))), t = 0, a = i.length; a > t; )
            Z(e, (s = i[t++]), r[s]);
          return e;
        },
        J = function (e) {
          var r = I.call(this, (e = v(e, !0)));
          return (
            !(this === W && t(U, e) && !t(N, e)) &&
            (!(r || !t(this, e) || !t(U, e) || (t(this, G) && this[G][e])) || r)
          );
        },
        Q = function (e, r) {
          if (((e = k(e)), (r = v(r, !0)), e !== W || !t(U, r) || t(N, r))) {
            var s = O(e, r);
            return (
              !s || !t(U, r) || (t(e, G) && e[G][r]) || (s.enumerable = !0), s
            );
          }
        },
        $ = function (e) {
          for (var r, s = D(k(e)), i = [], a = 0; s.length > a; )
            t(U, (r = s[a++])) || r == G || r == b || i.push(r);
          return i;
        },
        ee = function (e) {
          for (
            var r, s = e === W, i = D(s ? N : k(e)), a = [], f = 0;
            i.length > f;

          )
            !t(U, (r = i[f++])) || (s && !t(W, r)) || a.push(U[r]);
          return a;
        };
      K ||
        (n(
          (R = function () {
            if (this instanceof R)
              throw TypeError("Symbol is not a constructor!");
            var e = m(arguments.length > 0 ? arguments[0] : void 0),
              r = function (s) {
                this === W && r.call(N, s),
                  t(this, G) && t(this[G], e) && (this[G][e] = !1),
                  X(this, e, w(1, s));
              };
            return a && V && X(W, e, { configurable: !0, set: r }), H(e);
          }).prototype,
          "toString",
          function () {
            return this._k;
          }
        ),
        (_.f = Q),
        (A.f = Z),
        (s("kJMx").f = E.f = $),
        (s("UqcF").f = J),
        (S.f = ee),
        a && !s("LQAc") && n(W, "propertyIsEnumerable", J, !0),
        (c.f = function (e) {
          return H(g(e));
        })),
        f(f.G + f.W + f.F * !K, { Symbol: R });
      for (
        var re =
            "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
              ","
            ),
          se = 0;
        re.length > se;

      )
        g(re[se++]);
      for (var ie = C(g.store), te = 0; ie.length > te; ) p(ie[te++]);
      f(f.S + f.F * !K, "Symbol", {
        for: function (e) {
          return t(M, (e += "")) ? M[e] : (M[e] = R(e));
        },
        keyFor: function (e) {
          if (!Y(e)) throw TypeError(e + " is not a symbol!");
          for (var r in M) if (M[r] === e) return r;
        },
        useSetter: function () {
          V = !0;
        },
        useSimple: function () {
          V = !1;
        },
      }),
        f(f.S + f.F * !K, "Object", {
          create: function (e, r) {
            return void 0 === r ? j(e) : z(j(e), r);
          },
          defineProperty: Z,
          defineProperties: z,
          getOwnPropertyDescriptor: Q,
          getOwnPropertyNames: $,
          getOwnPropertySymbols: ee,
        });
      var ae = o(function () {
        S.f(1);
      });
      f(f.S + f.F * ae, "Object", {
        getOwnPropertySymbols: function (e) {
          return S.f(x(e));
        },
      }),
        B &&
          f(
            f.S +
              f.F *
                (!K ||
                  o(function () {
                    var e = R();
                    return (
                      "[null]" != T([e]) ||
                      "{}" != T({ a: e }) ||
                      "{}" != T(Object(e))
                    );
                  })),
            "JSON",
            {
              stringify: function (e) {
                for (var r, s, i = [e], t = 1; arguments.length > t; )
                  i.push(arguments[t++]);
                if (((s = r = i[1]), (h(r) || void 0 !== e) && !Y(e)))
                  return (
                    l(r) ||
                      (r = function (e, r) {
                        if (
                          ("function" == typeof s && (r = s.call(this, e, r)),
                          !Y(r))
                        )
                          return r;
                      }),
                    (i[1] = r),
                    T.apply(B, i)
                  );
              },
            }
          ),
        R.prototype[L] || s("Mukb")(R.prototype, L, R.prototype.valueOf),
        d(R, "Symbol"),
        d(Math, "Math", !0),
        d(i.JSON, "JSON", !0);
    },
    jmDH: function (e, r, s) {
      e.exports = !s("KUxP")(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    kJMx: function (e, r, s) {
      var i = s("zhAb"),
        t = s("4R4u").concat("length", "prototype");
      r.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return i(e, t);
        };
    },
    kwZ1: function (e, r, s) {
      "use strict";
      var i = s("jmDH"),
        t = s("w6GO"),
        a = s("mqlF"),
        f = s("NV0k"),
        n = s("JB68"),
        b = s("M1xp"),
        o = Object.assign;
      e.exports =
        !o ||
        s("KUxP")(function () {
          var e = {},
            r = {},
            s = Symbol(),
            i = "abcdefghijklmnopqrst";
          return (
            (e[s] = 7),
            i.split("").forEach(function (e) {
              r[e] = e;
            }),
            7 != o({}, e)[s] || Object.keys(o({}, r)).join("") != i
          );
        })
          ? function (e, r) {
              for (
                var s = n(e), o = arguments.length, u = 1, d = a.f, m = f.f;
                o > u;

              )
                for (
                  var g,
                    c = b(arguments[u++]),
                    p = d ? t(c).concat(d(c)) : t(c),
                    F = p.length,
                    l = 0;
                  F > l;

                )
                  (g = p[l++]), (i && !m.call(c, g)) || (s[g] = c[g]);
              return s;
            }
          : o;
    },
    lSNA: function (e, r) {
      e.exports = function (e, r, s) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = s),
          e
        );
      };
    },
    lw3w: function (e, r, s) {
      var i;
      e.exports = ((i = s("rzlk")) && i.default) || i;
    },
    m0Pp: function (e, r, s) {
      var i = s("2OiF");
      e.exports = function (e, r, s) {
        if ((i(e), void 0 === r)) return e;
        switch (s) {
          case 1:
            return function (s) {
              return e.call(r, s);
            };
          case 2:
            return function (s, i) {
              return e.call(r, s, i);
            };
          case 3:
            return function (s, i, t) {
              return e.call(r, s, i, t);
            };
        }
        return function () {
          return e.apply(r, arguments);
        };
      };
    },
    mqlF: function (e, r) {
      r.f = Object.getOwnPropertySymbols;
    },
    nGyu: function (e, r, s) {
      var i = s("K0xU")("unscopables"),
        t = Array.prototype;
      null == t[i] && s("Mukb")(t, i, {}),
        (e.exports = function (e) {
          t[i][e] = !0;
        });
    },
    nICZ: function (e, r) {
      e.exports = function (e) {
        try {
          return { e: !1, v: e() };
        } catch (r) {
          return { e: !0, v: r };
        }
      };
    },
    ne8i: function (e, r, s) {
      var i = s("RYi7"),
        t = Math.min;
      e.exports = function (e) {
        return e > 0 ? t(i(e), 9007199254740991) : 0;
      };
    },
    nh4g: function (e, r, s) {
      e.exports = !s("eeVq")(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    npZl: function (e, r, s) {
      "use strict";
      var i = s("TqRt");
      s("Wbzz"), i(s("9hXx"));
    },
    o8NH: function (e, r, s) {
      var i = s("Y7ZC");
      i(i.S + i.F, "Object", { assign: s("kwZ1") });
    },
    ol8x: function (e, r, s) {
      var i = s("dyZX").navigator;
      e.exports = (i && i.userAgent) || "";
    },
    pCP8: function (e, r, s) {
      r.components = {
        "component---src-pages-index-js": function () {
          return s.e(3).then(s.bind(null, "RXBc"));
        },
        "component---src-pages-404-js": function () {
          return s.e(2).then(s.bind(null, "w2l6"));
        },
      };
    },
    pIFo: function (e, r, s) {
      "use strict";
      var i = s("y3w9"),
        t = s("S/j/"),
        a = s("ne8i"),
        f = s("RYi7"),
        n = s("A5AN"),
        b = s("Xxuz"),
        o = Math.max,
        u = Math.min,
        d = Math.floor,
        m = /\$([$&`']|\d\d?|<[^>]*>)/g,
        g = /\$([$&`']|\d\d?)/g;
      s("IU+Z")("replace", 2, function (e, r, s, c) {
        return [
          function (i, t) {
            var a = e(this),
              f = null == i ? void 0 : i[r];
            return void 0 !== f ? f.call(i, a, t) : s.call(String(a), i, t);
          },
          function (e, r) {
            var t = c(s, e, this, r);
            if (t.done) return t.value;
            var d = i(e),
              m = String(this),
              g = "function" == typeof r;
            g || (r = String(r));
            var F = d.global;
            if (F) {
              var l = d.unicode;
              d.lastIndex = 0;
            }
            for (var y = []; ; ) {
              var h = b(d, m);
              if (null === h) break;
              if ((y.push(h), !F)) break;
              "" === String(h[0]) && (d.lastIndex = n(m, a(d.lastIndex), l));
            }
            for (var x, k = "", v = 0, w = 0; w < y.length; w++) {
              h = y[w];
              for (
                var j = String(h[0]),
                  E = o(u(f(h.index), m.length), 0),
                  _ = [],
                  S = 1;
                S < h.length;
                S++
              )
                _.push(void 0 === (x = h[S]) ? x : String(x));
              var A = h.groups;
              if (g) {
                var C = [j].concat(_, E, m);
                void 0 !== A && C.push(A);
                var O = String(r.apply(void 0, C));
              } else O = p(j, m, E, _, A, r);
              E >= v && ((k += m.slice(v, E) + O), (v = E + j.length));
            }
            return k + m.slice(v);
          },
        ];
        function p(e, r, i, a, f, n) {
          var b = i + e.length,
            o = a.length,
            u = g;
          return (
            void 0 !== f && ((f = t(f)), (u = m)),
            s.call(n, u, function (s, t) {
              var n;
              switch (t.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return r.slice(0, i);
                case "'":
                  return r.slice(b);
                case "<":
                  n = f[t.slice(1, -1)];
                  break;
                default:
                  var u = +t;
                  if (0 === u) return s;
                  if (u > o) {
                    var m = d(u / 10);
                    return 0 === m
                      ? s
                      : m <= o
                      ? void 0 === a[m - 1]
                        ? t.charAt(1)
                        : a[m - 1] + t.charAt(1)
                      : s;
                  }
                  n = a[u - 1];
              }
              return void 0 === n ? "" : n;
            })
          );
        }
      });
    },
    pVnL: function (e, r) {
      function s() {
        return (
          (e.exports = s =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var s = arguments[r];
                for (var i in s)
                  Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
              }
              return e;
            }),
          s.apply(this, arguments)
        );
      }
      e.exports = s;
    },
    pbhE: function (e, r, s) {
      "use strict";
      var i = s("2OiF");
      function t(e) {
        var r, s;
        (this.promise = new e(function (e, i) {
          if (void 0 !== r || void 0 !== s)
            throw TypeError("Bad Promise constructor");
          (r = e), (s = i);
        })),
          (this.resolve = i(r)),
          (this.reject = i(s));
      }
      e.exports.f = function (e) {
        return new t(e);
      };
    },
    "q5+k": function (e, r, s) {
      "use strict";
      s("dZ+Y");
      var i = s("TqRt");
      (r.__esModule = !0), (r.default = void 0);
      var t,
        a = i(s("Bp9Y")),
        f = "clearTimeout",
        n = function (e) {
          var r = new Date().getTime(),
            s = Math.max(0, 16 - (r - o)),
            i = setTimeout(e, s);
          return (o = r), i;
        },
        b = function (e, r) {
          return (
            e + (e ? r[0].toUpperCase() + r.substr(1) : r) + "AnimationFrame"
          );
        };
      a.default &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var r = b(e, "request");
          if (r in window)
            return (
              (f = b(e, "cancel")),
              (n = function (e) {
                return window[r](e);
              })
            );
        });
      var o = new Date().getTime();
      (t = function (e) {
        return n(e);
      }).cancel = function (e) {
        window[f] && "function" == typeof window[f] && window[f](e);
      };
      var u = t;
      (r.default = u), (e.exports = r.default);
    },
    qncB: function (e, r, s) {
      var i = s("XKFU"),
        t = s("vhPU"),
        a = s("eeVq"),
        f = s("/e88"),
        n = "[" + f + "]",
        b = RegExp("^" + n + n + "*"),
        o = RegExp(n + n + "*$"),
        u = function (e, r, s) {
          var t = {},
            n = a(function () {
              return !!f[e]() || "​" != "​"[e]();
            }),
            b = (t[e] = n ? r(d) : f[e]);
          s && (t[s] = b), i(i.P + i.F * n, "String", t);
        },
        d = (u.trim = function (e, r) {
          return (
            (e = String(t(e))),
            1 & r && (e = e.replace(b, "")),
            2 & r && (e = e.replace(o, "")),
            e
          );
        });
      e.exports = u;
    },
    quPj: function (e, r, s) {
      var i = s("0/R4"),
        t = s("LZWt"),
        a = s("K0xU")("match");
      e.exports = function (e) {
        var r;
        return i(e) && (void 0 !== (r = e[a]) ? !!r : "RegExp" == t(e));
      };
    },
    rE2o: function (e, r, s) {
      s("OnI7")("asyncIterator");
    },
    rGqo: function (e, r, s) {
      for (
        var i = s("yt8O"),
          t = s("DVgA"),
          a = s("KroJ"),
          f = s("dyZX"),
          n = s("Mukb"),
          b = s("hPIQ"),
          o = s("K0xU"),
          u = o("iterator"),
          d = o("toStringTag"),
          m = b.Array,
          g = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1,
          },
          c = t(g),
          p = 0;
        p < c.length;
        p++
      ) {
        var F,
          l = c[p],
          y = g[l],
          h = f[l],
          x = h && h.prototype;
        if (x && (x[u] || n(x, u, m), x[d] || n(x, d, l), (b[l] = m), y))
          for (F in i) x[F] || a(x, F, i[F], !0);
      }
    },
    raBC: function (e, r, s) {
      "use strict";
      var i = s("TqRt");
      (r.__esModule = !0), (r.default = void 0);
      var t = function () {};
      i(s("Bp9Y")).default &&
        (t = document.addEventListener
          ? function (e, r, s, i) {
              return e.addEventListener(r, s, i || !1);
            }
          : document.attachEvent
          ? function (e, r, s) {
              return e.attachEvent("on" + r, function (r) {
                ((r = r || window.event).target = r.target || r.srcElement),
                  (r.currentTarget = e),
                  s.call(e, r);
              });
            }
          : void 0);
      var a = t;
      (r.default = a), (e.exports = r.default);
    },
    rr1i: function (e, r) {
      e.exports = function (e, r) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: r,
        };
      };
    },
    rvZc: function (e, r, s) {
      "use strict";
      var i = s("XKFU"),
        t = s("ne8i"),
        a = s("0sh+"),
        f = "".endsWith;
      i(i.P + i.F * s("UUeW")("endsWith"), "String", {
        endsWith: function (e) {
          var r = a(this, e, "endsWith"),
            s = arguments.length > 1 ? arguments[1] : void 0,
            i = t(r.length),
            n = void 0 === s ? i : Math.min(t(s), i),
            b = String(e);
          return f ? f.call(r, b, n) : r.slice(n - b.length, n) === b;
        },
      });
    },
    rzlk: function (e, r, s) {
      "use strict";
      s.r(r);
      s("91GP");
      var i = s("q1tI"),
        t = s.n(i),
        a = s("IOVJ");
      r.default = function (e) {
        var r = e.location,
          s = e.pageResources;
        return s
          ? t.a.createElement(
              a.a,
              Object.assign({ location: r, pageResources: s }, s.json)
            )
          : null;
      };
    },
    s5qY: function (e, r, s) {
      var i = s("0/R4");
      e.exports = function (e, r) {
        if (!i(e) || e._t !== r)
          throw TypeError("Incompatible receiver, " + r + " required!");
        return e;
      };
    },
    sMXx: function (e, r, s) {
      "use strict";
      var i = s("Ugos");
      s("XKFU")(
        { target: "RegExp", proto: !0, forced: i !== /./.exec },
        { exec: i }
      );
    },
    tEej: function (e, r, s) {
      var i = s("Ojgd"),
        t = Math.min;
      e.exports = function (e) {
        return e > 0 ? t(i(e), 9007199254740991) : 0;
      };
    },
    uOPS: function (e, r) {
      e.exports = !0;
    },
    vKrd: function (e, r, s) {
      var i = s("y3w9"),
        t = s("0/R4"),
        a = s("pbhE");
      e.exports = function (e, r) {
        if ((i(e), t(r) && r.constructor === e)) return r;
        var s = a.f(e);
        return (0, s.resolve)(r), s.promise;
      };
    },
    vf9c: function (e) {
      e.exports = JSON.parse("[]");
    },
    vhPU: function (e, r) {
      e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e;
      };
    },
    w2a5: function (e, r, s) {
      var i = s("aCFj"),
        t = s("ne8i"),
        a = s("d/Gc");
      e.exports = function (e) {
        return function (r, s, f) {
          var n,
            b = i(r),
            o = t(b.length),
            u = a(f, o);
          if (e && s != s) {
            for (; o > u; ) if ((n = b[u++]) != n) return !0;
          } else
            for (; o > u; u++)
              if ((e || u in b) && b[u] === s) return e || u || 0;
          return !e && -1;
        };
      };
    },
    w6GO: function (e, r, s) {
      var i = s("5vMV"),
        t = s("FpHa");
      e.exports =
        Object.keys ||
        function (e) {
          return i(e, t);
        };
    },
    wCsR: function (e, r, s) {
      "use strict";
      var i = s("ZD67"),
        t = s("s5qY");
      s("4LiD")(
        "WeakSet",
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function (e) {
            return i.def(t(this, "WeakSet"), e, !0);
          },
        },
        i,
        !1,
        !0
      );
    },
    wmvG: function (e, r, s) {
      "use strict";
      var i = s("hswa").f,
        t = s("Kuth"),
        a = s("3Lyj"),
        f = s("m0Pp"),
        n = s("9gX7"),
        b = s("SlkY"),
        o = s("Afnz"),
        u = s("1TsA"),
        d = s("elZq"),
        m = s("nh4g"),
        g = s("Z6vF").fastKey,
        c = s("s5qY"),
        p = m ? "_s" : "size",
        F = function (e, r) {
          var s,
            i = g(r);
          if ("F" !== i) return e._i[i];
          for (s = e._f; s; s = s.n) if (s.k == r) return s;
        };
      e.exports = {
        getConstructor: function (e, r, s, o) {
          var u = e(function (e, i) {
            n(e, u, r, "_i"),
              (e._t = r),
              (e._i = t(null)),
              (e._f = void 0),
              (e._l = void 0),
              (e[p] = 0),
              null != i && b(i, s, e[o], e);
          });
          return (
            a(u.prototype, {
              clear: function () {
                for (var e = c(this, r), s = e._i, i = e._f; i; i = i.n)
                  (i.r = !0), i.p && (i.p = i.p.n = void 0), delete s[i.i];
                (e._f = e._l = void 0), (e[p] = 0);
              },
              delete: function (e) {
                var s = c(this, r),
                  i = F(s, e);
                if (i) {
                  var t = i.n,
                    a = i.p;
                  delete s._i[i.i],
                    (i.r = !0),
                    a && (a.n = t),
                    t && (t.p = a),
                    s._f == i && (s._f = t),
                    s._l == i && (s._l = a),
                    s[p]--;
                }
                return !!i;
              },
              forEach: function (e) {
                c(this, r);
                for (
                  var s,
                    i = f(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (s = s ? s.n : this._f);

                )
                  for (i(s.v, s.k, this); s && s.r; ) s = s.p;
              },
              has: function (e) {
                return !!F(c(this, r), e);
              },
            }),
            m &&
              i(u.prototype, "size", {
                get: function () {
                  return c(this, r)[p];
                },
              }),
            u
          );
        },
        def: function (e, r, s) {
          var i,
            t,
            a = F(e, r);
          return (
            a
              ? (a.v = s)
              : ((e._l = a =
                  {
                    i: (t = g(r, !0)),
                    k: r,
                    v: s,
                    p: (i = e._l),
                    n: void 0,
                    r: !1,
                  }),
                e._f || (e._f = a),
                i && (i.n = a),
                e[p]++,
                "F" !== t && (e._i[t] = a)),
            e
          );
        },
        getEntry: F,
        setStrong: function (e, r, s) {
          o(
            e,
            r,
            function (e, s) {
              (this._t = c(e, r)), (this._k = s), (this._l = void 0);
            },
            function () {
              for (var e = this._k, r = this._l; r && r.r; ) r = r.p;
              return this._t && (this._l = r = r ? r.n : this._t._f)
                ? u(0, "keys" == e ? r.k : "values" == e ? r.v : [r.k, r.v])
                : ((this._t = void 0), u(1));
            },
            s ? "entries" : "values",
            !s,
            !0
          ),
            d(r);
        },
      };
    },
    xpql: function (e, r, s) {
      e.exports =
        !s("nh4g") &&
        !s("eeVq")(function () {
          return (
            7 !=
            Object.defineProperty(s("Iw71")("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    xtsi: function (e, r, s) {
      s("VRzm"), s("Btvt");
      var i = s("LeKB"),
        t = s("emEt").publicLoader,
        a = t.getResourcesForPathname,
        f = t.getResourcesForPathnameSync,
        n = t.getResourceURLsForPathname,
        b = t.loadPage,
        o = t.loadPageSync;
      (r.apiRunner = function (e, r, s, t) {
        void 0 === r && (r = {});
        var u = i.map(function (s) {
          if (s.plugin[e]) {
            (r.getResourcesForPathnameSync = f),
              (r.getResourcesForPathname = a),
              (r.getResourceURLsForPathname = n),
              (r.loadPage = b),
              (r.loadPageSync = o);
            var i = s.plugin[e](r, s.options);
            return i && t && (r = t({ args: r, result: i, plugin: s })), i;
          }
        });
        return (u = u.filter(function (e) {
          return void 0 !== e;
        })).length > 0
          ? u
          : s
          ? [s]
          : [];
      }),
        (r.apiRunnerAsync = function (e, r, s) {
          return i.reduce(function (s, i) {
            return i.plugin[e]
              ? s.then(function () {
                  return i.plugin[e](r, i.options);
                })
              : s;
          }, Promise.resolve());
        });
    },
    y3w9: function (e, r, s) {
      var i = s("0/R4");
      e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e;
      };
    },
    ylqs: function (e, r) {
      var s = 0,
        i = Math.random();
      e.exports = function (e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++s + i).toString(36)
        );
      };
    },
    yt8O: function (e, r, s) {
      "use strict";
      var i = s("nGyu"),
        t = s("1TsA"),
        a = s("hPIQ"),
        f = s("aCFj");
      (e.exports = s("Afnz")(
        Array,
        "Array",
        function (e, r) {
          (this._t = f(e)), (this._i = 0), (this._k = r);
        },
        function () {
          var e = this._t,
            r = this._k,
            s = this._i++;
          return !e || s >= e.length
            ? ((this._t = void 0), t(1))
            : t(0, "keys" == r ? s : "values" == r ? e[s] : [s, e[s]]);
        },
        "values"
      )),
        (a.Arguments = a.Array),
        i("keys"),
        i("values"),
        i("entries");
    },
    zRwo: function (e, r, s) {
      var i = s("6FMO");
      e.exports = function (e, r) {
        return new (i(e))(r);
      };
    },
    zhAb: function (e, r, s) {
      var i = s("aagx"),
        t = s("aCFj"),
        a = s("w2a5")(!1),
        f = s("YTvA")("IE_PROTO");
      e.exports = function (e, r) {
        var s,
          n = t(e),
          b = 0,
          o = [];
        for (s in n) s != f && i(n, s) && o.push(s);
        for (; r.length > b; ) i(n, (s = r[b++])) && (~a(o, s) || o.push(s));
        return o;
      };
    },
  },
  [["UxWs", 5, 4, 1]],
]);
//# sourceMappingURL=app-bb206cbc63eb56ff9eb8.js.map
