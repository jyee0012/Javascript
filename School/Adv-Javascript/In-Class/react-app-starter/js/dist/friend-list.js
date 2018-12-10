function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import Friend from "./friend.js";
'use strict'; // use an object literal for embedded styling


var friendListStyles = {
  padding: '0',
  border: '1px solid #ddd',
  listStyle: 'none'
};

var FriendList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FriendList, _React$Component);

  function FriendList(props) {
    var _this;

    _classCallCheck(this, FriendList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FriendList).call(this, props));
    _this.state = {
      friends: []
    };
    return _this;
  }

  _createClass(FriendList, [{
    key: "fetchFriends",
    value: function fetchFriends() {
      var _this2 = this;

      fetch('data/friends.json').then(function (response) {
        return response.json();
      }).then(function (friendsData) {
        _this2.setState({
          friends: friendsData
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFriends();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("ul", {
        style: friendListStyles
      }, this.state.friends.map(function (friend) {
        return React.createElement("li", {
          key: friend.email
        }, React.createElement(Friend, {
          friendData: friend
        }));
      }));
    }
  }]);

  return FriendList;
}(React.Component);

;
export default FriendList;