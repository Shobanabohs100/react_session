"use strict";

import _regeneratorRuntime from "babel-runtime/regenerator";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
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
          return Promise.resolve(value).then(
            function(value) {
              step("next", value);
            },
            function(err) {
              step("throw", err);
            }
          );
        }
      }
      return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var List = (function(_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {}),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  _createClass(List, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.fetchUserData();
      }
    },
    {
      key: "fetchUserData",
      value: (function() {
        var _ref2 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
            var users;
            return _regeneratorRuntime.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return fetch("https://session.free.beeceptor.com/users");

                    case 2:
                      users = _context.sent;

                      debugger;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              },
              _callee,
              this
            );
          })
        );

        function fetchUserData() {
          return _ref2.apply(this, arguments);
        }

        return fetchUserData;
      })()
    },
    {
      key: "render",
      value: function render() {
        React.createElement("div", null, "data");
      }
    }
  ]);

  return List;
})(React.Component);

// const List = () => {
//   let users = [
//     { name: "John", id: "1" },
//     { name: "Windy", id: "2" },
//     { name: "Rachel", id: "3" },
//     { name: "Mark", id: "4" },
//     { name: "Steve", id: "5" },
//     { name: "Lary", id: "6" }
//   ];
//   return (
//     <div className="list">
//       <div className="list_header">Users</div>
//       <div className="list_item">
//         <i className="fa fa-user list_item_icon" aria-hidden="true" />
//         <div className="list_item_name">John</div>
//       </div>
//       <div className="list_item">
//         <i className="fa fa-user list_item_icon" aria-hidden="true" />
//         <div className="list_item_name">Windy</div>
//       </div>
//       <div className="list_item">
//         <i className="fa fa-user list_item_icon" aria-hidden="true" />
//         <div className="list_item_name">Rachel</div>
//       </div>
//       <div className="list_item">
//         <i className="fa fa-user list_item_icon" aria-hidden="true" />
//         <div className="list_item_name">Mark</div>
//       </div>
//       <div className="list_item">
//         <i className="fa fa-user list_item_icon" aria-hidden="true" />
//         <div className="list_item_name">Steve</div>
//       </div>
//       <div className="list_item">
//         <i className="fa fa-user list_item_icon" aria-hidden="true" />
//         <div className="list_item_name">Lary</div>
//       </div>
//     </div>
//   );
// };

var App = function App() {
  return React.createElement(List, null);
};

var domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(App, null), domContainer);
