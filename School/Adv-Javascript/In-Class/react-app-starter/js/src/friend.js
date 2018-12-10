import React from 'react';
'use strict';
// use an object literal for embedded styling

const friendStyles = {
    padding: '10px',
    border: '1px solid #ddd'
};

const Friend = (props) => {
    const {friendData} = props;
    return (
        <div style={friendStyles}>
            <img src={friendData.avatar} alt="Friend avatar"/>
            <div>{friendData.firstName + friendData.lastName}</div>
            <div>{friendData.email}</div>
        </div>
    );
};

export default Friend;