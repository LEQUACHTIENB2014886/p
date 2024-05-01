/*
Merged JS file for Joomla:
/media/system/js/core.min.js
/media/system/js/messages.min.js
*/
const uriAttributes = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  SAFE_URL_PATTERN =
    /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
  DATA_URL_PATTERN =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
  allowedAttribute = (e, t) => {
    const o = e.nodeName.toLowerCase();
    if (t.includes(o))
      return (
        !uriAttributes.has(o) ||
        Boolean(
          SAFE_URL_PATTERN.test(e.nodeValue) ||
            DATA_URL_PATTERN.test(e.nodeValue)
        )
      );
    const r = t.filter((e) => e instanceof RegExp);
    for (let e = 0, t = r.length; e < t; e++) if (r[e].test(o)) return !0;
    return !1;
  };
function sanitizeHtml(e, t, o) {
  if (!e.length) return e;
  if (o && "function" == typeof o) return o(e);
  const r = new window.DOMParser().parseFromString(e, "text/html"),
    n = [].concat(...r.body.querySelectorAll("*"));
  for (let e = 0, o = n.length; e < o; e++) {
    const o = n[e],
      r = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(r)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes),
      s = [].concat(t["*"] || [], t[r] || []);
    l.forEach((e) => {
      allowedAttribute(e, s) || o.removeAttribute(e.nodeName);
    });
  }
  return r.body.innerHTML;
}
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i,
  DATA_ATTRIBUTE_PATTERN = /^data-[\w-]*$/i,
  DefaultAllowlist = {
    "*": [
      "class",
      "dir",
      "id",
      "lang",
      "role",
      ARIA_ATTRIBUTE_PATTERN,
      DATA_ATTRIBUTE_PATTERN,
    ],
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
    ul: [],
    button: ["type"],
    input: [
      "accept",
      "alt",
      "autocomplete",
      "autofocus",
      "capture",
      "checked",
      "dirname",
      "disabled",
      "height",
      "list",
      "max",
      "maxlength",
      "min",
      "minlength",
      "multiple",
      "type",
      "name",
      "pattern",
      "placeholder",
      "readonly",
      "required",
      "size",
      "src",
      "step",
      "value",
      "width",
      "inputmode",
    ],
    select: ["name"],
    textarea: ["name"],
    option: ["value", "selected"],
  };
