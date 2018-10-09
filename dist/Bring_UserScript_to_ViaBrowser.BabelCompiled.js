
// ==UserScript==
// @name         Bring UserScript to Via Browser
// @namespace    https://www.xmader.com/
// @version      1.0.0-rc.2
// @description  将 UserScript/油猴脚本 带到Via浏览器
// @author       Xmader
// @match        *://greasyfork.org/*
// @match        *://*/*.js
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * Unicode字符串和Base64字符串互相转换, 兼容Node.js和浏览器
   * @author Xmader
   */
  var Base64 =
  /*#__PURE__*/
  function () {
    function Base64() {
      _classCallCheck(this, Base64);
    }

    _createClass(Base64, [{
      key: "encode",
      value: function encode(str) {
        return Base64.toBase64(str);
      }
    }, {
      key: "decode",
      value: function decode(str) {
        return Base64.fromBase64(str);
      }
    }], [{
      key: "toBase64",
      value: function toBase64(str) {
        if (typeof Buffer != "undefined") return Buffer.from(str).toString("base64");else return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
          return String.fromCharCode("0x" + p1);
        }));
      }
    }, {
      key: "fromBase64",
      value: function fromBase64(str) {
        if (typeof Buffer != "undefined") return Buffer.from(str, "base64").toString();else return decodeURIComponent(atob(str).split("").map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
      }
    }]);

    return Base64;
  }();
  var toBase64 = Base64.toBase64;

  /**
   * 获取当前Greasyfork页面的脚本ID  
   * 如果当前页面不是Greasyfork脚本页面, 则返回null
   * @author Xmader
   * @copyright Copyright (c) 2018 Xmader
   */
  var getGreasyforkId = function getGreasyforkId() {
    if (typeof location != "undefined") {
      var greasyfork_id = location.href.match(/greasyfork\.org\/.*scripts\/(\d+)/);
      return greasyfork_id && greasyfork_id[1];
    }
  };

  var ViaScript =
  /*#__PURE__*/
  function () {
    function ViaScript(user_script) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGreasyforkId() || "".concat(new Date().getTime());

      _classCallCheck(this, ViaScript);

      this.header = user_script.split("==UserScript==")[1].split("==/UserScript==")[0];
      this.id = id;
      this.author = this.getHead("author");
      this.name = this.getHead("name");
      this.info = this.getHead("description");
      this.url = this.getHosts().size == 1 ? _toConsumableArray(this.getHosts())[0] : "*";
      this.code = toBase64(this.getCode(user_script));
      delete this.header;
    }

    _createClass(ViaScript, [{
      key: "getHead",
      value: function getHead(head_name) {
        var head = this.header.match("@".concat(head_name, "\\s+(.+)"));
        return head ? head[1] : "";
      }
      /**
       * @returns {String[]} 获取UserScript的所有`@match`和`@include`元属性
       */

    }, {
      key: "getMatches",
      value: function getMatches() {
        var r = /@match\s+(.+)/g;
        var r1 = /@include\s+(.+)/g;
        return (this.header.match(r) || this.header.match(r1) || ["*"]).map(function (x) {
          return x.replace(r, "$1").replace(r1, "$1");
        });
      }
    }, {
      key: "getHosts",
      value: function getHosts() {
        var r = /@match.+:\/\/(.+)\//g;
        var r1 = /@include.+:\/\/(.+)\//g;
        return new Set((this.header.match(r) || this.header.match(r1) || ["*"]).map(function (x) {
          return x.replace(r, "$1").replace(r1, "$1");
        }));
      }
    }, {
      key: "getCode",
      value: function getCode(user_script) {
        return "\n(function () {\n\nvar matches = (['".concat(this.getMatches().join("','"), "']).map(function (x) {\n    return !!location.href.match(x.replace(/\\*/g, \".*\"))\n})\n        \nif(!matches.includes(true)) return;\n\n").concat(user_script.split("==/UserScript==")[1], "\n})();\n        ");
      }
    }, {
      key: "setId",
      value: function setId(id) {
        this.id = id;
        return this;
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this);
      }
    }, {
      key: "toObject",
      value: function toObject() {
        return _objectSpread({}, this);
      }
    }], [{
      key: "from",
      value: function from() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _construct(ViaScript, args);
      }
    }]);

    return ViaScript;
  }();

  var init = function init(user_script) {
    if (!user_script.includes("==UserScript==") || !user_script.includes("==/UserScript==")) {
      return;
    } // console.log(ViaScript.from(user_script).toObject())


    window.via.addon(toBase64(ViaScript.from(user_script).toString()));
  };

  if (getGreasyforkId()) {
    var install_btn = document.querySelector(".install-link");

    if (install_btn) {
      install_btn.onclick =
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var href, user_script;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                href = encodeURI(install_btn.href);
                install_btn.attributes.removeNamedItem("href");
                install_btn.style.cursor = "pointer";
                _context.next = 5;
                return fetch(href);

              case 5:
                _context.next = 7;
                return _context.sent.text();

              case 7:
                user_script = _context.sent;
                init(user_script);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  } else if (typeof location != "undefined" && location.pathname.endsWith(".js")) {
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var user_script;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(location.href);

            case 2:
              _context2.next = 4;
              return _context2.sent.text();

            case 4:
              user_script = _context2.sent;
              init(user_script);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }))();
  }

}());
