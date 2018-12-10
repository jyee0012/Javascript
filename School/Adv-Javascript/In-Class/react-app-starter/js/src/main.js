import Friend from "./friend.js";
import FriendList from "./friend-list.js";
import React from 'react';
import ReactDOM from 'react-dom';
import { render} from 'react-dom';
const domContainer = document.querySelector('#react-container');


const App = () => {
    return (
        <FriendList/>
    );
};

ReactDOM.render(<App/>, domContainer);