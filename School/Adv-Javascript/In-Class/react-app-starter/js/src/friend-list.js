import Friend from "./friend.js";
'use strict';
// use an object literal for embedded styling
const friendListStyles = {
    padding: '0',
    border: '1px solid #ddd',
    listStyle: 'none'
};

class FriendList extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {friends: []};  
    }

    fetchFriends() {
        fetch('data/friends.json')
        .then(response => {
            return response.json();
        })
        .then(friendsData => {
            this.setState({friends: friendsData});
        });
    }

    componentDidMount() {
        this.fetchFriends();
    }

    render() {
        return (
            <ul style={friendListStyles}>
                {this.state.friends.map(friend => 
                    <li key={friend.email}><Friend friendData={friend}/></li>
                )}
            </ul>
        );
    }
};

export default FriendList;