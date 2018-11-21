'use strict';

// Most the basic Reac component
// const HelloWorld = () => {
//     return ( 
//         <div>
//         <p>Hello, World </p> 
//         </div>
//       )
// }

// const greetingStyle = {
//     color: 'blue'
// }
const friendStyle = {

}
const friendListStyle = {
    
}
// Passing simple props to the component
// const Greeting = (props) => {
//     return <div style={greetingStyle}>Hello {props.name}</div>
// }
const Friend = (props) => {
    const {friendData} = props;
    return (
        <div style={friendStyle}>
            <img src={friendData.avatar}/>
            <div>{friendData.firstName} {friendData.lastName}</div>
            <div>{friendData.email}</div>
        </div>
    );
}

// const App = () => {
//     return (
//         <div>
//             <Greeting name="Sume onelse"/>
//             <Greeting name="Sam Sumone"/>
//         </div>
//     );
// }