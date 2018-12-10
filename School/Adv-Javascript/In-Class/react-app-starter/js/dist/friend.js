'use strict'; // use an object literal for embedded styling

var friendStyles = {
  padding: '10px',
  border: '1px solid #ddd'
};

var Friend = function Friend(props) {
  var friendData = props.friendData;
  return React.createElement("div", {
    style: friendStyles
  }, React.createElement("img", {
    src: friendData.avatar,
    alt: "Friend avatar"
  }), React.createElement("div", null, friendData.firstName + friendData.lastName), React.createElement("div", null, friendData.email));
};

export default Friend;