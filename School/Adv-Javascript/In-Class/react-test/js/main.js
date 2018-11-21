const domContainer = document.querySelector('.react-container');
// ReactDOM.render(<HelloWorld/>, domContainer);
const App = () => {
    return (
        <div>
            <Friend friendData={friendData[0]}/>
            <Friend friendData={friendData[1]}/>
        </div>
    )
};
const friendData = [
    {
        firstName:"Sume", 
        lastName:"oneulse", 
        email:"someonelse@gmail.com", 
        avatar:"someone.jpg"
    },
    {
        firstName:"Onne", 
        lastName:"Uls", 
        email:"onelse@gmail.com", 
        avatar:"one.jpg"
    }
];

ReactDOM.render(<App/>, domContainer);