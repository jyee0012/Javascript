import Friend from "./friend.js";
import FriendList from "./friend-list.js";
const domContainer = document.querySelector('#react-container');

const App = () => {
    return (
        <FriendList/>
    );
};

ReactDOM.render(<App/>, domContainer);