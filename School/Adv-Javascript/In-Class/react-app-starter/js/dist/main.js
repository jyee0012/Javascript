import Friend from "./friend.js";
import FriendList from "./friend-list.js";
import ReactDOM from 'react-dom';
import React from 'react';
import { render } from 'react-dom';
var domContainer = document.querySelector('#react-container');

var App = function App() {
  return React.createElement(FriendList, null);
};

ReactDOM.render(React.createElement(App, null), domContainer);