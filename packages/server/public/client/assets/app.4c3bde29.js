var eS = Object.defineProperty;
var tS = (e, t, r) =>
  t in e
    ? eS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var rS = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var P = (e, t, r) => (tS(e, typeof t != 'symbol' ? t + '' : t, r), r);
var ZB = rS((ft, dt) => {
  function Uv(e, t) {
    for (var r = 0; r < t.length; r++) {
      const n = t[r];
      if (typeof n != 'string' && !Array.isArray(n)) {
        for (const i in n)
          if (i !== 'default' && !(i in e)) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            o &&
              Object.defineProperty(
                e,
                i,
                o.get ? o : { enumerable: !0, get: () => n[i] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
    );
  }
  (function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      n(i);
    new MutationObserver(i => {
      for (const o of i)
        if (o.type === 'childList')
          for (const a of o.addedNodes)
            a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(i) {
      const o = {};
      return (
        i.integrity && (o.integrity = i.integrity),
        i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
        i.crossorigin === 'use-credentials'
          ? (o.credentials = 'include')
          : i.crossorigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
        o
      );
    }
    function n(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = r(i);
      fetch(i.href, o);
    }
  })();
  var Ir =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {};
  function nS(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  var O = { exports: {} },
    Y = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ra = Symbol.for('react.element'),
    iS = Symbol.for('react.portal'),
    oS = Symbol.for('react.fragment'),
    aS = Symbol.for('react.strict_mode'),
    sS = Symbol.for('react.profiler'),
    uS = Symbol.for('react.provider'),
    lS = Symbol.for('react.context'),
    cS = Symbol.for('react.forward_ref'),
    fS = Symbol.for('react.suspense'),
    dS = Symbol.for('react.memo'),
    pS = Symbol.for('react.lazy'),
    Hp = Symbol.iterator;
  function hS(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Hp && e[Hp]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var zv = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Bv = Object.assign,
    Hv = {};
  function Ri(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Hv),
      (this.updater = r || zv);
  }
  Ri.prototype.isReactComponent = {};
  Ri.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
      throw Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
      );
    this.updater.enqueueSetState(this, e, t, 'setState');
  };
  Ri.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
  };
  function Vv() {}
  Vv.prototype = Ri.prototype;
  function td(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Hv),
      (this.updater = r || zv);
  }
  var rd = (td.prototype = new Vv());
  rd.constructor = td;
  Bv(rd, Ri.prototype);
  rd.isPureReactComponent = !0;
  var Vp = Array.isArray,
    Wv = Object.prototype.hasOwnProperty,
    nd = { current: null },
    Kv = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qv(e, t, r) {
    var n,
      i = {},
      o = null,
      a = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (o = '' + t.key),
      t))
        Wv.call(t, n) && !Kv.hasOwnProperty(n) && (i[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1) i.children = r;
    else if (1 < s) {
      for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2];
      i.children = u;
    }
    if (e && e.defaultProps)
      for (n in ((s = e.defaultProps), s)) i[n] === void 0 && (i[n] = s[n]);
    return {
      $$typeof: ra,
      type: e,
      key: o,
      ref: a,
      props: i,
      _owner: nd.current,
    };
  }
  function gS(e, t) {
    return {
      $$typeof: ra,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function id(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === ra;
  }
  function mS(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
      '$' +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var Wp = /\/+/g;
  function dl(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
      ? mS('' + e.key)
      : t.toString(36);
  }
  function Ka(e, t, r, n, i) {
    var o = typeof e;
    (o === 'undefined' || o === 'boolean') && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
      switch (o) {
        case 'string':
        case 'number':
          a = !0;
          break;
        case 'object':
          switch (e.$$typeof) {
            case ra:
            case iS:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (i = i(a)),
        (e = n === '' ? '.' + dl(a, 0) : n),
        Vp(i)
          ? ((r = ''),
            e != null && (r = e.replace(Wp, '$&/') + '/'),
            Ka(i, t, r, '', function (l) {
              return l;
            }))
          : i != null &&
            (id(i) &&
              (i = gS(
                i,
                r +
                  (!i.key || (a && a.key === i.key)
                    ? ''
                    : ('' + i.key).replace(Wp, '$&/') + '/') +
                  e
              )),
            t.push(i)),
        1
      );
    if (((a = 0), (n = n === '' ? '.' : n + ':'), Vp(e)))
      for (var s = 0; s < e.length; s++) {
        o = e[s];
        var u = n + dl(o, s);
        a += Ka(o, t, r, u, i);
      }
    else if (((u = hS(e)), typeof u == 'function'))
      for (e = u.call(e), s = 0; !(o = e.next()).done; )
        (o = o.value), (u = n + dl(o, s++)), (a += Ka(o, t, r, u, i));
    else if (o === 'object')
      throw (
        ((t = String(e)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (t === '[object Object]'
              ? 'object with keys {' + Object.keys(e).join(', ') + '}'
              : t) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return a;
  }
  function ya(e, t, r) {
    if (e == null) return e;
    var n = [],
      i = 0;
    return (
      Ka(e, n, '', '', function (o) {
        return t.call(r, o, i++);
      }),
      n
    );
  }
  function vS(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Ze = { current: null },
    qa = { transition: null },
    yS = {
      ReactCurrentDispatcher: Ze,
      ReactCurrentBatchConfig: qa,
      ReactCurrentOwner: nd,
    };
  Y.Children = {
    map: ya,
    forEach: function (e, t, r) {
      ya(
        e,
        function () {
          t.apply(this, arguments);
        },
        r
      );
    },
    count: function (e) {
      var t = 0;
      return (
        ya(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        ya(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!id(e))
        throw Error(
          'React.Children.only expected to receive a single React element child.'
        );
      return e;
    },
  };
  Y.Component = Ri;
  Y.Fragment = oS;
  Y.Profiler = sS;
  Y.PureComponent = td;
  Y.StrictMode = aS;
  Y.Suspense = fS;
  Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yS;
  Y.cloneElement = function (e, t, r) {
    if (e == null)
      throw Error(
        'React.cloneElement(...): The argument must be a React element, but you passed ' +
          e +
          '.'
      );
    var n = Bv({}, e.props),
      i = e.key,
      o = e.ref,
      a = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (a = nd.current)),
        t.key !== void 0 && (i = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (u in t)
        Wv.call(t, u) &&
          !Kv.hasOwnProperty(u) &&
          (n[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) n.children = r;
    else if (1 < u) {
      s = Array(u);
      for (var l = 0; l < u; l++) s[l] = arguments[l + 2];
      n.children = s;
    }
    return { $$typeof: ra, type: e.type, key: i, ref: o, props: n, _owner: a };
  };
  Y.createContext = function (e) {
    return (
      (e = {
        $$typeof: lS,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: uS, _context: e }),
      (e.Consumer = e)
    );
  };
  Y.createElement = qv;
  Y.createFactory = function (e) {
    var t = qv.bind(null, e);
    return (t.type = e), t;
  };
  Y.createRef = function () {
    return { current: null };
  };
  Y.forwardRef = function (e) {
    return { $$typeof: cS, render: e };
  };
  Y.isValidElement = id;
  Y.lazy = function (e) {
    return { $$typeof: pS, _payload: { _status: -1, _result: e }, _init: vS };
  };
  Y.memo = function (e, t) {
    return { $$typeof: dS, type: e, compare: t === void 0 ? null : t };
  };
  Y.startTransition = function (e) {
    var t = qa.transition;
    qa.transition = {};
    try {
      e();
    } finally {
      qa.transition = t;
    }
  };
  Y.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
  };
  Y.useCallback = function (e, t) {
    return Ze.current.useCallback(e, t);
  };
  Y.useContext = function (e) {
    return Ze.current.useContext(e);
  };
  Y.useDebugValue = function () {};
  Y.useDeferredValue = function (e) {
    return Ze.current.useDeferredValue(e);
  };
  Y.useEffect = function (e, t) {
    return Ze.current.useEffect(e, t);
  };
  Y.useId = function () {
    return Ze.current.useId();
  };
  Y.useImperativeHandle = function (e, t, r) {
    return Ze.current.useImperativeHandle(e, t, r);
  };
  Y.useInsertionEffect = function (e, t) {
    return Ze.current.useInsertionEffect(e, t);
  };
  Y.useLayoutEffect = function (e, t) {
    return Ze.current.useLayoutEffect(e, t);
  };
  Y.useMemo = function (e, t) {
    return Ze.current.useMemo(e, t);
  };
  Y.useReducer = function (e, t, r) {
    return Ze.current.useReducer(e, t, r);
  };
  Y.useRef = function (e) {
    return Ze.current.useRef(e);
  };
  Y.useState = function (e) {
    return Ze.current.useState(e);
  };
  Y.useSyncExternalStore = function (e, t, r) {
    return Ze.current.useSyncExternalStore(e, t, r);
  };
  Y.useTransition = function () {
    return Ze.current.useTransition();
  };
  Y.version = '18.2.0';
  (function (e) {
    e.exports = Y;
  })(O);
  const Pt = nS(O.exports),
    vc = Uv({ __proto__: null, default: Pt }, [O.exports]);
  var yc = {},
    od = { exports: {} },
    mt = {},
    Yv = { exports: {} },
    Gv = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(A, R) {
      var U = A.length;
      A.push(R);
      e: for (; 0 < U; ) {
        var W = (U - 1) >>> 1,
          Q = A[W];
        if (0 < i(Q, R)) (A[W] = R), (A[U] = Q), (U = W);
        else break e;
      }
    }
    function r(A) {
      return A.length === 0 ? null : A[0];
    }
    function n(A) {
      if (A.length === 0) return null;
      var R = A[0],
        U = A.pop();
      if (U !== R) {
        A[0] = U;
        e: for (var W = 0, Q = A.length, Ue = Q >>> 1; W < Ue; ) {
          var ze = 2 * (W + 1) - 1,
            Xt = A[ze],
            Be = ze + 1,
            wt = A[Be];
          if (0 > i(Xt, U))
            Be < Q && 0 > i(wt, Xt)
              ? ((A[W] = wt), (A[Be] = U), (W = Be))
              : ((A[W] = Xt), (A[ze] = U), (W = ze));
          else if (Be < Q && 0 > i(wt, U)) (A[W] = wt), (A[Be] = U), (W = Be);
          else break e;
        }
      }
      return R;
    }
    function i(A, R) {
      var U = A.sortIndex - R.sortIndex;
      return U !== 0 ? U : A.id - R.id;
    }
    if (
      typeof performance == 'object' &&
      typeof performance.now == 'function'
    ) {
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var a = Date,
        s = a.now();
      e.unstable_now = function () {
        return a.now() - s;
      };
    }
    var u = [],
      l = [],
      d = 1,
      f = null,
      c = 3,
      g = !1,
      m = !1,
      v = !1,
      S = typeof setTimeout == 'function' ? setTimeout : null,
      h = typeof clearTimeout == 'function' ? clearTimeout : null,
      p = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(A) {
      for (var R = r(l); R !== null; ) {
        if (R.callback === null) n(l);
        else if (R.startTime <= A)
          n(l), (R.sortIndex = R.expirationTime), t(u, R);
        else break;
        R = r(l);
      }
    }
    function _(A) {
      if (((v = !1), y(A), !m))
        if (r(u) !== null) (m = !0), B(x);
        else {
          var R = r(l);
          R !== null && X(_, R.startTime - A);
        }
    }
    function x(A, R) {
      (m = !1), v && ((v = !1), h(k), (k = -1)), (g = !0);
      var U = c;
      try {
        for (
          y(R), f = r(u);
          f !== null && (!(f.expirationTime > R) || (A && !z()));

        ) {
          var W = f.callback;
          if (typeof W == 'function') {
            (f.callback = null), (c = f.priorityLevel);
            var Q = W(f.expirationTime <= R);
            (R = e.unstable_now()),
              typeof Q == 'function' ? (f.callback = Q) : f === r(u) && n(u),
              y(R);
          } else n(u);
          f = r(u);
        }
        if (f !== null) var Ue = !0;
        else {
          var ze = r(l);
          ze !== null && X(_, ze.startTime - R), (Ue = !1);
        }
        return Ue;
      } finally {
        (f = null), (c = U), (g = !1);
      }
    }
    var E = !1,
      $ = null,
      k = -1,
      D = 5,
      F = -1;
    function z() {
      return !(e.unstable_now() - F < D);
    }
    function me() {
      if ($ !== null) {
        var A = e.unstable_now();
        F = A;
        var R = !0;
        try {
          R = $(!0, A);
        } finally {
          R ? Oe() : ((E = !1), ($ = null));
        }
      } else E = !1;
    }
    var Oe;
    if (typeof p == 'function')
      Oe = function () {
        p(me);
      };
    else if (typeof MessageChannel < 'u') {
      var b = new MessageChannel(),
        N = b.port2;
      (b.port1.onmessage = me),
        (Oe = function () {
          N.postMessage(null);
        });
    } else
      Oe = function () {
        S(me, 0);
      };
    function B(A) {
      ($ = A), E || ((E = !0), Oe());
    }
    function X(A, R) {
      k = S(function () {
        A(e.unstable_now());
      }, R);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (A) {
        A.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        m || g || ((m = !0), B(x));
      }),
      (e.unstable_forceFrameRate = function (A) {
        0 > A || 125 < A
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (D = 0 < A ? Math.floor(1e3 / A) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return c;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return r(u);
      }),
      (e.unstable_next = function (A) {
        switch (c) {
          case 1:
          case 2:
          case 3:
            var R = 3;
            break;
          default:
            R = c;
        }
        var U = c;
        c = R;
        try {
          return A();
        } finally {
          c = U;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (A, R) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var U = c;
        c = A;
        try {
          return R();
        } finally {
          c = U;
        }
      }),
      (e.unstable_scheduleCallback = function (A, R, U) {
        var W = e.unstable_now();
        switch (
          (typeof U == 'object' && U !== null
            ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? W + U : W))
            : (U = W),
          A)
        ) {
          case 1:
            var Q = -1;
            break;
          case 2:
            Q = 250;
            break;
          case 5:
            Q = 1073741823;
            break;
          case 4:
            Q = 1e4;
            break;
          default:
            Q = 5e3;
        }
        return (
          (Q = U + Q),
          (A = {
            id: d++,
            callback: R,
            priorityLevel: A,
            startTime: U,
            expirationTime: Q,
            sortIndex: -1,
          }),
          U > W
            ? ((A.sortIndex = U),
              t(l, A),
              r(u) === null &&
                A === r(l) &&
                (v ? (h(k), (k = -1)) : (v = !0), X(_, U - W)))
            : ((A.sortIndex = Q), t(u, A), m || g || ((m = !0), B(x))),
          A
        );
      }),
      (e.unstable_shouldYield = z),
      (e.unstable_wrapCallback = function (A) {
        var R = c;
        return function () {
          var U = c;
          c = R;
          try {
            return A.apply(this, arguments);
          } finally {
            c = U;
          }
        };
      });
  })(Gv);
  (function (e) {
    e.exports = Gv;
  })(Yv);
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Xv = O.exports,
    ht = Yv.exports;
  function T(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var Qv = new Set(),
    No = {};
  function Nn(e, t) {
    Ei(e, t), Ei(e + 'Capture', t);
  }
  function Ei(e, t) {
    for (No[e] = t, e = 0; e < t.length; e++) Qv.add(t[e]);
  }
  var _r = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    wc = Object.prototype.hasOwnProperty,
    wS =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Kp = {},
    qp = {};
  function _S(e) {
    return wc.call(qp, e)
      ? !0
      : wc.call(Kp, e)
      ? !1
      : wS.test(e)
      ? (qp[e] = !0)
      : ((Kp[e] = !0), !1);
  }
  function SS(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return n
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function xS(e, t, r, n) {
    if (t === null || typeof t > 'u' || SS(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function Je(e, t, r, n, i, o, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = n),
      (this.attributeNamespace = i),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = a);
  }
  var Me = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      Me[e] = new Je(e, 0, !1, e, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    Me[t] = new Je(t, 1, !1, e[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    Me[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    Me[e] = new Je(e, 2, !1, e, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      Me[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    Me[e] = new Je(e, 3, !0, e, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (e) {
    Me[e] = new Je(e, 4, !1, e, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    Me[e] = new Je(e, 6, !1, e, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (e) {
    Me[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ad = /[\-:]([a-z])/g;
  function sd(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(ad, sd);
      Me[t] = new Je(t, 1, !1, e, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(ad, sd);
      Me[t] = new Je(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(ad, sd);
    Me[t] = new Je(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  });
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    Me[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Me.xlinkHref = new Je(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  );
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    Me[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ud(e, t, r, n) {
    var i = Me.hasOwnProperty(t) ? Me[t] : null;
    (i !== null
      ? i.type !== 0
      : n ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (xS(t, r, i, n) && (r = null),
      n || i === null
        ? _S(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : i.mustUseProperty
        ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : '') : r)
        : ((t = i.attributeName),
          (n = i.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (r = i === 3 || (i === 4 && r === !0) ? '' : '' + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
  }
  var Or = Xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    wa = Symbol.for('react.element'),
    ei = Symbol.for('react.portal'),
    ti = Symbol.for('react.fragment'),
    ld = Symbol.for('react.strict_mode'),
    _c = Symbol.for('react.profiler'),
    Zv = Symbol.for('react.provider'),
    Jv = Symbol.for('react.context'),
    cd = Symbol.for('react.forward_ref'),
    Sc = Symbol.for('react.suspense'),
    xc = Symbol.for('react.suspense_list'),
    fd = Symbol.for('react.memo'),
    Ar = Symbol.for('react.lazy'),
    ey = Symbol.for('react.offscreen'),
    Yp = Symbol.iterator;
  function Xi(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Yp && e[Yp]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var ge = Object.assign,
    pl;
  function go(e) {
    if (pl === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        pl = (t && t[1]) || '';
      }
    return (
      `
` +
      pl +
      e
    );
  }
  var hl = !1;
  function gl(e, t) {
    if (!e || hl) return '';
    hl = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (l) {
            var n = l;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (l) {
            n = l;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l) {
          n = l;
        }
        e();
      }
    } catch (l) {
      if (l && n && typeof l.stack == 'string') {
        for (
          var i = l.stack.split(`
`),
            o = n.stack.split(`
`),
            a = i.length - 1,
            s = o.length - 1;
          1 <= a && 0 <= s && i[a] !== o[s];

        )
          s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (i[a] !== o[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || i[a] !== o[s])) {
                  var u =
                    `
` + i[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      u.includes('<anonymous>') &&
                      (u = u.replace('<anonymous>', e.displayName)),
                    u
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      (hl = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : '') ? go(e) : '';
  }
  function bS(e) {
    switch (e.tag) {
      case 5:
        return go(e.type);
      case 16:
        return go('Lazy');
      case 13:
        return go('Suspense');
      case 19:
        return go('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = gl(e.type, !1)), e;
      case 11:
        return (e = gl(e.type.render, !1)), e;
      case 1:
        return (e = gl(e.type, !0)), e;
      default:
        return '';
    }
  }
  function bc(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ti:
        return 'Fragment';
      case ei:
        return 'Portal';
      case _c:
        return 'Profiler';
      case ld:
        return 'StrictMode';
      case Sc:
        return 'Suspense';
      case xc:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Jv:
          return (e.displayName || 'Context') + '.Consumer';
        case Zv:
          return (e._context.displayName || 'Context') + '.Provider';
        case cd:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case fd:
          return (
            (t = e.displayName || null), t !== null ? t : bc(e.type) || 'Memo'
          );
        case Ar:
          (t = e._payload), (e = e._init);
          try {
            return bc(e(t));
          } catch {}
      }
    return null;
  }
  function ES(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return bc(t);
      case 8:
        return t === ld ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function en(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function ty(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function OS(e) {
    var t = ty(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var i = r.get,
        o = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (a) {
            (n = '' + a), o.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (a) {
            n = '' + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function _a(e) {
    e._valueTracker || (e._valueTracker = OS(e));
  }
  function ry(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      n = '';
    return (
      e && (n = ty(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = n),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function ps(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ec(e, t) {
    var r = t.checked;
    return ge({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r != null ? r : e._wrapperState.initialChecked,
    });
  }
  function Gp(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      n = t.checked != null ? t.checked : t.defaultChecked;
    (r = en(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      });
  }
  function ny(e, t) {
    (t = t.checked), t != null && ud(e, 'checked', t, !1);
  }
  function Oc(e, t) {
    ny(e, t);
    var r = en(t.value),
      n = t.type;
    if (r != null)
      n === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r);
    else if (n === 'submit' || n === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? Cc(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && Cc(e, t.type, en(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Xp(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var n = t.type;
      if (
        !(
          (n !== 'submit' && n !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r);
  }
  function Cc(e, t, r) {
    (t !== 'number' || ps(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var mo = Array.isArray;
  function hi(e, t, r, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < r.length; i++) t['$' + r[i]] = !0;
      for (r = 0; r < e.length; r++)
        (i = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== i && (e[r].selected = i),
          i && n && (e[r].defaultSelected = !0);
    } else {
      for (r = '' + en(r), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === r) {
          (e[i].selected = !0), n && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Pc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
    return ge({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Qp(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(T(92));
        if (mo(r)) {
          if (1 < r.length) throw Error(T(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ''), (r = t);
    }
    e._wrapperState = { initialValue: en(r) };
  }
  function iy(e, t) {
    var r = en(t.value),
      n = en(t.defaultValue);
    r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      n != null && (e.defaultValue = '' + n);
  }
  function Zp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function oy(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function $c(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? oy(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
  }
  var Sa,
    ay = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, n, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, n, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          Sa = Sa || document.createElement('div'),
            Sa.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Sa.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Fo(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var So = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    CS = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(So).forEach(function (e) {
    CS.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (So[t] = So[e]);
    });
  });
  function sy(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (So.hasOwnProperty(e) && So[e])
      ? ('' + t).trim()
      : t + 'px';
  }
  function uy(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = r.indexOf('--') === 0,
          i = sy(r, t[r], n);
        r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, i) : (e[r] = i);
      }
  }
  var PS = ge(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function kc(e, t) {
    if (t) {
      if (PS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(T(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(T(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(T(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(T(62));
    }
  }
  function Tc(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Ac = null;
  function dd(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Nc = null,
    gi = null,
    mi = null;
  function Jp(e) {
    if ((e = oa(e))) {
      if (typeof Nc != 'function') throw Error(T(280));
      var t = e.stateNode;
      t && ((t = fu(t)), Nc(e.stateNode, e.type, t));
    }
  }
  function ly(e) {
    gi ? (mi ? mi.push(e) : (mi = [e])) : (gi = e);
  }
  function cy() {
    if (gi) {
      var e = gi,
        t = mi;
      if (((mi = gi = null), Jp(e), t)) for (e = 0; e < t.length; e++) Jp(t[e]);
    }
  }
  function fy(e, t) {
    return e(t);
  }
  function dy() {}
  var ml = !1;
  function py(e, t, r) {
    if (ml) return e(t, r);
    ml = !0;
    try {
      return fy(e, t, r);
    } finally {
      (ml = !1), (gi !== null || mi !== null) && (dy(), cy());
    }
  }
  function Ro(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = fu(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !n);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(T(231, t, typeof r));
    return r;
  }
  var Fc = !1;
  if (_r)
    try {
      var Qi = {};
      Object.defineProperty(Qi, 'passive', {
        get: function () {
          Fc = !0;
        },
      }),
        window.addEventListener('test', Qi, Qi),
        window.removeEventListener('test', Qi, Qi);
    } catch {
      Fc = !1;
    }
  function $S(e, t, r, n, i, o, a, s, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, l);
    } catch (d) {
      this.onError(d);
    }
  }
  var xo = !1,
    hs = null,
    gs = !1,
    Rc = null,
    kS = {
      onError: function (e) {
        (xo = !0), (hs = e);
      },
    };
  function TS(e, t, r, n, i, o, a, s, u) {
    (xo = !1), (hs = null), $S.apply(kS, arguments);
  }
  function AS(e, t, r, n, i, o, a, s, u) {
    if ((TS.apply(this, arguments), xo)) {
      if (xo) {
        var l = hs;
        (xo = !1), (hs = null);
      } else throw Error(T(198));
      gs || ((gs = !0), (Rc = l));
    }
  }
  function Fn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function hy(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function eh(e) {
    if (Fn(e) !== e) throw Error(T(188));
  }
  function NS(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Fn(e)), t === null)) throw Error(T(188));
      return t !== e ? null : e;
    }
    for (var r = e, n = t; ; ) {
      var i = r.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((n = i.return), n !== null)) {
          r = n;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === r) return eh(i), e;
          if (o === n) return eh(i), t;
          o = o.sibling;
        }
        throw Error(T(188));
      }
      if (r.return !== n.return) (r = i), (n = o);
      else {
        for (var a = !1, s = i.child; s; ) {
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) {
          for (s = o.child; s; ) {
            if (s === r) {
              (a = !0), (r = o), (n = i);
              break;
            }
            if (s === n) {
              (a = !0), (n = o), (r = i);
              break;
            }
            s = s.sibling;
          }
          if (!a) throw Error(T(189));
        }
      }
      if (r.alternate !== n) throw Error(T(190));
    }
    if (r.tag !== 3) throw Error(T(188));
    return r.stateNode.current === r ? e : t;
  }
  function gy(e) {
    return (e = NS(e)), e !== null ? my(e) : null;
  }
  function my(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = my(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var vy = ht.unstable_scheduleCallback,
    th = ht.unstable_cancelCallback,
    FS = ht.unstable_shouldYield,
    RS = ht.unstable_requestPaint,
    _e = ht.unstable_now,
    LS = ht.unstable_getCurrentPriorityLevel,
    pd = ht.unstable_ImmediatePriority,
    yy = ht.unstable_UserBlockingPriority,
    ms = ht.unstable_NormalPriority,
    jS = ht.unstable_LowPriority,
    wy = ht.unstable_IdlePriority,
    su = null,
    ir = null;
  function IS(e) {
    if (ir && typeof ir.onCommitFiberRoot == 'function')
      try {
        ir.onCommitFiberRoot(su, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Wt = Math.clz32 ? Math.clz32 : US,
    DS = Math.log,
    MS = Math.LN2;
  function US(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((DS(e) / MS) | 0)) | 0;
  }
  var xa = 64,
    ba = 4194304;
  function vo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function vs(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      a = r & 268435455;
    if (a !== 0) {
      var s = a & ~i;
      s !== 0 ? (n = vo(s)) : ((o &= a), o !== 0 && (n = vo(o)));
    } else (a = r & ~i), a !== 0 ? (n = vo(a)) : o !== 0 && (n = vo(o));
    if (n === 0) return 0;
    if (
      t !== 0 &&
      t !== n &&
      (t & i) === 0 &&
      ((i = n & -n), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= n; 0 < t; )
        (r = 31 - Wt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
    return n;
  }
  function zS(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function BS(e, t) {
    for (
      var r = e.suspendedLanes,
        n = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var a = 31 - Wt(o),
        s = 1 << a,
        u = i[a];
      u === -1
        ? ((s & r) === 0 || (s & n) !== 0) && (i[a] = zS(s, t))
        : u <= t && (e.expiredLanes |= s),
        (o &= ~s);
    }
  }
  function Lc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function _y() {
    var e = xa;
    return (xa <<= 1), (xa & 4194240) === 0 && (xa = 64), e;
  }
  function vl(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function na(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Wt(t)),
      (e[t] = r);
  }
  function HS(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var i = 31 - Wt(r),
        o = 1 << i;
      (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~o);
    }
  }
  function hd(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var n = 31 - Wt(r),
        i = 1 << n;
      (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
    }
  }
  var ee = 0;
  function Sy(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var xy,
    gd,
    by,
    Ey,
    Oy,
    jc = !1,
    Ea = [],
    zr = null,
    Br = null,
    Hr = null,
    Lo = new Map(),
    jo = new Map(),
    Rr = [],
    VS =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function rh(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        zr = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Br = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Hr = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Lo.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        jo.delete(t.pointerId);
    }
  }
  function Zi(e, t, r, n, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = oa(t)), t !== null && gd(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function WS(e, t, r, n, i) {
    switch (t) {
      case 'focusin':
        return (zr = Zi(zr, e, t, r, n, i)), !0;
      case 'dragenter':
        return (Br = Zi(Br, e, t, r, n, i)), !0;
      case 'mouseover':
        return (Hr = Zi(Hr, e, t, r, n, i)), !0;
      case 'pointerover':
        var o = i.pointerId;
        return Lo.set(o, Zi(Lo.get(o) || null, e, t, r, n, i)), !0;
      case 'gotpointercapture':
        return (
          (o = i.pointerId), jo.set(o, Zi(jo.get(o) || null, e, t, r, n, i)), !0
        );
    }
    return !1;
  }
  function Cy(e) {
    var t = _n(e.target);
    if (t !== null) {
      var r = Fn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = hy(r)), t !== null)) {
            (e.blockedOn = t),
              Oy(e.priority, function () {
                by(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ya(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Ic(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var n = new r.constructor(r.type, r);
        (Ac = n), r.target.dispatchEvent(n), (Ac = null);
      } else return (t = oa(r)), t !== null && gd(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function nh(e, t, r) {
    Ya(e) && r.delete(t);
  }
  function KS() {
    (jc = !1),
      zr !== null && Ya(zr) && (zr = null),
      Br !== null && Ya(Br) && (Br = null),
      Hr !== null && Ya(Hr) && (Hr = null),
      Lo.forEach(nh),
      jo.forEach(nh);
  }
  function Ji(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      jc ||
        ((jc = !0),
        ht.unstable_scheduleCallback(ht.unstable_NormalPriority, KS)));
  }
  function Io(e) {
    function t(i) {
      return Ji(i, e);
    }
    if (0 < Ea.length) {
      Ji(Ea[0], e);
      for (var r = 1; r < Ea.length; r++) {
        var n = Ea[r];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    for (
      zr !== null && Ji(zr, e),
        Br !== null && Ji(Br, e),
        Hr !== null && Ji(Hr, e),
        Lo.forEach(t),
        jo.forEach(t),
        r = 0;
      r < Rr.length;
      r++
    )
      (n = Rr[r]), n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Rr.length && ((r = Rr[0]), r.blockedOn === null); )
      Cy(r), r.blockedOn === null && Rr.shift();
  }
  var vi = Or.ReactCurrentBatchConfig,
    ys = !0;
  function qS(e, t, r, n) {
    var i = ee,
      o = vi.transition;
    vi.transition = null;
    try {
      (ee = 1), md(e, t, r, n);
    } finally {
      (ee = i), (vi.transition = o);
    }
  }
  function YS(e, t, r, n) {
    var i = ee,
      o = vi.transition;
    vi.transition = null;
    try {
      (ee = 4), md(e, t, r, n);
    } finally {
      (ee = i), (vi.transition = o);
    }
  }
  function md(e, t, r, n) {
    if (ys) {
      var i = Ic(e, t, r, n);
      if (i === null) Pl(e, t, n, ws, r), rh(e, n);
      else if (WS(i, e, t, r, n)) n.stopPropagation();
      else if ((rh(e, n), t & 4 && -1 < VS.indexOf(e))) {
        for (; i !== null; ) {
          var o = oa(i);
          if (
            (o !== null && xy(o),
            (o = Ic(e, t, r, n)),
            o === null && Pl(e, t, n, ws, r),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && n.stopPropagation();
      } else Pl(e, t, n, null, r);
    }
  }
  var ws = null;
  function Ic(e, t, r, n) {
    if (((ws = null), (e = dd(n)), (e = _n(e)), e !== null))
      if (((t = Fn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = hy(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ws = e), null;
  }
  function Py(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (LS()) {
          case pd:
            return 1;
          case yy:
            return 4;
          case ms:
          case jS:
            return 16;
          case wy:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dr = null,
    vd = null,
    Ga = null;
  function $y() {
    if (Ga) return Ga;
    var e,
      t = vd,
      r = t.length,
      n,
      i = 'value' in Dr ? Dr.value : Dr.textContent,
      o = i.length;
    for (e = 0; e < r && t[e] === i[e]; e++);
    var a = r - e;
    for (n = 1; n <= a && t[r - n] === i[o - n]; n++);
    return (Ga = i.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Xa(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Oa() {
    return !0;
  }
  function ih() {
    return !1;
  }
  function vt(e) {
    function t(r, n, i, o, a) {
      (this._reactName = r),
        (this._targetInst = i),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = a),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(o) : o[s]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Oa
          : ih),
        (this.isPropagationStopped = ih),
        this
      );
    }
    return (
      ge(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = Oa));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = Oa));
        },
        persist: function () {},
        isPersistent: Oa,
      }),
      t
    );
  }
  var Li = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    yd = vt(Li),
    ia = ge({}, Li, { view: 0, detail: 0 }),
    GS = vt(ia),
    yl,
    wl,
    eo,
    uu = ge({}, ia, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: wd,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== eo &&
              (eo && e.type === 'mousemove'
                ? ((yl = e.screenX - eo.screenX), (wl = e.screenY - eo.screenY))
                : (wl = yl = 0),
              (eo = e)),
            yl);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : wl;
      },
    }),
    oh = vt(uu),
    XS = ge({}, uu, { dataTransfer: 0 }),
    QS = vt(XS),
    ZS = ge({}, ia, { relatedTarget: 0 }),
    _l = vt(ZS),
    JS = ge({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ex = vt(JS),
    tx = ge({}, Li, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    rx = vt(tx),
    nx = ge({}, Li, { data: 0 }),
    ah = vt(nx),
    ix = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    ox = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    ax = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function sx(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ax[e])
      ? !!t[e]
      : !1;
  }
  function wd() {
    return sx;
  }
  var ux = ge({}, ia, {
      key: function (e) {
        if (e.key) {
          var t = ix[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Xa(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? ox[e.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wd,
      charCode: function (e) {
        return e.type === 'keypress' ? Xa(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Xa(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
      },
    }),
    lx = vt(ux),
    cx = ge({}, uu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    sh = vt(cx),
    fx = ge({}, ia, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wd,
    }),
    dx = vt(fx),
    px = ge({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hx = vt(px),
    gx = ge({}, uu, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    mx = vt(gx),
    vx = [9, 13, 27, 32],
    _d = _r && 'CompositionEvent' in window,
    bo = null;
  _r && 'documentMode' in document && (bo = document.documentMode);
  var yx = _r && 'TextEvent' in window && !bo,
    ky = _r && (!_d || (bo && 8 < bo && 11 >= bo)),
    uh = String.fromCharCode(32),
    lh = !1;
  function Ty(e, t) {
    switch (e) {
      case 'keyup':
        return vx.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ay(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var ri = !1;
  function wx(e, t) {
    switch (e) {
      case 'compositionend':
        return Ay(t);
      case 'keypress':
        return t.which !== 32 ? null : ((lh = !0), uh);
      case 'textInput':
        return (e = t.data), e === uh && lh ? null : e;
      default:
        return null;
    }
  }
  function _x(e, t) {
    if (ri)
      return e === 'compositionend' || (!_d && Ty(e, t))
        ? ((e = $y()), (Ga = vd = Dr = null), (ri = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return ky && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Sx = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ch(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Sx[e.type] : t === 'textarea';
  }
  function Ny(e, t, r, n) {
    ly(n),
      (t = _s(t, 'onChange')),
      0 < t.length &&
        ((r = new yd('onChange', 'change', null, r, n)),
        e.push({ event: r, listeners: t }));
  }
  var Eo = null,
    Do = null;
  function xx(e) {
    Hy(e, 0);
  }
  function lu(e) {
    var t = oi(e);
    if (ry(t)) return e;
  }
  function bx(e, t) {
    if (e === 'change') return t;
  }
  var Fy = !1;
  if (_r) {
    var Sl;
    if (_r) {
      var xl = 'oninput' in document;
      if (!xl) {
        var fh = document.createElement('div');
        fh.setAttribute('oninput', 'return;'),
          (xl = typeof fh.oninput == 'function');
      }
      Sl = xl;
    } else Sl = !1;
    Fy = Sl && (!document.documentMode || 9 < document.documentMode);
  }
  function dh() {
    Eo && (Eo.detachEvent('onpropertychange', Ry), (Do = Eo = null));
  }
  function Ry(e) {
    if (e.propertyName === 'value' && lu(Do)) {
      var t = [];
      Ny(t, Do, e, dd(e)), py(xx, t);
    }
  }
  function Ex(e, t, r) {
    e === 'focusin'
      ? (dh(), (Eo = t), (Do = r), Eo.attachEvent('onpropertychange', Ry))
      : e === 'focusout' && dh();
  }
  function Ox(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return lu(Do);
  }
  function Cx(e, t) {
    if (e === 'click') return lu(t);
  }
  function Px(e, t) {
    if (e === 'input' || e === 'change') return lu(t);
  }
  function $x(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var qt = typeof Object.is == 'function' ? Object.is : $x;
  function Mo(e, t) {
    if (qt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
      var i = r[n];
      if (!wc.call(t, i) || !qt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ph(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function hh(e, t) {
    var r = ph(e);
    e = 0;
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = ph(r);
    }
  }
  function Ly(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ly(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function jy() {
    for (var e = window, t = ps(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = ps(e.document);
    }
    return t;
  }
  function Sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function kx(e) {
    var t = jy(),
      r = e.focusedElem,
      n = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Ly(r.ownerDocument.documentElement, r)
    ) {
      if (n !== null && Sd(r)) {
        if (
          ((t = n.start),
          (e = n.end),
          e === void 0 && (e = t),
          'selectionStart' in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = r.textContent.length,
            o = Math.min(n.start, i);
          (n = n.end === void 0 ? o : Math.min(n.end, i)),
            !e.extend && o > n && ((i = n), (n = o), (o = i)),
            (i = hh(r, o));
          var a = hh(r, n);
          i &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > n
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Tx = _r && 'documentMode' in document && 11 >= document.documentMode,
    ni = null,
    Dc = null,
    Oo = null,
    Mc = !1;
  function gh(e, t, r) {
    var n =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Mc ||
      ni == null ||
      ni !== ps(n) ||
      ((n = ni),
      'selectionStart' in n && Sd(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (Oo && Mo(Oo, n)) ||
        ((Oo = n),
        (n = _s(Dc, 'onSelect')),
        0 < n.length &&
          ((t = new yd('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: n }),
          (t.target = ni))));
  }
  function Ca(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var ii = {
      animationend: Ca('Animation', 'AnimationEnd'),
      animationiteration: Ca('Animation', 'AnimationIteration'),
      animationstart: Ca('Animation', 'AnimationStart'),
      transitionend: Ca('Transition', 'TransitionEnd'),
    },
    bl = {},
    Iy = {};
  _r &&
    ((Iy = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ii.animationend.animation,
      delete ii.animationiteration.animation,
      delete ii.animationstart.animation),
    'TransitionEvent' in window || delete ii.transitionend.transition);
  function cu(e) {
    if (bl[e]) return bl[e];
    if (!ii[e]) return e;
    var t = ii[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Iy) return (bl[e] = t[r]);
    return e;
  }
  var Dy = cu('animationend'),
    My = cu('animationiteration'),
    Uy = cu('animationstart'),
    zy = cu('transitionend'),
    By = new Map(),
    mh =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function sn(e, t) {
    By.set(e, t), Nn(t, [e]);
  }
  for (var El = 0; El < mh.length; El++) {
    var Ol = mh[El],
      Ax = Ol.toLowerCase(),
      Nx = Ol[0].toUpperCase() + Ol.slice(1);
    sn(Ax, 'on' + Nx);
  }
  sn(Dy, 'onAnimationEnd');
  sn(My, 'onAnimationIteration');
  sn(Uy, 'onAnimationStart');
  sn('dblclick', 'onDoubleClick');
  sn('focusin', 'onFocus');
  sn('focusout', 'onBlur');
  sn(zy, 'onTransitionEnd');
  Ei('onMouseEnter', ['mouseout', 'mouseover']);
  Ei('onMouseLeave', ['mouseout', 'mouseover']);
  Ei('onPointerEnter', ['pointerout', 'pointerover']);
  Ei('onPointerLeave', ['pointerout', 'pointerover']);
  Nn(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' '
    )
  );
  Nn(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' '
    )
  );
  Nn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  Nn(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
  );
  Nn(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
  );
  Nn(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
  );
  var yo =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Fx = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(yo)
    );
  function vh(e, t, r) {
    var n = e.type || 'unknown-event';
    (e.currentTarget = r), AS(n, t, void 0, e), (e.currentTarget = null);
  }
  function Hy(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var n = e[r],
        i = n.event;
      n = n.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var a = n.length - 1; 0 <= a; a--) {
            var s = n[a],
              u = s.instance,
              l = s.currentTarget;
            if (((s = s.listener), u !== o && i.isPropagationStopped()))
              break e;
            vh(i, s, l), (o = u);
          }
        else
          for (a = 0; a < n.length; a++) {
            if (
              ((s = n[a]),
              (u = s.instance),
              (l = s.currentTarget),
              (s = s.listener),
              u !== o && i.isPropagationStopped())
            )
              break e;
            vh(i, s, l), (o = u);
          }
      }
    }
    if (gs) throw ((e = Rc), (gs = !1), (Rc = null), e);
  }
  function oe(e, t) {
    var r = t[Vc];
    r === void 0 && (r = t[Vc] = new Set());
    var n = e + '__bubble';
    r.has(n) || (Vy(t, e, 2, !1), r.add(n));
  }
  function Cl(e, t, r) {
    var n = 0;
    t && (n |= 4), Vy(r, e, n, t);
  }
  var Pa = '_reactListening' + Math.random().toString(36).slice(2);
  function Uo(e) {
    if (!e[Pa]) {
      (e[Pa] = !0),
        Qv.forEach(function (r) {
          r !== 'selectionchange' && (Fx.has(r) || Cl(r, !1, e), Cl(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Pa] || ((t[Pa] = !0), Cl('selectionchange', !1, t));
    }
  }
  function Vy(e, t, r, n) {
    switch (Py(t)) {
      case 1:
        var i = qS;
        break;
      case 4:
        i = YS;
        break;
      default:
        i = md;
    }
    (r = i.bind(null, t, r, e)),
      (i = void 0),
      !Fc ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (i = !0),
      n
        ? i !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: i })
          : e.addEventListener(t, r, !0)
        : i !== void 0
        ? e.addEventListener(t, r, { passive: i })
        : e.addEventListener(t, r, !1);
  }
  function Pl(e, t, r, n, i) {
    var o = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var a = n.tag;
        if (a === 3 || a === 4) {
          var s = n.stateNode.containerInfo;
          if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
          if (a === 4)
            for (a = n.return; a !== null; ) {
              var u = a.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = a.stateNode.containerInfo),
                u === i || (u.nodeType === 8 && u.parentNode === i))
              )
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (((a = _n(s)), a === null)) return;
            if (((u = a.tag), u === 5 || u === 6)) {
              n = o = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
    py(function () {
      var l = o,
        d = dd(r),
        f = [];
      e: {
        var c = By.get(e);
        if (c !== void 0) {
          var g = yd,
            m = e;
          switch (e) {
            case 'keypress':
              if (Xa(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              g = lx;
              break;
            case 'focusin':
              (m = 'focus'), (g = _l);
              break;
            case 'focusout':
              (m = 'blur'), (g = _l);
              break;
            case 'beforeblur':
            case 'afterblur':
              g = _l;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              g = oh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              g = QS;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              g = dx;
              break;
            case Dy:
            case My:
            case Uy:
              g = ex;
              break;
            case zy:
              g = hx;
              break;
            case 'scroll':
              g = GS;
              break;
            case 'wheel':
              g = mx;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              g = rx;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              g = sh;
          }
          var v = (t & 4) !== 0,
            S = !v && e === 'scroll',
            h = v ? (c !== null ? c + 'Capture' : null) : c;
          v = [];
          for (var p = l, y; p !== null; ) {
            y = p;
            var _ = y.stateNode;
            if (
              (y.tag === 5 &&
                _ !== null &&
                ((y = _),
                h !== null &&
                  ((_ = Ro(p, h)), _ != null && v.push(zo(p, _, y)))),
              S)
            )
              break;
            p = p.return;
          }
          0 < v.length &&
            ((c = new g(c, m, null, r, d)), f.push({ event: c, listeners: v }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((c = e === 'mouseover' || e === 'pointerover'),
            (g = e === 'mouseout' || e === 'pointerout'),
            c &&
              r !== Ac &&
              (m = r.relatedTarget || r.fromElement) &&
              (_n(m) || m[Sr]))
          )
            break e;
          if (
            (g || c) &&
            ((c =
              d.window === d
                ? d
                : (c = d.ownerDocument)
                ? c.defaultView || c.parentWindow
                : window),
            g
              ? ((m = r.relatedTarget || r.toElement),
                (g = l),
                (m = m ? _n(m) : null),
                m !== null &&
                  ((S = Fn(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                  (m = null))
              : ((g = null), (m = l)),
            g !== m)
          ) {
            if (
              ((v = oh),
              (_ = 'onMouseLeave'),
              (h = 'onMouseEnter'),
              (p = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((v = sh),
                (_ = 'onPointerLeave'),
                (h = 'onPointerEnter'),
                (p = 'pointer')),
              (S = g == null ? c : oi(g)),
              (y = m == null ? c : oi(m)),
              (c = new v(_, p + 'leave', g, r, d)),
              (c.target = S),
              (c.relatedTarget = y),
              (_ = null),
              _n(d) === l &&
                ((v = new v(h, p + 'enter', m, r, d)),
                (v.target = y),
                (v.relatedTarget = S),
                (_ = v)),
              (S = _),
              g && m)
            )
              t: {
                for (v = g, h = m, p = 0, y = v; y; y = Wn(y)) p++;
                for (y = 0, _ = h; _; _ = Wn(_)) y++;
                for (; 0 < p - y; ) (v = Wn(v)), p--;
                for (; 0 < y - p; ) (h = Wn(h)), y--;
                for (; p--; ) {
                  if (v === h || (h !== null && v === h.alternate)) break t;
                  (v = Wn(v)), (h = Wn(h));
                }
                v = null;
              }
            else v = null;
            g !== null && yh(f, c, g, v, !1),
              m !== null && S !== null && yh(f, S, m, v, !0);
          }
        }
        e: {
          if (
            ((c = l ? oi(l) : window),
            (g = c.nodeName && c.nodeName.toLowerCase()),
            g === 'select' || (g === 'input' && c.type === 'file'))
          )
            var x = bx;
          else if (ch(c))
            if (Fy) x = Px;
            else {
              x = Ox;
              var E = Ex;
            }
          else
            (g = c.nodeName) &&
              g.toLowerCase() === 'input' &&
              (c.type === 'checkbox' || c.type === 'radio') &&
              (x = Cx);
          if (x && (x = x(e, l))) {
            Ny(f, x, r, d);
            break e;
          }
          E && E(e, c, l),
            e === 'focusout' &&
              (E = c._wrapperState) &&
              E.controlled &&
              c.type === 'number' &&
              Cc(c, 'number', c.value);
        }
        switch (((E = l ? oi(l) : window), e)) {
          case 'focusin':
            (ch(E) || E.contentEditable === 'true') &&
              ((ni = E), (Dc = l), (Oo = null));
            break;
          case 'focusout':
            Oo = Dc = ni = null;
            break;
          case 'mousedown':
            Mc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Mc = !1), gh(f, r, d);
            break;
          case 'selectionchange':
            if (Tx) break;
          case 'keydown':
          case 'keyup':
            gh(f, r, d);
        }
        var $;
        if (_d)
          e: {
            switch (e) {
              case 'compositionstart':
                var k = 'onCompositionStart';
                break e;
              case 'compositionend':
                k = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                k = 'onCompositionUpdate';
                break e;
            }
            k = void 0;
          }
        else
          ri
            ? Ty(e, r) && (k = 'onCompositionEnd')
            : e === 'keydown' &&
              r.keyCode === 229 &&
              (k = 'onCompositionStart');
        k &&
          (ky &&
            r.locale !== 'ko' &&
            (ri || k !== 'onCompositionStart'
              ? k === 'onCompositionEnd' && ri && ($ = $y())
              : ((Dr = d),
                (vd = 'value' in Dr ? Dr.value : Dr.textContent),
                (ri = !0))),
          (E = _s(l, k)),
          0 < E.length &&
            ((k = new ah(k, e, null, r, d)),
            f.push({ event: k, listeners: E }),
            $ ? (k.data = $) : (($ = Ay(r)), $ !== null && (k.data = $)))),
          ($ = yx ? wx(e, r) : _x(e, r)) &&
            ((l = _s(l, 'onBeforeInput')),
            0 < l.length &&
              ((d = new ah('onBeforeInput', 'beforeinput', null, r, d)),
              f.push({ event: d, listeners: l }),
              (d.data = $)));
      }
      Hy(f, t);
    });
  }
  function zo(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function _s(e, t) {
    for (var r = t + 'Capture', n = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 &&
        o !== null &&
        ((i = o),
        (o = Ro(e, r)),
        o != null && n.unshift(zo(e, o, i)),
        (o = Ro(e, t)),
        o != null && n.push(zo(e, o, i))),
        (e = e.return);
    }
    return n;
  }
  function Wn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function yh(e, t, r, n, i) {
    for (var o = t._reactName, a = []; r !== null && r !== n; ) {
      var s = r,
        u = s.alternate,
        l = s.stateNode;
      if (u !== null && u === n) break;
      s.tag === 5 &&
        l !== null &&
        ((s = l),
        i
          ? ((u = Ro(r, o)), u != null && a.unshift(zo(r, u, s)))
          : i || ((u = Ro(r, o)), u != null && a.push(zo(r, u, s)))),
        (r = r.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var Rx = /\r\n?/g,
    Lx = /\u0000|\uFFFD/g;
  function wh(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Rx,
        `
`
      )
      .replace(Lx, '');
  }
  function $a(e, t, r) {
    if (((t = wh(t)), wh(e) !== t && r)) throw Error(T(425));
  }
  function Ss() {}
  var Uc = null,
    zc = null;
  function Bc(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Hc = typeof setTimeout == 'function' ? setTimeout : void 0,
    jx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    _h = typeof Promise == 'function' ? Promise : void 0,
    Ix =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof _h < 'u'
        ? function (e) {
            return _h.resolve(null).then(e).catch(Dx);
          }
        : Hc;
  function Dx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function $l(e, t) {
    var r = t,
      n = 0;
    do {
      var i = r.nextSibling;
      if ((e.removeChild(r), i && i.nodeType === 8))
        if (((r = i.data), r === '/$')) {
          if (n === 0) {
            e.removeChild(i), Io(t);
            return;
          }
          n--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || n++;
      r = i;
    } while (r);
    Io(t);
  }
  function Vr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Sh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ji = Math.random().toString(36).slice(2),
    tr = '__reactFiber$' + ji,
    Bo = '__reactProps$' + ji,
    Sr = '__reactContainer$' + ji,
    Vc = '__reactEvents$' + ji,
    Mx = '__reactListeners$' + ji,
    Ux = '__reactHandles$' + ji;
  function _n(e) {
    var t = e[tr];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Sr] || r[tr])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Sh(e); e !== null; ) {
            if ((r = e[tr])) return r;
            e = Sh(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function oa(e) {
    return (
      (e = e[tr] || e[Sr]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function oi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(T(33));
  }
  function fu(e) {
    return e[Bo] || null;
  }
  var Wc = [],
    ai = -1;
  function un(e) {
    return { current: e };
  }
  function ue(e) {
    0 > ai || ((e.current = Wc[ai]), (Wc[ai] = null), ai--);
  }
  function ie(e, t) {
    ai++, (Wc[ai] = e.current), (e.current = t);
  }
  var tn = {},
    qe = un(tn),
    rt = un(!1),
    On = tn;
  function Oi(e, t) {
    var r = e.type.contextTypes;
    if (!r) return tn;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
      return n.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in r) i[o] = t[o];
    return (
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function nt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function xs() {
    ue(rt), ue(qe);
  }
  function xh(e, t, r) {
    if (qe.current !== tn) throw Error(T(168));
    ie(qe, t), ie(rt, r);
  }
  function Wy(e, t, r) {
    var n = e.stateNode;
    if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
      return r;
    n = n.getChildContext();
    for (var i in n) if (!(i in t)) throw Error(T(108, ES(e) || 'Unknown', i));
    return ge({}, r, n);
  }
  function bs(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        tn),
      (On = qe.current),
      ie(qe, e),
      ie(rt, rt.current),
      !0
    );
  }
  function bh(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(T(169));
    r
      ? ((e = Wy(e, t, On)),
        (n.__reactInternalMemoizedMergedChildContext = e),
        ue(rt),
        ue(qe),
        ie(qe, e))
      : ue(rt),
      ie(rt, r);
  }
  var hr = null,
    du = !1,
    kl = !1;
  function Ky(e) {
    hr === null ? (hr = [e]) : hr.push(e);
  }
  function zx(e) {
    (du = !0), Ky(e);
  }
  function ln() {
    if (!kl && hr !== null) {
      kl = !0;
      var e = 0,
        t = ee;
      try {
        var r = hr;
        for (ee = 1; e < r.length; e++) {
          var n = r[e];
          do n = n(!0);
          while (n !== null);
        }
        (hr = null), (du = !1);
      } catch (i) {
        throw (hr !== null && (hr = hr.slice(e + 1)), vy(pd, ln), i);
      } finally {
        (ee = t), (kl = !1);
      }
    }
    return null;
  }
  var si = [],
    ui = 0,
    Es = null,
    Os = 0,
    Et = [],
    Ot = 0,
    Cn = null,
    gr = 1,
    mr = '';
  function hn(e, t) {
    (si[ui++] = Os), (si[ui++] = Es), (Es = e), (Os = t);
  }
  function qy(e, t, r) {
    (Et[Ot++] = gr), (Et[Ot++] = mr), (Et[Ot++] = Cn), (Cn = e);
    var n = gr;
    e = mr;
    var i = 32 - Wt(n) - 1;
    (n &= ~(1 << i)), (r += 1);
    var o = 32 - Wt(t) + i;
    if (30 < o) {
      var a = i - (i % 5);
      (o = (n & ((1 << a) - 1)).toString(32)),
        (n >>= a),
        (i -= a),
        (gr = (1 << (32 - Wt(t) + i)) | (r << i) | n),
        (mr = o + e);
    } else (gr = (1 << o) | (r << i) | n), (mr = e);
  }
  function xd(e) {
    e.return !== null && (hn(e, 1), qy(e, 1, 0));
  }
  function bd(e) {
    for (; e === Es; )
      (Es = si[--ui]), (si[ui] = null), (Os = si[--ui]), (si[ui] = null);
    for (; e === Cn; )
      (Cn = Et[--Ot]),
        (Et[Ot] = null),
        (mr = Et[--Ot]),
        (Et[Ot] = null),
        (gr = Et[--Ot]),
        (Et[Ot] = null);
  }
  var pt = null,
    ut = null,
    ce = !1,
    Bt = null;
  function Yy(e, t) {
    var r = Ct(5, null, null, 0);
    (r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Eh(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (pt = e), (ut = Vr(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (ut = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Cn !== null ? { id: gr, overflow: mr } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Ct(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (pt = e),
              (ut = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Kc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function qc(e) {
    if (ce) {
      var t = ut;
      if (t) {
        var r = t;
        if (!Eh(e, t)) {
          if (Kc(e)) throw Error(T(418));
          t = Vr(r.nextSibling);
          var n = pt;
          t && Eh(e, t)
            ? Yy(n, r)
            : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (pt = e));
        }
      } else {
        if (Kc(e)) throw Error(T(418));
        (e.flags = (e.flags & -4097) | 2), (ce = !1), (pt = e);
      }
    }
  }
  function Oh(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    pt = e;
  }
  function ka(e) {
    if (e !== pt) return !1;
    if (!ce) return Oh(e), (ce = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !Bc(e.type, e.memoizedProps))),
      t && (t = ut))
    ) {
      if (Kc(e)) throw (Gy(), Error(T(418)));
      for (; t; ) Yy(e, t), (t = Vr(t.nextSibling));
    }
    if ((Oh(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(T(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                ut = Vr(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = pt ? Vr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Gy() {
    for (var e = ut; e; ) e = Vr(e.nextSibling);
  }
  function Ci() {
    (ut = pt = null), (ce = !1);
  }
  function Ed(e) {
    Bt === null ? (Bt = [e]) : Bt.push(e);
  }
  var Bx = Or.ReactCurrentBatchConfig;
  function Mt(e, t) {
    if (e && e.defaultProps) {
      (t = ge({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  var Cs = un(null),
    Ps = null,
    li = null,
    Od = null;
  function Cd() {
    Od = li = Ps = null;
  }
  function Pd(e) {
    var t = Cs.current;
    ue(Cs), (e._currentValue = t);
  }
  function Yc(e, t, r) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function yi(e, t) {
    (Ps = e),
      (Od = li = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (tt = !0), (e.firstContext = null));
  }
  function kt(e) {
    var t = e._currentValue;
    if (Od !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), li === null)) {
        if (Ps === null) throw Error(T(308));
        (li = e), (Ps.dependencies = { lanes: 0, firstContext: e });
      } else li = li.next = e;
    return t;
  }
  var Sn = null;
  function $d(e) {
    Sn === null ? (Sn = [e]) : Sn.push(e);
  }
  function Xy(e, t, r, n) {
    var i = t.interleaved;
    return (
      i === null ? ((r.next = r), $d(t)) : ((r.next = i.next), (i.next = r)),
      (t.interleaved = r),
      xr(e, n)
    );
  }
  function xr(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var Nr = !1;
  function kd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Qy(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function vr(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Wr(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (G & 2) !== 0)) {
      var i = n.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (n.pending = t),
        xr(e, r)
      );
    }
    return (
      (i = n.interleaved),
      i === null ? ((t.next = t), $d(n)) : ((t.next = i.next), (i.next = t)),
      (n.interleaved = t),
      xr(e, r)
    );
  }
  function Qa(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), hd(e, r);
    }
  }
  function Ch(e, t) {
    var r = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), r === n)) {
      var i = null,
        o = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var a = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          o === null ? (i = o = a) : (o = o.next = a), (r = r.next);
        } while (r !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      (r = {
        baseState: n.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: n.shared,
        effects: n.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function $s(e, t, r, n) {
    var i = e.updateQueue;
    Nr = !1;
    var o = i.firstBaseUpdate,
      a = i.lastBaseUpdate,
      s = i.shared.pending;
    if (s !== null) {
      i.shared.pending = null;
      var u = s,
        l = u.next;
      (u.next = null), a === null ? (o = l) : (a.next = l), (a = u);
      var d = e.alternate;
      d !== null &&
        ((d = d.updateQueue),
        (s = d.lastBaseUpdate),
        s !== a &&
          (s === null ? (d.firstBaseUpdate = l) : (s.next = l),
          (d.lastBaseUpdate = u)));
    }
    if (o !== null) {
      var f = i.baseState;
      (a = 0), (d = l = u = null), (s = o);
      do {
        var c = s.lane,
          g = s.eventTime;
        if ((n & c) === c) {
          d !== null &&
            (d = d.next =
              {
                eventTime: g,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var m = e,
              v = s;
            switch (((c = t), (g = r), v.tag)) {
              case 1:
                if (((m = v.payload), typeof m == 'function')) {
                  f = m.call(g, f, c);
                  break e;
                }
                f = m;
                break e;
              case 3:
                m.flags = (m.flags & -65537) | 128;
              case 0:
                if (
                  ((m = v.payload),
                  (c = typeof m == 'function' ? m.call(g, f, c) : m),
                  c == null)
                )
                  break e;
                f = ge({}, f, c);
                break e;
              case 2:
                Nr = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (c = i.effects),
            c === null ? (i.effects = [s]) : c.push(s));
        } else
          (g = {
            eventTime: g,
            lane: c,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            d === null ? ((l = d = g), (u = f)) : (d = d.next = g),
            (a |= c);
        if (((s = s.next), s === null)) {
          if (((s = i.shared.pending), s === null)) break;
          (c = s),
            (s = c.next),
            (c.next = null),
            (i.lastBaseUpdate = c),
            (i.shared.pending = null);
        }
      } while (1);
      if (
        (d === null && (u = f),
        (i.baseState = u),
        (i.firstBaseUpdate = l),
        (i.lastBaseUpdate = d),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (a |= i.lane), (i = i.next);
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      ($n |= a), (e.lanes = a), (e.memoizedState = f);
    }
  }
  function Ph(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var n = e[t],
          i = n.callback;
        if (i !== null) {
          if (((n.callback = null), (n = r), typeof i != 'function'))
            throw Error(T(191, i));
          i.call(n);
        }
      }
  }
  var Zy = new Xv.Component().refs;
  function Gc(e, t, r, n) {
    (t = e.memoizedState),
      (r = r(n, t)),
      (r = r == null ? t : ge({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var pu = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Fn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var n = Qe(),
        i = qr(e),
        o = vr(n, i);
      (o.payload = t),
        r != null && (o.callback = r),
        (t = Wr(e, o, i)),
        t !== null && (Kt(t, e, i, n), Qa(t, e, i));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var n = Qe(),
        i = qr(e),
        o = vr(n, i);
      (o.tag = 1),
        (o.payload = t),
        r != null && (o.callback = r),
        (t = Wr(e, o, i)),
        t !== null && (Kt(t, e, i, n), Qa(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Qe(),
        n = qr(e),
        i = vr(r, n);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Wr(e, i, n)),
        t !== null && (Kt(t, e, n, r), Qa(t, e, n));
    },
  };
  function $h(e, t, r, n, i, o, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(n, o, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Mo(r, n) || !Mo(i, o)
        : !0
    );
  }
  function Jy(e, t, r) {
    var n = !1,
      i = tn,
      o = t.contextType;
    return (
      typeof o == 'object' && o !== null
        ? (o = kt(o))
        : ((i = nt(t) ? On : qe.current),
          (n = t.contextTypes),
          (o = (n = n != null) ? Oi(e, i) : tn)),
      (t = new t(r, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = pu),
      (e.stateNode = t),
      (t._reactInternals = e),
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function kh(e, t, r, n) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && pu.enqueueReplaceState(t, t.state, null);
  }
  function Xc(e, t, r, n) {
    var i = e.stateNode;
    (i.props = r), (i.state = e.memoizedState), (i.refs = Zy), kd(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
      ? (i.context = kt(o))
      : ((o = nt(t) ? On : qe.current), (i.context = Oi(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == 'function' && (Gc(e, t, o, r), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function' ||
        (typeof i.UNSAFE_componentWillMount != 'function' &&
          typeof i.componentWillMount != 'function') ||
        ((t = i.state),
        typeof i.componentWillMount == 'function' && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == 'function' &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && pu.enqueueReplaceState(i, i.state, null),
        $s(e, r, i, n),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function to(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(T(309));
          var n = r.stateNode;
        }
        if (!n) throw Error(T(147, e));
        var i = n,
          o = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (a) {
              var s = i.refs;
              s === Zy && (s = i.refs = {}),
                a === null ? delete s[o] : (s[o] = a);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != 'string') throw Error(T(284));
      if (!r._owner) throw Error(T(290, e));
    }
    return e;
  }
  function Ta(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        T(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ))
    );
  }
  function Th(e) {
    var t = e._init;
    return t(e._payload);
  }
  function e0(e) {
    function t(h, p) {
      if (e) {
        var y = h.deletions;
        y === null ? ((h.deletions = [p]), (h.flags |= 16)) : y.push(p);
      }
    }
    function r(h, p) {
      if (!e) return null;
      for (; p !== null; ) t(h, p), (p = p.sibling);
      return null;
    }
    function n(h, p) {
      for (h = new Map(); p !== null; )
        p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
      return h;
    }
    function i(h, p) {
      return (h = Yr(h, p)), (h.index = 0), (h.sibling = null), h;
    }
    function o(h, p, y) {
      return (
        (h.index = y),
        e
          ? ((y = h.alternate),
            y !== null
              ? ((y = y.index), y < p ? ((h.flags |= 2), p) : y)
              : ((h.flags |= 2), p))
          : ((h.flags |= 1048576), p)
      );
    }
    function a(h) {
      return e && h.alternate === null && (h.flags |= 2), h;
    }
    function s(h, p, y, _) {
      return p === null || p.tag !== 6
        ? ((p = jl(y, h.mode, _)), (p.return = h), p)
        : ((p = i(p, y)), (p.return = h), p);
    }
    function u(h, p, y, _) {
      var x = y.type;
      return x === ti
        ? d(h, p, y.props.children, _, y.key)
        : p !== null &&
          (p.elementType === x ||
            (typeof x == 'object' &&
              x !== null &&
              x.$$typeof === Ar &&
              Th(x) === p.type))
        ? ((_ = i(p, y.props)), (_.ref = to(h, p, y)), (_.return = h), _)
        : ((_ = ns(y.type, y.key, y.props, null, h.mode, _)),
          (_.ref = to(h, p, y)),
          (_.return = h),
          _);
    }
    function l(h, p, y, _) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== y.containerInfo ||
        p.stateNode.implementation !== y.implementation
        ? ((p = Il(y, h.mode, _)), (p.return = h), p)
        : ((p = i(p, y.children || [])), (p.return = h), p);
    }
    function d(h, p, y, _, x) {
      return p === null || p.tag !== 7
        ? ((p = En(y, h.mode, _, x)), (p.return = h), p)
        : ((p = i(p, y)), (p.return = h), p);
    }
    function f(h, p, y) {
      if ((typeof p == 'string' && p !== '') || typeof p == 'number')
        return (p = jl('' + p, h.mode, y)), (p.return = h), p;
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case wa:
            return (
              (y = ns(p.type, p.key, p.props, null, h.mode, y)),
              (y.ref = to(h, null, p)),
              (y.return = h),
              y
            );
          case ei:
            return (p = Il(p, h.mode, y)), (p.return = h), p;
          case Ar:
            var _ = p._init;
            return f(h, _(p._payload), y);
        }
        if (mo(p) || Xi(p))
          return (p = En(p, h.mode, y, null)), (p.return = h), p;
        Ta(h, p);
      }
      return null;
    }
    function c(h, p, y, _) {
      var x = p !== null ? p.key : null;
      if ((typeof y == 'string' && y !== '') || typeof y == 'number')
        return x !== null ? null : s(h, p, '' + y, _);
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case wa:
            return y.key === x ? u(h, p, y, _) : null;
          case ei:
            return y.key === x ? l(h, p, y, _) : null;
          case Ar:
            return (x = y._init), c(h, p, x(y._payload), _);
        }
        if (mo(y) || Xi(y)) return x !== null ? null : d(h, p, y, _, null);
        Ta(h, y);
      }
      return null;
    }
    function g(h, p, y, _, x) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return (h = h.get(y) || null), s(p, h, '' + _, x);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case wa:
            return (
              (h = h.get(_.key === null ? y : _.key) || null), u(p, h, _, x)
            );
          case ei:
            return (
              (h = h.get(_.key === null ? y : _.key) || null), l(p, h, _, x)
            );
          case Ar:
            var E = _._init;
            return g(h, p, y, E(_._payload), x);
        }
        if (mo(_) || Xi(_)) return (h = h.get(y) || null), d(p, h, _, x, null);
        Ta(p, _);
      }
      return null;
    }
    function m(h, p, y, _) {
      for (
        var x = null, E = null, $ = p, k = (p = 0), D = null;
        $ !== null && k < y.length;
        k++
      ) {
        $.index > k ? ((D = $), ($ = null)) : (D = $.sibling);
        var F = c(h, $, y[k], _);
        if (F === null) {
          $ === null && ($ = D);
          break;
        }
        e && $ && F.alternate === null && t(h, $),
          (p = o(F, p, k)),
          E === null ? (x = F) : (E.sibling = F),
          (E = F),
          ($ = D);
      }
      if (k === y.length) return r(h, $), ce && hn(h, k), x;
      if ($ === null) {
        for (; k < y.length; k++)
          ($ = f(h, y[k], _)),
            $ !== null &&
              ((p = o($, p, k)),
              E === null ? (x = $) : (E.sibling = $),
              (E = $));
        return ce && hn(h, k), x;
      }
      for ($ = n(h, $); k < y.length; k++)
        (D = g($, h, k, y[k], _)),
          D !== null &&
            (e && D.alternate !== null && $.delete(D.key === null ? k : D.key),
            (p = o(D, p, k)),
            E === null ? (x = D) : (E.sibling = D),
            (E = D));
      return (
        e &&
          $.forEach(function (z) {
            return t(h, z);
          }),
        ce && hn(h, k),
        x
      );
    }
    function v(h, p, y, _) {
      var x = Xi(y);
      if (typeof x != 'function') throw Error(T(150));
      if (((y = x.call(y)), y == null)) throw Error(T(151));
      for (
        var E = (x = null), $ = p, k = (p = 0), D = null, F = y.next();
        $ !== null && !F.done;
        k++, F = y.next()
      ) {
        $.index > k ? ((D = $), ($ = null)) : (D = $.sibling);
        var z = c(h, $, F.value, _);
        if (z === null) {
          $ === null && ($ = D);
          break;
        }
        e && $ && z.alternate === null && t(h, $),
          (p = o(z, p, k)),
          E === null ? (x = z) : (E.sibling = z),
          (E = z),
          ($ = D);
      }
      if (F.done) return r(h, $), ce && hn(h, k), x;
      if ($ === null) {
        for (; !F.done; k++, F = y.next())
          (F = f(h, F.value, _)),
            F !== null &&
              ((p = o(F, p, k)),
              E === null ? (x = F) : (E.sibling = F),
              (E = F));
        return ce && hn(h, k), x;
      }
      for ($ = n(h, $); !F.done; k++, F = y.next())
        (F = g($, h, k, F.value, _)),
          F !== null &&
            (e && F.alternate !== null && $.delete(F.key === null ? k : F.key),
            (p = o(F, p, k)),
            E === null ? (x = F) : (E.sibling = F),
            (E = F));
      return (
        e &&
          $.forEach(function (me) {
            return t(h, me);
          }),
        ce && hn(h, k),
        x
      );
    }
    function S(h, p, y, _) {
      if (
        (typeof y == 'object' &&
          y !== null &&
          y.type === ti &&
          y.key === null &&
          (y = y.props.children),
        typeof y == 'object' && y !== null)
      ) {
        switch (y.$$typeof) {
          case wa:
            e: {
              for (var x = y.key, E = p; E !== null; ) {
                if (E.key === x) {
                  if (((x = y.type), x === ti)) {
                    if (E.tag === 7) {
                      r(h, E.sibling),
                        (p = i(E, y.props.children)),
                        (p.return = h),
                        (h = p);
                      break e;
                    }
                  } else if (
                    E.elementType === x ||
                    (typeof x == 'object' &&
                      x !== null &&
                      x.$$typeof === Ar &&
                      Th(x) === E.type)
                  ) {
                    r(h, E.sibling),
                      (p = i(E, y.props)),
                      (p.ref = to(h, E, y)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                  r(h, E);
                  break;
                } else t(h, E);
                E = E.sibling;
              }
              y.type === ti
                ? ((p = En(y.props.children, h.mode, _, y.key)),
                  (p.return = h),
                  (h = p))
                : ((_ = ns(y.type, y.key, y.props, null, h.mode, _)),
                  (_.ref = to(h, p, y)),
                  (_.return = h),
                  (h = _));
            }
            return a(h);
          case ei:
            e: {
              for (E = y.key; p !== null; ) {
                if (p.key === E)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === y.containerInfo &&
                    p.stateNode.implementation === y.implementation
                  ) {
                    r(h, p.sibling),
                      (p = i(p, y.children || [])),
                      (p.return = h),
                      (h = p);
                    break e;
                  } else {
                    r(h, p);
                    break;
                  }
                else t(h, p);
                p = p.sibling;
              }
              (p = Il(y, h.mode, _)), (p.return = h), (h = p);
            }
            return a(h);
          case Ar:
            return (E = y._init), S(h, p, E(y._payload), _);
        }
        if (mo(y)) return m(h, p, y, _);
        if (Xi(y)) return v(h, p, y, _);
        Ta(h, y);
      }
      return (typeof y == 'string' && y !== '') || typeof y == 'number'
        ? ((y = '' + y),
          p !== null && p.tag === 6
            ? (r(h, p.sibling), (p = i(p, y)), (p.return = h), (h = p))
            : (r(h, p), (p = jl(y, h.mode, _)), (p.return = h), (h = p)),
          a(h))
        : r(h, p);
    }
    return S;
  }
  var Pi = e0(!0),
    t0 = e0(!1),
    aa = {},
    or = un(aa),
    Ho = un(aa),
    Vo = un(aa);
  function xn(e) {
    if (e === aa) throw Error(T(174));
    return e;
  }
  function Td(e, t) {
    switch ((ie(Vo, t), ie(Ho, e), ie(or, aa), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $c(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = $c(t, e));
    }
    ue(or), ie(or, t);
  }
  function $i() {
    ue(or), ue(Ho), ue(Vo);
  }
  function r0(e) {
    xn(Vo.current);
    var t = xn(or.current),
      r = $c(t, e.type);
    t !== r && (ie(Ho, e), ie(or, r));
  }
  function Ad(e) {
    Ho.current === e && (ue(or), ue(Ho));
  }
  var pe = un(0);
  function ks(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Tl = [];
  function Nd() {
    for (var e = 0; e < Tl.length; e++)
      Tl[e]._workInProgressVersionPrimary = null;
    Tl.length = 0;
  }
  var Za = Or.ReactCurrentDispatcher,
    Al = Or.ReactCurrentBatchConfig,
    Pn = 0,
    he = null,
    $e = null,
    Ne = null,
    Ts = !1,
    Co = !1,
    Wo = 0,
    Hx = 0;
  function He() {
    throw Error(T(321));
  }
  function Fd(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!qt(e[r], t[r])) return !1;
    return !0;
  }
  function Rd(e, t, r, n, i, o) {
    if (
      ((Pn = o),
      (he = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Za.current = e === null || e.memoizedState === null ? qx : Yx),
      (e = r(n, i)),
      Co)
    ) {
      o = 0;
      do {
        if (((Co = !1), (Wo = 0), 25 <= o)) throw Error(T(301));
        (o += 1),
          (Ne = $e = null),
          (t.updateQueue = null),
          (Za.current = Gx),
          (e = r(n, i));
      } while (Co);
    }
    if (
      ((Za.current = As),
      (t = $e !== null && $e.next !== null),
      (Pn = 0),
      (Ne = $e = he = null),
      (Ts = !1),
      t)
    )
      throw Error(T(300));
    return e;
  }
  function Ld() {
    var e = Wo !== 0;
    return (Wo = 0), e;
  }
  function er() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ne === null ? (he.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
  }
  function Tt() {
    if ($e === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = Ne === null ? he.memoizedState : Ne.next;
    if (t !== null) (Ne = t), ($e = e);
    else {
      if (e === null) throw Error(T(310));
      ($e = e),
        (e = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        Ne === null ? (he.memoizedState = Ne = e) : (Ne = Ne.next = e);
    }
    return Ne;
  }
  function Ko(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Nl(e) {
    var t = Tt(),
      r = t.queue;
    if (r === null) throw Error(T(311));
    r.lastRenderedReducer = e;
    var n = $e,
      i = n.baseQueue,
      o = r.pending;
    if (o !== null) {
      if (i !== null) {
        var a = i.next;
        (i.next = o.next), (o.next = a);
      }
      (n.baseQueue = i = o), (r.pending = null);
    }
    if (i !== null) {
      (o = i.next), (n = n.baseState);
      var s = (a = null),
        u = null,
        l = o;
      do {
        var d = l.lane;
        if ((Pn & d) === d)
          u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null,
              }),
            (n = l.hasEagerState ? l.eagerState : e(n, l.action));
        else {
          var f = {
            lane: d,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null,
          };
          u === null ? ((s = u = f), (a = n)) : (u = u.next = f),
            (he.lanes |= d),
            ($n |= d);
        }
        l = l.next;
      } while (l !== null && l !== o);
      u === null ? (a = n) : (u.next = s),
        qt(n, t.memoizedState) || (tt = !0),
        (t.memoizedState = n),
        (t.baseState = a),
        (t.baseQueue = u),
        (r.lastRenderedState = n);
    }
    if (((e = r.interleaved), e !== null)) {
      i = e;
      do (o = i.lane), (he.lanes |= o), ($n |= o), (i = i.next);
      while (i !== e);
    } else i === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Fl(e) {
    var t = Tt(),
      r = t.queue;
    if (r === null) throw Error(T(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
      i = r.pending,
      o = t.memoizedState;
    if (i !== null) {
      r.pending = null;
      var a = (i = i.next);
      do (o = e(o, a.action)), (a = a.next);
      while (a !== i);
      qt(o, t.memoizedState) || (tt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (r.lastRenderedState = o);
    }
    return [o, n];
  }
  function n0() {}
  function i0(e, t) {
    var r = he,
      n = Tt(),
      i = t(),
      o = !qt(n.memoizedState, i);
    if (
      (o && ((n.memoizedState = i), (tt = !0)),
      (n = n.queue),
      jd(s0.bind(null, r, n, e), [e]),
      n.getSnapshot !== t || o || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        qo(9, a0.bind(null, r, n, i, t), void 0, null),
        Fe === null)
      )
        throw Error(T(349));
      (Pn & 30) !== 0 || o0(r, t, i);
    }
    return i;
  }
  function o0(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = he.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (he.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function a0(e, t, r, n) {
    (t.value = r), (t.getSnapshot = n), u0(t) && l0(e);
  }
  function s0(e, t, r) {
    return r(function () {
      u0(t) && l0(e);
    });
  }
  function u0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !qt(e, r);
    } catch {
      return !0;
    }
  }
  function l0(e) {
    var t = xr(e, 1);
    t !== null && Kt(t, e, 1, -1);
  }
  function Ah(e) {
    var t = er();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ko,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Kx.bind(null, he, e)),
      [t.memoizedState, e]
    );
  }
  function qo(e, t, r, n) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
      (t = he.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (he.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
      e
    );
  }
  function c0() {
    return Tt().memoizedState;
  }
  function Ja(e, t, r, n) {
    var i = er();
    (he.flags |= e),
      (i.memoizedState = qo(1 | t, r, void 0, n === void 0 ? null : n));
  }
  function hu(e, t, r, n) {
    var i = Tt();
    n = n === void 0 ? null : n;
    var o = void 0;
    if ($e !== null) {
      var a = $e.memoizedState;
      if (((o = a.destroy), n !== null && Fd(n, a.deps))) {
        i.memoizedState = qo(t, r, o, n);
        return;
      }
    }
    (he.flags |= e), (i.memoizedState = qo(1 | t, r, o, n));
  }
  function Nh(e, t) {
    return Ja(8390656, 8, e, t);
  }
  function jd(e, t) {
    return hu(2048, 8, e, t);
  }
  function f0(e, t) {
    return hu(4, 2, e, t);
  }
  function d0(e, t) {
    return hu(4, 4, e, t);
  }
  function p0(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function h0(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), hu(4, 4, p0.bind(null, t, e), r)
    );
  }
  function Id() {}
  function g0(e, t) {
    var r = Tt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Fd(t, n[1])
      ? n[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function m0(e, t) {
    var r = Tt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Fd(t, n[1])
      ? n[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function v0(e, t, r) {
    return (Pn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = r))
      : (qt(r, t) ||
          ((r = _y()), (he.lanes |= r), ($n |= r), (e.baseState = !0)),
        t);
  }
  function Vx(e, t) {
    var r = ee;
    (ee = r !== 0 && 4 > r ? r : 4), e(!0);
    var n = Al.transition;
    Al.transition = {};
    try {
      e(!1), t();
    } finally {
      (ee = r), (Al.transition = n);
    }
  }
  function y0() {
    return Tt().memoizedState;
  }
  function Wx(e, t, r) {
    var n = qr(e);
    if (
      ((r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      w0(e))
    )
      _0(t, r);
    else if (((r = Xy(e, t, r, n)), r !== null)) {
      var i = Qe();
      Kt(r, e, n, i), S0(r, t, n);
    }
  }
  function Kx(e, t, r) {
    var n = qr(e),
      i = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (w0(e)) _0(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var a = t.lastRenderedState,
            s = o(a, r);
          if (((i.hasEagerState = !0), (i.eagerState = s), qt(s, a))) {
            var u = t.interleaved;
            u === null
              ? ((i.next = i), $d(t))
              : ((i.next = u.next), (u.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (r = Xy(e, t, i, n)),
        r !== null && ((i = Qe()), Kt(r, e, n, i), S0(r, t, n));
    }
  }
  function w0(e) {
    var t = e.alternate;
    return e === he || (t !== null && t === he);
  }
  function _0(e, t) {
    Co = Ts = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function S0(e, t, r) {
    if ((r & 4194240) !== 0) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), hd(e, r);
    }
  }
  var As = {
      readContext: kt,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
      unstable_isNewReconciler: !1,
    },
    qx = {
      readContext: kt,
      useCallback: function (e, t) {
        return (er().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: kt,
      useEffect: Nh,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Ja(4194308, 4, p0.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ja(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ja(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = er();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var n = er();
        return (
          (t = r !== void 0 ? r(t) : t),
          (n.memoizedState = n.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (n.queue = e),
          (e = e.dispatch = Wx.bind(null, he, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = er();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ah,
      useDebugValue: Id,
      useDeferredValue: function (e) {
        return (er().memoizedState = e);
      },
      useTransition: function () {
        var e = Ah(!1),
          t = e[0];
        return (e = Vx.bind(null, e[1])), (er().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var n = he,
          i = er();
        if (ce) {
          if (r === void 0) throw Error(T(407));
          r = r();
        } else {
          if (((r = t()), Fe === null)) throw Error(T(349));
          (Pn & 30) !== 0 || o0(n, t, r);
        }
        i.memoizedState = r;
        var o = { value: r, getSnapshot: t };
        return (
          (i.queue = o),
          Nh(s0.bind(null, n, o, e), [e]),
          (n.flags |= 2048),
          qo(9, a0.bind(null, n, o, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = er(),
          t = Fe.identifierPrefix;
        if (ce) {
          var r = mr,
            n = gr;
          (r = (n & ~(1 << (32 - Wt(n) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = Wo++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':');
        } else (r = Hx++), (t = ':' + t + 'r' + r.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Yx = {
      readContext: kt,
      useCallback: g0,
      useContext: kt,
      useEffect: jd,
      useImperativeHandle: h0,
      useInsertionEffect: f0,
      useLayoutEffect: d0,
      useMemo: m0,
      useReducer: Nl,
      useRef: c0,
      useState: function () {
        return Nl(Ko);
      },
      useDebugValue: Id,
      useDeferredValue: function (e) {
        var t = Tt();
        return v0(t, $e.memoizedState, e);
      },
      useTransition: function () {
        var e = Nl(Ko)[0],
          t = Tt().memoizedState;
        return [e, t];
      },
      useMutableSource: n0,
      useSyncExternalStore: i0,
      useId: y0,
      unstable_isNewReconciler: !1,
    },
    Gx = {
      readContext: kt,
      useCallback: g0,
      useContext: kt,
      useEffect: jd,
      useImperativeHandle: h0,
      useInsertionEffect: f0,
      useLayoutEffect: d0,
      useMemo: m0,
      useReducer: Fl,
      useRef: c0,
      useState: function () {
        return Fl(Ko);
      },
      useDebugValue: Id,
      useDeferredValue: function (e) {
        var t = Tt();
        return $e === null ? (t.memoizedState = e) : v0(t, $e.memoizedState, e);
      },
      useTransition: function () {
        var e = Fl(Ko)[0],
          t = Tt().memoizedState;
        return [e, t];
      },
      useMutableSource: n0,
      useSyncExternalStore: i0,
      useId: y0,
      unstable_isNewReconciler: !1,
    };
  function ki(e, t) {
    try {
      var r = '',
        n = t;
      do (r += bS(n)), (n = n.return);
      while (n);
      var i = r;
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Rl(e, t, r) {
    return {
      value: e,
      source: null,
      stack: r != null ? r : null,
      digest: t != null ? t : null,
    };
  }
  function Qc(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Xx = typeof WeakMap == 'function' ? WeakMap : Map;
  function x0(e, t, r) {
    (r = vr(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var n = t.value;
    return (
      (r.callback = function () {
        Fs || ((Fs = !0), (uf = n)), Qc(e, t);
      }),
      r
    );
  }
  function b0(e, t, r) {
    (r = vr(-1, r)), (r.tag = 3);
    var n = e.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var i = t.value;
      (r.payload = function () {
        return n(i);
      }),
        (r.callback = function () {
          Qc(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == 'function' &&
        (r.callback = function () {
          Qc(e, t),
            typeof n != 'function' &&
              (Kr === null ? (Kr = new Set([this])) : Kr.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : '',
          });
        }),
      r
    );
  }
  function Fh(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Xx();
      var i = new Set();
      n.set(t, i);
    } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
    i.has(r) || (i.add(r), (e = cb.bind(null, e, t, r)), t.then(e, e));
  }
  function Rh(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Lh(e, t, r, n, i) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = vr(-1, 1)), (t.tag = 2), Wr(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = i), e);
  }
  var Qx = Or.ReactCurrentOwner,
    tt = !1;
  function Xe(e, t, r, n) {
    t.child = e === null ? t0(t, null, r, n) : Pi(t, e.child, r, n);
  }
  function jh(e, t, r, n, i) {
    r = r.render;
    var o = t.ref;
    return (
      yi(t, i),
      (n = Rd(e, t, r, n, o, i)),
      (r = Ld()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          br(e, t, i))
        : (ce && r && xd(t), (t.flags |= 1), Xe(e, t, n, i), t.child)
    );
  }
  function Ih(e, t, r, n, i) {
    if (e === null) {
      var o = r.type;
      return typeof o == 'function' &&
        !Wd(o) &&
        o.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), E0(e, t, o, n, i))
        : ((e = ns(r.type, null, n, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & i) === 0)) {
      var a = o.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Mo), r(a, n) && e.ref === t.ref)
      )
        return br(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Yr(o, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function E0(e, t, r, n, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Mo(o, n) && e.ref === t.ref)
        if (((tt = !1), (t.pendingProps = n = o), (e.lanes & i) !== 0))
          (e.flags & 131072) !== 0 && (tt = !0);
        else return (t.lanes = e.lanes), br(e, t, i);
    }
    return Zc(e, t, r, n, i);
  }
  function O0(e, t, r) {
    var n = t.pendingProps,
      i = n.children,
      o = e !== null ? e.memoizedState : null;
    if (n.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ie(fi, at),
          (at |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ie(fi, at),
            (at |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (n = o !== null ? o.baseLanes : r),
          ie(fi, at),
          (at |= n);
      }
    else
      o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
        ie(fi, at),
        (at |= n);
    return Xe(e, t, i, r), t.child;
  }
  function C0(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zc(e, t, r, n, i) {
    var o = nt(r) ? On : qe.current;
    return (
      (o = Oi(t, o)),
      yi(t, i),
      (r = Rd(e, t, r, n, o, i)),
      (n = Ld()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          br(e, t, i))
        : (ce && n && xd(t), (t.flags |= 1), Xe(e, t, r, i), t.child)
    );
  }
  function Dh(e, t, r, n, i) {
    if (nt(r)) {
      var o = !0;
      bs(t);
    } else o = !1;
    if ((yi(t, i), t.stateNode === null))
      es(e, t), Jy(t, r, n), Xc(t, r, n, i), (n = !0);
    else if (e === null) {
      var a = t.stateNode,
        s = t.memoizedProps;
      a.props = s;
      var u = a.context,
        l = r.contextType;
      typeof l == 'object' && l !== null
        ? (l = kt(l))
        : ((l = nt(r) ? On : qe.current), (l = Oi(t, l)));
      var d = r.getDerivedStateFromProps,
        f =
          typeof d == 'function' ||
          typeof a.getSnapshotBeforeUpdate == 'function';
      f ||
        (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof a.componentWillReceiveProps != 'function') ||
        ((s !== n || u !== l) && kh(t, a, n, l)),
        (Nr = !1);
      var c = t.memoizedState;
      (a.state = c),
        $s(t, n, a, i),
        (u = t.memoizedState),
        s !== n || c !== u || rt.current || Nr
          ? (typeof d == 'function' && (Gc(t, r, d, n), (u = t.memoizedState)),
            (s = Nr || $h(t, r, s, n, c, u, l))
              ? (f ||
                  (typeof a.UNSAFE_componentWillMount != 'function' &&
                    typeof a.componentWillMount != 'function') ||
                  (typeof a.componentWillMount == 'function' &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == 'function' &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = u)),
            (a.props = n),
            (a.state = u),
            (a.context = l),
            (n = s))
          : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
            (n = !1));
    } else {
      (a = t.stateNode),
        Qy(e, t),
        (s = t.memoizedProps),
        (l = t.type === t.elementType ? s : Mt(t.type, s)),
        (a.props = l),
        (f = t.pendingProps),
        (c = a.context),
        (u = r.contextType),
        typeof u == 'object' && u !== null
          ? (u = kt(u))
          : ((u = nt(r) ? On : qe.current), (u = Oi(t, u)));
      var g = r.getDerivedStateFromProps;
      (d =
        typeof g == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function') ||
        (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof a.componentWillReceiveProps != 'function') ||
        ((s !== f || c !== u) && kh(t, a, n, u)),
        (Nr = !1),
        (c = t.memoizedState),
        (a.state = c),
        $s(t, n, a, i);
      var m = t.memoizedState;
      s !== f || c !== m || rt.current || Nr
        ? (typeof g == 'function' && (Gc(t, r, g, n), (m = t.memoizedState)),
          (l = Nr || $h(t, r, l, n, c, m, u) || !1)
            ? (d ||
                (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                  typeof a.componentWillUpdate != 'function') ||
                (typeof a.componentWillUpdate == 'function' &&
                  a.componentWillUpdate(n, m, u),
                typeof a.UNSAFE_componentWillUpdate == 'function' &&
                  a.UNSAFE_componentWillUpdate(n, m, u)),
              typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != 'function' ||
                (s === e.memoizedProps && c === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != 'function' ||
                (s === e.memoizedProps && c === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = m)),
          (a.props = n),
          (a.state = m),
          (a.context = u),
          (n = l))
        : (typeof a.componentDidUpdate != 'function' ||
            (s === e.memoizedProps && c === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != 'function' ||
            (s === e.memoizedProps && c === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return Jc(e, t, r, n, o, i);
  }
  function Jc(e, t, r, n, i, o) {
    C0(e, t);
    var a = (t.flags & 128) !== 0;
    if (!n && !a) return i && bh(t, r, !1), br(e, t, o);
    (n = t.stateNode), (Qx.current = t);
    var s =
      a && typeof r.getDerivedStateFromError != 'function' ? null : n.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = Pi(t, e.child, null, o)), (t.child = Pi(t, null, s, o)))
        : Xe(e, t, s, o),
      (t.memoizedState = n.state),
      i && bh(t, r, !0),
      t.child
    );
  }
  function P0(e) {
    var t = e.stateNode;
    t.pendingContext
      ? xh(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && xh(e, t.context, !1),
      Td(e, t.containerInfo);
  }
  function Mh(e, t, r, n, i) {
    return Ci(), Ed(i), (t.flags |= 256), Xe(e, t, r, n), t.child;
  }
  var ef = { dehydrated: null, treeContext: null, retryLane: 0 };
  function tf(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function $0(e, t, r) {
    var n = t.pendingProps,
      i = pe.current,
      o = !1,
      a = (t.flags & 128) !== 0,
      s;
    if (
      ((s = a) ||
        (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      s
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      ie(pe, i & 1),
      e === null)
    )
      return (
        qc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((a = n.children),
            (e = n.fallback),
            o
              ? ((n = t.mode),
                (o = t.child),
                (a = { mode: 'hidden', children: a }),
                (n & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = a))
                  : (o = vu(a, n, 0, null)),
                (e = En(e, n, r, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = tf(r)),
                (t.memoizedState = ef),
                e)
              : Dd(t, a))
      );
    if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
      return Zx(e, t, a, n, s, i, r);
    if (o) {
      (o = n.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
      var u = { mode: 'hidden', children: n.children };
      return (
        (a & 1) === 0 && t.child !== i
          ? ((n = t.child),
            (n.childLanes = 0),
            (n.pendingProps = u),
            (t.deletions = null))
          : ((n = Yr(i, u)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
        s !== null ? (o = Yr(s, o)) : ((o = En(o, a, r, null)), (o.flags |= 2)),
        (o.return = t),
        (n.return = t),
        (n.sibling = o),
        (t.child = n),
        (n = o),
        (o = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? tf(r)
            : {
                baseLanes: a.baseLanes | r,
                cachePool: null,
                transitions: a.transitions,
              }),
        (o.memoizedState = a),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = ef),
        n
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (n = Yr(o, { mode: 'visible', children: n.children })),
      (t.mode & 1) === 0 && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n
    );
  }
  function Dd(e, t) {
    return (
      (t = vu({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Aa(e, t, r, n) {
    return (
      n !== null && Ed(n),
      Pi(t, e.child, null, r),
      (e = Dd(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zx(e, t, r, n, i, o, a) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (n = Rl(Error(T(422)))), Aa(e, t, a, n))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = n.fallback),
          (i = t.mode),
          (n = vu({ mode: 'visible', children: n.children }, i, 0, null)),
          (o = En(o, i, a, null)),
          (o.flags |= 2),
          (n.return = t),
          (o.return = t),
          (n.sibling = o),
          (t.child = n),
          (t.mode & 1) !== 0 && Pi(t, e.child, null, a),
          (t.child.memoizedState = tf(a)),
          (t.memoizedState = ef),
          o);
    if ((t.mode & 1) === 0) return Aa(e, t, a, null);
    if (i.data === '$!') {
      if (((n = i.nextSibling && i.nextSibling.dataset), n)) var s = n.dgst;
      return (
        (n = s), (o = Error(T(419))), (n = Rl(o, n, void 0)), Aa(e, t, a, n)
      );
    }
    if (((s = (a & e.childLanes) !== 0), tt || s)) {
      if (((n = Fe), n !== null)) {
        switch (a & -a) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = (i & (n.suspendedLanes | a)) !== 0 ? 0 : i),
          i !== 0 &&
            i !== o.retryLane &&
            ((o.retryLane = i), xr(e, i), Kt(n, e, i, -1));
      }
      return Vd(), (n = Rl(Error(T(421)))), Aa(e, t, a, n);
    }
    return i.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = fb.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (ut = Vr(i.nextSibling)),
        (pt = t),
        (ce = !0),
        (Bt = null),
        e !== null &&
          ((Et[Ot++] = gr),
          (Et[Ot++] = mr),
          (Et[Ot++] = Cn),
          (gr = e.id),
          (mr = e.overflow),
          (Cn = t)),
        (t = Dd(t, n.children)),
        (t.flags |= 4096),
        t);
  }
  function Uh(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Yc(e.return, t, r);
  }
  function Ll(e, t, r, n, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: r,
          tailMode: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = n),
        (o.tail = r),
        (o.tailMode = i));
  }
  function k0(e, t, r) {
    var n = t.pendingProps,
      i = n.revealOrder,
      o = n.tail;
    if ((Xe(e, t, n.children, r), (n = pe.current), (n & 2) !== 0))
      (n = (n & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Uh(e, r, t);
          else if (e.tag === 19) Uh(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      n &= 1;
    }
    if ((ie(pe, n), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (i) {
        case 'forwards':
          for (r = t.child, i = null; r !== null; )
            (e = r.alternate),
              e !== null && ks(e) === null && (i = r),
              (r = r.sibling);
          (r = i),
            r === null
              ? ((i = t.child), (t.child = null))
              : ((i = r.sibling), (r.sibling = null)),
            Ll(t, !1, i, r, o);
          break;
        case 'backwards':
          for (r = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && ks(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = r), (r = i), (i = e);
          }
          Ll(t, !0, r, null, o);
          break;
        case 'together':
          Ll(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function es(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function br(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      ($n |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Yr(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Yr(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Jx(e, t, r) {
    switch (t.tag) {
      case 3:
        P0(t), Ci();
        break;
      case 5:
        r0(t);
        break;
      case 1:
        nt(t.type) && bs(t);
        break;
      case 4:
        Td(t, t.stateNode.containerInfo);
        break;
      case 10:
        var n = t.type._context,
          i = t.memoizedProps.value;
        ie(Cs, n._currentValue), (n._currentValue = i);
        break;
      case 13:
        if (((n = t.memoizedState), n !== null))
          return n.dehydrated !== null
            ? (ie(pe, pe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? $0(e, t, r)
            : (ie(pe, pe.current & 1),
              (e = br(e, t, r)),
              e !== null ? e.sibling : null);
        ie(pe, pe.current & 1);
        break;
      case 19:
        if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (n) return k0(e, t, r);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ie(pe, pe.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), O0(e, t, r);
    }
    return br(e, t, r);
  }
  var T0, rf, A0, N0;
  T0 = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  };
  rf = function () {};
  A0 = function (e, t, r, n) {
    var i = e.memoizedProps;
    if (i !== n) {
      (e = t.stateNode), xn(or.current);
      var o = null;
      switch (r) {
        case 'input':
          (i = Ec(e, i)), (n = Ec(e, n)), (o = []);
          break;
        case 'select':
          (i = ge({}, i, { value: void 0 })),
            (n = ge({}, n, { value: void 0 })),
            (o = []);
          break;
        case 'textarea':
          (i = Pc(e, i)), (n = Pc(e, n)), (o = []);
          break;
        default:
          typeof i.onClick != 'function' &&
            typeof n.onClick == 'function' &&
            (e.onclick = Ss);
      }
      kc(r, n);
      var a;
      r = null;
      for (l in i)
        if (!n.hasOwnProperty(l) && i.hasOwnProperty(l) && i[l] != null)
          if (l === 'style') {
            var s = i[l];
            for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''));
          } else
            l !== 'dangerouslySetInnerHTML' &&
              l !== 'children' &&
              l !== 'suppressContentEditableWarning' &&
              l !== 'suppressHydrationWarning' &&
              l !== 'autoFocus' &&
              (No.hasOwnProperty(l)
                ? o || (o = [])
                : (o = o || []).push(l, null));
      for (l in n) {
        var u = n[l];
        if (
          ((s = i != null ? i[l] : void 0),
          n.hasOwnProperty(l) && u !== s && (u != null || s != null))
        )
          if (l === 'style')
            if (s) {
              for (a in s)
                !s.hasOwnProperty(a) ||
                  (u && u.hasOwnProperty(a)) ||
                  (r || (r = {}), (r[a] = ''));
              for (a in u)
                u.hasOwnProperty(a) &&
                  s[a] !== u[a] &&
                  (r || (r = {}), (r[a] = u[a]));
            } else r || (o || (o = []), o.push(l, r)), (r = u);
          else
            l === 'dangerouslySetInnerHTML'
              ? ((u = u ? u.__html : void 0),
                (s = s ? s.__html : void 0),
                u != null && s !== u && (o = o || []).push(l, u))
              : l === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (o = o || []).push(l, '' + u)
              : l !== 'suppressContentEditableWarning' &&
                l !== 'suppressHydrationWarning' &&
                (No.hasOwnProperty(l)
                  ? (u != null && l === 'onScroll' && oe('scroll', e),
                    o || s === u || (o = []))
                  : (o = o || []).push(l, u));
      }
      r && (o = o || []).push('style', r);
      var l = o;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  N0 = function (e, t, r, n) {
    r !== n && (t.flags |= 4);
  };
  function ro(e, t) {
    if (!ce)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var n = null; r !== null; )
            r.alternate !== null && (n = r), (r = r.sibling);
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      n = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (r |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags & 14680064),
          (n |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (r |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags),
          (n |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= n), (e.childLanes = r), t;
  }
  function eb(e, t, r) {
    var n = t.pendingProps;
    switch ((bd(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return nt(t.type) && xs(), Ve(t), null;
      case 3:
        return (
          (n = t.stateNode),
          $i(),
          ue(rt),
          ue(qe),
          Nd(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ka(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Bt !== null && (ff(Bt), (Bt = null)))),
          rf(e, t),
          Ve(t),
          null
        );
      case 5:
        Ad(t);
        var i = xn(Vo.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          A0(e, t, r, n, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(T(166));
            return Ve(t), null;
          }
          if (((e = xn(or.current)), ka(t))) {
            (n = t.stateNode), (r = t.type);
            var o = t.memoizedProps;
            switch (((n[tr] = t), (n[Bo] = o), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                oe('cancel', n), oe('close', n);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                oe('load', n);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < yo.length; i++) oe(yo[i], n);
                break;
              case 'source':
                oe('error', n);
                break;
              case 'img':
              case 'image':
              case 'link':
                oe('error', n), oe('load', n);
                break;
              case 'details':
                oe('toggle', n);
                break;
              case 'input':
                Gp(n, o), oe('invalid', n);
                break;
              case 'select':
                (n._wrapperState = { wasMultiple: !!o.multiple }),
                  oe('invalid', n);
                break;
              case 'textarea':
                Qp(n, o), oe('invalid', n);
            }
            kc(r, o), (i = null);
            for (var a in o)
              if (o.hasOwnProperty(a)) {
                var s = o[a];
                a === 'children'
                  ? typeof s == 'string'
                    ? n.textContent !== s &&
                      (o.suppressHydrationWarning !== !0 &&
                        $a(n.textContent, s, e),
                      (i = ['children', s]))
                    : typeof s == 'number' &&
                      n.textContent !== '' + s &&
                      (o.suppressHydrationWarning !== !0 &&
                        $a(n.textContent, s, e),
                      (i = ['children', '' + s]))
                  : No.hasOwnProperty(a) &&
                    s != null &&
                    a === 'onScroll' &&
                    oe('scroll', n);
              }
            switch (r) {
              case 'input':
                _a(n), Xp(n, o, !0);
                break;
              case 'textarea':
                _a(n), Zp(n);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof o.onClick == 'function' && (n.onclick = Ss);
            }
            (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
          } else {
            (a = i.nodeType === 9 ? i : i.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = oy(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = a.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof n.is == 'string'
                  ? (e = a.createElement(r, { is: n.is }))
                  : ((e = a.createElement(r)),
                    r === 'select' &&
                      ((a = e),
                      n.multiple
                        ? (a.multiple = !0)
                        : n.size && (a.size = n.size)))
                : (e = a.createElementNS(e, r)),
              (e[tr] = t),
              (e[Bo] = n),
              T0(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = Tc(r, n)), r)) {
                case 'dialog':
                  oe('cancel', e), oe('close', e), (i = n);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  oe('load', e), (i = n);
                  break;
                case 'video':
                case 'audio':
                  for (i = 0; i < yo.length; i++) oe(yo[i], e);
                  i = n;
                  break;
                case 'source':
                  oe('error', e), (i = n);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  oe('error', e), oe('load', e), (i = n);
                  break;
                case 'details':
                  oe('toggle', e), (i = n);
                  break;
                case 'input':
                  Gp(e, n), (i = Ec(e, n)), oe('invalid', e);
                  break;
                case 'option':
                  i = n;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!n.multiple }),
                    (i = ge({}, n, { value: void 0 })),
                    oe('invalid', e);
                  break;
                case 'textarea':
                  Qp(e, n), (i = Pc(e, n)), oe('invalid', e);
                  break;
                default:
                  i = n;
              }
              kc(r, i), (s = i);
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var u = s[o];
                  o === 'style'
                    ? uy(e, u)
                    : o === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && ay(e, u))
                    : o === 'children'
                    ? typeof u == 'string'
                      ? (r !== 'textarea' || u !== '') && Fo(e, u)
                      : typeof u == 'number' && Fo(e, '' + u)
                    : o !== 'suppressContentEditableWarning' &&
                      o !== 'suppressHydrationWarning' &&
                      o !== 'autoFocus' &&
                      (No.hasOwnProperty(o)
                        ? u != null && o === 'onScroll' && oe('scroll', e)
                        : u != null && ud(e, o, u, a));
                }
              switch (r) {
                case 'input':
                  _a(e), Xp(e, n, !1);
                  break;
                case 'textarea':
                  _a(e), Zp(e);
                  break;
                case 'option':
                  n.value != null && e.setAttribute('value', '' + en(n.value));
                  break;
                case 'select':
                  (e.multiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? hi(e, !!n.multiple, o, !1)
                      : n.defaultValue != null &&
                        hi(e, !!n.multiple, n.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == 'function' && (e.onclick = Ss);
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  n = !!n.autoFocus;
                  break e;
                case 'img':
                  n = !0;
                  break e;
                default:
                  n = !1;
              }
            }
            n && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null) N0(e, t, e.memoizedProps, n);
        else {
          if (typeof n != 'string' && t.stateNode === null) throw Error(T(166));
          if (((r = xn(Vo.current)), xn(or.current), ka(t))) {
            if (
              ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[tr] = t),
              (o = n.nodeValue !== r) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $a(n.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $a(n.nodeValue, r, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
              (n[tr] = t),
              (t.stateNode = n);
        }
        return Ve(t), null;
      case 13:
        if (
          (ue(pe),
          (n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ce && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Gy(), Ci(), (t.flags |= 98560), (o = !1);
          else if (((o = ka(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(T(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(T(317));
              o[tr] = t;
            } else
              Ci(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ve(t), (o = !1);
          } else Bt !== null && (ff(Bt), (Bt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            n !== (e !== null && e.memoizedState !== null) &&
              n &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (pe.current & 1) !== 0
                  ? ke === 0 && (ke = 3)
                  : Vd())),
            t.updateQueue !== null && (t.flags |= 4),
            Ve(t),
            null);
      case 4:
        return (
          $i(),
          rf(e, t),
          e === null && Uo(t.stateNode.containerInfo),
          Ve(t),
          null
        );
      case 10:
        return Pd(t.type._context), Ve(t), null;
      case 17:
        return nt(t.type) && xs(), Ve(t), null;
      case 19:
        if ((ue(pe), (o = t.memoizedState), o === null)) return Ve(t), null;
        if (((n = (t.flags & 128) !== 0), (a = o.rendering), a === null))
          if (n) ro(o, !1);
          else {
            if (ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = ks(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      ro(o, !1),
                      n = a.updateQueue,
                      n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      n = r,
                      r = t.child;
                    r !== null;

                  )
                    (o = r),
                      (e = n),
                      (o.flags &= 14680066),
                      (a = o.alternate),
                      a === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = a.childLanes),
                          (o.lanes = a.lanes),
                          (o.child = a.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = a.memoizedProps),
                          (o.memoizedState = a.memoizedState),
                          (o.updateQueue = a.updateQueue),
                          (o.type = a.type),
                          (e = a.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return ie(pe, (pe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              _e() > Ti &&
              ((t.flags |= 128), (n = !0), ro(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = ks(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                ro(o, !0),
                o.tail === null &&
                  o.tailMode === 'hidden' &&
                  !a.alternate &&
                  !ce)
              )
                return Ve(t), null;
            } else
              2 * _e() - o.renderingStartTime > Ti &&
                r !== 1073741824 &&
                ((t.flags |= 128), (n = !0), ro(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((r = o.last),
              r !== null ? (r.sibling = a) : (t.child = a),
              (o.last = a));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = _e()),
            (t.sibling = null),
            (r = pe.current),
            ie(pe, n ? (r & 1) | 2 : r & 1),
            t)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Hd(),
          (n = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
          n && (t.mode & 1) !== 0
            ? (at & 1073741824) !== 0 &&
              (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ve(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(T(156, t.tag));
  }
  function tb(e, t) {
    switch ((bd(t), t.tag)) {
      case 1:
        return (
          nt(t.type) && xs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          $i(),
          ue(rt),
          ue(qe),
          Nd(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Ad(t), null;
      case 13:
        if (
          (ue(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(T(340));
          Ci();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ue(pe), null;
      case 4:
        return $i(), null;
      case 10:
        return Pd(t.type._context), null;
      case 22:
      case 23:
        return Hd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Na = !1,
    Ke = !1,
    rb = typeof WeakSet == 'function' ? WeakSet : Set,
    j = null;
  function ci(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (n) {
          ve(e, t, n);
        }
      else r.current = null;
  }
  function nf(e, t, r) {
    try {
      r();
    } catch (n) {
      ve(e, t, n);
    }
  }
  var zh = !1;
  function nb(e, t) {
    if (((Uc = ys), (e = jy()), Sd(e))) {
      if ('selectionStart' in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var n = r.getSelection && r.getSelection();
          if (n && n.rangeCount !== 0) {
            r = n.anchorNode;
            var i = n.anchorOffset,
              o = n.focusNode;
            n = n.focusOffset;
            try {
              r.nodeType, o.nodeType;
            } catch {
              r = null;
              break e;
            }
            var a = 0,
              s = -1,
              u = -1,
              l = 0,
              d = 0,
              f = e,
              c = null;
            t: for (;;) {
              for (
                var g;
                f !== r || (i !== 0 && f.nodeType !== 3) || (s = a + i),
                  f !== o || (n !== 0 && f.nodeType !== 3) || (u = a + n),
                  f.nodeType === 3 && (a += f.nodeValue.length),
                  (g = f.firstChild) !== null;

              )
                (c = f), (f = g);
              for (;;) {
                if (f === e) break t;
                if (
                  (c === r && ++l === i && (s = a),
                  c === o && ++d === n && (u = a),
                  (g = f.nextSibling) !== null)
                )
                  break;
                (f = c), (c = f.parentNode);
              }
              f = g;
            }
            r = s === -1 || u === -1 ? null : { start: s, end: u };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      zc = { focusedElem: e, selectionRange: r }, ys = !1, j = t;
      j !== null;

    )
      if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (j = e);
      else
        for (; j !== null; ) {
          t = j;
          try {
            var m = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (m !== null) {
                    var v = m.memoizedProps,
                      S = m.memoizedState,
                      h = t.stateNode,
                      p = h.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? v : Mt(t.type, v),
                        S
                      );
                    h.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var y = t.stateNode.containerInfo;
                  y.nodeType === 1
                    ? (y.textContent = '')
                    : y.nodeType === 9 &&
                      y.documentElement &&
                      y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(T(163));
              }
          } catch (_) {
            ve(t, t.return, _);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (j = e);
            break;
          }
          j = t.return;
        }
    return (m = zh), (zh = !1), m;
  }
  function Po(e, t, r) {
    var n = t.updateQueue;
    if (((n = n !== null ? n.lastEffect : null), n !== null)) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          (i.destroy = void 0), o !== void 0 && nf(t, r, o);
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function gu(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var n = r.create;
          r.destroy = n();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function of(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function F0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), F0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[tr],
          delete t[Bo],
          delete t[Vc],
          delete t[Mx],
          delete t[Ux])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function R0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Bh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || R0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function af(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Ss));
    else if (n !== 4 && ((e = e.child), e !== null))
      for (af(e, t, r), e = e.sibling; e !== null; )
        af(e, t, r), (e = e.sibling);
  }
  function sf(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && ((e = e.child), e !== null))
      for (sf(e, t, r), e = e.sibling; e !== null; )
        sf(e, t, r), (e = e.sibling);
  }
  var je = null,
    zt = !1;
  function kr(e, t, r) {
    for (r = r.child; r !== null; ) L0(e, t, r), (r = r.sibling);
  }
  function L0(e, t, r) {
    if (ir && typeof ir.onCommitFiberUnmount == 'function')
      try {
        ir.onCommitFiberUnmount(su, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Ke || ci(r, t);
      case 6:
        var n = je,
          i = zt;
        (je = null),
          kr(e, t, r),
          (je = n),
          (zt = i),
          je !== null &&
            (zt
              ? ((e = je),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : je.removeChild(r.stateNode));
        break;
      case 18:
        je !== null &&
          (zt
            ? ((e = je),
              (r = r.stateNode),
              e.nodeType === 8
                ? $l(e.parentNode, r)
                : e.nodeType === 1 && $l(e, r),
              Io(e))
            : $l(je, r.stateNode));
        break;
      case 4:
        (n = je),
          (i = zt),
          (je = r.stateNode.containerInfo),
          (zt = !0),
          kr(e, t, r),
          (je = n),
          (zt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ke &&
          ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
        ) {
          i = n = n.next;
          do {
            var o = i,
              a = o.destroy;
            (o = o.tag),
              a !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && nf(r, t, a),
              (i = i.next);
          } while (i !== n);
        }
        kr(e, t, r);
        break;
      case 1:
        if (
          !Ke &&
          (ci(r, t),
          (n = r.stateNode),
          typeof n.componentWillUnmount == 'function')
        )
          try {
            (n.props = r.memoizedProps),
              (n.state = r.memoizedState),
              n.componentWillUnmount();
          } catch (s) {
            ve(r, t, s);
          }
        kr(e, t, r);
        break;
      case 21:
        kr(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((Ke = (n = Ke) || r.memoizedState !== null), kr(e, t, r), (Ke = n))
          : kr(e, t, r);
        break;
      default:
        kr(e, t, r);
    }
  }
  function Hh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new rb()),
        t.forEach(function (n) {
          var i = db.bind(null, e, n);
          r.has(n) || (r.add(n), n.then(i, i));
        });
    }
  }
  function Lt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        try {
          var o = e,
            a = t,
            s = a;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                (je = s.stateNode), (zt = !1);
                break e;
              case 3:
                (je = s.stateNode.containerInfo), (zt = !0);
                break e;
              case 4:
                (je = s.stateNode.containerInfo), (zt = !0);
                break e;
            }
            s = s.return;
          }
          if (je === null) throw Error(T(160));
          L0(o, a, i), (je = null), (zt = !1);
          var u = i.alternate;
          u !== null && (u.return = null), (i.return = null);
        } catch (l) {
          ve(i, t, l);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) j0(t, e), (t = t.sibling);
  }
  function j0(e, t) {
    var r = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Lt(t, e), Qt(e), n & 4)) {
          try {
            Po(3, e, e.return), gu(3, e);
          } catch (v) {
            ve(e, e.return, v);
          }
          try {
            Po(5, e, e.return);
          } catch (v) {
            ve(e, e.return, v);
          }
        }
        break;
      case 1:
        Lt(t, e), Qt(e), n & 512 && r !== null && ci(r, r.return);
        break;
      case 5:
        if (
          (Lt(t, e),
          Qt(e),
          n & 512 && r !== null && ci(r, r.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Fo(i, '');
          } catch (v) {
            ve(e, e.return, v);
          }
        }
        if (n & 4 && ((i = e.stateNode), i != null)) {
          var o = e.memoizedProps,
            a = r !== null ? r.memoizedProps : o,
            s = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              s === 'input' && o.type === 'radio' && o.name != null && ny(i, o),
                Tc(s, a);
              var l = Tc(s, o);
              for (a = 0; a < u.length; a += 2) {
                var d = u[a],
                  f = u[a + 1];
                d === 'style'
                  ? uy(i, f)
                  : d === 'dangerouslySetInnerHTML'
                  ? ay(i, f)
                  : d === 'children'
                  ? Fo(i, f)
                  : ud(i, d, f, l);
              }
              switch (s) {
                case 'input':
                  Oc(i, o);
                  break;
                case 'textarea':
                  iy(i, o);
                  break;
                case 'select':
                  var c = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var g = o.value;
                  g != null
                    ? hi(i, !!o.multiple, g, !1)
                    : c !== !!o.multiple &&
                      (o.defaultValue != null
                        ? hi(i, !!o.multiple, o.defaultValue, !0)
                        : hi(i, !!o.multiple, o.multiple ? [] : '', !1));
              }
              i[Bo] = o;
            } catch (v) {
              ve(e, e.return, v);
            }
        }
        break;
      case 6:
        if ((Lt(t, e), Qt(e), n & 4)) {
          if (e.stateNode === null) throw Error(T(162));
          (i = e.stateNode), (o = e.memoizedProps);
          try {
            i.nodeValue = o;
          } catch (v) {
            ve(e, e.return, v);
          }
        }
        break;
      case 3:
        if (
          (Lt(t, e), Qt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Io(t.containerInfo);
          } catch (v) {
            ve(e, e.return, v);
          }
        break;
      case 4:
        Lt(t, e), Qt(e);
        break;
      case 13:
        Lt(t, e),
          Qt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((o = i.memoizedState !== null),
            (i.stateNode.isHidden = o),
            !o ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (zd = _e())),
          n & 4 && Hh(e);
        break;
      case 22:
        if (
          ((d = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Ke = (l = Ke) || d), Lt(t, e), (Ke = l)) : Lt(t, e),
          Qt(e),
          n & 8192)
        ) {
          if (
            ((l = e.memoizedState !== null),
            (e.stateNode.isHidden = l) && !d && (e.mode & 1) !== 0)
          )
            for (j = e, d = e.child; d !== null; ) {
              for (f = j = d; j !== null; ) {
                switch (((c = j), (g = c.child), c.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Po(4, c, c.return);
                    break;
                  case 1:
                    ci(c, c.return);
                    var m = c.stateNode;
                    if (typeof m.componentWillUnmount == 'function') {
                      (n = c), (r = c.return);
                      try {
                        (t = n),
                          (m.props = t.memoizedProps),
                          (m.state = t.memoizedState),
                          m.componentWillUnmount();
                      } catch (v) {
                        ve(n, r, v);
                      }
                    }
                    break;
                  case 5:
                    ci(c, c.return);
                    break;
                  case 22:
                    if (c.memoizedState !== null) {
                      Wh(f);
                      continue;
                    }
                }
                g !== null ? ((g.return = c), (j = g)) : Wh(f);
              }
              d = d.sibling;
            }
          e: for (d = null, f = e; ; ) {
            if (f.tag === 5) {
              if (d === null) {
                d = f;
                try {
                  (i = f.stateNode),
                    l
                      ? ((o = i.style),
                        typeof o.setProperty == 'function'
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none'))
                      : ((s = f.stateNode),
                        (u = f.memoizedProps.style),
                        (a =
                          u != null && u.hasOwnProperty('display')
                            ? u.display
                            : null),
                        (s.style.display = sy('display', a)));
                } catch (v) {
                  ve(e, e.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (d === null)
                try {
                  f.stateNode.nodeValue = l ? '' : f.memoizedProps;
                } catch (v) {
                  ve(e, e.return, v);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              d === f && (d = null), (f = f.return);
            }
            d === f && (d = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        Lt(t, e), Qt(e), n & 4 && Hh(e);
        break;
      case 21:
        break;
      default:
        Lt(t, e), Qt(e);
    }
  }
  function Qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (R0(r)) {
              var n = r;
              break e;
            }
            r = r.return;
          }
          throw Error(T(160));
        }
        switch (n.tag) {
          case 5:
            var i = n.stateNode;
            n.flags & 32 && (Fo(i, ''), (n.flags &= -33));
            var o = Bh(e);
            sf(e, o, i);
            break;
          case 3:
          case 4:
            var a = n.stateNode.containerInfo,
              s = Bh(e);
            af(e, s, a);
            break;
          default:
            throw Error(T(161));
        }
      } catch (u) {
        ve(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ib(e, t, r) {
    (j = e), I0(e);
  }
  function I0(e, t, r) {
    for (var n = (e.mode & 1) !== 0; j !== null; ) {
      var i = j,
        o = i.child;
      if (i.tag === 22 && n) {
        var a = i.memoizedState !== null || Na;
        if (!a) {
          var s = i.alternate,
            u = (s !== null && s.memoizedState !== null) || Ke;
          s = Na;
          var l = Ke;
          if (((Na = a), (Ke = u) && !l))
            for (j = i; j !== null; )
              (a = j),
                (u = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? Kh(i)
                  : u !== null
                  ? ((u.return = a), (j = u))
                  : Kh(i);
          for (; o !== null; ) (j = o), I0(o), (o = o.sibling);
          (j = i), (Na = s), (Ke = l);
        }
        Vh(e);
      } else
        (i.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = i), (j = o))
          : Vh(e);
    }
  }
  function Vh(e) {
    for (; j !== null; ) {
      var t = j;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ke || gu(5, t);
                break;
              case 1:
                var n = t.stateNode;
                if (t.flags & 4 && !Ke)
                  if (r === null) n.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Mt(t.type, r.memoizedProps);
                    n.componentDidUpdate(
                      i,
                      r.memoizedState,
                      n.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Ph(t, o, n);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Ph(t, a, r);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = s;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      u.autoFocus && r.focus();
                      break;
                    case 'img':
                      u.src && (r.src = u.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var l = t.alternate;
                  if (l !== null) {
                    var d = l.memoizedState;
                    if (d !== null) {
                      var f = d.dehydrated;
                      f !== null && Io(f);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(T(163));
            }
          Ke || (t.flags & 512 && of(t));
        } catch (c) {
          ve(t, t.return, c);
        }
      }
      if (t === e) {
        j = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (j = r);
        break;
      }
      j = t.return;
    }
  }
  function Wh(e) {
    for (; j !== null; ) {
      var t = j;
      if (t === e) {
        j = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (j = r);
        break;
      }
      j = t.return;
    }
  }
  function Kh(e) {
    for (; j !== null; ) {
      var t = j;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              gu(4, t);
            } catch (u) {
              ve(t, r, u);
            }
            break;
          case 1:
            var n = t.stateNode;
            if (typeof n.componentDidMount == 'function') {
              var i = t.return;
              try {
                n.componentDidMount();
              } catch (u) {
                ve(t, i, u);
              }
            }
            var o = t.return;
            try {
              of(t);
            } catch (u) {
              ve(t, o, u);
            }
            break;
          case 5:
            var a = t.return;
            try {
              of(t);
            } catch (u) {
              ve(t, a, u);
            }
        }
      } catch (u) {
        ve(t, t.return, u);
      }
      if (t === e) {
        j = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (j = s);
        break;
      }
      j = t.return;
    }
  }
  var ob = Math.ceil,
    Ns = Or.ReactCurrentDispatcher,
    Md = Or.ReactCurrentOwner,
    $t = Or.ReactCurrentBatchConfig,
    G = 0,
    Fe = null,
    Ee = null,
    De = 0,
    at = 0,
    fi = un(0),
    ke = 0,
    Yo = null,
    $n = 0,
    mu = 0,
    Ud = 0,
    $o = null,
    et = null,
    zd = 0,
    Ti = 1 / 0,
    pr = null,
    Fs = !1,
    uf = null,
    Kr = null,
    Fa = !1,
    Mr = null,
    Rs = 0,
    ko = 0,
    lf = null,
    ts = -1,
    rs = 0;
  function Qe() {
    return (G & 6) !== 0 ? _e() : ts !== -1 ? ts : (ts = _e());
  }
  function qr(e) {
    return (e.mode & 1) === 0
      ? 1
      : (G & 2) !== 0 && De !== 0
      ? De & -De
      : Bx.transition !== null
      ? (rs === 0 && (rs = _y()), rs)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Py(e.type))),
        e);
  }
  function Kt(e, t, r, n) {
    if (50 < ko) throw ((ko = 0), (lf = null), Error(T(185)));
    na(e, r, n),
      ((G & 2) === 0 || e !== Fe) &&
        (e === Fe && ((G & 2) === 0 && (mu |= r), ke === 4 && Lr(e, De)),
        it(e, n),
        r === 1 &&
          G === 0 &&
          (t.mode & 1) === 0 &&
          ((Ti = _e() + 500), du && ln()));
  }
  function it(e, t) {
    var r = e.callbackNode;
    BS(e, t);
    var n = vs(e, e === Fe ? De : 0);
    if (n === 0)
      r !== null && th(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = n & -n), e.callbackPriority !== t)) {
      if ((r != null && th(r), t === 1))
        e.tag === 0 ? zx(qh.bind(null, e)) : Ky(qh.bind(null, e)),
          Ix(function () {
            (G & 6) === 0 && ln();
          }),
          (r = null);
      else {
        switch (Sy(n)) {
          case 1:
            r = pd;
            break;
          case 4:
            r = yy;
            break;
          case 16:
            r = ms;
            break;
          case 536870912:
            r = wy;
            break;
          default:
            r = ms;
        }
        r = W0(r, D0.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function D0(e, t) {
    if (((ts = -1), (rs = 0), (G & 6) !== 0)) throw Error(T(327));
    var r = e.callbackNode;
    if (wi() && e.callbackNode !== r) return null;
    var n = vs(e, e === Fe ? De : 0);
    if (n === 0) return null;
    if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = Ls(e, n);
    else {
      t = n;
      var i = G;
      G |= 2;
      var o = U0();
      (Fe !== e || De !== t) && ((pr = null), (Ti = _e() + 500), bn(e, t));
      do
        try {
          ub();
          break;
        } catch (s) {
          M0(e, s);
        }
      while (1);
      Cd(),
        (Ns.current = o),
        (G = i),
        Ee !== null ? (t = 0) : ((Fe = null), (De = 0), (t = ke));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Lc(e)), i !== 0 && ((n = i), (t = cf(e, i)))),
        t === 1)
      )
        throw ((r = Yo), bn(e, 0), Lr(e, n), it(e, _e()), r);
      if (t === 6) Lr(e, n);
      else {
        if (
          ((i = e.current.alternate),
          (n & 30) === 0 &&
            !ab(i) &&
            ((t = Ls(e, n)),
            t === 2 && ((o = Lc(e)), o !== 0 && ((n = o), (t = cf(e, o)))),
            t === 1))
        )
          throw ((r = Yo), bn(e, 0), Lr(e, n), it(e, _e()), r);
        switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
          case 0:
          case 1:
            throw Error(T(345));
          case 2:
            gn(e, et, pr);
            break;
          case 3:
            if (
              (Lr(e, n),
              (n & 130023424) === n && ((t = zd + 500 - _e()), 10 < t))
            ) {
              if (vs(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & n) !== n)) {
                Qe(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Hc(gn.bind(null, e, et, pr), t);
              break;
            }
            gn(e, et, pr);
            break;
          case 4:
            if ((Lr(e, n), (n & 4194240) === n)) break;
            for (t = e.eventTimes, i = -1; 0 < n; ) {
              var a = 31 - Wt(n);
              (o = 1 << a), (a = t[a]), a > i && (i = a), (n &= ~o);
            }
            if (
              ((n = i),
              (n = _e() - n),
              (n =
                (120 > n
                  ? 120
                  : 480 > n
                  ? 480
                  : 1080 > n
                  ? 1080
                  : 1920 > n
                  ? 1920
                  : 3e3 > n
                  ? 3e3
                  : 4320 > n
                  ? 4320
                  : 1960 * ob(n / 1960)) - n),
              10 < n)
            ) {
              e.timeoutHandle = Hc(gn.bind(null, e, et, pr), n);
              break;
            }
            gn(e, et, pr);
            break;
          case 5:
            gn(e, et, pr);
            break;
          default:
            throw Error(T(329));
        }
      }
    }
    return it(e, _e()), e.callbackNode === r ? D0.bind(null, e) : null;
  }
  function cf(e, t) {
    var r = $o;
    return (
      e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
      (e = Ls(e, t)),
      e !== 2 && ((t = et), (et = r), t !== null && ff(t)),
      e
    );
  }
  function ff(e) {
    et === null ? (et = e) : et.push.apply(et, e);
  }
  function ab(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var n = 0; n < r.length; n++) {
            var i = r[n],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!qt(o(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Lr(e, t) {
    for (
      t &= ~Ud,
        t &= ~mu,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Wt(t),
        n = 1 << r;
      (e[r] = -1), (t &= ~n);
    }
  }
  function qh(e) {
    if ((G & 6) !== 0) throw Error(T(327));
    wi();
    var t = vs(e, 0);
    if ((t & 1) === 0) return it(e, _e()), null;
    var r = Ls(e, t);
    if (e.tag !== 0 && r === 2) {
      var n = Lc(e);
      n !== 0 && ((t = n), (r = cf(e, n)));
    }
    if (r === 1) throw ((r = Yo), bn(e, 0), Lr(e, t), it(e, _e()), r);
    if (r === 6) throw Error(T(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gn(e, et, pr),
      it(e, _e()),
      null
    );
  }
  function Bd(e, t) {
    var r = G;
    G |= 1;
    try {
      return e(t);
    } finally {
      (G = r), G === 0 && ((Ti = _e() + 500), du && ln());
    }
  }
  function kn(e) {
    Mr !== null && Mr.tag === 0 && (G & 6) === 0 && wi();
    var t = G;
    G |= 1;
    var r = $t.transition,
      n = ee;
    try {
      if ((($t.transition = null), (ee = 1), e)) return e();
    } finally {
      (ee = n), ($t.transition = r), (G = t), (G & 6) === 0 && ln();
    }
  }
  function Hd() {
    (at = fi.current), ue(fi);
  }
  function bn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), jx(r)), Ee !== null))
      for (r = Ee.return; r !== null; ) {
        var n = r;
        switch ((bd(n), n.tag)) {
          case 1:
            (n = n.type.childContextTypes), n != null && xs();
            break;
          case 3:
            $i(), ue(rt), ue(qe), Nd();
            break;
          case 5:
            Ad(n);
            break;
          case 4:
            $i();
            break;
          case 13:
            ue(pe);
            break;
          case 19:
            ue(pe);
            break;
          case 10:
            Pd(n.type._context);
            break;
          case 22:
          case 23:
            Hd();
        }
        r = r.return;
      }
    if (
      ((Fe = e),
      (Ee = e = Yr(e.current, null)),
      (De = at = t),
      (ke = 0),
      (Yo = null),
      (Ud = mu = $n = 0),
      (et = $o = null),
      Sn !== null)
    ) {
      for (t = 0; t < Sn.length; t++)
        if (((r = Sn[t]), (n = r.interleaved), n !== null)) {
          r.interleaved = null;
          var i = n.next,
            o = r.pending;
          if (o !== null) {
            var a = o.next;
            (o.next = i), (n.next = a);
          }
          r.pending = n;
        }
      Sn = null;
    }
    return e;
  }
  function M0(e, t) {
    do {
      var r = Ee;
      try {
        if ((Cd(), (Za.current = As), Ts)) {
          for (var n = he.memoizedState; n !== null; ) {
            var i = n.queue;
            i !== null && (i.pending = null), (n = n.next);
          }
          Ts = !1;
        }
        if (
          ((Pn = 0),
          (Ne = $e = he = null),
          (Co = !1),
          (Wo = 0),
          (Md.current = null),
          r === null || r.return === null)
        ) {
          (ke = 1), (Yo = t), (Ee = null);
          break;
        }
        e: {
          var o = e,
            a = r.return,
            s = r,
            u = t;
          if (
            ((t = De),
            (s.flags |= 32768),
            u !== null && typeof u == 'object' && typeof u.then == 'function')
          ) {
            var l = u,
              d = s,
              f = d.tag;
            if ((d.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
              var c = d.alternate;
              c
                ? ((d.updateQueue = c.updateQueue),
                  (d.memoizedState = c.memoizedState),
                  (d.lanes = c.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null));
            }
            var g = Rh(a);
            if (g !== null) {
              (g.flags &= -257),
                Lh(g, a, s, o, t),
                g.mode & 1 && Fh(o, l, t),
                (t = g),
                (u = l);
              var m = t.updateQueue;
              if (m === null) {
                var v = new Set();
                v.add(u), (t.updateQueue = v);
              } else m.add(u);
              break e;
            } else {
              if ((t & 1) === 0) {
                Fh(o, l, t), Vd();
                break e;
              }
              u = Error(T(426));
            }
          } else if (ce && s.mode & 1) {
            var S = Rh(a);
            if (S !== null) {
              (S.flags & 65536) === 0 && (S.flags |= 256),
                Lh(S, a, s, o, t),
                Ed(ki(u, s));
              break e;
            }
          }
          (o = u = ki(u, s)),
            ke !== 4 && (ke = 2),
            $o === null ? ($o = [o]) : $o.push(o),
            (o = a);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = x0(o, u, t);
                Ch(o, h);
                break e;
              case 1:
                s = u;
                var p = o.type,
                  y = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof p.getDerivedStateFromError == 'function' ||
                    (y !== null &&
                      typeof y.componentDidCatch == 'function' &&
                      (Kr === null || !Kr.has(y))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var _ = b0(o, s, t);
                  Ch(o, _);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        B0(r);
      } catch (x) {
        (t = x), Ee === r && r !== null && (Ee = r = r.return);
        continue;
      }
      break;
    } while (1);
  }
  function U0() {
    var e = Ns.current;
    return (Ns.current = As), e === null ? As : e;
  }
  function Vd() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
      Fe === null ||
        (($n & 268435455) === 0 && (mu & 268435455) === 0) ||
        Lr(Fe, De);
  }
  function Ls(e, t) {
    var r = G;
    G |= 2;
    var n = U0();
    (Fe !== e || De !== t) && ((pr = null), bn(e, t));
    do
      try {
        sb();
        break;
      } catch (i) {
        M0(e, i);
      }
    while (1);
    if ((Cd(), (G = r), (Ns.current = n), Ee !== null)) throw Error(T(261));
    return (Fe = null), (De = 0), ke;
  }
  function sb() {
    for (; Ee !== null; ) z0(Ee);
  }
  function ub() {
    for (; Ee !== null && !FS(); ) z0(Ee);
  }
  function z0(e) {
    var t = V0(e.alternate, e, at);
    (e.memoizedProps = e.pendingProps),
      t === null ? B0(e) : (Ee = t),
      (Md.current = null);
  }
  function B0(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = eb(r, t, at)), r !== null)) {
          Ee = r;
          return;
        }
      } else {
        if (((r = tb(r, t)), r !== null)) {
          (r.flags &= 32767), (Ee = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ke = 6), (Ee = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function gn(e, t, r) {
    var n = ee,
      i = $t.transition;
    try {
      ($t.transition = null), (ee = 1), lb(e, t, r, n);
    } finally {
      ($t.transition = i), (ee = n);
    }
    return null;
  }
  function lb(e, t, r, n) {
    do wi();
    while (Mr !== null);
    if ((G & 6) !== 0) throw Error(T(327));
    r = e.finishedWork;
    var i = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(T(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = r.lanes | r.childLanes;
    if (
      (HS(e, o),
      e === Fe && ((Ee = Fe = null), (De = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Fa ||
        ((Fa = !0),
        W0(ms, function () {
          return wi(), null;
        })),
      (o = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || o)
    ) {
      (o = $t.transition), ($t.transition = null);
      var a = ee;
      ee = 1;
      var s = G;
      (G |= 4),
        (Md.current = null),
        nb(e, r),
        j0(r, e),
        kx(zc),
        (ys = !!Uc),
        (zc = Uc = null),
        (e.current = r),
        ib(r),
        RS(),
        (G = s),
        (ee = a),
        ($t.transition = o);
    } else e.current = r;
    if (
      (Fa && ((Fa = !1), (Mr = e), (Rs = i)),
      (o = e.pendingLanes),
      o === 0 && (Kr = null),
      IS(r.stateNode),
      it(e, _e()),
      t !== null)
    )
      for (n = e.onRecoverableError, r = 0; r < t.length; r++)
        (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
    if (Fs) throw ((Fs = !1), (e = uf), (uf = null), e);
    return (
      (Rs & 1) !== 0 && e.tag !== 0 && wi(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === lf ? ko++ : ((ko = 0), (lf = e))) : (ko = 0),
      ln(),
      null
    );
  }
  function wi() {
    if (Mr !== null) {
      var e = Sy(Rs),
        t = $t.transition,
        r = ee;
      try {
        if ((($t.transition = null), (ee = 16 > e ? 16 : e), Mr === null))
          var n = !1;
        else {
          if (((e = Mr), (Mr = null), (Rs = 0), (G & 6) !== 0))
            throw Error(T(331));
          var i = G;
          for (G |= 4, j = e.current; j !== null; ) {
            var o = j,
              a = o.child;
            if ((j.flags & 16) !== 0) {
              var s = o.deletions;
              if (s !== null) {
                for (var u = 0; u < s.length; u++) {
                  var l = s[u];
                  for (j = l; j !== null; ) {
                    var d = j;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Po(8, d, o);
                    }
                    var f = d.child;
                    if (f !== null) (f.return = d), (j = f);
                    else
                      for (; j !== null; ) {
                        d = j;
                        var c = d.sibling,
                          g = d.return;
                        if ((F0(d), d === l)) {
                          j = null;
                          break;
                        }
                        if (c !== null) {
                          (c.return = g), (j = c);
                          break;
                        }
                        j = g;
                      }
                  }
                }
                var m = o.alternate;
                if (m !== null) {
                  var v = m.child;
                  if (v !== null) {
                    m.child = null;
                    do {
                      var S = v.sibling;
                      (v.sibling = null), (v = S);
                    } while (v !== null);
                  }
                }
                j = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && a !== null)
              (a.return = o), (j = a);
            else
              e: for (; j !== null; ) {
                if (((o = j), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Po(9, o, o.return);
                  }
                var h = o.sibling;
                if (h !== null) {
                  (h.return = o.return), (j = h);
                  break e;
                }
                j = o.return;
              }
          }
          var p = e.current;
          for (j = p; j !== null; ) {
            a = j;
            var y = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && y !== null)
              (y.return = a), (j = y);
            else
              e: for (a = p; j !== null; ) {
                if (((s = j), (s.flags & 2048) !== 0))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gu(9, s);
                    }
                  } catch (x) {
                    ve(s, s.return, x);
                  }
                if (s === a) {
                  j = null;
                  break e;
                }
                var _ = s.sibling;
                if (_ !== null) {
                  (_.return = s.return), (j = _);
                  break e;
                }
                j = s.return;
              }
          }
          if (
            ((G = i), ln(), ir && typeof ir.onPostCommitFiberRoot == 'function')
          )
            try {
              ir.onPostCommitFiberRoot(su, e);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (ee = r), ($t.transition = t);
      }
    }
    return !1;
  }
  function Yh(e, t, r) {
    (t = ki(r, t)),
      (t = x0(e, t, 1)),
      (e = Wr(e, t, 1)),
      (t = Qe()),
      e !== null && (na(e, 1, t), it(e, t));
  }
  function ve(e, t, r) {
    if (e.tag === 3) Yh(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Yh(t, e, r);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof n.componentDidCatch == 'function' &&
              (Kr === null || !Kr.has(n)))
          ) {
            (e = ki(r, e)),
              (e = b0(t, e, 1)),
              (t = Wr(t, e, 1)),
              (e = Qe()),
              t !== null && (na(t, 1, e), it(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function cb(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
      (t = Qe()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Fe === e &&
        (De & r) === r &&
        (ke === 4 || (ke === 3 && (De & 130023424) === De && 500 > _e() - zd)
          ? bn(e, 0)
          : (Ud |= r)),
      it(e, t);
  }
  function H0(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = ba), (ba <<= 1), (ba & 130023424) === 0 && (ba = 4194304)));
    var r = Qe();
    (e = xr(e, t)), e !== null && (na(e, t, r), it(e, r));
  }
  function fb(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), H0(e, r);
  }
  function db(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          i = e.memoizedState;
        i !== null && (r = i.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      default:
        throw Error(T(314));
    }
    n !== null && n.delete(t), H0(e, r);
  }
  var V0;
  V0 = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || rt.current) tt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (tt = !1), Jx(e, t, r);
        tt = (e.flags & 131072) !== 0;
      }
    else (tt = !1), ce && (t.flags & 1048576) !== 0 && qy(t, Os, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var n = t.type;
        es(e, t), (e = t.pendingProps);
        var i = Oi(t, qe.current);
        yi(t, r), (i = Rd(null, t, n, e, i, r));
        var o = Ld();
        return (
          (t.flags |= 1),
          typeof i == 'object' &&
          i !== null &&
          typeof i.render == 'function' &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              nt(n) ? ((o = !0), bs(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              kd(t),
              (i.updater = pu),
              (t.stateNode = i),
              (i._reactInternals = t),
              Xc(t, n, e, r),
              (t = Jc(null, t, n, !0, o, r)))
            : ((t.tag = 0), ce && o && xd(t), Xe(null, t, i, r), (t = t.child)),
          t
        );
      case 16:
        n = t.elementType;
        e: {
          switch (
            (es(e, t),
            (e = t.pendingProps),
            (i = n._init),
            (n = i(n._payload)),
            (t.type = n),
            (i = t.tag = hb(n)),
            (e = Mt(n, e)),
            i)
          ) {
            case 0:
              t = Zc(null, t, n, e, r);
              break e;
            case 1:
              t = Dh(null, t, n, e, r);
              break e;
            case 11:
              t = jh(null, t, n, e, r);
              break e;
            case 14:
              t = Ih(null, t, n, Mt(n.type, e), r);
              break e;
          }
          throw Error(T(306, n, ''));
        }
        return t;
      case 0:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : Mt(n, i)),
          Zc(e, t, n, i, r)
        );
      case 1:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : Mt(n, i)),
          Dh(e, t, n, i, r)
        );
      case 3:
        e: {
          if ((P0(t), e === null)) throw Error(T(387));
          (n = t.pendingProps),
            (o = t.memoizedState),
            (i = o.element),
            Qy(e, t),
            $s(t, n, null, r);
          var a = t.memoizedState;
          if (((n = a.element), o.isDehydrated))
            if (
              ((o = {
                element: n,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (i = ki(Error(T(423)), t)), (t = Mh(e, t, n, r, i));
              break e;
            } else if (n !== i) {
              (i = ki(Error(T(424)), t)), (t = Mh(e, t, n, r, i));
              break e;
            } else
              for (
                ut = Vr(t.stateNode.containerInfo.firstChild),
                  pt = t,
                  ce = !0,
                  Bt = null,
                  r = t0(t, null, n, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Ci(), n === i)) {
              t = br(e, t, r);
              break e;
            }
            Xe(e, t, n, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          r0(t),
          e === null && qc(t),
          (n = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (a = i.children),
          Bc(n, i) ? (a = null) : o !== null && Bc(n, o) && (t.flags |= 32),
          C0(e, t),
          Xe(e, t, a, r),
          t.child
        );
      case 6:
        return e === null && qc(t), null;
      case 13:
        return $0(e, t, r);
      case 4:
        return (
          Td(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Pi(t, null, n, r)) : Xe(e, t, n, r),
          t.child
        );
      case 11:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : Mt(n, i)),
          jh(e, t, n, i, r)
        );
      case 7:
        return Xe(e, t, t.pendingProps, r), t.child;
      case 8:
        return Xe(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Xe(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((n = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (a = i.value),
            ie(Cs, n._currentValue),
            (n._currentValue = a),
            o !== null)
          )
            if (qt(o.value, a)) {
              if (o.children === i.children && !rt.current) {
                t = br(e, t, r);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var s = o.dependencies;
                if (s !== null) {
                  a = o.child;
                  for (var u = s.firstContext; u !== null; ) {
                    if (u.context === n) {
                      if (o.tag === 1) {
                        (u = vr(-1, r & -r)), (u.tag = 2);
                        var l = o.updateQueue;
                        if (l !== null) {
                          l = l.shared;
                          var d = l.pending;
                          d === null
                            ? (u.next = u)
                            : ((u.next = d.next), (d.next = u)),
                            (l.pending = u);
                        }
                      }
                      (o.lanes |= r),
                        (u = o.alternate),
                        u !== null && (u.lanes |= r),
                        Yc(o.return, r, t),
                        (s.lanes |= r);
                      break;
                    }
                    u = u.next;
                  }
                } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((a = o.return), a === null)) throw Error(T(341));
                  (a.lanes |= r),
                    (s = a.alternate),
                    s !== null && (s.lanes |= r),
                    Yc(a, r, t),
                    (a = o.sibling);
                } else a = o.child;
                if (a !== null) a.return = o;
                else
                  for (a = o; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((o = a.sibling), o !== null)) {
                      (o.return = a.return), (a = o);
                      break;
                    }
                    a = a.return;
                  }
                o = a;
              }
          Xe(e, t, i.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (n = t.pendingProps.children),
          yi(t, r),
          (i = kt(i)),
          (n = n(i)),
          (t.flags |= 1),
          Xe(e, t, n, r),
          t.child
        );
      case 14:
        return (
          (n = t.type),
          (i = Mt(n, t.pendingProps)),
          (i = Mt(n.type, i)),
          Ih(e, t, n, i, r)
        );
      case 15:
        return E0(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : Mt(n, i)),
          es(e, t),
          (t.tag = 1),
          nt(n) ? ((e = !0), bs(t)) : (e = !1),
          yi(t, r),
          Jy(t, n, i),
          Xc(t, n, i, r),
          Jc(null, t, n, !0, e, r)
        );
      case 19:
        return k0(e, t, r);
      case 22:
        return O0(e, t, r);
    }
    throw Error(T(156, t.tag));
  };
  function W0(e, t) {
    return vy(e, t);
  }
  function pb(e, t, r, n) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ct(e, t, r, n) {
    return new pb(e, t, r, n);
  }
  function Wd(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function hb(e) {
    if (typeof e == 'function') return Wd(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === cd)) return 11;
      if (e === fd) return 14;
    }
    return 2;
  }
  function Yr(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Ct(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function ns(e, t, r, n, i, o) {
    var a = 2;
    if (((n = e), typeof e == 'function')) Wd(e) && (a = 1);
    else if (typeof e == 'string') a = 5;
    else
      e: switch (e) {
        case ti:
          return En(r.children, i, o, t);
        case ld:
          (a = 8), (i |= 8);
          break;
        case _c:
          return (
            (e = Ct(12, r, t, i | 2)), (e.elementType = _c), (e.lanes = o), e
          );
        case Sc:
          return (e = Ct(13, r, t, i)), (e.elementType = Sc), (e.lanes = o), e;
        case xc:
          return (e = Ct(19, r, t, i)), (e.elementType = xc), (e.lanes = o), e;
        case ey:
          return vu(r, i, o, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Zv:
                a = 10;
                break e;
              case Jv:
                a = 9;
                break e;
              case cd:
                a = 11;
                break e;
              case fd:
                a = 14;
                break e;
              case Ar:
                (a = 16), (n = null);
                break e;
            }
          throw Error(T(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = Ct(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
    );
  }
  function En(e, t, r, n) {
    return (e = Ct(7, e, n, t)), (e.lanes = r), e;
  }
  function vu(e, t, r, n) {
    return (
      (e = Ct(22, e, n, t)),
      (e.elementType = ey),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function jl(e, t, r) {
    return (e = Ct(6, e, null, t)), (e.lanes = r), e;
  }
  function Il(e, t, r) {
    return (
      (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function gb(e, t, r, n, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vl(0)),
      (this.expirationTimes = vl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vl(0)),
      (this.identifierPrefix = n),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Kd(e, t, r, n, i, o, a, s, u) {
    return (
      (e = new gb(e, t, r, s, u)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = Ct(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      kd(o),
      e
    );
  }
  function mb(e, t, r) {
    var n =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ei,
      key: n == null ? null : '' + n,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function K0(e) {
    if (!e) return tn;
    e = e._reactInternals;
    e: {
      if (Fn(e) !== e || e.tag !== 1) throw Error(T(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (nt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(T(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (nt(r)) return Wy(e, r, t);
    }
    return t;
  }
  function q0(e, t, r, n, i, o, a, s, u) {
    return (
      (e = Kd(r, n, !0, e, i, o, a, s, u)),
      (e.context = K0(null)),
      (r = e.current),
      (n = Qe()),
      (i = qr(r)),
      (o = vr(n, i)),
      (o.callback = t != null ? t : null),
      Wr(r, o, i),
      (e.current.lanes = i),
      na(e, i, n),
      it(e, n),
      e
    );
  }
  function yu(e, t, r, n) {
    var i = t.current,
      o = Qe(),
      a = qr(i);
    return (
      (r = K0(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = vr(o, a)),
      (t.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (t.callback = n),
      (e = Wr(i, t, a)),
      e !== null && (Kt(e, i, a, o), Qa(e, i, a)),
      a
    );
  }
  function js(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function qd(e, t) {
    Gh(e, t), (e = e.alternate) && Gh(e, t);
  }
  function vb() {
    return null;
  }
  var Y0 =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Yd(e) {
    this._internalRoot = e;
  }
  wu.prototype.render = Yd.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(T(409));
    yu(e, t, null, null);
  };
  wu.prototype.unmount = Yd.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      kn(function () {
        yu(null, e, null, null);
      }),
        (t[Sr] = null);
    }
  };
  function wu(e) {
    this._internalRoot = e;
  }
  wu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ey();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Rr.length && t !== 0 && t < Rr[r].priority; r++);
      Rr.splice(r, 0, e), r === 0 && Cy(e);
    }
  };
  function Gd(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function _u(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Xh() {}
  function yb(e, t, r, n, i) {
    if (i) {
      if (typeof n == 'function') {
        var o = n;
        n = function () {
          var l = js(a);
          o.call(l);
        };
      }
      var a = q0(t, n, e, 0, null, !1, !1, '', Xh);
      return (
        (e._reactRootContainer = a),
        (e[Sr] = a.current),
        Uo(e.nodeType === 8 ? e.parentNode : e),
        kn(),
        a
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof n == 'function') {
      var s = n;
      n = function () {
        var l = js(u);
        s.call(l);
      };
    }
    var u = Kd(e, 0, !1, null, null, !1, !1, '', Xh);
    return (
      (e._reactRootContainer = u),
      (e[Sr] = u.current),
      Uo(e.nodeType === 8 ? e.parentNode : e),
      kn(function () {
        yu(t, u, r, n);
      }),
      u
    );
  }
  function Su(e, t, r, n, i) {
    var o = r._reactRootContainer;
    if (o) {
      var a = o;
      if (typeof i == 'function') {
        var s = i;
        i = function () {
          var u = js(a);
          s.call(u);
        };
      }
      yu(t, a, e, i);
    } else a = yb(r, t, e, i, n);
    return js(a);
  }
  xy = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = vo(t.pendingLanes);
          r !== 0 &&
            (hd(t, r | 1),
            it(t, _e()),
            (G & 6) === 0 && ((Ti = _e() + 500), ln()));
        }
        break;
      case 13:
        kn(function () {
          var n = xr(e, 1);
          if (n !== null) {
            var i = Qe();
            Kt(n, e, 1, i);
          }
        }),
          qd(e, 1);
    }
  };
  gd = function (e) {
    if (e.tag === 13) {
      var t = xr(e, 134217728);
      if (t !== null) {
        var r = Qe();
        Kt(t, e, 134217728, r);
      }
      qd(e, 134217728);
    }
  };
  by = function (e) {
    if (e.tag === 13) {
      var t = qr(e),
        r = xr(e, t);
      if (r !== null) {
        var n = Qe();
        Kt(r, e, t, n);
      }
      qd(e, t);
    }
  };
  Ey = function () {
    return ee;
  };
  Oy = function (e, t) {
    var r = ee;
    try {
      return (ee = e), t();
    } finally {
      ee = r;
    }
  };
  Nc = function (e, t, r) {
    switch (t) {
      case 'input':
        if ((Oc(e, r), (t = r.name), r.type === 'radio' && t != null)) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (
            r = r.querySelectorAll(
              'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
            ),
              t = 0;
            t < r.length;
            t++
          ) {
            var n = r[t];
            if (n !== e && n.form === e.form) {
              var i = fu(n);
              if (!i) throw Error(T(90));
              ry(n), Oc(n, i);
            }
          }
        }
        break;
      case 'textarea':
        iy(e, r);
        break;
      case 'select':
        (t = r.value), t != null && hi(e, !!r.multiple, t, !1);
    }
  };
  fy = Bd;
  dy = kn;
  var wb = { usingClientEntryPoint: !1, Events: [oa, oi, fu, ly, cy, Bd] },
    no = {
      findFiberByHostInstance: _n,
      bundleType: 0,
      version: '18.2.0',
      rendererPackageName: 'react-dom',
    },
    _b = {
      bundleType: no.bundleType,
      version: no.version,
      rendererPackageName: no.rendererPackageName,
      rendererConfig: no.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Or.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = gy(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: no.findFiberByHostInstance || vb,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ra.isDisabled && Ra.supportsFiber)
      try {
        (su = Ra.inject(_b)), (ir = Ra);
      } catch {}
  }
  mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wb;
  mt.createPortal = function (e, t) {
    var r =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gd(t)) throw Error(T(200));
    return mb(e, t, null, r);
  };
  mt.createRoot = function (e, t) {
    if (!Gd(e)) throw Error(T(299));
    var r = !1,
      n = '',
      i = Y0;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (r = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = Kd(e, 1, !1, null, null, r, !1, n, i)),
      (e[Sr] = t.current),
      Uo(e.nodeType === 8 ? e.parentNode : e),
      new Yd(t)
    );
  };
  mt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(T(188))
        : ((e = Object.keys(e).join(',')), Error(T(268, e)));
    return (e = gy(t)), (e = e === null ? null : e.stateNode), e;
  };
  mt.flushSync = function (e) {
    return kn(e);
  };
  mt.hydrate = function (e, t, r) {
    if (!_u(t)) throw Error(T(200));
    return Su(null, e, t, !0, r);
  };
  mt.hydrateRoot = function (e, t, r) {
    if (!Gd(e)) throw Error(T(405));
    var n = (r != null && r.hydratedSources) || null,
      i = !1,
      o = '',
      a = Y0;
    if (
      (r != null &&
        (r.unstable_strictMode === !0 && (i = !0),
        r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
        r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
      (t = q0(t, null, e, 1, r != null ? r : null, i, !1, o, a)),
      (e[Sr] = t.current),
      Uo(e),
      n)
    )
      for (e = 0; e < n.length; e++)
        (r = n[e]),
          (i = r._getVersion),
          (i = i(r._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [r, i])
            : t.mutableSourceEagerHydrationData.push(r, i);
    return new wu(t);
  };
  mt.render = function (e, t, r) {
    if (!_u(t)) throw Error(T(200));
    return Su(null, e, t, !1, r);
  };
  mt.unmountComponentAtNode = function (e) {
    if (!_u(e)) throw Error(T(40));
    return e._reactRootContainer
      ? (kn(function () {
          Su(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[Sr] = null);
          });
        }),
        !0)
      : !1;
  };
  mt.unstable_batchedUpdates = Bd;
  mt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!_u(r)) throw Error(T(200));
    if (e == null || e._reactInternals === void 0) throw Error(T(38));
    return Su(e, t, r, !1, n);
  };
  mt.version = '18.2.0-next-9e3b772b8-20220608';
  (function (e) {
    function t() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
        } catch (r) {
          console.error(r);
        }
    }
    t(), (e.exports = mt);
  })(od);
  var Qh = od.exports;
  (yc.createRoot = Qh.createRoot), (yc.hydrateRoot = Qh.hydrateRoot);
  var G0 = { exports: {} },
    X0 = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ai = O.exports;
  function Sb(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var xb = typeof Object.is == 'function' ? Object.is : Sb,
    bb = Ai.useState,
    Eb = Ai.useEffect,
    Ob = Ai.useLayoutEffect,
    Cb = Ai.useDebugValue;
  function Pb(e, t) {
    var r = t(),
      n = bb({ inst: { value: r, getSnapshot: t } }),
      i = n[0].inst,
      o = n[1];
    return (
      Ob(
        function () {
          (i.value = r), (i.getSnapshot = t), Dl(i) && o({ inst: i });
        },
        [e, r, t]
      ),
      Eb(
        function () {
          return (
            Dl(i) && o({ inst: i }),
            e(function () {
              Dl(i) && o({ inst: i });
            })
          );
        },
        [e]
      ),
      Cb(r),
      r
    );
  }
  function Dl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !xb(e, r);
    } catch {
      return !0;
    }
  }
  function $b(e, t) {
    return t();
  }
  var kb =
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
      ? $b
      : Pb;
  X0.useSyncExternalStore =
    Ai.useSyncExternalStore !== void 0 ? Ai.useSyncExternalStore : kb;
  (function (e) {
    e.exports = X0;
  })(G0);
  var Q0 = { exports: {} },
    Z0 = {};
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var xu = O.exports,
    Tb = G0.exports;
  function Ab(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nb = typeof Object.is == 'function' ? Object.is : Ab,
    Fb = Tb.useSyncExternalStore,
    Rb = xu.useRef,
    Lb = xu.useEffect,
    jb = xu.useMemo,
    Ib = xu.useDebugValue;
  Z0.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
    var o = Rb(null);
    if (o.current === null) {
      var a = { hasValue: !1, value: null };
      o.current = a;
    } else a = o.current;
    o = jb(
      function () {
        function u(g) {
          if (!l) {
            if (((l = !0), (d = g), (g = n(g)), i !== void 0 && a.hasValue)) {
              var m = a.value;
              if (i(m, g)) return (f = m);
            }
            return (f = g);
          }
          if (((m = f), Nb(d, g))) return m;
          var v = n(g);
          return i !== void 0 && i(m, v) ? m : ((d = g), (f = v));
        }
        var l = !1,
          d,
          f,
          c = r === void 0 ? null : r;
        return [
          function () {
            return u(t());
          },
          c === null
            ? void 0
            : function () {
                return u(c());
              },
        ];
      },
      [t, r, n, i]
    );
    var s = Fb(e, o[0], o[1]);
    return (
      Lb(
        function () {
          (a.hasValue = !0), (a.value = s);
        },
        [s]
      ),
      Ib(s),
      s
    );
  };
  (function (e) {
    e.exports = Z0;
  })(Q0);
  function Db(e) {
    e();
  }
  let J0 = Db;
  const Mb = e => (J0 = e),
    Ub = () => J0,
    rn = O.exports.createContext(null);
  function e1() {
    return O.exports.useContext(rn);
  }
  const zb = () => {
    throw new Error('uSES not initialized!');
  };
  let t1 = zb;
  const Bb = e => {
      t1 = e;
    },
    Hb = (e, t) => e === t;
  function Vb(e = rn) {
    const t = e === rn ? e1 : () => O.exports.useContext(e);
    return function (n, i = Hb) {
      const { store: o, subscription: a, getServerState: s } = t(),
        u = t1(a.addNestedSub, o.getState, s || o.getState, n, i);
      return O.exports.useDebugValue(u), u;
    };
  }
  const Wb = Vb();
  var r1 = { exports: {} },
    te = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Re = typeof Symbol == 'function' && Symbol.for,
    Xd = Re ? Symbol.for('react.element') : 60103,
    Qd = Re ? Symbol.for('react.portal') : 60106,
    bu = Re ? Symbol.for('react.fragment') : 60107,
    Eu = Re ? Symbol.for('react.strict_mode') : 60108,
    Ou = Re ? Symbol.for('react.profiler') : 60114,
    Cu = Re ? Symbol.for('react.provider') : 60109,
    Pu = Re ? Symbol.for('react.context') : 60110,
    Zd = Re ? Symbol.for('react.async_mode') : 60111,
    $u = Re ? Symbol.for('react.concurrent_mode') : 60111,
    ku = Re ? Symbol.for('react.forward_ref') : 60112,
    Tu = Re ? Symbol.for('react.suspense') : 60113,
    Kb = Re ? Symbol.for('react.suspense_list') : 60120,
    Au = Re ? Symbol.for('react.memo') : 60115,
    Nu = Re ? Symbol.for('react.lazy') : 60116,
    qb = Re ? Symbol.for('react.block') : 60121,
    Yb = Re ? Symbol.for('react.fundamental') : 60117,
    Gb = Re ? Symbol.for('react.responder') : 60118,
    Xb = Re ? Symbol.for('react.scope') : 60119;
  function yt(e) {
    if (typeof e == 'object' && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Xd:
          switch (((e = e.type), e)) {
            case Zd:
            case $u:
            case bu:
            case Ou:
            case Eu:
            case Tu:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Pu:
                case ku:
                case Nu:
                case Au:
                case Cu:
                  return e;
                default:
                  return t;
              }
          }
        case Qd:
          return t;
      }
    }
  }
  function n1(e) {
    return yt(e) === $u;
  }
  te.AsyncMode = Zd;
  te.ConcurrentMode = $u;
  te.ContextConsumer = Pu;
  te.ContextProvider = Cu;
  te.Element = Xd;
  te.ForwardRef = ku;
  te.Fragment = bu;
  te.Lazy = Nu;
  te.Memo = Au;
  te.Portal = Qd;
  te.Profiler = Ou;
  te.StrictMode = Eu;
  te.Suspense = Tu;
  te.isAsyncMode = function (e) {
    return n1(e) || yt(e) === Zd;
  };
  te.isConcurrentMode = n1;
  te.isContextConsumer = function (e) {
    return yt(e) === Pu;
  };
  te.isContextProvider = function (e) {
    return yt(e) === Cu;
  };
  te.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === Xd;
  };
  te.isForwardRef = function (e) {
    return yt(e) === ku;
  };
  te.isFragment = function (e) {
    return yt(e) === bu;
  };
  te.isLazy = function (e) {
    return yt(e) === Nu;
  };
  te.isMemo = function (e) {
    return yt(e) === Au;
  };
  te.isPortal = function (e) {
    return yt(e) === Qd;
  };
  te.isProfiler = function (e) {
    return yt(e) === Ou;
  };
  te.isStrictMode = function (e) {
    return yt(e) === Eu;
  };
  te.isSuspense = function (e) {
    return yt(e) === Tu;
  };
  te.isValidElementType = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'function' ||
      e === bu ||
      e === $u ||
      e === Ou ||
      e === Eu ||
      e === Tu ||
      e === Kb ||
      (typeof e == 'object' &&
        e !== null &&
        (e.$$typeof === Nu ||
          e.$$typeof === Au ||
          e.$$typeof === Cu ||
          e.$$typeof === Pu ||
          e.$$typeof === ku ||
          e.$$typeof === Yb ||
          e.$$typeof === Gb ||
          e.$$typeof === Xb ||
          e.$$typeof === qb))
    );
  };
  te.typeOf = yt;
  (function (e) {
    e.exports = te;
  })(r1);
  var i1 = r1.exports,
    Qb = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    Zb = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    o1 = {};
  o1[i1.ForwardRef] = Qb;
  o1[i1.Memo] = Zb;
  var Jb = { exports: {} },
    re = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Jd = Symbol.for('react.element'),
    ep = Symbol.for('react.portal'),
    Fu = Symbol.for('react.fragment'),
    Ru = Symbol.for('react.strict_mode'),
    Lu = Symbol.for('react.profiler'),
    ju = Symbol.for('react.provider'),
    Iu = Symbol.for('react.context'),
    eE = Symbol.for('react.server_context'),
    Du = Symbol.for('react.forward_ref'),
    Mu = Symbol.for('react.suspense'),
    Uu = Symbol.for('react.suspense_list'),
    zu = Symbol.for('react.memo'),
    Bu = Symbol.for('react.lazy'),
    tE = Symbol.for('react.offscreen'),
    a1;
  a1 = Symbol.for('react.module.reference');
  function At(e) {
    if (typeof e == 'object' && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Jd:
          switch (((e = e.type), e)) {
            case Fu:
            case Lu:
            case Ru:
            case Mu:
            case Uu:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case eE:
                case Iu:
                case Du:
                case Bu:
                case zu:
                case ju:
                  return e;
                default:
                  return t;
              }
          }
        case ep:
          return t;
      }
    }
  }
  re.ContextConsumer = Iu;
  re.ContextProvider = ju;
  re.Element = Jd;
  re.ForwardRef = Du;
  re.Fragment = Fu;
  re.Lazy = Bu;
  re.Memo = zu;
  re.Portal = ep;
  re.Profiler = Lu;
  re.StrictMode = Ru;
  re.Suspense = Mu;
  re.SuspenseList = Uu;
  re.isAsyncMode = function () {
    return !1;
  };
  re.isConcurrentMode = function () {
    return !1;
  };
  re.isContextConsumer = function (e) {
    return At(e) === Iu;
  };
  re.isContextProvider = function (e) {
    return At(e) === ju;
  };
  re.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === Jd;
  };
  re.isForwardRef = function (e) {
    return At(e) === Du;
  };
  re.isFragment = function (e) {
    return At(e) === Fu;
  };
  re.isLazy = function (e) {
    return At(e) === Bu;
  };
  re.isMemo = function (e) {
    return At(e) === zu;
  };
  re.isPortal = function (e) {
    return At(e) === ep;
  };
  re.isProfiler = function (e) {
    return At(e) === Lu;
  };
  re.isStrictMode = function (e) {
    return At(e) === Ru;
  };
  re.isSuspense = function (e) {
    return At(e) === Mu;
  };
  re.isSuspenseList = function (e) {
    return At(e) === Uu;
  };
  re.isValidElementType = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'function' ||
      e === Fu ||
      e === Lu ||
      e === Ru ||
      e === Mu ||
      e === Uu ||
      e === tE ||
      (typeof e == 'object' &&
        e !== null &&
        (e.$$typeof === Bu ||
          e.$$typeof === zu ||
          e.$$typeof === ju ||
          e.$$typeof === Iu ||
          e.$$typeof === Du ||
          e.$$typeof === a1 ||
          e.getModuleId !== void 0))
    );
  };
  re.typeOf = At;
  (function (e) {
    e.exports = re;
  })(Jb);
  function rE() {
    const e = Ub();
    let t = null,
      r = null;
    return {
      clear() {
        (t = null), (r = null);
      },
      notify() {
        e(() => {
          let n = t;
          for (; n; ) n.callback(), (n = n.next);
        });
      },
      get() {
        let n = [],
          i = t;
        for (; i; ) n.push(i), (i = i.next);
        return n;
      },
      subscribe(n) {
        let i = !0,
          o = (r = { callback: n, next: null, prev: r });
        return (
          o.prev ? (o.prev.next = o) : (t = o),
          function () {
            !i ||
              t === null ||
              ((i = !1),
              o.next ? (o.next.prev = o.prev) : (r = o.prev),
              o.prev ? (o.prev.next = o.next) : (t = o.next));
          }
        );
      },
    };
  }
  const Zh = { notify() {}, get: () => [] };
  function nE(e, t) {
    let r,
      n = Zh;
    function i(f) {
      return u(), n.subscribe(f);
    }
    function o() {
      n.notify();
    }
    function a() {
      d.onStateChange && d.onStateChange();
    }
    function s() {
      return Boolean(r);
    }
    function u() {
      r || ((r = t ? t.addNestedSub(a) : e.subscribe(a)), (n = rE()));
    }
    function l() {
      r && (r(), (r = void 0), n.clear(), (n = Zh));
    }
    const d = {
      addNestedSub: i,
      notifyNestedSubs: o,
      handleChangeWrapper: a,
      isSubscribed: s,
      trySubscribe: u,
      tryUnsubscribe: l,
      getListeners: () => n,
    };
    return d;
  }
  const iE =
      typeof window < 'u' &&
      typeof window.document < 'u' &&
      typeof window.document.createElement < 'u',
    oE = iE ? O.exports.useLayoutEffect : O.exports.useEffect;
  var Hu = { exports: {} },
    Vu = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var aE = O.exports,
    sE = Symbol.for('react.element'),
    uE = Symbol.for('react.fragment'),
    lE = Object.prototype.hasOwnProperty,
    cE =
      aE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    fE = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s1(e, t, r) {
    var n,
      i = {},
      o = null,
      a = null;
    r !== void 0 && (o = '' + r),
      t.key !== void 0 && (o = '' + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (n in t) lE.call(t, n) && !fE.hasOwnProperty(n) && (i[n] = t[n]);
    if (e && e.defaultProps)
      for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
    return {
      $$typeof: sE,
      type: e,
      key: o,
      ref: a,
      props: i,
      _owner: cE.current,
    };
  }
  Vu.Fragment = uE;
  Vu.jsx = s1;
  Vu.jsxs = s1;
  (function (e) {
    e.exports = Vu;
  })(Hu);
  const u1 = Hu.exports.Fragment,
    w = Hu.exports.jsx,
    L = Hu.exports.jsxs;
  function dE({ store: e, context: t, children: r, serverState: n }) {
    const i = O.exports.useMemo(() => {
        const s = nE(e);
        return {
          store: e,
          subscription: s,
          getServerState: n ? () => n : void 0,
        };
      }, [e, n]),
      o = O.exports.useMemo(() => e.getState(), [e]);
    return (
      oE(() => {
        const { subscription: s } = i;
        return (
          (s.onStateChange = s.notifyNestedSubs),
          s.trySubscribe(),
          o !== e.getState() && s.notifyNestedSubs(),
          () => {
            s.tryUnsubscribe(), (s.onStateChange = void 0);
          }
        );
      }, [i, o]),
      w((t || rn).Provider, { value: i, children: r })
    );
  }
  function l1(e = rn) {
    const t = e === rn ? e1 : () => O.exports.useContext(e);
    return function () {
      const { store: n } = t();
      return n;
    };
  }
  const pE = l1();
  function hE(e = rn) {
    const t = e === rn ? pE : l1(e);
    return function () {
      return t().dispatch;
    };
  }
  const tp = hE();
  Bb(Q0.exports.useSyncExternalStoreWithSelector);
  Mb(od.exports.unstable_batchedUpdates);
  /**
   * @remix-run/router v1.0.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Is() {
    return (
      (Is = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Is.apply(this, arguments)
    );
  }
  var Ur;
  (function (e) {
    (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
  })(Ur || (Ur = {}));
  const Jh = 'popstate';
  function gE(e) {
    e === void 0 && (e = {});
    function t(n, i) {
      let { pathname: o, search: a, hash: s } = n.location;
      return df(
        '',
        { pathname: o, search: a, hash: s },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || 'default'
      );
    }
    function r(n, i) {
      return typeof i == 'string' ? i : pf(i);
    }
    return vE(t, r, null, e);
  }
  function mE() {
    return Math.random().toString(36).substr(2, 8);
  }
  function eg(e) {
    return { usr: e.state, key: e.key };
  }
  function df(e, t, r, n) {
    return (
      r === void 0 && (r = null),
      Is(
        {
          pathname: typeof e == 'string' ? e : e.pathname,
          search: '',
          hash: '',
        },
        typeof t == 'string' ? Ii(t) : t,
        { state: r, key: (t && t.key) || n || mE() }
      )
    );
  }
  function pf(e) {
    let { pathname: t = '/', search: r = '', hash: n = '' } = e;
    return (
      r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
      n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
      t
    );
  }
  function Ii(e) {
    let t = {};
    if (e) {
      let r = e.indexOf('#');
      r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
      let n = e.indexOf('?');
      n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
        e && (t.pathname = e);
    }
    return t;
  }
  function vE(e, t, r, n) {
    n === void 0 && (n = {});
    let { window: i = document.defaultView, v5Compat: o = !1 } = n,
      a = i.history,
      s = Ur.Pop,
      u = null;
    function l() {
      (s = Ur.Pop), u && u({ action: s, location: c.location });
    }
    function d(g, m) {
      s = Ur.Push;
      let v = df(c.location, g, m);
      r && r(v, g);
      let S = eg(v),
        h = c.createHref(v);
      try {
        a.pushState(S, '', h);
      } catch {
        i.location.assign(h);
      }
      o && u && u({ action: s, location: v });
    }
    function f(g, m) {
      s = Ur.Replace;
      let v = df(c.location, g, m);
      r && r(v, g);
      let S = eg(v),
        h = c.createHref(v);
      a.replaceState(S, '', h), o && u && u({ action: s, location: v });
    }
    let c = {
      get action() {
        return s;
      },
      get location() {
        return e(i, a);
      },
      listen(g) {
        if (u) throw new Error('A history only accepts one active listener');
        return (
          i.addEventListener(Jh, l),
          (u = g),
          () => {
            i.removeEventListener(Jh, l), (u = null);
          }
        );
      },
      createHref(g) {
        return t(i, g);
      },
      push: d,
      replace: f,
      go(g) {
        return a.go(g);
      },
    };
    return c;
  }
  var tg;
  (function (e) {
    (e.data = 'data'),
      (e.deferred = 'deferred'),
      (e.redirect = 'redirect'),
      (e.error = 'error');
  })(tg || (tg = {}));
  function yE(e, t, r) {
    r === void 0 && (r = '/');
    let n = typeof t == 'string' ? Ii(t) : t,
      i = f1(n.pathname || '/', r);
    if (i == null) return null;
    let o = c1(e);
    wE(o);
    let a = null;
    for (let s = 0; a == null && s < o.length; ++s) a = $E(o[s], i);
    return a;
  }
  function c1(e, t, r, n) {
    return (
      t === void 0 && (t = []),
      r === void 0 && (r = []),
      n === void 0 && (n = ''),
      e.forEach((i, o) => {
        let a = {
          relativePath: i.path || '',
          caseSensitive: i.caseSensitive === !0,
          childrenIndex: o,
          route: i,
        };
        a.relativePath.startsWith('/') &&
          (Te(
            a.relativePath.startsWith(n),
            'Absolute route path "' +
              a.relativePath +
              '" nested under path ' +
              ('"' + n + '" is not valid. An absolute child route path ') +
              'must start with the combined path of all its parent routes.'
          ),
          (a.relativePath = a.relativePath.slice(n.length)));
        let s = Gr([n, a.relativePath]),
          u = r.concat(a);
        i.children &&
          i.children.length > 0 &&
          (Te(
            i.index !== !0,
            'Index routes must not have child routes. Please remove ' +
              ('all child routes from route path "' + s + '".')
          ),
          c1(i.children, t, u, s)),
          !(i.path == null && !i.index) &&
            t.push({ path: s, score: CE(s, i.index), routesMeta: u });
      }),
      t
    );
  }
  function wE(e) {
    e.sort((t, r) =>
      t.score !== r.score
        ? r.score - t.score
        : PE(
            t.routesMeta.map(n => n.childrenIndex),
            r.routesMeta.map(n => n.childrenIndex)
          )
    );
  }
  const _E = /^:\w+$/,
    SE = 3,
    xE = 2,
    bE = 1,
    EE = 10,
    OE = -2,
    rg = e => e === '*';
  function CE(e, t) {
    let r = e.split('/'),
      n = r.length;
    return (
      r.some(rg) && (n += OE),
      t && (n += xE),
      r
        .filter(i => !rg(i))
        .reduce((i, o) => i + (_E.test(o) ? SE : o === '' ? bE : EE), n)
    );
  }
  function PE(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function $E(e, t) {
    let { routesMeta: r } = e,
      n = {},
      i = '/',
      o = [];
    for (let a = 0; a < r.length; ++a) {
      let s = r[a],
        u = a === r.length - 1,
        l = i === '/' ? t : t.slice(i.length) || '/',
        d = kE(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
          l
        );
      if (!d) return null;
      Object.assign(n, d.params);
      let f = s.route;
      o.push({
        params: n,
        pathname: Gr([i, d.pathname]),
        pathnameBase: RE(Gr([i, d.pathnameBase])),
        route: f,
      }),
        d.pathnameBase !== '/' && (i = Gr([i, d.pathnameBase]));
    }
    return o;
  }
  function kE(e, t) {
    typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
    let [r, n] = TE(e.path, e.caseSensitive, e.end),
      i = t.match(r);
    if (!i) return null;
    let o = i[0],
      a = o.replace(/(.)\/+$/, '$1'),
      s = i.slice(1);
    return {
      params: n.reduce((l, d, f) => {
        if (d === '*') {
          let c = s[f] || '';
          a = o.slice(0, o.length - c.length).replace(/(.)\/+$/, '$1');
        }
        return (l[d] = AE(s[f] || '', d)), l;
      }, {}),
      pathname: o,
      pathnameBase: a,
      pattern: e,
    };
  }
  function TE(e, t, r) {
    t === void 0 && (t = !1),
      r === void 0 && (r = !0),
      d1(
        e === '*' || !e.endsWith('*') || e.endsWith('/*'),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
          'always follow a `/` in the pattern. To get rid of this warning, ' +
          ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
      );
    let n = [],
      i =
        '^' +
        e
          .replace(/\/*\*?$/, '')
          .replace(/^\/*/, '/')
          .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
          .replace(/:(\w+)/g, (a, s) => (n.push(s), '([^\\/]+)'));
    return (
      e.endsWith('*')
        ? (n.push('*'),
          (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
        : r
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
      [new RegExp(i, t ? void 0 : 'i'), n]
    );
  }
  function AE(e, t) {
    try {
      return decodeURIComponent(e);
    } catch (r) {
      return (
        d1(
          !1,
          'The value for the URL param "' +
            t +
            '" will not be decoded because' +
            (' the string "' +
              e +
              '" is a malformed URL segment. This is probably') +
            (' due to a bad percent encoding (' + r + ').')
        ),
        e
      );
    }
  }
  function f1(e, t) {
    if (t === '/') return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith('/') ? t.length - 1 : t.length,
      n = e.charAt(r);
    return n && n !== '/' ? null : e.slice(r) || '/';
  }
  function Te(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
  }
  function d1(e, t) {
    if (!e) {
      typeof console < 'u' && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function NE(e, t) {
    t === void 0 && (t = '/');
    let {
      pathname: r,
      search: n = '',
      hash: i = '',
    } = typeof e == 'string' ? Ii(e) : e;
    return {
      pathname: r ? (r.startsWith('/') ? r : FE(r, t)) : t,
      search: LE(n),
      hash: jE(i),
    };
  }
  function FE(e, t) {
    let r = t.replace(/\/+$/, '').split('/');
    return (
      e.split('/').forEach(i => {
        i === '..' ? r.length > 1 && r.pop() : i !== '.' && r.push(i);
      }),
      r.length > 1 ? r.join('/') : '/'
    );
  }
  function Ml(e, t, r, n) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ('`to.' +
        t +
        '` field [' +
        JSON.stringify(n) +
        '].  Please separate it out to the ') +
      ('`to.' +
        r +
        '` field. Alternatively you may provide the full path as ') +
      'a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function p1(e, t, r, n) {
    n === void 0 && (n = !1);
    let i;
    typeof e == 'string'
      ? (i = Ii(e))
      : ((i = Is({}, e)),
        Te(
          !i.pathname || !i.pathname.includes('?'),
          Ml('?', 'pathname', 'search', i)
        ),
        Te(
          !i.pathname || !i.pathname.includes('#'),
          Ml('#', 'pathname', 'hash', i)
        ),
        Te(!i.search || !i.search.includes('#'), Ml('#', 'search', 'hash', i)));
    let o = e === '' || i.pathname === '',
      a = o ? '/' : i.pathname,
      s;
    if (n || a == null) s = r;
    else {
      let f = t.length - 1;
      if (a.startsWith('..')) {
        let c = a.split('/');
        for (; c[0] === '..'; ) c.shift(), (f -= 1);
        i.pathname = c.join('/');
      }
      s = f >= 0 ? t[f] : '/';
    }
    let u = NE(i, s),
      l = a && a !== '/' && a.endsWith('/'),
      d = (o || a === '.') && r.endsWith('/');
    return !u.pathname.endsWith('/') && (l || d) && (u.pathname += '/'), u;
  }
  const Gr = e => e.join('/').replace(/\/\/+/g, '/'),
    RE = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
    LE = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
    jE = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
  class IE {
    constructor(t, r, n) {
      (this.status = t), (this.statusText = r || ''), (this.data = n);
    }
  }
  function DE(e) {
    return e instanceof IE;
  }
  /**
   * React Router v6.4.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function hf() {
    return (
      (hf = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      hf.apply(this, arguments)
    );
  }
  function ME(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  const UE = typeof Object.is == 'function' ? Object.is : ME,
    {
      useState: zE,
      useEffect: BE,
      useLayoutEffect: HE,
      useDebugValue: VE,
    } = vc;
  function WE(e, t, r) {
    const n = t(),
      [{ inst: i }, o] = zE({ inst: { value: n, getSnapshot: t } });
    return (
      HE(() => {
        (i.value = n), (i.getSnapshot = t), Ul(i) && o({ inst: i });
      }, [e, n, t]),
      BE(
        () => (
          Ul(i) && o({ inst: i }),
          e(() => {
            Ul(i) && o({ inst: i });
          })
        ),
        [e]
      ),
      VE(n),
      n
    );
  }
  function Ul(e) {
    const t = e.getSnapshot,
      r = e.value;
    try {
      const n = t();
      return !UE(r, n);
    } catch {
      return !0;
    }
  }
  function KE(e, t, r) {
    return t();
  }
  const qE =
      typeof window < 'u' &&
      typeof window.document < 'u' &&
      typeof window.document.createElement < 'u',
    YE = !qE,
    GE = YE ? KE : WE;
  'useSyncExternalStore' in vc && (e => e.useSyncExternalStore)(vc);
  const XE = O.exports.createContext(null),
    QE = O.exports.createContext(null),
    rp = O.exports.createContext(null),
    np = O.exports.createContext(null),
    Wu = O.exports.createContext(null),
    Di = O.exports.createContext({ outlet: null, matches: [] }),
    h1 = O.exports.createContext(null);
  function ZE(e, t) {
    let { relative: r } = t === void 0 ? {} : t;
    Mi() || Te(!1);
    let { basename: n, navigator: i } = O.exports.useContext(np),
      { hash: o, pathname: a, search: s } = m1(e, { relative: r }),
      u = a;
    return (
      n !== '/' && (u = a === '/' ? n : Gr([n, a])),
      i.createHref({ pathname: u, search: s, hash: o })
    );
  }
  function Mi() {
    return O.exports.useContext(Wu) != null;
  }
  function Ku() {
    return Mi() || Te(!1), O.exports.useContext(Wu).location;
  }
  function g1(e) {
    return e.filter(
      (t, r) =>
        r === 0 || (!t.route.index && t.pathnameBase !== e[r - 1].pathnameBase)
    );
  }
  function ip() {
    Mi() || Te(!1);
    let { basename: e, navigator: t } = O.exports.useContext(np),
      { matches: r } = O.exports.useContext(Di),
      { pathname: n } = Ku(),
      i = JSON.stringify(g1(r).map(s => s.pathnameBase)),
      o = O.exports.useRef(!1);
    return (
      O.exports.useEffect(() => {
        o.current = !0;
      }),
      O.exports.useCallback(
        function (s, u) {
          if ((u === void 0 && (u = {}), !o.current)) return;
          if (typeof s == 'number') {
            t.go(s);
            return;
          }
          let l = p1(s, JSON.parse(i), n, u.relative === 'path');
          e !== '/' &&
            (l.pathname = l.pathname === '/' ? e : Gr([e, l.pathname])),
            (u.replace ? t.replace : t.push)(l, u.state, u);
        },
        [e, t, i, n]
      )
    );
  }
  const JE = O.exports.createContext(null);
  function eO(e) {
    let t = O.exports.useContext(Di).outlet;
    return t && w(JE.Provider, { value: e, children: t });
  }
  function m1(e, t) {
    let { relative: r } = t === void 0 ? {} : t,
      { matches: n } = O.exports.useContext(Di),
      { pathname: i } = Ku(),
      o = JSON.stringify(g1(n).map(a => a.pathnameBase));
    return O.exports.useMemo(
      () => p1(e, JSON.parse(o), i, r === 'path'),
      [e, o, i, r]
    );
  }
  function tO(e, t) {
    Mi() || Te(!1);
    let r = O.exports.useContext(rp),
      { matches: n } = O.exports.useContext(Di),
      i = n[n.length - 1],
      o = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : '/';
    i && i.route;
    let s = Ku(),
      u;
    if (t) {
      var l;
      let m = typeof t == 'string' ? Ii(t) : t;
      a === '/' ||
        ((l = m.pathname) == null ? void 0 : l.startsWith(a)) ||
        Te(!1),
        (u = m);
    } else u = s;
    let d = u.pathname || '/',
      f = a === '/' ? d : d.slice(a.length) || '/',
      c = yE(e, { pathname: f }),
      g = oO(
        c &&
          c.map(m =>
            Object.assign({}, m, {
              params: Object.assign({}, o, m.params),
              pathname: Gr([a, m.pathname]),
              pathnameBase:
                m.pathnameBase === '/' ? a : Gr([a, m.pathnameBase]),
            })
          ),
        n,
        r || void 0
      );
    return t
      ? w(Wu.Provider, {
          value: {
            location: hf(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              u
            ),
            navigationType: Ur.Pop,
          },
          children: g,
        })
      : g;
  }
  function rO() {
    let e = sO(),
      t = DE(e)
        ? e.status + ' ' + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      r = e instanceof Error ? e.stack : null,
      n = 'rgba(200,200,200, 0.5)',
      i = { padding: '0.5rem', backgroundColor: n },
      o = { padding: '2px 4px', backgroundColor: n };
    return L(u1, {
      children: [
        w('h2', { children: 'Unhandled Thrown Error!' }),
        w('h3', { style: { fontStyle: 'italic' }, children: t }),
        r ? w('pre', { style: i, children: r }) : null,
        w('p', { children: '\u{1F4BF} Hey developer \u{1F44B}' }),
        L('p', {
          children: [
            'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
            w('code', { style: o, children: 'errorElement' }),
            ' props on\xA0',
            w('code', { style: o, children: '<Route>' }),
          ],
        }),
      ],
    });
  }
  class nO extends O.exports.Component {
    constructor(t) {
      super(t), (this.state = { location: t.location, error: t.error });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, r) {
      return r.location !== t.location
        ? { error: t.error, location: t.location }
        : { error: t.error || r.error, location: r.location };
    }
    componentDidCatch(t, r) {
      console.error(
        'React Router caught the following error during render',
        t,
        r
      );
    }
    render() {
      return this.state.error
        ? w(h1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        : this.props.children;
    }
  }
  function iO(e) {
    let { routeContext: t, match: r, children: n } = e,
      i = O.exports.useContext(XE);
    return (
      i && r.route.errorElement && (i._deepestRenderedBoundaryId = r.route.id),
      w(Di.Provider, { value: t, children: n })
    );
  }
  function oO(e, t, r) {
    if ((t === void 0 && (t = []), e == null))
      if (r != null && r.errors) e = r.matches;
      else return null;
    let n = e,
      i = r == null ? void 0 : r.errors;
    if (i != null) {
      let o = n.findIndex(
        a => a.route.id && (i == null ? void 0 : i[a.route.id])
      );
      o >= 0 || Te(!1), (n = n.slice(0, Math.min(n.length, o + 1)));
    }
    return n.reduceRight((o, a, s) => {
      let u = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
        l = r ? a.route.errorElement || w(rO, {}) : null,
        d = () =>
          w(iO, {
            match: a,
            routeContext: { outlet: o, matches: t.concat(n.slice(0, s + 1)) },
            children: u ? l : a.route.element !== void 0 ? a.route.element : o,
          });
      return r && (a.route.errorElement || s === 0)
        ? w(nO, { location: r.location, component: l, error: u, children: d() })
        : d();
    }, null);
  }
  var ng;
  (function (e) {
    e.UseRevalidator = 'useRevalidator';
  })(ng || (ng = {}));
  var gf;
  (function (e) {
    (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator');
  })(gf || (gf = {}));
  function aO(e) {
    let t = O.exports.useContext(rp);
    return t || Te(!1), t;
  }
  function sO() {
    var e;
    let t = O.exports.useContext(h1),
      r = aO(gf.UseRouteError),
      n = O.exports.useContext(Di),
      i = n.matches[n.matches.length - 1];
    return (
      t ||
      (n || Te(!1),
      i.route.id || Te(!1),
      (e = r.errors) == null ? void 0 : e[i.route.id])
    );
  }
  function uO(e) {
    let { to: t, replace: r, state: n, relative: i } = e;
    Mi() || Te(!1);
    let o = O.exports.useContext(rp),
      a = ip();
    return (
      O.exports.useEffect(() => {
        (o && o.navigation.state !== 'idle') ||
          a(t, { replace: r, state: n, relative: i });
      }),
      null
    );
  }
  function op(e) {
    return eO(e.context);
  }
  function Ce(e) {
    Te(!1);
  }
  function lO(e) {
    let {
      basename: t = '/',
      children: r = null,
      location: n,
      navigationType: i = Ur.Pop,
      navigator: o,
      static: a = !1,
    } = e;
    Mi() && Te(!1);
    let s = t.replace(/^\/*/, '/'),
      u = O.exports.useMemo(
        () => ({ basename: s, navigator: o, static: a }),
        [s, o, a]
      );
    typeof n == 'string' && (n = Ii(n));
    let {
        pathname: l = '/',
        search: d = '',
        hash: f = '',
        state: c = null,
        key: g = 'default',
      } = n,
      m = O.exports.useMemo(() => {
        let v = f1(l, s);
        return v == null
          ? null
          : { pathname: v, search: d, hash: f, state: c, key: g };
      }, [s, l, d, f, c, g]);
    return m == null
      ? null
      : w(np.Provider, {
          value: u,
          children: w(Wu.Provider, {
            children: r,
            value: { location: m, navigationType: i },
          }),
        });
  }
  function cO(e) {
    let { children: t, location: r } = e,
      n = O.exports.useContext(QE),
      i = n && !t ? n.router.routes : mf(t);
    return tO(i, r);
  }
  var ig;
  (function (e) {
    (e[(e.pending = 0)] = 'pending'),
      (e[(e.success = 1)] = 'success'),
      (e[(e.error = 2)] = 'error');
  })(ig || (ig = {}));
  new Promise(() => {});
  function mf(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return (
      O.exports.Children.forEach(e, (n, i) => {
        if (!O.exports.isValidElement(n)) return;
        if (n.type === O.exports.Fragment) {
          r.push.apply(r, mf(n.props.children, t));
          return;
        }
        n.type !== Ce && Te(!1), !n.props.index || !n.props.children || Te(!1);
        let o = [...t, i],
          a = {
            id: n.props.id || o.join('-'),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            hasErrorBoundary: n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
          };
        n.props.children && (a.children = mf(n.props.children, o)), r.push(a);
      }),
      r
    );
  }
  /**
   * React Router DOM v6.4.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function fO(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      i,
      o;
    for (o = 0; o < n.length; o++)
      (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
  }
  function dO(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function pO(e, t) {
    return e.button === 0 && (!t || t === '_self') && !dO(e);
  }
  const hO = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ];
  function gO(e) {
    let { basename: t, children: r, window: n } = e,
      i = O.exports.useRef();
    i.current == null && (i.current = gE({ window: n, v5Compat: !0 }));
    let o = i.current,
      [a, s] = O.exports.useState({ action: o.action, location: o.location });
    return (
      O.exports.useLayoutEffect(() => o.listen(s), [o]),
      w(lO, {
        basename: t,
        children: r,
        location: a.location,
        navigationType: a.action,
        navigator: o,
      })
    );
  }
  const v1 = O.exports.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: s,
        target: u,
        to: l,
        preventScrollReset: d,
      } = t,
      f = fO(t, hO),
      c = ZE(l, { relative: i }),
      g = mO(l, {
        replace: a,
        state: s,
        target: u,
        preventScrollReset: d,
        relative: i,
      });
    function m(v) {
      n && n(v), v.defaultPrevented || g(v);
    }
    return w('a', { ...f, href: c, onClick: o ? n : m, ref: r, target: u });
  });
  var og;
  (function (e) {
    (e.UseScrollRestoration = 'useScrollRestoration'),
      (e.UseSubmitImpl = 'useSubmitImpl'),
      (e.UseFetcher = 'useFetcher');
  })(og || (og = {}));
  var ag;
  (function (e) {
    (e.UseFetchers = 'useFetchers'),
      (e.UseScrollRestoration = 'useScrollRestoration');
  })(ag || (ag = {}));
  function mO(e, t) {
    let {
        target: r,
        replace: n,
        state: i,
        preventScrollReset: o,
        relative: a,
      } = t === void 0 ? {} : t,
      s = ip(),
      u = Ku(),
      l = m1(e, { relative: a });
    return O.exports.useCallback(
      d => {
        if (pO(d, r)) {
          d.preventDefault();
          let f = n !== void 0 ? n : pf(u) === pf(l);
          s(e, { replace: f, state: i, preventScrollReset: o, relative: a });
        }
      },
      [u, s, l, n, i, r, e, o, a]
    );
  }
  function vO(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      i,
      o;
    for (o = 0; o < n.length; o++)
      (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
  }
  function y1(e, t) {
    if (e == null) return {};
    var r = vO(e, t),
      n,
      i;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
        (n = o[i]),
          !(t.indexOf(n) >= 0) &&
            (!Object.prototype.propertyIsEnumerable.call(e, n) ||
              (r[n] = e[n]));
    }
    return r;
  }
  function lt(e) {
    return (
      (lt =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == 'function' &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      lt(e)
    );
  }
  function Yt(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  var yO = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
    wO = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
  function sg(e) {
    var t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
      r = e.match(/<\/?([^\s]+?)[/\s>]/);
    if (
      r &&
      ((t.name = r[1]),
      (yO[r[1]] || e.charAt(e.length - 2) === '/') && (t.voidElement = !0),
      t.name.startsWith('!--'))
    ) {
      var n = e.indexOf('-->');
      return { type: 'comment', comment: n !== -1 ? e.slice(4, n) : '' };
    }
    for (var i = new RegExp(wO), o = null; (o = i.exec(e)) !== null; )
      if (o[0].trim())
        if (o[1]) {
          var a = o[1].trim(),
            s = [a, ''];
          a.indexOf('=') > -1 && (s = a.split('=')),
            (t.attrs[s[0]] = s[1]),
            i.lastIndex--;
        } else
          o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
    return t;
  }
  var _O = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    SO = /^\s*$/,
    xO = Object.create(null);
  function w1(e, t) {
    switch (t.type) {
      case 'text':
        return e + t.content;
      case 'tag':
        return (
          (e +=
            '<' +
            t.name +
            (t.attrs
              ? (function (r) {
                  var n = [];
                  for (var i in r) n.push(i + '="' + r[i] + '"');
                  return n.length ? ' ' + n.join(' ') : '';
                })(t.attrs)
              : '') +
            (t.voidElement ? '/>' : '>')),
          t.voidElement
            ? e
            : e + t.children.reduce(w1, '') + '</' + t.name + '>'
        );
      case 'comment':
        return e + '<!--' + t.comment + '-->';
    }
  }
  var bO = {
    parse: function (e, t) {
      t || (t = {}), t.components || (t.components = xO);
      var r,
        n = [],
        i = [],
        o = -1,
        a = !1;
      if (e.indexOf('<') !== 0) {
        var s = e.indexOf('<');
        n.push({ type: 'text', content: s === -1 ? e : e.substring(0, s) });
      }
      return (
        e.replace(_O, function (u, l) {
          if (a) {
            if (u !== '</' + r.name + '>') return;
            a = !1;
          }
          var d,
            f = u.charAt(1) !== '/',
            c = u.startsWith('<!--'),
            g = l + u.length,
            m = e.charAt(g);
          if (c) {
            var v = sg(u);
            return o < 0 ? (n.push(v), n) : ((d = i[o]).children.push(v), n);
          }
          if (
            (f &&
              (o++,
              (r = sg(u)).type === 'tag' &&
                t.components[r.name] &&
                ((r.type = 'component'), (a = !0)),
              r.voidElement ||
                a ||
                !m ||
                m === '<' ||
                r.children.push({
                  type: 'text',
                  content: e.slice(g, e.indexOf('<', g)),
                }),
              o === 0 && n.push(r),
              (d = i[o - 1]) && d.children.push(r),
              (i[o] = r)),
            (!f || r.voidElement) &&
              (o > -1 &&
                (r.voidElement || r.name === u.slice(2, -1)) &&
                (o--, (r = o === -1 ? n : i[o])),
              !a && m !== '<' && m))
          ) {
            d = o === -1 ? n : i[o].children;
            var S = e.indexOf('<', g),
              h = e.slice(g, S === -1 ? void 0 : S);
            SO.test(h) && (h = ' '),
              ((S > -1 && o + d.length >= 0) || h !== ' ') &&
                d.push({ type: 'text', content: h });
          }
        }),
        n
      );
    },
    stringify: function (e) {
      return e.reduce(function (t, r) {
        return t + w1('', r);
      }, '');
    },
  };
  function Nt(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function ug(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function Ft(e, t, r) {
    return (
      t && ug(e.prototype, t),
      r && ug(e, r),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  var EO =
      /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    OO = {
      '&amp;': '&',
      '&#38;': '&',
      '&lt;': '<',
      '&#60;': '<',
      '&gt;': '>',
      '&#62;': '>',
      '&apos;': "'",
      '&#39;': "'",
      '&quot;': '"',
      '&#34;': '"',
      '&nbsp;': ' ',
      '&#160;': ' ',
      '&copy;': '\xA9',
      '&#169;': '\xA9',
      '&reg;': '\xAE',
      '&#174;': '\xAE',
      '&hellip;': '\u2026',
      '&#8230;': '\u2026',
      '&#x2F;': '/',
      '&#47;': '/',
    },
    CO = function (t) {
      return OO[t];
    },
    PO = function (t) {
      return t.replace(EO, CO);
    };
  function lg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function cg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? lg(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : lg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  var vf = {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: !0,
      transWrapTextNodes: '',
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
      useSuspense: !0,
      unescape: PO,
    },
    _1,
    ap = O.exports.createContext();
  function $O() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vf = cg(cg({}, vf), e);
  }
  function S1() {
    return vf;
  }
  var kO = (function () {
    function e() {
      Nt(this, e), (this.usedNamespaces = {});
    }
    return (
      Ft(e, [
        {
          key: 'addUsedNamespaces',
          value: function (r) {
            var n = this;
            r.forEach(function (i) {
              n.usedNamespaces[i] || (n.usedNamespaces[i] = !0);
            });
          },
        },
        {
          key: 'getUsedNamespaces',
          value: function () {
            return Object.keys(this.usedNamespaces);
          },
        },
      ]),
      e
    );
  })();
  function TO(e) {
    _1 = e;
  }
  function x1() {
    return _1;
  }
  var AO = {
    type: '3rdParty',
    init: function (t) {
      $O(t.options.react), TO(t);
    },
  };
  function is() {
    if (console && console.warn) {
      for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      typeof r[0] == 'string' && (r[0] = 'react-i18next:: '.concat(r[0])),
        (e = console).warn.apply(e, r);
    }
  }
  var fg = {};
  function Ds() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    (typeof t[0] == 'string' && fg[t[0]]) ||
      (typeof t[0] == 'string' && (fg[t[0]] = new Date()), is.apply(void 0, t));
  }
  function dg(e, t, r) {
    e.loadNamespaces(t, function () {
      if (e.isInitialized) r();
      else {
        var n = function i() {
          setTimeout(function () {
            e.off('initialized', i);
          }, 0),
            r();
        };
        e.on('initialized', n);
      }
    });
  }
  function NO(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      n = t.languages[0],
      i = t.options ? t.options.fallbackLng : !1,
      o = t.languages[t.languages.length - 1];
    if (n.toLowerCase() === 'cimode') return !0;
    var a = function (u, l) {
      var d = t.services.backendConnector.state[''.concat(u, '|').concat(l)];
      return d === -1 || d === 2;
    };
    return r.bindI18n &&
      r.bindI18n.indexOf('languageChanging') > -1 &&
      t.services.backendConnector.backend &&
      t.isLanguageChangingTo &&
      !a(t.isLanguageChangingTo, e)
      ? !1
      : !!(
          t.hasResourceBundle(n, e) ||
          !t.services.backendConnector.backend ||
          (t.options.resources && !t.options.partialBundledLanguages) ||
          (a(n, e) && (!i || a(o, e)))
        );
  }
  function FO(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t.languages || !t.languages.length)
      return Ds('i18n.languages were undefined or empty', t.languages), !0;
    var n = t.options.ignoreJSONStructure !== void 0;
    return n
      ? t.hasLoadedNamespace(e, {
          precheck: function (o, a) {
            if (
              r.bindI18n &&
              r.bindI18n.indexOf('languageChanging') > -1 &&
              o.services.backendConnector.backend &&
              o.isLanguageChangingTo &&
              !a(o.isLanguageChangingTo, e)
            )
              return !1;
          },
        })
      : NO(e, t, r);
  }
  var RO = ['format'],
    LO = [
      'children',
      'count',
      'parent',
      'i18nKey',
      'context',
      'tOptions',
      'values',
      'defaults',
      'components',
      'ns',
      'i18n',
      't',
      'shouldUnescape',
    ];
  function pg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Pe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? pg(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function zl(e, t) {
    if (!e) return !1;
    var r = e.props ? e.props.children : e.children;
    return t ? r.length > 0 : !!r;
  }
  function Bl(e) {
    return e ? (e.props ? e.props.children : e.children) : [];
  }
  function jO(e) {
    return Object.prototype.toString.call(e) !== '[object Array]'
      ? !1
      : e.every(function (t) {
          return O.exports.isValidElement(t);
        });
  }
  function wo(e) {
    return Array.isArray(e) ? e : [e];
  }
  function IO(e, t) {
    var r = Pe({}, t);
    return (r.props = Object.assign(e.props, t.props)), r;
  }
  function b1(e, t) {
    if (!e) return '';
    var r = '',
      n = wo(e),
      i =
        t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor
          ? t.transKeepBasicHtmlNodesFor
          : [];
    return (
      n.forEach(function (o, a) {
        if (typeof o == 'string') r += ''.concat(o);
        else if (O.exports.isValidElement(o)) {
          var s = Object.keys(o.props).length,
            u = i.indexOf(o.type) > -1,
            l = o.props.children;
          if (!l && u && s === 0) r += '<'.concat(o.type, '/>');
          else if (!l && (!u || s !== 0))
            r += '<'.concat(a, '></').concat(a, '>');
          else if (o.props.i18nIsDynamicList)
            r += '<'.concat(a, '></').concat(a, '>');
          else if (u && s === 1 && typeof l == 'string')
            r += '<'.concat(o.type, '>').concat(l, '</').concat(o.type, '>');
          else {
            var d = b1(l, t);
            r += '<'.concat(a, '>').concat(d, '</').concat(a, '>');
          }
        } else if (o === null)
          is(
            'Trans: the passed in value is invalid - seems you passed in a null child.'
          );
        else if (lt(o) === 'object') {
          var f = o.format,
            c = y1(o, RO),
            g = Object.keys(c);
          if (g.length === 1) {
            var m = f ? ''.concat(g[0], ', ').concat(f) : g[0];
            r += '{{'.concat(m, '}}');
          } else
            is(
              'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
              o
            );
        } else
          is(
            'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
            o
          );
      }),
      r
    );
  }
  function DO(e, t, r, n, i, o) {
    if (t === '') return [];
    var a = n.transKeepBasicHtmlNodesFor || [],
      s = t && new RegExp(a.join('|')).test(t);
    if (!e && !s) return [t];
    var u = {};
    function l(S) {
      var h = wo(S);
      h.forEach(function (p) {
        typeof p != 'string' &&
          (zl(p)
            ? l(Bl(p))
            : lt(p) === 'object' &&
              !O.exports.isValidElement(p) &&
              Object.assign(u, p));
      });
    }
    l(e);
    var d = bO.parse('<0>'.concat(t, '</0>')),
      f = Pe(Pe({}, u), i);
    function c(S, h, p) {
      var y = Bl(S),
        _ = m(y, h.children, p);
      return jO(y) && _.length === 0 ? y : _;
    }
    function g(S, h, p, y, _) {
      S.dummy && (S.children = h),
        p.push(
          O.exports.cloneElement(
            S,
            Pe(Pe({}, S.props), {}, { key: y }),
            _ ? void 0 : h
          )
        );
    }
    function m(S, h, p) {
      var y = wo(S),
        _ = wo(h);
      return _.reduce(function (x, E, $) {
        var k =
          E.children &&
          E.children[0] &&
          E.children[0].content &&
          r.services.interpolator.interpolate(
            E.children[0].content,
            f,
            r.language
          );
        if (E.type === 'tag') {
          var D = y[parseInt(E.name, 10)];
          !D && p.length === 1 && p[0][E.name] && (D = p[0][E.name]),
            D || (D = {});
          var F =
              Object.keys(E.attrs).length !== 0 ? IO({ props: E.attrs }, D) : D,
            z = O.exports.isValidElement(F),
            me = z && zl(E, !0) && !E.voidElement,
            Oe = s && lt(F) === 'object' && F.dummy && !z,
            b =
              lt(e) === 'object' &&
              e !== null &&
              Object.hasOwnProperty.call(e, E.name);
          if (typeof F == 'string') {
            var N = r.services.interpolator.interpolate(F, f, r.language);
            x.push(N);
          } else if (zl(F) || me) {
            var B = c(F, E, p);
            g(F, B, x, $);
          } else if (Oe) {
            var X = m(y, E.children, p);
            x.push(
              O.exports.cloneElement(F, Pe(Pe({}, F.props), {}, { key: $ }), X)
            );
          } else if (Number.isNaN(parseFloat(E.name)))
            if (b) {
              var A = c(F, E, p);
              g(F, A, x, $, E.voidElement);
            } else if (n.transSupportBasicHtmlNodes && a.indexOf(E.name) > -1)
              if (E.voidElement)
                x.push(
                  O.exports.createElement(E.name, {
                    key: ''.concat(E.name, '-').concat($),
                  })
                );
              else {
                var R = m(y, E.children, p);
                x.push(
                  O.exports.createElement(
                    E.name,
                    { key: ''.concat(E.name, '-').concat($) },
                    R
                  )
                );
              }
            else if (E.voidElement) x.push('<'.concat(E.name, ' />'));
            else {
              var U = m(y, E.children, p);
              x.push(
                '<'.concat(E.name, '>').concat(U, '</').concat(E.name, '>')
              );
            }
          else if (lt(F) === 'object' && !z) {
            var W = E.children[0] ? k : null;
            W && x.push(W);
          } else
            E.children.length === 1 && k
              ? x.push(
                  O.exports.cloneElement(
                    F,
                    Pe(Pe({}, F.props), {}, { key: $ }),
                    k
                  )
                )
              : x.push(
                  O.exports.cloneElement(F, Pe(Pe({}, F.props), {}, { key: $ }))
                );
        } else if (E.type === 'text') {
          var Q = n.transWrapTextNodes,
            Ue = o
              ? n.unescape(
                  r.services.interpolator.interpolate(E.content, f, r.language)
                )
              : r.services.interpolator.interpolate(E.content, f, r.language);
          Q
            ? x.push(
                O.exports.createElement(
                  Q,
                  { key: ''.concat(E.name, '-').concat($) },
                  Ue
                )
              )
            : x.push(Ue);
        }
        return x;
      }, []);
    }
    var v = m([{ dummy: !0, children: e || [] }], d, wo(e || []));
    return Bl(v[0]);
  }
  function MO(e) {
    var t = e.children,
      r = e.count,
      n = e.parent,
      i = e.i18nKey,
      o = e.context,
      a = e.tOptions,
      s = a === void 0 ? {} : a,
      u = e.values,
      l = e.defaults,
      d = e.components,
      f = e.ns,
      c = e.i18n,
      g = e.t,
      m = e.shouldUnescape,
      v = y1(e, LO),
      S = O.exports.useContext(ap) || {},
      h = S.i18n,
      p = S.defaultNS,
      y = c || h || x1();
    if (!y)
      return (
        Ds(
          'You will need to pass in an i18next instance by using i18nextReactModule'
        ),
        t
      );
    var _ =
      g ||
      y.t.bind(y) ||
      function (N) {
        return N;
      };
    o && (s.context = o);
    var x = Pe(Pe({}, S1()), y.options && y.options.react),
      E = f || _.ns || p || (y.options && y.options.defaultNS);
    E = typeof E == 'string' ? [E] : E || ['translation'];
    var $ = l || b1(t, x) || x.transEmptyNodeValue || i,
      k = x.hashTransKey,
      D = i || (k ? k($) : $),
      F = u
        ? s.interpolation
        : {
            interpolation: Pe(
              Pe({}, s.interpolation),
              {},
              { prefix: '#$?', suffix: '?$#' }
            ),
          },
      z = Pe(
        Pe(Pe(Pe({}, s), {}, { count: r }, u), F),
        {},
        { defaultValue: $, ns: E }
      ),
      me = D ? _(D, z) : $,
      Oe = DO(d || t, me, y, x, z, m),
      b = n !== void 0 ? n : x.defaultTransParent;
    return b ? O.exports.createElement(b, v, Oe) : Oe;
  }
  function E1(e) {
    if (Array.isArray(e)) return e;
  }
  function UO(e, t) {
    var r =
      e == null
        ? null
        : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
    if (r != null) {
      var n = [],
        i = !0,
        o = !1,
        a,
        s;
      try {
        for (
          r = r.call(e);
          !(i = (a = r.next()).done) &&
          (n.push(a.value), !(t && n.length === t));
          i = !0
        );
      } catch (u) {
        (o = !0), (s = u);
      } finally {
        try {
          !i && r.return != null && r.return();
        } finally {
          if (o) throw s;
        }
      }
      return n;
    }
  }
  function hg(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function O1(e, t) {
    if (!!e) {
      if (typeof e == 'string') return hg(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (r === 'Object' && e.constructor && (r = e.constructor.name),
        r === 'Map' || r === 'Set')
      )
        return Array.from(e);
      if (
        r === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return hg(e, t);
    }
  }
  function C1() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function zO(e, t) {
    return E1(e) || UO(e, t) || O1(e, t) || C1();
  }
  function gg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Hl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? gg(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  var BO = function (t, r) {
    var n = O.exports.useRef();
    return (
      O.exports.useEffect(
        function () {
          n.current = r ? n.current : t;
        },
        [t, r]
      ),
      n.current
    );
  };
  function xe(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.i18n,
      n = O.exports.useContext(ap) || {},
      i = n.i18n,
      o = n.defaultNS,
      a = r || i || x1();
    if ((a && !a.reportNamespaces && (a.reportNamespaces = new kO()), !a)) {
      Ds(
        'You will need to pass in an i18next instance by using initReactI18next'
      );
      var s = function (D) {
          return Array.isArray(D) ? D[D.length - 1] : D;
        },
        u = [s, {}, !1];
      return (u.t = s), (u.i18n = {}), (u.ready = !1), u;
    }
    a.options.react &&
      a.options.react.wait !== void 0 &&
      Ds(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      );
    var l = Hl(Hl(Hl({}, S1()), a.options.react), t),
      d = l.useSuspense,
      f = l.keyPrefix,
      c = e || o || (a.options && a.options.defaultNS);
    (c = typeof c == 'string' ? [c] : c || ['translation']),
      a.reportNamespaces.addUsedNamespaces &&
        a.reportNamespaces.addUsedNamespaces(c);
    var g =
      (a.isInitialized || a.initializedStoreOnce) &&
      c.every(function (k) {
        return FO(k, a, l);
      });
    function m() {
      return a.getFixedT(null, l.nsMode === 'fallback' ? c : c[0], f);
    }
    var v = O.exports.useState(m),
      S = zO(v, 2),
      h = S[0],
      p = S[1],
      y = c.join(),
      _ = BO(y),
      x = O.exports.useRef(!0);
    O.exports.useEffect(
      function () {
        var k = l.bindI18n,
          D = l.bindI18nStore;
        (x.current = !0),
          !g &&
            !d &&
            dg(a, c, function () {
              x.current && p(m);
            }),
          g && _ && _ !== y && x.current && p(m);
        function F() {
          x.current && p(m);
        }
        return (
          k && a && a.on(k, F),
          D && a && a.store.on(D, F),
          function () {
            (x.current = !1),
              k &&
                a &&
                k.split(' ').forEach(function (z) {
                  return a.off(z, F);
                }),
              D &&
                a &&
                D.split(' ').forEach(function (z) {
                  return a.store.off(z, F);
                });
          }
        );
      },
      [a, y]
    );
    var E = O.exports.useRef(!0);
    O.exports.useEffect(
      function () {
        x.current && !E.current && p(m), (E.current = !1);
      },
      [a, f]
    );
    var $ = [h, a, g];
    if ((($.t = h), ($.i18n = a), ($.ready = g), g || (!g && !d))) return $;
    throw new Promise(function (k) {
      dg(a, c, function () {
        k();
      });
    });
  }
  function HO(e) {
    var t = e.i18n,
      r = e.defaultNS,
      n = e.children,
      i = O.exports.useMemo(
        function () {
          return { i18n: t, defaultNS: r };
        },
        [t, r]
      );
    return O.exports.createElement(ap.Provider, { value: i }, n);
  }
  function Xr(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function yf(e, t) {
    return (
      (yf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, i) {
            return (n.__proto__ = i), n;
          }),
      yf(e, t)
    );
  }
  function qu(e, t) {
    if (typeof t != 'function' && t !== null)
      throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      t && yf(e, t);
  }
  function sa(e, t) {
    if (t && (lt(t) === 'object' || typeof t == 'function')) return t;
    if (t !== void 0)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return Xr(e);
  }
  function ur(e) {
    return (
      (ur = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      ur(e)
    );
  }
  function VO(e) {
    if (
      (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
      e['@@iterator'] != null
    )
      return Array.from(e);
  }
  function WO(e) {
    return E1(e) || VO(e) || O1(e) || C1();
  }
  function mg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function vg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? mg(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  var KO = {
      type: 'logger',
      log: function (t) {
        this.output('log', t);
      },
      warn: function (t) {
        this.output('warn', t);
      },
      error: function (t) {
        this.output('error', t);
      },
      output: function (t, r) {
        console && console[t] && console[t].apply(console, r);
      },
    },
    qO = (function () {
      function e(t) {
        var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Nt(this, e), this.init(t, r);
      }
      return (
        Ft(e, [
          {
            key: 'init',
            value: function (r) {
              var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              (this.prefix = n.prefix || 'i18next:'),
                (this.logger = r || KO),
                (this.options = n),
                (this.debug = n.debug);
            },
          },
          {
            key: 'setDebug',
            value: function (r) {
              this.debug = r;
            },
          },
          {
            key: 'log',
            value: function () {
              for (
                var r = arguments.length, n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = arguments[i];
              return this.forward(n, 'log', '', !0);
            },
          },
          {
            key: 'warn',
            value: function () {
              for (
                var r = arguments.length, n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = arguments[i];
              return this.forward(n, 'warn', '', !0);
            },
          },
          {
            key: 'error',
            value: function () {
              for (
                var r = arguments.length, n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = arguments[i];
              return this.forward(n, 'error', '');
            },
          },
          {
            key: 'deprecate',
            value: function () {
              for (
                var r = arguments.length, n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = arguments[i];
              return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
            },
          },
          {
            key: 'forward',
            value: function (r, n, i, o) {
              return o && !this.debug
                ? null
                : (typeof r[0] == 'string' &&
                    (r[0] = ''.concat(i).concat(this.prefix, ' ').concat(r[0])),
                  this.logger[n](r));
            },
          },
          {
            key: 'create',
            value: function (r) {
              return new e(
                this.logger,
                vg(
                  vg(
                    {},
                    { prefix: ''.concat(this.prefix, ':').concat(r, ':') }
                  ),
                  this.options
                )
              );
            },
          },
          {
            key: 'clone',
            value: function (r) {
              return (
                (r = r || this.options),
                (r.prefix = r.prefix || this.prefix),
                new e(this.logger, r)
              );
            },
          },
        ]),
        e
      );
    })(),
    rr = new qO(),
    nn = (function () {
      function e() {
        Nt(this, e), (this.observers = {});
      }
      return (
        Ft(e, [
          {
            key: 'on',
            value: function (r, n) {
              var i = this;
              return (
                r.split(' ').forEach(function (o) {
                  (i.observers[o] = i.observers[o] || []),
                    i.observers[o].push(n);
                }),
                this
              );
            },
          },
          {
            key: 'off',
            value: function (r, n) {
              if (!!this.observers[r]) {
                if (!n) {
                  delete this.observers[r];
                  return;
                }
                this.observers[r] = this.observers[r].filter(function (i) {
                  return i !== n;
                });
              }
            },
          },
          {
            key: 'emit',
            value: function (r) {
              for (
                var n = arguments.length,
                  i = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                i[o - 1] = arguments[o];
              if (this.observers[r]) {
                var a = [].concat(this.observers[r]);
                a.forEach(function (u) {
                  u.apply(void 0, i);
                });
              }
              if (this.observers['*']) {
                var s = [].concat(this.observers['*']);
                s.forEach(function (u) {
                  u.apply(u, [r].concat(i));
                });
              }
            },
          },
        ]),
        e
      );
    })();
  function io() {
    var e,
      t,
      r = new Promise(function (n, i) {
        (e = n), (t = i);
      });
    return (r.resolve = e), (r.reject = t), r;
  }
  function yg(e) {
    return e == null ? '' : '' + e;
  }
  function YO(e, t, r) {
    e.forEach(function (n) {
      t[n] && (r[n] = t[n]);
    });
  }
  function sp(e, t, r) {
    function n(s) {
      return s && s.indexOf('###') > -1 ? s.replace(/###/g, '.') : s;
    }
    function i() {
      return !e || typeof e == 'string';
    }
    for (
      var o = typeof t != 'string' ? [].concat(t) : t.split('.');
      o.length > 1;

    ) {
      if (i()) return {};
      var a = n(o.shift());
      !e[a] && r && (e[a] = new r()),
        Object.prototype.hasOwnProperty.call(e, a) ? (e = e[a]) : (e = {});
    }
    return i() ? {} : { obj: e, k: n(o.shift()) };
  }
  function wg(e, t, r) {
    var n = sp(e, t, Object),
      i = n.obj,
      o = n.k;
    i[o] = r;
  }
  function GO(e, t, r, n) {
    var i = sp(e, t, Object),
      o = i.obj,
      a = i.k;
    (o[a] = o[a] || []), n && (o[a] = o[a].concat(r)), n || o[a].push(r);
  }
  function Ms(e, t) {
    var r = sp(e, t),
      n = r.obj,
      i = r.k;
    if (!!n) return n[i];
  }
  function _g(e, t, r) {
    var n = Ms(e, r);
    return n !== void 0 ? n : Ms(t, r);
  }
  function P1(e, t, r) {
    for (var n in t)
      n !== '__proto__' &&
        n !== 'constructor' &&
        (n in e
          ? typeof e[n] == 'string' ||
            e[n] instanceof String ||
            typeof t[n] == 'string' ||
            t[n] instanceof String
            ? r && (e[n] = t[n])
            : P1(e[n], t[n], r)
          : (e[n] = t[n]));
    return e;
  }
  function Kn(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }
  var XO = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  };
  function QO(e) {
    return typeof e == 'string'
      ? e.replace(/[&<>"'\/]/g, function (t) {
          return XO[t];
        })
      : e;
  }
  var Yu =
      typeof window < 'u' &&
      window.navigator &&
      typeof window.navigator.userAgentData > 'u' &&
      window.navigator.userAgent &&
      window.navigator.userAgent.indexOf('MSIE') > -1,
    ZO = [' ', ',', '?', '!', ';'];
  function JO(e, t, r) {
    (t = t || ''), (r = r || '');
    var n = ZO.filter(function (s) {
      return t.indexOf(s) < 0 && r.indexOf(s) < 0;
    });
    if (n.length === 0) return !0;
    var i = new RegExp(
        '('.concat(
          n
            .map(function (s) {
              return s === '?' ? '\\?' : s;
            })
            .join('|'),
          ')'
        )
      ),
      o = !i.test(e);
    if (!o) {
      var a = e.indexOf(r);
      a > 0 && !i.test(e.substring(0, a)) && (o = !0);
    }
    return o;
  }
  function Sg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function La(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Sg(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function eC(e) {
    var t = tC();
    return function () {
      var n = ur(e),
        i;
      if (t) {
        var o = ur(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else i = n.apply(this, arguments);
      return sa(this, i);
    };
  }
  function tC() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function $1(e, t) {
    var r =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!!e) {
      if (e[t]) return e[t];
      for (var n = t.split(r), i = e, o = 0; o < n.length; ++o) {
        if (!i || (typeof i[n[o]] == 'string' && o + 1 < n.length)) return;
        if (i[n[o]] === void 0) {
          for (
            var a = 2, s = n.slice(o, o + a).join(r), u = i[s];
            u === void 0 && n.length > o + a;

          )
            a++, (s = n.slice(o, o + a).join(r)), (u = i[s]);
          if (u === void 0) return;
          if (u === null) return null;
          if (t.endsWith(s)) {
            if (typeof u == 'string') return u;
            if (s && typeof u[s] == 'string') return u[s];
          }
          var l = n.slice(o + a).join(r);
          return l ? $1(u, l, r) : void 0;
        }
        i = i[n[o]];
      }
      return i;
    }
  }
  var rC = (function (e) {
      qu(r, e);
      var t = eC(r);
      function r(n) {
        var i,
          o =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : { ns: ['translation'], defaultNS: 'translation' };
        return (
          Nt(this, r),
          (i = t.call(this)),
          Yu && nn.call(Xr(i)),
          (i.data = n || {}),
          (i.options = o),
          i.options.keySeparator === void 0 && (i.options.keySeparator = '.'),
          i.options.ignoreJSONStructure === void 0 &&
            (i.options.ignoreJSONStructure = !0),
          i
        );
      }
      return (
        Ft(r, [
          {
            key: 'addNamespaces',
            value: function (i) {
              this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
            },
          },
          {
            key: 'removeNamespaces',
            value: function (i) {
              var o = this.options.ns.indexOf(i);
              o > -1 && this.options.ns.splice(o, 1);
            },
          },
          {
            key: 'getResource',
            value: function (i, o, a) {
              var s =
                  arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : {},
                u =
                  s.keySeparator !== void 0
                    ? s.keySeparator
                    : this.options.keySeparator,
                l =
                  s.ignoreJSONStructure !== void 0
                    ? s.ignoreJSONStructure
                    : this.options.ignoreJSONStructure,
                d = [i, o];
              a && typeof a != 'string' && (d = d.concat(a)),
                a && typeof a == 'string' && (d = d.concat(u ? a.split(u) : a)),
                i.indexOf('.') > -1 && (d = i.split('.'));
              var f = Ms(this.data, d);
              return f || !l || typeof a != 'string'
                ? f
                : $1(this.data && this.data[i] && this.data[i][o], a, u);
            },
          },
          {
            key: 'addResource',
            value: function (i, o, a, s) {
              var u =
                  arguments.length > 4 && arguments[4] !== void 0
                    ? arguments[4]
                    : { silent: !1 },
                l = this.options.keySeparator;
              l === void 0 && (l = '.');
              var d = [i, o];
              a && (d = d.concat(l ? a.split(l) : a)),
                i.indexOf('.') > -1 &&
                  ((d = i.split('.')), (s = o), (o = d[1])),
                this.addNamespaces(o),
                wg(this.data, d, s),
                u.silent || this.emit('added', i, o, a, s);
            },
          },
          {
            key: 'addResources',
            value: function (i, o, a) {
              var s =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : { silent: !1 };
              for (var u in a)
                (typeof a[u] == 'string' ||
                  Object.prototype.toString.apply(a[u]) === '[object Array]') &&
                  this.addResource(i, o, u, a[u], { silent: !0 });
              s.silent || this.emit('added', i, o, a);
            },
          },
          {
            key: 'addResourceBundle',
            value: function (i, o, a, s, u) {
              var l =
                  arguments.length > 5 && arguments[5] !== void 0
                    ? arguments[5]
                    : { silent: !1 },
                d = [i, o];
              i.indexOf('.') > -1 &&
                ((d = i.split('.')), (s = a), (a = o), (o = d[1])),
                this.addNamespaces(o);
              var f = Ms(this.data, d) || {};
              s ? P1(f, a, u) : (f = La(La({}, f), a)),
                wg(this.data, d, f),
                l.silent || this.emit('added', i, o, a);
            },
          },
          {
            key: 'removeResourceBundle',
            value: function (i, o) {
              this.hasResourceBundle(i, o) && delete this.data[i][o],
                this.removeNamespaces(o),
                this.emit('removed', i, o);
            },
          },
          {
            key: 'hasResourceBundle',
            value: function (i, o) {
              return this.getResource(i, o) !== void 0;
            },
          },
          {
            key: 'getResourceBundle',
            value: function (i, o) {
              return (
                o || (o = this.options.defaultNS),
                this.options.compatibilityAPI === 'v1'
                  ? La(La({}, {}), this.getResource(i, o))
                  : this.getResource(i, o)
              );
            },
          },
          {
            key: 'getDataByLanguage',
            value: function (i) {
              return this.data[i];
            },
          },
          {
            key: 'hasLanguageSomeTranslations',
            value: function (i) {
              var o = this.getDataByLanguage(i),
                a = (o && Object.keys(o)) || [];
              return !!a.find(function (s) {
                return o[s] && Object.keys(o[s]).length > 0;
              });
            },
          },
          {
            key: 'toJSON',
            value: function () {
              return this.data;
            },
          },
        ]),
        r
      );
    })(nn),
    k1 = {
      processors: {},
      addPostProcessor: function (t) {
        this.processors[t.name] = t;
      },
      handle: function (t, r, n, i, o) {
        var a = this;
        return (
          t.forEach(function (s) {
            a.processors[s] && (r = a.processors[s].process(r, n, i, o));
          }),
          r
        );
      },
    };
  function xg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Ge(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? xg(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function nC(e) {
    var t = iC();
    return function () {
      var n = ur(e),
        i;
      if (t) {
        var o = ur(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else i = n.apply(this, arguments);
      return sa(this, i);
    };
  }
  function iC() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  var bg = {},
    Eg = (function (e) {
      qu(r, e);
      var t = nC(r);
      function r(n) {
        var i,
          o =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return (
          Nt(this, r),
          (i = t.call(this)),
          Yu && nn.call(Xr(i)),
          YO(
            [
              'resourceStore',
              'languageUtils',
              'pluralResolver',
              'interpolator',
              'backendConnector',
              'i18nFormat',
              'utils',
            ],
            n,
            Xr(i)
          ),
          (i.options = o),
          i.options.keySeparator === void 0 && (i.options.keySeparator = '.'),
          (i.logger = rr.create('translator')),
          i
        );
      }
      return (
        Ft(
          r,
          [
            {
              key: 'changeLanguage',
              value: function (i) {
                i && (this.language = i);
              },
            },
            {
              key: 'exists',
              value: function (i) {
                var o =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : { interpolation: {} };
                if (i == null) return !1;
                var a = this.resolve(i, o);
                return a && a.res !== void 0;
              },
            },
            {
              key: 'extractFromKey',
              value: function (i, o) {
                var a =
                  o.nsSeparator !== void 0
                    ? o.nsSeparator
                    : this.options.nsSeparator;
                a === void 0 && (a = ':');
                var s =
                    o.keySeparator !== void 0
                      ? o.keySeparator
                      : this.options.keySeparator,
                  u = o.ns || this.options.defaultNS || [],
                  l = a && i.indexOf(a) > -1,
                  d =
                    !this.options.userDefinedKeySeparator &&
                    !o.keySeparator &&
                    !this.options.userDefinedNsSeparator &&
                    !o.nsSeparator &&
                    !JO(i, a, s);
                if (l && !d) {
                  var f = i.match(this.interpolator.nestingRegexp);
                  if (f && f.length > 0) return { key: i, namespaces: u };
                  var c = i.split(a);
                  (a !== s ||
                    (a === s && this.options.ns.indexOf(c[0]) > -1)) &&
                    (u = c.shift()),
                    (i = c.join(s));
                }
                return (
                  typeof u == 'string' && (u = [u]), { key: i, namespaces: u }
                );
              },
            },
            {
              key: 'translate',
              value: function (i, o, a) {
                var s = this;
                if (
                  (lt(o) !== 'object' &&
                    this.options.overloadTranslationOptionHandler &&
                    (o =
                      this.options.overloadTranslationOptionHandler(arguments)),
                  o || (o = {}),
                  i == null)
                )
                  return '';
                Array.isArray(i) || (i = [String(i)]);
                var u =
                    o.returnDetails !== void 0
                      ? o.returnDetails
                      : this.options.returnDetails,
                  l =
                    o.keySeparator !== void 0
                      ? o.keySeparator
                      : this.options.keySeparator,
                  d = this.extractFromKey(i[i.length - 1], o),
                  f = d.key,
                  c = d.namespaces,
                  g = c[c.length - 1],
                  m = o.lng || this.language,
                  v =
                    o.appendNamespaceToCIMode ||
                    this.options.appendNamespaceToCIMode;
                if (m && m.toLowerCase() === 'cimode') {
                  if (v) {
                    var S = o.nsSeparator || this.options.nsSeparator;
                    return u
                      ? ((h.res = ''.concat(g).concat(S).concat(f)), h)
                      : ''.concat(g).concat(S).concat(f);
                  }
                  return u ? ((h.res = f), h) : f;
                }
                var h = this.resolve(i, o),
                  p = h && h.res,
                  y = (h && h.usedKey) || f,
                  _ = (h && h.exactUsedKey) || f,
                  x = Object.prototype.toString.apply(p),
                  E = [
                    '[object Number]',
                    '[object Function]',
                    '[object RegExp]',
                  ],
                  $ =
                    o.joinArrays !== void 0
                      ? o.joinArrays
                      : this.options.joinArrays,
                  k = !this.i18nFormat || this.i18nFormat.handleAsObject,
                  D =
                    typeof p != 'string' &&
                    typeof p != 'boolean' &&
                    typeof p != 'number';
                if (
                  k &&
                  p &&
                  D &&
                  E.indexOf(x) < 0 &&
                  !(typeof $ == 'string' && x === '[object Array]')
                ) {
                  if (!o.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler ||
                      this.logger.warn(
                        'accessing an object - but returnObjects options is not enabled!'
                      );
                    var F = this.options.returnedObjectHandler
                      ? this.options.returnedObjectHandler(
                          y,
                          p,
                          Ge(Ge({}, o), {}, { ns: c })
                        )
                      : "key '"
                          .concat(f, ' (')
                          .concat(
                            this.language,
                            ")' returned an object instead of string."
                          );
                    return u ? ((h.res = F), h) : F;
                  }
                  if (l) {
                    var z = x === '[object Array]',
                      me = z ? [] : {},
                      Oe = z ? _ : y;
                    for (var b in p)
                      if (Object.prototype.hasOwnProperty.call(p, b)) {
                        var N = ''.concat(Oe).concat(l).concat(b);
                        (me[b] = this.translate(
                          N,
                          Ge(Ge({}, o), { joinArrays: !1, ns: c })
                        )),
                          me[b] === N && (me[b] = p[b]);
                      }
                    p = me;
                  }
                } else if (k && typeof $ == 'string' && x === '[object Array]')
                  (p = p.join($)),
                    p && (p = this.extendTranslation(p, i, o, a));
                else {
                  var B = !1,
                    X = !1,
                    A = o.count !== void 0 && typeof o.count != 'string',
                    R = r.hasDefaultValue(o),
                    U = A ? this.pluralResolver.getSuffix(m, o.count, o) : '',
                    W = o['defaultValue'.concat(U)] || o.defaultValue;
                  !this.isValidLookup(p) && R && ((B = !0), (p = W)),
                    this.isValidLookup(p) || ((X = !0), (p = f));
                  var Q =
                      o.missingKeyNoValueFallbackToKey ||
                      this.options.missingKeyNoValueFallbackToKey,
                    Ue = Q && X ? void 0 : p,
                    ze = R && W !== p && this.options.updateMissing;
                  if (X || B || ze) {
                    if (
                      (this.logger.log(
                        ze ? 'updateKey' : 'missingKey',
                        m,
                        g,
                        f,
                        ze ? W : p
                      ),
                      l)
                    ) {
                      var Xt = this.resolve(
                        f,
                        Ge(Ge({}, o), {}, { keySeparator: !1 })
                      );
                      Xt &&
                        Xt.res &&
                        this.logger.warn(
                          'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
                        );
                    }
                    var Be = [],
                      wt = this.languageUtils.getFallbackCodes(
                        this.options.fallbackLng,
                        o.lng || this.language
                      );
                    if (
                      this.options.saveMissingTo === 'fallback' &&
                      wt &&
                      wt[0]
                    )
                      for (var Hn = 0; Hn < wt.length; Hn++) Be.push(wt[Hn]);
                    else
                      this.options.saveMissingTo === 'all'
                        ? (Be = this.languageUtils.toResolveHierarchy(
                            o.lng || this.language
                          ))
                        : Be.push(o.lng || this.language);
                    var Vn = function (cr, Gi, ma) {
                      var va = R && ma !== p ? ma : Ue;
                      s.options.missingKeyHandler
                        ? s.options.missingKeyHandler(cr, g, Gi, va, ze, o)
                        : s.backendConnector &&
                          s.backendConnector.saveMissing &&
                          s.backendConnector.saveMissing(cr, g, Gi, va, ze, o),
                        s.emit('missingKey', cr, g, Gi, p);
                    };
                    this.options.saveMissing &&
                      (this.options.saveMissingPlurals && A
                        ? Be.forEach(function (Yi) {
                            s.pluralResolver
                              .getSuffixes(Yi, o)
                              .forEach(function (cr) {
                                Vn(
                                  [Yi],
                                  f + cr,
                                  o['defaultValue'.concat(cr)] || W
                                );
                              });
                          })
                        : Vn(Be, f, W));
                  }
                  (p = this.extendTranslation(p, i, o, h, a)),
                    X &&
                      p === f &&
                      this.options.appendNamespaceToMissingKey &&
                      (p = ''.concat(g, ':').concat(f)),
                    (X || B) &&
                      this.options.parseMissingKeyHandler &&
                      (this.options.compatibilityAPI !== 'v1'
                        ? (p = this.options.parseMissingKeyHandler(
                            this.options.appendNamespaceToMissingKey
                              ? ''.concat(g, ':').concat(f)
                              : f,
                            B ? p : void 0
                          ))
                        : (p = this.options.parseMissingKeyHandler(p)));
                }
                return u ? ((h.res = p), h) : p;
              },
            },
            {
              key: 'extendTranslation',
              value: function (i, o, a, s, u) {
                var l = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                  i = this.i18nFormat.parse(
                    i,
                    Ge(Ge({}, this.options.interpolation.defaultVariables), a),
                    s.usedLng,
                    s.usedNS,
                    s.usedKey,
                    { resolved: s }
                  );
                else if (!a.skipInterpolation) {
                  a.interpolation &&
                    this.interpolator.init(
                      Ge(Ge({}, a), {
                        interpolation: Ge(
                          Ge({}, this.options.interpolation),
                          a.interpolation
                        ),
                      })
                    );
                  var d =
                      typeof i == 'string' &&
                      (a &&
                      a.interpolation &&
                      a.interpolation.skipOnVariables !== void 0
                        ? a.interpolation.skipOnVariables
                        : this.options.interpolation.skipOnVariables),
                    f;
                  if (d) {
                    var c = i.match(this.interpolator.nestingRegexp);
                    f = c && c.length;
                  }
                  var g =
                    a.replace && typeof a.replace != 'string' ? a.replace : a;
                  if (
                    (this.options.interpolation.defaultVariables &&
                      (g = Ge(
                        Ge({}, this.options.interpolation.defaultVariables),
                        g
                      )),
                    (i = this.interpolator.interpolate(
                      i,
                      g,
                      a.lng || this.language,
                      a
                    )),
                    d)
                  ) {
                    var m = i.match(this.interpolator.nestingRegexp),
                      v = m && m.length;
                    f < v && (a.nest = !1);
                  }
                  a.nest !== !1 &&
                    (i = this.interpolator.nest(
                      i,
                      function () {
                        for (
                          var p = arguments.length, y = new Array(p), _ = 0;
                          _ < p;
                          _++
                        )
                          y[_] = arguments[_];
                        return u && u[0] === y[0] && !a.context
                          ? (l.logger.warn(
                              'It seems you are nesting recursively key: '
                                .concat(y[0], ' in key: ')
                                .concat(o[0])
                            ),
                            null)
                          : l.translate.apply(l, y.concat([o]));
                      },
                      a
                    )),
                    a.interpolation && this.interpolator.reset();
                }
                var S = a.postProcess || this.options.postProcess,
                  h = typeof S == 'string' ? [S] : S;
                return (
                  i != null &&
                    h &&
                    h.length &&
                    a.applyPostProcessor !== !1 &&
                    (i = k1.handle(
                      h,
                      i,
                      o,
                      this.options && this.options.postProcessPassResolved
                        ? Ge({ i18nResolved: s }, a)
                        : a,
                      this
                    )),
                  i
                );
              },
            },
            {
              key: 'resolve',
              value: function (i) {
                var o = this,
                  a =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  s,
                  u,
                  l,
                  d,
                  f;
                return (
                  typeof i == 'string' && (i = [i]),
                  i.forEach(function (c) {
                    if (!o.isValidLookup(s)) {
                      var g = o.extractFromKey(c, a),
                        m = g.key;
                      u = m;
                      var v = g.namespaces;
                      o.options.fallbackNS &&
                        (v = v.concat(o.options.fallbackNS));
                      var S = a.count !== void 0 && typeof a.count != 'string',
                        h =
                          S &&
                          !a.ordinal &&
                          a.count === 0 &&
                          o.pluralResolver.shouldUseIntlApi(),
                        p =
                          a.context !== void 0 &&
                          (typeof a.context == 'string' ||
                            typeof a.context == 'number') &&
                          a.context !== '',
                        y = a.lngs
                          ? a.lngs
                          : o.languageUtils.toResolveHierarchy(
                              a.lng || o.language,
                              a.fallbackLng
                            );
                      v.forEach(function (_) {
                        o.isValidLookup(s) ||
                          ((f = _),
                          !bg[''.concat(y[0], '-').concat(_)] &&
                            o.utils &&
                            o.utils.hasLoadedNamespace &&
                            !o.utils.hasLoadedNamespace(f) &&
                            ((bg[''.concat(y[0], '-').concat(_)] = !0),
                            o.logger.warn(
                              'key "'
                                .concat(u, '" for languages "')
                                .concat(
                                  y.join(', '),
                                  `" won't get resolved as namespace "`
                                )
                                .concat(f, '" was not yet loaded'),
                              'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                            )),
                          y.forEach(function (x) {
                            if (!o.isValidLookup(s)) {
                              d = x;
                              var E = [m];
                              if (o.i18nFormat && o.i18nFormat.addLookupKeys)
                                o.i18nFormat.addLookupKeys(E, m, x, _, a);
                              else {
                                var $;
                                S &&
                                  ($ = o.pluralResolver.getSuffix(
                                    x,
                                    a.count,
                                    a
                                  ));
                                var k = ''.concat(
                                  o.options.pluralSeparator,
                                  'zero'
                                );
                                if (
                                  (S && (E.push(m + $), h && E.push(m + k)), p)
                                ) {
                                  var D = ''
                                    .concat(m)
                                    .concat(o.options.contextSeparator)
                                    .concat(a.context);
                                  E.push(D),
                                    S && (E.push(D + $), h && E.push(D + k));
                                }
                              }
                              for (var F; (F = E.pop()); )
                                o.isValidLookup(s) ||
                                  ((l = F), (s = o.getResource(x, _, F, a)));
                            }
                          }));
                      });
                    }
                  }),
                  { res: s, usedKey: u, exactUsedKey: l, usedLng: d, usedNS: f }
                );
              },
            },
            {
              key: 'isValidLookup',
              value: function (i) {
                return (
                  i !== void 0 &&
                  !(!this.options.returnNull && i === null) &&
                  !(!this.options.returnEmptyString && i === '')
                );
              },
            },
            {
              key: 'getResource',
              value: function (i, o, a) {
                var s =
                  arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : {};
                return this.i18nFormat && this.i18nFormat.getResource
                  ? this.i18nFormat.getResource(i, o, a, s)
                  : this.resourceStore.getResource(i, o, a, s);
              },
            },
          ],
          [
            {
              key: 'hasDefaultValue',
              value: function (i) {
                var o = 'defaultValue';
                for (var a in i)
                  if (
                    Object.prototype.hasOwnProperty.call(i, a) &&
                    o === a.substring(0, o.length) &&
                    i[a] !== void 0
                  )
                    return !0;
                return !1;
              },
            },
          ]
        ),
        r
      );
    })(nn);
  function Vl(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var oC = (function () {
      function e(t) {
        Nt(this, e),
          (this.options = t),
          (this.supportedLngs = this.options.supportedLngs || !1),
          (this.logger = rr.create('languageUtils'));
      }
      return (
        Ft(e, [
          {
            key: 'getScriptPartFromCode',
            value: function (r) {
              if (!r || r.indexOf('-') < 0) return null;
              var n = r.split('-');
              return n.length === 2 ||
                (n.pop(), n[n.length - 1].toLowerCase() === 'x')
                ? null
                : this.formatLanguageCode(n.join('-'));
            },
          },
          {
            key: 'getLanguagePartFromCode',
            value: function (r) {
              if (!r || r.indexOf('-') < 0) return r;
              var n = r.split('-');
              return this.formatLanguageCode(n[0]);
            },
          },
          {
            key: 'formatLanguageCode',
            value: function (r) {
              if (typeof r == 'string' && r.indexOf('-') > -1) {
                var n = [
                    'hans',
                    'hant',
                    'latn',
                    'cyrl',
                    'cans',
                    'mong',
                    'arab',
                  ],
                  i = r.split('-');
                return (
                  this.options.lowerCaseLng
                    ? (i = i.map(function (o) {
                        return o.toLowerCase();
                      }))
                    : i.length === 2
                    ? ((i[0] = i[0].toLowerCase()),
                      (i[1] = i[1].toUpperCase()),
                      n.indexOf(i[1].toLowerCase()) > -1 &&
                        (i[1] = Vl(i[1].toLowerCase())))
                    : i.length === 3 &&
                      ((i[0] = i[0].toLowerCase()),
                      i[1].length === 2 && (i[1] = i[1].toUpperCase()),
                      i[0] !== 'sgn' &&
                        i[2].length === 2 &&
                        (i[2] = i[2].toUpperCase()),
                      n.indexOf(i[1].toLowerCase()) > -1 &&
                        (i[1] = Vl(i[1].toLowerCase())),
                      n.indexOf(i[2].toLowerCase()) > -1 &&
                        (i[2] = Vl(i[2].toLowerCase()))),
                  i.join('-')
                );
              }
              return this.options.cleanCode || this.options.lowerCaseLng
                ? r.toLowerCase()
                : r;
            },
          },
          {
            key: 'isSupportedCode',
            value: function (r) {
              return (
                (this.options.load === 'languageOnly' ||
                  this.options.nonExplicitSupportedLngs) &&
                  (r = this.getLanguagePartFromCode(r)),
                !this.supportedLngs ||
                  !this.supportedLngs.length ||
                  this.supportedLngs.indexOf(r) > -1
              );
            },
          },
          {
            key: 'getBestMatchFromCodes',
            value: function (r) {
              var n = this;
              if (!r) return null;
              var i;
              return (
                r.forEach(function (o) {
                  if (!i) {
                    var a = n.formatLanguageCode(o);
                    (!n.options.supportedLngs || n.isSupportedCode(a)) &&
                      (i = a);
                  }
                }),
                !i &&
                  this.options.supportedLngs &&
                  r.forEach(function (o) {
                    if (!i) {
                      var a = n.getLanguagePartFromCode(o);
                      if (n.isSupportedCode(a)) return (i = a);
                      i = n.options.supportedLngs.find(function (s) {
                        if (s.indexOf(a) === 0) return s;
                      });
                    }
                  }),
                i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]),
                i
              );
            },
          },
          {
            key: 'getFallbackCodes',
            value: function (r, n) {
              if (!r) return [];
              if (
                (typeof r == 'function' && (r = r(n)),
                typeof r == 'string' && (r = [r]),
                Object.prototype.toString.apply(r) === '[object Array]')
              )
                return r;
              if (!n) return r.default || [];
              var i = r[n];
              return (
                i || (i = r[this.getScriptPartFromCode(n)]),
                i || (i = r[this.formatLanguageCode(n)]),
                i || (i = r[this.getLanguagePartFromCode(n)]),
                i || (i = r.default),
                i || []
              );
            },
          },
          {
            key: 'toResolveHierarchy',
            value: function (r, n) {
              var i = this,
                o = this.getFallbackCodes(
                  n || this.options.fallbackLng || [],
                  r
                ),
                a = [],
                s = function (l) {
                  !l ||
                    (i.isSupportedCode(l)
                      ? a.push(l)
                      : i.logger.warn(
                          'rejecting language code not found in supportedLngs: '.concat(
                            l
                          )
                        ));
                };
              return (
                typeof r == 'string' && r.indexOf('-') > -1
                  ? (this.options.load !== 'languageOnly' &&
                      s(this.formatLanguageCode(r)),
                    this.options.load !== 'languageOnly' &&
                      this.options.load !== 'currentOnly' &&
                      s(this.getScriptPartFromCode(r)),
                    this.options.load !== 'currentOnly' &&
                      s(this.getLanguagePartFromCode(r)))
                  : typeof r == 'string' && s(this.formatLanguageCode(r)),
                o.forEach(function (u) {
                  a.indexOf(u) < 0 && s(i.formatLanguageCode(u));
                }),
                a
              );
            },
          },
        ]),
        e
      );
    })(),
    aC = [
      {
        lngs: [
          'ach',
          'ak',
          'am',
          'arn',
          'br',
          'fil',
          'gun',
          'ln',
          'mfe',
          'mg',
          'mi',
          'oc',
          'pt',
          'pt-BR',
          'tg',
          'tl',
          'ti',
          'tr',
          'uz',
          'wa',
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          'af',
          'an',
          'ast',
          'az',
          'bg',
          'bn',
          'ca',
          'da',
          'de',
          'dev',
          'el',
          'en',
          'eo',
          'es',
          'et',
          'eu',
          'fi',
          'fo',
          'fur',
          'fy',
          'gl',
          'gu',
          'ha',
          'hi',
          'hu',
          'hy',
          'ia',
          'it',
          'kk',
          'kn',
          'ku',
          'lb',
          'mai',
          'ml',
          'mn',
          'mr',
          'nah',
          'nap',
          'nb',
          'ne',
          'nl',
          'nn',
          'no',
          'nso',
          'pa',
          'pap',
          'pms',
          'ps',
          'pt-PT',
          'rm',
          'sco',
          'se',
          'si',
          'so',
          'son',
          'sq',
          'sv',
          'sw',
          'ta',
          'te',
          'tk',
          'ur',
          'yo',
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          'ay',
          'bo',
          'cgg',
          'fa',
          'ht',
          'id',
          'ja',
          'jbo',
          'ka',
          'km',
          'ko',
          'ky',
          'lo',
          'ms',
          'sah',
          'su',
          'th',
          'tt',
          'ug',
          'vi',
          'wo',
          'zh',
        ],
        nr: [1],
        fc: 3,
      },
      {
        lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
        nr: [1, 2, 5],
        fc: 4,
      },
      { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
      { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
      { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
      { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
      { lngs: ['fr'], nr: [1, 2], fc: 9 },
      { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
      { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
      { lngs: ['is'], nr: [1, 2], fc: 12 },
      { lngs: ['jv'], nr: [0, 1], fc: 13 },
      { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
      { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
      { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
      { lngs: ['mk'], nr: [1, 2], fc: 17 },
      { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
      { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
      { lngs: ['or'], nr: [2, 1], fc: 2 },
      { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
      { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
      { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
    ],
    sC = {
      1: function (t) {
        return Number(t > 1);
      },
      2: function (t) {
        return Number(t != 1);
      },
      3: function (t) {
        return 0;
      },
      4: function (t) {
        return Number(
          t % 10 == 1 && t % 100 != 11
            ? 0
            : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
            ? 1
            : 2
        );
      },
      5: function (t) {
        return Number(
          t == 0
            ? 0
            : t == 1
            ? 1
            : t == 2
            ? 2
            : t % 100 >= 3 && t % 100 <= 10
            ? 3
            : t % 100 >= 11
            ? 4
            : 5
        );
      },
      6: function (t) {
        return Number(t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2);
      },
      7: function (t) {
        return Number(
          t == 1
            ? 0
            : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
            ? 1
            : 2
        );
      },
      8: function (t) {
        return Number(t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3);
      },
      9: function (t) {
        return Number(t >= 2);
      },
      10: function (t) {
        return Number(t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4);
      },
      11: function (t) {
        return Number(
          t == 1 || t == 11
            ? 0
            : t == 2 || t == 12
            ? 1
            : t > 2 && t < 20
            ? 2
            : 3
        );
      },
      12: function (t) {
        return Number(t % 10 != 1 || t % 100 == 11);
      },
      13: function (t) {
        return Number(t !== 0);
      },
      14: function (t) {
        return Number(t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3);
      },
      15: function (t) {
        return Number(
          t % 10 == 1 && t % 100 != 11
            ? 0
            : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20)
            ? 1
            : 2
        );
      },
      16: function (t) {
        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2);
      },
      17: function (t) {
        return Number(t == 1 || (t % 10 == 1 && t % 100 != 11) ? 0 : 1);
      },
      18: function (t) {
        return Number(t == 0 ? 0 : t == 1 ? 1 : 2);
      },
      19: function (t) {
        return Number(
          t == 1
            ? 0
            : t == 0 || (t % 100 > 1 && t % 100 < 11)
            ? 1
            : t % 100 > 10 && t % 100 < 20
            ? 2
            : 3
        );
      },
      20: function (t) {
        return Number(
          t == 1 ? 0 : t == 0 || (t % 100 > 0 && t % 100 < 20) ? 1 : 2
        );
      },
      21: function (t) {
        return Number(
          t % 100 == 1
            ? 1
            : t % 100 == 2
            ? 2
            : t % 100 == 3 || t % 100 == 4
            ? 3
            : 0
        );
      },
      22: function (t) {
        return Number(
          t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3
        );
      },
    },
    uC = ['v1', 'v2', 'v3'],
    Og = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
  function lC() {
    var e = {};
    return (
      aC.forEach(function (t) {
        t.lngs.forEach(function (r) {
          e[r] = { numbers: t.nr, plurals: sC[t.fc] };
        });
      }),
      e
    );
  }
  var cC = (function () {
    function e(t) {
      var r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Nt(this, e),
        (this.languageUtils = t),
        (this.options = r),
        (this.logger = rr.create('pluralResolver')),
        (!this.options.compatibilityJSON ||
          this.options.compatibilityJSON === 'v4') &&
          (typeof Intl > 'u' || !Intl.PluralRules) &&
          ((this.options.compatibilityJSON = 'v3'),
          this.logger.error(
            'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
          )),
        (this.rules = lC());
    }
    return (
      Ft(e, [
        {
          key: 'addRule',
          value: function (r, n) {
            this.rules[r] = n;
          },
        },
        {
          key: 'getRule',
          value: function (r) {
            var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            if (this.shouldUseIntlApi())
              try {
                return new Intl.PluralRules(r, {
                  type: n.ordinal ? 'ordinal' : 'cardinal',
                });
              } catch {
                return;
              }
            return (
              this.rules[r] ||
              this.rules[this.languageUtils.getLanguagePartFromCode(r)]
            );
          },
        },
        {
          key: 'needsPlural',
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              i = this.getRule(r, n);
            return this.shouldUseIntlApi()
              ? i && i.resolvedOptions().pluralCategories.length > 1
              : i && i.numbers.length > 1;
          },
        },
        {
          key: 'getPluralFormsOfKey',
          value: function (r, n) {
            var i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
            return this.getSuffixes(r, i).map(function (o) {
              return ''.concat(n).concat(o);
            });
          },
        },
        {
          key: 'getSuffixes',
          value: function (r) {
            var n = this,
              i =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              o = this.getRule(r, i);
            return o
              ? this.shouldUseIntlApi()
                ? o
                    .resolvedOptions()
                    .pluralCategories.sort(function (a, s) {
                      return Og[a] - Og[s];
                    })
                    .map(function (a) {
                      return ''.concat(n.options.prepend).concat(a);
                    })
                : o.numbers.map(function (a) {
                    return n.getSuffix(r, a, i);
                  })
              : [];
          },
        },
        {
          key: 'getSuffix',
          value: function (r, n) {
            var i =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {},
              o = this.getRule(r, i);
            return o
              ? this.shouldUseIntlApi()
                ? ''.concat(this.options.prepend).concat(o.select(n))
                : this.getSuffixRetroCompatible(o, n)
              : (this.logger.warn('no plural rule found for: '.concat(r)), '');
          },
        },
        {
          key: 'getSuffixRetroCompatible',
          value: function (r, n) {
            var i = this,
              o = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n)),
              a = r.numbers[o];
            this.options.simplifyPluralSuffix &&
              r.numbers.length === 2 &&
              r.numbers[0] === 1 &&
              (a === 2 ? (a = 'plural') : a === 1 && (a = ''));
            var s = function () {
              return i.options.prepend && a.toString()
                ? i.options.prepend + a.toString()
                : a.toString();
            };
            return this.options.compatibilityJSON === 'v1'
              ? a === 1
                ? ''
                : typeof a == 'number'
                ? '_plural_'.concat(a.toString())
                : s()
              : this.options.compatibilityJSON === 'v2' ||
                (this.options.simplifyPluralSuffix &&
                  r.numbers.length === 2 &&
                  r.numbers[0] === 1)
              ? s()
              : this.options.prepend && o.toString()
              ? this.options.prepend + o.toString()
              : o.toString();
          },
        },
        {
          key: 'shouldUseIntlApi',
          value: function () {
            return !uC.includes(this.options.compatibilityJSON);
          },
        },
      ]),
      e
    );
  })();
  function Cg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function jt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Cg(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  var fC = (function () {
    function e() {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Nt(this, e),
        (this.logger = rr.create('interpolator')),
        (this.options = t),
        (this.format =
          (t.interpolation && t.interpolation.format) ||
          function (r) {
            return r;
          }),
        this.init(t);
    }
    return (
      Ft(e, [
        {
          key: 'init',
          value: function () {
            var r =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {};
            r.interpolation || (r.interpolation = { escapeValue: !0 });
            var n = r.interpolation;
            (this.escape = n.escape !== void 0 ? n.escape : QO),
              (this.escapeValue =
                n.escapeValue !== void 0 ? n.escapeValue : !0),
              (this.useRawValueToEscape =
                n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
              (this.prefix = n.prefix ? Kn(n.prefix) : n.prefixEscaped || '{{'),
              (this.suffix = n.suffix ? Kn(n.suffix) : n.suffixEscaped || '}}'),
              (this.formatSeparator = n.formatSeparator
                ? n.formatSeparator
                : n.formatSeparator || ','),
              (this.unescapePrefix = n.unescapeSuffix
                ? ''
                : n.unescapePrefix || '-'),
              (this.unescapeSuffix = this.unescapePrefix
                ? ''
                : n.unescapeSuffix || ''),
              (this.nestingPrefix = n.nestingPrefix
                ? Kn(n.nestingPrefix)
                : n.nestingPrefixEscaped || Kn('$t(')),
              (this.nestingSuffix = n.nestingSuffix
                ? Kn(n.nestingSuffix)
                : n.nestingSuffixEscaped || Kn(')')),
              (this.nestingOptionsSeparator = n.nestingOptionsSeparator
                ? n.nestingOptionsSeparator
                : n.nestingOptionsSeparator || ','),
              (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
              (this.alwaysFormat =
                n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
              this.resetRegExp();
          },
        },
        {
          key: 'reset',
          value: function () {
            this.options && this.init(this.options);
          },
        },
        {
          key: 'resetRegExp',
          value: function () {
            var r = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
            this.regexp = new RegExp(r, 'g');
            var n = ''
              .concat(this.prefix)
              .concat(this.unescapePrefix, '(.+?)')
              .concat(this.unescapeSuffix)
              .concat(this.suffix);
            this.regexpUnescape = new RegExp(n, 'g');
            var i = ''
              .concat(this.nestingPrefix, '(.+?)')
              .concat(this.nestingSuffix);
            this.nestingRegexp = new RegExp(i, 'g');
          },
        },
        {
          key: 'interpolate',
          value: function (r, n, i, o) {
            var a = this,
              s,
              u,
              l,
              d =
                (this.options &&
                  this.options.interpolation &&
                  this.options.interpolation.defaultVariables) ||
                {};
            function f(S) {
              return S.replace(/\$/g, '$$$$');
            }
            var c = function (h) {
              if (h.indexOf(a.formatSeparator) < 0) {
                var p = _g(n, d, h);
                return a.alwaysFormat
                  ? a.format(
                      p,
                      void 0,
                      i,
                      jt(jt(jt({}, o), n), {}, { interpolationkey: h })
                    )
                  : p;
              }
              var y = h.split(a.formatSeparator),
                _ = y.shift().trim(),
                x = y.join(a.formatSeparator).trim();
              return a.format(
                _g(n, d, _),
                x,
                i,
                jt(jt(jt({}, o), n), {}, { interpolationkey: _ })
              );
            };
            this.resetRegExp();
            var g =
                (o && o.missingInterpolationHandler) ||
                this.options.missingInterpolationHandler,
              m =
                o &&
                o.interpolation &&
                o.interpolation.skipOnVariables !== void 0
                  ? o.interpolation.skipOnVariables
                  : this.options.interpolation.skipOnVariables,
              v = [
                {
                  regex: this.regexpUnescape,
                  safeValue: function (h) {
                    return f(h);
                  },
                },
                {
                  regex: this.regexp,
                  safeValue: function (h) {
                    return a.escapeValue ? f(a.escape(h)) : f(h);
                  },
                },
              ];
            return (
              v.forEach(function (S) {
                for (l = 0; (s = S.regex.exec(r)); ) {
                  var h = s[1].trim();
                  if (((u = c(h)), u === void 0))
                    if (typeof g == 'function') {
                      var p = g(r, s, o);
                      u = typeof p == 'string' ? p : '';
                    } else if (o && o.hasOwnProperty(h)) u = '';
                    else if (m) {
                      u = s[0];
                      continue;
                    } else
                      a.logger.warn(
                        'missed to pass in variable '
                          .concat(h, ' for interpolating ')
                          .concat(r)
                      ),
                        (u = '');
                  else
                    typeof u != 'string' &&
                      !a.useRawValueToEscape &&
                      (u = yg(u));
                  var y = S.safeValue(u);
                  if (
                    ((r = r.replace(s[0], y)),
                    m
                      ? ((S.regex.lastIndex += u.length),
                        (S.regex.lastIndex -= s[0].length))
                      : (S.regex.lastIndex = 0),
                    l++,
                    l >= a.maxReplaces)
                  )
                    break;
                }
              }),
              r
            );
          },
        },
        {
          key: 'nest',
          value: function (r, n) {
            var i = this,
              o =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {},
              a,
              s,
              u = jt({}, o);
            (u.applyPostProcessor = !1), delete u.defaultValue;
            function l(g, m) {
              var v = this.nestingOptionsSeparator;
              if (g.indexOf(v) < 0) return g;
              var S = g.split(new RegExp(''.concat(v, '[ ]*{'))),
                h = '{'.concat(S[1]);
              (g = S[0]), (h = this.interpolate(h, u));
              var p = h.match(/'/g),
                y = h.match(/"/g);
              ((p && p.length % 2 === 0 && !y) || y.length % 2 !== 0) &&
                (h = h.replace(/'/g, '"'));
              try {
                (u = JSON.parse(h)), m && (u = jt(jt({}, m), u));
              } catch (_) {
                return (
                  this.logger.warn(
                    'failed parsing options string in nesting for key '.concat(
                      g
                    ),
                    _
                  ),
                  ''.concat(g).concat(v).concat(h)
                );
              }
              return delete u.defaultValue, g;
            }
            for (; (a = this.nestingRegexp.exec(r)); ) {
              var d = [],
                f = !1;
              if (
                a[0].indexOf(this.formatSeparator) !== -1 &&
                !/{.*}/.test(a[1])
              ) {
                var c = a[1].split(this.formatSeparator).map(function (g) {
                  return g.trim();
                });
                (a[1] = c.shift()), (d = c), (f = !0);
              }
              if (
                ((s = n(l.call(this, a[1].trim(), u), u)),
                s && a[0] === r && typeof s != 'string')
              )
                return s;
              typeof s != 'string' && (s = yg(s)),
                s ||
                  (this.logger.warn(
                    'missed to resolve '.concat(a[1], ' for nesting ').concat(r)
                  ),
                  (s = '')),
                f &&
                  (s = d.reduce(function (g, m) {
                    return i.format(
                      g,
                      m,
                      o.lng,
                      jt(jt({}, o), {}, { interpolationkey: a[1].trim() })
                    );
                  }, s.trim())),
                (r = r.replace(a[0], s)),
                (this.regexp.lastIndex = 0);
            }
            return r;
          },
        },
      ]),
      e
    );
  })();
  function Pg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Tr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Pg(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function dC(e) {
    var t = e.toLowerCase().trim(),
      r = {};
    if (e.indexOf('(') > -1) {
      var n = e.split('(');
      t = n[0].toLowerCase().trim();
      var i = n[1].substring(0, n[1].length - 1);
      if (t === 'currency' && i.indexOf(':') < 0)
        r.currency || (r.currency = i.trim());
      else if (t === 'relativetime' && i.indexOf(':') < 0)
        r.range || (r.range = i.trim());
      else {
        var o = i.split(';');
        o.forEach(function (a) {
          if (!!a) {
            var s = a.split(':'),
              u = WO(s),
              l = u[0],
              d = u.slice(1),
              f = d
                .join(':')
                .trim()
                .replace(/^'+|'+$/g, '');
            r[l.trim()] || (r[l.trim()] = f),
              f === 'false' && (r[l.trim()] = !1),
              f === 'true' && (r[l.trim()] = !0),
              isNaN(f) || (r[l.trim()] = parseInt(f, 10));
          }
        });
      }
    }
    return { formatName: t, formatOptions: r };
  }
  function qn(e) {
    var t = {};
    return function (n, i, o) {
      var a = i + JSON.stringify(o),
        s = t[a];
      return s || ((s = e(i, o)), (t[a] = s)), s(n);
    };
  }
  var pC = (function () {
    function e() {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Nt(this, e),
        (this.logger = rr.create('formatter')),
        (this.options = t),
        (this.formats = {
          number: qn(function (r, n) {
            var i = new Intl.NumberFormat(r, n);
            return function (o) {
              return i.format(o);
            };
          }),
          currency: qn(function (r, n) {
            var i = new Intl.NumberFormat(
              r,
              Tr(Tr({}, n), {}, { style: 'currency' })
            );
            return function (o) {
              return i.format(o);
            };
          }),
          datetime: qn(function (r, n) {
            var i = new Intl.DateTimeFormat(r, Tr({}, n));
            return function (o) {
              return i.format(o);
            };
          }),
          relativetime: qn(function (r, n) {
            var i = new Intl.RelativeTimeFormat(r, Tr({}, n));
            return function (o) {
              return i.format(o, n.range || 'day');
            };
          }),
          list: qn(function (r, n) {
            var i = new Intl.ListFormat(r, Tr({}, n));
            return function (o) {
              return i.format(o);
            };
          }),
        }),
        this.init(t);
    }
    return (
      Ft(e, [
        {
          key: 'init',
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : { interpolation: {} },
              i = n.interpolation;
            this.formatSeparator = i.formatSeparator
              ? i.formatSeparator
              : i.formatSeparator || ',';
          },
        },
        {
          key: 'add',
          value: function (r, n) {
            this.formats[r.toLowerCase().trim()] = n;
          },
        },
        {
          key: 'addCached',
          value: function (r, n) {
            this.formats[r.toLowerCase().trim()] = qn(n);
          },
        },
        {
          key: 'format',
          value: function (r, n, i, o) {
            var a = this,
              s = n.split(this.formatSeparator),
              u = s.reduce(function (l, d) {
                var f = dC(d),
                  c = f.formatName,
                  g = f.formatOptions;
                if (a.formats[c]) {
                  var m = l;
                  try {
                    var v =
                        (o &&
                          o.formatParams &&
                          o.formatParams[o.interpolationkey]) ||
                        {},
                      S = v.locale || v.lng || o.locale || o.lng || i;
                    m = a.formats[c](l, S, Tr(Tr(Tr({}, g), o), v));
                  } catch (h) {
                    a.logger.warn(h);
                  }
                  return m;
                } else a.logger.warn('there was no format function for '.concat(c));
                return l;
              }, r);
            return u;
          },
        },
      ]),
      e
    );
  })();
  function $g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function kg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? $g(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $g(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function hC(e) {
    var t = gC();
    return function () {
      var n = ur(e),
        i;
      if (t) {
        var o = ur(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else i = n.apply(this, arguments);
      return sa(this, i);
    };
  }
  function gC() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function mC(e, t) {
    e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
  }
  var vC = (function (e) {
    qu(r, e);
    var t = hC(r);
    function r(n, i, o) {
      var a,
        s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return (
        Nt(this, r),
        (a = t.call(this)),
        Yu && nn.call(Xr(a)),
        (a.backend = n),
        (a.store = i),
        (a.services = o),
        (a.languageUtils = o.languageUtils),
        (a.options = s),
        (a.logger = rr.create('backendConnector')),
        (a.waitingReads = []),
        (a.maxParallelReads = s.maxParallelReads || 10),
        (a.readingCalls = 0),
        (a.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
        (a.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
        (a.state = {}),
        (a.queue = []),
        a.backend && a.backend.init && a.backend.init(o, s.backend, s),
        a
      );
    }
    return (
      Ft(r, [
        {
          key: 'queueLoad',
          value: function (i, o, a, s) {
            var u = this,
              l = {},
              d = {},
              f = {},
              c = {};
            return (
              i.forEach(function (g) {
                var m = !0;
                o.forEach(function (v) {
                  var S = ''.concat(g, '|').concat(v);
                  !a.reload && u.store.hasResourceBundle(g, v)
                    ? (u.state[S] = 2)
                    : u.state[S] < 0 ||
                      (u.state[S] === 1
                        ? d[S] === void 0 && (d[S] = !0)
                        : ((u.state[S] = 1),
                          (m = !1),
                          d[S] === void 0 && (d[S] = !0),
                          l[S] === void 0 && (l[S] = !0),
                          c[v] === void 0 && (c[v] = !0)));
                }),
                  m || (f[g] = !0);
              }),
              (Object.keys(l).length || Object.keys(d).length) &&
                this.queue.push({
                  pending: d,
                  pendingCount: Object.keys(d).length,
                  loaded: {},
                  errors: [],
                  callback: s,
                }),
              {
                toLoad: Object.keys(l),
                pending: Object.keys(d),
                toLoadLanguages: Object.keys(f),
                toLoadNamespaces: Object.keys(c),
              }
            );
          },
        },
        {
          key: 'loaded',
          value: function (i, o, a) {
            var s = i.split('|'),
              u = s[0],
              l = s[1];
            o && this.emit('failedLoading', u, l, o),
              a && this.store.addResourceBundle(u, l, a),
              (this.state[i] = o ? -1 : 2);
            var d = {};
            this.queue.forEach(function (f) {
              GO(f.loaded, [u], l),
                mC(f, i),
                o && f.errors.push(o),
                f.pendingCount === 0 &&
                  !f.done &&
                  (Object.keys(f.loaded).forEach(function (c) {
                    d[c] || (d[c] = {});
                    var g = f.loaded[c];
                    g.length &&
                      g.forEach(function (m) {
                        d[c][m] === void 0 && (d[c][m] = !0);
                      });
                  }),
                  (f.done = !0),
                  f.errors.length ? f.callback(f.errors) : f.callback());
            }),
              this.emit('loaded', d),
              (this.queue = this.queue.filter(function (f) {
                return !f.done;
              }));
          },
        },
        {
          key: 'read',
          value: function (i, o, a) {
            var s = this,
              u =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : 0,
              l =
                arguments.length > 4 && arguments[4] !== void 0
                  ? arguments[4]
                  : this.retryTimeout,
              d = arguments.length > 5 ? arguments[5] : void 0;
            if (!i.length) return d(null, {});
            if (this.readingCalls >= this.maxParallelReads) {
              this.waitingReads.push({
                lng: i,
                ns: o,
                fcName: a,
                tried: u,
                wait: l,
                callback: d,
              });
              return;
            }
            return (
              this.readingCalls++,
              this.backend[a](i, o, function (f, c) {
                if ((s.readingCalls--, s.waitingReads.length > 0)) {
                  var g = s.waitingReads.shift();
                  s.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
                }
                if (f && c && u < s.maxRetries) {
                  setTimeout(function () {
                    s.read.call(s, i, o, a, u + 1, l * 2, d);
                  }, l);
                  return;
                }
                d(f, c);
              })
            );
          },
        },
        {
          key: 'prepareLoading',
          value: function (i, o) {
            var a = this,
              s =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {},
              u = arguments.length > 3 ? arguments[3] : void 0;
            if (!this.backend)
              return (
                this.logger.warn(
                  'No backend was added via i18next.use. Will not load resources.'
                ),
                u && u()
              );
            typeof i == 'string' &&
              (i = this.languageUtils.toResolveHierarchy(i)),
              typeof o == 'string' && (o = [o]);
            var l = this.queueLoad(i, o, s, u);
            if (!l.toLoad.length) return l.pending.length || u(), null;
            l.toLoad.forEach(function (d) {
              a.loadOne(d);
            });
          },
        },
        {
          key: 'load',
          value: function (i, o, a) {
            this.prepareLoading(i, o, {}, a);
          },
        },
        {
          key: 'reload',
          value: function (i, o, a) {
            this.prepareLoading(i, o, { reload: !0 }, a);
          },
        },
        {
          key: 'loadOne',
          value: function (i) {
            var o = this,
              a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : '',
              s = i.split('|'),
              u = s[0],
              l = s[1];
            this.read(u, l, 'read', void 0, void 0, function (d, f) {
              d &&
                o.logger.warn(
                  ''
                    .concat(a, 'loading namespace ')
                    .concat(l, ' for language ')
                    .concat(u, ' failed'),
                  d
                ),
                !d &&
                  f &&
                  o.logger.log(
                    ''
                      .concat(a, 'loaded namespace ')
                      .concat(l, ' for language ')
                      .concat(u),
                    f
                  ),
                o.loaded(i, d, f);
            });
          },
        },
        {
          key: 'saveMissing',
          value: function (i, o, a, s, u) {
            var l =
              arguments.length > 5 && arguments[5] !== void 0
                ? arguments[5]
                : {};
            if (
              this.services.utils &&
              this.services.utils.hasLoadedNamespace &&
              !this.services.utils.hasLoadedNamespace(o)
            ) {
              this.logger.warn(
                'did not save key "'
                  .concat(a, '" as the namespace "')
                  .concat(o, '" was not yet loaded'),
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              );
              return;
            }
            a == null ||
              a === '' ||
              (this.backend &&
                this.backend.create &&
                this.backend.create(
                  i,
                  o,
                  a,
                  s,
                  null,
                  kg(kg({}, l), {}, { isUpdate: u })
                ),
              !(!i || !i[0]) && this.store.addResource(i[0], o, a, s));
          },
        },
      ]),
      r
    );
  })(nn);
  function yC() {
    return {
      debug: !1,
      initImmediate: !0,
      ns: ['translation'],
      defaultNS: ['translation'],
      fallbackLng: ['dev'],
      fallbackNS: !1,
      supportedLngs: !1,
      nonExplicitSupportedLngs: !1,
      load: 'all',
      preload: !1,
      simplifyPluralSuffix: !0,
      keySeparator: '.',
      nsSeparator: ':',
      pluralSeparator: '_',
      contextSeparator: '_',
      partialBundledLanguages: !1,
      saveMissing: !1,
      updateMissing: !1,
      saveMissingTo: 'fallback',
      saveMissingPlurals: !0,
      missingKeyHandler: !1,
      missingInterpolationHandler: !1,
      postProcess: !1,
      postProcessPassResolved: !1,
      returnNull: !0,
      returnEmptyString: !0,
      returnObjects: !1,
      joinArrays: !1,
      returnedObjectHandler: !1,
      parseMissingKeyHandler: !1,
      appendNamespaceToMissingKey: !1,
      appendNamespaceToCIMode: !1,
      overloadTranslationOptionHandler: function (t) {
        var r = {};
        if (
          (lt(t[1]) === 'object' && (r = t[1]),
          typeof t[1] == 'string' && (r.defaultValue = t[1]),
          typeof t[2] == 'string' && (r.tDescription = t[2]),
          lt(t[2]) === 'object' || lt(t[3]) === 'object')
        ) {
          var n = t[3] || t[2];
          Object.keys(n).forEach(function (i) {
            r[i] = n[i];
          });
        }
        return r;
      },
      interpolation: {
        escapeValue: !0,
        format: function (t, r, n, i) {
          return t;
        },
        prefix: '{{',
        suffix: '}}',
        formatSeparator: ',',
        unescapePrefix: '-',
        nestingPrefix: '$t(',
        nestingSuffix: ')',
        nestingOptionsSeparator: ',',
        maxReplaces: 1e3,
        skipOnVariables: !0,
      },
    };
  }
  function Tg(e) {
    return (
      typeof e.ns == 'string' && (e.ns = [e.ns]),
      typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
      typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
      e.supportedLngs &&
        e.supportedLngs.indexOf('cimode') < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
      e
    );
  }
  function Ag(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Zt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Ag(Object(r), !0).forEach(function (n) {
            Yt(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ag(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function wC(e) {
    var t = _C();
    return function () {
      var n = ur(e),
        i;
      if (t) {
        var o = ur(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else i = n.apply(this, arguments);
      return sa(this, i);
    };
  }
  function _C() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function ja() {}
  function SC(e) {
    var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
    t.forEach(function (r) {
      typeof e[r] == 'function' && (e[r] = e[r].bind(e));
    });
  }
  var Us = (function (e) {
    qu(r, e);
    var t = wC(r);
    function r() {
      var n,
        i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        o = arguments.length > 1 ? arguments[1] : void 0;
      if (
        (Nt(this, r),
        (n = t.call(this)),
        Yu && nn.call(Xr(n)),
        (n.options = Tg(i)),
        (n.services = {}),
        (n.logger = rr),
        (n.modules = { external: [] }),
        SC(Xr(n)),
        o && !n.isInitialized && !i.isClone)
      ) {
        if (!n.options.initImmediate) return n.init(i, o), sa(n, Xr(n));
        setTimeout(function () {
          n.init(i, o);
        }, 0);
      }
      return n;
    }
    return (
      Ft(r, [
        {
          key: 'init',
          value: function () {
            var i = this,
              o =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              a = arguments.length > 1 ? arguments[1] : void 0;
            typeof o == 'function' && ((a = o), (o = {})),
              !o.defaultNS &&
                o.defaultNS !== !1 &&
                o.ns &&
                (typeof o.ns == 'string'
                  ? (o.defaultNS = o.ns)
                  : o.ns.indexOf('translation') < 0 && (o.defaultNS = o.ns[0]));
            var s = yC();
            (this.options = Zt(Zt(Zt({}, s), this.options), Tg(o))),
              this.options.compatibilityAPI !== 'v1' &&
                (this.options.interpolation = Zt(
                  Zt({}, s.interpolation),
                  this.options.interpolation
                )),
              o.keySeparator !== void 0 &&
                (this.options.userDefinedKeySeparator = o.keySeparator),
              o.nsSeparator !== void 0 &&
                (this.options.userDefinedNsSeparator = o.nsSeparator);
            function u(h) {
              return h ? (typeof h == 'function' ? new h() : h) : null;
            }
            if (!this.options.isClone) {
              this.modules.logger
                ? rr.init(u(this.modules.logger), this.options)
                : rr.init(null, this.options);
              var l;
              this.modules.formatter
                ? (l = this.modules.formatter)
                : typeof Intl < 'u' && (l = pC);
              var d = new oC(this.options);
              this.store = new rC(this.options.resources, this.options);
              var f = this.services;
              (f.logger = rr),
                (f.resourceStore = this.store),
                (f.languageUtils = d),
                (f.pluralResolver = new cC(d, {
                  prepend: this.options.pluralSeparator,
                  compatibilityJSON: this.options.compatibilityJSON,
                  simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                })),
                l &&
                  (!this.options.interpolation.format ||
                    this.options.interpolation.format ===
                      s.interpolation.format) &&
                  ((f.formatter = u(l)),
                  f.formatter.init(f, this.options),
                  (this.options.interpolation.format = f.formatter.format.bind(
                    f.formatter
                  ))),
                (f.interpolator = new fC(this.options)),
                (f.utils = {
                  hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                }),
                (f.backendConnector = new vC(
                  u(this.modules.backend),
                  f.resourceStore,
                  f,
                  this.options
                )),
                f.backendConnector.on('*', function (h) {
                  for (
                    var p = arguments.length,
                      y = new Array(p > 1 ? p - 1 : 0),
                      _ = 1;
                    _ < p;
                    _++
                  )
                    y[_ - 1] = arguments[_];
                  i.emit.apply(i, [h].concat(y));
                }),
                this.modules.languageDetector &&
                  ((f.languageDetector = u(this.modules.languageDetector)),
                  f.languageDetector.init(
                    f,
                    this.options.detection,
                    this.options
                  )),
                this.modules.i18nFormat &&
                  ((f.i18nFormat = u(this.modules.i18nFormat)),
                  f.i18nFormat.init && f.i18nFormat.init(this)),
                (this.translator = new Eg(this.services, this.options)),
                this.translator.on('*', function (h) {
                  for (
                    var p = arguments.length,
                      y = new Array(p > 1 ? p - 1 : 0),
                      _ = 1;
                    _ < p;
                    _++
                  )
                    y[_ - 1] = arguments[_];
                  i.emit.apply(i, [h].concat(y));
                }),
                this.modules.external.forEach(function (h) {
                  h.init && h.init(i);
                });
            }
            if (
              ((this.format = this.options.interpolation.format),
              a || (a = ja),
              this.options.fallbackLng &&
                !this.services.languageDetector &&
                !this.options.lng)
            ) {
              var c = this.services.languageUtils.getFallbackCodes(
                this.options.fallbackLng
              );
              c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
            }
            !this.services.languageDetector &&
              !this.options.lng &&
              this.logger.warn(
                'init: no languageDetector is used and no lng is defined'
              );
            var g = [
              'getResource',
              'hasResourceBundle',
              'getResourceBundle',
              'getDataByLanguage',
            ];
            g.forEach(function (h) {
              i[h] = function () {
                var p;
                return (p = i.store)[h].apply(p, arguments);
              };
            });
            var m = [
              'addResource',
              'addResources',
              'addResourceBundle',
              'removeResourceBundle',
            ];
            m.forEach(function (h) {
              i[h] = function () {
                var p;
                return (p = i.store)[h].apply(p, arguments), i;
              };
            });
            var v = io(),
              S = function () {
                var p = function (_, x) {
                  i.isInitialized &&
                    !i.initializedStoreOnce &&
                    i.logger.warn(
                      'init: i18next is already initialized. You should call init just once!'
                    ),
                    (i.isInitialized = !0),
                    i.options.isClone || i.logger.log('initialized', i.options),
                    i.emit('initialized', i.options),
                    v.resolve(x),
                    a(_, x);
                };
                if (
                  i.languages &&
                  i.options.compatibilityAPI !== 'v1' &&
                  !i.isInitialized
                )
                  return p(null, i.t.bind(i));
                i.changeLanguage(i.options.lng, p);
              };
            return (
              this.options.resources || !this.options.initImmediate
                ? S()
                : setTimeout(S, 0),
              v
            );
          },
        },
        {
          key: 'loadResources',
          value: function (i) {
            var o = this,
              a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : ja,
              s = a,
              u = typeof i == 'string' ? i : this.language;
            if (
              (typeof i == 'function' && (s = i),
              !this.options.resources || this.options.partialBundledLanguages)
            ) {
              if (u && u.toLowerCase() === 'cimode') return s();
              var l = [],
                d = function (g) {
                  if (!!g) {
                    var m = o.services.languageUtils.toResolveHierarchy(g);
                    m.forEach(function (v) {
                      l.indexOf(v) < 0 && l.push(v);
                    });
                  }
                };
              if (u) d(u);
              else {
                var f = this.services.languageUtils.getFallbackCodes(
                  this.options.fallbackLng
                );
                f.forEach(function (c) {
                  return d(c);
                });
              }
              this.options.preload &&
                this.options.preload.forEach(function (c) {
                  return d(c);
                }),
                this.services.backendConnector.load(
                  l,
                  this.options.ns,
                  function (c) {
                    !c &&
                      !o.resolvedLanguage &&
                      o.language &&
                      o.setResolvedLanguage(o.language),
                      s(c);
                  }
                );
            } else s(null);
          },
        },
        {
          key: 'reloadResources',
          value: function (i, o, a) {
            var s = io();
            return (
              i || (i = this.languages),
              o || (o = this.options.ns),
              a || (a = ja),
              this.services.backendConnector.reload(i, o, function (u) {
                s.resolve(), a(u);
              }),
              s
            );
          },
        },
        {
          key: 'use',
          value: function (i) {
            if (!i)
              throw new Error(
                'You are passing an undefined module! Please check the object you are passing to i18next.use()'
              );
            if (!i.type)
              throw new Error(
                'You are passing a wrong module! Please check the object you are passing to i18next.use()'
              );
            return (
              i.type === 'backend' && (this.modules.backend = i),
              (i.type === 'logger' || (i.log && i.warn && i.error)) &&
                (this.modules.logger = i),
              i.type === 'languageDetector' &&
                (this.modules.languageDetector = i),
              i.type === 'i18nFormat' && (this.modules.i18nFormat = i),
              i.type === 'postProcessor' && k1.addPostProcessor(i),
              i.type === 'formatter' && (this.modules.formatter = i),
              i.type === '3rdParty' && this.modules.external.push(i),
              this
            );
          },
        },
        {
          key: 'setResolvedLanguage',
          value: function (i) {
            if (
              !(!i || !this.languages) &&
              !(['cimode', 'dev'].indexOf(i) > -1)
            )
              for (var o = 0; o < this.languages.length; o++) {
                var a = this.languages[o];
                if (
                  !(['cimode', 'dev'].indexOf(a) > -1) &&
                  this.store.hasLanguageSomeTranslations(a)
                ) {
                  this.resolvedLanguage = a;
                  break;
                }
              }
          },
        },
        {
          key: 'changeLanguage',
          value: function (i, o) {
            var a = this;
            this.isLanguageChangingTo = i;
            var s = io();
            this.emit('languageChanging', i);
            var u = function (c) {
                (a.language = c),
                  (a.languages =
                    a.services.languageUtils.toResolveHierarchy(c)),
                  (a.resolvedLanguage = void 0),
                  a.setResolvedLanguage(c);
              },
              l = function (c, g) {
                g
                  ? (u(g),
                    a.translator.changeLanguage(g),
                    (a.isLanguageChangingTo = void 0),
                    a.emit('languageChanged', g),
                    a.logger.log('languageChanged', g))
                  : (a.isLanguageChangingTo = void 0),
                  s.resolve(function () {
                    return a.t.apply(a, arguments);
                  }),
                  o &&
                    o(c, function () {
                      return a.t.apply(a, arguments);
                    });
              },
              d = function (c) {
                !i && !c && a.services.languageDetector && (c = []);
                var g =
                  typeof c == 'string'
                    ? c
                    : a.services.languageUtils.getBestMatchFromCodes(c);
                g &&
                  (a.language || u(g),
                  a.translator.language || a.translator.changeLanguage(g),
                  a.services.languageDetector &&
                    a.services.languageDetector.cacheUserLanguage(g)),
                  a.loadResources(g, function (m) {
                    l(m, g);
                  });
              };
            return (
              !i &&
              this.services.languageDetector &&
              !this.services.languageDetector.async
                ? d(this.services.languageDetector.detect())
                : !i &&
                  this.services.languageDetector &&
                  this.services.languageDetector.async
                ? this.services.languageDetector.detect(d)
                : d(i),
              s
            );
          },
        },
        {
          key: 'getFixedT',
          value: function (i, o, a) {
            var s = this,
              u = function l(d, f) {
                var c;
                if (lt(f) !== 'object') {
                  for (
                    var g = arguments.length,
                      m = new Array(g > 2 ? g - 2 : 0),
                      v = 2;
                    v < g;
                    v++
                  )
                    m[v - 2] = arguments[v];
                  c = s.options.overloadTranslationOptionHandler(
                    [d, f].concat(m)
                  );
                } else c = Zt({}, f);
                (c.lng = c.lng || l.lng),
                  (c.lngs = c.lngs || l.lngs),
                  (c.ns = c.ns || l.ns),
                  (c.keyPrefix = c.keyPrefix || a || l.keyPrefix);
                var S = s.options.keySeparator || '.',
                  h = c.keyPrefix
                    ? ''.concat(c.keyPrefix).concat(S).concat(d)
                    : d;
                return s.t(h, c);
              };
            return (
              typeof i == 'string' ? (u.lng = i) : (u.lngs = i),
              (u.ns = o),
              (u.keyPrefix = a),
              u
            );
          },
        },
        {
          key: 't',
          value: function () {
            var i;
            return (
              this.translator &&
              (i = this.translator).translate.apply(i, arguments)
            );
          },
        },
        {
          key: 'exists',
          value: function () {
            var i;
            return (
              this.translator &&
              (i = this.translator).exists.apply(i, arguments)
            );
          },
        },
        {
          key: 'setDefaultNamespace',
          value: function (i) {
            this.options.defaultNS = i;
          },
        },
        {
          key: 'hasLoadedNamespace',
          value: function (i) {
            var o = this,
              a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
            if (!this.isInitialized)
              return (
                this.logger.warn(
                  'hasLoadedNamespace: i18next was not initialized',
                  this.languages
                ),
                !1
              );
            if (!this.languages || !this.languages.length)
              return (
                this.logger.warn(
                  'hasLoadedNamespace: i18n.languages were undefined or empty',
                  this.languages
                ),
                !1
              );
            var s = this.resolvedLanguage || this.languages[0],
              u = this.options ? this.options.fallbackLng : !1,
              l = this.languages[this.languages.length - 1];
            if (s.toLowerCase() === 'cimode') return !0;
            var d = function (g, m) {
              var v =
                o.services.backendConnector.state[''.concat(g, '|').concat(m)];
              return v === -1 || v === 2;
            };
            if (a.precheck) {
              var f = a.precheck(this, d);
              if (f !== void 0) return f;
            }
            return !!(
              this.hasResourceBundle(s, i) ||
              !this.services.backendConnector.backend ||
              (this.options.resources &&
                !this.options.partialBundledLanguages) ||
              (d(s, i) && (!u || d(l, i)))
            );
          },
        },
        {
          key: 'loadNamespaces',
          value: function (i, o) {
            var a = this,
              s = io();
            return this.options.ns
              ? (typeof i == 'string' && (i = [i]),
                i.forEach(function (u) {
                  a.options.ns.indexOf(u) < 0 && a.options.ns.push(u);
                }),
                this.loadResources(function (u) {
                  s.resolve(), o && o(u);
                }),
                s)
              : (o && o(), Promise.resolve());
          },
        },
        {
          key: 'loadLanguages',
          value: function (i, o) {
            var a = io();
            typeof i == 'string' && (i = [i]);
            var s = this.options.preload || [],
              u = i.filter(function (l) {
                return s.indexOf(l) < 0;
              });
            return u.length
              ? ((this.options.preload = s.concat(u)),
                this.loadResources(function (l) {
                  a.resolve(), o && o(l);
                }),
                a)
              : (o && o(), Promise.resolve());
          },
        },
        {
          key: 'dir',
          value: function (i) {
            if (
              (i ||
                (i =
                  this.resolvedLanguage ||
                  (this.languages && this.languages.length > 0
                    ? this.languages[0]
                    : this.language)),
              !i)
            )
              return 'rtl';
            var o = [
              'ar',
              'shu',
              'sqr',
              'ssh',
              'xaa',
              'yhd',
              'yud',
              'aao',
              'abh',
              'abv',
              'acm',
              'acq',
              'acw',
              'acx',
              'acy',
              'adf',
              'ads',
              'aeb',
              'aec',
              'afb',
              'ajp',
              'apc',
              'apd',
              'arb',
              'arq',
              'ars',
              'ary',
              'arz',
              'auz',
              'avl',
              'ayh',
              'ayl',
              'ayn',
              'ayp',
              'bbz',
              'pga',
              'he',
              'iw',
              'ps',
              'pbt',
              'pbu',
              'pst',
              'prp',
              'prd',
              'ug',
              'ur',
              'ydd',
              'yds',
              'yih',
              'ji',
              'yi',
              'hbo',
              'men',
              'xmn',
              'fa',
              'jpr',
              'peo',
              'pes',
              'prs',
              'dv',
              'sam',
              'ckb',
            ];
            return o.indexOf(
              this.services.languageUtils.getLanguagePartFromCode(i)
            ) > -1 || i.toLowerCase().indexOf('-arab') > 1
              ? 'rtl'
              : 'ltr';
          },
        },
        {
          key: 'cloneInstance',
          value: function () {
            var i = this,
              o =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : ja,
              s = Zt(Zt(Zt({}, this.options), o), { isClone: !0 }),
              u = new r(s);
            (o.debug !== void 0 || o.prefix !== void 0) &&
              (u.logger = u.logger.clone(o));
            var l = ['store', 'services', 'language'];
            return (
              l.forEach(function (d) {
                u[d] = i[d];
              }),
              (u.services = Zt({}, this.services)),
              (u.services.utils = {
                hasLoadedNamespace: u.hasLoadedNamespace.bind(u),
              }),
              (u.translator = new Eg(u.services, u.options)),
              u.translator.on('*', function (d) {
                for (
                  var f = arguments.length,
                    c = new Array(f > 1 ? f - 1 : 0),
                    g = 1;
                  g < f;
                  g++
                )
                  c[g - 1] = arguments[g];
                u.emit.apply(u, [d].concat(c));
              }),
              u.init(s, a),
              (u.translator.options = u.options),
              (u.translator.backendConnector.services.utils = {
                hasLoadedNamespace: u.hasLoadedNamespace.bind(u),
              }),
              u
            );
          },
        },
        {
          key: 'toJSON',
          value: function () {
            return {
              options: this.options,
              store: this.store,
              language: this.language,
              languages: this.languages,
              resolvedLanguage: this.resolvedLanguage,
            };
          },
        },
      ]),
      r
    );
  })(nn);
  Yt(Us, 'createInstance', function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return new Us(e, t);
  });
  var Ye = Us.createInstance();
  Ye.createInstance = Us.createInstance;
  Ye.createInstance;
  Ye.init;
  Ye.loadResources;
  Ye.reloadResources;
  Ye.use;
  Ye.changeLanguage;
  Ye.getFixedT;
  Ye.t;
  Ye.exists;
  Ye.setDefaultNamespace;
  Ye.hasLoadedNamespace;
  Ye.loadNamespaces;
  Ye.loadLanguages;
  var T1 = [],
    xC = T1.forEach,
    bC = T1.slice;
  function EC(e) {
    return (
      xC.call(bC.call(arguments, 1), function (t) {
        if (t) for (var r in t) e[r] === void 0 && (e[r] = t[r]);
      }),
      e
    );
  }
  var Ng = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    OC = function (t, r, n) {
      var i = n || {};
      i.path = i.path || '/';
      var o = encodeURIComponent(r),
        a = ''.concat(t, '=').concat(o);
      if (i.maxAge > 0) {
        var s = i.maxAge - 0;
        if (Number.isNaN(s)) throw new Error('maxAge should be a Number');
        a += '; Max-Age='.concat(Math.floor(s));
      }
      if (i.domain) {
        if (!Ng.test(i.domain)) throw new TypeError('option domain is invalid');
        a += '; Domain='.concat(i.domain);
      }
      if (i.path) {
        if (!Ng.test(i.path)) throw new TypeError('option path is invalid');
        a += '; Path='.concat(i.path);
      }
      if (i.expires) {
        if (typeof i.expires.toUTCString != 'function')
          throw new TypeError('option expires is invalid');
        a += '; Expires='.concat(i.expires.toUTCString());
      }
      if (
        (i.httpOnly && (a += '; HttpOnly'),
        i.secure && (a += '; Secure'),
        i.sameSite)
      ) {
        var u =
          typeof i.sameSite == 'string' ? i.sameSite.toLowerCase() : i.sameSite;
        switch (u) {
          case !0:
            a += '; SameSite=Strict';
            break;
          case 'lax':
            a += '; SameSite=Lax';
            break;
          case 'strict':
            a += '; SameSite=Strict';
            break;
          case 'none':
            a += '; SameSite=None';
            break;
          default:
            throw new TypeError('option sameSite is invalid');
        }
      }
      return a;
    },
    Fg = {
      create: function (t, r, n, i) {
        var o =
          arguments.length > 4 && arguments[4] !== void 0
            ? arguments[4]
            : { path: '/', sameSite: 'strict' };
        n &&
          ((o.expires = new Date()),
          o.expires.setTime(o.expires.getTime() + n * 60 * 1e3)),
          i && (o.domain = i),
          (document.cookie = OC(t, encodeURIComponent(r), o));
      },
      read: function (t) {
        for (
          var r = ''.concat(t, '='), n = document.cookie.split(';'), i = 0;
          i < n.length;
          i++
        ) {
          for (var o = n[i]; o.charAt(0) === ' '; )
            o = o.substring(1, o.length);
          if (o.indexOf(r) === 0) return o.substring(r.length, o.length);
        }
        return null;
      },
      remove: function (t) {
        this.create(t, '', -1);
      },
    },
    CC = {
      name: 'cookie',
      lookup: function (t) {
        var r;
        if (t.lookupCookie && typeof document < 'u') {
          var n = Fg.read(t.lookupCookie);
          n && (r = n);
        }
        return r;
      },
      cacheUserLanguage: function (t, r) {
        r.lookupCookie &&
          typeof document < 'u' &&
          Fg.create(
            r.lookupCookie,
            t,
            r.cookieMinutes,
            r.cookieDomain,
            r.cookieOptions
          );
      },
    },
    PC = {
      name: 'querystring',
      lookup: function (t) {
        var r;
        if (typeof window < 'u') {
          var n = window.location.search;
          !window.location.search &&
            window.location.hash &&
            window.location.hash.indexOf('?') > -1 &&
            (n = window.location.hash.substring(
              window.location.hash.indexOf('?')
            ));
          for (
            var i = n.substring(1), o = i.split('&'), a = 0;
            a < o.length;
            a++
          ) {
            var s = o[a].indexOf('=');
            if (s > 0) {
              var u = o[a].substring(0, s);
              u === t.lookupQuerystring && (r = o[a].substring(s + 1));
            }
          }
        }
        return r;
      },
    },
    oo = null,
    Rg = function () {
      if (oo !== null) return oo;
      try {
        oo = window !== 'undefined' && window.localStorage !== null;
        var t = 'i18next.translate.boo';
        window.localStorage.setItem(t, 'foo'),
          window.localStorage.removeItem(t);
      } catch {
        oo = !1;
      }
      return oo;
    },
    $C = {
      name: 'localStorage',
      lookup: function (t) {
        var r;
        if (t.lookupLocalStorage && Rg()) {
          var n = window.localStorage.getItem(t.lookupLocalStorage);
          n && (r = n);
        }
        return r;
      },
      cacheUserLanguage: function (t, r) {
        r.lookupLocalStorage &&
          Rg() &&
          window.localStorage.setItem(r.lookupLocalStorage, t);
      },
    },
    ao = null,
    Lg = function () {
      if (ao !== null) return ao;
      try {
        ao = window !== 'undefined' && window.sessionStorage !== null;
        var t = 'i18next.translate.boo';
        window.sessionStorage.setItem(t, 'foo'),
          window.sessionStorage.removeItem(t);
      } catch {
        ao = !1;
      }
      return ao;
    },
    kC = {
      name: 'sessionStorage',
      lookup: function (t) {
        var r;
        if (t.lookupSessionStorage && Lg()) {
          var n = window.sessionStorage.getItem(t.lookupSessionStorage);
          n && (r = n);
        }
        return r;
      },
      cacheUserLanguage: function (t, r) {
        r.lookupSessionStorage &&
          Lg() &&
          window.sessionStorage.setItem(r.lookupSessionStorage, t);
      },
    },
    TC = {
      name: 'navigator',
      lookup: function (t) {
        var r = [];
        if (typeof navigator < 'u') {
          if (navigator.languages)
            for (var n = 0; n < navigator.languages.length; n++)
              r.push(navigator.languages[n]);
          navigator.userLanguage && r.push(navigator.userLanguage),
            navigator.language && r.push(navigator.language);
        }
        return r.length > 0 ? r : void 0;
      },
    },
    AC = {
      name: 'htmlTag',
      lookup: function (t) {
        var r,
          n =
            t.htmlTag ||
            (typeof document < 'u' ? document.documentElement : null);
        return (
          n &&
            typeof n.getAttribute == 'function' &&
            (r = n.getAttribute('lang')),
          r
        );
      },
    },
    NC = {
      name: 'path',
      lookup: function (t) {
        var r;
        if (typeof window < 'u') {
          var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
          if (n instanceof Array)
            if (typeof t.lookupFromPathIndex == 'number') {
              if (typeof n[t.lookupFromPathIndex] != 'string') return;
              r = n[t.lookupFromPathIndex].replace('/', '');
            } else r = n[0].replace('/', '');
        }
        return r;
      },
    },
    FC = {
      name: 'subdomain',
      lookup: function (t) {
        var r =
            typeof t.lookupFromSubdomainIndex == 'number'
              ? t.lookupFromSubdomainIndex + 1
              : 1,
          n =
            typeof window < 'u' &&
            window.location &&
            window.location.hostname &&
            window.location.hostname.match(
              /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
            );
        if (!!n) return n[r];
      },
    };
  function RC() {
    return {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
      ],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
    };
  }
  var A1 = (function () {
    function e(t) {
      var r =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Nt(this, e),
        (this.type = 'languageDetector'),
        (this.detectors = {}),
        this.init(t, r);
    }
    return (
      Ft(e, [
        {
          key: 'init',
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              i =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {};
            (this.services = r),
              (this.options = EC(n, this.options || {}, RC())),
              this.options.lookupFromUrlIndex &&
                (this.options.lookupFromPathIndex =
                  this.options.lookupFromUrlIndex),
              (this.i18nOptions = i),
              this.addDetector(CC),
              this.addDetector(PC),
              this.addDetector($C),
              this.addDetector(kC),
              this.addDetector(TC),
              this.addDetector(AC),
              this.addDetector(NC),
              this.addDetector(FC);
          },
        },
        {
          key: 'addDetector',
          value: function (r) {
            this.detectors[r.name] = r;
          },
        },
        {
          key: 'detect',
          value: function (r) {
            var n = this;
            r || (r = this.options.order);
            var i = [];
            return (
              r.forEach(function (o) {
                if (n.detectors[o]) {
                  var a = n.detectors[o].lookup(n.options);
                  a && typeof a == 'string' && (a = [a]),
                    a && (i = i.concat(a));
                }
              }),
              this.services.languageUtils.getBestMatchFromCodes
                ? i
                : i.length > 0
                ? i[0]
                : null
            );
          },
        },
        {
          key: 'cacheUserLanguage',
          value: function (r, n) {
            var i = this;
            n || (n = this.options.caches),
              n &&
                ((this.options.excludeCacheFor &&
                  this.options.excludeCacheFor.indexOf(r) > -1) ||
                  n.forEach(function (o) {
                    i.detectors[o] &&
                      i.detectors[o].cacheUserLanguage(r, i.options);
                  }));
          },
        },
      ]),
      e
    );
  })();
  A1.type = 'languageDetector';
  function wf(e) {
    return (
      (wf =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == 'function' &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      wf(e)
    );
  }
  var N1 = [],
    LC = N1.forEach,
    jC = N1.slice;
  function _f(e) {
    return (
      LC.call(jC.call(arguments, 1), function (t) {
        if (t) for (var r in t) e[r] === void 0 && (e[r] = t[r]);
      }),
      e
    );
  }
  function F1() {
    return (
      typeof XMLHttpRequest == 'function' ||
      (typeof XMLHttpRequest > 'u' ? 'undefined' : wf(XMLHttpRequest)) ===
        'object'
    );
  }
  function IC(e) {
    return !!e && typeof e.then == 'function';
  }
  function DC(e) {
    return IC(e) ? e : Promise.resolve(e);
  }
  function MC(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  var zs = { exports: {} },
    Ia = { exports: {} },
    jg;
  function UC() {
    return (
      jg ||
        ((jg = 1),
        (function (e, t) {
          var r = typeof self < 'u' ? self : Ir,
            n = (function () {
              function o() {
                (this.fetch = !1), (this.DOMException = r.DOMException);
              }
              return (o.prototype = r), new o();
            })();
          (function (o) {
            (function (a) {
              var s = {
                searchParams: 'URLSearchParams' in o,
                iterable: 'Symbol' in o && 'iterator' in Symbol,
                blob:
                  'FileReader' in o &&
                  'Blob' in o &&
                  (function () {
                    try {
                      return new Blob(), !0;
                    } catch {
                      return !1;
                    }
                  })(),
                formData: 'FormData' in o,
                arrayBuffer: 'ArrayBuffer' in o,
              };
              function u(b) {
                return b && DataView.prototype.isPrototypeOf(b);
              }
              if (s.arrayBuffer)
                var l = [
                    '[object Int8Array]',
                    '[object Uint8Array]',
                    '[object Uint8ClampedArray]',
                    '[object Int16Array]',
                    '[object Uint16Array]',
                    '[object Int32Array]',
                    '[object Uint32Array]',
                    '[object Float32Array]',
                    '[object Float64Array]',
                  ],
                  d =
                    ArrayBuffer.isView ||
                    function (b) {
                      return (
                        b && l.indexOf(Object.prototype.toString.call(b)) > -1
                      );
                    };
              function f(b) {
                if (
                  (typeof b != 'string' && (b = String(b)),
                  /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))
                )
                  throw new TypeError('Invalid character in header field name');
                return b.toLowerCase();
              }
              function c(b) {
                return typeof b != 'string' && (b = String(b)), b;
              }
              function g(b) {
                var N = {
                  next: function () {
                    var B = b.shift();
                    return { done: B === void 0, value: B };
                  },
                };
                return (
                  s.iterable &&
                    (N[Symbol.iterator] = function () {
                      return N;
                    }),
                  N
                );
              }
              function m(b) {
                (this.map = {}),
                  b instanceof m
                    ? b.forEach(function (N, B) {
                        this.append(B, N);
                      }, this)
                    : Array.isArray(b)
                    ? b.forEach(function (N) {
                        this.append(N[0], N[1]);
                      }, this)
                    : b &&
                      Object.getOwnPropertyNames(b).forEach(function (N) {
                        this.append(N, b[N]);
                      }, this);
              }
              (m.prototype.append = function (b, N) {
                (b = f(b)), (N = c(N));
                var B = this.map[b];
                this.map[b] = B ? B + ', ' + N : N;
              }),
                (m.prototype.delete = function (b) {
                  delete this.map[f(b)];
                }),
                (m.prototype.get = function (b) {
                  return (b = f(b)), this.has(b) ? this.map[b] : null;
                }),
                (m.prototype.has = function (b) {
                  return this.map.hasOwnProperty(f(b));
                }),
                (m.prototype.set = function (b, N) {
                  this.map[f(b)] = c(N);
                }),
                (m.prototype.forEach = function (b, N) {
                  for (var B in this.map)
                    this.map.hasOwnProperty(B) &&
                      b.call(N, this.map[B], B, this);
                }),
                (m.prototype.keys = function () {
                  var b = [];
                  return (
                    this.forEach(function (N, B) {
                      b.push(B);
                    }),
                    g(b)
                  );
                }),
                (m.prototype.values = function () {
                  var b = [];
                  return (
                    this.forEach(function (N) {
                      b.push(N);
                    }),
                    g(b)
                  );
                }),
                (m.prototype.entries = function () {
                  var b = [];
                  return (
                    this.forEach(function (N, B) {
                      b.push([B, N]);
                    }),
                    g(b)
                  );
                }),
                s.iterable &&
                  (m.prototype[Symbol.iterator] = m.prototype.entries);
              function v(b) {
                if (b.bodyUsed)
                  return Promise.reject(new TypeError('Already read'));
                b.bodyUsed = !0;
              }
              function S(b) {
                return new Promise(function (N, B) {
                  (b.onload = function () {
                    N(b.result);
                  }),
                    (b.onerror = function () {
                      B(b.error);
                    });
                });
              }
              function h(b) {
                var N = new FileReader(),
                  B = S(N);
                return N.readAsArrayBuffer(b), B;
              }
              function p(b) {
                var N = new FileReader(),
                  B = S(N);
                return N.readAsText(b), B;
              }
              function y(b) {
                for (
                  var N = new Uint8Array(b), B = new Array(N.length), X = 0;
                  X < N.length;
                  X++
                )
                  B[X] = String.fromCharCode(N[X]);
                return B.join('');
              }
              function _(b) {
                if (b.slice) return b.slice(0);
                var N = new Uint8Array(b.byteLength);
                return N.set(new Uint8Array(b)), N.buffer;
              }
              function x() {
                return (
                  (this.bodyUsed = !1),
                  (this._initBody = function (b) {
                    (this._bodyInit = b),
                      b
                        ? typeof b == 'string'
                          ? (this._bodyText = b)
                          : s.blob && Blob.prototype.isPrototypeOf(b)
                          ? (this._bodyBlob = b)
                          : s.formData && FormData.prototype.isPrototypeOf(b)
                          ? (this._bodyFormData = b)
                          : s.searchParams &&
                            URLSearchParams.prototype.isPrototypeOf(b)
                          ? (this._bodyText = b.toString())
                          : s.arrayBuffer && s.blob && u(b)
                          ? ((this._bodyArrayBuffer = _(b.buffer)),
                            (this._bodyInit = new Blob([
                              this._bodyArrayBuffer,
                            ])))
                          : s.arrayBuffer &&
                            (ArrayBuffer.prototype.isPrototypeOf(b) || d(b))
                          ? (this._bodyArrayBuffer = _(b))
                          : (this._bodyText = b =
                              Object.prototype.toString.call(b))
                        : (this._bodyText = ''),
                      this.headers.get('content-type') ||
                        (typeof b == 'string'
                          ? this.headers.set(
                              'content-type',
                              'text/plain;charset=UTF-8'
                            )
                          : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set(
                              'content-type',
                              this._bodyBlob.type
                            )
                          : s.searchParams &&
                            URLSearchParams.prototype.isPrototypeOf(b) &&
                            this.headers.set(
                              'content-type',
                              'application/x-www-form-urlencoded;charset=UTF-8'
                            ));
                  }),
                  s.blob &&
                    ((this.blob = function () {
                      var b = v(this);
                      if (b) return b;
                      if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                      if (this._bodyArrayBuffer)
                        return Promise.resolve(
                          new Blob([this._bodyArrayBuffer])
                        );
                      if (this._bodyFormData)
                        throw new Error('could not read FormData body as blob');
                      return Promise.resolve(new Blob([this._bodyText]));
                    }),
                    (this.arrayBuffer = function () {
                      return this._bodyArrayBuffer
                        ? v(this) || Promise.resolve(this._bodyArrayBuffer)
                        : this.blob().then(h);
                    })),
                  (this.text = function () {
                    var b = v(this);
                    if (b) return b;
                    if (this._bodyBlob) return p(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(y(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                      throw new Error('could not read FormData body as text');
                    return Promise.resolve(this._bodyText);
                  }),
                  s.formData &&
                    (this.formData = function () {
                      return this.text().then(D);
                    }),
                  (this.json = function () {
                    return this.text().then(JSON.parse);
                  }),
                  this
                );
              }
              var E = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
              function $(b) {
                var N = b.toUpperCase();
                return E.indexOf(N) > -1 ? N : b;
              }
              function k(b, N) {
                N = N || {};
                var B = N.body;
                if (b instanceof k) {
                  if (b.bodyUsed) throw new TypeError('Already read');
                  (this.url = b.url),
                    (this.credentials = b.credentials),
                    N.headers || (this.headers = new m(b.headers)),
                    (this.method = b.method),
                    (this.mode = b.mode),
                    (this.signal = b.signal),
                    !B &&
                      b._bodyInit != null &&
                      ((B = b._bodyInit), (b.bodyUsed = !0));
                } else this.url = String(b);
                if (
                  ((this.credentials =
                    N.credentials || this.credentials || 'same-origin'),
                  (N.headers || !this.headers) &&
                    (this.headers = new m(N.headers)),
                  (this.method = $(N.method || this.method || 'GET')),
                  (this.mode = N.mode || this.mode || null),
                  (this.signal = N.signal || this.signal),
                  (this.referrer = null),
                  (this.method === 'GET' || this.method === 'HEAD') && B)
                )
                  throw new TypeError(
                    'Body not allowed for GET or HEAD requests'
                  );
                this._initBody(B);
              }
              k.prototype.clone = function () {
                return new k(this, { body: this._bodyInit });
              };
              function D(b) {
                var N = new FormData();
                return (
                  b
                    .trim()
                    .split('&')
                    .forEach(function (B) {
                      if (B) {
                        var X = B.split('='),
                          A = X.shift().replace(/\+/g, ' '),
                          R = X.join('=').replace(/\+/g, ' ');
                        N.append(decodeURIComponent(A), decodeURIComponent(R));
                      }
                    }),
                  N
                );
              }
              function F(b) {
                var N = new m(),
                  B = b.replace(/\r?\n[\t ]+/g, ' ');
                return (
                  B.split(/\r?\n/).forEach(function (X) {
                    var A = X.split(':'),
                      R = A.shift().trim();
                    if (R) {
                      var U = A.join(':').trim();
                      N.append(R, U);
                    }
                  }),
                  N
                );
              }
              x.call(k.prototype);
              function z(b, N) {
                N || (N = {}),
                  (this.type = 'default'),
                  (this.status = N.status === void 0 ? 200 : N.status),
                  (this.ok = this.status >= 200 && this.status < 300),
                  (this.statusText = 'statusText' in N ? N.statusText : 'OK'),
                  (this.headers = new m(N.headers)),
                  (this.url = N.url || ''),
                  this._initBody(b);
              }
              x.call(z.prototype),
                (z.prototype.clone = function () {
                  return new z(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new m(this.headers),
                    url: this.url,
                  });
                }),
                (z.error = function () {
                  var b = new z(null, { status: 0, statusText: '' });
                  return (b.type = 'error'), b;
                });
              var me = [301, 302, 303, 307, 308];
              (z.redirect = function (b, N) {
                if (me.indexOf(N) === -1)
                  throw new RangeError('Invalid status code');
                return new z(null, { status: N, headers: { location: b } });
              }),
                (a.DOMException = o.DOMException);
              try {
                new a.DOMException();
              } catch {
                (a.DOMException = function (N, B) {
                  (this.message = N), (this.name = B);
                  var X = Error(N);
                  this.stack = X.stack;
                }),
                  (a.DOMException.prototype = Object.create(Error.prototype)),
                  (a.DOMException.prototype.constructor = a.DOMException);
              }
              function Oe(b, N) {
                return new Promise(function (B, X) {
                  var A = new k(b, N);
                  if (A.signal && A.signal.aborted)
                    return X(new a.DOMException('Aborted', 'AbortError'));
                  var R = new XMLHttpRequest();
                  function U() {
                    R.abort();
                  }
                  (R.onload = function () {
                    var W = {
                      status: R.status,
                      statusText: R.statusText,
                      headers: F(R.getAllResponseHeaders() || ''),
                    };
                    W.url =
                      'responseURL' in R
                        ? R.responseURL
                        : W.headers.get('X-Request-URL');
                    var Q = 'response' in R ? R.response : R.responseText;
                    B(new z(Q, W));
                  }),
                    (R.onerror = function () {
                      X(new TypeError('Network request failed'));
                    }),
                    (R.ontimeout = function () {
                      X(new TypeError('Network request failed'));
                    }),
                    (R.onabort = function () {
                      X(new a.DOMException('Aborted', 'AbortError'));
                    }),
                    R.open(A.method, A.url, !0),
                    A.credentials === 'include'
                      ? (R.withCredentials = !0)
                      : A.credentials === 'omit' && (R.withCredentials = !1),
                    'responseType' in R && s.blob && (R.responseType = 'blob'),
                    A.headers.forEach(function (W, Q) {
                      R.setRequestHeader(Q, W);
                    }),
                    A.signal &&
                      (A.signal.addEventListener('abort', U),
                      (R.onreadystatechange = function () {
                        R.readyState === 4 &&
                          A.signal.removeEventListener('abort', U);
                      })),
                    R.send(typeof A._bodyInit > 'u' ? null : A._bodyInit);
                });
              }
              return (
                (Oe.polyfill = !0),
                o.fetch ||
                  ((o.fetch = Oe),
                  (o.Headers = m),
                  (o.Request = k),
                  (o.Response = z)),
                (a.Headers = m),
                (a.Request = k),
                (a.Response = z),
                (a.fetch = Oe),
                Object.defineProperty(a, '__esModule', { value: !0 }),
                a
              );
            })({});
          })(n),
            (n.fetch.ponyfill = !0),
            delete n.fetch.polyfill;
          var i = n;
          (t = i.fetch),
            (t.default = i.fetch),
            (t.fetch = i.fetch),
            (t.Headers = i.Headers),
            (t.Request = i.Request),
            (t.Response = i.Response),
            (e.exports = t);
        })(Ia, Ia.exports)),
      Ia.exports
    );
  }
  (function (e, t) {
    var r;
    if (
      (typeof fetch == 'function' &&
        (typeof Ir < 'u' && Ir.fetch
          ? (r = Ir.fetch)
          : typeof window < 'u' && window.fetch
          ? (r = window.fetch)
          : (r = fetch)),
      typeof MC < 'u' && (typeof window > 'u' || typeof window.document > 'u'))
    ) {
      var n = r || UC();
      n.default && (n = n.default), (t.default = n), (e.exports = t.default);
    }
  })(zs, zs.exports);
  const R1 = zs.exports,
    Ig = Uv({ __proto__: null, default: R1 }, [zs.exports]);
  function Bs(e) {
    return (
      (Bs =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == 'function' &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      Bs(e)
    );
  }
  var yr;
  typeof fetch == 'function' &&
    (typeof global < 'u' && global.fetch
      ? (yr = global.fetch)
      : typeof window < 'u' && window.fetch
      ? (yr = window.fetch)
      : (yr = fetch));
  var Go;
  F1() &&
    (typeof global < 'u' && global.XMLHttpRequest
      ? (Go = global.XMLHttpRequest)
      : typeof window < 'u' &&
        window.XMLHttpRequest &&
        (Go = window.XMLHttpRequest));
  var Hs;
  typeof ActiveXObject == 'function' &&
    (typeof global < 'u' && global.ActiveXObject
      ? (Hs = global.ActiveXObject)
      : typeof window < 'u' &&
        window.ActiveXObject &&
        (Hs = window.ActiveXObject));
  !yr && Ig && !Go && !Hs && (yr = R1 || Ig);
  typeof yr != 'function' && (yr = void 0);
  var Sf = function (t, r) {
      if (r && Bs(r) === 'object') {
        var n = '';
        for (var i in r)
          n += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(r[i]);
        if (!n) return t;
        t = t + (t.indexOf('?') !== -1 ? '&' : '?') + n.slice(1);
      }
      return t;
    },
    Dg = function (t, r, n) {
      yr(t, r)
        .then(function (i) {
          if (!i.ok) return n(i.statusText || 'Error', { status: i.status });
          i.text()
            .then(function (o) {
              n(null, { status: i.status, data: o });
            })
            .catch(n);
        })
        .catch(n);
    },
    Mg = !1,
    zC = function (t, r, n, i) {
      t.queryStringParams && (r = Sf(r, t.queryStringParams));
      var o = _f(
        {},
        typeof t.customHeaders == 'function'
          ? t.customHeaders()
          : t.customHeaders
      );
      n && (o['Content-Type'] = 'application/json');
      var a =
          typeof t.requestOptions == 'function'
            ? t.requestOptions(n)
            : t.requestOptions,
        s = _f(
          {
            method: n ? 'POST' : 'GET',
            body: n ? t.stringify(n) : void 0,
            headers: o,
          },
          Mg ? {} : a
        );
      try {
        Dg(r, s, i);
      } catch (u) {
        if (
          !a ||
          Object.keys(a).length === 0 ||
          !u.message ||
          u.message.indexOf('not implemented') < 0
        )
          return i(u);
        try {
          Object.keys(a).forEach(function (l) {
            delete s[l];
          }),
            Dg(r, s, i),
            (Mg = !0);
        } catch (l) {
          i(l);
        }
      }
    },
    BC = function (t, r, n, i) {
      n && Bs(n) === 'object' && (n = Sf('', n).slice(1)),
        t.queryStringParams && (r = Sf(r, t.queryStringParams));
      try {
        var o;
        Go ? (o = new Go()) : (o = new Hs('MSXML2.XMLHTTP.3.0')),
          o.open(n ? 'POST' : 'GET', r, 1),
          t.crossDomain ||
            o.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
          (o.withCredentials = !!t.withCredentials),
          n &&
            o.setRequestHeader(
              'Content-Type',
              'application/x-www-form-urlencoded'
            ),
          o.overrideMimeType && o.overrideMimeType('application/json');
        var a = t.customHeaders;
        if (((a = typeof a == 'function' ? a() : a), a))
          for (var s in a) o.setRequestHeader(s, a[s]);
        (o.onreadystatechange = function () {
          o.readyState > 3 &&
            i(o.status >= 400 ? o.statusText : null, {
              status: o.status,
              data: o.responseText,
            });
        }),
          o.send(n);
      } catch (u) {
        console && console.log(u);
      }
    },
    HC = function (t, r, n, i) {
      if (
        (typeof n == 'function' && ((i = n), (n = void 0)),
        (i = i || function () {}),
        yr && r.indexOf('file:') !== 0)
      )
        return zC(t, r, n, i);
      if (F1() || typeof ActiveXObject == 'function') return BC(t, r, n, i);
      i(new Error('No fetch and no xhr implementation found!'));
    };
  function VC(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function Ug(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function WC(e, t, r) {
    return (
      t && Ug(e.prototype, t),
      r && Ug(e, r),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  function KC(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  var qC = function () {
      return {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        addPath: '/locales/add/{{lng}}/{{ns}}',
        allowMultiLoading: !1,
        parse: function (r) {
          return JSON.parse(r);
        },
        stringify: JSON.stringify,
        parsePayload: function (r, n, i) {
          return KC({}, n, i || '');
        },
        request: HC,
        reloadInterval: typeof window < 'u' ? !1 : 60 * 60 * 1e3,
        customHeaders: {},
        queryStringParams: {},
        crossDomain: !1,
        withCredentials: !1,
        overrideMimeType: !1,
        requestOptions: {
          mode: 'cors',
          credentials: 'same-origin',
          cache: 'default',
        },
      };
    },
    L1 = (function () {
      function e(t) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        VC(this, e),
          (this.services = t),
          (this.options = r),
          (this.allOptions = n),
          (this.type = 'backend'),
          this.init(t, r, n);
      }
      return (
        WC(e, [
          {
            key: 'init',
            value: function (r) {
              var n = this,
                i =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                o =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {};
              (this.services = r),
                (this.options = _f(i, this.options || {}, qC())),
                (this.allOptions = o),
                this.services &&
                  this.options.reloadInterval &&
                  setInterval(function () {
                    return n.reload();
                  }, this.options.reloadInterval);
            },
          },
          {
            key: 'readMulti',
            value: function (r, n, i) {
              this._readAny(r, r, n, n, i);
            },
          },
          {
            key: 'read',
            value: function (r, n, i) {
              this._readAny([r], r, [n], n, i);
            },
          },
          {
            key: '_readAny',
            value: function (r, n, i, o, a) {
              var s = this,
                u = this.options.loadPath;
              typeof this.options.loadPath == 'function' &&
                (u = this.options.loadPath(r, i)),
                (u = DC(u)),
                u.then(function (l) {
                  if (!l) return a(null, {});
                  var d = s.services.interpolator.interpolate(l, {
                    lng: r.join('+'),
                    ns: i.join('+'),
                  });
                  s.loadUrl(d, a, n, o);
                });
            },
          },
          {
            key: 'loadUrl',
            value: function (r, n, i, o) {
              var a = this;
              this.options.request(this.options, r, void 0, function (s, u) {
                if (u && ((u.status >= 500 && u.status < 600) || !u.status))
                  return n(
                    'failed loading ' + r + '; status code: ' + u.status,
                    !0
                  );
                if (u && u.status >= 400 && u.status < 500)
                  return n(
                    'failed loading ' + r + '; status code: ' + u.status,
                    !1
                  );
                if (
                  !u &&
                  s &&
                  s.message &&
                  s.message.indexOf('Failed to fetch') > -1
                )
                  return n('failed loading ' + r + ': ' + s.message, !0);
                if (s) return n(s, !1);
                var l, d;
                try {
                  typeof u.data == 'string'
                    ? (l = a.options.parse(u.data, i, o))
                    : (l = u.data);
                } catch {
                  d = 'failed parsing ' + r + ' to json';
                }
                if (d) return n(d, !1);
                n(null, l);
              });
            },
          },
          {
            key: 'create',
            value: function (r, n, i, o, a) {
              var s = this;
              if (!!this.options.addPath) {
                typeof r == 'string' && (r = [r]);
                var u = this.options.parsePayload(n, i, o),
                  l = 0,
                  d = [],
                  f = [];
                r.forEach(function (c) {
                  var g = s.options.addPath;
                  typeof s.options.addPath == 'function' &&
                    (g = s.options.addPath(c, n));
                  var m = s.services.interpolator.interpolate(g, {
                    lng: c,
                    ns: n,
                  });
                  s.options.request(s.options, m, u, function (v, S) {
                    (l += 1),
                      d.push(v),
                      f.push(S),
                      l === r.length && a && a(d, f);
                  });
                });
              }
            },
          },
          {
            key: 'reload',
            value: function () {
              var r = this,
                n = this.services,
                i = n.backendConnector,
                o = n.languageUtils,
                a = n.logger,
                s = i.language;
              if (!(s && s.toLowerCase() === 'cimode')) {
                var u = [],
                  l = function (f) {
                    var c = o.toResolveHierarchy(f);
                    c.forEach(function (g) {
                      u.indexOf(g) < 0 && u.push(g);
                    });
                  };
                l(s),
                  this.allOptions.preload &&
                    this.allOptions.preload.forEach(function (d) {
                      return l(d);
                    }),
                  u.forEach(function (d) {
                    r.allOptions.ns.forEach(function (f) {
                      i.read(d, f, 'read', null, null, function (c, g) {
                        c &&
                          a.warn(
                            'loading namespace '
                              .concat(f, ' for language ')
                              .concat(d, ' failed'),
                            c
                          ),
                          !c &&
                            g &&
                            a.log(
                              'loaded namespace '
                                .concat(f, ' for language ')
                                .concat(d),
                              g
                            ),
                          i.loaded(''.concat(d, '|').concat(f), c, g);
                      });
                    });
                  });
              }
            },
          },
        ]),
        e
      );
    })();
  L1.type = 'backend';
  Ye.use(AO)
    .use(A1)
    .use(L1)
    .init({
      supportedLngs: ['en', 'ru'],
      fallbackLng: 'en',
      detection: { order: ['path', 'localStorage'], caches: ['localStorage'] },
      debug: !1,
      saveMissing: !0,
    });
  var q = { exports: {} },
    YC = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
    GC = YC,
    XC = GC;
  function j1() {}
  function I1() {}
  I1.resetWarningCache = j1;
  var QC = function () {
    function e(n, i, o, a, s, u) {
      if (u !== XC) {
        var l = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
        );
        throw ((l.name = 'Invariant Violation'), l);
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var r = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: I1,
      resetWarningCache: j1,
    };
    return (r.PropTypes = r), r;
  };
  q.exports = QC();
  var ZC = typeof Element < 'u',
    JC = typeof Map == 'function',
    eP = typeof Set == 'function',
    tP = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
  function os(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == 'object' && typeof t == 'object') {
      if (e.constructor !== t.constructor) return !1;
      var r, n, i;
      if (Array.isArray(e)) {
        if (((r = e.length), r != t.length)) return !1;
        for (n = r; n-- !== 0; ) if (!os(e[n], t[n])) return !1;
        return !0;
      }
      var o;
      if (JC && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (o = e.entries(); !(n = o.next()).done; )
          if (!t.has(n.value[0])) return !1;
        for (o = e.entries(); !(n = o.next()).done; )
          if (!os(n.value[1], t.get(n.value[0]))) return !1;
        return !0;
      }
      if (eP && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (o = e.entries(); !(n = o.next()).done; )
          if (!t.has(n.value[0])) return !1;
        return !0;
      }
      if (tP && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        if (((r = e.length), r != t.length)) return !1;
        for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
        return !0;
      }
      if (e.constructor === RegExp)
        return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf)
        return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString)
        return e.toString() === t.toString();
      if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
        return !1;
      for (n = r; n-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
      if (ZC && e instanceof Element) return !1;
      for (n = r; n-- !== 0; )
        if (
          !(
            (i[n] === '_owner' || i[n] === '__v' || i[n] === '__o') &&
            e.$$typeof
          ) &&
          !os(e[i[n]], t[i[n]])
        )
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var rP = function (t, r) {
      try {
        return os(t, r);
      } catch (n) {
        if ((n.message || '').match(/stack|recursion/i))
          return (
            console.warn('react-fast-compare cannot handle circular refs'), !1
          );
        throw n;
      }
    },
    nP = function (e, t, r, n, i, o, a, s) {
      if (!e) {
        var u;
        if (t === void 0)
          u = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
          );
        else {
          var l = [r, n, i, o, a, s],
            d = 0;
          (u = new Error(
            t.replace(/%s/g, function () {
              return l[d++];
            })
          )),
            (u.name = 'Invariant Violation');
        }
        throw ((u.framesToPop = 1), u);
      }
    },
    zg = nP,
    iP = function (t, r, n, i) {
      var o = n ? n.call(i, t, r) : void 0;
      if (o !== void 0) return !!o;
      if (t === r) return !0;
      if (typeof t != 'object' || !t || typeof r != 'object' || !r) return !1;
      var a = Object.keys(t),
        s = Object.keys(r);
      if (a.length !== s.length) return !1;
      for (
        var u = Object.prototype.hasOwnProperty.bind(r), l = 0;
        l < a.length;
        l++
      ) {
        var d = a[l];
        if (!u(d)) return !1;
        var f = t[d],
          c = r[d];
        if (
          ((o = n ? n.call(i, f, c, d) : void 0),
          o === !1 || (o === void 0 && f !== c))
        )
          return !1;
      }
      return !0;
    };
  function we() {
    return (
      (we =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      we.apply(this, arguments)
    );
  }
  function up(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      xf(e, t);
  }
  function xf(e, t) {
    return (
      (xf =
        Object.setPrototypeOf ||
        function (r, n) {
          return (r.__proto__ = n), r;
        }),
      xf(e, t)
    );
  }
  function Bg(e, t) {
    if (e == null) return {};
    var r,
      n,
      i = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (i[r] = e[r]);
    return i;
  }
  var V = {
      BASE: 'base',
      BODY: 'body',
      HEAD: 'head',
      HTML: 'html',
      LINK: 'link',
      META: 'meta',
      NOSCRIPT: 'noscript',
      SCRIPT: 'script',
      STYLE: 'style',
      TITLE: 'title',
      FRAGMENT: 'Symbol(react.fragment)',
    },
    oP = { rel: ['amphtml', 'canonical', 'alternate'] },
    aP = { type: ['application/ld+json'] },
    sP = {
      charset: '',
      name: ['robots', 'description'],
      property: [
        'og:type',
        'og:title',
        'og:url',
        'og:image',
        'og:image:alt',
        'og:description',
        'twitter:url',
        'twitter:title',
        'twitter:description',
        'twitter:image',
        'twitter:image:alt',
        'twitter:card',
        'twitter:site',
      ],
    },
    Hg = Object.keys(V).map(function (e) {
      return V[e];
    }),
    Vs = {
      accesskey: 'accessKey',
      charset: 'charSet',
      class: 'className',
      contenteditable: 'contentEditable',
      contextmenu: 'contextMenu',
      'http-equiv': 'httpEquiv',
      itemprop: 'itemProp',
      tabindex: 'tabIndex',
    },
    uP = Object.keys(Vs).reduce(function (e, t) {
      return (e[Vs[t]] = t), e;
    }, {}),
    _i = function (e, t) {
      for (var r = e.length - 1; r >= 0; r -= 1) {
        var n = e[r];
        if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
      }
      return null;
    },
    lP = function (e) {
      var t = _i(e, V.TITLE),
        r = _i(e, 'titleTemplate');
      if ((Array.isArray(t) && (t = t.join('')), r && t))
        return r.replace(/%s/g, function () {
          return t;
        });
      var n = _i(e, 'defaultTitle');
      return t || n || void 0;
    },
    cP = function (e) {
      return _i(e, 'onChangeClientState') || function () {};
    },
    Wl = function (e, t) {
      return t
        .filter(function (r) {
          return r[e] !== void 0;
        })
        .map(function (r) {
          return r[e];
        })
        .reduce(function (r, n) {
          return we({}, r, n);
        }, {});
    },
    fP = function (e, t) {
      return t
        .filter(function (r) {
          return r[V.BASE] !== void 0;
        })
        .map(function (r) {
          return r[V.BASE];
        })
        .reverse()
        .reduce(function (r, n) {
          if (!r.length)
            for (var i = Object.keys(n), o = 0; o < i.length; o += 1) {
              var a = i[o].toLowerCase();
              if (e.indexOf(a) !== -1 && n[a]) return r.concat(n);
            }
          return r;
        }, []);
    },
    so = function (e, t, r) {
      var n = {};
      return r
        .filter(function (i) {
          return (
            !!Array.isArray(i[e]) ||
            (i[e] !== void 0 &&
              console &&
              typeof console.warn == 'function' &&
              console.warn(
                'Helmet: ' +
                  e +
                  ' should be of type "Array". Instead found type "' +
                  typeof i[e] +
                  '"'
              ),
            !1)
          );
        })
        .map(function (i) {
          return i[e];
        })
        .reverse()
        .reduce(function (i, o) {
          var a = {};
          o.filter(function (f) {
            for (var c, g = Object.keys(f), m = 0; m < g.length; m += 1) {
              var v = g[m],
                S = v.toLowerCase();
              t.indexOf(S) === -1 ||
                (c === 'rel' && f[c].toLowerCase() === 'canonical') ||
                (S === 'rel' && f[S].toLowerCase() === 'stylesheet') ||
                (c = S),
                t.indexOf(v) === -1 ||
                  (v !== 'innerHTML' && v !== 'cssText' && v !== 'itemprop') ||
                  (c = v);
            }
            if (!c || !f[c]) return !1;
            var h = f[c].toLowerCase();
            return (
              n[c] || (n[c] = {}),
              a[c] || (a[c] = {}),
              !n[c][h] && ((a[c][h] = !0), !0)
            );
          })
            .reverse()
            .forEach(function (f) {
              return i.push(f);
            });
          for (var s = Object.keys(a), u = 0; u < s.length; u += 1) {
            var l = s[u],
              d = we({}, n[l], a[l]);
            n[l] = d;
          }
          return i;
        }, [])
        .reverse();
    },
    dP = function (e, t) {
      if (Array.isArray(e) && e.length) {
        for (var r = 0; r < e.length; r += 1) if (e[r][t]) return !0;
      }
      return !1;
    },
    D1 = function (e) {
      return Array.isArray(e) ? e.join('') : e;
    },
    Kl = function (e, t) {
      return Array.isArray(e)
        ? e.reduce(
            function (r, n) {
              return (
                (function (i, o) {
                  for (var a = Object.keys(i), s = 0; s < a.length; s += 1)
                    if (o[a[s]] && o[a[s]].includes(i[a[s]])) return !0;
                  return !1;
                })(n, t)
                  ? r.priority.push(n)
                  : r.default.push(n),
                r
              );
            },
            { priority: [], default: [] }
          )
        : { default: e };
    },
    Vg = function (e, t) {
      var r;
      return we({}, e, (((r = {})[t] = void 0), r));
    },
    pP = [V.NOSCRIPT, V.SCRIPT, V.STYLE],
    ql = function (e, t) {
      return (
        t === void 0 && (t = !0),
        t === !1
          ? String(e)
          : String(e)
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#x27;')
      );
    },
    Wg = function (e) {
      return Object.keys(e).reduce(function (t, r) {
        var n = e[r] !== void 0 ? r + '="' + e[r] + '"' : '' + r;
        return t ? t + ' ' + n : n;
      }, '');
    },
    Kg = function (e, t) {
      return (
        t === void 0 && (t = {}),
        Object.keys(e).reduce(function (r, n) {
          return (r[Vs[n] || n] = e[n]), r;
        }, t)
      );
    },
    as = function (e, t) {
      return t.map(function (r, n) {
        var i,
          o = (((i = { key: n })['data-rh'] = !0), i);
        return (
          Object.keys(r).forEach(function (a) {
            var s = Vs[a] || a;
            s === 'innerHTML' || s === 'cssText'
              ? (o.dangerouslySetInnerHTML = {
                  __html: r.innerHTML || r.cssText,
                })
              : (o[s] = r[a]);
          }),
          Pt.createElement(e, o)
        );
      });
    },
    _t = function (e, t, r) {
      switch (e) {
        case V.TITLE:
          return {
            toComponent: function () {
              return (
                (i = t.titleAttributes),
                ((o = { key: (n = t.title) })['data-rh'] = !0),
                (a = Kg(i, o)),
                [Pt.createElement(V.TITLE, a, n)]
              );
              var n, i, o, a;
            },
            toString: function () {
              return (function (n, i, o, a) {
                var s = Wg(o),
                  u = D1(i);
                return s
                  ? '<' +
                      n +
                      ' data-rh="true" ' +
                      s +
                      '>' +
                      ql(u, a) +
                      '</' +
                      n +
                      '>'
                  : '<' + n + ' data-rh="true">' + ql(u, a) + '</' + n + '>';
              })(e, t.title, t.titleAttributes, r);
            },
          };
        case 'bodyAttributes':
        case 'htmlAttributes':
          return {
            toComponent: function () {
              return Kg(t);
            },
            toString: function () {
              return Wg(t);
            },
          };
        default:
          return {
            toComponent: function () {
              return as(e, t);
            },
            toString: function () {
              return (function (n, i, o) {
                return i.reduce(function (a, s) {
                  var u = Object.keys(s)
                      .filter(function (f) {
                        return !(f === 'innerHTML' || f === 'cssText');
                      })
                      .reduce(function (f, c) {
                        var g =
                          s[c] === void 0 ? c : c + '="' + ql(s[c], o) + '"';
                        return f ? f + ' ' + g : g;
                      }, ''),
                    l = s.innerHTML || s.cssText || '',
                    d = pP.indexOf(n) === -1;
                  return (
                    a +
                    '<' +
                    n +
                    ' data-rh="true" ' +
                    u +
                    (d ? '/>' : '>' + l + '</' + n + '>')
                  );
                }, '');
              })(e, t, r);
            },
          };
      }
    },
    bf = function (e) {
      var t = e.baseTag,
        r = e.bodyAttributes,
        n = e.encode,
        i = e.htmlAttributes,
        o = e.noscriptTags,
        a = e.styleTags,
        s = e.title,
        u = s === void 0 ? '' : s,
        l = e.titleAttributes,
        d = e.linkTags,
        f = e.metaTags,
        c = e.scriptTags,
        g = {
          toComponent: function () {},
          toString: function () {
            return '';
          },
        };
      if (e.prioritizeSeoTags) {
        var m = (function (v) {
          var S = v.linkTags,
            h = v.scriptTags,
            p = v.encode,
            y = Kl(v.metaTags, sP),
            _ = Kl(S, oP),
            x = Kl(h, aP);
          return {
            priorityMethods: {
              toComponent: function () {
                return [].concat(
                  as(V.META, y.priority),
                  as(V.LINK, _.priority),
                  as(V.SCRIPT, x.priority)
                );
              },
              toString: function () {
                return (
                  _t(V.META, y.priority, p) +
                  ' ' +
                  _t(V.LINK, _.priority, p) +
                  ' ' +
                  _t(V.SCRIPT, x.priority, p)
                );
              },
            },
            metaTags: y.default,
            linkTags: _.default,
            scriptTags: x.default,
          };
        })(e);
        (g = m.priorityMethods),
          (d = m.linkTags),
          (f = m.metaTags),
          (c = m.scriptTags);
      }
      return {
        priority: g,
        base: _t(V.BASE, t, n),
        bodyAttributes: _t('bodyAttributes', r, n),
        htmlAttributes: _t('htmlAttributes', i, n),
        link: _t(V.LINK, d, n),
        meta: _t(V.META, f, n),
        noscript: _t(V.NOSCRIPT, o, n),
        script: _t(V.SCRIPT, c, n),
        style: _t(V.STYLE, a, n),
        title: _t(V.TITLE, { title: u, titleAttributes: l }, n),
      };
    },
    Da = [],
    Ef = function (e, t) {
      var r = this;
      t === void 0 && (t = typeof document < 'u'),
        (this.instances = []),
        (this.value = {
          setHelmet: function (n) {
            r.context.helmet = n;
          },
          helmetInstances: {
            get: function () {
              return r.canUseDOM ? Da : r.instances;
            },
            add: function (n) {
              (r.canUseDOM ? Da : r.instances).push(n);
            },
            remove: function (n) {
              var i = (r.canUseDOM ? Da : r.instances).indexOf(n);
              (r.canUseDOM ? Da : r.instances).splice(i, 1);
            },
          },
        }),
        (this.context = e),
        (this.canUseDOM = t),
        t ||
          (e.helmet = bf({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: '',
            titleAttributes: {},
          }));
    },
    M1 = Pt.createContext({}),
    hP = q.exports.shape({
      setHelmet: q.exports.func,
      helmetInstances: q.exports.shape({
        get: q.exports.func,
        add: q.exports.func,
        remove: q.exports.func,
      }),
    }),
    gP = typeof document < 'u',
    di = (function (e) {
      function t(r) {
        var n;
        return (
          ((n = e.call(this, r) || this).helmetData = new Ef(
            n.props.context,
            t.canUseDOM
          )),
          n
        );
      }
      return (
        up(t, e),
        (t.prototype.render = function () {
          return w(M1.Provider, {
            value: this.helmetData.value,
            children: this.props.children,
          });
        }),
        t
      );
    })(O.exports.Component);
  (di.canUseDOM = gP),
    (di.propTypes = {
      context: q.exports.shape({ helmet: q.exports.shape() }),
      children: q.exports.node.isRequired,
    }),
    (di.defaultProps = { context: {} }),
    (di.displayName = 'HelmetProvider');
  var Yn = function (e, t) {
      var r,
        n = document.head || document.querySelector(V.HEAD),
        i = n.querySelectorAll(e + '[data-rh]'),
        o = [].slice.call(i),
        a = [];
      return (
        t &&
          t.length &&
          t.forEach(function (s) {
            var u = document.createElement(e);
            for (var l in s)
              Object.prototype.hasOwnProperty.call(s, l) &&
                (l === 'innerHTML'
                  ? (u.innerHTML = s.innerHTML)
                  : l === 'cssText'
                  ? u.styleSheet
                    ? (u.styleSheet.cssText = s.cssText)
                    : u.appendChild(document.createTextNode(s.cssText))
                  : u.setAttribute(l, s[l] === void 0 ? '' : s[l]));
            u.setAttribute('data-rh', 'true'),
              o.some(function (d, f) {
                return (r = f), u.isEqualNode(d);
              })
                ? o.splice(r, 1)
                : a.push(u);
          }),
        o.forEach(function (s) {
          return s.parentNode.removeChild(s);
        }),
        a.forEach(function (s) {
          return n.appendChild(s);
        }),
        { oldTags: o, newTags: a }
      );
    },
    Yl = function (e, t) {
      var r = document.getElementsByTagName(e)[0];
      if (r) {
        for (
          var n = r.getAttribute('data-rh'),
            i = n ? n.split(',') : [],
            o = [].concat(i),
            a = Object.keys(t),
            s = 0;
          s < a.length;
          s += 1
        ) {
          var u = a[s],
            l = t[u] || '';
          r.getAttribute(u) !== l && r.setAttribute(u, l),
            i.indexOf(u) === -1 && i.push(u);
          var d = o.indexOf(u);
          d !== -1 && o.splice(d, 1);
        }
        for (var f = o.length - 1; f >= 0; f -= 1) r.removeAttribute(o[f]);
        i.length === o.length
          ? r.removeAttribute('data-rh')
          : r.getAttribute('data-rh') !== a.join(',') &&
            r.setAttribute('data-rh', a.join(','));
      }
    },
    qg = function (e, t) {
      var r = e.baseTag,
        n = e.htmlAttributes,
        i = e.linkTags,
        o = e.metaTags,
        a = e.noscriptTags,
        s = e.onChangeClientState,
        u = e.scriptTags,
        l = e.styleTags,
        d = e.title,
        f = e.titleAttributes;
      Yl(V.BODY, e.bodyAttributes),
        Yl(V.HTML, n),
        (function (v, S) {
          v !== void 0 && document.title !== v && (document.title = D1(v)),
            Yl(V.TITLE, S);
        })(d, f);
      var c = {
          baseTag: Yn(V.BASE, r),
          linkTags: Yn(V.LINK, i),
          metaTags: Yn(V.META, o),
          noscriptTags: Yn(V.NOSCRIPT, a),
          scriptTags: Yn(V.SCRIPT, u),
          styleTags: Yn(V.STYLE, l),
        },
        g = {},
        m = {};
      Object.keys(c).forEach(function (v) {
        var S = c[v],
          h = S.newTags,
          p = S.oldTags;
        h.length && (g[v] = h), p.length && (m[v] = c[v].oldTags);
      }),
        t && t(),
        s(e, g, m);
    },
    uo = null,
    Ws = (function (e) {
      function t() {
        for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
          o[a] = arguments[a];
        return (
          ((n = e.call.apply(e, [this].concat(o)) || this).rendered = !1), n
        );
      }
      up(t, e);
      var r = t.prototype;
      return (
        (r.shouldComponentUpdate = function (n) {
          return !iP(n, this.props);
        }),
        (r.componentDidUpdate = function () {
          this.emitChange();
        }),
        (r.componentWillUnmount = function () {
          this.props.context.helmetInstances.remove(this), this.emitChange();
        }),
        (r.emitChange = function () {
          var n,
            i,
            o = this.props.context,
            a = o.setHelmet,
            s = null,
            u =
              ((n = o.helmetInstances.get().map(function (l) {
                var d = we({}, l.props);
                return delete d.context, d;
              })),
              {
                baseTag: fP(['href'], n),
                bodyAttributes: Wl('bodyAttributes', n),
                defer: _i(n, 'defer'),
                encode: _i(n, 'encodeSpecialCharacters'),
                htmlAttributes: Wl('htmlAttributes', n),
                linkTags: so(V.LINK, ['rel', 'href'], n),
                metaTags: so(
                  V.META,
                  ['name', 'charset', 'http-equiv', 'property', 'itemprop'],
                  n
                ),
                noscriptTags: so(V.NOSCRIPT, ['innerHTML'], n),
                onChangeClientState: cP(n),
                scriptTags: so(V.SCRIPT, ['src', 'innerHTML'], n),
                styleTags: so(V.STYLE, ['cssText'], n),
                title: lP(n),
                titleAttributes: Wl('titleAttributes', n),
                prioritizeSeoTags: dP(n, 'prioritizeSeoTags'),
              });
          di.canUseDOM
            ? ((i = u),
              uo && cancelAnimationFrame(uo),
              i.defer
                ? (uo = requestAnimationFrame(function () {
                    qg(i, function () {
                      uo = null;
                    });
                  }))
                : (qg(i), (uo = null)))
            : bf && (s = bf(u)),
            a(s);
        }),
        (r.init = function () {
          this.rendered ||
            ((this.rendered = !0),
            this.props.context.helmetInstances.add(this),
            this.emitChange());
        }),
        (r.render = function () {
          return this.init(), null;
        }),
        t
      );
    })(O.exports.Component);
  (Ws.propTypes = { context: hP.isRequired }),
    (Ws.displayName = 'HelmetDispatcher');
  var mP = ['children'],
    vP = ['children'],
    ss = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      up(t, e);
      var r = t.prototype;
      return (
        (r.shouldComponentUpdate = function (n) {
          return !rP(Vg(this.props, 'helmetData'), Vg(n, 'helmetData'));
        }),
        (r.mapNestedChildrenToProps = function (n, i) {
          if (!i) return null;
          switch (n.type) {
            case V.SCRIPT:
            case V.NOSCRIPT:
              return { innerHTML: i };
            case V.STYLE:
              return { cssText: i };
            default:
              throw new Error(
                '<' +
                  n.type +
                  ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
              );
          }
        }),
        (r.flattenArrayTypeChildren = function (n) {
          var i,
            o = n.child,
            a = n.arrayTypeChildren;
          return we(
            {},
            a,
            (((i = {})[o.type] = [].concat(a[o.type] || [], [
              we(
                {},
                n.newChildProps,
                this.mapNestedChildrenToProps(o, n.nestedChildren)
              ),
            ])),
            i)
          );
        }),
        (r.mapObjectTypeChildren = function (n) {
          var i,
            o,
            a = n.child,
            s = n.newProps,
            u = n.newChildProps,
            l = n.nestedChildren;
          switch (a.type) {
            case V.TITLE:
              return we(
                {},
                s,
                (((i = {})[a.type] = l), (i.titleAttributes = we({}, u)), i)
              );
            case V.BODY:
              return we({}, s, { bodyAttributes: we({}, u) });
            case V.HTML:
              return we({}, s, { htmlAttributes: we({}, u) });
            default:
              return we({}, s, (((o = {})[a.type] = we({}, u)), o));
          }
        }),
        (r.mapArrayTypeChildrenToProps = function (n, i) {
          var o = we({}, i);
          return (
            Object.keys(n).forEach(function (a) {
              var s;
              o = we({}, o, (((s = {})[a] = n[a]), s));
            }),
            o
          );
        }),
        (r.warnOnInvalidChildren = function (n, i) {
          return (
            zg(
              Hg.some(function (o) {
                return n.type === o;
              }),
              typeof n.type == 'function'
                ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
                : 'Only elements types ' +
                    Hg.join(', ') +
                    ' are allowed. Helmet does not support rendering <' +
                    n.type +
                    '> elements. Refer to our API for more information.'
            ),
            zg(
              !i ||
                typeof i == 'string' ||
                (Array.isArray(i) &&
                  !i.some(function (o) {
                    return typeof o != 'string';
                  })),
              'Helmet expects a string as a child of <' +
                n.type +
                '>. Did you forget to wrap your children in braces? ( <' +
                n.type +
                '>{``}</' +
                n.type +
                '> ) Refer to our API for more information.'
            ),
            !0
          );
        }),
        (r.mapChildrenToProps = function (n, i) {
          var o = this,
            a = {};
          return (
            Pt.Children.forEach(n, function (s) {
              if (s && s.props) {
                var u = s.props,
                  l = u.children,
                  d = Bg(u, mP),
                  f = Object.keys(d).reduce(function (g, m) {
                    return (g[uP[m] || m] = d[m]), g;
                  }, {}),
                  c = s.type;
                switch (
                  (typeof c == 'symbol'
                    ? (c = c.toString())
                    : o.warnOnInvalidChildren(s, l),
                  c)
                ) {
                  case V.FRAGMENT:
                    i = o.mapChildrenToProps(l, i);
                    break;
                  case V.LINK:
                  case V.META:
                  case V.NOSCRIPT:
                  case V.SCRIPT:
                  case V.STYLE:
                    a = o.flattenArrayTypeChildren({
                      child: s,
                      arrayTypeChildren: a,
                      newChildProps: f,
                      nestedChildren: l,
                    });
                    break;
                  default:
                    i = o.mapObjectTypeChildren({
                      child: s,
                      newProps: i,
                      newChildProps: f,
                      nestedChildren: l,
                    });
                }
              }
            }),
            this.mapArrayTypeChildrenToProps(a, i)
          );
        }),
        (r.render = function () {
          var n = this.props,
            i = n.children,
            o = Bg(n, vP),
            a = we({}, o),
            s = o.helmetData;
          return (
            i && (a = this.mapChildrenToProps(i, a)),
            !s || s instanceof Ef || (s = new Ef(s.context, s.instances)),
            s
              ? Pt.createElement(
                  Ws,
                  we({}, a, { context: s.value, helmetData: void 0 })
                )
              : w(M1.Consumer, {
                  children: function (u) {
                    return Pt.createElement(Ws, we({}, a, { context: u }));
                  },
                })
          );
        }),
        t
      );
    })(O.exports.Component);
  (ss.propTypes = {
    base: q.exports.object,
    bodyAttributes: q.exports.object,
    children: q.exports.oneOfType([
      q.exports.arrayOf(q.exports.node),
      q.exports.node,
    ]),
    defaultTitle: q.exports.string,
    defer: q.exports.bool,
    encodeSpecialCharacters: q.exports.bool,
    htmlAttributes: q.exports.object,
    link: q.exports.arrayOf(q.exports.object),
    meta: q.exports.arrayOf(q.exports.object),
    noscript: q.exports.arrayOf(q.exports.object),
    onChangeClientState: q.exports.func,
    script: q.exports.arrayOf(q.exports.object),
    style: q.exports.arrayOf(q.exports.object),
    title: q.exports.string,
    titleAttributes: q.exports.object,
    titleTemplate: q.exports.string,
    prioritizeSeoTags: q.exports.bool,
    helmetData: q.exports.object,
  }),
    (ss.defaultProps = {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    (ss.displayName = 'Helmet');
  const ua = () => tp(),
    Gt = Wb;
  function Vt(e) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    throw Error(
      '[Immer] minified error nr: ' +
        e +
        (r.length
          ? ' ' +
            r
              .map(function (i) {
                return "'" + i + "'";
              })
              .join(',')
          : '') +
        '. Find the full error at: https://bit.ly/3cXEKWf'
    );
  }
  function on(e) {
    return !!e && !!e[le];
  }
  function Er(e) {
    var t;
    return (
      !!e &&
      ((function (r) {
        if (!r || typeof r != 'object') return !1;
        var n = Object.getPrototypeOf(r);
        if (n === null) return !0;
        var i = Object.hasOwnProperty.call(n, 'constructor') && n.constructor;
        return (
          i === Object ||
          (typeof i == 'function' && Function.toString.call(i) === CP)
        );
      })(e) ||
        Array.isArray(e) ||
        !!e[em] ||
        !!(!((t = e.constructor) === null || t === void 0) && t[em]) ||
        lp(e) ||
        cp(e))
    );
  }
  function Tn(e, t, r) {
    r === void 0 && (r = !1),
      Ui(e) === 0
        ? (r ? Object.keys : xi)(e).forEach(function (n) {
            (r && typeof n == 'symbol') || t(n, e[n], e);
          })
        : e.forEach(function (n, i) {
            return t(i, n, e);
          });
  }
  function Ui(e) {
    var t = e[le];
    return t
      ? t.i > 3
        ? t.i - 4
        : t.i
      : Array.isArray(e)
      ? 1
      : lp(e)
      ? 2
      : cp(e)
      ? 3
      : 0;
  }
  function Si(e, t) {
    return Ui(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function yP(e, t) {
    return Ui(e) === 2 ? e.get(t) : e[t];
  }
  function U1(e, t, r) {
    var n = Ui(e);
    n === 2 ? e.set(t, r) : n === 3 ? (e.delete(t), e.add(r)) : (e[t] = r);
  }
  function z1(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
  }
  function lp(e) {
    return EP && e instanceof Map;
  }
  function cp(e) {
    return OP && e instanceof Set;
  }
  function mn(e) {
    return e.o || e.t;
  }
  function fp(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = H1(e);
    delete t[le];
    for (var r = xi(t), n = 0; n < r.length; n++) {
      var i = r[n],
        o = t[i];
      o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
        (o.get || o.set) &&
          (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: e[i],
          });
    }
    return Object.create(Object.getPrototypeOf(e), t);
  }
  function dp(e, t) {
    return (
      t === void 0 && (t = !1),
      pp(e) ||
        on(e) ||
        !Er(e) ||
        (Ui(e) > 1 && (e.set = e.add = e.clear = e.delete = wP),
        Object.freeze(e),
        t &&
          Tn(
            e,
            function (r, n) {
              return dp(n, !0);
            },
            !0
          )),
      e
    );
  }
  function wP() {
    Vt(2);
  }
  function pp(e) {
    return e == null || typeof e != 'object' || Object.isFrozen(e);
  }
  function ar(e) {
    var t = $f[e];
    return t || Vt(18, e), t;
  }
  function _P(e, t) {
    $f[e] || ($f[e] = t);
  }
  function Of() {
    return Xo;
  }
  function Gl(e, t) {
    t && (ar('Patches'), (e.u = []), (e.s = []), (e.v = t));
  }
  function Ks(e) {
    Cf(e), e.p.forEach(SP), (e.p = null);
  }
  function Cf(e) {
    e === Xo && (Xo = e.l);
  }
  function Yg(e) {
    return (Xo = { p: [], l: Xo, h: e, m: !0, _: 0 });
  }
  function SP(e) {
    var t = e[le];
    t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
  }
  function Xl(e, t) {
    t._ = t.p.length;
    var r = t.p[0],
      n = e !== void 0 && e !== r;
    return (
      t.h.g || ar('ES5').S(t, e, n),
      n
        ? (r[le].P && (Ks(t), Vt(4)),
          Er(e) && ((e = qs(t, e)), t.l || Ys(t, e)),
          t.u && ar('Patches').M(r[le].t, e, t.u, t.s))
        : (e = qs(t, r, [])),
      Ks(t),
      t.u && t.v(t.u, t.s),
      e !== B1 ? e : void 0
    );
  }
  function qs(e, t, r) {
    if (pp(t)) return t;
    var n = t[le];
    if (!n)
      return (
        Tn(
          t,
          function (o, a) {
            return Gg(e, n, t, o, a, r);
          },
          !0
        ),
        t
      );
    if (n.A !== e) return t;
    if (!n.P) return Ys(e, n.t, !0), n.t;
    if (!n.I) {
      (n.I = !0), n.A._--;
      var i = n.i === 4 || n.i === 5 ? (n.o = fp(n.k)) : n.o;
      Tn(n.i === 3 ? new Set(i) : i, function (o, a) {
        return Gg(e, n, i, o, a, r);
      }),
        Ys(e, i, !1),
        r && e.u && ar('Patches').R(n, r, e.u, e.s);
    }
    return n.o;
  }
  function Gg(e, t, r, n, i, o) {
    if (on(i)) {
      var a = qs(
        e,
        i,
        o && t && t.i !== 3 && !Si(t.D, n) ? o.concat(n) : void 0
      );
      if ((U1(r, n, a), !on(a))) return;
      e.m = !1;
    }
    if (Er(i) && !pp(i)) {
      if (!e.h.F && e._ < 1) return;
      qs(e, i), (t && t.A.l) || Ys(e, i);
    }
  }
  function Ys(e, t, r) {
    r === void 0 && (r = !1), e.h.F && e.m && dp(t, r);
  }
  function Ql(e, t) {
    var r = e[le];
    return (r ? mn(r) : e)[t];
  }
  function Xg(e, t) {
    if (t in e)
      for (var r = Object.getPrototypeOf(e); r; ) {
        var n = Object.getOwnPropertyDescriptor(r, t);
        if (n) return n;
        r = Object.getPrototypeOf(r);
      }
  }
  function jr(e) {
    e.P || ((e.P = !0), e.l && jr(e.l));
  }
  function Zl(e) {
    e.o || (e.o = fp(e.t));
  }
  function Pf(e, t, r) {
    var n = lp(t)
      ? ar('MapSet').N(t, r)
      : cp(t)
      ? ar('MapSet').T(t, r)
      : e.g
      ? (function (i, o) {
          var a = Array.isArray(i),
            s = {
              i: a ? 1 : 0,
              A: o ? o.A : Of(),
              P: !1,
              I: !1,
              D: {},
              l: o,
              t: i,
              k: null,
              o: null,
              j: null,
              C: !1,
            },
            u = s,
            l = Qo;
          a && ((u = [s]), (l = _o));
          var d = Proxy.revocable(u, l),
            f = d.revoke,
            c = d.proxy;
          return (s.k = c), (s.j = f), c;
        })(t, r)
      : ar('ES5').J(t, r);
    return (r ? r.A : Of()).p.push(n), n;
  }
  function xP(e) {
    return (
      on(e) || Vt(22, e),
      (function t(r) {
        if (!Er(r)) return r;
        var n,
          i = r[le],
          o = Ui(r);
        if (i) {
          if (!i.P && (i.i < 4 || !ar('ES5').K(i))) return i.t;
          (i.I = !0), (n = Qg(r, o)), (i.I = !1);
        } else n = Qg(r, o);
        return (
          Tn(n, function (a, s) {
            (i && yP(i.t, a) === s) || U1(n, a, t(s));
          }),
          o === 3 ? new Set(n) : n
        );
      })(e)
    );
  }
  function Qg(e, t) {
    switch (t) {
      case 2:
        return new Map(e);
      case 3:
        return Array.from(e);
    }
    return fp(e);
  }
  function bP() {
    function e(o, a) {
      var s = i[o];
      return (
        s
          ? (s.enumerable = a)
          : (i[o] = s =
              {
                configurable: !0,
                enumerable: a,
                get: function () {
                  var u = this[le];
                  return Qo.get(u, o);
                },
                set: function (u) {
                  var l = this[le];
                  Qo.set(l, o, u);
                },
              }),
        s
      );
    }
    function t(o) {
      for (var a = o.length - 1; a >= 0; a--) {
        var s = o[a][le];
        if (!s.P)
          switch (s.i) {
            case 5:
              n(s) && jr(s);
              break;
            case 4:
              r(s) && jr(s);
          }
      }
    }
    function r(o) {
      for (var a = o.t, s = o.k, u = xi(s), l = u.length - 1; l >= 0; l--) {
        var d = u[l];
        if (d !== le) {
          var f = a[d];
          if (f === void 0 && !Si(a, d)) return !0;
          var c = s[d],
            g = c && c[le];
          if (g ? g.t !== f : !z1(c, f)) return !0;
        }
      }
      var m = !!a[le];
      return u.length !== xi(a).length + (m ? 0 : 1);
    }
    function n(o) {
      var a = o.k;
      if (a.length !== o.t.length) return !0;
      var s = Object.getOwnPropertyDescriptor(a, a.length - 1);
      if (s && !s.get) return !0;
      for (var u = 0; u < a.length; u++) if (!a.hasOwnProperty(u)) return !0;
      return !1;
    }
    var i = {};
    _P('ES5', {
      J: function (o, a) {
        var s = Array.isArray(o),
          u = (function (d, f) {
            if (d) {
              for (var c = Array(f.length), g = 0; g < f.length; g++)
                Object.defineProperty(c, '' + g, e(g, !0));
              return c;
            }
            var m = H1(f);
            delete m[le];
            for (var v = xi(m), S = 0; S < v.length; S++) {
              var h = v[S];
              m[h] = e(h, d || !!m[h].enumerable);
            }
            return Object.create(Object.getPrototypeOf(f), m);
          })(s, o),
          l = {
            i: s ? 5 : 4,
            A: a ? a.A : Of(),
            P: !1,
            I: !1,
            D: {},
            l: a,
            t: o,
            k: u,
            o: null,
            O: !1,
            C: !1,
          };
        return Object.defineProperty(u, le, { value: l, writable: !0 }), u;
      },
      S: function (o, a, s) {
        s
          ? on(a) && a[le].A === o && t(o.p)
          : (o.u &&
              (function u(l) {
                if (l && typeof l == 'object') {
                  var d = l[le];
                  if (d) {
                    var f = d.t,
                      c = d.k,
                      g = d.D,
                      m = d.i;
                    if (m === 4)
                      Tn(c, function (y) {
                        y !== le &&
                          (f[y] !== void 0 || Si(f, y)
                            ? g[y] || u(c[y])
                            : ((g[y] = !0), jr(d)));
                      }),
                        Tn(f, function (y) {
                          c[y] !== void 0 || Si(c, y) || ((g[y] = !1), jr(d));
                        });
                    else if (m === 5) {
                      if (
                        (n(d) && (jr(d), (g.length = !0)), c.length < f.length)
                      )
                        for (var v = c.length; v < f.length; v++) g[v] = !1;
                      else for (var S = f.length; S < c.length; S++) g[S] = !0;
                      for (
                        var h = Math.min(c.length, f.length), p = 0;
                        p < h;
                        p++
                      )
                        c.hasOwnProperty(p) || (g[p] = !0),
                          g[p] === void 0 && u(c[p]);
                    }
                  }
                }
              })(o.p[0]),
            t(o.p));
      },
      K: function (o) {
        return o.i === 4 ? r(o) : n(o);
      },
    });
  }
  var Zg,
    Xo,
    hp = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
    EP = typeof Map < 'u',
    OP = typeof Set < 'u',
    Jg =
      typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
    B1 = hp
      ? Symbol.for('immer-nothing')
      : (((Zg = {})['immer-nothing'] = !0), Zg),
    em = hp ? Symbol.for('immer-draftable') : '__$immer_draftable',
    le = hp ? Symbol.for('immer-state') : '__$immer_state',
    CP = '' + Object.prototype.constructor,
    xi =
      typeof Reflect < 'u' && Reflect.ownKeys
        ? Reflect.ownKeys
        : Object.getOwnPropertySymbols !== void 0
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : Object.getOwnPropertyNames,
    H1 =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        var t = {};
        return (
          xi(e).forEach(function (r) {
            t[r] = Object.getOwnPropertyDescriptor(e, r);
          }),
          t
        );
      },
    $f = {},
    Qo = {
      get: function (e, t) {
        if (t === le) return e;
        var r = mn(e);
        if (!Si(r, t))
          return (function (i, o, a) {
            var s,
              u = Xg(o, a);
            return u
              ? 'value' in u
                ? u.value
                : (s = u.get) === null || s === void 0
                ? void 0
                : s.call(i.k)
              : void 0;
          })(e, r, t);
        var n = r[t];
        return e.I || !Er(n)
          ? n
          : n === Ql(e.t, t)
          ? (Zl(e), (e.o[t] = Pf(e.A.h, n, e)))
          : n;
      },
      has: function (e, t) {
        return t in mn(e);
      },
      ownKeys: function (e) {
        return Reflect.ownKeys(mn(e));
      },
      set: function (e, t, r) {
        var n = Xg(mn(e), t);
        if (n != null && n.set) return n.set.call(e.k, r), !0;
        if (!e.P) {
          var i = Ql(mn(e), t),
            o = i == null ? void 0 : i[le];
          if (o && o.t === r) return (e.o[t] = r), (e.D[t] = !1), !0;
          if (z1(r, i) && (r !== void 0 || Si(e.t, t))) return !0;
          Zl(e), jr(e);
        }
        return (
          (e.o[t] === r &&
            typeof r != 'number' &&
            (r !== void 0 || t in e.o)) ||
          ((e.o[t] = r), (e.D[t] = !0), !0)
        );
      },
      deleteProperty: function (e, t) {
        return (
          Ql(e.t, t) !== void 0 || t in e.t
            ? ((e.D[t] = !1), Zl(e), jr(e))
            : delete e.D[t],
          e.o && delete e.o[t],
          !0
        );
      },
      getOwnPropertyDescriptor: function (e, t) {
        var r = mn(e),
          n = Reflect.getOwnPropertyDescriptor(r, t);
        return (
          n && {
            writable: !0,
            configurable: e.i !== 1 || t !== 'length',
            enumerable: n.enumerable,
            value: r[t],
          }
        );
      },
      defineProperty: function () {
        Vt(11);
      },
      getPrototypeOf: function (e) {
        return Object.getPrototypeOf(e.t);
      },
      setPrototypeOf: function () {
        Vt(12);
      },
    },
    _o = {};
  Tn(Qo, function (e, t) {
    _o[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
  }),
    (_o.deleteProperty = function (e, t) {
      return _o.set.call(this, e, t, void 0);
    }),
    (_o.set = function (e, t, r) {
      return Qo.set.call(this, e[0], t, r, e[0]);
    });
  var PP = (function () {
      function e(r) {
        var n = this;
        (this.g = Jg),
          (this.F = !0),
          (this.produce = function (i, o, a) {
            if (typeof i == 'function' && typeof o != 'function') {
              var s = o;
              o = i;
              var u = n;
              return function (v) {
                var S = this;
                v === void 0 && (v = s);
                for (
                  var h = arguments.length, p = Array(h > 1 ? h - 1 : 0), y = 1;
                  y < h;
                  y++
                )
                  p[y - 1] = arguments[y];
                return u.produce(v, function (_) {
                  var x;
                  return (x = o).call.apply(x, [S, _].concat(p));
                });
              };
            }
            var l;
            if (
              (typeof o != 'function' && Vt(6),
              a !== void 0 && typeof a != 'function' && Vt(7),
              Er(i))
            ) {
              var d = Yg(n),
                f = Pf(n, i, void 0),
                c = !0;
              try {
                (l = o(f)), (c = !1);
              } finally {
                c ? Ks(d) : Cf(d);
              }
              return typeof Promise < 'u' && l instanceof Promise
                ? l.then(
                    function (v) {
                      return Gl(d, a), Xl(v, d);
                    },
                    function (v) {
                      throw (Ks(d), v);
                    }
                  )
                : (Gl(d, a), Xl(l, d));
            }
            if (!i || typeof i != 'object') {
              if (
                ((l = o(i)) === void 0 && (l = i),
                l === B1 && (l = void 0),
                n.F && dp(l, !0),
                a)
              ) {
                var g = [],
                  m = [];
                ar('Patches').M(i, l, g, m), a(g, m);
              }
              return l;
            }
            Vt(21, i);
          }),
          (this.produceWithPatches = function (i, o) {
            if (typeof i == 'function')
              return function (l) {
                for (
                  var d = arguments.length, f = Array(d > 1 ? d - 1 : 0), c = 1;
                  c < d;
                  c++
                )
                  f[c - 1] = arguments[c];
                return n.produceWithPatches(l, function (g) {
                  return i.apply(void 0, [g].concat(f));
                });
              };
            var a,
              s,
              u = n.produce(i, o, function (l, d) {
                (a = l), (s = d);
              });
            return typeof Promise < 'u' && u instanceof Promise
              ? u.then(function (l) {
                  return [l, a, s];
                })
              : [u, a, s];
          }),
          typeof (r == null ? void 0 : r.useProxies) == 'boolean' &&
            this.setUseProxies(r.useProxies),
          typeof (r == null ? void 0 : r.autoFreeze) == 'boolean' &&
            this.setAutoFreeze(r.autoFreeze);
      }
      var t = e.prototype;
      return (
        (t.createDraft = function (r) {
          Er(r) || Vt(8), on(r) && (r = xP(r));
          var n = Yg(this),
            i = Pf(this, r, void 0);
          return (i[le].C = !0), Cf(n), i;
        }),
        (t.finishDraft = function (r, n) {
          var i = r && r[le],
            o = i.A;
          return Gl(o, n), Xl(void 0, o);
        }),
        (t.setAutoFreeze = function (r) {
          this.F = r;
        }),
        (t.setUseProxies = function (r) {
          r && !Jg && Vt(20), (this.g = r);
        }),
        (t.applyPatches = function (r, n) {
          var i;
          for (i = n.length - 1; i >= 0; i--) {
            var o = n[i];
            if (o.path.length === 0 && o.op === 'replace') {
              r = o.value;
              break;
            }
          }
          i > -1 && (n = n.slice(i + 1));
          var a = ar('Patches').$;
          return on(r)
            ? a(r, n)
            : this.produce(r, function (s) {
                return a(s, n);
              });
        }),
        e
      );
    })(),
    gt = new PP(),
    V1 = gt.produce;
  gt.produceWithPatches.bind(gt);
  gt.setAutoFreeze.bind(gt);
  gt.setUseProxies.bind(gt);
  gt.applyPatches.bind(gt);
  gt.createDraft.bind(gt);
  gt.finishDraft.bind(gt);
  function $P(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function tm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function rm(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? tm(Object(r), !0).forEach(function (n) {
            $P(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function We(e) {
    return (
      'Minified Redux error #' +
      e +
      '; visit https://redux.js.org/Errors?code=' +
      e +
      ' for the full message or use the non-minified dev environment for full errors. '
    );
  }
  var nm = (function () {
      return (
        (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
      );
    })(),
    Jl = function () {
      return Math.random().toString(36).substring(7).split('').join('.');
    },
    Gs = {
      INIT: '@@redux/INIT' + Jl(),
      REPLACE: '@@redux/REPLACE' + Jl(),
      PROBE_UNKNOWN_ACTION: function () {
        return '@@redux/PROBE_UNKNOWN_ACTION' + Jl();
      },
    };
  function kP(e) {
    if (typeof e != 'object' || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
      t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
  }
  function W1(e, t, r) {
    var n;
    if (
      (typeof t == 'function' && typeof r == 'function') ||
      (typeof r == 'function' && typeof arguments[3] == 'function')
    )
      throw new Error(We(0));
    if (
      (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
      typeof r < 'u')
    ) {
      if (typeof r != 'function') throw new Error(We(1));
      return r(W1)(e, t);
    }
    if (typeof e != 'function') throw new Error(We(2));
    var i = e,
      o = t,
      a = [],
      s = a,
      u = !1;
    function l() {
      s === a && (s = a.slice());
    }
    function d() {
      if (u) throw new Error(We(3));
      return o;
    }
    function f(v) {
      if (typeof v != 'function') throw new Error(We(4));
      if (u) throw new Error(We(5));
      var S = !0;
      return (
        l(),
        s.push(v),
        function () {
          if (!!S) {
            if (u) throw new Error(We(6));
            (S = !1), l();
            var p = s.indexOf(v);
            s.splice(p, 1), (a = null);
          }
        }
      );
    }
    function c(v) {
      if (!kP(v)) throw new Error(We(7));
      if (typeof v.type > 'u') throw new Error(We(8));
      if (u) throw new Error(We(9));
      try {
        (u = !0), (o = i(o, v));
      } finally {
        u = !1;
      }
      for (var S = (a = s), h = 0; h < S.length; h++) {
        var p = S[h];
        p();
      }
      return v;
    }
    function g(v) {
      if (typeof v != 'function') throw new Error(We(10));
      (i = v), c({ type: Gs.REPLACE });
    }
    function m() {
      var v,
        S = f;
      return (
        (v = {
          subscribe: function (p) {
            if (typeof p != 'object' || p === null) throw new Error(We(11));
            function y() {
              p.next && p.next(d());
            }
            y();
            var _ = S(y);
            return { unsubscribe: _ };
          },
        }),
        (v[nm] = function () {
          return this;
        }),
        v
      );
    }
    return (
      c({ type: Gs.INIT }),
      (n = { dispatch: c, subscribe: f, getState: d, replaceReducer: g }),
      (n[nm] = m),
      n
    );
  }
  function TP(e) {
    Object.keys(e).forEach(function (t) {
      var r = e[t],
        n = r(void 0, { type: Gs.INIT });
      if (typeof n > 'u') throw new Error(We(12));
      if (typeof r(void 0, { type: Gs.PROBE_UNKNOWN_ACTION() }) > 'u')
        throw new Error(We(13));
    });
  }
  function K1(e) {
    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
      var i = t[n];
      typeof e[i] == 'function' && (r[i] = e[i]);
    }
    var o = Object.keys(r),
      a;
    try {
      TP(r);
    } catch (s) {
      a = s;
    }
    return function (u, l) {
      if ((u === void 0 && (u = {}), a)) throw a;
      for (var d = !1, f = {}, c = 0; c < o.length; c++) {
        var g = o[c],
          m = r[g],
          v = u[g],
          S = m(v, l);
        if (typeof S > 'u') throw (l && l.type, new Error(We(14)));
        (f[g] = S), (d = d || S !== v);
      }
      return (d = d || o.length !== Object.keys(u).length), d ? f : u;
    };
  }
  function Xs() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return t.length === 0
      ? function (n) {
          return n;
        }
      : t.length === 1
      ? t[0]
      : t.reduce(function (n, i) {
          return function () {
            return n(i.apply(void 0, arguments));
          };
        });
  }
  function AP() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return function (n) {
      return function () {
        var i = n.apply(void 0, arguments),
          o = function () {
            throw new Error(We(15));
          },
          a = {
            getState: i.getState,
            dispatch: function () {
              return o.apply(void 0, arguments);
            },
          },
          s = t.map(function (u) {
            return u(a);
          });
        return (
          (o = Xs.apply(void 0, s)(i.dispatch)),
          rm(rm({}, i), {}, { dispatch: o })
        );
      };
    };
  }
  var Qs = 'NOT_FOUND';
  function NP(e) {
    var t;
    return {
      get: function (n) {
        return t && e(t.key, n) ? t.value : Qs;
      },
      put: function (n, i) {
        t = { key: n, value: i };
      },
      getEntries: function () {
        return t ? [t] : [];
      },
      clear: function () {
        t = void 0;
      },
    };
  }
  function FP(e, t) {
    var r = [];
    function n(s) {
      var u = r.findIndex(function (d) {
        return t(s, d.key);
      });
      if (u > -1) {
        var l = r[u];
        return u > 0 && (r.splice(u, 1), r.unshift(l)), l.value;
      }
      return Qs;
    }
    function i(s, u) {
      n(s) === Qs && (r.unshift({ key: s, value: u }), r.length > e && r.pop());
    }
    function o() {
      return r;
    }
    function a() {
      r = [];
    }
    return { get: n, put: i, getEntries: o, clear: a };
  }
  var RP = function (t, r) {
    return t === r;
  };
  function LP(e) {
    return function (r, n) {
      if (r === null || n === null || r.length !== n.length) return !1;
      for (var i = r.length, o = 0; o < i; o++) if (!e(r[o], n[o])) return !1;
      return !0;
    };
  }
  function jP(e, t) {
    var r = typeof t == 'object' ? t : { equalityCheck: t },
      n = r.equalityCheck,
      i = n === void 0 ? RP : n,
      o = r.maxSize,
      a = o === void 0 ? 1 : o,
      s = r.resultEqualityCheck,
      u = LP(i),
      l = a === 1 ? NP(u) : FP(a, u);
    function d() {
      var f = l.get(arguments);
      if (f === Qs) {
        if (((f = e.apply(null, arguments)), s)) {
          var c = l.getEntries(),
            g = c.find(function (m) {
              return s(m.value, f);
            });
          g && (f = g.value);
        }
        l.put(arguments, f);
      }
      return f;
    }
    return (
      (d.clearCache = function () {
        return l.clear();
      }),
      d
    );
  }
  function IP(e) {
    var t = Array.isArray(e[0]) ? e[0] : e;
    if (
      !t.every(function (n) {
        return typeof n == 'function';
      })
    ) {
      var r = t
        .map(function (n) {
          return typeof n == 'function'
            ? 'function ' + (n.name || 'unnamed') + '()'
            : typeof n;
        })
        .join(', ');
      throw new Error(
        'createSelector expects all input-selectors to be functions, but received the following types: [' +
          r +
          ']'
      );
    }
    return t;
  }
  function DP(e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    var i = function () {
      for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
        s[u] = arguments[u];
      var l = 0,
        d,
        f = { memoizeOptions: void 0 },
        c = s.pop();
      if (
        (typeof c == 'object' && ((f = c), (c = s.pop())),
        typeof c != 'function')
      )
        throw new Error(
          'createSelector expects an output function after the inputs, but received: [' +
            typeof c +
            ']'
        );
      var g = f,
        m = g.memoizeOptions,
        v = m === void 0 ? r : m,
        S = Array.isArray(v) ? v : [v],
        h = IP(s),
        p = e.apply(
          void 0,
          [
            function () {
              return l++, c.apply(null, arguments);
            },
          ].concat(S)
        ),
        y = e(function () {
          for (var x = [], E = h.length, $ = 0; $ < E; $++)
            x.push(h[$].apply(null, arguments));
          return (d = p.apply(null, x)), d;
        });
      return (
        Object.assign(y, {
          resultFunc: c,
          memoizedResultFunc: p,
          dependencies: h,
          lastResult: function () {
            return d;
          },
          recomputations: function () {
            return l;
          },
          resetRecomputations: function () {
            return (l = 0);
          },
        }),
        y
      );
    };
    return i;
  }
  var Cr = DP(jP);
  function q1(e) {
    var t = function (n) {
      var i = n.dispatch,
        o = n.getState;
      return function (a) {
        return function (s) {
          return typeof s == 'function' ? s(i, o, e) : a(s);
        };
      };
    };
    return t;
  }
  var Y1 = q1();
  Y1.withExtraArgument = q1;
  const im = Y1;
  var MP =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, r) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (n, i) {
                  n.__proto__ = i;
                }) ||
              function (n, i) {
                for (var o in i)
                  Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
              }),
            e(t, r)
          );
        };
        return function (t, r) {
          if (typeof r != 'function' && r !== null)
            throw new TypeError(
              'Class extends value ' +
                String(r) +
                ' is not a constructor or null'
            );
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype =
            r === null
              ? Object.create(r)
              : ((n.prototype = r.prototype), new n());
        };
      })(),
    UP =
      (globalThis && globalThis.__generator) ||
      function (e, t) {
        var r = {
            label: 0,
            sent: function () {
              if (o[0] & 1) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          n,
          i,
          o,
          a;
        return (
          (a = { next: s(0), throw: s(1), return: s(2) }),
          typeof Symbol == 'function' &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(l) {
          return function (d) {
            return u([l, d]);
          };
        }
        function u(l) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; r; )
            try {
              if (
                ((n = 1),
                i &&
                  (o =
                    l[0] & 2
                      ? i.return
                      : l[0]
                      ? i.throw || ((o = i.return) && o.call(i), 0)
                      : i.next) &&
                  !(o = o.call(i, l[1])).done)
              )
                return o;
              switch (((i = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
                case 0:
                case 1:
                  o = l;
                  break;
                case 4:
                  return r.label++, { value: l[1], done: !1 };
                case 5:
                  r.label++, (i = l[1]), (l = [0]);
                  continue;
                case 7:
                  (l = r.ops.pop()), r.trys.pop();
                  continue;
                default:
                  if (
                    ((o = r.trys),
                    !(o = o.length > 0 && o[o.length - 1]) &&
                      (l[0] === 6 || l[0] === 2))
                  ) {
                    r = 0;
                    continue;
                  }
                  if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                    r.label = l[1];
                    break;
                  }
                  if (l[0] === 6 && r.label < o[1]) {
                    (r.label = o[1]), (o = l);
                    break;
                  }
                  if (o && r.label < o[2]) {
                    (r.label = o[2]), r.ops.push(l);
                    break;
                  }
                  o[2] && r.ops.pop(), r.trys.pop();
                  continue;
              }
              l = t.call(e, r);
            } catch (d) {
              (l = [6, d]), (i = 0);
            } finally {
              n = o = 0;
            }
          if (l[0] & 5) throw l[1];
          return { value: l[0] ? l[1] : void 0, done: !0 };
        }
      },
    Zs =
      (globalThis && globalThis.__spreadArray) ||
      function (e, t) {
        for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
          e[i] = t[r];
        return e;
      },
    zP = Object.defineProperty,
    BP = Object.defineProperties,
    HP = Object.getOwnPropertyDescriptors,
    om = Object.getOwnPropertySymbols,
    VP = Object.prototype.hasOwnProperty,
    WP = Object.prototype.propertyIsEnumerable,
    am = function (e, t, r) {
      return t in e
        ? zP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (e[t] = r);
    },
    Qr = function (e, t) {
      for (var r in t || (t = {})) VP.call(t, r) && am(e, r, t[r]);
      if (om)
        for (var n = 0, i = om(t); n < i.length; n++) {
          var r = i[n];
          WP.call(t, r) && am(e, r, t[r]);
        }
      return e;
    },
    ec = function (e, t) {
      return BP(e, HP(t));
    },
    KP = function (e, t, r) {
      return new Promise(function (n, i) {
        var o = function (u) {
            try {
              s(r.next(u));
            } catch (l) {
              i(l);
            }
          },
          a = function (u) {
            try {
              s(r.throw(u));
            } catch (l) {
              i(l);
            }
          },
          s = function (u) {
            return u.done ? n(u.value) : Promise.resolve(u.value).then(o, a);
          };
        s((r = r.apply(e, t)).next());
      });
    },
    qP =
      typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : function () {
            if (arguments.length !== 0)
              return typeof arguments[0] == 'object'
                ? Xs
                : Xs.apply(null, arguments);
          };
  function YP(e) {
    if (typeof e != 'object' || e === null) return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null) return !0;
    for (var r = t; Object.getPrototypeOf(r) !== null; )
      r = Object.getPrototypeOf(r);
    return t === r;
  }
  var GP = (function (e) {
    MP(t, e);
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      var i = e.apply(this, r) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return e.prototype.concat.apply(this, r);
      }),
      (t.prototype.prepend = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0])
          ? new (t.bind.apply(t, Zs([void 0], r[0].concat(this))))()
          : new (t.bind.apply(t, Zs([void 0], r.concat(this))))();
      }),
      t
    );
  })(Array);
  function kf(e) {
    return Er(e) ? V1(e, function () {}) : e;
  }
  function XP(e) {
    return typeof e == 'boolean';
  }
  function QP() {
    return function (t) {
      return ZP(t);
    };
  }
  function ZP(e) {
    e === void 0 && (e = {});
    var t = e.thunk,
      r = t === void 0 ? !0 : t;
    e.immutableCheck, e.serializableCheck;
    var n = new GP();
    return (
      r && (XP(r) ? n.push(im) : n.push(im.withExtraArgument(r.extraArgument))),
      n
    );
  }
  var JP = !0;
  function e2(e) {
    var t = QP(),
      r = e || {},
      n = r.reducer,
      i = n === void 0 ? void 0 : n,
      o = r.middleware,
      a = o === void 0 ? t() : o,
      s = r.devTools,
      u = s === void 0 ? !0 : s,
      l = r.preloadedState,
      d = l === void 0 ? void 0 : l,
      f = r.enhancers,
      c = f === void 0 ? void 0 : f,
      g;
    if (typeof i == 'function') g = i;
    else if (YP(i)) g = K1(i);
    else
      throw new Error(
        '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
      );
    var m = a;
    typeof m == 'function' && (m = m(t));
    var v = AP.apply(void 0, m),
      S = Xs;
    u && (S = qP(Qr({ trace: !JP }, typeof u == 'object' && u)));
    var h = [v];
    Array.isArray(c) ? (h = Zs([v], c)) : typeof c == 'function' && (h = c(h));
    var p = S.apply(void 0, h);
    return W1(g, d, p);
  }
  function Zr(e, t) {
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
      if (t) {
        var o = t.apply(void 0, n);
        if (!o) throw new Error('prepareAction did not return an object');
        return Qr(
          Qr({ type: e, payload: o.payload }, 'meta' in o && { meta: o.meta }),
          'error' in o && { error: o.error }
        );
      }
      return { type: e, payload: n[0] };
    }
    return (
      (r.toString = function () {
        return '' + e;
      }),
      (r.type = e),
      (r.match = function (n) {
        return n.type === e;
      }),
      r
    );
  }
  function G1(e) {
    var t = {},
      r = [],
      n,
      i = {
        addCase: function (o, a) {
          var s = typeof o == 'string' ? o : o.type;
          if (s in t)
            throw new Error(
              'addCase cannot be called with two reducers for the same action type'
            );
          return (t[s] = a), i;
        },
        addMatcher: function (o, a) {
          return r.push({ matcher: o, reducer: a }), i;
        },
        addDefaultCase: function (o) {
          return (n = o), i;
        },
      };
    return e(i), [t, r, n];
  }
  function t2(e) {
    return typeof e == 'function';
  }
  function r2(e, t, r, n) {
    r === void 0 && (r = []);
    var i = typeof t == 'function' ? G1(t) : [t, r, n],
      o = i[0],
      a = i[1],
      s = i[2],
      u;
    if (t2(e))
      u = function () {
        return kf(e());
      };
    else {
      var l = kf(e);
      u = function () {
        return l;
      };
    }
    function d(f, c) {
      f === void 0 && (f = u());
      var g = Zs(
        [o[c.type]],
        a
          .filter(function (m) {
            var v = m.matcher;
            return v(c);
          })
          .map(function (m) {
            var v = m.reducer;
            return v;
          })
      );
      return (
        g.filter(function (m) {
          return !!m;
        }).length === 0 && (g = [s]),
        g.reduce(function (m, v) {
          if (v)
            if (on(m)) {
              var S = m,
                h = v(S, c);
              return h === void 0 ? m : h;
            } else {
              if (Er(m))
                return V1(m, function (p) {
                  return v(p, c);
                });
              var h = v(m, c);
              if (h === void 0) {
                if (m === null) return m;
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined'
                );
              }
              return h;
            }
          return m;
        }, f)
      );
    }
    return (d.getInitialState = u), d;
  }
  function n2(e, t) {
    return e + '/' + t;
  }
  function Gu(e) {
    var t = e.name;
    if (!t) throw new Error('`name` is a required option for createSlice');
    typeof process < 'u';
    var r =
        typeof e.initialState == 'function'
          ? e.initialState
          : kf(e.initialState),
      n = e.reducers || {},
      i = Object.keys(n),
      o = {},
      a = {},
      s = {};
    i.forEach(function (d) {
      var f = n[d],
        c = n2(t, d),
        g,
        m;
      'reducer' in f ? ((g = f.reducer), (m = f.prepare)) : (g = f),
        (o[d] = g),
        (a[c] = g),
        (s[d] = m ? Zr(c, m) : Zr(c));
    });
    function u() {
      var d =
          typeof e.extraReducers == 'function'
            ? G1(e.extraReducers)
            : [e.extraReducers],
        f = d[0],
        c = f === void 0 ? {} : f,
        g = d[1],
        m = g === void 0 ? [] : g,
        v = d[2],
        S = v === void 0 ? void 0 : v,
        h = Qr(Qr({}, c), a);
      return r2(r, h, m, S);
    }
    var l;
    return {
      name: t,
      reducer: function (d, f) {
        return l || (l = u()), l(d, f);
      },
      actions: s,
      caseReducers: o,
      getInitialState: function () {
        return l || (l = u()), l.getInitialState();
      },
    };
  }
  var i2 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
    o2 = function (e) {
      e === void 0 && (e = 21);
      for (var t = '', r = e; r--; ) t += i2[(Math.random() * 64) | 0];
      return t;
    },
    a2 = ['name', 'message', 'stack', 'code'],
    tc = (function () {
      function e(t, r) {
        (this.payload = t), (this.meta = r);
      }
      return e;
    })(),
    sm = (function () {
      function e(t, r) {
        (this.payload = t), (this.meta = r);
      }
      return e;
    })(),
    s2 = function (e) {
      if (typeof e == 'object' && e !== null) {
        for (var t = {}, r = 0, n = a2; r < n.length; r++) {
          var i = n[r];
          typeof e[i] == 'string' && (t[i] = e[i]);
        }
        return t;
      }
      return { message: String(e) };
    };
  function Rn(e, t, r) {
    var n = Zr(e + '/fulfilled', function (u, l, d, f) {
        return {
          payload: u,
          meta: ec(Qr({}, f || {}), {
            arg: d,
            requestId: l,
            requestStatus: 'fulfilled',
          }),
        };
      }),
      i = Zr(e + '/pending', function (u, l, d) {
        return {
          payload: void 0,
          meta: ec(Qr({}, d || {}), {
            arg: l,
            requestId: u,
            requestStatus: 'pending',
          }),
        };
      }),
      o = Zr(e + '/rejected', function (u, l, d, f, c) {
        return {
          payload: f,
          error: ((r && r.serializeError) || s2)(u || 'Rejected'),
          meta: ec(Qr({}, c || {}), {
            arg: d,
            requestId: l,
            rejectedWithValue: !!f,
            requestStatus: 'rejected',
            aborted: (u == null ? void 0 : u.name) === 'AbortError',
            condition: (u == null ? void 0 : u.name) === 'ConditionError',
          }),
        };
      }),
      a =
        typeof AbortController < 'u'
          ? AbortController
          : (function () {
              function u() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (u.prototype.abort = function () {}), u;
            })();
    function s(u) {
      return function (l, d, f) {
        var c = r != null && r.idGenerator ? r.idGenerator(u) : o2(),
          g = new a(),
          m,
          v = new Promise(function (y, _) {
            return g.signal.addEventListener('abort', function () {
              return _({ name: 'AbortError', message: m || 'Aborted' });
            });
          }),
          S = !1;
        function h(y) {
          S && ((m = y), g.abort());
        }
        var p = (function () {
          return KP(this, null, function () {
            var y, _, x, E, $, k;
            return UP(this, function (D) {
              switch (D.label) {
                case 0:
                  return (
                    D.trys.push([0, 4, , 5]),
                    (E =
                      (y = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : y.call(r, u, { getState: d, extra: f })),
                    l2(E) ? [4, E] : [3, 2]
                  );
                case 1:
                  (E = D.sent()), (D.label = 2);
                case 2:
                  if (E === !1)
                    throw {
                      name: 'ConditionError',
                      message:
                        'Aborted due to condition callback returning false.',
                    };
                  return (
                    (S = !0),
                    l(
                      i(
                        c,
                        u,
                        (_ = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : _.call(
                              r,
                              { requestId: c, arg: u },
                              { getState: d, extra: f }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        v,
                        Promise.resolve(
                          t(u, {
                            dispatch: l,
                            getState: d,
                            extra: f,
                            requestId: c,
                            signal: g.signal,
                            rejectWithValue: function (F, z) {
                              return new tc(F, z);
                            },
                            fulfillWithValue: function (F, z) {
                              return new sm(F, z);
                            },
                          })
                        ).then(function (F) {
                          if (F instanceof tc) throw F;
                          return F instanceof sm
                            ? n(F.payload, c, u, F.meta)
                            : n(F, c, u);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (x = D.sent()), [3, 5];
                case 4:
                  return (
                    ($ = D.sent()),
                    (x =
                      $ instanceof tc
                        ? o(null, c, u, $.payload, $.meta)
                        : o($, c, u)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (k =
                      r &&
                      !r.dispatchConditionRejection &&
                      o.match(x) &&
                      x.meta.condition),
                    k || l(x),
                    [2, x]
                  );
              }
            });
          });
        })();
        return Object.assign(p, {
          abort: h,
          requestId: c,
          arg: u,
          unwrap: function () {
            return p.then(u2);
          },
        });
      };
    }
    return Object.assign(s, {
      pending: i,
      rejected: o,
      fulfilled: n,
      typePrefix: e,
    });
  }
  function u2(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload;
  }
  function l2(e) {
    return e !== null && typeof e == 'object' && typeof e.then == 'function';
  }
  var gp = 'listenerMiddleware';
  Zr(gp + '/add');
  Zr(gp + '/removeAll');
  Zr(gp + '/remove');
  bP();
  let Ma;
  const c2 = new Uint8Array(16);
  function X1() {
    if (
      !Ma &&
      ((Ma =
        typeof crypto < 'u' &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !Ma)
    )
      throw new Error(
        'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
      );
    return Ma(c2);
  }
  const Le = [];
  for (let e = 0; e < 256; ++e) Le.push((e + 256).toString(16).slice(1));
  function Q1(e, t = 0) {
    return (
      Le[e[t + 0]] +
      Le[e[t + 1]] +
      Le[e[t + 2]] +
      Le[e[t + 3]] +
      '-' +
      Le[e[t + 4]] +
      Le[e[t + 5]] +
      '-' +
      Le[e[t + 6]] +
      Le[e[t + 7]] +
      '-' +
      Le[e[t + 8]] +
      Le[e[t + 9]] +
      '-' +
      Le[e[t + 10]] +
      Le[e[t + 11]] +
      Le[e[t + 12]] +
      Le[e[t + 13]] +
      Le[e[t + 14]] +
      Le[e[t + 15]]
    ).toLowerCase();
  }
  let um,
    rc,
    nc = 0,
    ic = 0;
  function f2(e, t, r) {
    let n = (t && r) || 0;
    const i = t || new Array(16);
    e = e || {};
    let o = e.node || um,
      a = e.clockseq !== void 0 ? e.clockseq : rc;
    if (o == null || a == null) {
      const c = e.random || (e.rng || X1)();
      o == null && (o = um = [c[0] | 1, c[1], c[2], c[3], c[4], c[5]]),
        a == null && (a = rc = ((c[6] << 8) | c[7]) & 16383);
    }
    let s = e.msecs !== void 0 ? e.msecs : Date.now(),
      u = e.nsecs !== void 0 ? e.nsecs : ic + 1;
    const l = s - nc + (u - ic) / 1e4;
    if (
      (l < 0 && e.clockseq === void 0 && (a = (a + 1) & 16383),
      (l < 0 || s > nc) && e.nsecs === void 0 && (u = 0),
      u >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    (nc = s), (ic = u), (rc = a), (s += 122192928e5);
    const d = ((s & 268435455) * 1e4 + u) % 4294967296;
    (i[n++] = (d >>> 24) & 255),
      (i[n++] = (d >>> 16) & 255),
      (i[n++] = (d >>> 8) & 255),
      (i[n++] = d & 255);
    const f = ((s / 4294967296) * 1e4) & 268435455;
    (i[n++] = (f >>> 8) & 255),
      (i[n++] = f & 255),
      (i[n++] = ((f >>> 24) & 15) | 16),
      (i[n++] = (f >>> 16) & 255),
      (i[n++] = (a >>> 8) | 128),
      (i[n++] = a & 255);
    for (let c = 0; c < 6; ++c) i[n + c] = o[c];
    return t || Q1(i);
  }
  const d2 =
      typeof crypto < 'u' &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
    lm = { randomUUID: d2 };
  function p2(e, t, r) {
    if (lm.randomUUID && !t && !e) return lm.randomUUID();
    e = e || {};
    const n = e.random || (e.rng || X1)();
    if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t)) {
      r = r || 0;
      for (let i = 0; i < 16; ++i) t[r + i] = n[i];
      return t;
    }
    return Q1(n);
  }
  const h2 = { errorList: [] },
    Z1 = Gu({
      name: 'error',
      initialState: h2,
      reducers: {
        removeError(e, t) {
          e.errorList = e.errorList.filter(r => r.id !== t.payload);
        },
        addError(e, t) {
          const r = p2();
          e.errorList = [...e.errorList, { text: t.payload, id: r }];
        },
      },
    }),
    g2 = Z1.reducer,
    { removeError: m2, addError: zi } = Z1.actions,
    v2 = '_error_1gliv_25',
    y2 = { error: v2 };
  class de extends O.exports.Component {
    constructor(r) {
      super(r);
      P(this, 'message', 'Sorry, there was an error');
      this.state = { hasError: !1 };
    }
    static getDerivedStateFromError(r) {
      return { hasError: !0, error: r };
    }
    componentDidCatch(r, n) {
      console.error('Uncaught error:', r, n);
    }
    render() {
      return this.state.hasError
        ? w('div', { className: y2.error, children: this.message })
        : this.props.children;
    }
  }
  const w2 = '_error_container_12v0d_25',
    _2 = '_error_12v0d_25',
    S2 = '_error_text_12v0d_43',
    x2 = '_error_button_12v0d_54',
    us = { error_container: w2, error: _2, error_text: S2, error_button: x2 },
    b2 = '/assets/close.2ed867f4.svg',
    E2 = O.exports.memo(({ text: e, id: t, closeHandler: r }) =>
      L('div', {
        className: us.error,
        children: [
          w('p', { className: us.error_text, children: e }),
          w('img', {
            src: b2,
            className: us.error_button,
            onClick: () => {
              r(t);
            },
          }),
        ],
      })
    ),
    O2 = Cr(
      e => e.error,
      e => e.errorList
    ),
    la = e => {
      const t = tp();
      return O.exports.useCallback((...r) => t(e(...r)), [t, e]);
    },
    C2 = () => {
      const e = Gt(O2),
        t = la(r => m2(r));
      return w(de, {
        children: w('div', {
          className: us.error_container,
          children: e.map(r =>
            w(E2, { text: r.text, id: r.id, closeHandler: t }, r.id)
          ),
        }),
      });
    },
    P2 = O.exports.createContext(null),
    J1 = ({ to: e }) => (
      O.exports.useContext(P2), w(uO, { to: e, replace: !0 })
    ),
    $2 = '_forum_unags_25',
    k2 = '_block_button_unags_35',
    cm = { forum: $2, block_button: k2 };
  var ew = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var n = [], i = 0; i < arguments.length; i++) {
          var o = arguments[i];
          if (!!o) {
            var a = typeof o;
            if (a === 'string' || a === 'number') n.push(o);
            else if (Array.isArray(o)) {
              if (o.length) {
                var s = r.apply(null, o);
                s && n.push(s);
              }
            } else if (a === 'object') {
              if (
                o.toString !== Object.prototype.toString &&
                !o.toString.toString().includes('[native code]')
              ) {
                n.push(o.toString());
                continue;
              }
              for (var u in o) t.call(o, u) && o[u] && n.push(u);
            }
          }
        }
        return n.join(' ');
      }
      e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
  })(ew);
  const mp = ew.exports,
    T2 = '_button_abqaj_25',
    A2 = '_regular_abqaj_72',
    fm = { button: T2, regular: A2 },
    fe = ({
      children: e,
      type: t = 'button',
      regular: r = !1,
      disabled: n = !1,
      className: i = '',
      onClick: o,
    }) =>
      w(de, {
        children: w('button', {
          className: mp(fm.button, { [fm.regular]: r }, i),
          onClick: o,
          type: t,
          disabled: n,
          children: e,
        }),
      }),
    Rt = () => {
      const e = ip();
      return O.exports.useCallback(
        r => {
          if (typeof r == 'string') return e(r);
          e(r);
        },
        [e]
      );
    },
    N2 = () => {
      const { t: e } = xe(),
        t = Rt(),
        r = () => t(-1),
        n = () => t('/loadinggame');
      return w(de, {
        children: L('div', {
          className: cm.forum,
          children: [
            L('div', {
              className: cm.block_button,
              children: [
                w(fe, { regular: !0, onClick: r, children: e('goBack') }),
                w(fe, { regular: !0, onClick: n, children: e('play') }),
              ],
            }),
            w(op, {}),
          ],
        }),
      });
    },
    F2 = '_root_projz_25',
    R2 = { root: F2 },
    cn = ({ children: e, className: t }) =>
      w(de, { children: w('div', { className: mp(R2.root, t), children: e }) }),
    L2 = '_wrapped_1jyc9_25',
    j2 = '_inner_1jyc9_35',
    dm = { wrapped: L2, inner: j2 },
    I2 = ({ children: e }) => {
      const { t } = xe();
      return w('div', {
        className: dm.wrapped,
        children: w(cn, {
          children: L('div', {
            className: dm.inner,
            children: [e, w(v1, { to: '/', children: t('goHome') })],
          }),
        }),
      });
    },
    pm = ({ title: e, description: t }) =>
      w(de, {
        children: w(I2, {
          children: L('div', {
            children: [w('h1', { children: e }), w('h2', { children: t })],
          }),
        }),
      }),
    D2 = '_wrapper_1s3x8_25',
    M2 = '_button_wrapper_1s3x8_30',
    U2 = '_button_item_1s3x8_36',
    z2 = '_background_overlay_1s3x8_40',
    B2 = '_header_1s3x8_55',
    H2 = '_block_1s3x8_60',
    V2 = '_window_1s3x8_66',
    lo = {
      wrapper: D2,
      button_wrapper: M2,
      button_item: U2,
      background_overlay: z2,
      header: B2,
      block: H2,
      window: V2,
    },
    W2 = '_leader_line_arxow_1',
    K2 = '_leader_line_item_arxow_11',
    Gn = { leader_line: W2, leader_line_item: K2 },
    q2 = ({ idx: e, team: t }) => {
      const { name: r, score: n, players: i } = t;
      return w(de, {
        children: L('div', {
          className: Gn.leader_line,
          children: [
            w('span', { className: Gn.leader_line_item, children: r }),
            w('span', { className: Gn.leader_line_item, children: e + 1 }),
            w('span', { className: Gn.leader_line_item, children: n }),
            L('span', {
              className: Gn.leader_line_item,
              children: [i[0], ', '],
            }),
            w('span', { className: Gn.leader_line_item, children: i[1] }),
          ],
        }),
      });
    },
    Y2 = ({ title: e }) => {
      const { t } = xe();
      return w(ss, {
        children: L('title', { children: [e, ' - ', t('title.app')] }),
      });
    },
    G2 = [
      { name: 'Team 1', score: 12345, players: ['player 1', 'player 2'] },
      { name: 'Team 3', score: 1e3, players: ['player 6', 'player 10'] },
      { name: 'Team 5', score: 933, players: ['player 33', 'player 24'] },
      { name: 'Team 6', score: 600, players: ['player 122', 'player 442'] },
    ],
    X2 = () => {
      const { t: e } = xe(),
        t = Rt(),
        r = () => t(-1),
        n = () => t('/loadinggame');
      return L('div', {
        children: [
          w(Y2, { title: e('title.leaderboard') }),
          L('div', {
            className: lo.block,
            children: [
              L('div', {
                className: lo.button_wrapper,
                children: [
                  w(fe, { regular: !0, onClick: r, children: e('goBack') }),
                  w(fe, { regular: !0, onClick: n, children: e('play') }),
                ],
              }),
              w(cn, {
                className: lo.window,
                children: L('div', {
                  className: lo.background_overlay,
                  children: [
                    w('h1', { className: lo.header, children: e('topTeams') }),
                    G2.map((i, o) => w(q2, { team: i, idx: o }, o)),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
    },
    Q2 = '_game_loading_root_1k5b3_25',
    Z2 = '_game_loading_title_1k5b3_35',
    J2 = '_bar_container_1k5b3_44',
    e$ = '_percent_1k5b3_49',
    Ua = {
      game_loading_root: Q2,
      game_loading_title: Z2,
      bar_container: J2,
      percent: e$,
    },
    t$ = '_ispinner_ouak2_1',
    r$ = '_ispinner_blade_ouak2_7',
    n$ = '_iSpinnerBlade_ouak2_1',
    It = { ispinner: t$, ispinner_blade: r$, iSpinnerBlade: n$ },
    i$ = () =>
      L('div', {
        className: It.container,
        children: [
          w('div', { className: It.ispinner_blade }),
          L('div', {
            className: It.ispinner,
            children: [
              w('div', { className: It.ispinner_blade }),
              w('div', { className: It.ispinner_blade }),
              w('div', { className: It.ispinner_blade }),
              w('div', { className: It.ispinner_blade }),
              w('div', { className: It.ispinner_blade }),
              w('div', { className: It.ispinner_blade }),
              w('div', { className: It.ispinner_blade }),
              w('div', { className: It.ispinner_blade }),
            ],
          }),
        ],
      }),
    o$ = '_container_sddae_25',
    a$ = '_filler_sddae_32',
    hm = { container: o$, filler: a$ },
    s$ = ({ bgcolor: e, completed: t }) =>
      w('div', {
        className: hm.container,
        children: w('div', {
          className: hm.filler,
          style: { backgroundColor: `${e}`, width: `${t}%` },
        }),
      }),
    u$ = () => {
      const [e, t] = O.exports.useState(0),
        r = e <= 100;
      return (
        O.exports.useEffect(() => {
          let n = 0;
          return (
            r &&
              (n = setInterval(() => {
                t(i => i + 5);
              }, 500)),
            () => {
              clearInterval(n);
            }
          );
        }, [r]),
        [e]
      );
    },
    Xu = ({ className: e }) => {
      const { t } = xe();
      return L('h1', {
        className: e,
        children: [t('HuggyWuggy'), w('br', {}), t('&'), ' ', t('KissyMissy')],
      });
    },
    l$ = '#FFCC00',
    c$ = () => {
      const e = Rt(),
        [t] = u$();
      return (
        t === 100 && e('/game'),
        w(de, {
          children: L('div', {
            className: Ua.game_loading_root,
            children: [
              w(Xu, { className: Ua.game_loading_title }),
              w(i$, {}),
              w('div', {
                className: Ua.bar_container,
                children: w(s$, { completed: t, bgcolor: l$ }),
              }),
              L('div', { className: Ua.percent, children: [t, ' %'] }),
            ],
          }),
        })
      );
    },
    f$ = () => w(cn, { children: w(op, {}) });
  var gm = Array.isArray,
    mm = Object.keys,
    d$ = Object.prototype.hasOwnProperty,
    p$ = typeof Element < 'u';
  function Tf(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == 'object' && typeof t == 'object') {
      var r = gm(e),
        n = gm(t),
        i,
        o,
        a;
      if (r && n) {
        if (((o = e.length), o != t.length)) return !1;
        for (i = o; i-- !== 0; ) if (!Tf(e[i], t[i])) return !1;
        return !0;
      }
      if (r != n) return !1;
      var s = e instanceof Date,
        u = t instanceof Date;
      if (s != u) return !1;
      if (s && u) return e.getTime() == t.getTime();
      var l = e instanceof RegExp,
        d = t instanceof RegExp;
      if (l != d) return !1;
      if (l && d) return e.toString() == t.toString();
      var f = mm(e);
      if (((o = f.length), o !== mm(t).length)) return !1;
      for (i = o; i-- !== 0; ) if (!d$.call(t, f[i])) return !1;
      if (p$ && e instanceof Element && t instanceof Element) return e === t;
      for (i = o; i-- !== 0; )
        if (((a = f[i]), !(a === '_owner' && e.$$typeof) && !Tf(e[a], t[a])))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var Fr = function (t, r) {
      try {
        return Tf(t, r);
      } catch (n) {
        if (
          (n.message && n.message.match(/stack|recursion/i)) ||
          n.number === -2146828260
        )
          return (
            console.warn(
              'Warning: react-fast-compare does not handle circular references.',
              n.name,
              n.message
            ),
            !1
          );
        throw n;
      }
    },
    h$ = function (t) {
      return g$(t) && !m$(t);
    };
  function g$(e) {
    return !!e && typeof e == 'object';
  }
  function m$(e) {
    var t = Object.prototype.toString.call(e);
    return t === '[object RegExp]' || t === '[object Date]' || w$(e);
  }
  var v$ = typeof Symbol == 'function' && Symbol.for,
    y$ = v$ ? Symbol.for('react.element') : 60103;
  function w$(e) {
    return e.$$typeof === y$;
  }
  function _$(e) {
    return Array.isArray(e) ? [] : {};
  }
  function Js(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Zo(_$(e), e, t) : e;
  }
  function S$(e, t, r) {
    return e.concat(t).map(function (n) {
      return Js(n, r);
    });
  }
  function x$(e, t, r) {
    var n = {};
    return (
      r.isMergeableObject(e) &&
        Object.keys(e).forEach(function (i) {
          n[i] = Js(e[i], r);
        }),
      Object.keys(t).forEach(function (i) {
        !r.isMergeableObject(t[i]) || !e[i]
          ? (n[i] = Js(t[i], r))
          : (n[i] = Zo(e[i], t[i], r));
      }),
      n
    );
  }
  function Zo(e, t, r) {
    (r = r || {}),
      (r.arrayMerge = r.arrayMerge || S$),
      (r.isMergeableObject = r.isMergeableObject || h$);
    var n = Array.isArray(t),
      i = Array.isArray(e),
      o = n === i;
    return o ? (n ? r.arrayMerge(e, t, r) : x$(e, t, r)) : Js(t, r);
  }
  Zo.all = function (t, r) {
    if (!Array.isArray(t)) throw new Error('first argument should be an array');
    return t.reduce(function (n, i) {
      return Zo(n, i, r);
    }, {});
  };
  var Af = Zo,
    b$ =
      typeof global == 'object' && global && global.Object === Object && global;
  const tw = b$;
  var E$ = typeof self == 'object' && self && self.Object === Object && self,
    O$ = tw || E$ || Function('return this')();
  const lr = O$;
  var C$ = lr.Symbol;
  const an = C$;
  var rw = Object.prototype,
    P$ = rw.hasOwnProperty,
    $$ = rw.toString,
    co = an ? an.toStringTag : void 0;
  function k$(e) {
    var t = P$.call(e, co),
      r = e[co];
    try {
      e[co] = void 0;
      var n = !0;
    } catch {}
    var i = $$.call(e);
    return n && (t ? (e[co] = r) : delete e[co]), i;
  }
  var T$ = Object.prototype,
    A$ = T$.toString;
  function N$(e) {
    return A$.call(e);
  }
  var F$ = '[object Null]',
    R$ = '[object Undefined]',
    vm = an ? an.toStringTag : void 0;
  function Ln(e) {
    return e == null
      ? e === void 0
        ? R$
        : F$
      : vm && vm in Object(e)
      ? k$(e)
      : N$(e);
  }
  function nw(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var L$ = nw(Object.getPrototypeOf, Object);
  const vp = L$;
  function jn(e) {
    return e != null && typeof e == 'object';
  }
  var j$ = '[object Object]',
    I$ = Function.prototype,
    D$ = Object.prototype,
    iw = I$.toString,
    M$ = D$.hasOwnProperty,
    U$ = iw.call(Object);
  function ym(e) {
    if (!jn(e) || Ln(e) != j$) return !1;
    var t = vp(e);
    if (t === null) return !0;
    var r = M$.call(t, 'constructor') && t.constructor;
    return typeof r == 'function' && r instanceof r && iw.call(r) == U$;
  }
  function z$() {
    (this.__data__ = []), (this.size = 0);
  }
  function ow(e, t) {
    return e === t || (e !== e && t !== t);
  }
  function Qu(e, t) {
    for (var r = e.length; r--; ) if (ow(e[r][0], t)) return r;
    return -1;
  }
  var B$ = Array.prototype,
    H$ = B$.splice;
  function V$(e) {
    var t = this.__data__,
      r = Qu(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : H$.call(t, r, 1), --this.size, !0;
  }
  function W$(e) {
    var t = this.__data__,
      r = Qu(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function K$(e) {
    return Qu(this.__data__, e) > -1;
  }
  function q$(e, t) {
    var r = this.__data__,
      n = Qu(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  function Pr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Pr.prototype.clear = z$;
  Pr.prototype.delete = V$;
  Pr.prototype.get = W$;
  Pr.prototype.has = K$;
  Pr.prototype.set = q$;
  function Y$() {
    (this.__data__ = new Pr()), (this.size = 0);
  }
  function G$(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  function X$(e) {
    return this.__data__.get(e);
  }
  function Q$(e) {
    return this.__data__.has(e);
  }
  function ca(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var Z$ = '[object AsyncFunction]',
    J$ = '[object Function]',
    ek = '[object GeneratorFunction]',
    tk = '[object Proxy]';
  function aw(e) {
    if (!ca(e)) return !1;
    var t = Ln(e);
    return t == J$ || t == ek || t == Z$ || t == tk;
  }
  var rk = lr['__core-js_shared__'];
  const oc = rk;
  var wm = (function () {
    var e = /[^.]+$/.exec((oc && oc.keys && oc.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
  function nk(e) {
    return !!wm && wm in e;
  }
  var ik = Function.prototype,
    ok = ik.toString;
  function In(e) {
    if (e != null) {
      try {
        return ok.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var ak = /[\\^$.*+?()[\]{}|]/g,
    sk = /^\[object .+?Constructor\]$/,
    uk = Function.prototype,
    lk = Object.prototype,
    ck = uk.toString,
    fk = lk.hasOwnProperty,
    dk = RegExp(
      '^' +
        ck
          .call(fk)
          .replace(ak, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    );
  function pk(e) {
    if (!ca(e) || nk(e)) return !1;
    var t = aw(e) ? dk : sk;
    return t.test(In(e));
  }
  function hk(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Dn(e, t) {
    var r = hk(e, t);
    return pk(r) ? r : void 0;
  }
  var gk = Dn(lr, 'Map');
  const Jo = gk;
  var mk = Dn(Object, 'create');
  const ea = mk;
  function vk() {
    (this.__data__ = ea ? ea(null) : {}), (this.size = 0);
  }
  function yk(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var wk = '__lodash_hash_undefined__',
    _k = Object.prototype,
    Sk = _k.hasOwnProperty;
  function xk(e) {
    var t = this.__data__;
    if (ea) {
      var r = t[e];
      return r === wk ? void 0 : r;
    }
    return Sk.call(t, e) ? t[e] : void 0;
  }
  var bk = Object.prototype,
    Ek = bk.hasOwnProperty;
  function Ok(e) {
    var t = this.__data__;
    return ea ? t[e] !== void 0 : Ek.call(t, e);
  }
  var Ck = '__lodash_hash_undefined__';
  function Pk(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = ea && t === void 0 ? Ck : t),
      this
    );
  }
  function An(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  An.prototype.clear = vk;
  An.prototype.delete = yk;
  An.prototype.get = xk;
  An.prototype.has = Ok;
  An.prototype.set = Pk;
  function $k() {
    (this.size = 0),
      (this.__data__ = {
        hash: new An(),
        map: new (Jo || Pr)(),
        string: new An(),
      });
  }
  function kk(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  function Zu(e, t) {
    var r = e.__data__;
    return kk(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  function Tk(e) {
    var t = Zu(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function Ak(e) {
    return Zu(this, e).get(e);
  }
  function Nk(e) {
    return Zu(this, e).has(e);
  }
  function Fk(e, t) {
    var r = Zu(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  function fn(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  fn.prototype.clear = $k;
  fn.prototype.delete = Tk;
  fn.prototype.get = Ak;
  fn.prototype.has = Nk;
  fn.prototype.set = Fk;
  var Rk = 200;
  function Lk(e, t) {
    var r = this.__data__;
    if (r instanceof Pr) {
      var n = r.__data__;
      if (!Jo || n.length < Rk - 1)
        return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new fn(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  function Bi(e) {
    var t = (this.__data__ = new Pr(e));
    this.size = t.size;
  }
  Bi.prototype.clear = Y$;
  Bi.prototype.delete = G$;
  Bi.prototype.get = X$;
  Bi.prototype.has = Q$;
  Bi.prototype.set = Lk;
  function jk(e, t) {
    for (
      var r = -1, n = e == null ? 0 : e.length;
      ++r < n && t(e[r], r, e) !== !1;

    );
    return e;
  }
  var Ik = (function () {
    try {
      var e = Dn(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })();
  const _m = Ik;
  function sw(e, t, r) {
    t == '__proto__' && _m
      ? _m(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var Dk = Object.prototype,
    Mk = Dk.hasOwnProperty;
  function uw(e, t, r) {
    var n = e[t];
    (!(Mk.call(e, t) && ow(n, r)) || (r === void 0 && !(t in e))) &&
      sw(e, t, r);
  }
  function Ju(e, t, r, n) {
    var i = !r;
    r || (r = {});
    for (var o = -1, a = t.length; ++o < a; ) {
      var s = t[o],
        u = n ? n(r[s], e[s], s, r, e) : void 0;
      u === void 0 && (u = e[s]), i ? sw(r, s, u) : uw(r, s, u);
    }
    return r;
  }
  function Uk(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  var zk = '[object Arguments]';
  function Sm(e) {
    return jn(e) && Ln(e) == zk;
  }
  var lw = Object.prototype,
    Bk = lw.hasOwnProperty,
    Hk = lw.propertyIsEnumerable,
    Vk = Sm(
      (function () {
        return arguments;
      })()
    )
      ? Sm
      : function (e) {
          return jn(e) && Bk.call(e, 'callee') && !Hk.call(e, 'callee');
        };
  const Wk = Vk;
  var Kk = Array.isArray;
  const fa = Kk;
  function qk() {
    return !1;
  }
  var cw = typeof ft == 'object' && ft && !ft.nodeType && ft,
    xm = cw && typeof dt == 'object' && dt && !dt.nodeType && dt,
    Yk = xm && xm.exports === cw,
    bm = Yk ? lr.Buffer : void 0,
    Gk = bm ? bm.isBuffer : void 0,
    Xk = Gk || qk;
  const fw = Xk;
  var Qk = 9007199254740991,
    Zk = /^(?:0|[1-9]\d*)$/;
  function Jk(e, t) {
    var r = typeof e;
    return (
      (t = t == null ? Qk : t),
      !!t &&
        (r == 'number' || (r != 'symbol' && Zk.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var eT = 9007199254740991;
  function dw(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= eT;
  }
  var tT = '[object Arguments]',
    rT = '[object Array]',
    nT = '[object Boolean]',
    iT = '[object Date]',
    oT = '[object Error]',
    aT = '[object Function]',
    sT = '[object Map]',
    uT = '[object Number]',
    lT = '[object Object]',
    cT = '[object RegExp]',
    fT = '[object Set]',
    dT = '[object String]',
    pT = '[object WeakMap]',
    hT = '[object ArrayBuffer]',
    gT = '[object DataView]',
    mT = '[object Float32Array]',
    vT = '[object Float64Array]',
    yT = '[object Int8Array]',
    wT = '[object Int16Array]',
    _T = '[object Int32Array]',
    ST = '[object Uint8Array]',
    xT = '[object Uint8ClampedArray]',
    bT = '[object Uint16Array]',
    ET = '[object Uint32Array]',
    ae = {};
  ae[mT] =
    ae[vT] =
    ae[yT] =
    ae[wT] =
    ae[_T] =
    ae[ST] =
    ae[xT] =
    ae[bT] =
    ae[ET] =
      !0;
  ae[tT] =
    ae[rT] =
    ae[hT] =
    ae[nT] =
    ae[gT] =
    ae[iT] =
    ae[oT] =
    ae[aT] =
    ae[sT] =
    ae[uT] =
    ae[lT] =
    ae[cT] =
    ae[fT] =
    ae[dT] =
    ae[pT] =
      !1;
  function OT(e) {
    return jn(e) && dw(e.length) && !!ae[Ln(e)];
  }
  function yp(e) {
    return function (t) {
      return e(t);
    };
  }
  var pw = typeof ft == 'object' && ft && !ft.nodeType && ft,
    To = pw && typeof dt == 'object' && dt && !dt.nodeType && dt,
    CT = To && To.exports === pw,
    ac = CT && tw.process,
    PT = (function () {
      try {
        var e = To && To.require && To.require('util').types;
        return e || (ac && ac.binding && ac.binding('util'));
      } catch {}
    })();
  const Ni = PT;
  var Em = Ni && Ni.isTypedArray,
    $T = Em ? yp(Em) : OT;
  const kT = $T;
  var TT = Object.prototype,
    AT = TT.hasOwnProperty;
  function hw(e, t) {
    var r = fa(e),
      n = !r && Wk(e),
      i = !r && !n && fw(e),
      o = !r && !n && !i && kT(e),
      a = r || n || i || o,
      s = a ? Uk(e.length, String) : [],
      u = s.length;
    for (var l in e)
      (t || AT.call(e, l)) &&
        !(
          a &&
          (l == 'length' ||
            (i && (l == 'offset' || l == 'parent')) ||
            (o && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
            Jk(l, u))
        ) &&
        s.push(l);
    return s;
  }
  var NT = Object.prototype;
  function wp(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || NT;
    return e === r;
  }
  var FT = nw(Object.keys, Object);
  const RT = FT;
  var LT = Object.prototype,
    jT = LT.hasOwnProperty;
  function IT(e) {
    if (!wp(e)) return RT(e);
    var t = [];
    for (var r in Object(e)) jT.call(e, r) && r != 'constructor' && t.push(r);
    return t;
  }
  function gw(e) {
    return e != null && dw(e.length) && !aw(e);
  }
  function _p(e) {
    return gw(e) ? hw(e) : IT(e);
  }
  function DT(e, t) {
    return e && Ju(t, _p(t), e);
  }
  function MT(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var UT = Object.prototype,
    zT = UT.hasOwnProperty;
  function BT(e) {
    if (!ca(e)) return MT(e);
    var t = wp(e),
      r = [];
    for (var n in e) (n == 'constructor' && (t || !zT.call(e, n))) || r.push(n);
    return r;
  }
  function Sp(e) {
    return gw(e) ? hw(e, !0) : BT(e);
  }
  function HT(e, t) {
    return e && Ju(t, Sp(t), e);
  }
  var mw = typeof ft == 'object' && ft && !ft.nodeType && ft,
    Om = mw && typeof dt == 'object' && dt && !dt.nodeType && dt,
    VT = Om && Om.exports === mw,
    Cm = VT ? lr.Buffer : void 0,
    Pm = Cm ? Cm.allocUnsafe : void 0;
  function WT(e, t) {
    if (t) return e.slice();
    var r = e.length,
      n = Pm ? Pm(r) : new e.constructor(r);
    return e.copy(n), n;
  }
  function vw(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  }
  function KT(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
      var a = e[r];
      t(a, r, e) && (o[i++] = a);
    }
    return o;
  }
  function yw() {
    return [];
  }
  var qT = Object.prototype,
    YT = qT.propertyIsEnumerable,
    $m = Object.getOwnPropertySymbols,
    GT = $m
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              KT($m(e), function (t) {
                return YT.call(e, t);
              }));
        }
      : yw;
  const xp = GT;
  function XT(e, t) {
    return Ju(e, xp(e), t);
  }
  function ww(e, t) {
    for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
    return e;
  }
  var QT = Object.getOwnPropertySymbols,
    ZT = QT
      ? function (e) {
          for (var t = []; e; ) ww(t, xp(e)), (e = vp(e));
          return t;
        }
      : yw;
  const _w = ZT;
  function JT(e, t) {
    return Ju(e, _w(e), t);
  }
  function Sw(e, t, r) {
    var n = t(e);
    return fa(e) ? n : ww(n, r(e));
  }
  function eA(e) {
    return Sw(e, _p, xp);
  }
  function tA(e) {
    return Sw(e, Sp, _w);
  }
  var rA = Dn(lr, 'DataView');
  const Nf = rA;
  var nA = Dn(lr, 'Promise');
  const Ff = nA;
  var iA = Dn(lr, 'Set');
  const Rf = iA;
  var oA = Dn(lr, 'WeakMap');
  const Lf = oA;
  var km = '[object Map]',
    aA = '[object Object]',
    Tm = '[object Promise]',
    Am = '[object Set]',
    Nm = '[object WeakMap]',
    Fm = '[object DataView]',
    sA = In(Nf),
    uA = In(Jo),
    lA = In(Ff),
    cA = In(Rf),
    fA = In(Lf),
    vn = Ln;
  ((Nf && vn(new Nf(new ArrayBuffer(1))) != Fm) ||
    (Jo && vn(new Jo()) != km) ||
    (Ff && vn(Ff.resolve()) != Tm) ||
    (Rf && vn(new Rf()) != Am) ||
    (Lf && vn(new Lf()) != Nm)) &&
    (vn = function (e) {
      var t = Ln(e),
        r = t == aA ? e.constructor : void 0,
        n = r ? In(r) : '';
      if (n)
        switch (n) {
          case sA:
            return Fm;
          case uA:
            return km;
          case lA:
            return Tm;
          case cA:
            return Am;
          case fA:
            return Nm;
        }
      return t;
    });
  const bp = vn;
  var dA = Object.prototype,
    pA = dA.hasOwnProperty;
  function hA(e) {
    var t = e.length,
      r = new e.constructor(t);
    return (
      t &&
        typeof e[0] == 'string' &&
        pA.call(e, 'index') &&
        ((r.index = e.index), (r.input = e.input)),
      r
    );
  }
  var gA = lr.Uint8Array;
  const Rm = gA;
  function Ep(e) {
    var t = new e.constructor(e.byteLength);
    return new Rm(t).set(new Rm(e)), t;
  }
  function mA(e, t) {
    var r = t ? Ep(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  var vA = /\w*$/;
  function yA(e) {
    var t = new e.constructor(e.source, vA.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var Lm = an ? an.prototype : void 0,
    jm = Lm ? Lm.valueOf : void 0;
  function wA(e) {
    return jm ? Object(jm.call(e)) : {};
  }
  function _A(e, t) {
    var r = t ? Ep(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  var SA = '[object Boolean]',
    xA = '[object Date]',
    bA = '[object Map]',
    EA = '[object Number]',
    OA = '[object RegExp]',
    CA = '[object Set]',
    PA = '[object String]',
    $A = '[object Symbol]',
    kA = '[object ArrayBuffer]',
    TA = '[object DataView]',
    AA = '[object Float32Array]',
    NA = '[object Float64Array]',
    FA = '[object Int8Array]',
    RA = '[object Int16Array]',
    LA = '[object Int32Array]',
    jA = '[object Uint8Array]',
    IA = '[object Uint8ClampedArray]',
    DA = '[object Uint16Array]',
    MA = '[object Uint32Array]';
  function UA(e, t, r) {
    var n = e.constructor;
    switch (t) {
      case kA:
        return Ep(e);
      case SA:
      case xA:
        return new n(+e);
      case TA:
        return mA(e, r);
      case AA:
      case NA:
      case FA:
      case RA:
      case LA:
      case jA:
      case IA:
      case DA:
      case MA:
        return _A(e, r);
      case bA:
        return new n();
      case EA:
      case PA:
        return new n(e);
      case OA:
        return yA(e);
      case CA:
        return new n();
      case $A:
        return wA(e);
    }
  }
  var Im = Object.create,
    zA = (function () {
      function e() {}
      return function (t) {
        if (!ca(t)) return {};
        if (Im) return Im(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  const BA = zA;
  function HA(e) {
    return typeof e.constructor == 'function' && !wp(e) ? BA(vp(e)) : {};
  }
  var VA = '[object Map]';
  function WA(e) {
    return jn(e) && bp(e) == VA;
  }
  var Dm = Ni && Ni.isMap,
    KA = Dm ? yp(Dm) : WA;
  const qA = KA;
  var YA = '[object Set]';
  function GA(e) {
    return jn(e) && bp(e) == YA;
  }
  var Mm = Ni && Ni.isSet,
    XA = Mm ? yp(Mm) : GA;
  const QA = XA;
  var ZA = 1,
    JA = 2,
    e3 = 4,
    xw = '[object Arguments]',
    t3 = '[object Array]',
    r3 = '[object Boolean]',
    n3 = '[object Date]',
    i3 = '[object Error]',
    bw = '[object Function]',
    o3 = '[object GeneratorFunction]',
    a3 = '[object Map]',
    s3 = '[object Number]',
    Ew = '[object Object]',
    u3 = '[object RegExp]',
    l3 = '[object Set]',
    c3 = '[object String]',
    f3 = '[object Symbol]',
    d3 = '[object WeakMap]',
    p3 = '[object ArrayBuffer]',
    h3 = '[object DataView]',
    g3 = '[object Float32Array]',
    m3 = '[object Float64Array]',
    v3 = '[object Int8Array]',
    y3 = '[object Int16Array]',
    w3 = '[object Int32Array]',
    _3 = '[object Uint8Array]',
    S3 = '[object Uint8ClampedArray]',
    x3 = '[object Uint16Array]',
    b3 = '[object Uint32Array]',
    ne = {};
  ne[xw] =
    ne[t3] =
    ne[p3] =
    ne[h3] =
    ne[r3] =
    ne[n3] =
    ne[g3] =
    ne[m3] =
    ne[v3] =
    ne[y3] =
    ne[w3] =
    ne[a3] =
    ne[s3] =
    ne[Ew] =
    ne[u3] =
    ne[l3] =
    ne[c3] =
    ne[f3] =
    ne[_3] =
    ne[S3] =
    ne[x3] =
    ne[b3] =
      !0;
  ne[i3] = ne[bw] = ne[d3] = !1;
  function Ao(e, t, r, n, i, o) {
    var a,
      s = t & ZA,
      u = t & JA,
      l = t & e3;
    if ((r && (a = i ? r(e, n, i, o) : r(e)), a !== void 0)) return a;
    if (!ca(e)) return e;
    var d = fa(e);
    if (d) {
      if (((a = hA(e)), !s)) return vw(e, a);
    } else {
      var f = bp(e),
        c = f == bw || f == o3;
      if (fw(e)) return WT(e, s);
      if (f == Ew || f == xw || (c && !i)) {
        if (((a = u || c ? {} : HA(e)), !s))
          return u ? JT(e, HT(a, e)) : XT(e, DT(a, e));
      } else {
        if (!ne[f]) return i ? e : {};
        a = UA(e, f, s);
      }
    }
    o || (o = new Bi());
    var g = o.get(e);
    if (g) return g;
    o.set(e, a),
      QA(e)
        ? e.forEach(function (S) {
            a.add(Ao(S, t, r, S, e, o));
          })
        : qA(e) &&
          e.forEach(function (S, h) {
            a.set(h, Ao(S, t, r, h, e, o));
          });
    var m = l ? (u ? tA : eA) : u ? Sp : _p,
      v = d ? void 0 : m(e);
    return (
      jk(v || e, function (S, h) {
        v && ((h = S), (S = e[h])), uw(a, h, Ao(S, t, r, h, e, o));
      }),
      a
    );
  }
  var E3 = 4;
  function Um(e) {
    return Ao(e, E3);
  }
  function Ow(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
      i[r] = t(e[r], r, e);
    return i;
  }
  var O3 = '[object Symbol]';
  function Op(e) {
    return typeof e == 'symbol' || (jn(e) && Ln(e) == O3);
  }
  var C3 = 'Expected a function';
  function Cp(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(C3);
    var r = function () {
      var n = arguments,
        i = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(i)) return o.get(i);
      var a = e.apply(this, n);
      return (r.cache = o.set(i, a) || o), a;
    };
    return (r.cache = new (Cp.Cache || fn)()), r;
  }
  Cp.Cache = fn;
  var P3 = 500;
  function $3(e) {
    var t = Cp(e, function (n) {
        return r.size === P3 && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var k3 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    T3 = /\\(\\)?/g,
    A3 = $3(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(k3, function (r, n, i, o) {
          t.push(i ? o.replace(T3, '$1') : n || r);
        }),
        t
      );
    });
  const N3 = A3;
  var F3 = 1 / 0;
  function R3(e) {
    if (typeof e == 'string' || Op(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -F3 ? '-0' : t;
  }
  var L3 = 1 / 0,
    zm = an ? an.prototype : void 0,
    Bm = zm ? zm.toString : void 0;
  function Cw(e) {
    if (typeof e == 'string') return e;
    if (fa(e)) return Ow(e, Cw) + '';
    if (Op(e)) return Bm ? Bm.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -L3 ? '-0' : t;
  }
  function j3(e) {
    return e == null ? '' : Cw(e);
  }
  function Pw(e) {
    return fa(e) ? Ow(e, R3) : Op(e) ? [e] : vw(N3(j3(e)));
  }
  var I3 = !0;
  function D3(e, t) {
    if (!I3) {
      if (e) return;
      var r = 'Warning: ' + t;
      typeof console < 'u' && console.warn(r);
      try {
        throw Error(r);
      } catch {}
    }
  }
  var M3 = 1,
    U3 = 4;
  function z3(e) {
    return Ao(e, M3 | U3);
  }
  function be() {
    return (
      (be =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      be.apply(this, arguments)
    );
  }
  function B3(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  function Pp(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      i,
      o;
    for (o = 0; o < n.length; o++)
      (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
  }
  function Hm(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  var Vm = function (t) {
      return Array.isArray(t) && t.length === 0;
    },
    xt = function (t) {
      return typeof t == 'function';
    },
    el = function (t) {
      return t !== null && typeof t == 'object';
    },
    H3 = function (t) {
      return String(Math.floor(Number(t))) === t;
    },
    sc = function (t) {
      return Object.prototype.toString.call(t) === '[object String]';
    },
    V3 = function (t) {
      return O.exports.Children.count(t) === 0;
    },
    uc = function (t) {
      return el(t) && xt(t.then);
    };
  function Ie(e, t, r, n) {
    n === void 0 && (n = 0);
    for (var i = Pw(t); e && n < i.length; ) e = e[i[n++]];
    return e === void 0 ? r : e;
  }
  function sr(e, t, r) {
    for (var n = Um(e), i = n, o = 0, a = Pw(t); o < a.length - 1; o++) {
      var s = a[o],
        u = Ie(e, a.slice(0, o + 1));
      if (u && (el(u) || Array.isArray(u))) i = i[s] = Um(u);
      else {
        var l = a[o + 1];
        i = i[s] = H3(l) && Number(l) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : i)[a[o]] === r
      ? e
      : (r === void 0 ? delete i[a[o]] : (i[a[o]] = r),
        o === 0 && r === void 0 && delete n[a[o]],
        n);
  }
  function $w(e, t, r, n) {
    r === void 0 && (r = new WeakMap()), n === void 0 && (n = {});
    for (var i = 0, o = Object.keys(e); i < o.length; i++) {
      var a = o[i],
        s = e[a];
      el(s)
        ? r.get(s) ||
          (r.set(s, !0), (n[a] = Array.isArray(s) ? [] : {}), $w(s, t, r, n[a]))
        : (n[a] = t);
    }
    return n;
  }
  var tl = O.exports.createContext(void 0);
  tl.displayName = 'FormikContext';
  tl.Provider;
  tl.Consumer;
  function W3() {
    var e = O.exports.useContext(tl);
    return e || D3(!1), e;
  }
  function K3(e, t) {
    switch (t.type) {
      case 'SET_VALUES':
        return be({}, e, { values: t.payload });
      case 'SET_TOUCHED':
        return be({}, e, { touched: t.payload });
      case 'SET_ERRORS':
        return Fr(e.errors, t.payload) ? e : be({}, e, { errors: t.payload });
      case 'SET_STATUS':
        return be({}, e, { status: t.payload });
      case 'SET_ISSUBMITTING':
        return be({}, e, { isSubmitting: t.payload });
      case 'SET_ISVALIDATING':
        return be({}, e, { isValidating: t.payload });
      case 'SET_FIELD_VALUE':
        return be({}, e, {
          values: sr(e.values, t.payload.field, t.payload.value),
        });
      case 'SET_FIELD_TOUCHED':
        return be({}, e, {
          touched: sr(e.touched, t.payload.field, t.payload.value),
        });
      case 'SET_FIELD_ERROR':
        return be({}, e, {
          errors: sr(e.errors, t.payload.field, t.payload.value),
        });
      case 'RESET_FORM':
        return be({}, e, t.payload);
      case 'SET_FORMIK_STATE':
        return t.payload(e);
      case 'SUBMIT_ATTEMPT':
        return be({}, e, {
          touched: $w(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1,
        });
      case 'SUBMIT_FAILURE':
        return be({}, e, { isSubmitting: !1 });
      case 'SUBMIT_SUCCESS':
        return be({}, e, { isSubmitting: !1 });
      default:
        return e;
    }
  }
  var pn = {},
    za = {};
  function da(e) {
    var t = e.validateOnChange,
      r = t === void 0 ? !0 : t,
      n = e.validateOnBlur,
      i = n === void 0 ? !0 : n,
      o = e.validateOnMount,
      a = o === void 0 ? !1 : o,
      s = e.isInitialValid,
      u = e.enableReinitialize,
      l = u === void 0 ? !1 : u,
      d = e.onSubmit,
      f = Pp(e, [
        'validateOnChange',
        'validateOnBlur',
        'validateOnMount',
        'isInitialValid',
        'enableReinitialize',
        'onSubmit',
      ]),
      c = be(
        {
          validateOnChange: r,
          validateOnBlur: i,
          validateOnMount: a,
          onSubmit: d,
        },
        f
      ),
      g = O.exports.useRef(c.initialValues),
      m = O.exports.useRef(c.initialErrors || pn),
      v = O.exports.useRef(c.initialTouched || za),
      S = O.exports.useRef(c.initialStatus),
      h = O.exports.useRef(!1),
      p = O.exports.useRef({});
    O.exports.useEffect(function () {
      return (
        (h.current = !0),
        function () {
          h.current = !1;
        }
      );
    }, []);
    var y = O.exports.useReducer(K3, {
        values: c.initialValues,
        errors: c.initialErrors || pn,
        touched: c.initialTouched || za,
        status: c.initialStatus,
        isSubmitting: !1,
        isValidating: !1,
        submitCount: 0,
      }),
      _ = y[0],
      x = y[1],
      E = O.exports.useCallback(
        function (C, I) {
          return new Promise(function (M, H) {
            var K = c.validate(C, I);
            K == null
              ? M(pn)
              : uc(K)
              ? K.then(
                  function (J) {
                    M(J || pn);
                  },
                  function (J) {
                    H(J);
                  }
                )
              : M(K);
          });
        },
        [c.validate]
      ),
      $ = O.exports.useCallback(
        function (C, I) {
          var M = c.validationSchema,
            H = xt(M) ? M(I) : M,
            K = I && H.validateAt ? H.validateAt(I, C) : Y3(C, H);
          return new Promise(function (J, Ae) {
            K.then(
              function () {
                J(pn);
              },
              function (fr) {
                fr.name === 'ValidationError' ? J(q3(fr)) : Ae(fr);
              }
            );
          });
        },
        [c.validationSchema]
      ),
      k = O.exports.useCallback(function (C, I) {
        return new Promise(function (M) {
          return M(p.current[C].validate(I));
        });
      }, []),
      D = O.exports.useCallback(
        function (C) {
          var I = Object.keys(p.current).filter(function (H) {
              return xt(p.current[H].validate);
            }),
            M =
              I.length > 0
                ? I.map(function (H) {
                    return k(H, Ie(C, H));
                  })
                : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')];
          return Promise.all(M).then(function (H) {
            return H.reduce(function (K, J, Ae) {
              return (
                J === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED' ||
                  (J && (K = sr(K, I[Ae], J))),
                K
              );
            }, {});
          });
        },
        [k]
      ),
      F = O.exports.useCallback(
        function (C) {
          return Promise.all([
            D(C),
            c.validationSchema ? $(C) : {},
            c.validate ? E(C) : {},
          ]).then(function (I) {
            var M = I[0],
              H = I[1],
              K = I[2],
              J = Af.all([M, H, K], { arrayMerge: G3 });
            return J;
          });
        },
        [c.validate, c.validationSchema, D, E, $]
      ),
      z = St(function (C) {
        return (
          C === void 0 && (C = _.values),
          x({ type: 'SET_ISVALIDATING', payload: !0 }),
          F(C).then(function (I) {
            return (
              h.current &&
                (x({ type: 'SET_ISVALIDATING', payload: !1 }),
                x({ type: 'SET_ERRORS', payload: I })),
              I
            );
          })
        );
      });
    O.exports.useEffect(
      function () {
        a && h.current === !0 && Fr(g.current, c.initialValues) && z(g.current);
      },
      [a, z]
    );
    var me = O.exports.useCallback(
      function (C) {
        var I = C && C.values ? C.values : g.current,
          M =
            C && C.errors
              ? C.errors
              : m.current
              ? m.current
              : c.initialErrors || {},
          H =
            C && C.touched
              ? C.touched
              : v.current
              ? v.current
              : c.initialTouched || {},
          K =
            C && C.status ? C.status : S.current ? S.current : c.initialStatus;
        (g.current = I), (m.current = M), (v.current = H), (S.current = K);
        var J = function () {
          x({
            type: 'RESET_FORM',
            payload: {
              isSubmitting: !!C && !!C.isSubmitting,
              errors: M,
              touched: H,
              status: K,
              values: I,
              isValidating: !!C && !!C.isValidating,
              submitCount:
                !!C && !!C.submitCount && typeof C.submitCount == 'number'
                  ? C.submitCount
                  : 0,
            },
          });
        };
        if (c.onReset) {
          var Ae = c.onReset(_.values, cr);
          uc(Ae) ? Ae.then(J) : J();
        } else J();
      },
      [c.initialErrors, c.initialStatus, c.initialTouched]
    );
    O.exports.useEffect(
      function () {
        h.current === !0 &&
          !Fr(g.current, c.initialValues) &&
          (l && ((g.current = c.initialValues), me()), a && z(g.current));
      },
      [l, c.initialValues, me, a, z]
    ),
      O.exports.useEffect(
        function () {
          l &&
            h.current === !0 &&
            !Fr(m.current, c.initialErrors) &&
            ((m.current = c.initialErrors || pn),
            x({ type: 'SET_ERRORS', payload: c.initialErrors || pn }));
        },
        [l, c.initialErrors]
      ),
      O.exports.useEffect(
        function () {
          l &&
            h.current === !0 &&
            !Fr(v.current, c.initialTouched) &&
            ((v.current = c.initialTouched || za),
            x({ type: 'SET_TOUCHED', payload: c.initialTouched || za }));
        },
        [l, c.initialTouched]
      ),
      O.exports.useEffect(
        function () {
          l &&
            h.current === !0 &&
            !Fr(S.current, c.initialStatus) &&
            ((S.current = c.initialStatus),
            x({ type: 'SET_STATUS', payload: c.initialStatus }));
        },
        [l, c.initialStatus, c.initialTouched]
      );
    var Oe = St(function (C) {
        if (p.current[C] && xt(p.current[C].validate)) {
          var I = Ie(_.values, C),
            M = p.current[C].validate(I);
          return uc(M)
            ? (x({ type: 'SET_ISVALIDATING', payload: !0 }),
              M.then(function (H) {
                return H;
              }).then(function (H) {
                x({ type: 'SET_FIELD_ERROR', payload: { field: C, value: H } }),
                  x({ type: 'SET_ISVALIDATING', payload: !1 });
              }))
            : (x({ type: 'SET_FIELD_ERROR', payload: { field: C, value: M } }),
              Promise.resolve(M));
        } else if (c.validationSchema)
          return (
            x({ type: 'SET_ISVALIDATING', payload: !0 }),
            $(_.values, C)
              .then(function (H) {
                return H;
              })
              .then(function (H) {
                x({
                  type: 'SET_FIELD_ERROR',
                  payload: { field: C, value: H[C] },
                }),
                  x({ type: 'SET_ISVALIDATING', payload: !1 });
              })
          );
        return Promise.resolve();
      }),
      b = O.exports.useCallback(function (C, I) {
        var M = I.validate;
        p.current[C] = { validate: M };
      }, []),
      N = O.exports.useCallback(function (C) {
        delete p.current[C];
      }, []),
      B = St(function (C, I) {
        x({ type: 'SET_TOUCHED', payload: C });
        var M = I === void 0 ? i : I;
        return M ? z(_.values) : Promise.resolve();
      }),
      X = O.exports.useCallback(function (C) {
        x({ type: 'SET_ERRORS', payload: C });
      }, []),
      A = St(function (C, I) {
        var M = xt(C) ? C(_.values) : C;
        x({ type: 'SET_VALUES', payload: M });
        var H = I === void 0 ? r : I;
        return H ? z(M) : Promise.resolve();
      }),
      R = O.exports.useCallback(function (C, I) {
        x({ type: 'SET_FIELD_ERROR', payload: { field: C, value: I } });
      }, []),
      U = St(function (C, I, M) {
        x({ type: 'SET_FIELD_VALUE', payload: { field: C, value: I } });
        var H = M === void 0 ? r : M;
        return H ? z(sr(_.values, C, I)) : Promise.resolve();
      }),
      W = O.exports.useCallback(
        function (C, I) {
          var M = I,
            H = C,
            K;
          if (!sc(C)) {
            C.persist && C.persist();
            var J = C.target ? C.target : C.currentTarget,
              Ae = J.type,
              fr = J.name,
              cl = J.id,
              fl = J.value,
              Z_ = J.checked,
              JB = J.outerHTML,
              Bp = J.options,
              J_ = J.multiple;
            (M = I || fr || cl),
              (H = /number|range/.test(Ae)
                ? ((K = parseFloat(fl)), isNaN(K) ? '' : K)
                : /checkbox/.test(Ae)
                ? Q3(Ie(_.values, M), Z_, fl)
                : Bp && J_
                ? X3(Bp)
                : fl);
          }
          M && U(M, H);
        },
        [U, _.values]
      ),
      Q = St(function (C) {
        if (sc(C))
          return function (I) {
            return W(I, C);
          };
        W(C);
      }),
      Ue = St(function (C, I, M) {
        I === void 0 && (I = !0),
          x({ type: 'SET_FIELD_TOUCHED', payload: { field: C, value: I } });
        var H = M === void 0 ? i : M;
        return H ? z(_.values) : Promise.resolve();
      }),
      ze = O.exports.useCallback(
        function (C, I) {
          C.persist && C.persist();
          var M = C.target,
            H = M.name,
            K = M.id,
            J = M.outerHTML,
            Ae = I || H || K;
          Ue(Ae, !0);
        },
        [Ue]
      ),
      Xt = St(function (C) {
        if (sc(C))
          return function (I) {
            return ze(I, C);
          };
        ze(C);
      }),
      Be = O.exports.useCallback(function (C) {
        xt(C)
          ? x({ type: 'SET_FORMIK_STATE', payload: C })
          : x({
              type: 'SET_FORMIK_STATE',
              payload: function () {
                return C;
              },
            });
      }, []),
      wt = O.exports.useCallback(function (C) {
        x({ type: 'SET_STATUS', payload: C });
      }, []),
      Hn = O.exports.useCallback(function (C) {
        x({ type: 'SET_ISSUBMITTING', payload: C });
      }, []),
      Vn = St(function () {
        return (
          x({ type: 'SUBMIT_ATTEMPT' }),
          z().then(function (C) {
            var I = C instanceof Error,
              M = !I && Object.keys(C).length === 0;
            if (M) {
              var H;
              try {
                if (((H = Gi()), H === void 0)) return;
              } catch (K) {
                throw K;
              }
              return Promise.resolve(H)
                .then(function (K) {
                  return h.current && x({ type: 'SUBMIT_SUCCESS' }), K;
                })
                .catch(function (K) {
                  if (h.current) throw (x({ type: 'SUBMIT_FAILURE' }), K);
                });
            } else if (h.current && (x({ type: 'SUBMIT_FAILURE' }), I)) throw C;
          })
        );
      }),
      Yi = St(function (C) {
        C && C.preventDefault && xt(C.preventDefault) && C.preventDefault(),
          C &&
            C.stopPropagation &&
            xt(C.stopPropagation) &&
            C.stopPropagation(),
          Vn().catch(function (I) {
            console.warn(
              'Warning: An unhandled error was caught from submitForm()',
              I
            );
          });
      }),
      cr = {
        resetForm: me,
        validateForm: z,
        validateField: Oe,
        setErrors: X,
        setFieldError: R,
        setFieldTouched: Ue,
        setFieldValue: U,
        setStatus: wt,
        setSubmitting: Hn,
        setTouched: B,
        setValues: A,
        setFormikState: Be,
        submitForm: Vn,
      },
      Gi = St(function () {
        return d(_.values, cr);
      }),
      ma = St(function (C) {
        C && C.preventDefault && xt(C.preventDefault) && C.preventDefault(),
          C &&
            C.stopPropagation &&
            xt(C.stopPropagation) &&
            C.stopPropagation(),
          me();
      }),
      va = O.exports.useCallback(
        function (C) {
          return {
            value: Ie(_.values, C),
            error: Ie(_.errors, C),
            touched: !!Ie(_.touched, C),
            initialValue: Ie(g.current, C),
            initialTouched: !!Ie(v.current, C),
            initialError: Ie(m.current, C),
          };
        },
        [_.errors, _.touched, _.values]
      ),
      Y_ = O.exports.useCallback(
        function (C) {
          return {
            setValue: function (M, H) {
              return U(C, M, H);
            },
            setTouched: function (M, H) {
              return Ue(C, M, H);
            },
            setError: function (M) {
              return R(C, M);
            },
          };
        },
        [U, Ue, R]
      ),
      G_ = O.exports.useCallback(
        function (C) {
          var I = el(C),
            M = I ? C.name : C,
            H = Ie(_.values, M),
            K = { name: M, value: H, onChange: Q, onBlur: Xt };
          if (I) {
            var J = C.type,
              Ae = C.value,
              fr = C.as,
              cl = C.multiple;
            J === 'checkbox'
              ? Ae === void 0
                ? (K.checked = !!H)
                : ((K.checked = !!(Array.isArray(H) && ~H.indexOf(Ae))),
                  (K.value = Ae))
              : J === 'radio'
              ? ((K.checked = H === Ae), (K.value = Ae))
              : fr === 'select' &&
                cl &&
                ((K.value = K.value || []), (K.multiple = !0));
          }
          return K;
        },
        [Xt, Q, _.values]
      ),
      ll = O.exports.useMemo(
        function () {
          return !Fr(g.current, _.values);
        },
        [g.current, _.values]
      ),
      X_ = O.exports.useMemo(
        function () {
          return typeof s < 'u'
            ? ll
              ? _.errors && Object.keys(_.errors).length === 0
              : s !== !1 && xt(s)
              ? s(c)
              : s
            : _.errors && Object.keys(_.errors).length === 0;
        },
        [s, ll, _.errors, c]
      ),
      Q_ = be({}, _, {
        initialValues: g.current,
        initialErrors: m.current,
        initialTouched: v.current,
        initialStatus: S.current,
        handleBlur: Xt,
        handleChange: Q,
        handleReset: ma,
        handleSubmit: Yi,
        resetForm: me,
        setErrors: X,
        setFormikState: Be,
        setFieldTouched: Ue,
        setFieldValue: U,
        setFieldError: R,
        setStatus: wt,
        setSubmitting: Hn,
        setTouched: B,
        setValues: A,
        submitForm: Vn,
        validateForm: z,
        validateField: Oe,
        isValid: X_,
        dirty: ll,
        unregisterField: N,
        registerField: b,
        getFieldProps: G_,
        getFieldMeta: va,
        getFieldHelpers: Y_,
        validateOnBlur: i,
        validateOnChange: r,
        validateOnMount: a,
      });
    return Q_;
  }
  function q3(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0) return sr(t, e.path, e.message);
      for (
        var i = e.inner,
          r = Array.isArray(i),
          n = 0,
          i = r ? i : i[Symbol.iterator]();
        ;

      ) {
        var o;
        if (r) {
          if (n >= i.length) break;
          o = i[n++];
        } else {
          if (((n = i.next()), n.done)) break;
          o = n.value;
        }
        var a = o;
        Ie(t, a.path) || (t = sr(t, a.path, a.message));
      }
    }
    return t;
  }
  function Y3(e, t, r, n) {
    r === void 0 && (r = !1), n === void 0 && (n = {});
    var i = jf(e);
    return t[r ? 'validateSync' : 'validate'](i, {
      abortEarly: !1,
      context: n,
    });
  }
  function jf(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        var n = String(r);
        Array.isArray(e[n]) === !0
          ? (t[n] = e[n].map(function (i) {
              return Array.isArray(i) === !0 || ym(i)
                ? jf(i)
                : i !== ''
                ? i
                : void 0;
            }))
          : ym(e[n])
          ? (t[n] = jf(e[n]))
          : (t[n] = e[n] !== '' ? e[n] : void 0);
      }
    return t;
  }
  function G3(e, t, r) {
    var n = e.slice();
    return (
      t.forEach(function (o, a) {
        if (typeof n[a] > 'u') {
          var s = r.clone !== !1,
            u = s && r.isMergeableObject(o);
          n[a] = u ? Af(Array.isArray(o) ? [] : {}, o, r) : o;
        } else r.isMergeableObject(o) ? (n[a] = Af(e[a], o, r)) : e.indexOf(o) === -1 && n.push(o);
      }),
      n
    );
  }
  function X3(e) {
    return Array.from(e)
      .filter(function (t) {
        return t.selected;
      })
      .map(function (t) {
        return t.value;
      });
  }
  function Q3(e, t, r) {
    if (typeof e == 'boolean') return Boolean(t);
    var n = [],
      i = !1,
      o = -1;
    if (Array.isArray(e)) (n = e), (o = e.indexOf(r)), (i = o >= 0);
    else if (!r || r == 'true' || r == 'false') return Boolean(t);
    return t && r && !i
      ? n.concat(r)
      : i
      ? n.slice(0, o).concat(n.slice(o + 1))
      : n;
  }
  var Z3 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u'
      ? O.exports.useLayoutEffect
      : O.exports.useEffect;
  function St(e) {
    var t = O.exports.useRef(e);
    return (
      Z3(function () {
        t.current = e;
      }),
      O.exports.useCallback(function () {
        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
          n[i] = arguments[i];
        return t.current.apply(void 0, n);
      }, [])
    );
  }
  var J3 = O.exports.forwardRef(function (e, t) {
    var r = e.action,
      n = Pp(e, ['action']),
      i = r != null ? r : '#',
      o = W3(),
      a = o.handleReset,
      s = o.handleSubmit;
    return O.exports.createElement(
      'form',
      Object.assign({ onSubmit: s, ref: t, onReset: a, action: i }, n)
    );
  });
  J3.displayName = 'Form';
  var e4 = function (t, r, n) {
      var i = Fi(t),
        o = i[r];
      return i.splice(r, 1), i.splice(n, 0, o), i;
    },
    t4 = function (t, r, n) {
      var i = Fi(t),
        o = i[r];
      return (i[r] = i[n]), (i[n] = o), i;
    },
    lc = function (t, r, n) {
      var i = Fi(t);
      return i.splice(r, 0, n), i;
    },
    r4 = function (t, r, n) {
      var i = Fi(t);
      return (i[r] = n), i;
    },
    Fi = function (t) {
      if (t) {
        if (Array.isArray(t)) return [].concat(t);
        var r = Object.keys(t)
          .map(function (n) {
            return parseInt(n);
          })
          .reduce(function (n, i) {
            return i > n ? i : n;
          }, 0);
        return Array.from(be({}, t, { length: r + 1 }));
      } else return [];
    },
    n4 = (function (e) {
      B3(t, e);
      function t(n) {
        var i;
        return (
          (i = e.call(this, n) || this),
          (i.updateArrayField = function (o, a, s) {
            var u = i.props,
              l = u.name,
              d = u.formik.setFormikState;
            d(function (f) {
              var c = typeof s == 'function' ? s : o,
                g = typeof a == 'function' ? a : o,
                m = sr(f.values, l, o(Ie(f.values, l))),
                v = s ? c(Ie(f.errors, l)) : void 0,
                S = a ? g(Ie(f.touched, l)) : void 0;
              return (
                Vm(v) && (v = void 0),
                Vm(S) && (S = void 0),
                be({}, f, {
                  values: m,
                  errors: s ? sr(f.errors, l, v) : f.errors,
                  touched: a ? sr(f.touched, l, S) : f.touched,
                })
              );
            });
          }),
          (i.push = function (o) {
            return i.updateArrayField(
              function (a) {
                return [].concat(Fi(a), [z3(o)]);
              },
              !1,
              !1
            );
          }),
          (i.handlePush = function (o) {
            return function () {
              return i.push(o);
            };
          }),
          (i.swap = function (o, a) {
            return i.updateArrayField(
              function (s) {
                return t4(s, o, a);
              },
              !0,
              !0
            );
          }),
          (i.handleSwap = function (o, a) {
            return function () {
              return i.swap(o, a);
            };
          }),
          (i.move = function (o, a) {
            return i.updateArrayField(
              function (s) {
                return e4(s, o, a);
              },
              !0,
              !0
            );
          }),
          (i.handleMove = function (o, a) {
            return function () {
              return i.move(o, a);
            };
          }),
          (i.insert = function (o, a) {
            return i.updateArrayField(
              function (s) {
                return lc(s, o, a);
              },
              function (s) {
                return lc(s, o, null);
              },
              function (s) {
                return lc(s, o, null);
              }
            );
          }),
          (i.handleInsert = function (o, a) {
            return function () {
              return i.insert(o, a);
            };
          }),
          (i.replace = function (o, a) {
            return i.updateArrayField(
              function (s) {
                return r4(s, o, a);
              },
              !1,
              !1
            );
          }),
          (i.handleReplace = function (o, a) {
            return function () {
              return i.replace(o, a);
            };
          }),
          (i.unshift = function (o) {
            var a = -1;
            return (
              i.updateArrayField(
                function (s) {
                  var u = s ? [o].concat(s) : [o];
                  return a < 0 && (a = u.length), u;
                },
                function (s) {
                  var u = s ? [null].concat(s) : [null];
                  return a < 0 && (a = u.length), u;
                },
                function (s) {
                  var u = s ? [null].concat(s) : [null];
                  return a < 0 && (a = u.length), u;
                }
              ),
              a
            );
          }),
          (i.handleUnshift = function (o) {
            return function () {
              return i.unshift(o);
            };
          }),
          (i.handleRemove = function (o) {
            return function () {
              return i.remove(o);
            };
          }),
          (i.handlePop = function () {
            return function () {
              return i.pop();
            };
          }),
          (i.remove = i.remove.bind(Hm(i))),
          (i.pop = i.pop.bind(Hm(i))),
          i
        );
      }
      var r = t.prototype;
      return (
        (r.componentDidUpdate = function (i) {
          this.props.validateOnChange &&
            this.props.formik.validateOnChange &&
            !Fr(
              Ie(i.formik.values, i.name),
              Ie(this.props.formik.values, this.props.name)
            ) &&
            this.props.formik.validateForm(this.props.formik.values);
        }),
        (r.remove = function (i) {
          var o;
          return (
            this.updateArrayField(
              function (a) {
                var s = a ? Fi(a) : [];
                return o || (o = s[i]), xt(s.splice) && s.splice(i, 1), s;
              },
              !0,
              !0
            ),
            o
          );
        }),
        (r.pop = function () {
          var i;
          return (
            this.updateArrayField(
              function (o) {
                var a = o;
                return i || (i = a && a.pop && a.pop()), a;
              },
              !0,
              !0
            ),
            i
          );
        }),
        (r.render = function () {
          var i = {
              push: this.push,
              pop: this.pop,
              swap: this.swap,
              move: this.move,
              insert: this.insert,
              replace: this.replace,
              unshift: this.unshift,
              remove: this.remove,
              handlePush: this.handlePush,
              handlePop: this.handlePop,
              handleSwap: this.handleSwap,
              handleMove: this.handleMove,
              handleInsert: this.handleInsert,
              handleReplace: this.handleReplace,
              handleUnshift: this.handleUnshift,
              handleRemove: this.handleRemove,
            },
            o = this.props,
            a = o.component,
            s = o.render,
            u = o.children,
            l = o.name,
            d = o.formik,
            f = Pp(d, ['validate', 'validationSchema']),
            c = be({}, i, { form: f, name: l });
          return a
            ? O.exports.createElement(a, c)
            : s
            ? s(c)
            : u
            ? typeof u == 'function'
              ? u(c)
              : V3(u)
              ? null
              : O.exports.Children.only(u)
            : null;
        }),
        t
      );
    })(O.exports.Component);
  n4.defaultProps = { validateOnChange: !0 };
  const i4 = '_form_root_ixfck_25',
    o4 = '_form_block_title_ixfck_35',
    a4 = '_form_logo_title_ixfck_40',
    s4 = '_form_main_block_ixfck_83',
    u4 = '_form_group_ixfck_96',
    l4 = '_form_inputs_buttons_ixfck_120',
    c4 = '_form_inputs_ixfck_120',
    f4 = '_form_buttons_ixfck_139',
    d4 = '_form_button_box_ixfck_146',
    p4 = '_form_title_ixfck_151',
    h4 = '_reset_link_ixfck_183',
    g4 = '_form_center_ixfck_188',
    Se = {
      form_root: i4,
      form_block_title: o4,
      form_logo_title: a4,
      form_main_block: s4,
      form_group: u4,
      form_inputs_buttons: l4,
      form_inputs: c4,
      form_buttons: f4,
      form_button_box: d4,
      form_title: p4,
      reset_link: h4,
      form_center: g4,
    },
    $p = ({ children: e, buttonsBlock: t, onSubmit: r }) =>
      w(de, {
        children: w('form', {
          onSubmit: r,
          children: w('div', {
            children: w('div', {
              className: Se.form_group,
              children: L('div', {
                className: Se.form_inputs_buttons,
                children: [
                  w('div', { className: Se.form_inputs, children: e }),
                  w('div', { className: Se.form_buttons, children: t }),
                ],
              }),
            }),
          }),
        }),
      }),
    m4 = '_input_7t6as_25',
    v4 = '_regular_7t6as_35',
    y4 = '_label_7t6as_45',
    w4 = '_input_container_7t6as_77',
    _4 = '_input_error_7t6as_83',
    S4 = '_error_7t6as_87',
    Xn = {
      input: m4,
      regular: v4,
      label: y4,
      input_container: w4,
      input_error: _4,
      error: S4,
    },
    st = ({
      name: e,
      type: t = 'text',
      showError: r = !1,
      error: n,
      onChange: i,
      onBlur: o,
      className: a = '',
      label: s,
      placeholder: u = '',
      value: l,
    }) =>
      w(de, {
        children: L('div', {
          className: Xn.input_container,
          children: [
            s && w('label', { htmlFor: e, className: Xn.label, children: s }),
            w('input', {
              id: e,
              name: e,
              onChange: i,
              onBlur: o,
              type: t,
              className: mp(Xn.input, Xn[a], a, r && Xn.input_error),
              placeholder: u,
              value: l,
            }),
            r && w('p', { className: Xn.error, children: n }),
          ],
        }),
      }),
    kw = ({
      children: e,
      buttonsBlock: t,
      initialValues: r,
      validationSchema: n,
      onSubmit: i,
    }) => {
      const { t: o } = xe(),
        {
          values: a,
          errors: s,
          touched: u,
          handleChange: l,
          handleSubmit: d,
          handleBlur: f,
        } = da({ initialValues: r, validationSchema: n, onSubmit: i });
      return w(de, {
        children: w('form', {
          onSubmit: d,
          children: w('div', {
            children: w('div', {
              className: Se.form_group,
              children: L('div', {
                className: Se.form_inputs_buttons,
                children: [
                  Object.keys(r).map((c, g) =>
                    w(
                      st,
                      {
                        label: o(c),
                        name: c,
                        value: a[c],
                        onChange: l,
                        onBlur: f,
                        className: 'regular',
                        showError: Boolean(s[c]) && Boolean(u[c]),
                        error: s[c],
                      },
                      g
                    )
                  ),
                  e,
                  w('div', { className: Se.form_buttons, children: t }),
                ],
              }),
            }),
          }),
        }),
      });
    },
    Tw = {
      HOST_API: 'https://ya-praktikum.tech/api/v2',
      HOST_RESOURCES: 'https://ya-praktikum.tech/api/v2/resources',
      HOST_WS: 'wss://ya-praktikum.tech/ws',
    },
    x4 = Tw.HOST_API,
    Mn = (e, t) =>
      fetch(`${x4}${e}`, { ...t, credentials: 'include' }).then(r => {
        if (!r.ok) return Promise.reject(r.status);
        const n = r.headers.get('content-type');
        return n && n.indexOf('application/json') !== -1
          ? r.json()
          : n && n.indexOf('text/plain') !== -1
          ? r.text()
          : r;
      }),
    kp = { 'content-type': 'application/json', mode: 'cors' },
    bi = Rn('auth/fetchAuth', async (e, t) => {
      try {
        return await Mn('/auth/user', {});
      } catch {
        return t.rejectWithValue(
          '\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438'
        );
      }
    }),
    ls = Rn('auth/fetchSignin', async (e, t) => {
      try {
        const r = await Mn('/auth/signin', {
          method: 'POST',
          headers: kp,
          body: JSON.stringify(e),
        });
        return t.dispatch(bi()), r;
      } catch {
        return (
          t.dispatch(
            zi(
              '\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438'
            )
          ),
          t.rejectWithValue(
            '\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438'
          )
        );
      }
    }),
    cs = Rn('auth/fetchSignup', async (e, t) => {
      try {
        const r = await Mn('/auth/signup', {
          method: 'POST',
          headers: kp,
          body: JSON.stringify(e),
        });
        return t.dispatch(bi()), r;
      } catch {
        return (
          t.dispatch(
            zi(
              '\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438'
            )
          ),
          t.rejectWithValue(
            '\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438'
          )
        );
      }
    }),
    fs = Rn('auth/fetchLogout', async (e, t) => {
      try {
        return await Mn('/auth/logout', { method: 'POST', headers: kp });
      } catch {
        return (
          t.dispatch(
            zi(
              '\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u044B\u0445\u043E\u0434\u0430'
            )
          ),
          t.rejectWithValue(
            '\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438'
          )
        );
      }
    }),
    b4 = { checkAuth: !0, auth: !0, user: null, loading: !1 },
    Aw = Gu({
      name: 'auth',
      initialState: b4,
      reducers: {
        updateUser(e, t) {
          e.user = t.payload;
        },
      },
      extraReducers: e => {
        e.addCase(bi.pending, t => {
          t.loading = !0;
        }),
          e.addCase(bi.fulfilled, (t, r) => {
            (t.checkAuth = !0),
              (t.auth = !0),
              (t.user = r.payload),
              (t.loading = !1);
          }),
          e.addCase(bi.rejected, t => {
            (t.checkAuth = !0), (t.auth = !1), (t.loading = !1);
          }),
          e.addCase(ls.pending, t => {
            t.loading = !0;
          }),
          e.addCase(ls.fulfilled, t => {
            (t.loading = !1), (t.checkAuth = !0), (t.auth = !0);
          }),
          e.addCase(ls.rejected, t => {
            (t.loading = !1), (t.checkAuth = !0), (t.auth = !1);
          }),
          e.addCase(cs.pending, t => {
            t.loading = !0;
          }),
          e.addCase(cs.fulfilled, t => {
            (t.loading = !1), (t.checkAuth = !0), (t.auth = !0);
          }),
          e.addCase(cs.rejected, t => {
            (t.loading = !1), (t.checkAuth = !0), (t.auth = !1);
          }),
          e.addCase(fs.pending, t => {
            t.loading = !0;
          }),
          e.addCase(fs.fulfilled, t => {
            (t.loading = !1),
              (t.checkAuth = !0),
              (t.auth = !1),
              (t.user = null);
          }),
          e.addCase(fs.rejected, t => {
            (t.loading = !1), (t.checkAuth = !0);
          });
      },
    }),
    { updateUser: E4 } = Aw.actions,
    O4 = Aw.reducer,
    Nw = { 'content-type': 'application/json', mode: 'cors' },
    If = Rn('auth/fetchChangeUser', async (e, t) => {
      try {
        const r = await Mn('/user/profile', {
          method: 'PUT',
          headers: Nw,
          body: JSON.stringify(e),
        });
        return t.dispatch(E4(r)), r;
      } catch (r) {
        throw (
          (t.dispatch(
            zi(
              '\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F'
            )
          ),
          t.rejectWithValue(
            '\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F'
          ),
          r)
        );
      }
    }),
    ds = Rn('auth/fetchChangePassword', async (e, t) => {
      try {
        return await Mn('/user/password', {
          method: 'PUT',
          headers: Nw,
          body: JSON.stringify(e),
        });
      } catch (r) {
        throw (
          (t.dispatch(
            zi(
              '\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u043F\u0430\u0440\u043E\u043B\u044F'
            )
          ),
          t.rejectWithValue(
            '\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u043F\u0430\u0440\u043E\u043B\u044F'
          ),
          r)
        );
      }
    }),
    C4 = Rn('auth/fetchChangeAvatar', async (e, t) => {
      try {
        const r = new FormData();
        return (
          r.append('avatar', e),
          await Mn('/user/profile/avatar', { method: 'PUT', body: r })
        );
      } catch (r) {
        throw (
          (t.dispatch(
            zi(
              '\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u044F'
            )
          ),
          t.rejectWithValue(
            '\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043C\u0435\u043D\u044B \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u044F'
          ),
          r)
        );
      }
    }),
    Tp = /^(?=.*[A-Za-z])[0-9A-Za-z_-]{3,20}$/,
    eu = /^(?=.*[A-ZА-Я])(?=.*[0-9]).{10,}$/,
    Fw = /(^[A-ZА-Я])([A-ZА-Яa-zа-я-]+)/,
    Rw = /(^[A-ZА-Я])([A-ZА-Яa-zа-я-]+)/,
    Lw = /(^[+]*)([0-9]{10,15})/,
    P4 = /^(?=.*[A-Za-z])[0-9A-Za-z_-]{3,20}$/,
    jw =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var Df;
  try {
    Df = Map;
  } catch {}
  var Mf;
  try {
    Mf = Set;
  } catch {}
  function Iw(e, t, r) {
    if (!e || typeof e != 'object' || typeof e == 'function') return e;
    if (e.nodeType && 'cloneNode' in e) return e.cloneNode(!0);
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) return new RegExp(e);
    if (Array.isArray(e)) return e.map(Uf);
    if (Df && e instanceof Df) return new Map(Array.from(e.entries()));
    if (Mf && e instanceof Mf) return new Set(Array.from(e.values()));
    if (e instanceof Object) {
      t.push(e);
      var n = Object.create(e);
      r.push(n);
      for (var i in e) {
        var o = t.findIndex(function (a) {
          return a === e[i];
        });
        n[i] = o > -1 ? r[o] : Iw(e[i], t, r);
      }
      return n;
    }
    return e;
  }
  function Uf(e) {
    return Iw(e, [], []);
  }
  const $4 = Object.prototype.toString,
    k4 = Error.prototype.toString,
    T4 = RegExp.prototype.toString,
    A4 = typeof Symbol < 'u' ? Symbol.prototype.toString : () => '',
    N4 = /^Symbol\((.*)\)(.*)$/;
  function F4(e) {
    return e != +e ? 'NaN' : e === 0 && 1 / e < 0 ? '-0' : '' + e;
  }
  function Wm(e, t = !1) {
    if (e == null || e === !0 || e === !1) return '' + e;
    const r = typeof e;
    if (r === 'number') return F4(e);
    if (r === 'string') return t ? `"${e}"` : e;
    if (r === 'function') return '[Function ' + (e.name || 'anonymous') + ']';
    if (r === 'symbol') return A4.call(e).replace(N4, 'Symbol($1)');
    const n = $4.call(e).slice(8, -1);
    return n === 'Date'
      ? isNaN(e.getTime())
        ? '' + e
        : e.toISOString(e)
      : n === 'Error' || e instanceof Error
      ? '[' + k4.call(e) + ']'
      : n === 'RegExp'
      ? T4.call(e)
      : null;
  }
  function ta(e, t) {
    let r = Wm(e, t);
    return r !== null
      ? r
      : JSON.stringify(
          e,
          function (n, i) {
            let o = Wm(this[n], t);
            return o !== null ? o : i;
          },
          2
        );
  }
  let yn = {
      default: '${path} is invalid',
      required: '${path} is a required field',
      oneOf: '${path} must be one of the following values: ${values}',
      notOneOf: '${path} must not be one of the following values: ${values}',
      notType: ({ path: e, type: t, value: r, originalValue: n }) => {
        let i = n != null && n !== r,
          o =
            `${e} must be a \`${t}\` type, but the final value was: \`${ta(
              r,
              !0
            )}\`` + (i ? ` (cast from the value \`${ta(n, !0)}\`).` : '.');
        return (
          r === null &&
            (o +=
              '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),
          o
        );
      },
      defined: '${path} must be defined',
    },
    Dt = {
      length: '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches: '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      uuid: '${path} must be a valid UUID',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
    },
    R4 = {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    zf = {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    L4 = { isValue: '${path} field must be ${value}' },
    Bf = { noUnknown: '${path} field has unspecified keys: ${unknown}' },
    j4 = {
      min: '${path} field must have at least ${min} items',
      max: '${path} field must have less than or equal to ${max} items',
      length: '${path} must have ${length} items',
    };
  Object.assign(Object.create(null), {
    mixed: yn,
    string: Dt,
    number: R4,
    date: zf,
    object: Bf,
    array: j4,
    boolean: L4,
  });
  var I4 = Object.prototype,
    D4 = I4.hasOwnProperty;
  function M4(e, t) {
    return e != null && D4.call(e, t);
  }
  var U4 = M4,
    z4 = Array.isArray,
    dn = z4,
    B4 = typeof Ir == 'object' && Ir && Ir.Object === Object && Ir,
    Dw = B4,
    H4 = Dw,
    V4 = typeof self == 'object' && self && self.Object === Object && self,
    W4 = H4 || V4 || Function('return this')(),
    $r = W4,
    K4 = $r,
    q4 = K4.Symbol,
    rl = q4,
    Km = rl,
    Mw = Object.prototype,
    Y4 = Mw.hasOwnProperty,
    G4 = Mw.toString,
    fo = Km ? Km.toStringTag : void 0;
  function X4(e) {
    var t = Y4.call(e, fo),
      r = e[fo];
    try {
      e[fo] = void 0;
      var n = !0;
    } catch {}
    var i = G4.call(e);
    return n && (t ? (e[fo] = r) : delete e[fo]), i;
  }
  var Q4 = X4,
    Z4 = Object.prototype,
    J4 = Z4.toString;
  function eN(e) {
    return J4.call(e);
  }
  var tN = eN,
    qm = rl,
    rN = Q4,
    nN = tN,
    iN = '[object Null]',
    oN = '[object Undefined]',
    Ym = qm ? qm.toStringTag : void 0;
  function aN(e) {
    return e == null
      ? e === void 0
        ? oN
        : iN
      : Ym && Ym in Object(e)
      ? rN(e)
      : nN(e);
  }
  var pa = aN;
  function sN(e) {
    return e != null && typeof e == 'object';
  }
  var ha = sN,
    uN = pa,
    lN = ha,
    cN = '[object Symbol]';
  function fN(e) {
    return typeof e == 'symbol' || (lN(e) && uN(e) == cN);
  }
  var Ap = fN,
    dN = dn,
    pN = Ap,
    hN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    gN = /^\w*$/;
  function mN(e, t) {
    if (dN(e)) return !1;
    var r = typeof e;
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      pN(e)
      ? !0
      : gN.test(e) || !hN.test(e) || (t != null && e in Object(t));
  }
  var Np = mN;
  function vN(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var Fp = vN,
    yN = pa,
    wN = Fp,
    _N = '[object AsyncFunction]',
    SN = '[object Function]',
    xN = '[object GeneratorFunction]',
    bN = '[object Proxy]';
  function EN(e) {
    if (!wN(e)) return !1;
    var t = yN(e);
    return t == SN || t == xN || t == _N || t == bN;
  }
  var Uw = EN,
    ON = $r,
    CN = ON['__core-js_shared__'],
    PN = CN,
    cc = PN,
    Gm = (function () {
      var e = /[^.]+$/.exec((cc && cc.keys && cc.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function $N(e) {
    return !!Gm && Gm in e;
  }
  var kN = $N,
    TN = Function.prototype,
    AN = TN.toString;
  function NN(e) {
    if (e != null) {
      try {
        return AN.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var zw = NN,
    FN = Uw,
    RN = kN,
    LN = Fp,
    jN = zw,
    IN = /[\\^$.*+?()[\]{}|]/g,
    DN = /^\[object .+?Constructor\]$/,
    MN = Function.prototype,
    UN = Object.prototype,
    zN = MN.toString,
    BN = UN.hasOwnProperty,
    HN = RegExp(
      '^' +
        zN
          .call(BN)
          .replace(IN, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    );
  function VN(e) {
    if (!LN(e) || RN(e)) return !1;
    var t = FN(e) ? HN : DN;
    return t.test(jN(e));
  }
  var WN = VN;
  function KN(e, t) {
    return e == null ? void 0 : e[t];
  }
  var qN = KN,
    YN = WN,
    GN = qN;
  function XN(e, t) {
    var r = GN(e, t);
    return YN(r) ? r : void 0;
  }
  var Un = XN,
    QN = Un,
    ZN = QN(Object, 'create'),
    nl = ZN,
    Xm = nl;
  function JN() {
    (this.__data__ = Xm ? Xm(null) : {}), (this.size = 0);
  }
  var eF = JN;
  function tF(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var rF = tF,
    nF = nl,
    iF = '__lodash_hash_undefined__',
    oF = Object.prototype,
    aF = oF.hasOwnProperty;
  function sF(e) {
    var t = this.__data__;
    if (nF) {
      var r = t[e];
      return r === iF ? void 0 : r;
    }
    return aF.call(t, e) ? t[e] : void 0;
  }
  var uF = sF,
    lF = nl,
    cF = Object.prototype,
    fF = cF.hasOwnProperty;
  function dF(e) {
    var t = this.__data__;
    return lF ? t[e] !== void 0 : fF.call(t, e);
  }
  var pF = dF,
    hF = nl,
    gF = '__lodash_hash_undefined__';
  function mF(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = hF && t === void 0 ? gF : t),
      this
    );
  }
  var vF = mF,
    yF = eF,
    wF = rF,
    _F = uF,
    SF = pF,
    xF = vF;
  function Hi(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Hi.prototype.clear = yF;
  Hi.prototype.delete = wF;
  Hi.prototype.get = _F;
  Hi.prototype.has = SF;
  Hi.prototype.set = xF;
  var bF = Hi;
  function EF() {
    (this.__data__ = []), (this.size = 0);
  }
  var OF = EF;
  function CF(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var Bw = CF,
    PF = Bw;
  function $F(e, t) {
    for (var r = e.length; r--; ) if (PF(e[r][0], t)) return r;
    return -1;
  }
  var il = $F,
    kF = il,
    TF = Array.prototype,
    AF = TF.splice;
  function NF(e) {
    var t = this.__data__,
      r = kF(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : AF.call(t, r, 1), --this.size, !0;
  }
  var FF = NF,
    RF = il;
  function LF(e) {
    var t = this.__data__,
      r = RF(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var jF = LF,
    IF = il;
  function DF(e) {
    return IF(this.__data__, e) > -1;
  }
  var MF = DF,
    UF = il;
  function zF(e, t) {
    var r = this.__data__,
      n = UF(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  var BF = zF,
    HF = OF,
    VF = FF,
    WF = jF,
    KF = MF,
    qF = BF;
  function Vi(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Vi.prototype.clear = HF;
  Vi.prototype.delete = VF;
  Vi.prototype.get = WF;
  Vi.prototype.has = KF;
  Vi.prototype.set = qF;
  var ol = Vi,
    YF = Un,
    GF = $r,
    XF = YF(GF, 'Map'),
    Rp = XF,
    Qm = bF,
    QF = ol,
    ZF = Rp;
  function JF() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Qm(),
        map: new (ZF || QF)(),
        string: new Qm(),
      });
  }
  var eR = JF;
  function tR(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var rR = tR,
    nR = rR;
  function iR(e, t) {
    var r = e.__data__;
    return nR(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  var al = iR,
    oR = al;
  function aR(e) {
    var t = oR(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var sR = aR,
    uR = al;
  function lR(e) {
    return uR(this, e).get(e);
  }
  var cR = lR,
    fR = al;
  function dR(e) {
    return fR(this, e).has(e);
  }
  var pR = dR,
    hR = al;
  function gR(e, t) {
    var r = hR(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  var mR = gR,
    vR = eR,
    yR = sR,
    wR = cR,
    _R = pR,
    SR = mR;
  function Wi(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Wi.prototype.clear = vR;
  Wi.prototype.delete = yR;
  Wi.prototype.get = wR;
  Wi.prototype.has = _R;
  Wi.prototype.set = SR;
  var Lp = Wi,
    Hw = Lp,
    xR = 'Expected a function';
  function jp(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(xR);
    var r = function () {
      var n = arguments,
        i = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(i)) return o.get(i);
      var a = e.apply(this, n);
      return (r.cache = o.set(i, a) || o), a;
    };
    return (r.cache = new (jp.Cache || Hw)()), r;
  }
  jp.Cache = Hw;
  var bR = jp,
    ER = bR,
    OR = 500;
  function CR(e) {
    var t = ER(e, function (n) {
        return r.size === OR && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var PR = CR,
    $R = PR,
    kR =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    TR = /\\(\\)?/g,
    AR = $R(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(kR, function (r, n, i, o) {
          t.push(i ? o.replace(TR, '$1') : n || r);
        }),
        t
      );
    }),
    NR = AR;
  function FR(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
      i[r] = t(e[r], r, e);
    return i;
  }
  var RR = FR,
    Zm = rl,
    LR = RR,
    jR = dn,
    IR = Ap,
    DR = 1 / 0,
    Jm = Zm ? Zm.prototype : void 0,
    ev = Jm ? Jm.toString : void 0;
  function Vw(e) {
    if (typeof e == 'string') return e;
    if (jR(e)) return LR(e, Vw) + '';
    if (IR(e)) return ev ? ev.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -DR ? '-0' : t;
  }
  var MR = Vw,
    UR = MR;
  function zR(e) {
    return e == null ? '' : UR(e);
  }
  var ga = zR,
    BR = dn,
    HR = Np,
    VR = NR,
    WR = ga;
  function KR(e, t) {
    return BR(e) ? e : HR(e, t) ? [e] : VR(WR(e));
  }
  var Ww = KR,
    qR = pa,
    YR = ha,
    GR = '[object Arguments]';
  function XR(e) {
    return YR(e) && qR(e) == GR;
  }
  var QR = XR,
    tv = QR,
    ZR = ha,
    Kw = Object.prototype,
    JR = Kw.hasOwnProperty,
    eL = Kw.propertyIsEnumerable,
    tL = tv(
      (function () {
        return arguments;
      })()
    )
      ? tv
      : function (e) {
          return ZR(e) && JR.call(e, 'callee') && !eL.call(e, 'callee');
        },
    qw = tL,
    rL = 9007199254740991,
    nL = /^(?:0|[1-9]\d*)$/;
  function iL(e, t) {
    var r = typeof e;
    return (
      (t = t == null ? rL : t),
      !!t &&
        (r == 'number' || (r != 'symbol' && nL.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var Yw = iL,
    oL = 9007199254740991;
  function aL(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= oL;
  }
  var Ip = aL,
    sL = Ap,
    uL = 1 / 0;
  function lL(e) {
    if (typeof e == 'string' || sL(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -uL ? '-0' : t;
  }
  var sl = lL,
    cL = Ww,
    fL = qw,
    dL = dn,
    pL = Yw,
    hL = Ip,
    gL = sl;
  function mL(e, t, r) {
    t = cL(t, e);
    for (var n = -1, i = t.length, o = !1; ++n < i; ) {
      var a = gL(t[n]);
      if (!(o = e != null && r(e, a))) break;
      e = e[a];
    }
    return o || ++n != i
      ? o
      : ((i = e == null ? 0 : e.length),
        !!i && hL(i) && pL(a, i) && (dL(e) || fL(e)));
  }
  var Gw = mL,
    vL = U4,
    yL = Gw;
  function wL(e, t) {
    return e != null && yL(e, t, vL);
  }
  var tu = wL;
  const Xw = e => e && e.__isYupSchema__;
  class _L {
    constructor(t, r) {
      if (
        ((this.fn = void 0),
        (this.refs = t),
        (this.refs = t),
        typeof r == 'function')
      ) {
        this.fn = r;
        return;
      }
      if (!tu(r, 'is'))
        throw new TypeError('`is:` is required for `when()` conditions');
      if (!r.then && !r.otherwise)
        throw new TypeError(
          'either `then:` or `otherwise:` is required for `when()` conditions'
        );
      let { is: n, then: i, otherwise: o } = r,
        a = typeof n == 'function' ? n : (...s) => s.every(u => u === n);
      this.fn = function (...s) {
        let u = s.pop(),
          l = s.pop(),
          d = a(...s) ? i : o;
        if (!!d) return typeof d == 'function' ? d(l) : l.concat(d.resolve(u));
      };
    }
    resolve(t, r) {
      let n = this.refs.map(o =>
          o.getValue(
            r == null ? void 0 : r.value,
            r == null ? void 0 : r.parent,
            r == null ? void 0 : r.context
          )
        ),
        i = this.fn.apply(t, n.concat(t, r));
      if (i === void 0 || i === t) return t;
      if (!Xw(i)) throw new TypeError('conditions must return a schema object');
      return i.resolve(r);
    }
  }
  function Qw(e) {
    return e == null ? [] : [].concat(e);
  }
  function Hf() {
    return (
      (Hf =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      Hf.apply(this, arguments)
    );
  }
  let SL = /\$\{\s*(\w+)\s*\}/g;
  class ct extends Error {
    static formatError(t, r) {
      const n = r.label || r.path || 'this';
      return (
        n !== r.path && (r = Hf({}, r, { path: n })),
        typeof t == 'string'
          ? t.replace(SL, (i, o) => ta(r[o]))
          : typeof t == 'function'
          ? t(r)
          : t
      );
    }
    static isError(t) {
      return t && t.name === 'ValidationError';
    }
    constructor(t, r, n, i) {
      super(),
        (this.value = void 0),
        (this.path = void 0),
        (this.type = void 0),
        (this.errors = void 0),
        (this.params = void 0),
        (this.inner = void 0),
        (this.name = 'ValidationError'),
        (this.value = r),
        (this.path = n),
        (this.type = i),
        (this.errors = []),
        (this.inner = []),
        Qw(t).forEach(o => {
          ct.isError(o)
            ? (this.errors.push(...o.errors),
              (this.inner = this.inner.concat(o.inner.length ? o.inner : o)))
            : this.errors.push(o);
        }),
        (this.message =
          this.errors.length > 1
            ? `${this.errors.length} errors occurred`
            : this.errors[0]),
        Error.captureStackTrace && Error.captureStackTrace(this, ct);
    }
  }
  const xL = e => {
    let t = !1;
    return (...r) => {
      t || ((t = !0), e(...r));
    };
  };
  function Vf(e, t) {
    let {
        endEarly: r,
        tests: n,
        args: i,
        value: o,
        errors: a,
        sort: s,
        path: u,
      } = e,
      l = xL(t),
      d = n.length;
    const f = [];
    if (((a = a || []), !d)) return a.length ? l(new ct(a, o, u)) : l(null, o);
    for (let c = 0; c < n.length; c++) {
      const g = n[c];
      g(i, function (v) {
        if (v) {
          if (!ct.isError(v)) return l(v, o);
          if (r) return (v.value = o), l(v, o);
          f.push(v);
        }
        if (--d <= 0) {
          if (
            (f.length && (s && f.sort(s), a.length && f.push(...a), (a = f)),
            a.length)
          ) {
            l(new ct(a, o, u), o);
            return;
          }
          l(null, o);
        }
      });
    }
  }
  var bL = Un,
    EL = (function () {
      try {
        var e = bL(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    OL = EL,
    rv = OL;
  function CL(e, t, r) {
    t == '__proto__' && rv
      ? rv(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var Zw = CL;
  function PL(e) {
    return function (t, r, n) {
      for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
        var u = a[e ? s : ++i];
        if (r(o[u], u, o) === !1) break;
      }
      return t;
    };
  }
  var $L = PL,
    kL = $L,
    TL = kL(),
    AL = TL;
  function NL(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  var FL = NL,
    ru = { exports: {} };
  function RL() {
    return !1;
  }
  var LL = RL;
  (function (e, t) {
    var r = $r,
      n = LL,
      i = t && !t.nodeType && t,
      o = i && !0 && e && !e.nodeType && e,
      a = o && o.exports === i,
      s = a ? r.Buffer : void 0,
      u = s ? s.isBuffer : void 0,
      l = u || n;
    e.exports = l;
  })(ru, ru.exports);
  var jL = pa,
    IL = Ip,
    DL = ha,
    ML = '[object Arguments]',
    UL = '[object Array]',
    zL = '[object Boolean]',
    BL = '[object Date]',
    HL = '[object Error]',
    VL = '[object Function]',
    WL = '[object Map]',
    KL = '[object Number]',
    qL = '[object Object]',
    YL = '[object RegExp]',
    GL = '[object Set]',
    XL = '[object String]',
    QL = '[object WeakMap]',
    ZL = '[object ArrayBuffer]',
    JL = '[object DataView]',
    ej = '[object Float32Array]',
    tj = '[object Float64Array]',
    rj = '[object Int8Array]',
    nj = '[object Int16Array]',
    ij = '[object Int32Array]',
    oj = '[object Uint8Array]',
    aj = '[object Uint8ClampedArray]',
    sj = '[object Uint16Array]',
    uj = '[object Uint32Array]',
    se = {};
  se[ej] =
    se[tj] =
    se[rj] =
    se[nj] =
    se[ij] =
    se[oj] =
    se[aj] =
    se[sj] =
    se[uj] =
      !0;
  se[ML] =
    se[UL] =
    se[ZL] =
    se[zL] =
    se[JL] =
    se[BL] =
    se[HL] =
    se[VL] =
    se[WL] =
    se[KL] =
    se[qL] =
    se[YL] =
    se[GL] =
    se[XL] =
    se[QL] =
      !1;
  function lj(e) {
    return DL(e) && IL(e.length) && !!se[jL(e)];
  }
  var cj = lj;
  function fj(e) {
    return function (t) {
      return e(t);
    };
  }
  var dj = fj,
    Wf = { exports: {} };
  (function (e, t) {
    var r = Dw,
      n = t && !t.nodeType && t,
      i = n && !0 && e && !e.nodeType && e,
      o = i && i.exports === n,
      a = o && r.process,
      s = (function () {
        try {
          var u = i && i.require && i.require('util').types;
          return u || (a && a.binding && a.binding('util'));
        } catch {}
      })();
    e.exports = s;
  })(Wf, Wf.exports);
  var pj = cj,
    hj = dj,
    nv = Wf.exports,
    iv = nv && nv.isTypedArray,
    gj = iv ? hj(iv) : pj,
    Jw = gj,
    mj = FL,
    vj = qw,
    yj = dn,
    wj = ru.exports,
    _j = Yw,
    Sj = Jw,
    xj = Object.prototype,
    bj = xj.hasOwnProperty;
  function Ej(e, t) {
    var r = yj(e),
      n = !r && vj(e),
      i = !r && !n && wj(e),
      o = !r && !n && !i && Sj(e),
      a = r || n || i || o,
      s = a ? mj(e.length, String) : [],
      u = s.length;
    for (var l in e)
      (t || bj.call(e, l)) &&
        !(
          a &&
          (l == 'length' ||
            (i && (l == 'offset' || l == 'parent')) ||
            (o && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
            _j(l, u))
        ) &&
        s.push(l);
    return s;
  }
  var Oj = Ej,
    Cj = Object.prototype;
  function Pj(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || Cj;
    return e === r;
  }
  var $j = Pj;
  function kj(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var Tj = kj,
    Aj = Tj,
    Nj = Aj(Object.keys, Object),
    Fj = Nj,
    Rj = $j,
    Lj = Fj,
    jj = Object.prototype,
    Ij = jj.hasOwnProperty;
  function Dj(e) {
    if (!Rj(e)) return Lj(e);
    var t = [];
    for (var r in Object(e)) Ij.call(e, r) && r != 'constructor' && t.push(r);
    return t;
  }
  var Mj = Dj,
    Uj = Uw,
    zj = Ip;
  function Bj(e) {
    return e != null && zj(e.length) && !Uj(e);
  }
  var Hj = Bj,
    Vj = Oj,
    Wj = Mj,
    Kj = Hj;
  function qj(e) {
    return Kj(e) ? Vj(e) : Wj(e);
  }
  var Dp = qj,
    Yj = AL,
    Gj = Dp;
  function Xj(e, t) {
    return e && Yj(e, t, Gj);
  }
  var e_ = Xj,
    Qj = ol;
  function Zj() {
    (this.__data__ = new Qj()), (this.size = 0);
  }
  var Jj = Zj;
  function eI(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  var tI = eI;
  function rI(e) {
    return this.__data__.get(e);
  }
  var nI = rI;
  function iI(e) {
    return this.__data__.has(e);
  }
  var oI = iI,
    aI = ol,
    sI = Rp,
    uI = Lp,
    lI = 200;
  function cI(e, t) {
    var r = this.__data__;
    if (r instanceof aI) {
      var n = r.__data__;
      if (!sI || n.length < lI - 1)
        return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new uI(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  var fI = cI,
    dI = ol,
    pI = Jj,
    hI = tI,
    gI = nI,
    mI = oI,
    vI = fI;
  function Ki(e) {
    var t = (this.__data__ = new dI(e));
    this.size = t.size;
  }
  Ki.prototype.clear = pI;
  Ki.prototype.delete = hI;
  Ki.prototype.get = gI;
  Ki.prototype.has = mI;
  Ki.prototype.set = vI;
  var t_ = Ki,
    yI = '__lodash_hash_undefined__';
  function wI(e) {
    return this.__data__.set(e, yI), this;
  }
  var _I = wI;
  function SI(e) {
    return this.__data__.has(e);
  }
  var xI = SI,
    bI = Lp,
    EI = _I,
    OI = xI;
  function nu(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.__data__ = new bI(); ++t < r; ) this.add(e[t]);
  }
  nu.prototype.add = nu.prototype.push = EI;
  nu.prototype.has = OI;
  var CI = nu;
  function PI(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
      if (t(e[r], r, e)) return !0;
    return !1;
  }
  var $I = PI;
  function kI(e, t) {
    return e.has(t);
  }
  var TI = kI,
    AI = CI,
    NI = $I,
    FI = TI,
    RI = 1,
    LI = 2;
  function jI(e, t, r, n, i, o) {
    var a = r & RI,
      s = e.length,
      u = t.length;
    if (s != u && !(a && u > s)) return !1;
    var l = o.get(e),
      d = o.get(t);
    if (l && d) return l == t && d == e;
    var f = -1,
      c = !0,
      g = r & LI ? new AI() : void 0;
    for (o.set(e, t), o.set(t, e); ++f < s; ) {
      var m = e[f],
        v = t[f];
      if (n) var S = a ? n(v, m, f, t, e, o) : n(m, v, f, e, t, o);
      if (S !== void 0) {
        if (S) continue;
        c = !1;
        break;
      }
      if (g) {
        if (
          !NI(t, function (h, p) {
            if (!FI(g, p) && (m === h || i(m, h, r, n, o))) return g.push(p);
          })
        ) {
          c = !1;
          break;
        }
      } else if (!(m === v || i(m, v, r, n, o))) {
        c = !1;
        break;
      }
    }
    return o.delete(e), o.delete(t), c;
  }
  var r_ = jI,
    II = $r,
    DI = II.Uint8Array,
    MI = DI;
  function UI(e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (n, i) {
        r[++t] = [i, n];
      }),
      r
    );
  }
  var zI = UI;
  function BI(e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (n) {
        r[++t] = n;
      }),
      r
    );
  }
  var HI = BI,
    ov = rl,
    av = MI,
    VI = Bw,
    WI = r_,
    KI = zI,
    qI = HI,
    YI = 1,
    GI = 2,
    XI = '[object Boolean]',
    QI = '[object Date]',
    ZI = '[object Error]',
    JI = '[object Map]',
    eD = '[object Number]',
    tD = '[object RegExp]',
    rD = '[object Set]',
    nD = '[object String]',
    iD = '[object Symbol]',
    oD = '[object ArrayBuffer]',
    aD = '[object DataView]',
    sv = ov ? ov.prototype : void 0,
    fc = sv ? sv.valueOf : void 0;
  function sD(e, t, r, n, i, o, a) {
    switch (r) {
      case aD:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
          return !1;
        (e = e.buffer), (t = t.buffer);
      case oD:
        return !(e.byteLength != t.byteLength || !o(new av(e), new av(t)));
      case XI:
      case QI:
      case eD:
        return VI(+e, +t);
      case ZI:
        return e.name == t.name && e.message == t.message;
      case tD:
      case nD:
        return e == t + '';
      case JI:
        var s = KI;
      case rD:
        var u = n & YI;
        if ((s || (s = qI), e.size != t.size && !u)) return !1;
        var l = a.get(e);
        if (l) return l == t;
        (n |= GI), a.set(e, t);
        var d = WI(s(e), s(t), n, i, o, a);
        return a.delete(e), d;
      case iD:
        if (fc) return fc.call(e) == fc.call(t);
    }
    return !1;
  }
  var uD = sD;
  function lD(e, t) {
    for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
    return e;
  }
  var cD = lD,
    fD = cD,
    dD = dn;
  function pD(e, t, r) {
    var n = t(e);
    return dD(e) ? n : fD(n, r(e));
  }
  var hD = pD;
  function gD(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
      var a = e[r];
      t(a, r, e) && (o[i++] = a);
    }
    return o;
  }
  var mD = gD;
  function vD() {
    return [];
  }
  var yD = vD,
    wD = mD,
    _D = yD,
    SD = Object.prototype,
    xD = SD.propertyIsEnumerable,
    uv = Object.getOwnPropertySymbols,
    bD = uv
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              wD(uv(e), function (t) {
                return xD.call(e, t);
              }));
        }
      : _D,
    ED = bD,
    OD = hD,
    CD = ED,
    PD = Dp;
  function $D(e) {
    return OD(e, PD, CD);
  }
  var kD = $D,
    lv = kD,
    TD = 1,
    AD = Object.prototype,
    ND = AD.hasOwnProperty;
  function FD(e, t, r, n, i, o) {
    var a = r & TD,
      s = lv(e),
      u = s.length,
      l = lv(t),
      d = l.length;
    if (u != d && !a) return !1;
    for (var f = u; f--; ) {
      var c = s[f];
      if (!(a ? c in t : ND.call(t, c))) return !1;
    }
    var g = o.get(e),
      m = o.get(t);
    if (g && m) return g == t && m == e;
    var v = !0;
    o.set(e, t), o.set(t, e);
    for (var S = a; ++f < u; ) {
      c = s[f];
      var h = e[c],
        p = t[c];
      if (n) var y = a ? n(p, h, c, t, e, o) : n(h, p, c, e, t, o);
      if (!(y === void 0 ? h === p || i(h, p, r, n, o) : y)) {
        v = !1;
        break;
      }
      S || (S = c == 'constructor');
    }
    if (v && !S) {
      var _ = e.constructor,
        x = t.constructor;
      _ != x &&
        'constructor' in e &&
        'constructor' in t &&
        !(
          typeof _ == 'function' &&
          _ instanceof _ &&
          typeof x == 'function' &&
          x instanceof x
        ) &&
        (v = !1);
    }
    return o.delete(e), o.delete(t), v;
  }
  var RD = FD,
    LD = Un,
    jD = $r,
    ID = LD(jD, 'DataView'),
    DD = ID,
    MD = Un,
    UD = $r,
    zD = MD(UD, 'Promise'),
    BD = zD,
    HD = Un,
    VD = $r,
    WD = HD(VD, 'Set'),
    KD = WD,
    qD = Un,
    YD = $r,
    GD = qD(YD, 'WeakMap'),
    XD = GD,
    Kf = DD,
    qf = Rp,
    Yf = BD,
    Gf = KD,
    Xf = XD,
    n_ = pa,
    qi = zw,
    cv = '[object Map]',
    QD = '[object Object]',
    fv = '[object Promise]',
    dv = '[object Set]',
    pv = '[object WeakMap]',
    hv = '[object DataView]',
    ZD = qi(Kf),
    JD = qi(qf),
    eM = qi(Yf),
    tM = qi(Gf),
    rM = qi(Xf),
    wn = n_;
  ((Kf && wn(new Kf(new ArrayBuffer(1))) != hv) ||
    (qf && wn(new qf()) != cv) ||
    (Yf && wn(Yf.resolve()) != fv) ||
    (Gf && wn(new Gf()) != dv) ||
    (Xf && wn(new Xf()) != pv)) &&
    (wn = function (e) {
      var t = n_(e),
        r = t == QD ? e.constructor : void 0,
        n = r ? qi(r) : '';
      if (n)
        switch (n) {
          case ZD:
            return hv;
          case JD:
            return cv;
          case eM:
            return fv;
          case tM:
            return dv;
          case rM:
            return pv;
        }
      return t;
    });
  var nM = wn,
    dc = t_,
    iM = r_,
    oM = uD,
    aM = RD,
    gv = nM,
    mv = dn,
    vv = ru.exports,
    sM = Jw,
    uM = 1,
    yv = '[object Arguments]',
    wv = '[object Array]',
    Ba = '[object Object]',
    lM = Object.prototype,
    _v = lM.hasOwnProperty;
  function cM(e, t, r, n, i, o) {
    var a = mv(e),
      s = mv(t),
      u = a ? wv : gv(e),
      l = s ? wv : gv(t);
    (u = u == yv ? Ba : u), (l = l == yv ? Ba : l);
    var d = u == Ba,
      f = l == Ba,
      c = u == l;
    if (c && vv(e)) {
      if (!vv(t)) return !1;
      (a = !0), (d = !1);
    }
    if (c && !d)
      return (
        o || (o = new dc()),
        a || sM(e) ? iM(e, t, r, n, i, o) : oM(e, t, u, r, n, i, o)
      );
    if (!(r & uM)) {
      var g = d && _v.call(e, '__wrapped__'),
        m = f && _v.call(t, '__wrapped__');
      if (g || m) {
        var v = g ? e.value() : e,
          S = m ? t.value() : t;
        return o || (o = new dc()), i(v, S, r, n, o);
      }
    }
    return c ? (o || (o = new dc()), aM(e, t, r, n, i, o)) : !1;
  }
  var fM = cM,
    dM = fM,
    Sv = ha;
  function i_(e, t, r, n, i) {
    return e === t
      ? !0
      : e == null || t == null || (!Sv(e) && !Sv(t))
      ? e !== e && t !== t
      : dM(e, t, r, n, i_, i);
  }
  var o_ = i_,
    pM = t_,
    hM = o_,
    gM = 1,
    mM = 2;
  function vM(e, t, r, n) {
    var i = r.length,
      o = i,
      a = !n;
    if (e == null) return !o;
    for (e = Object(e); i--; ) {
      var s = r[i];
      if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }
    for (; ++i < o; ) {
      s = r[i];
      var u = s[0],
        l = e[u],
        d = s[1];
      if (a && s[2]) {
        if (l === void 0 && !(u in e)) return !1;
      } else {
        var f = new pM();
        if (n) var c = n(l, d, u, e, t, f);
        if (!(c === void 0 ? hM(d, l, gM | mM, n, f) : c)) return !1;
      }
    }
    return !0;
  }
  var yM = vM,
    wM = Fp;
  function _M(e) {
    return e === e && !wM(e);
  }
  var a_ = _M,
    SM = a_,
    xM = Dp;
  function bM(e) {
    for (var t = xM(e), r = t.length; r--; ) {
      var n = t[r],
        i = e[n];
      t[r] = [n, i, SM(i)];
    }
    return t;
  }
  var EM = bM;
  function OM(e, t) {
    return function (r) {
      return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
    };
  }
  var s_ = OM,
    CM = yM,
    PM = EM,
    $M = s_;
  function kM(e) {
    var t = PM(e);
    return t.length == 1 && t[0][2]
      ? $M(t[0][0], t[0][1])
      : function (r) {
          return r === e || CM(r, e, t);
        };
  }
  var TM = kM,
    AM = Ww,
    NM = sl;
  function FM(e, t) {
    t = AM(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[NM(t[r++])];
    return r && r == n ? e : void 0;
  }
  var u_ = FM,
    RM = u_;
  function LM(e, t, r) {
    var n = e == null ? void 0 : RM(e, t);
    return n === void 0 ? r : n;
  }
  var jM = LM;
  function IM(e, t) {
    return e != null && t in Object(e);
  }
  var DM = IM,
    MM = DM,
    UM = Gw;
  function zM(e, t) {
    return e != null && UM(e, t, MM);
  }
  var BM = zM,
    HM = o_,
    VM = jM,
    WM = BM,
    KM = Np,
    qM = a_,
    YM = s_,
    GM = sl,
    XM = 1,
    QM = 2;
  function ZM(e, t) {
    return KM(e) && qM(t)
      ? YM(GM(e), t)
      : function (r) {
          var n = VM(r, e);
          return n === void 0 && n === t ? WM(r, e) : HM(t, n, XM | QM);
        };
  }
  var JM = ZM;
  function e8(e) {
    return e;
  }
  var t8 = e8;
  function r8(e) {
    return function (t) {
      return t == null ? void 0 : t[e];
    };
  }
  var n8 = r8,
    i8 = u_;
  function o8(e) {
    return function (t) {
      return i8(t, e);
    };
  }
  var a8 = o8,
    s8 = n8,
    u8 = a8,
    l8 = Np,
    c8 = sl;
  function f8(e) {
    return l8(e) ? s8(c8(e)) : u8(e);
  }
  var d8 = f8,
    p8 = TM,
    h8 = JM,
    g8 = t8,
    m8 = dn,
    v8 = d8;
  function y8(e) {
    return typeof e == 'function'
      ? e
      : e == null
      ? g8
      : typeof e == 'object'
      ? m8(e)
        ? h8(e[0], e[1])
        : p8(e)
      : v8(e);
  }
  var l_ = y8,
    w8 = Zw,
    _8 = e_,
    S8 = l_;
  function x8(e, t) {
    var r = {};
    return (
      (t = S8(t)),
      _8(e, function (n, i, o) {
        w8(r, i, t(n, i, o));
      }),
      r
    );
  }
  var c_ = x8;
  function zn(e) {
    (this._maxSize = e), this.clear();
  }
  zn.prototype.clear = function () {
    (this._size = 0), (this._values = Object.create(null));
  };
  zn.prototype.get = function (e) {
    return this._values[e];
  };
  zn.prototype.set = function (e, t) {
    return (
      this._size >= this._maxSize && this.clear(),
      e in this._values || this._size++,
      (this._values[e] = t)
    );
  };
  var b8 = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    f_ = /^\d+$/,
    E8 = /^\d/,
    O8 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    C8 = /^\s*(['"]?)(.*?)(\1)\s*$/,
    Mp = 512,
    xv = new zn(Mp),
    bv = new zn(Mp),
    Ev = new zn(Mp),
    ul = {
      Cache: zn,
      split: Qf,
      normalizePath: pc,
      setter: function (e) {
        var t = pc(e);
        return (
          bv.get(e) ||
          bv.set(e, function (n, i) {
            for (var o = 0, a = t.length, s = n; o < a - 1; ) {
              var u = t[o];
              if (u === '__proto__' || u === 'constructor' || u === 'prototype')
                return n;
              s = s[t[o++]];
            }
            s[t[o]] = i;
          })
        );
      },
      getter: function (e, t) {
        var r = pc(e);
        return (
          Ev.get(e) ||
          Ev.set(e, function (i) {
            for (var o = 0, a = r.length; o < a; )
              if (i != null || !t) i = i[r[o++]];
              else return;
            return i;
          })
        );
      },
      join: function (e) {
        return e.reduce(function (t, r) {
          return t + (Up(r) || f_.test(r) ? '[' + r + ']' : (t ? '.' : '') + r);
        }, '');
      },
      forEach: function (e, t, r) {
        P8(Array.isArray(e) ? e : Qf(e), t, r);
      },
    };
  function pc(e) {
    return (
      xv.get(e) ||
      xv.set(
        e,
        Qf(e).map(function (t) {
          return t.replace(C8, '$2');
        })
      )
    );
  }
  function Qf(e) {
    return e.match(b8) || [''];
  }
  function P8(e, t, r) {
    var n = e.length,
      i,
      o,
      a,
      s;
    for (o = 0; o < n; o++)
      (i = e[o]),
        i &&
          (T8(i) && (i = '"' + i + '"'),
          (s = Up(i)),
          (a = !s && /^\d+$/.test(i)),
          t.call(r, i, s, a, o, e));
  }
  function Up(e) {
    return typeof e == 'string' && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function $8(e) {
    return e.match(E8) && !e.match(f_);
  }
  function k8(e) {
    return O8.test(e);
  }
  function T8(e) {
    return !Up(e) && ($8(e) || k8(e));
  }
  const Ha = { context: '$', value: '.' };
  function d_(e, t) {
    return new wr(e, t);
  }
  class wr {
    constructor(t, r = {}) {
      if (
        ((this.key = void 0),
        (this.isContext = void 0),
        (this.isValue = void 0),
        (this.isSibling = void 0),
        (this.path = void 0),
        (this.getter = void 0),
        (this.map = void 0),
        typeof t != 'string')
      )
        throw new TypeError('ref must be a string, got: ' + t);
      if (((this.key = t.trim()), t === ''))
        throw new TypeError('ref must be a non-empty string');
      (this.isContext = this.key[0] === Ha.context),
        (this.isValue = this.key[0] === Ha.value),
        (this.isSibling = !this.isContext && !this.isValue);
      let n = this.isContext ? Ha.context : this.isValue ? Ha.value : '';
      (this.path = this.key.slice(n.length)),
        (this.getter = this.path && ul.getter(this.path, !0)),
        (this.map = r.map);
    }
    getValue(t, r, n) {
      let i = this.isContext ? n : this.isValue ? t : r;
      return (
        this.getter && (i = this.getter(i || {})),
        this.map && (i = this.map(i)),
        i
      );
    }
    cast(t, r) {
      return this.getValue(
        t,
        r == null ? void 0 : r.parent,
        r == null ? void 0 : r.context
      );
    }
    resolve() {
      return this;
    }
    describe() {
      return { type: 'ref', key: this.key };
    }
    toString() {
      return `Ref(${this.key})`;
    }
    static isRef(t) {
      return t && t.__isYupRef;
    }
  }
  wr.prototype.__isYupRef = !0;
  function iu() {
    return (
      (iu =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      iu.apply(this, arguments)
    );
  }
  function A8(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      i,
      o;
    for (o = 0; o < n.length; o++)
      (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r;
  }
  function Va(e) {
    function t(r, n) {
      let {
          value: i,
          path: o = '',
          label: a,
          options: s,
          originalValue: u,
          sync: l,
        } = r,
        d = A8(r, [
          'value',
          'path',
          'label',
          'options',
          'originalValue',
          'sync',
        ]);
      const { name: f, test: c, params: g, message: m } = e;
      let { parent: v, context: S } = s;
      function h(E) {
        return wr.isRef(E) ? E.getValue(i, v, S) : E;
      }
      function p(E = {}) {
        const $ = c_(
            iu(
              { value: i, originalValue: u, label: a, path: E.path || o },
              g,
              E.params
            ),
            h
          ),
          k = new ct(ct.formatError(E.message || m, $), i, $.path, E.type || f);
        return (k.params = $), k;
      }
      let y = iu(
        {
          path: o,
          parent: v,
          type: f,
          createError: p,
          resolve: h,
          options: s,
          originalValue: u,
        },
        d
      );
      if (!l) {
        try {
          Promise.resolve(c.call(y, i, y))
            .then(E => {
              ct.isError(E) ? n(E) : E ? n(null, E) : n(p());
            })
            .catch(n);
        } catch (E) {
          n(E);
        }
        return;
      }
      let _;
      try {
        var x;
        if (
          ((_ = c.call(y, i, y)),
          typeof ((x = _) == null ? void 0 : x.then) == 'function')
        )
          throw new Error(
            `Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
          );
      } catch (E) {
        n(E);
        return;
      }
      ct.isError(_) ? n(_) : _ ? n(null, _) : n(p());
    }
    return (t.OPTIONS = e), t;
  }
  let N8 = e => e.substr(0, e.length - 1).substr(1);
  function F8(e, t, r, n = r) {
    let i, o, a;
    return t
      ? (ul.forEach(t, (s, u, l) => {
          let d = u ? N8(s) : s;
          if (
            ((e = e.resolve({ context: n, parent: i, value: r })), e.innerType)
          ) {
            let f = l ? parseInt(d, 10) : 0;
            if (r && f >= r.length)
              throw new Error(
                `Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `
              );
            (i = r), (r = r && r[f]), (e = e.innerType);
          }
          if (!l) {
            if (!e.fields || !e.fields[d])
              throw new Error(
                `The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e._type}")`
              );
            (i = r), (r = r && r[d]), (e = e.fields[d]);
          }
          (o = d), (a = u ? '[' + s + ']' : '.' + s);
        }),
        { schema: e, parent: i, parentPath: o })
      : { parent: i, parentPath: t, schema: e };
  }
  class ou {
    constructor() {
      (this.list = void 0),
        (this.refs = void 0),
        (this.list = new Set()),
        (this.refs = new Map());
    }
    get size() {
      return this.list.size + this.refs.size;
    }
    describe() {
      const t = [];
      for (const r of this.list) t.push(r);
      for (const [, r] of this.refs) t.push(r.describe());
      return t;
    }
    toArray() {
      return Array.from(this.list).concat(Array.from(this.refs.values()));
    }
    resolveAll(t) {
      return this.toArray().reduce(
        (r, n) => r.concat(wr.isRef(n) ? t(n) : n),
        []
      );
    }
    add(t) {
      wr.isRef(t) ? this.refs.set(t.key, t) : this.list.add(t);
    }
    delete(t) {
      wr.isRef(t) ? this.refs.delete(t.key) : this.list.delete(t);
    }
    clone() {
      const t = new ou();
      return (t.list = new Set(this.list)), (t.refs = new Map(this.refs)), t;
    }
    merge(t, r) {
      const n = this.clone();
      return (
        t.list.forEach(i => n.add(i)),
        t.refs.forEach(i => n.add(i)),
        r.list.forEach(i => n.delete(i)),
        r.refs.forEach(i => n.delete(i)),
        n
      );
    }
  }
  function bt() {
    return (
      (bt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      bt.apply(this, arguments)
    );
  }
  class ot {
    constructor(t) {
      (this.deps = []),
        (this.tests = void 0),
        (this.transforms = void 0),
        (this.conditions = []),
        (this._mutate = void 0),
        (this._typeError = void 0),
        (this._whitelist = new ou()),
        (this._blacklist = new ou()),
        (this.exclusiveTests = Object.create(null)),
        (this.spec = void 0),
        (this.tests = []),
        (this.transforms = []),
        this.withMutation(() => {
          this.typeError(yn.notType);
        }),
        (this.type = (t == null ? void 0 : t.type) || 'mixed'),
        (this.spec = bt(
          {
            strip: !1,
            strict: !1,
            abortEarly: !0,
            recursive: !0,
            nullable: !1,
            presence: 'optional',
          },
          t == null ? void 0 : t.spec
        ));
    }
    get _type() {
      return this.type;
    }
    _typeCheck(t) {
      return !0;
    }
    clone(t) {
      if (this._mutate) return t && Object.assign(this.spec, t), this;
      const r = Object.create(Object.getPrototypeOf(this));
      return (
        (r.type = this.type),
        (r._typeError = this._typeError),
        (r._whitelistError = this._whitelistError),
        (r._blacklistError = this._blacklistError),
        (r._whitelist = this._whitelist.clone()),
        (r._blacklist = this._blacklist.clone()),
        (r.exclusiveTests = bt({}, this.exclusiveTests)),
        (r.deps = [...this.deps]),
        (r.conditions = [...this.conditions]),
        (r.tests = [...this.tests]),
        (r.transforms = [...this.transforms]),
        (r.spec = Uf(bt({}, this.spec, t))),
        r
      );
    }
    label(t) {
      let r = this.clone();
      return (r.spec.label = t), r;
    }
    meta(...t) {
      if (t.length === 0) return this.spec.meta;
      let r = this.clone();
      return (r.spec.meta = Object.assign(r.spec.meta || {}, t[0])), r;
    }
    withMutation(t) {
      let r = this._mutate;
      this._mutate = !0;
      let n = t(this);
      return (this._mutate = r), n;
    }
    concat(t) {
      if (!t || t === this) return this;
      if (t.type !== this.type && this.type !== 'mixed')
        throw new TypeError(
          `You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`
        );
      let r = this,
        n = t.clone();
      const i = bt({}, r.spec, n.spec);
      return (
        (n.spec = i),
        n._typeError || (n._typeError = r._typeError),
        n._whitelistError || (n._whitelistError = r._whitelistError),
        n._blacklistError || (n._blacklistError = r._blacklistError),
        (n._whitelist = r._whitelist.merge(t._whitelist, t._blacklist)),
        (n._blacklist = r._blacklist.merge(t._blacklist, t._whitelist)),
        (n.tests = r.tests),
        (n.exclusiveTests = r.exclusiveTests),
        n.withMutation(o => {
          t.tests.forEach(a => {
            o.test(a.OPTIONS);
          });
        }),
        (n.transforms = [...r.transforms, ...n.transforms]),
        n
      );
    }
    isType(t) {
      return this.spec.nullable && t === null ? !0 : this._typeCheck(t);
    }
    resolve(t) {
      let r = this;
      if (r.conditions.length) {
        let n = r.conditions;
        (r = r.clone()),
          (r.conditions = []),
          (r = n.reduce((i, o) => o.resolve(i, t), r)),
          (r = r.resolve(t));
      }
      return r;
    }
    cast(t, r = {}) {
      let n = this.resolve(bt({ value: t }, r)),
        i = n._cast(t, r);
      if (t !== void 0 && r.assert !== !1 && n.isType(i) !== !0) {
        let o = ta(t),
          a = ta(i);
        throw new TypeError(
          `The value of ${
            r.path || 'field'
          } could not be cast to a value that satisfies the schema type: "${
            n._type
          }". 

attempted value: ${o} 
` + (a !== o ? `result of cast: ${a}` : '')
        );
      }
      return i;
    }
    _cast(t, r) {
      let n =
        t === void 0
          ? t
          : this.transforms.reduce((i, o) => o.call(this, i, t, this), t);
      return n === void 0 && (n = this.getDefault()), n;
    }
    _validate(t, r = {}, n) {
      let {
          sync: i,
          path: o,
          from: a = [],
          originalValue: s = t,
          strict: u = this.spec.strict,
          abortEarly: l = this.spec.abortEarly,
        } = r,
        d = t;
      u || (d = this._cast(d, bt({ assert: !1 }, r)));
      let f = {
          value: d,
          path: o,
          options: r,
          originalValue: s,
          schema: this,
          label: this.spec.label,
          sync: i,
          from: a,
        },
        c = [];
      this._typeError && c.push(this._typeError);
      let g = [];
      this._whitelistError && g.push(this._whitelistError),
        this._blacklistError && g.push(this._blacklistError),
        Vf(
          { args: f, value: d, path: o, sync: i, tests: c, endEarly: l },
          m => {
            if (m) return void n(m, d);
            Vf(
              {
                tests: this.tests.concat(g),
                args: f,
                path: o,
                sync: i,
                value: d,
                endEarly: l,
              },
              n
            );
          }
        );
    }
    validate(t, r, n) {
      let i = this.resolve(bt({}, r, { value: t }));
      return typeof n == 'function'
        ? i._validate(t, r, n)
        : new Promise((o, a) =>
            i._validate(t, r, (s, u) => {
              s ? a(s) : o(u);
            })
          );
    }
    validateSync(t, r) {
      let n = this.resolve(bt({}, r, { value: t })),
        i;
      return (
        n._validate(t, bt({}, r, { sync: !0 }), (o, a) => {
          if (o) throw o;
          i = a;
        }),
        i
      );
    }
    isValid(t, r) {
      return this.validate(t, r).then(
        () => !0,
        n => {
          if (ct.isError(n)) return !1;
          throw n;
        }
      );
    }
    isValidSync(t, r) {
      try {
        return this.validateSync(t, r), !0;
      } catch (n) {
        if (ct.isError(n)) return !1;
        throw n;
      }
    }
    _getDefault() {
      let t = this.spec.default;
      return t == null ? t : typeof t == 'function' ? t.call(this) : Uf(t);
    }
    getDefault(t) {
      return this.resolve(t || {})._getDefault();
    }
    default(t) {
      return arguments.length === 0
        ? this._getDefault()
        : this.clone({ default: t });
    }
    strict(t = !0) {
      let r = this.clone();
      return (r.spec.strict = t), r;
    }
    _isPresent(t) {
      return t != null;
    }
    defined(t = yn.defined) {
      return this.test({
        message: t,
        name: 'defined',
        exclusive: !0,
        test(r) {
          return r !== void 0;
        },
      });
    }
    required(t = yn.required) {
      return this.clone({ presence: 'required' }).withMutation(r =>
        r.test({
          message: t,
          name: 'required',
          exclusive: !0,
          test(n) {
            return this.schema._isPresent(n);
          },
        })
      );
    }
    notRequired() {
      let t = this.clone({ presence: 'optional' });
      return (t.tests = t.tests.filter(r => r.OPTIONS.name !== 'required')), t;
    }
    nullable(t = !0) {
      return this.clone({ nullable: t !== !1 });
    }
    transform(t) {
      let r = this.clone();
      return r.transforms.push(t), r;
    }
    test(...t) {
      let r;
      if (
        (t.length === 1
          ? typeof t[0] == 'function'
            ? (r = { test: t[0] })
            : (r = t[0])
          : t.length === 2
          ? (r = { name: t[0], test: t[1] })
          : (r = { name: t[0], message: t[1], test: t[2] }),
        r.message === void 0 && (r.message = yn.default),
        typeof r.test != 'function')
      )
        throw new TypeError('`test` is a required parameters');
      let n = this.clone(),
        i = Va(r),
        o = r.exclusive || (r.name && n.exclusiveTests[r.name] === !0);
      if (r.exclusive && !r.name)
        throw new TypeError(
          'Exclusive tests must provide a unique `name` identifying the test'
        );
      return (
        r.name && (n.exclusiveTests[r.name] = !!r.exclusive),
        (n.tests = n.tests.filter(
          a =>
            !(
              a.OPTIONS.name === r.name &&
              (o || a.OPTIONS.test === i.OPTIONS.test)
            )
        )),
        n.tests.push(i),
        n
      );
    }
    when(t, r) {
      !Array.isArray(t) && typeof t != 'string' && ((r = t), (t = '.'));
      let n = this.clone(),
        i = Qw(t).map(o => new wr(o));
      return (
        i.forEach(o => {
          o.isSibling && n.deps.push(o.key);
        }),
        n.conditions.push(new _L(i, r)),
        n
      );
    }
    typeError(t) {
      let r = this.clone();
      return (
        (r._typeError = Va({
          message: t,
          name: 'typeError',
          test(n) {
            return n !== void 0 && !this.schema.isType(n)
              ? this.createError({ params: { type: this.schema._type } })
              : !0;
          },
        })),
        r
      );
    }
    oneOf(t, r = yn.oneOf) {
      let n = this.clone();
      return (
        t.forEach(i => {
          n._whitelist.add(i), n._blacklist.delete(i);
        }),
        (n._whitelistError = Va({
          message: r,
          name: 'oneOf',
          test(i) {
            if (i === void 0) return !0;
            let o = this.schema._whitelist,
              a = o.resolveAll(this.resolve);
            return a.includes(i)
              ? !0
              : this.createError({
                  params: { values: o.toArray().join(', '), resolved: a },
                });
          },
        })),
        n
      );
    }
    notOneOf(t, r = yn.notOneOf) {
      let n = this.clone();
      return (
        t.forEach(i => {
          n._blacklist.add(i), n._whitelist.delete(i);
        }),
        (n._blacklistError = Va({
          message: r,
          name: 'notOneOf',
          test(i) {
            let o = this.schema._blacklist,
              a = o.resolveAll(this.resolve);
            return a.includes(i)
              ? this.createError({
                  params: { values: o.toArray().join(', '), resolved: a },
                })
              : !0;
          },
        })),
        n
      );
    }
    strip(t = !0) {
      let r = this.clone();
      return (r.spec.strip = t), r;
    }
    describe() {
      const t = this.clone(),
        { label: r, meta: n } = t.spec;
      return {
        meta: n,
        label: r,
        type: t.type,
        oneOf: t._whitelist.describe(),
        notOneOf: t._blacklist.describe(),
        tests: t.tests
          .map(o => ({ name: o.OPTIONS.name, params: o.OPTIONS.params }))
          .filter((o, a, s) => s.findIndex(u => u.name === o.name) === a),
      };
    }
  }
  ot.prototype.__isYupSchema__ = !0;
  for (const e of ['validate', 'validateSync'])
    ot.prototype[`${e}At`] = function (t, r, n = {}) {
      const { parent: i, parentPath: o, schema: a } = F8(this, t, r, n.context);
      return a[e](i && i[o], bt({}, n, { parent: i, path: t }));
    };
  for (const e of ['equals', 'is']) ot.prototype[e] = ot.prototype.oneOf;
  for (const e of ['not', 'nope']) ot.prototype[e] = ot.prototype.notOneOf;
  ot.prototype.optional = ot.prototype.notRequired;
  const R8 = ot;
  R8.prototype;
  const Ut = e => e == null;
  let L8 =
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
    j8 =
      /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    I8 =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
    D8 = e => Ut(e) || e === e.trim(),
    M8 = {}.toString();
  function ye() {
    return new p_();
  }
  class p_ extends ot {
    constructor() {
      super({ type: 'string' }),
        this.withMutation(() => {
          this.transform(function (t) {
            if (this.isType(t) || Array.isArray(t)) return t;
            const r = t != null && t.toString ? t.toString() : t;
            return r === M8 ? t : r;
          });
        });
    }
    _typeCheck(t) {
      return t instanceof String && (t = t.valueOf()), typeof t == 'string';
    }
    _isPresent(t) {
      return super._isPresent(t) && !!t.length;
    }
    length(t, r = Dt.length) {
      return this.test({
        message: r,
        name: 'length',
        exclusive: !0,
        params: { length: t },
        test(n) {
          return Ut(n) || n.length === this.resolve(t);
        },
      });
    }
    min(t, r = Dt.min) {
      return this.test({
        message: r,
        name: 'min',
        exclusive: !0,
        params: { min: t },
        test(n) {
          return Ut(n) || n.length >= this.resolve(t);
        },
      });
    }
    max(t, r = Dt.max) {
      return this.test({
        name: 'max',
        exclusive: !0,
        message: r,
        params: { max: t },
        test(n) {
          return Ut(n) || n.length <= this.resolve(t);
        },
      });
    }
    matches(t, r) {
      let n = !1,
        i,
        o;
      return (
        r &&
          (typeof r == 'object'
            ? ({ excludeEmptyString: n = !1, message: i, name: o } = r)
            : (i = r)),
        this.test({
          name: o || 'matches',
          message: i || Dt.matches,
          params: { regex: t },
          test: a => Ut(a) || (a === '' && n) || a.search(t) !== -1,
        })
      );
    }
    email(t = Dt.email) {
      return this.matches(L8, {
        name: 'email',
        message: t,
        excludeEmptyString: !0,
      });
    }
    url(t = Dt.url) {
      return this.matches(j8, {
        name: 'url',
        message: t,
        excludeEmptyString: !0,
      });
    }
    uuid(t = Dt.uuid) {
      return this.matches(I8, {
        name: 'uuid',
        message: t,
        excludeEmptyString: !1,
      });
    }
    ensure() {
      return this.default('').transform(t => (t === null ? '' : t));
    }
    trim(t = Dt.trim) {
      return this.transform(r => (r != null ? r.trim() : r)).test({
        message: t,
        name: 'trim',
        test: D8,
      });
    }
    lowercase(t = Dt.lowercase) {
      return this.transform(r => (Ut(r) ? r : r.toLowerCase())).test({
        message: t,
        name: 'string_case',
        exclusive: !0,
        test: r => Ut(r) || r === r.toLowerCase(),
      });
    }
    uppercase(t = Dt.uppercase) {
      return this.transform(r => (Ut(r) ? r : r.toUpperCase())).test({
        message: t,
        name: 'string_case',
        exclusive: !0,
        test: r => Ut(r) || r === r.toUpperCase(),
      });
    }
  }
  ye.prototype = p_.prototype;
  var U8 =
    /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function z8(e) {
    var t = [1, 4, 5, 6, 7, 10, 11],
      r = 0,
      n,
      i;
    if ((i = U8.exec(e))) {
      for (var o = 0, a; (a = t[o]); ++o) i[a] = +i[a] || 0;
      (i[2] = (+i[2] || 1) - 1),
        (i[3] = +i[3] || 1),
        (i[7] = i[7] ? String(i[7]).substr(0, 3) : 0),
        (i[8] === void 0 || i[8] === '') && (i[9] === void 0 || i[9] === '')
          ? (n = +new Date(i[1], i[2], i[3], i[4], i[5], i[6], i[7]))
          : (i[8] !== 'Z' &&
              i[9] !== void 0 &&
              ((r = i[10] * 60 + i[11]), i[9] === '+' && (r = 0 - r)),
            (n = Date.UTC(i[1], i[2], i[3], i[4], i[5] + r, i[6], i[7])));
    } else n = Date.parse ? Date.parse(e) : NaN;
    return n;
  }
  let h_ = new Date(''),
    B8 = e => Object.prototype.toString.call(e) === '[object Date]';
  class g_ extends ot {
    constructor() {
      super({ type: 'date' }),
        this.withMutation(() => {
          this.transform(function (t) {
            return this.isType(t)
              ? t
              : ((t = z8(t)), isNaN(t) ? h_ : new Date(t));
          });
        });
    }
    _typeCheck(t) {
      return B8(t) && !isNaN(t.getTime());
    }
    prepareParam(t, r) {
      let n;
      if (wr.isRef(t)) n = t;
      else {
        let i = this.cast(t);
        if (!this._typeCheck(i))
          throw new TypeError(
            `\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`
          );
        n = i;
      }
      return n;
    }
    min(t, r = zf.min) {
      let n = this.prepareParam(t, 'min');
      return this.test({
        message: r,
        name: 'min',
        exclusive: !0,
        params: { min: t },
        test(i) {
          return Ut(i) || i >= this.resolve(n);
        },
      });
    }
    max(t, r = zf.max) {
      let n = this.prepareParam(t, 'max');
      return this.test({
        message: r,
        name: 'max',
        exclusive: !0,
        params: { max: t },
        test(i) {
          return Ut(i) || i <= this.resolve(n);
        },
      });
    }
  }
  g_.INVALID_DATE = h_;
  g_.prototype;
  function H8(e, t, r, n) {
    var i = -1,
      o = e == null ? 0 : e.length;
    for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
    return r;
  }
  var V8 = H8;
  function W8(e) {
    return function (t) {
      return e == null ? void 0 : e[t];
    };
  }
  var K8 = W8,
    q8 = K8,
    Y8 = {
      À: 'A',
      Á: 'A',
      Â: 'A',
      Ã: 'A',
      Ä: 'A',
      Å: 'A',
      à: 'a',
      á: 'a',
      â: 'a',
      ã: 'a',
      ä: 'a',
      å: 'a',
      Ç: 'C',
      ç: 'c',
      Ð: 'D',
      ð: 'd',
      È: 'E',
      É: 'E',
      Ê: 'E',
      Ë: 'E',
      è: 'e',
      é: 'e',
      ê: 'e',
      ë: 'e',
      Ì: 'I',
      Í: 'I',
      Î: 'I',
      Ï: 'I',
      ì: 'i',
      í: 'i',
      î: 'i',
      ï: 'i',
      Ñ: 'N',
      ñ: 'n',
      Ò: 'O',
      Ó: 'O',
      Ô: 'O',
      Õ: 'O',
      Ö: 'O',
      Ø: 'O',
      ò: 'o',
      ó: 'o',
      ô: 'o',
      õ: 'o',
      ö: 'o',
      ø: 'o',
      Ù: 'U',
      Ú: 'U',
      Û: 'U',
      Ü: 'U',
      ù: 'u',
      ú: 'u',
      û: 'u',
      ü: 'u',
      Ý: 'Y',
      ý: 'y',
      ÿ: 'y',
      Æ: 'Ae',
      æ: 'ae',
      Þ: 'Th',
      þ: 'th',
      ß: 'ss',
      Ā: 'A',
      Ă: 'A',
      Ą: 'A',
      ā: 'a',
      ă: 'a',
      ą: 'a',
      Ć: 'C',
      Ĉ: 'C',
      Ċ: 'C',
      Č: 'C',
      ć: 'c',
      ĉ: 'c',
      ċ: 'c',
      č: 'c',
      Ď: 'D',
      Đ: 'D',
      ď: 'd',
      đ: 'd',
      Ē: 'E',
      Ĕ: 'E',
      Ė: 'E',
      Ę: 'E',
      Ě: 'E',
      ē: 'e',
      ĕ: 'e',
      ė: 'e',
      ę: 'e',
      ě: 'e',
      Ĝ: 'G',
      Ğ: 'G',
      Ġ: 'G',
      Ģ: 'G',
      ĝ: 'g',
      ğ: 'g',
      ġ: 'g',
      ģ: 'g',
      Ĥ: 'H',
      Ħ: 'H',
      ĥ: 'h',
      ħ: 'h',
      Ĩ: 'I',
      Ī: 'I',
      Ĭ: 'I',
      Į: 'I',
      İ: 'I',
      ĩ: 'i',
      ī: 'i',
      ĭ: 'i',
      į: 'i',
      ı: 'i',
      Ĵ: 'J',
      ĵ: 'j',
      Ķ: 'K',
      ķ: 'k',
      ĸ: 'k',
      Ĺ: 'L',
      Ļ: 'L',
      Ľ: 'L',
      Ŀ: 'L',
      Ł: 'L',
      ĺ: 'l',
      ļ: 'l',
      ľ: 'l',
      ŀ: 'l',
      ł: 'l',
      Ń: 'N',
      Ņ: 'N',
      Ň: 'N',
      Ŋ: 'N',
      ń: 'n',
      ņ: 'n',
      ň: 'n',
      ŋ: 'n',
      Ō: 'O',
      Ŏ: 'O',
      Ő: 'O',
      ō: 'o',
      ŏ: 'o',
      ő: 'o',
      Ŕ: 'R',
      Ŗ: 'R',
      Ř: 'R',
      ŕ: 'r',
      ŗ: 'r',
      ř: 'r',
      Ś: 'S',
      Ŝ: 'S',
      Ş: 'S',
      Š: 'S',
      ś: 's',
      ŝ: 's',
      ş: 's',
      š: 's',
      Ţ: 'T',
      Ť: 'T',
      Ŧ: 'T',
      ţ: 't',
      ť: 't',
      ŧ: 't',
      Ũ: 'U',
      Ū: 'U',
      Ŭ: 'U',
      Ů: 'U',
      Ű: 'U',
      Ų: 'U',
      ũ: 'u',
      ū: 'u',
      ŭ: 'u',
      ů: 'u',
      ű: 'u',
      ų: 'u',
      Ŵ: 'W',
      ŵ: 'w',
      Ŷ: 'Y',
      ŷ: 'y',
      Ÿ: 'Y',
      Ź: 'Z',
      Ż: 'Z',
      Ž: 'Z',
      ź: 'z',
      ż: 'z',
      ž: 'z',
      Ĳ: 'IJ',
      ĳ: 'ij',
      Œ: 'Oe',
      œ: 'oe',
      ŉ: "'n",
      ſ: 's',
    },
    G8 = q8(Y8),
    X8 = G8,
    Q8 = X8,
    Z8 = ga,
    J8 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    e5 = '\\u0300-\\u036f',
    t5 = '\\ufe20-\\ufe2f',
    r5 = '\\u20d0-\\u20ff',
    n5 = e5 + t5 + r5,
    i5 = '[' + n5 + ']',
    o5 = RegExp(i5, 'g');
  function a5(e) {
    return (e = Z8(e)), e && e.replace(J8, Q8).replace(o5, '');
  }
  var s5 = a5,
    u5 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  function l5(e) {
    return e.match(u5) || [];
  }
  var c5 = l5,
    f5 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  function d5(e) {
    return f5.test(e);
  }
  var p5 = d5,
    m_ = '\\ud800-\\udfff',
    h5 = '\\u0300-\\u036f',
    g5 = '\\ufe20-\\ufe2f',
    m5 = '\\u20d0-\\u20ff',
    v5 = h5 + g5 + m5,
    v_ = '\\u2700-\\u27bf',
    y_ = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    y5 = '\\xac\\xb1\\xd7\\xf7',
    w5 = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    _5 = '\\u2000-\\u206f',
    S5 =
      ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    w_ = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    x5 = '\\ufe0e\\ufe0f',
    __ = y5 + w5 + _5 + S5,
    S_ = "['\u2019]",
    Ov = '[' + __ + ']',
    b5 = '[' + v5 + ']',
    x_ = '\\d+',
    E5 = '[' + v_ + ']',
    b_ = '[' + y_ + ']',
    E_ = '[^' + m_ + __ + x_ + v_ + y_ + w_ + ']',
    O5 = '\\ud83c[\\udffb-\\udfff]',
    C5 = '(?:' + b5 + '|' + O5 + ')',
    P5 = '[^' + m_ + ']',
    O_ = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    C_ = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    Zn = '[' + w_ + ']',
    $5 = '\\u200d',
    Cv = '(?:' + b_ + '|' + E_ + ')',
    k5 = '(?:' + Zn + '|' + E_ + ')',
    Pv = '(?:' + S_ + '(?:d|ll|m|re|s|t|ve))?',
    $v = '(?:' + S_ + '(?:D|LL|M|RE|S|T|VE))?',
    P_ = C5 + '?',
    $_ = '[' + x5 + ']?',
    T5 = '(?:' + $5 + '(?:' + [P5, O_, C_].join('|') + ')' + $_ + P_ + ')*',
    A5 = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    N5 = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    F5 = $_ + P_ + T5,
    R5 = '(?:' + [E5, O_, C_].join('|') + ')' + F5,
    L5 = RegExp(
      [
        Zn + '?' + b_ + '+' + Pv + '(?=' + [Ov, Zn, '$'].join('|') + ')',
        k5 + '+' + $v + '(?=' + [Ov, Zn + Cv, '$'].join('|') + ')',
        Zn + '?' + Cv + '+' + Pv,
        Zn + '+' + $v,
        N5,
        A5,
        x_,
        R5,
      ].join('|'),
      'g'
    );
  function j5(e) {
    return e.match(L5) || [];
  }
  var I5 = j5,
    D5 = c5,
    M5 = p5,
    U5 = ga,
    z5 = I5;
  function B5(e, t, r) {
    return (
      (e = U5(e)),
      (t = r ? void 0 : t),
      t === void 0 ? (M5(e) ? z5(e) : D5(e)) : e.match(t) || []
    );
  }
  var H5 = B5,
    V5 = V8,
    W5 = s5,
    K5 = H5,
    q5 = "['\u2019]",
    Y5 = RegExp(q5, 'g');
  function G5(e) {
    return function (t) {
      return V5(K5(W5(t).replace(Y5, '')), e, '');
    };
  }
  var k_ = G5,
    X5 = k_,
    Q5 = X5(function (e, t, r) {
      return e + (r ? '_' : '') + t.toLowerCase();
    }),
    kv = Q5;
  function Z5(e, t, r) {
    var n = -1,
      i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t),
      (r = r > i ? i : r),
      r < 0 && (r += i),
      (i = t > r ? 0 : (r - t) >>> 0),
      (t >>>= 0);
    for (var o = Array(i); ++n < i; ) o[n] = e[n + t];
    return o;
  }
  var J5 = Z5,
    eU = J5;
  function tU(e, t, r) {
    var n = e.length;
    return (r = r === void 0 ? n : r), !t && r >= n ? e : eU(e, t, r);
  }
  var rU = tU,
    nU = '\\ud800-\\udfff',
    iU = '\\u0300-\\u036f',
    oU = '\\ufe20-\\ufe2f',
    aU = '\\u20d0-\\u20ff',
    sU = iU + oU + aU,
    uU = '\\ufe0e\\ufe0f',
    lU = '\\u200d',
    cU = RegExp('[' + lU + nU + sU + uU + ']');
  function fU(e) {
    return cU.test(e);
  }
  var T_ = fU;
  function dU(e) {
    return e.split('');
  }
  var pU = dU,
    A_ = '\\ud800-\\udfff',
    hU = '\\u0300-\\u036f',
    gU = '\\ufe20-\\ufe2f',
    mU = '\\u20d0-\\u20ff',
    vU = hU + gU + mU,
    yU = '\\ufe0e\\ufe0f',
    wU = '[' + A_ + ']',
    Zf = '[' + vU + ']',
    Jf = '\\ud83c[\\udffb-\\udfff]',
    _U = '(?:' + Zf + '|' + Jf + ')',
    N_ = '[^' + A_ + ']',
    F_ = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    R_ = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    SU = '\\u200d',
    L_ = _U + '?',
    j_ = '[' + yU + ']?',
    xU = '(?:' + SU + '(?:' + [N_, F_, R_].join('|') + ')' + j_ + L_ + ')*',
    bU = j_ + L_ + xU,
    EU = '(?:' + [N_ + Zf + '?', Zf, F_, R_, wU].join('|') + ')',
    OU = RegExp(Jf + '(?=' + Jf + ')|' + EU + bU, 'g');
  function CU(e) {
    return e.match(OU) || [];
  }
  var PU = CU,
    $U = pU,
    kU = T_,
    TU = PU;
  function AU(e) {
    return kU(e) ? TU(e) : $U(e);
  }
  var NU = AU,
    FU = rU,
    RU = T_,
    LU = NU,
    jU = ga;
  function IU(e) {
    return function (t) {
      t = jU(t);
      var r = RU(t) ? LU(t) : void 0,
        n = r ? r[0] : t.charAt(0),
        i = r ? FU(r, 1).join('') : t.slice(1);
      return n[e]() + i;
    };
  }
  var DU = IU,
    MU = DU,
    UU = MU('toUpperCase'),
    zU = UU,
    BU = ga,
    HU = zU;
  function VU(e) {
    return HU(BU(e).toLowerCase());
  }
  var WU = VU,
    KU = WU,
    qU = k_,
    YU = qU(function (e, t, r) {
      return (t = t.toLowerCase()), e + (r ? KU(t) : t);
    }),
    GU = YU,
    XU = Zw,
    QU = e_,
    ZU = l_;
  function JU(e, t) {
    var r = {};
    return (
      (t = ZU(t)),
      QU(e, function (n, i, o) {
        XU(r, t(n, i, o), n);
      }),
      r
    );
  }
  var e6 = JU,
    zp = { exports: {} };
  zp.exports = function (e) {
    return I_(t6(e), e);
  };
  zp.exports.array = I_;
  function I_(e, t) {
    var r = e.length,
      n = new Array(r),
      i = {},
      o = r,
      a = r6(t),
      s = n6(e);
    for (
      t.forEach(function (l) {
        if (!s.has(l[0]) || !s.has(l[1]))
          throw new Error(
            'Unknown node. There is an unknown node in the supplied edges.'
          );
      });
      o--;

    )
      i[o] || u(e[o], o, new Set());
    return n;
    function u(l, d, f) {
      if (f.has(l)) {
        var c;
        try {
          c = ', node was:' + JSON.stringify(l);
        } catch {
          c = '';
        }
        throw new Error('Cyclic dependency' + c);
      }
      if (!s.has(l))
        throw new Error(
          'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' +
            JSON.stringify(l)
        );
      if (!i[d]) {
        i[d] = !0;
        var g = a.get(l) || new Set();
        if (((g = Array.from(g)), (d = g.length))) {
          f.add(l);
          do {
            var m = g[--d];
            u(m, s.get(m), f);
          } while (d);
          f.delete(l);
        }
        n[--r] = l;
      }
    }
  }
  function t6(e) {
    for (var t = new Set(), r = 0, n = e.length; r < n; r++) {
      var i = e[r];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function r6(e) {
    for (var t = new Map(), r = 0, n = e.length; r < n; r++) {
      var i = e[r];
      t.has(i[0]) || t.set(i[0], new Set()),
        t.has(i[1]) || t.set(i[1], new Set()),
        t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function n6(e) {
    for (var t = new Map(), r = 0, n = e.length; r < n; r++) t.set(e[r], r);
    return t;
  }
  function i6(e, t = []) {
    let r = [],
      n = new Set(),
      i = new Set(t.map(([a, s]) => `${a}-${s}`));
    function o(a, s) {
      let u = ul.split(a)[0];
      n.add(u), i.has(`${s}-${u}`) || r.push([s, u]);
    }
    for (const a in e)
      if (tu(e, a)) {
        let s = e[a];
        n.add(a),
          wr.isRef(s) && s.isSibling
            ? o(s.path, a)
            : Xw(s) && 'deps' in s && s.deps.forEach(u => o(u, a));
      }
    return zp.exports.array(Array.from(n), r).reverse();
  }
  function Tv(e, t) {
    let r = 1 / 0;
    return (
      e.some((n, i) => {
        var o;
        if (((o = t.path) == null ? void 0 : o.indexOf(n)) !== -1)
          return (r = i), !0;
      }),
      r
    );
  }
  function D_(e) {
    return (t, r) => Tv(e, t) - Tv(e, r);
  }
  function pi() {
    return (
      (pi =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      pi.apply(this, arguments)
    );
  }
  let Av = e => Object.prototype.toString.call(e) === '[object Object]';
  function o6(e, t) {
    let r = Object.keys(e.fields);
    return Object.keys(t).filter(n => r.indexOf(n) === -1);
  }
  const a6 = D_([]);
  class M_ extends ot {
    constructor(t) {
      super({ type: 'object' }),
        (this.fields = Object.create(null)),
        (this._sortErrors = a6),
        (this._nodes = []),
        (this._excludedEdges = []),
        this.withMutation(() => {
          this.transform(function (n) {
            if (typeof n == 'string')
              try {
                n = JSON.parse(n);
              } catch {
                n = null;
              }
            return this.isType(n) ? n : null;
          }),
            t && this.shape(t);
        });
    }
    _typeCheck(t) {
      return Av(t) || typeof t == 'function';
    }
    _cast(t, r = {}) {
      var n;
      let i = super._cast(t, r);
      if (i === void 0) return this.getDefault();
      if (!this._typeCheck(i)) return i;
      let o = this.fields,
        a = (n = r.stripUnknown) != null ? n : this.spec.noUnknown,
        s = this._nodes.concat(
          Object.keys(i).filter(f => this._nodes.indexOf(f) === -1)
        ),
        u = {},
        l = pi({}, r, { parent: u, __validating: r.__validating || !1 }),
        d = !1;
      for (const f of s) {
        let c = o[f],
          g = tu(i, f);
        if (c) {
          let m,
            v = i[f];
          (l.path = (r.path ? `${r.path}.` : '') + f),
            (c = c.resolve({ value: v, context: r.context, parent: u }));
          let S = 'spec' in c ? c.spec : void 0,
            h = S == null ? void 0 : S.strict;
          if (S != null && S.strip) {
            d = d || f in i;
            continue;
          }
          (m = !r.__validating || !h ? c.cast(i[f], l) : i[f]),
            m !== void 0 && (u[f] = m);
        } else g && !a && (u[f] = i[f]);
        u[f] !== i[f] && (d = !0);
      }
      return d ? u : i;
    }
    _validate(t, r = {}, n) {
      let i = [],
        {
          sync: o,
          from: a = [],
          originalValue: s = t,
          abortEarly: u = this.spec.abortEarly,
          recursive: l = this.spec.recursive,
        } = r;
      (a = [{ schema: this, value: s }, ...a]),
        (r.__validating = !0),
        (r.originalValue = s),
        (r.from = a),
        super._validate(t, r, (d, f) => {
          if (d) {
            if (!ct.isError(d) || u) return void n(d, f);
            i.push(d);
          }
          if (!l || !Av(f)) {
            n(i[0] || null, f);
            return;
          }
          s = s || f;
          let c = this._nodes.map(g => (m, v) => {
            let S =
                g.indexOf('.') === -1
                  ? (r.path ? `${r.path}.` : '') + g
                  : `${r.path || ''}["${g}"]`,
              h = this.fields[g];
            if (h && 'validate' in h) {
              h.validate(
                f[g],
                pi({}, r, {
                  path: S,
                  from: a,
                  strict: !0,
                  parent: f,
                  originalValue: s[g],
                }),
                v
              );
              return;
            }
            v(null);
          });
          Vf(
            {
              sync: o,
              tests: c,
              value: f,
              errors: i,
              endEarly: u,
              sort: this._sortErrors,
              path: r.path,
            },
            n
          );
        });
    }
    clone(t) {
      const r = super.clone(t);
      return (
        (r.fields = pi({}, this.fields)),
        (r._nodes = this._nodes),
        (r._excludedEdges = this._excludedEdges),
        (r._sortErrors = this._sortErrors),
        r
      );
    }
    concat(t) {
      let r = super.concat(t),
        n = r.fields;
      for (let [i, o] of Object.entries(this.fields)) {
        const a = n[i];
        a === void 0
          ? (n[i] = o)
          : a instanceof ot && o instanceof ot && (n[i] = o.concat(a));
      }
      return r.withMutation(() => r.shape(n, this._excludedEdges));
    }
    getDefaultFromShape() {
      let t = {};
      return (
        this._nodes.forEach(r => {
          const n = this.fields[r];
          t[r] = 'default' in n ? n.getDefault() : void 0;
        }),
        t
      );
    }
    _getDefault() {
      if ('default' in this.spec) return super._getDefault();
      if (!!this._nodes.length) return this.getDefaultFromShape();
    }
    shape(t, r = []) {
      let n = this.clone(),
        i = Object.assign(n.fields, t);
      return (
        (n.fields = i),
        (n._sortErrors = D_(Object.keys(i))),
        r.length &&
          (Array.isArray(r[0]) || (r = [r]),
          (n._excludedEdges = [...n._excludedEdges, ...r])),
        (n._nodes = i6(i, n._excludedEdges)),
        n
      );
    }
    pick(t) {
      const r = {};
      for (const n of t) this.fields[n] && (r[n] = this.fields[n]);
      return this.clone().withMutation(n => ((n.fields = {}), n.shape(r)));
    }
    omit(t) {
      const r = this.clone(),
        n = r.fields;
      r.fields = {};
      for (const i of t) delete n[i];
      return r.withMutation(() => r.shape(n));
    }
    from(t, r, n) {
      let i = ul.getter(t, !0);
      return this.transform(o => {
        if (o == null) return o;
        let a = o;
        return (
          tu(o, t) && ((a = pi({}, o)), n || delete a[t], (a[r] = i(o))), a
        );
      });
    }
    noUnknown(t = !0, r = Bf.noUnknown) {
      typeof t == 'string' && ((r = t), (t = !0));
      let n = this.test({
        name: 'noUnknown',
        exclusive: !0,
        message: r,
        test(i) {
          if (i == null) return !0;
          const o = o6(this.schema, i);
          return (
            !t ||
            o.length === 0 ||
            this.createError({ params: { unknown: o.join(', ') } })
          );
        },
      });
      return (n.spec.noUnknown = t), n;
    }
    unknown(t = !0, r = Bf.noUnknown) {
      return this.noUnknown(!t, r);
    }
    transformKeys(t) {
      return this.transform(r => r && e6(r, (n, i) => t(i)));
    }
    camelCase() {
      return this.transformKeys(GU);
    }
    snakeCase() {
      return this.transformKeys(kv);
    }
    constantCase() {
      return this.transformKeys(t => kv(t).toUpperCase());
    }
    describe() {
      let t = super.describe();
      return (t.fields = c_(this.fields, r => r.describe())), t;
    }
  }
  function Bn(e) {
    return new M_(e);
  }
  Bn.prototype = M_.prototype;
  const s6 = { oldPassword: '', newPassword: '', repeatPassword: '' },
    u6 = Bn().shape({
      oldPassword: ye()
        .required('Required')
        .matches(eu, {
          message:
            'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
        }),
      newPassword: ye()
        .required('Required')
        .matches(eu, {
          message:
            'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
        }),
      repeatPassword: ye()
        .oneOf([d_('newPassword'), null], 'Passwords must match')
        .required('Required'),
    }),
    l6 = () => {
      const e = ua(),
        { t } = xe(),
        r = Rt(),
        n = () => r('/settings'),
        i = f => {
          e(ds(f))
            .unwrap()
            .catch()
            .then(() => {
              n();
            });
        },
        {
          values: o,
          errors: a,
          touched: s,
          handleChange: u,
          handleSubmit: l,
          handleBlur: d,
        } = da({
          initialValues: s6,
          validationSchema: u6,
          onSubmit: f => {
            i(f);
          },
        });
      return w('div', {
        children: L($p, {
          onSubmit: l,
          buttonsBlock: L('div', {
            className: Se.form_button_box,
            children: [
              w(fe, { regular: !0, type: 'submit', children: t('save') }),
              w(fe, { regular: !0, onClick: n, children: t('goBack') }),
            ],
          }),
          children: [
            w(st, {
              label: t('oldPassword'),
              name: 'oldPassword',
              type: 'password',
              className: 'regular',
              value: o.oldPassword,
              onChange: u,
              onBlur: d,
              showError: Boolean(a.oldPassword) && Boolean(s.oldPassword),
              error: a.oldPassword,
            }),
            w(st, {
              label: t('newPassword'),
              name: 'newPassword',
              type: 'password',
              className: 'regular',
              value: o.newPassword,
              onChange: u,
              onBlur: d,
              showError: Boolean(a.newPassword) && Boolean(s.newPassword),
              error: a.newPassword,
            }),
            w(st, {
              label: t('newPasswordAgain'),
              name: 'repeatPassword',
              type: 'password',
              className: 'regular',
              value: o.repeatPassword,
              onChange: u,
              onBlur: d,
              showError: Boolean(a.repeatPassword) && Boolean(s.repeatPassword),
              error: a.repeatPassword,
            }),
          ],
        }),
      });
    },
    c6 = '_rounded_k59yw_25',
    f6 = '_avatar_k59yw_39',
    Nv = { rounded: c6, avatar: f6 },
    d6 =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAqCAYAAADxughHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqjSURBVHgB7VkJcJRFFv7+Y47M5GZyMAYygUgSUCCJISCQgMtmZRGxFBQVFyhELEVcZddyjQeIsEXpcu1aixuRdS0uwVUOUTBchQIBIQQEyQq5CFe4khByzcz/9vU/ZAJkgmgGjyq+qk7/0//7u9/3+vXr1x3gJm7iByE8PLx3SEjIW5d+mlqTk/ELhdlsHhgSqGzsYKve5nQ6Q1VV/Rs3z8SvAbGxsUmyLL+WEGcunTIBtGeRRA67RAkOU2PfZCOZTKahrX0r+WgL5VKJnwADBgxQd+/e3auhoSHLFqoNvTeDUkb+1o3+KRJkibB8g4TAAAmZKUDPR1BZdsqQI0lSY319/ctX96UTMRqN3blaTER7NE0L42k8yMIv8kcEPyIwMDCSx+jJrpJsNml3pnShjL49tNAh/YG0JEBVfQ/35gcy3lsFzJks4aGX8EVVtTvrahlV/GlsbNxntVoXPHq3a1buDhceGazdkxBnHBwUFPQy++rO06dPn/w+JVlBKSkpKbyoqCiCjRFlMBjCuXa4XK6uoYGSI6mTnGC31XbowyZLSWQLdyEEW6/PTn17ABPuF/IaOtkN0fnV7hYyXtcaMWKE8WjhyuKl0532kEBCVQ2weTewZJ1MqqIWHjmmnbpQ4ybxgUGVYbHIKhdLoEkLNpnI6naTLdgKQ2QYoWN7LlES7JHAB2sVzHjKjahwDf7A3ZPUE+u2ueytEomMjOxRU3P+rYr1rkFWs3886sx5CSOzZQxMA7LHuuEPDHpKdubmuU1Xu703/FZVVa1yObVUkwq/wcazk8kLd9MuDaUn4BcQaYbNmzcrV7d7ifTqRtLaeRTW2oL7schMJRw5JqP6ogR/gFi9LVu2tGj3EjlbqZ34TZp//PhyxMdoSHIQ8g4o8Ad4n3FNmTLF1aK96aGwlI6erfKP1S6HPYK4SFi/wz8zbTYpx321e4nw3rE9vxA3BIP7EMpOSjhX3fZZOXWWyny1e4nwlG3dsNP/MyIQwYu+5LgmZh1tQX2jhPxCcvp65yVSV1e3c82Xavn1DHWh9tq5pljYx043GyXIKiHuFhkmo6f3k2ckzFkiY8IMGW8skHG4/PoMmH9IN/ie65GdsukdDgxft16mTJAoRZGpV4xMZZ9KV7zbuwSUmSo2UIlEnO8QbaLpTyv6u/ObPDKfzFKpXYgiGOmFFdNlRb/XGleUlbNkslgsw76XBef9YVm95eprdTYwykDvsAIzWIGsZJm0XR4FileDwoI9SjUpKQrncTR5lOqVCQ4y6cpfLtNEaO08WZdbMVOm158ErZkjXzH2pJESsY6pvnS/YvVxFlpfelIJyEimTIfdN9lF76voWueGhQP66XMGHA/WkN4NGP6iEYdKNJFz6XIcPMCkwLkW8r4B7uLdfeFKCV8VEDgHEwcmZGVlobDQE2HEd+UVEr4pkvDlHAkRXwMrNxpgdADdOnn6nLvUePjA4dq/+NKrhbPzwLP+NEc+f6HWt9/WWDypRj0rmdnYiCU5Bhw+KmHLbpeuYBOmTZuG1NRm463bDuz9Dl4ZQZQT1Sv63r5fRcEiIMvthp2J/c7pxIIVHhInzsrY9DX2ohX4WrWV3x2zPjw1xzeRcAdQyyQ4n8QGRcGQKhceek5Y/srNdPbs2cjPz4fCMqGhoWDd0N4moWfPnvr7iooKLF682CsvZk9lkndxaZQ8Y5uZzMVLBl2/Xe9/GX4AEVRXV6+bt1SZ9/6almQGpRMqZBnJ/LyaB9J40MRjCjhtFxHFKycU5XOH3paeno4usRIG9SJkZGQgLi5OJ3g5CVFSmUQo1/MvvTvKz33u8Ojw8RalOiAgIAKeg18LtLpDsQt8nncwKLl/MiXeEtFs7UYnn9w+ldGdBz3AA+WxosN5HXDWj1ImJhQUygvF+GiKyZMno7hwE6ZPqET6bYTZ7+3HuCen6m4n3Cs+Ph6dO3fGqZMnMZZdtYC/44iBbtz/x6qCv07VOH2SMHEmmfjcdPvw4cPnHjx4sEWK0moAFwcljhBbQy116Tv+7Vbb25rJ9L/XiMeON2IrKyyPGoWSFSvwaF0dclixsrAwJCcno2vXroiJicEnH/4ds54uQ20D4VwVEN1OxrJcYF95Chydb0dpaRF27dyFjNp6ZLEhpjKBcdyPjevtmTL++6YLInVatVXG46/T+2zgMb70veZOxJadPet56Y+PD9NgDWjeKl/7lwztXaAdP28dPBhV9fWwbt6MIbwQPucZ+Yzb6/k5roMVkYF1MHH2G3qR9Eh3hkuNXYE9QYPwxDIOFLFFMu7iWV3NM7GHy1T+9gsmM+YtN4b084w7ZqrM7hXYhd3+ux9MhE+NAd/s/mR/7tuuziL5a8K+wzKe+4OMhxpdmMuK9xs3jk+MFhS8/TYeYEu6uJxghQK4hLBSFh99V/M7J5Oyci0WdUFAABbwd/1Z/n4uSztxJFzm8YL8//E6G628y2tufGu6XjOLE77Y4LJ+vn6Hc9SDgyjAfOl6LCqcsHQPW5LzULE4PywuRnl5OYY98wyWFhXBXV2N9twexAqWsdnXs3X3d++OsttuQ15JCWK4PYz7EQTFOW4Hr6Vl3OZkIiP49xEuQ54WZ3vC0VMS7n2eSkgOf6y2tvYC2oiefbrL589tbE4jcv8p01Dejd/hnTzcYBB3TrRw4ULKzc2l8ePH09ixY2n06NHUsWNHOnDgADUhOzubBvTuTen87WAuiWYzzZw5k/hqiGJEf7w8+0UY6SyPdWq9TAN7WU7b7fYE+Au8efXo0UU9XrKqOWXISlZoDg98PyvA4Zfuu+8+4ihF8+fP15UuKCggm81GlyMxMZHYz6m4uJh4xol3d73mCEYjuLzChpn4oERHVkrUrZNcwhEtFTcADr4m+jbnFU8OtO4fMg3jgedyCWYiHHqJrUcpKSnk5muVtLQ0vW3jxo06iZycHOLrJZo+fbr+e9u2bXqOJWYzgEnM4H76GBR6nnOzaJu6g2VjcaPAx0yZB8jO6mOs+nIBJ44pKs3mWXmAFWnKZEXdt29fb0LIGyLt3buXeIf3JpIvvPAC3Xrrrd6E8U4ugogiy8d4dieJW0j8FBDW4p12bpRNPf57JjGflYhg6wsiyqUal2W27dq1a5HxCndqIv4Gf5PhkUvDzwFeA0Fmk2nN66zQS6xYWFgYffTRR95UvUlZ+Ejbn3jiCX3N9GMSM7gtyGL5DD8Sbf63wpkzZy6YzOZnl8hyZSxvav2rqrBv3z7wdaueYy1fvhzR0dG6rEhbEhIS9LxMpO0jR45EYEMD7uGwKzbSoNDQl/Bzg93szw+zZUX4HCpCcni4Hp0ERFgWM8MkqLKykjjFJ5anO+Li9HUxzRP1/oNfCoyquupVg+cE+RiTSouP10mUlJToCz0vL482bNhAEydOJP5HCL3JJIRsvNlcwWvOgTbAr9cmHGls3371Vd4kTetk4zSjjl2pgNsPcV3HO3wAPwezS4mNIdbtOaCt4XZ2q2c5/ZiHNsDv9z/sUjFaQ8OiofX1Gf3c1764/pQJrlWUaXwqfRVtxI25yPJgTBQnyncoiiOef4RzMfKiruEZOMx1garWcE6V3daZaMKNJKIjODg4vaamZiCH20DeX4x8wVHLbYccDsdqjm4XcRNX4v8h8iRmeYl83gAAAABJRU5ErkJggg==';
  Cr(
    e => e.auth,
    e => e.checkAuth
  );
  const p6 = Cr(
      e => e.auth,
      e => e.auth
    ),
    h6 = Cr(
      e => e.auth,
      e => {
        var t;
        return (t = e.user) == null ? void 0 : t.login;
      }
    ),
    U_ = Cr(
      e => e.auth,
      e => e.loading
    ),
    g6 = Cr(
      e => e.auth,
      e => e.user
    ),
    m6 = e => `${Tw.HOST_RESOURCES}${e}`,
    z_ = () => {
      const { t: e } = xe(),
        t = ua(),
        r = Gt(g6),
        n = m6(r.avatar),
        i = r.avatar ? n : d6,
        o = a => {
          const u = a.target.files[0];
          u.type.indexOf('image') !== -1 && t(C4(u));
        };
      return L('div', {
        children: [
          w('div', {
            className: Nv.rounded,
            children: w('img', {
              className: Nv.avatar,
              src: i,
              alt: e('avatar'),
            }),
          }),
          w('input', { accept: 'image/*', type: 'file', onChange: o }),
        ],
      });
    },
    v6 = Bn().shape({
      first_name: ye()
        .required('Required')
        .matches(Fw, {
          message:
            'The first letter must be uppercase. Latin or Cyrillic letters, hyphens are allowed',
        }),
      second_name: ye()
        .required('Required')
        .matches(Rw, {
          message:
            'The first letter must be uppercase. Latin or Cyrillic letters, hyphens are allowed',
        }),
      display_name: ye()
        .required('Required')
        .matches(P4, {
          message:
            'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
        }),
      login: ye()
        .required('Required')
        .matches(Tp, {
          message:
            'Must be from 3 to 20 characters. Latin letters, digits (but not consisting of digits), hyphens and underscores are allowed',
        }),
      email: ye()
        .required('Required')
        .matches(jw, { message: 'Please enter a valid email' }),
      phone: ye()
        .required('Required')
        .matches(Lw, {
          message:
            'From 10 to 15 characters, consists of numbers, can start with a plus',
        }),
    }),
    y6 = () => {
      const e = Gt(c => c.auth.user),
        { t } = xe(),
        r = ua(),
        n = Rt(),
        i = () => n('/settings'),
        o = c => {
          r(If(c))
            .unwrap()
            .catch()
            .then(() => {
              i();
            });
        },
        {
          values: a,
          errors: s,
          touched: u,
          handleChange: l,
          handleSubmit: d,
          handleBlur: f,
        } = da({
          initialValues: e,
          validationSchema: v6,
          onSubmit: c => {
            o(c);
          },
        });
      return L('div', {
        children: [
          w(z_, {}),
          L($p, {
            onSubmit: d,
            buttonsBlock: L('div', {
              className: Se.form_button_box,
              children: [
                w(fe, { regular: !0, type: 'submit', children: t('save') }),
                w(fe, { regular: !0, onClick: i, children: t('goBack') }),
              ],
            }),
            children: [
              w(st, {
                label: t('email'),
                name: 'email',
                type: 'email',
                className: 'regular',
                placeholder: e.email,
                value: a.email,
                onChange: l,
                onBlur: f,
                showError: Boolean(s.email) && Boolean(u.email),
                error: s.email,
              }),
              w(st, {
                label: t('login'),
                name: 'login',
                type: 'text',
                className: 'regular',
                placeholder: e.login,
                value: a.login,
                onChange: l,
                onBlur: f,
                showError: Boolean(s.login) && Boolean(u.login),
                error: s.login,
              }),
              w(st, {
                label: t('nickname'),
                name: 'display_name',
                type: 'text',
                className: 'regular',
                placeholder: e.display_name,
                value: a.display_name,
                onChange: l,
                onBlur: f,
                showError: Boolean(s.display_name) && Boolean(u.display_name),
                error: s.display_name,
              }),
              w(st, {
                label: t('firstName'),
                name: 'first_name',
                type: 'text',
                className: 'regular',
                placeholder: e.first_name,
                value: a.first_name,
                onChange: l,
                onBlur: f,
                showError: Boolean(s.first_name) && Boolean(u.first_name),
                error: s.first_name,
              }),
              w(st, {
                label: t('secondName'),
                name: 'second_name',
                type: 'text',
                className: 'regular',
                placeholder: e.second_name,
                value: a.second_name,
                onChange: l,
                onBlur: f,
                showError: Boolean(s.second_name) && Boolean(u.second_name),
                error: s.second_name,
              }),
              w(st, {
                label: t('phone'),
                name: 'phone',
                type: 'text',
                className: 'regular',
                placeholder: e.phone,
                value: a.phone,
                onChange: l,
                onBlur: f,
                showError: Boolean(s.phone) && Boolean(u.phone),
                error: s.phone,
              }),
            ],
          }),
        ],
      });
    },
    w6 = () => {
      const e = Gt(t => t.auth.user);
      return w('div', {
        className: Se.form_center,
        children: L('div', {
          children: [
            w('p', { className: Se.form_title, children: e.email }),
            w('p', { className: Se.form_title, children: e.display_name }),
            w('p', { className: Se.form_title, children: e.first_name }),
            w('p', { className: Se.form_title, children: e.second_name }),
            w('p', { className: Se.form_title, children: e.phone }),
          ],
        }),
      });
    },
    _6 = '_regular_2hex4_25',
    S6 = { regular: _6 },
    au = ({ to: e, children: t }) =>
      w(v1, { to: e, className: S6.regular, children: t }),
    x6 = () => {
      const { t: e } = xe(),
        t = Rt(),
        r = () => t('edit'),
        n = () => t('/');
      return L('div', {
        children: [
          w(z_, {}),
          w($p, {
            buttonsBlock: L('div', {
              className: Se.form_button_box,
              children: [
                w(fe, { regular: !0, onClick: r, children: e('editProfile') }),
                w(fe, { regular: !0, onClick: n, children: e('goBack') }),
                w(au, { to: 'password', children: e('changePassword') }),
              ],
            }),
            children: w(w6, {}),
          }),
        ],
      });
    },
    b6 = '_page_1dtsw_25',
    E6 = '_block_1dtsw_34',
    O6 = '_block_buttons_1dtsw_46',
    C6 = '_title_1dtsw_59',
    P6 = '_subtitle_1dtsw_84',
    $6 = '_text_1dtsw_96',
    k6 = '_img_1dtsw_105',
    T6 = '_buttons_1dtsw_116',
    po = {
      page: b6,
      block: E6,
      block_buttons: O6,
      title: C6,
      subtitle: P6,
      text: $6,
      img: k6,
      buttons: T6,
    },
    A6 = () => {
      const { t: e } = xe(),
        t = Rt(),
        r = () => t('/leaders'),
        n = () => t('/forum'),
        i = () => t('/settings'),
        o = () => t('/loadinggame'),
        a = la(() => fs());
      return L('div', {
        className: po.page,
        children: [
          w(Xu, { className: po.title }),
          L('div', {
            className: po.block_buttons,
            children: [
              w(fe, {
                regular: !0,
                className: po.button,
                onClick: o,
                children: e('play'),
              }),
              w(fe, { regular: !0, onClick: r, children: e('leaderboard') }),
              w(fe, { regular: !0, onClick: n, children: e('forum') }),
            ],
          }),
          L('div', {
            className: po.buttons,
            children: [
              w(fe, { regular: !0, onClick: i, children: e('profile') }),
              w(fe, { regular: !0, onClick: a, children: e('logout') }),
            ],
          }),
        ],
      });
    },
    N6 = '_page_1dtsw_25',
    F6 = '_block_1dtsw_34',
    R6 = '_block_buttons_1dtsw_46',
    L6 = '_title_1dtsw_59',
    j6 = '_subtitle_1dtsw_84',
    I6 = '_text_1dtsw_96',
    D6 = '_img_1dtsw_105',
    M6 = '_buttons_1dtsw_116',
    dr = {
      page: N6,
      block: F6,
      block_buttons: R6,
      title: L6,
      subtitle: j6,
      text: I6,
      img: D6,
      buttons: M6,
    },
    U6 = '/assets/game.1b8cae15.png',
    z6 = () => {
      const { t: e } = xe(),
        t = Rt(),
        r = () => t('auth'),
        n = () => t('/auth/reg');
      return L('div', {
        className: dr.page,
        children: [
          w(Xu, { className: dr.title }),
          L('div', {
            className: dr.block,
            children: [
              L('div', {
                children: [
                  w('h2', { className: dr.subtitle, children: e('howToPlay') }),
                  w('p', {
                    className: dr.text,
                    children: w(MO, { i18nKey: 'homeDescription' }),
                  }),
                ],
              }),
              w('img', { src: U6, alt: 'game screen', className: dr.img }),
            ],
          }),
          L('div', {
            className: dr.buttons,
            children: [
              w(fe, {
                regular: !0,
                type: 'submit',
                className: dr.button,
                onClick: r,
                children: e('signIn'),
              }),
              w(fe, {
                regular: !0,
                type: 'submit',
                className: dr.button,
                onClick: n,
                children: e('signUp'),
              }),
            ],
          }),
        ],
      });
    },
    B6 = () =>
      w(de, {
        children: L(cn, {
          children: [
            w('div', {
              className: Se.form_block_title,
              children: w(Xu, { className: Se.form_logo_title }),
            }),
            w(op, {}),
          ],
        }),
      }),
    hc = ({ flag: e, redirect: t, children: r }) => (e ? r : w(J1, { to: t })),
    H6 = '_block_topics_d693i_25',
    V6 = '_button_create_topic_d693i_31',
    W6 = '_list_d693i_35',
    Fv = { block_topics: H6, button_create_topic: V6, list: W6 },
    K6 = [
      {
        id: '1',
        title: 'HELP ME!',
        description: 'Topic description',
        author: 'user_1',
        date: '25/10/2022 12:20',
        comments: [
          {
            author: 'user_2',
            text: 'Hello',
            date: '25/10/2022 12:32',
            likes: 2,
          },
          {
            author: 'user_1',
            text: 'How are you?',
            date: '25/10/2022 12:36',
            likes: 1,
          },
        ],
        views: 74,
      },
      {
        id: '2',
        title: 'HELP ME!',
        description: 'Topic description',
        author: 'user_2',
        date: '25/10/2022 12:20',
        comments: [
          {
            author: 'user_2',
            text: 'Hello',
            date: '25/10/2022 12:36',
            likes: 2,
          },
          {
            author: 'user_3',
            text: 'How are you?',
            date: '25/10/2022 12:36',
            likes: 5,
          },
          {
            author: 'user_1',
            text: 'Hello',
            date: '25/10/2022 12:36',
            likes: 21,
          },
        ],
        views: 74,
      },
      {
        id: '3',
        title: 'HELP ME!',
        description: 'Topic description',
        author: 'user_1',
        date: '25/10/2022 12:20',
        comments: [],
        views: 74,
      },
      {
        id: '4',
        title: 'HELP ME!',
        description: 'Topic description',
        author: 'user_1',
        date: '25/10/2022 12:20',
        comments: [],
        views: 74,
      },
      {
        id: '5',
        title: 'HELP ME!',
        description: 'Topic description',
        author: 'user_1',
        date: '25/10/2022 12:20',
        comments: [],
        views: 74,
      },
    ],
    q6 = {
      activeTopic: void 0,
      topics: K6.reduce((e, t) => ((e[t.id] = t), e), {}),
    },
    B_ = Gu({
      name: 'forum',
      initialState: q6,
      reducers: {
        changeActiveTopic(e, t) {
          e.activeTopic = e.topics[t.payload];
        },
        addCommentInTopic(e, t) {
          var n;
          (n = e.activeTopic) == null || n.comments.push(t.payload.comment);
          const r = e.topics[t.payload.id];
          r && r.comments.push(t.payload.comment);
        },
        addNewTopic(e, t) {
          e.topics[t.payload.id] = t.payload;
        },
      },
    }),
    Y6 = B_.reducer,
    {
      changeActiveTopic: G6,
      addCommentInTopic: X6,
      addNewTopic: Q6,
    } = B_.actions,
    Z6 = '_column_1cpea_25',
    J6 = '_title_1cpea_31',
    ez = '_content_1cpea_35',
    gc = { column: Z6, title: J6, content: ez },
    ed = ({ title: e, children: t }) =>
      L('div', {
        className: gc.column,
        children: [
          w('div', { className: gc.title, children: e }),
          w('div', { className: gc.content, children: t }),
        ],
      }),
    tz = '_card_1fm0e_25',
    rz = '_topic_1fm0e_34',
    nz = '_title_1fm0e_37',
    iz = '_author_1fm0e_45',
    Wa = { card: tz, topic: rz, title: nz, author: iz },
    H_ = ({
      id: e,
      title: t,
      description: r,
      author: n,
      date: i,
      comments: o,
      views: a,
    }) => {
      const { t: s } = xe(),
        u = Rt(),
        l = la(() => (u('topic'), G6(e)));
      return w(de, {
        children: L(cn, {
          className: Wa.card,
          children: [
            L('div', {
              onClick: l,
              className: Wa.topic,
              children: [
                w('div', { className: Wa.title, children: t }),
                w('div', { children: r }),
                L('div', {
                  className: Wa.author,
                  children: [
                    L('div', { children: [s('author'), ': ', n] }),
                    w('div', { children: i }),
                  ],
                }),
              ],
            }),
            w(ed, {
              title: s('comments'),
              children: w('h3', { children: o.length }),
            }),
            w(ed, { title: s('views'), children: w('h3', { children: a }) }),
          ],
        }),
      });
    },
    oz = Cr(
      e => e.forum,
      e => e.activeTopic
    ),
    az = Cr(
      e => e.forum,
      e => e.topics
    ),
    sz = Cr([e => e.auth], e => {
      var t;
      return { login: (t = e.user) == null ? void 0 : t.login };
    }),
    uz = '_button_create_topic_t3pkr_1',
    lz = { button_create_topic: uz },
    cz = () => {
      const { t: e } = xe(),
        t = Rt(),
        r = () => t('createtopic');
      return w(fe, {
        regular: !0,
        className: lz.button_create_topic,
        onClick: r,
        children: e('postNewTopic'),
      });
    },
    fz = O.exports.memo(() => {
      const e = Gt(az);
      return w(de, {
        children: L('div', {
          className: Fv.block_topics,
          children: [
            w(cz, {}),
            w('div', {
              className: Fv.list,
              children: Object.values(e).map((t, r) => w(H_, { ...t }, r)),
            }),
          ],
        }),
      });
    }),
    V_ = e =>
      String(
        e.getDate() +
          '/' +
          (e.getMonth() + 1) +
          '/' +
          e.getFullYear() +
          ' ' +
          e.getHours() +
          ':' +
          e.getMinutes()
      ),
    dz = { name_topic: '', description_topic: '' },
    pz = e => {
      const t = String(e('required'));
      return Bn().shape({
        name_topic: ye().required(t),
        description_topic: ye().required(t),
      });
    },
    hz = '_block_dz4bj_25',
    gz = '_button_publish_dz4bj_31',
    mz = '_card_dz4bj_35',
    vz = '_block_input_dz4bj_42',
    yz = '_new_topic_dz4bj_49',
    wz = '_title_dz4bj_54',
    _z = '_input_dz4bj_63',
    Sz = '_title_description_dz4bj_67',
    xz = '_description_dz4bj_77',
    Jt = {
      block: hz,
      button_publish: gz,
      card: mz,
      block_input: vz,
      new_topic: yz,
      title: wz,
      input: _z,
      title_description: Sz,
      description: xz,
    },
    bz = () => {
      const { t: e } = xe(),
        t = Rt(),
        r = Gt(h6),
        n = tp(),
        i = O.exports.useCallback(
          f => {
            n(Q6(f)), t(-1);
          },
          [n, t]
        ),
        {
          values: o,
          errors: a,
          touched: s,
          handleChange: u,
          handleSubmit: l,
          handleBlur: d,
        } = da({
          initialValues: dz,
          validationSchema: pz(e),
          onSubmit: f => {
            const c = {
              id: f2(),
              title: f.name_topic,
              description: f.description_topic,
              author: r || '',
              date: V_(new Date()),
              comments: [],
              views: 0,
            };
            i(c);
          },
        });
      return w(de, {
        children: L('form', {
          onSubmit: l,
          className: Jt.block,
          children: [
            w(fe, {
              regular: !0,
              className: Jt.button_publish,
              type: 'submit',
              children: e('publich'),
            }),
            w(cn, {
              className: Jt.card,
              children: L('div', {
                className: Jt.block_input,
                children: [
                  L('div', {
                    className: Jt.new_topic,
                    children: [
                      L('div', {
                        className: Jt.title,
                        children: [e('newTopic'), ': '],
                      }),
                      w(st, {
                        name: 'name_topic',
                        className: Jt.input,
                        onChange: u,
                        onBlur: d,
                        value: o.name_topic,
                        showError:
                          Boolean(a.name_topic) && Boolean(s.name_topic),
                        error: a.name_topic,
                      }),
                    ],
                  }),
                  L('div', {
                    className: Jt.title_description,
                    children: [e('topicDescription'), ':', ' '],
                  }),
                  w('div', {
                    className: Jt.description,
                    children: w(st, {
                      name: 'description_topic',
                      className: Jt.input,
                      onChange: u,
                      onBlur: d,
                      value: o.description_topic,
                      showError:
                        Boolean(a.description_topic) &&
                        Boolean(s.description_topic),
                      error: a.description_topic,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    },
    Ez = '/assets/game-background.08e5d58a.png',
    Oz = '/assets/game-over-background.a05a7303.png',
    Cz = '/assets/game-player-1.ae5600a3.png',
    Pz = '/assets/game-npc-friend.10b45324.png',
    $z =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEcklEQVR42u2dTWhcZRSGn3Nnkg4Fa8ESXChSiBqwC+mqgosutCIoTXQlE8QfquCyVYq4mY3bKbgTLSLpVFdmCroJVly4KEXURbFiYgXrooRqg9RxSGbucTGJTWbunabxJvPNzPtuJskk956c53znvPfLzQxIkiRJkiRJkiRJQy3L8mDN4uSjuO9dO+zawX31Y19/VgfMwW3jN26MrB5Fd12wmZnMYoyLk/e6M9E697ooV2OytjDoiDnhEfshV5ldyiK+fLZ47RRwmIT8emIp2MaS6CyPBVZWHgbiDKM8gvFxx7lXz++bKd/2R/xJ4MssgouCX8MjI5kezrclyOyOGj6QIZOACIi8kYD0EZA7PlJcnHocfCJltL0FPJThb7poxjuJM9Pst+jM7FyK/R4zeCal4B5zeCVjHGXgcsJTDYfPcpXqX9tne41X3Xlph0pvzJ0PEsNwnwPmUlzPuGOnd2p9OBxPz5d/A2waSLSFk6vNaagHcbERJhBTEYcFpC+Kz4YEiJdKYXWmtHj6uGV11NLisWPc88/1J4BDSa4X9+eBgwHEvoDZR21FFbc+9/txXgskw2WwGwmJb7jH7+Uq52pdbW9uaQlG/SngzcCLaRz3d/vAYBxPWrIOdbAPgVrXltXU4A5rhowoJz11H9EAzcPBXCF7BCUsIJc0Q8ICMqGchAXkb+UkLCDnlZOwgBxUTsIC8oByEhaQPPojVFBApMCALLSuQ2KlJhAgY8pJWED2aIZohkgCIiDSFoH8KpcVFpD9GupBtiytkMBalqSWJSUCuaGhHhaQJeWkp+q4c3HvSA1npA78mfIzBWC3UrdppeVxGfOOTtQxv70E8S+TozSJ1r1Uwa1XLojsfdxfVJ43K38E54pjGP5fRmMzLLJ6fma2+wqxEkB1Oe3w8fSU7tu6ExnLucq5+v+9DknnrRT35MJQEhBJQPrB9t5+RrHo8HPK0/cNqSX+3aDmCRbW3RrbCyRePmm7CycZbVtctZi4EZ/H/fAQAnnZaHxlhV2wa11ebjap/WHx9gI5+0XqCZrTU8N6rYFVPs9kuynKOC4pKCDat5fLEhApLNt7G31nltS3PHbnUF9bYuNHwxYTR6dzva+6vpcgnp+8TB//x5yZvRCdmf10IFpWawdZ0gwREElABETqJ9vbTVVau8HtNi9yeI7WzRM9drZ86/BTslXkykABiR7Mvw0HOr4ez39fADsSAhCHT6L9B8rk8wlOsbRTRdHjJBSfLcTkrgL7AugYJ3KVanmoZ4g2iAMDog3iwIDoJuLgVojWSK9sb/IMia1BxCmDu9fPldU7VwvAGxnHeRH4esN7et36+IJaeBetTB/dF7ldzdgSl3OV6gm1rC05MB+uCmQIt05cQCQBERBZ4oGxvd2Ua9pNInsdKGCMuvvy6mCOgTGHtBfjv2jYaYxR3GOwtXdNqDt2Kewi7FM1i0fHweZTnj6bq1SLalmSgAiIrigEZMDGn1qWbO/O6JrB0ymN65rQSpIkSZIkSVKw+hdsGCWYFfrlAgAAAABJRU5ErkJggg==',
    kz = '/assets/money.f4369015.png',
    Tz = '/assets/game-npc-huggy.8283657b.png',
    Az = '/assets/game-npc-kissy.5a442d31.png',
    Nz = '/assets/game-collision-blood.e91703bb.png',
    Fz = '/assets/game-collision-teleport.4af52840.png';
  var Z = (e => (
      (e[(e.BACKGROUND_VERTICAL_LIMIT = 100)] = 'BACKGROUND_VERTICAL_LIMIT'),
      (e[(e.SKIN_HORIZONTAL_FRAME = 0)] = 'SKIN_HORIZONTAL_FRAME'),
      (e[(e.SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES = 3)] =
        'SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES'),
      (e[(e.SKIN_FIRST_HORIZONTAL_FRAME = 0)] = 'SKIN_FIRST_HORIZONTAL_FRAME'),
      (e[(e.SKIN_VERTICAL_FRAME = 0)] = 'SKIN_VERTICAL_FRAME'),
      (e[(e.INACCURACY_OF_CHARACTER_SPRITE = 10)] =
        'INACCURACY_OF_CHARACTER_SPRITE'),
      (e[(e.PLAYER_ONE_X = 100)] = 'PLAYER_ONE_X'),
      (e[(e.PLAYER_ONE_Y = 400)] = 'PLAYER_ONE_Y'),
      (e[(e.PLAYER_SPEED = 7)] = 'PLAYER_SPEED'),
      (e[(e.ENEMY_SPEED = 8)] = 'ENEMY_SPEED'),
      (e[(e.FRIEND_SPEED = 6)] = 'FRIEND_SPEED'),
      (e[(e.HIT_POINTS = 3)] = 'HIT_POINTS'),
      (e[(e.DEFINE_BONUS = 1)] = 'DEFINE_BONUS'),
      (e[(e.PLAYER_COLLISION_SPEED_BONUS = 0.1)] =
        'PLAYER_COLLISION_SPEED_BONUS'),
      (e[(e.NPC_ENEMY_COLLISION_SPEED_BONUS = 0.2)] =
        'NPC_ENEMY_COLLISION_SPEED_BONUS'),
      (e[(e.ENEMY_HUGGY_START_X = 500)] = 'ENEMY_HUGGY_START_X'),
      (e[(e.ENEMY_KISSY_START_X = 700)] = 'ENEMY_KISSY_START_X'),
      (e[(e.ENEMY_START_Y = 200)] = 'ENEMY_START_Y'),
      e
    ))(Z || {}),
    nr = (e => (
      (e.MAIN_BACK = 'back'),
      (e.GAME_OVER_BACK = 'gameOver'),
      (e.PLAYER = 'player'),
      (e.NPC_FRIEND = 'npc_friend'),
      (e.NPC_ENEMY_HUGGY = 'npc_enemy_huggy'),
      (e.NPC_ENEMY_KISSY = 'npc_enemy_kissy'),
      (e.HEART = 'heart'),
      (e.MONEY = 'money'),
      (e.COLLISION_BLOOD = 'collision_bood'),
      (e.COLLISION_TELEPORT = 'collision_teleport'),
      e
    ))(nr || {});
  const Rz = [
      { id: 'back', src: Ez, width: 100, height: 100 },
      { id: 'gameOver', src: Oz, width: 100, height: 100 },
      { id: 'npc_friend', src: Pz, width: 45, height: 90 },
      { id: 'player', src: Cz, width: 54, height: 84 },
      { id: 'npc_enemy_huggy', src: Tz, width: 49, height: 101 },
      { id: 'npc_enemy_kissy', src: Az, width: 49, height: 101 },
      { id: 'heart', src: $z, width: 40, height: 40 },
      { id: 'money', src: kz, width: 40, height: 40 },
      { id: 'collision_bood', src: Nz, width: 49, height: 33 },
      { id: 'collision_teleport', src: Fz, width: 70.75, height: 90 },
    ],
    Rv = [
      { id: 1, type: 'enemy_kissy' },
      { id: 2, type: 'enemy_huggy' },
      { id: 3, type: 'friend' },
      { id: 4, type: 'friend' },
      { id: 5, type: 'friend' },
      { id: 6, type: 'friend' },
      { id: 7, type: 'friend' },
      { id: 8, type: 'friend' },
    ],
    Qn = [];
  class Lz {
    constructor(t, r, n, i) {
      P(this, 'movePlayer');
      P(this, 'spriteHeart');
      P(this, 'spriteMoney');
      P(this, 'spritePlayer');
      P(this, 'x', 0);
      P(this, 'y', 0);
      P(this, 'width', 0);
      P(this, 'height', 0);
      P(this, 'score', 0);
      P(this, 'skinLegsFrame');
      P(this, 'skinDirectionFrame');
      P(this, 'speed');
      P(this, 'isMoving');
      P(this, 'canvasHeight');
      P(this, 'canvasWidth');
      P(this, 'ctx');
      P(this, 'hitPoints');
      P(this, 'game');
      P(this, 'firstLegsMovementFrame');
      P(this, 'totalNumberOfLegsMovementFrames');
      (this.hitPoints = Z.HIT_POINTS),
        (this.skinLegsFrame = Z.SKIN_FIRST_HORIZONTAL_FRAME),
        (this.skinDirectionFrame = Z.SKIN_VERTICAL_FRAME),
        (this.totalNumberOfLegsMovementFrames =
          Z.SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES),
        (this.firstLegsMovementFrame = Z.SKIN_FIRST_HORIZONTAL_FRAME),
        (this.speed = Z.PLAYER_SPEED),
        (this.isMoving = !1),
        (this.ctx = t),
        (this.canvasHeight = r),
        (this.canvasWidth = n),
        (this.game = i);
    }
    animate() {
      this.movePlayer(), this.handlePlayerLegsFrame();
    }
    setSprite(t) {
      (this.spriteHeart = t[nr.HEART]),
        (this.spriteMoney = t[nr.MONEY]),
        (this.spritePlayer = t[nr.PLAYER]),
        (this.width = this.spritePlayer.width),
        (this.height = this.spritePlayer.height);
    }
    subtractHP() {
      (this.hitPoints = this.hitPoints - 1),
        this.hitPoints === 0 && this.game.end();
    }
    addScore(t) {
      this.score = this.score + t;
    }
    handlePlayerLegsFrame() {
      this.skinLegsFrame < this.totalNumberOfLegsMovementFrames && this.isMoving
        ? this.skinLegsFrame++
        : (this.skinLegsFrame = this.firstLegsMovementFrame);
    }
    renderHPandScore(t) {
      if (!this.spriteHeart || !this.spriteMoney) return;
      t.drawImage(
        this.spriteMoney.image,
        this.canvasWidth - 100,
        10,
        this.spriteMoney.width,
        this.spriteMoney.height
      ),
        (t.font = '30px PixelDigivolve'),
        t.fillText(`${this.score}`, this.canvasWidth - 50, 40);
      const r = 5,
        n = 5;
      this.hitPoints;
      for (let i = 0; i < this.hitPoints; i++)
        t.drawImage(
          this.spriteHeart.image,
          r + this.spriteHeart.width * i,
          n,
          this.spriteHeart.width,
          this.spriteHeart.height
        );
    }
    render() {
      !this.spritePlayer ||
        (this.ctx.drawImage(
          this.spritePlayer.image,
          this.width * this.skinLegsFrame,
          this.height * this.skinDirectionFrame,
          this.width,
          this.height,
          this.x,
          this.y,
          this.width,
          this.height
        ),
        this.renderHPandScore(this.ctx),
        this.animate());
    }
    getPosition() {
      return {
        x1: this.x,
        x2: this.x + this.width,
        y1: this.y,
        y2: this.y + this.height,
      };
    }
  }
  class jz extends Lz {
    constructor(r, n, i, { game: o }) {
      super(r, n, i, o);
      P(this, 'keyDownCustom', (...r) => {
        if (r.length > 0) {
          const n = r[0];
          Qn[n.keyCode] = !0;
        }
      });
      P(this, 'keyUpCustom', (...r) => {
        if (r.length > 0) {
          const n = r[0];
          (Qn[n.keyCode] = !1), (this.isMoving = !1);
        }
      });
      P(this, 'movePlayer', () => {
        this.y !== void 0 &&
          this.x !== void 0 &&
          (Qn[38] &&
            this.y > Z.BACKGROUND_VERTICAL_LIMIT &&
            ((this.y -= this.speed),
            (this.skinDirectionFrame = 3),
            (this.isMoving = !0)),
          Qn[37] &&
            this.x > 0 &&
            ((this.x -= this.speed),
            (this.skinDirectionFrame = 1),
            (this.isMoving = !0)),
          Qn[40] &&
            this.y < this.canvasHeight - this.height &&
            ((this.y += this.speed),
            (this.skinDirectionFrame = 0),
            (this.isMoving = !0)),
          Qn[39] &&
            this.x < this.canvasWidth - this.width &&
            ((this.x += this.speed),
            (this.skinDirectionFrame = 2),
            (this.isMoving = !0)));
      });
      (this.x = Z.PLAYER_ONE_X),
        (this.y = Z.PLAYER_ONE_Y),
        (this.ctx = r),
        (this.canvasHeight = n),
        (this.canvasWidth = i),
        window.addEventListener('keydown', this.keyDownCustom),
        window.addEventListener('keyup', this.keyUpCustom);
    }
  }
  class Iz {
    constructor() {
      P(this, 'defoultSprites', Rz);
      P(this, 'sprites');
      P(this, 'prepareSprite', t => {
        if (this.sprites[t.id]) throw Error('error');
        this.sprites[t.id] = t;
      });
      this.sprites = {};
    }
    async prepareSprites() {
      const t = this.defoultSprites.map(r => new Dz(r));
      t.forEach(this.prepareSprite), await Promise.all(t.map(r => r.load()));
    }
    getSprites() {
      return this.sprites;
    }
  }
  class Dz {
    constructor(t) {
      P(this, 'id');
      P(this, 'src');
      P(this, 'image');
      P(this, 'width');
      P(this, 'height');
      (this.id = t.id),
        (this.width = t.width),
        (this.height = t.height),
        (this.src = t.src),
        (this.image = new Image());
    }
    load() {
      return new Promise((t, r) => {
        (this.image.src = this.src),
          (this.image.onload = () => t(this)),
          (this.image.onerror = () => r(new Error('error load image')));
      });
    }
  }
  var Ht = (e => (
    (e.Friend = 'friend'),
    (e.Enemy_huggy = 'enemy_huggy'),
    (e.Enemy_kissy = 'enemy_kissy'),
    e
  ))(Ht || {});
  class W_ {
    constructor(t, r, n, i) {
      P(this, 'id');
      P(this, 'type');
      P(this, 'sprite');
      P(this, 'x', 0);
      P(this, 'y', 0);
      P(this, 'width', 0);
      P(this, 'height', 0);
      P(this, 'speed', 0);
      P(this, 'isMoving');
      P(this, 'canvasHeight');
      P(this, 'canvasWidth');
      P(this, 'skinLegsFrame');
      P(this, 'skinDirectionFrame');
      P(this, 'totalNumberOfLegsMovementFrames');
      P(this, 'firstLegsMovementFrame');
      P(this, 'npcCurrentDirections', []);
      P(this, 'hasCollision', !1);
      P(this, 'ctx');
      (this.ctx = t),
        (this.id = r.id),
        (this.type = r.type),
        (this.canvasHeight = n),
        (this.canvasWidth = i),
        (this.isMoving = !0),
        (this.skinLegsFrame = Z.SKIN_FIRST_HORIZONTAL_FRAME),
        (this.skinDirectionFrame = Z.SKIN_VERTICAL_FRAME),
        (this.totalNumberOfLegsMovementFrames =
          Z.SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES),
        (this.firstLegsMovementFrame = Z.SKIN_FIRST_HORIZONTAL_FRAME),
        this.startMoving();
    }
    getRandomPosition(t, r, n = !1) {
      let i = Math.min(t, Math.random() * r);
      if (n) for (; i < 210; ) i = Math.min(t, Math.random() * r);
      return i;
    }
    setSprite(t) {
      const r = this.getRandomPosition(
          this.canvasWidth - t.width,
          this.canvasWidth
        ),
        n = this.getRandomPosition(
          this.canvasHeight - t.height,
          this.canvasHeight,
          !0
        );
      (this.sprite = t),
        (this.width = t.width),
        (this.height = t.height),
        this.type === 'friend' && ((this.x = r), (this.y = n)),
        (this.skinLegsFrame = 0),
        (this.skinDirectionFrame = 0);
    }
    getPosition() {
      return {
        x1: this.x,
        x2: this.x + this.width,
        y1: this.y,
        y2: this.y + this.height,
      };
    }
    render() {
      !this.sprite ||
        (this.ctx.drawImage(
          this.sprite.image,
          this.width * this.skinLegsFrame,
          this.height * this.skinDirectionFrame,
          this.width,
          this.height,
          this.x,
          this.y,
          this.width,
          this.height
        ),
        this.animate());
    }
    animate() {
      this.correctCollisionResultBettweenNpc(),
        this.checkForCollisionsWithCanvasBorders(),
        this.moveNpc(),
        this.handleNpcLegsFrame();
    }
    getRandomArbitrary(t, r) {
      return Math.random() * (r - t) + t;
    }
    correctCollisionResultBettweenNpc() {
      this.isMoving ||
        (this.hasCollision
          ? ((this.npcCurrentDirections = []),
            this.startMoving(),
            (this.hasCollision = !1))
          : (this.toggleNpcDirection(0),
            this.toggleNpcDirection(1),
            (this.hasCollision = !0))),
        (this.isMoving = !0);
    }
    toggleNpcDirection(t) {
      t === 0 &&
        (this.npcCurrentDirections[2]
          ? ((this.npcCurrentDirections[2] = !1),
            (this.npcCurrentDirections[1] = !0))
          : ((this.npcCurrentDirections[1] = !1),
            (this.npcCurrentDirections[2] = !0))),
        t === 1 &&
          (this.npcCurrentDirections[0]
            ? ((this.npcCurrentDirections[0] = !1),
              (this.npcCurrentDirections[3] = !0))
            : ((this.npcCurrentDirections[3] = !1),
              (this.npcCurrentDirections[0] = !0)));
    }
    checkForCollisionsWithCanvasBorders() {
      (this.x + this.width > this.canvasWidth || this.x - this.width / 2 < 0) &&
        this.correctCollisionResultWithCanvasBorders(0),
        (this.y + this.height > this.canvasHeight ||
          this.y - this.height / 2 < 70) &&
          this.correctCollisionResultWithCanvasBorders(1);
    }
    correctCollisionResultWithCanvasBorders(t) {
      this.hasCollision
        ? ((this.npcCurrentDirections = []), this.startMoving())
        : (this.toggleNpcDirection(t), (this.hasCollision = !0));
    }
    handleNpcLegsFrame() {
      this.skinLegsFrame < this.totalNumberOfLegsMovementFrames && this.isMoving
        ? this.skinLegsFrame++
        : (this.skinLegsFrame = this.firstLegsMovementFrame);
    }
    moveNpc() {
      this.npcCurrentDirections[3] &&
        this.y > 100 &&
        this.isMoving &&
        ((this.skinDirectionFrame = 3), (this.y -= this.speed)),
        this.npcCurrentDirections[1] &&
          this.x > 0 &&
          this.isMoving &&
          ((this.skinDirectionFrame = 1), (this.x -= this.speed)),
        this.npcCurrentDirections[0] &&
          this.y < this.canvasHeight - this.height &&
          this.isMoving &&
          ((this.y += this.speed), (this.skinDirectionFrame = 0)),
        this.npcCurrentDirections[2] &&
          this.x < this.canvasWidth - this.width &&
          this.isMoving &&
          ((this.skinDirectionFrame = 2), (this.x += this.speed));
    }
    startMoving() {
      const t = [1, 2][Math.round(Math.random())],
        r = [3, 0][Math.round(Math.random())];
      (this.npcCurrentDirections[t] = !0), (this.npcCurrentDirections[r] = !0);
    }
  }
  class Mz extends W_ {
    constructor(t, r, n, i) {
      super(t, r, n, i),
        (this.ctx = t),
        this.setEnemyNpcStartCoodinats(),
        (this.speed = Z.ENEMY_SPEED);
    }
    setEnemyNpcStartCoodinats() {
      this.type === 'enemy_huggy'
        ? (this.x = Z.ENEMY_HUGGY_START_X)
        : (this.x = Z.ENEMY_KISSY_START_X),
        (this.y = Z.ENEMY_START_Y);
    }
    collisionHandling(t) {
      t.subtractHP();
    }
  }
  class Lv extends W_ {
    constructor(r, n, i, o) {
      super(r, n, i, o);
      P(this, 'defineBonus');
      (this.ctx = r),
        (this.defineBonus = Z.DEFINE_BONUS),
        (this.speed = Z.FRIEND_SPEED);
    }
    collisionHandling(r) {
      r.addScore(this.defineBonus);
    }
  }
  class Uz {
    constructor(t, r, n) {
      P(this, 'ctx');
      P(this, 'x');
      P(this, 'y');
      P(this, 'width', 0);
      P(this, 'height', 0);
      P(this, 'sprite');
      P(this, 'skinHorizontalFrame', Z.SKIN_HORIZONTAL_FRAME);
      P(
        this,
        'skinTotalNumberOfHorizontalFrames',
        Z.SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES
      );
      P(this, 'skinVerticalFrame', Z.SKIN_VERTICAL_FRAME);
      P(this, 'isCollisionWithEnemy');
      (this.ctx = t), (this.x = r), (this.y = n);
    }
    setSprite(t) {
      (this.sprite = t), (this.width = t.width), (this.height = t.height);
    }
    render() {
      !this.sprite ||
        (this.ctx.drawImage(
          this.sprite.image,
          this.width * this.skinHorizontalFrame,
          this.height * this.skinVerticalFrame,
          this.width,
          this.height,
          this.x,
          this.y,
          this.width,
          this.height
        ),
        this.animate());
    }
    animate() {
      this.skinHorizontalFrame < this.skinTotalNumberOfHorizontalFrames &&
        this.skinHorizontalFrame++;
    }
  }
  class zz {
    constructor(t, r, n) {
      P(this, 'playerOne');
      P(this, 'npcControll');
      P(this, 'ctx');
      P(this, 'spriteBlood');
      P(this, 'spriteTeleport');
      P(this, 'arrCollision', []);
      P(this, 'npcScreamingAudio');
      P(this, 'x', 0);
      P(this, 'y', 0);
      P(this, 'skinHorizontalFrame', Z.SKIN_HORIZONTAL_FRAME);
      P(
        this,
        'skinTotalNumberOfHorizontalFrames',
        Z.SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES
      );
      P(this, 'skinFirstHorizontalFrame', Z.SKIN_FIRST_HORIZONTAL_FRAME);
      P(this, 'skinVerticalFrame', Z.SKIN_VERTICAL_FRAME);
      P(this, 'inaccuracyOfCharacterSprite', Z.INACCURACY_OF_CHARACTER_SPRITE);
      (this.ctx = t),
        (this.playerOne = r),
        (this.npcControll = n),
        (this.npcScreamingAudio = new Audio(
          '/src/assets/audio/game-npc-friend-screaming.mp3'
        ));
    }
    checkForCollisionsBetweenUserAndNpc() {
      const t = this.playerOne.getPosition();
      this.npcControll.arrNpc.forEach(r => {
        const n = r.getPosition();
        let i = !1,
          o = !1;
        t.x2 - this.inaccuracyOfCharacterSprite >=
          n.x1 - this.inaccuracyOfCharacterSprite &&
          t.x1 - this.inaccuracyOfCharacterSprite <=
            n.x2 - this.inaccuracyOfCharacterSprite &&
          (i = !0),
          t.y2 - this.inaccuracyOfCharacterSprite >=
            n.y1 - this.inaccuracyOfCharacterSprite &&
            t.y1 - this.inaccuracyOfCharacterSprite <=
              n.y2 - this.inaccuracyOfCharacterSprite &&
            (o = !0),
          i &&
            o &&
            (r.collisionHandling(this.playerOne),
            r.type === Ht.Friend
              ? ((this.playerOne.speed =
                  this.playerOne.speed + Z.PLAYER_COLLISION_SPEED_BONUS),
                this.deleteAndRestoreNpc(r),
                this.setColisionImgCoordinats(r, !1))
              : ((r.isMoving = !1),
                (r.hasCollision = !0),
                (r.speed = r.speed + Z.NPC_ENEMY_COLLISION_SPEED_BONUS),
                this.setColisionImgCoordinats(r, !0)));
      }),
        this.npcControll.arrNpc.forEach(r => {
          this.checkForCollisionsBetweenNpc(r);
        });
    }
    checkForCollisionsBetweenNpc(t) {
      this.npcControll.arrNpc.forEach(r => {
        if (t !== r) {
          let n = !1;
          r.x <= t.x + t.width &&
            t.x <= r.x + r.width &&
            r.y <= t.y + t.height &&
            t.y <= r.y + r.height &&
            (n = !0),
            n &&
              ((t.isMoving = !1),
              (r.isMoving = !1),
              this.checkCollisionsBetweenFriendAndEnemyNpc(r, t));
        }
      });
    }
    checkCollisionsBetweenFriendAndEnemyNpc(t, r) {
      (t.type === Ht.Enemy_huggy || t.type === Ht.Enemy_kissy) &&
        r.type === Ht.Friend &&
        ((t.speed = t.speed + Z.NPC_ENEMY_COLLISION_SPEED_BONUS),
        this.setColisionImgCoordinats(r, !0),
        this.deleteAndRestoreNpc(r)),
        t.type === Ht.Friend &&
          r.type === Ht.Friend &&
          (this.setColisionImgCoordinats(r, !1), this.deleteAndRestoreNpc(r));
    }
    deleteAndRestoreNpc(t) {
      this.npcControll.deleteNpc(t), this.npcControll.restoreNpc(t);
    }
    setColisionImgCoordinats(t, r) {
      (this.x = t.x), (this.y = t.y + t.height);
      const n = new Uz(this.ctx, this.x, this.y);
      (n.isCollisionWithEnemy = r),
        r
          ? n.setSprite(this.spriteBlood)
          : ((n.x = t.x + t.width / 2),
            (n.y = t.y - t.height / 2),
            n.setSprite(this.spriteTeleport)),
        this.arrCollision.push(n),
        this.npcScreamingAudio && r && this.npcScreamingAudio.play();
    }
    setSprite(t, r) {
      (this.spriteTeleport = t), (this.spriteBlood = r);
    }
    render() {
      this.arrCollision.forEach((t, r) => {
        t.render(),
          !t.isCollisionWithEnemy &&
            t.skinHorizontalFrame === t.skinTotalNumberOfHorizontalFrames &&
            (this.arrCollision = this.arrCollision.filter((n, i) => i !== r));
      });
    }
  }
  class Bz {
    constructor(t, r, { player: n, npcControll: i, timer: o }) {
      P(this, 'canvas');
      P(this, 'ctx');
      P(this, 'sprites');
      P(this, 'fpsInterval');
      P(this, 'now');
      P(this, 'then');
      P(this, 'elapsed');
      P(this, 'animationRequestId');
      P(this, 'playerOne');
      P(this, 'npcControll');
      P(this, 'clashesController');
      P(this, 'gameOver');
      P(this, 'timer');
      (this.sprites = {}),
        (this.canvas = t),
        (this.canvas.width = t.width),
        (this.canvas.height = t.height),
        (this.ctx = r),
        (this.playerOne = n),
        (this.timer = o),
        (this.npcControll = i),
        (this.gameOver = !1),
        (this.clashesController = new zz(r, n, i));
    }
    setSprite(t) {
      (this.sprites = t),
        this.clashesController.setSprite(
          t[nr.COLLISION_TELEPORT],
          t[nr.COLLISION_BLOOD]
        );
    }
    prepareCanvas() {
      if (this.canvas && this.ctx) {
        const t = this.sprites.back;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
          this.ctx.drawImage(
            t.image,
            0,
            0,
            this.canvas.width,
            this.canvas.height
          );
      }
    }
    renderGameOver(t) {
      this.canvas &&
        this.ctx &&
        (t ? this.renderGameWinScreen() : this.renderGameLoseScreen());
    }
    renderGameWinScreen() {
      this.prepareCanvas(),
        (this.ctx.font = '30px PixelDigivolve'),
        this.ctx.fillText(
          'YOU WIN!',
          this.canvas.width / 2 - 60,
          this.canvas.height / 2
        );
    }
    renderGameLoseScreen() {
      const t = this.sprites.gameOver;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
        t &&
          this.ctx.drawImage(
            t.image,
            0,
            0,
            this.canvas.width,
            this.canvas.height
          );
    }
    update() {
      this.prepareCanvas(),
        this.clashesController.render(),
        this.npcControll.render(),
        this.playerOne.render(),
        this.timer.render();
    }
    startAnimating(t) {
      (this.fpsInterval = 1e3 / t),
        (this.then = Date.now()),
        (this.timer.then = Date.now());
    }
    animate() {
      this.then !== void 0 &&
        this.fpsInterval !== void 0 &&
        ((this.now = Date.now()),
        (this.elapsed = this.now - this.then),
        this.elapsed > this.fpsInterval &&
          ((this.then = this.now - (this.elapsed % this.fpsInterval)),
          this.update(),
          this.clashesController.checkForCollisionsBetweenUserAndNpc()));
    }
    stopCycle(t = !1) {
      this.animationRequestId &&
        (cancelAnimationFrame(this.animationRequestId), (this.gameOver = !0)),
        this.renderGameOver(t);
    }
    startCycle() {
      this.startAnimating(10);
      const t = () => {
        this.animate(),
          this.gameOver || (this.animationRequestId = requestAnimationFrame(t));
      };
      this.animationRequestId = requestAnimationFrame(t);
    }
  }
  class Hz {
    constructor(t, r, n) {
      P(this, 'arrNpc');
      P(this, 'sprites');
      P(this, 'ctx');
      P(this, 'canvasHeight');
      P(this, 'canvasWidth');
      (this.ctx = t),
        (this.arrNpc = Rv.map(i =>
          i.type === Ht.Friend ? new Lv(t, i, r, n) : new Mz(t, i, r, n)
        )),
        (this.canvasHeight = r),
        (this.canvasWidth = n);
    }
    setSprite(t) {
      !t ||
        ((this.sprites = t),
        this.arrNpc.forEach(r => {
          r.type === Ht.Friend
            ? r.setSprite(t[nr.NPC_FRIEND])
            : r.type === Ht.Enemy_huggy
            ? r.setSprite(t[nr.NPC_ENEMY_HUGGY])
            : r.type === Ht.Enemy_kissy && r.setSprite(t[nr.NPC_ENEMY_KISSY]);
        }));
    }
    render() {
      this.arrNpc.forEach(t => t.render());
    }
    deleteNpc(t) {
      this.arrNpc = this.arrNpc.filter(r => r.id !== t.id);
    }
    restoreNpc(t) {
      if (!this.sprites) return;
      const n = Rv.filter(i => i.id === t.id).shift();
      if (n) {
        const i = new Lv(this.ctx, n, this.canvasHeight, this.canvasWidth);
        i.setSprite(this.sprites[nr.NPC_FRIEND]), this.arrNpc.push(i);
      }
    }
  }
  class Vz {
    constructor(t, r, n, { game: i }) {
      P(this, 'ctx');
      P(this, 'canvasHeight');
      P(this, 'canvasWidth');
      P(this, 'gameRoundDuration');
      P(this, 'gameStartMoment');
      P(this, 'gameEndMoment');
      P(this, 'gameTimer');
      P(this, 'game');
      P(this, 'now');
      P(this, 'then');
      P(this, 'elapsedTimer');
      (this.ctx = t),
        (this.canvasHeight = r),
        (this.canvasWidth = n),
        (this.game = i),
        this.initGameTimer();
    }
    initGameTimer() {
      (this.gameRoundDuration = 5 * 60 * 1e3),
        (this.gameStartMoment = new Date()),
        (this.gameEndMoment = new Date(
          this.gameStartMoment.getTime() + this.gameRoundDuration
        )),
        (this.gameTimer =
          (this.gameEndMoment.getTime() - this.gameStartMoment.getTime()) /
          1e3);
    }
    render() {
      (this.ctx.font = '30px PixelDigivolve'),
        (this.ctx.fillStyle = '#fff'),
        this.ctx.fillText(`${this.gameTimer}`, this.canvasWidth / 2, 40),
        this.animate();
    }
    animate() {
      (this.now = Date.now()),
        this.then &&
          ((this.elapsedTimer = this.now - this.then),
          this.gameTimer &&
            this.elapsedTimer &&
            this.elapsedTimer >= 1e3 &&
            ((this.then = this.now - (this.elapsedTimer % 1e3)),
            this.gameTimer--)),
        this.gameEndMoment &&
          new Date() >= this.gameEndMoment &&
          this.game.end(!0);
    }
  }
  class Wz {
    constructor(t) {
      P(this, 'ctx');
      P(this, 'width', 1240);
      P(this, 'height', 600);
      P(this, 'playerOne');
      P(this, 'gameOverBackgroundAudio');
      P(this, 'allSprites');
      P(this, 'sprites');
      P(this, 'npcControll');
      P(this, 'timer');
      P(this, 'view');
      (this.canvas = t),
        (this.ctx = this.canvas.getContext('2d')),
        (this.canvas.width = this.width),
        (this.canvas.height = this.height),
        (this.playerOne = new jz(
          this.ctx,
          this.height,
          this.width,
          this.gameEntities
        )),
        (this.timer = new Vz(
          this.ctx,
          this.height,
          this.width,
          this.gameEntities
        )),
        (this.allSprites = new Iz()),
        (this.npcControll = new Hz(this.ctx, this.height, this.width)),
        (this.view = new Bz(this.canvas, this.ctx, this.gameEntities)),
        (this.sprites = {});
    }
    async init(t) {
      await this.allSprites.prepareSprites(),
        (this.gameOverBackgroundAudio = new Audio(
          '/src/assets/audio/game-over.mp3'
        )),
        (this.sprites = this.allSprites.getSprites()),
        this.start(),
        t();
    }
    prepareObjectGame() {
      this.view.setSprite(this.sprites),
        this.playerOne.setSprite(this.sprites),
        this.npcControll.setSprite(this.sprites);
    }
    get gameEntities() {
      return {
        player: this.playerOne,
        sprites: this.sprites,
        view: this.view,
        npcControll: this.npcControll,
        game: this,
        timer: this.timer,
      };
    }
    destruct() {
      window.removeEventListener('keydown', this.playerOne.keyDownCustom),
        window.removeEventListener('keyup', this.playerOne.keyUpCustom),
        this.view.stopCycle(),
        this.gameOverBackgroundAudio && this.gameOverBackgroundAudio.pause();
    }
    start() {
      this.prepareObjectGame(), this.view.startCycle();
    }
    end(t = !1) {
      this.gameOverBackgroundAudio &&
        ((this.gameOverBackgroundAudio.currentTime = 0),
        this.gameOverBackgroundAudio.play()),
        this.view.stopCycle(t);
    }
  }
  const Kz = e => {
      let t = !1,
        r;
      O.exports.useEffect(
        () => (
          t || (r = e()),
          () => {
            t && r && r(), (t = !0);
          }
        ),
        []
      );
    },
    qz = (e = !1) => {
      const [t, r] = O.exports.useState(e);
      return [
        t,
        () => {
          r(i => !i),
            typeof document !== void 0 &&
            typeof document < 'u' &&
            !document.fullscreenElement
              ? document.documentElement.requestFullscreen()
              : document.exitFullscreen && document.exitFullscreen();
        },
      ];
    },
    Yz = '_block_button_t1dh4_1',
    Gz = { block_button: Yz },
    Xz = () => {
      const { t: e } = xe(),
        t = Rt(),
        r = () => t('/'),
        [n, i] = qz(),
        o = O.exports.useRef(null),
        a = O.exports.useRef(null);
      return (
        Kz(
          () => (
            (a.current = new Wz(o.current)),
            a.current.init(() => {
              console.log(
                '\u0418\u0433\u0440\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430'
              );
            }),
            () => {
              var s;
              (s = a.current) == null || s.destruct();
            }
          )
        ),
        w(de, {
          children: L('div', {
            children: [
              L('div', {
                className: Gz.block_button,
                children: [
                  w(fe, {
                    regular: !0,
                    className: 'button',
                    onClick: r,
                    children: e('goBack'),
                  }),
                  w(fe, {
                    regular: !0,
                    className: 'button',
                    onClick: () => i(),
                    children: n ? '\u256C' : '\u26F6',
                  }),
                ],
              }),
              w('canvas', { id: 'game-canvas', ref: o }),
            ],
          }),
        })
      );
    },
    Qz = '_container_zs9im_1',
    Zz = '_wrapper_zs9im_42',
    jv = { container: Qz, wrapper: Zz },
    Jn = ({ children: e }) =>
      w('div', {
        className: jv.container,
        children: w('div', { className: jv.wrapper, children: e }),
      }),
    Jz = () => w(Jn, { children: w(Xz, {}) }),
    eB = '_block_r5ccd_25',
    tB = { block: eB },
    rB = '_block_topics_9tq7v_25',
    nB = { block_topics: rB },
    iB = '_new_comment_1jdnl_25',
    oB = '_text_1jdnl_30',
    aB = '_input_1jdnl_39',
    sB = '_button_comment_1jdnl_42',
    uB = '_card_1jdnl_52',
    ho = { new_comment: iB, text: oB, input: aB, button_comment: sB, card: uB },
    lB = { comment: '' },
    cB = e => {
      const t = String(e('required'));
      return Bn().shape({ comment: ye().required(t) });
    },
    fB = ({ topicId: e }) => {
      const { t } = xe(),
        { login: r } = Gt(sz),
        n = ua(),
        i = O.exports.useCallback(
          f => {
            n(X6({ id: e, comment: f }));
          },
          [n, e]
        ),
        {
          values: o,
          errors: a,
          touched: s,
          handleChange: u,
          handleSubmit: l,
          handleBlur: d,
        } = da({
          initialValues: lB,
          validationSchema: cB(t),
          onSubmit: f => {
            const c = {
              text: f.comment,
              author: r || '',
              date: V_(new Date()),
              likes: 0,
            };
            i(c);
          },
        });
      return w(de, {
        children: w(cn, {
          className: ho.card,
          children: L('form', {
            className: ho.new_comment,
            onSubmit: l,
            children: [
              L('div', {
                className: ho.text,
                children: [t('newComment'), ': '],
              }),
              w(st, {
                name: 'comment',
                className: ho.input,
                onChange: u,
                onBlur: d,
                value: o.comment,
                showError: Boolean(a.comment) && Boolean(s.comment),
                error: a.comment,
              }),
              w(fe, {
                regular: !0,
                className: ho.button_comment,
                type: 'submit',
                children: t('send'),
              }),
            ],
          }),
        }),
      });
    },
    dB = '_card_x7j31_25',
    pB = '_title_x7j31_34',
    hB = { card: dB, title: pB },
    gB = '/assets/variant3.cde171f3.png';
  var K_ = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    Iv = Pt.createContext && Pt.createContext(K_),
    Jr =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (Jr =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++) {
                t = arguments[r];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }),
          Jr.apply(this, arguments)
        );
      },
    mB =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
          for (
            var i = 0, n = Object.getOwnPropertySymbols(e);
            i < n.length;
            i++
          )
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      };
  function q_(e) {
    return (
      e &&
      e.map(function (t, r) {
        return Pt.createElement(t.tag, Jr({ key: r }, t.attr), q_(t.child));
      })
    );
  }
  function vB(e) {
    return function (t) {
      return w(yB, {
        ...Jr({ attr: Jr({}, e.attr) }, t),
        children: q_(e.child),
      });
    };
  }
  function yB(e) {
    var t = function (r) {
      var n = e.attr,
        i = e.size,
        o = e.title,
        a = mB(e, ['attr', 'size', 'title']),
        s = i || r.size || '1em',
        u;
      return (
        r.className && (u = r.className),
        e.className && (u = (u ? u + ' ' : '') + e.className),
        L('svg', {
          ...Jr(
            { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
            r.attr,
            n,
            a,
            {
              className: u,
              style: Jr(Jr({ color: e.color || r.color }, r.style), e.style),
              height: s,
              width: s,
              xmlns: 'http://www.w3.org/2000/svg',
            }
          ),
          children: [o && w('title', { children: o }), e.children],
        })
      );
    };
    return Iv !== void 0
      ? w(Iv.Consumer, {
          children: function (r) {
            return t(r);
          },
        })
      : t(K_);
  }
  function wB(e) {
    return vB({
      tag: 'svg',
      attr: { viewBox: '0 0 1024 1024' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z',
          },
        },
      ],
    })(e);
  }
  const _B = '_block_author_aqzin_25',
    SB = '_avatar_aqzin_34',
    mc = { block_author: _B, avatar: SB },
    xB = ({ avatar: e, author: t }) =>
      L('div', {
        className: mc.block_author,
        children: [
          w('img', { src: e, className: mc.avatar }),
          w('div', { className: mc.author, children: t }),
        ],
      }),
    bB = '_comments_1lsei_25',
    EB = '_count_1lsei_32',
    Dv = { comments: bB, count: EB },
    OB = ({ date: e, text: t }) =>
      L('div', {
        className: Dv.comments,
        children: [
          w('div', { children: e }),
          w('div', { className: Dv.count, children: t }),
        ],
      }),
    CB = e => {
      const { comment: t } = e;
      return w(de, {
        children: L(cn, {
          className: hB.card,
          children: [
            w(xB, { avatar: gB, author: t.author }),
            w(OB, { text: t.text, date: t.date }),
            w(ed, { title: t.likes, children: w(wB, {}) }),
          ],
        }),
      });
    },
    PB = '_title_48ez9_25',
    $B = '_list_48ez9_37',
    Mv = { title: PB, list: $B },
    kB = O.exports.memo(({ comments: e }) => {
      const { t } = xe();
      return w(de, {
        children: L('div', {
          children: [
            w('div', { className: Mv.title, children: t('comments') }),
            w('div', {
              className: Mv.list,
              children: e.map((r, n) => w(CB, { comment: r }, n)),
            }),
          ],
        }),
      });
    }),
    TB = ({ topic: e }) =>
      w(de, {
        children: L('div', {
          className: nB.block_topics,
          children: [
            w(H_, {
              id: e.id,
              title: e.title,
              description: e.description,
              author: e.author,
              date: e.date,
              comments: e.comments,
              views: e.views,
            }),
            w(kB, { comments: e.comments }),
            w(fB, { topicId: e.id }),
          ],
        }),
      }),
    AB = () => {
      const e = Gt(oz);
      return w(de, {
        children: w('div', {
          className: tB.block,
          children: e && w(TB, { topic: e }),
        }),
      });
    },
    NB = { login: '', password: '' },
    FB = e => {
      const t = String(e('required'));
      return Bn().shape({
        login: ye()
          .required(t)
          .matches(Tp, { message: e('messageValidationLogin') }),
        password: ye()
          .required(t)
          .matches(eu, { message: e('messageValidationPassword') }),
      });
    },
    RB = {
      first_name: '',
      second_name: '',
      phone: '',
      email: '',
      login: '',
      password: '',
      repeatPassword: '',
    },
    LB = e => {
      const t = String(e('required'));
      return Bn().shape({
        first_name: ye()
          .required(t)
          .matches(Fw, { message: e('messageValidationName') }),
        second_name: ye()
          .required(t)
          .matches(Rw, { message: e('messageValidationName') }),
        phone: ye()
          .required(t)
          .matches(Lw, { message: e('messageValidationPhone') }),
        email: ye()
          .required(t)
          .matches(jw, { message: e('messageValidationEmail') }),
        login: ye()
          .required(t)
          .matches(Tp, { message: e('messageValidationLogin') }),
        password: ye()
          .required(t)
          .matches(eu, { message: e('messageValidationPassword') }),
        repeatPassword: ye()
          .oneOf(
            [d_('password'), null],
            String(e('messageValidationRepeatPassword'))
          )
          .required(t),
      });
    },
    jB = () => {
      const { t: e } = xe(),
        t = Gt(U_),
        r = la(n => ls(n));
      return w(de, {
        children: w(kw, {
          initialValues: NB,
          validationSchema: FB(e),
          onSubmit: r,
          buttonsBlock: L('div', {
            className: Se.form_button_box,
            children: [
              w(fe, {
                regular: !0,
                type: 'submit',
                disabled: t,
                children: e('signIn'),
              }),
              w(au, { to: '/auth/reg', children: e('signUp') }),
            ],
          }),
          children: w('div', {
            className: Se.reset_link,
            children: w(au, {
              to: '/resetpassword',
              children: e('resetPassword'),
            }),
          }),
        }),
      });
    },
    IB = () => {
      const { t: e } = xe(),
        t = Gt(U_),
        r = la(n => cs(n));
      return w(de, {
        children: w(kw, {
          initialValues: RB,
          validationSchema: LB(e),
          onSubmit: r,
          buttonsBlock: L('div', {
            className: Se.form_button_box,
            children: [
              w(fe, {
                regular: !0,
                type: 'submit',
                disabled: t,
                children: e('signUp'),
              }),
              w(au, { to: '/auth/', children: e('signIn') }),
            ],
          }),
        }),
      });
    },
    DB = () => {
      const { t: e } = xe(),
        t = Gt(p6);
      return w(de, {
        children: L(cO, {
          children: [
            L(Ce, {
              path: '/auth',
              element: w(hc, {
                flag: !t,
                redirect: '/',
                children: w(Jn, { children: w(B6, {}) }),
              }),
              children: [
                w(Ce, { index: !0, element: w(jB, {}) }),
                w(Ce, { path: 'reg', element: w(IB, {}) }),
              ],
            }),
            w(Ce, {
              path: '/',
              element: w(Jn, { children: t ? w(A6, {}) : w(z6, {}) }),
            }),
            L(Ce, {
              path: '/forum',
              element: w(hc, {
                flag: t,
                redirect: '/auth',
                children: w(Jn, { children: w(N2, {}) }),
              }),
              children: [
                w(Ce, { index: !0, element: w(fz, {}) }),
                w(Ce, { path: 'topic', element: w(AB, {}) }),
                w(Ce, { path: 'createtopic', element: w(bz, {}) }),
              ],
            }),
            w(Ce, {
              path: '/leaders',
              element: w(Jn, { children: w(X2, {}) }),
            }),
            w(Ce, { path: '/loadinggame', element: w(c$, {}) }),
            w(Ce, { path: '/game', element: w(Jz, {}) }),
            L(Ce, {
              path: '/settings',
              element: w(hc, {
                flag: t,
                redirect: '/auth',
                children: w(Jn, { children: w(f$, {}) }),
              }),
              children: [
                w(Ce, { index: !0, element: w(x6, {}) }),
                w(Ce, { path: 'edit', element: w(y6, {}) }),
                w(Ce, { path: 'password', element: w(l6, {}) }),
              ],
            }),
            w(Ce, {
              path: '/500',
              element: w(pm, { title: '500', description: e('error500') }),
            }),
            w(Ce, {
              path: '/404',
              element: w(pm, { title: '404', description: e('error404') }),
            }),
            w(Ce, { path: '*', element: w(J1, { to: '/404' }) }),
          ],
        }),
      });
    },
    MB = e => {
      O.exports.useEffect(e, []);
    },
    UB = e => () => {
      const t = ua();
      return (
        MB(() => {
          t(bi());
        }),
        w(e, {})
      );
    },
    zB = () => L(u1, { children: [w(C2, {}), w(DB, {})] }),
    BB = UB(zB),
    HB = { user: null, loading: !1 },
    VB = Gu({
      name: 'users',
      initialState: HB,
      reducers: {},
      extraReducers: e => {
        e.addCase(If.pending, t => {
          t.loading = !0;
        }),
          e.addCase(If.rejected, t => {
            t.loading = !1;
          }),
          e.addCase(ds.pending, t => {
            t.loading = !0;
          }),
          e.addCase(ds.fulfilled, t => {
            t.loading = !1;
          }),
          e.addCase(ds.rejected, t => {
            t.loading = !1;
          });
      },
    }),
    WB = VB.reducer,
    KB = K1({ auth: O4, error: g2, forum: Y6, users: WB }),
    qB = e => e2({ reducer: KB, preloadedState: e }),
    YB = () => {
      'serviceWorker' in navigator &&
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/sw.ts')
            .then(e => {
              console.log(
                'ServiceWorker registration successful with scope: ',
                e.scope
              );
            })
            .catch(e => {
              console.log('ServiceWorker registration failed: ', e);
            });
        });
    },
    GB = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
  const XB = qB(GB),
    QB = w(di, {
      children: w(Pt.StrictMode, {
        children: w(Pt.Suspense, {
          children: w(gO, {
            children: w(dE, {
              store: XB,
              children: w(HO, {
                i18n: Ye,
                children: w(de, { children: w(BB, {}) }),
              }),
            }),
          }),
        }),
      }),
    });
  yc.createRoot(document.getElementById('root')).render(QB);
  YB();
});
export default ZB();