(window.Joomla = window.Joomla || {}),
  (window.Joomla.editors = window.Joomla.editors || {}),
  (window.Joomla.editors.instances = window.Joomla.editors.instances || {}),
  (window.Joomla.Modal = window.Joomla.Modal || {
    current: "",
    setCurrent: (e) => {
      window.Joomla.Modal.current = e;
    },
    getCurrent: () => window.Joomla.Modal.current,
  }),
  ((e) => {
    let t;
    (e.extend = (e, t) => {
      let o = e;
      return (
        null === e && (o = {}),
        [].slice.call(Object.keys(t)).forEach((e) => {
          o[e] = t[e];
        }),
        e
      );
    }),
      (e.optionsStorage = e.optionsStorage || null),
      (e.getOptions = (t, o) => (
        e.optionsStorage || e.loadOptions(),
        void 0 !== e.optionsStorage[t] ? e.optionsStorage[t] : o
      )),
      (e.loadOptions = (t) => {
        if (!t) {
          const t = [].slice.call(
            document.querySelectorAll(".joomla-script-options.new")
          );
          let o = 0;
          if (
            (t.forEach((t) => {
              const r = t.text || t.textContent,
                n = JSON.parse(r);
              n && (e.loadOptions(n), (o += 1)),
                (t.className = t.className.replace(" new", " loaded"));
            }),
            o)
          )
            return;
        }
        e.optionsStorage
          ? t &&
            [].slice.call(Object.keys(t)).forEach((o) => {
              null !== t[o] &&
              "object" == typeof e.optionsStorage[o] &&
              "object" == typeof t[o]
                ? (e.optionsStorage[o] = e.extend(e.optionsStorage[o], t[o]))
                : (e.optionsStorage[o] = t[o]);
            })
          : (e.optionsStorage = t || {});
      }),
      (e.Text = {
        strings: {},
        _: (t, o) => {
          let r = t,
            n = o;
          const l = e.getOptions("joomla.jtext");
          return (
            l && (e.Text.load(l), e.loadOptions({ "joomla.jtext": null })),
            (n = void 0 === n ? r : n),
            (r = r.toUpperCase()),
            void 0 !== e.Text.strings[r] ? e.Text.strings[r] : n
          );
        },
        load: (t) => (
          [].slice.call(Object.keys(t)).forEach((o) => {
            e.Text.strings[o.toUpperCase()] = t[o];
          }),
          e.Text
        ),
      }),
      (e.JText = e.Text),
      (e.submitform = (e, t, o) => {
        let r = t;
        const n = e;
        r || (r = document.getElementById("adminForm")),
          n && (r.task.value = n),
          (r.noValidate = !o),
          o
            ? r.hasAttribute("novalidate") && r.removeAttribute("novalidate")
            : r.setAttribute("novalidate", "");
        const l = document.createElement("input");
        l.classList.add("hidden"),
          (l.type = "submit"),
          r.appendChild(l).click(),
          r.removeChild(l);
      }),
      (e.submitbutton = (t, o, r) => {
        let n = document.querySelector(o || "form.form-validate"),
          l = r;
        if (
          ("string" == typeof o &&
            null === n &&
            (n = document.querySelector(`#${o}`)),
          n)
        ) {
          if (null == l) {
            const e = t.split(".");
            let o = n.getAttribute("data-cancel-task");
            o || (o = `${e[0]}.cancel`), (l = t !== o);
          }
          (l && !document.formvalidator.isValid(n)) || e.submitform(t, n);
        } else e.submitform(t);
      }),
      (e.checkAll = (e, t) => {
        if (!e.form) return !1;
        const o = t || "cb",
          r = [].slice.call(e.form.elements);
        let n = 0;
        return (
          r.forEach((t) => {
            t.type === e.type &&
              0 === t.id.indexOf(o) &&
              ((t.checked = e.checked), (n += t.checked ? 1 : 0));
          }),
          e.form.boxchecked &&
            ((e.form.boxchecked.value = n),
            e.form.boxchecked.dispatchEvent(
              new CustomEvent("change", { bubbles: !0, cancelable: !0 })
            )),
          !0
        );
      }),
      (e.isChecked = (e, t) => {
        let o = t;
        if (
          (void 0 === o
            ? (o = document.getElementById("adminForm"))
            : "string" == typeof t && (o = document.getElementById(t)),
          (o.boxchecked.value = e
            ? parseInt(o.boxchecked.value, 10) + 1
            : parseInt(o.boxchecked.value, 10) - 1),
          o.boxchecked.dispatchEvent(
            new CustomEvent("change", { bubbles: !0, cancelable: !0 })
          ),
          !o.elements["checkall-toggle"])
        )
          return;
        let r,
          n,
          l,
          s = !0;
        for (r = 0, l = o.elements.length; r < l; r++)
          if (
            ((n = o.elements[r]),
            "checkbox" === n.type && "checkall-toggle" !== n.name && !n.checked)
          ) {
            s = !1;
            break;
          }
        o.elements["checkall-toggle"].checked = s;
      }),
      (e.tableOrdering = (t, o, r, n) => {
        let l = n;
        void 0 === l
          ? (l = document.getElementById("adminForm"))
          : "string" == typeof n && (l = document.getElementById(n)),
          (l.filter_order.value = t),
          (l.filter_order_Dir.value = o),
          e.submitform(r, l);
      }),
      (e.listItemTask = (t, o, r = null) => {
        let n = r;
        n = null !== r ? document.getElementById(r) : document.adminForm;
        const l = n[t];
        let s,
          a = 0;
        if (!l) return !1;
        for (; (s = n[`cb${a}`]), s; ) (s.checked = !1), (a += 1);
        return (
          (l.checked = !0), (n.boxchecked.value = 1), e.submitform(o, n), !1
        );
      }),
      (e.replaceTokens = (e) => {
        if (!/^[0-9A-F]{32}$/i.test(e)) return;
        [].slice.call(document.getElementsByTagName("input")).forEach((t) => {
          "hidden" === t.type &&
            "1" === t.value &&
            32 === t.name.length &&
            (t.name = e);
        });
      }),
      (e.request = (t) => {
        const o = e.extend(
            { url: "", method: "GET", data: null, perform: !0, promise: !1 },
            t
          ),
          r = (t, r) => {
            const n = new XMLHttpRequest();
            if (
              (n.open(o.method, o.url, !0),
              n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              n.setRequestHeader("X-Ajax-Engine", "Joomla!"),
              "GET" !== o.method)
            ) {
              const t = e.getOptions("csrf.token", "");
              t && n.setRequestHeader("X-CSRF-Token", t),
                "string" != typeof o.data ||
                  (o.headers && o.headers["Content-Type"]) ||
                  n.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                  );
            }
            if (
              (o.headers &&
                [].slice.call(Object.keys(o.headers)).forEach((e) => {
                  ("Content-Type" === e &&
                    "false" === o.headers["Content-Type"]) ||
                    n.setRequestHeader(e, o.headers[e]);
                }),
              (n.onreadystatechange = () => {
                4 === n.readyState &&
                  (200 === n.status
                    ? o.promise
                      ? t.call(window, n)
                      : t.call(window, n.responseText, n)
                    : r.call(window, n),
                  o.onComplete && !o.promise && o.onComplete.call(window, n));
              }),
              o.perform)
            ) {
              if (o.onBefore && !1 === o.onBefore.call(window, n))
                return o.promise && t.call(window, n), n;
              n.send(o.data);
            }
            return n;
          };
        if (o.promise)
          return new Promise((e, t) => {
            (o.perform = !0), r(e, t);
          });
        try {
          return r(o.onSuccess || (() => {}), o.onError || (() => {}));
        } catch (e) {
          return console.error(e), !1;
        }
      }),
      (e.enqueueRequest = (o) => {
        if (!o.promise)
          throw new Error(
            "Joomla.enqueueRequest supports only Joomla.request as Promise"
          );
        return (t = t ? t.then(() => e.request(o)) : e.request(o)), t;
      }),
      (e.sanitizeHtml = (e, t, o) =>
        sanitizeHtml(
          e,
          null == t ? DefaultAllowlist : { ...DefaultAllowlist, ...t },
          o
        )),
      (e.ajaxErrorsMessages = (t, o) => {
        const r = {};
        if ("parsererror" === o) {
          const o = [];
          let n = t.responseText.trim();
          for (let e = n.length - 1; e >= 0; e--)
            o.unshift(["&#", n[e].charCodeAt(), ";"].join(""));
          (n = o.join("")),
            (r.error = [e.Text._("JLIB_JS_AJAX_ERROR_PARSE").replace("%s", n)]);
        } else
          "nocontent" === o
            ? (r.error = [e.Text._("JLIB_JS_AJAX_ERROR_NO_CONTENT")])
            : "timeout" === o
            ? (r.error = [e.Text._("JLIB_JS_AJAX_ERROR_TIMEOUT")])
            : "abort" === o
            ? (r.error = [e.Text._("JLIB_JS_AJAX_ERROR_CONNECTION_ABORT")])
            : t.responseJSON && t.responseJSON.message
            ? (r.error = [
                `${e.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace(
                  "%s",
                  t.status
                )} <em>${t.responseJSON.message}</em>`,
              ])
            : t.statusText
            ? (r.error = [
                `${e.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace(
                  "%s",
                  t.status
                )} <em>${t.statusText}</em>`,
              ])
            : (r.error = [
                e.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status),
              ]);
        return r;
      });
  })(Joomla);
