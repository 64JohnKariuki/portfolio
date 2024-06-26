(() => {
  var e,
    t = {
      250: () => {},
      373: () => {
        const e = document.querySelector(".navbar-togglable"),
          t = document.querySelector(".navbar-collapse");
        let n = !1,
          o = !1;
        function a(e) {
          e.classList.remove("navbar-light"),
            e.classList.add("navbar-dark"),
            (n = !1);
        }
        function r(e) {
          e.classList.remove("navbar-dark"),
            e.classList.add("navbar-light"),
            (n = !0);
        }
        e &&
          (["load", "scroll"].forEach(function (t) {
            window.addEventListener(t, function () {
              !(function (e) {
                const t = window.pageYOffset;
                t && !n && r(e), t || o || a(e);
              })(e);
            });
          }),
          t.addEventListener("show.bs.collapse", function () {
            (o = !0), r(e);
          }),
          t.addEventListener("hidden.bs.collapse", function () {
            (o = !1), window.pageYOffset || a(e);
          }));
      },
      331: (e, t, n) => {
        "use strict";
        var o = n(169),
          a = n(442),
          r = n.n(a),
          l = (n(105), n(287), n(805), n(247), n(858), n(765)),
          i = n.n(l);
        document.querySelectorAll("[data-bigpicture]").forEach(function (e) {
          e.addEventListener("click", function (t) {
            t.preventDefault();
            const n = JSON.parse(e.dataset.bigpicture),
              o = {
                ...{
                  el: e,
                  noLoader: !0,
                },
                ...n,
              };
            i()(o);
          });
        }),
          (window.BigPicture = i()),
          (window.Alert = o.bZ),
          (window.Button = o.zx),
          (window.Carousel = o.lr),
          (window.Collapse = o.UO),
          (window.Dropdown = o.Lt),
          (window.Modal = o.u_),
          (window.Offcanvas = o.TB),
          (window.Popover = o.J2),
          (window.ScrollSpy = o.DA),
          (window.Tab = o.OK),
          (window.Toast = o.FN),
          (window.Tooltip = o.u);
        var s = n(365);
        function c(e) {
          const t = document.getElementById("notification"),
            n = new o.FN(t);
          (t.querySelector(".toast-body").innerHTML = e), n.show();
        }
        const d = document.getElementById("contactForm");
        (0, s.S1)("user_8uiTkB3w9DpexWtnUrnlx"),
          d &&
            d.addEventListener("submit", function (e) {
              e.preventDefault();
              const t = d.querySelector('[type="submit"]');
              (t.disabled = !0),
                (this.contact_number.value = (1e5 * Math.random()) | 0),
                (0, s.qm)(
                  "touche_service",
                  "touche_contact_template",
                  this
                ).then(
                  function () {
                    c("Your email has been sent successfully!"),
                      (t.disabled = !1),
                      d.reset();
                  },
                  function (e) {
                    c(e), (t.disabled = !1);
                  }
                );
            });
        function u(e) {
          const t = e.closest(".event").querySelector(".event-sm");
          return new o.UO(t, {
            toggle: !1,
          });
        }
        document.querySelectorAll(".event-lg").forEach((e) => {
          e.addEventListener("show.bs.collapse", (e) => {
            u(e.target).hide();
          }),
            e.addEventListener("hide.bs.collapse", (e) => {
              u(e.target).show();
            });
        }),
          (window.Flickity = r());
        var w = n(564),
          f = n.n(w),
          p = n(391),
          v = n.n(p);
        document.querySelectorAll("[data-isotope]").forEach(function (e) {
          f()(e, function () {
            const t = e.dataset.isotope ? JSON.parse(e.dataset.isotope) : {};
            new (v())(e, t);
          });
        }),
          (window.Isotope = v()),
          (window.imagesLoaded = f());
        var b = n(878);
        const m = document.querySelectorAll(
          "[data-parallax], [data-parallax-element], [data-parallax-video]"
        );
        (0, b.parallaxVideo)(),
          (0, b.parallaxElement)(),
          (0, b.parallax)(m),
          (window.parallax = b.parallax),
          (window.parallaxElement = b.parallaxElement),
          (window.parallaxVideo = b.parallaxVideo);
        var h = n(820),
          y = n.n(h);
        const g = document.querySelectorAll("[data-map]");
        g.forEach((e) => {
          const t = {
            ...{
              container: e,
              style: "mapbox://styles/mapbox/light-v9",
              scrollZoom: !1,
              interactive: !1,
            },
            ...(e.dataset.map ? JSON.parse(e.dataset.map) : {}),
          };
          y().accessToken =
            "pk.eyJ1Ijoic2ltcGxlcW9kZSIsImEiOiJja3Ewdm1qbzEwODd3MnZxbmZzaWR5dHU2In0.q3bYWUrysBloAAk10U0G6A";
          var n = new (y().Map)(t);
          new (y().Marker)().setLngLat(t?.center).addTo(n);
        });
        n(373);
        const x = document.getElementById("reservationForm");
        (0, s.S1)("user_8uiTkB3w9DpexWtnUrnlx"),
          x &&
            x.addEventListener("submit", function (e) {
              e.preventDefault();
              const t = x.querySelector('[type="submit"]');
              (t.disabled = !0),
                (this.contact_number.value = (1e5 * Math.random()) | 0),
                (0, s.qm)("touche_service", "touche_res_template", this).then(
                  function () {
                    c("Your request has been sent successfully!"),
                      (t.disabled = !1),
                      x.reset();
                  },
                  function (e) {
                    c(e), (t.disabled = !1);
                  }
                );
            });
      },
    },
    n = {};
  function o(e) {
    var a = n[e];
    if (void 0 !== a) return a.exports;
    var r = (n[e] = {
      exports: {},
    });
    return t[e].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, n, a, r) => {
      if (!n) {
        var l = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, a, r] = e[c], i = !0, s = 0; s < n.length; s++)
            (!1 & r || l >= r) && Object.keys(o.O).every((e) => o.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((i = !1), r < l && (l = r));
          i && (e.splice(c--, 1), (t = a()));
        }
        return t;
      }
      r = r || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
      e[c] = [n, a, r];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (
        o.d(t, {
          a: t,
        }),
        t
      );
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n],
          });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (() => {
      var e = {
        505: 0,
      };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var a,
            r,
            [l, i, s] = n,
            c = 0;
          for (a in i) o.o(i, a) && (o.m[a] = i[a]);
          if (s) var d = s(o);
          for (t && t(n); c < l.length; c++)
            (r = l[c]), o.o(e, r) && e[r] && e[r][0](), (e[l[c]] = 0);
          return o.O(d);
        },
        n = (self.webpackChunktouche = self.webpackChunktouche || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    o.O(void 0, [736], () => o(331));
  var a = o.O(void 0, [736], () => o(250));
  a = o.O(a);
})();
//# sourceMappingURL=theme.bundle.js.map
