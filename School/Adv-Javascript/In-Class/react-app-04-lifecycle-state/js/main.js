const domContainer = document.querySelector('#react-container');

const App = () => {
    return (
        <FriendList/>
    );
};

ReactDOM.render(<App/>, domContainer);