class AlertElement extends HTMLElement {
  constructor() {
    super(),
      (this.close = this.close.bind(this)),
      (this.destroyCloseButton = this.destroyCloseButton.bind(this)),
      (this.createCloseButton = this.createCloseButton.bind(this)),
      (this.onMutation = this.onMutation.bind(this)),
      (this.observer = new MutationObserver(this.onMutation)),
      this.observer.observe(this, {
        attributes: !1,
        childList: !0,
        subtree: !0,
      }),
      this.addEventListener("animationend", (t) => {
        "joomla-alert-fade-in" === t.animationName &&
          t.target === this &&
          (this.dispatchEvent(new CustomEvent("joomla.alert.shown")),
          this.style.removeProperty("animationName"));
      }),
      this.addEventListener("animationend", (t) => {
        "joomla-alert-fade-out" === t.animationName &&
          t.target === this &&
          (this.dispatchEvent(new CustomEvent("joomla.alert.closed")),
          this.remove());
      });
  }
  static get observedAttributes() {
    return ["type", "role", "dismiss", "auto-dismiss", "close-text"];
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(t) {
    this.setAttribute("type", t);
  }
  get role() {
    return this.getAttribute("role");
  }
  set role(t) {
    this.setAttribute("role", t);
  }
  get closeText() {
    return this.getAttribute("close-text");
  }
  set closeText(t) {
    this.setAttribute("close-text", t);
  }
  get dismiss() {
    return this.getAttribute("dismiss");
  }
  set dismiss(t) {
    this.setAttribute("dismiss", t);
  }
  get autodismiss() {
    return this.getAttribute("auto-dismiss");
  }
  set autodismiss(t) {
    this.setAttribute("auto-dismiss", t);
  }
  connectedCallback() {
    this.dispatchEvent(new CustomEvent("joomla.alert.show")),
      (this.style.animationName = "joomla-alert-fade-in"),
      (this.type &&
        ["info", "warning", "danger", "success"].includes(this.type)) ||
        this.setAttribute("type", "info"),
      (this.role && ["alert", "alertdialog"].includes(this.role)) ||
        this.setAttribute("role", "alert"),
      this.firstElementChild &&
        "BUTTON" === this.firstElementChild.tagName &&
        ((this.button = this.firstElementChild),
        this.button.classList.contains("joomla-alert--close") &&
          this.button.classList.add("joomla-alert--close"),
        "" === this.button.innerHTML &&
          (this.button.innerHTML = '<span aria-hidden="true">&times;</span>'),
        this.button.hasAttribute("aria-label") ||
          this.button.setAttribute("aria-label", this.closeText)),
      this.hasAttribute("dismiss") && !this.button && this.createCloseButton(),
      this.hasAttribute("auto-dismiss") && this.autoDismiss();
  }
  disconnectedCallback() {
    this.button && this.button.removeEventListener("click", this.close),
      this.observer.disconnect();
  }
  attributeChangedCallback(t, e, s) {
    switch (t) {
      case "type":
        (!s ||
          (s && -1 === ["info", "warning", "danger", "success"].indexOf(s))) &&
          (this.type = "info");
        break;
      case "role":
        (!s || (s && -1 === ["alert", "alertdialog"].indexOf(s))) &&
          (this.role = "alert");
        break;
      case "dismiss":
        (s && "" !== s) || (e && "" !== e)
          ? this.button && "false" === s
            ? this.destroyCloseButton()
            : this.button || "false" === s || this.createCloseButton()
          : this.button && !this.hasAttribute("dismiss")
          ? this.destroyCloseButton()
          : !this.button &&
            this.hasAttribute("dismiss") &&
            this.createCloseButton();
        break;
      case "close-text":
        (s && s === e) ||
          (this.button && this.button.setAttribute("aria-label", s));
        break;
      case "auto-dismiss":
        this.autoDismiss();
    }
  }
  onMutation(t) {
    for (const e of t)
      "childList" === e.type &&
        e.addedNodes.length &&
        this.button &&
        this.firstElementChild !== this.button &&
        this.prepend(this.button);
  }
  close() {
    this.dispatchEvent(new CustomEvent("joomla.alert.close")),
      (this.style.animationName = "joomla-alert-fade-out");
  }
  createCloseButton() {
    (this.button = document.createElement("button")),
      this.button.setAttribute("type", "button"),
      this.button.classList.add("joomla-alert--close"),
      (this.button.innerHTML = '<span aria-hidden="true">&times;</span>'),
      this.button.setAttribute("aria-label", this.closeText),
      this.insertAdjacentElement("afterbegin", this.button),
      this.button.addEventListener("click", this.close);
  }
  destroyCloseButton() {
    this.button &&
      (this.button.removeEventListener("click", this.close),
      this.button.parentNode.removeChild(this.button),
      (this.button = null));
  }
  autoDismiss() {
    const t = parseInt(this.getAttribute("auto-dismiss"), 10);
    setTimeout(this.close, t >= 10 ? t : 3e3);
  }
}
customElements.get("joomla-alert") ||
  customElements.define("joomla-alert", AlertElement);
const getMessageContainer = (t) => {
  let e;
  return t instanceof HTMLElement
    ? t
    : ((e =
        void 0 === t || (t && "#system-message-container" === t)
          ? document.getElementById("system-message-container")
          : document.querySelector(t)),
      e);
};
(Joomla.renderMessages = (t, e, s, i) => {
  const o = getMessageContainer(e);
  (void 0 === s || (s && !1 === s)) && Joomla.removeMessages(o),
    [].slice.call(Object.keys(t)).forEach((e) => {
      let s = e;
      const n = t[e],
        a = document.createElement("joomla-alert");
      ["success", "info", "danger", "warning"].indexOf(e) < 0 &&
        ((s = "notice" === e ? "info" : e),
        (s = "message" === e ? "success" : s),
        (s = "error" === e ? "danger" : s),
        (s = "warning" === e ? "warning" : s)),
        a.setAttribute("type", s),
        a.setAttribute("close-text", Joomla.Text._("JCLOSE")),
        a.setAttribute("dismiss", !0),
        i && parseInt(i, 10) > 0 && a.setAttribute("auto-dismiss", i);
      if (void 0 !== Joomla.Text._(e)) {
        const t = document.createElement("div");
        (t.className = "alert-heading"),
          (t.innerHTML = Joomla.sanitizeHtml(
            `<span class="${e}"></span><span class="visually-hidden">${
              Joomla.Text._(e) ? Joomla.Text._(e) : e
            }</span>`
          )),
          a.appendChild(t);
      }
      const r = document.createElement("div");
      (r.className = "alert-wrapper"),
        n.forEach((t) => {
          r.innerHTML += Joomla.sanitizeHtml(
            `<div class="alert-message">${t}</div>`
          );
        }),
        a.appendChild(r),
        o.appendChild(a);
    });
}),
  (Joomla.removeMessages = (t) => {
    const e = getMessageContainer(t),
      s = [].slice.call(e.querySelectorAll("joomla-alert"));
    s.length &&
      s.forEach((t) => {
        t.close();
      });
  }),
  document.addEventListener("DOMContentLoaded", () => {
    const t = Joomla.getOptions("joomla.messages");
    t &&
      Object.keys(t).map((e) =>
        Joomla.renderMessages(t[e], void 0, !0, void 0)
      );
  });
