import React from 'react';

const User = ({user}) => {
    const {id, username, created, group:{name}} = user
    return (
        <div>
            <p>{id}</p>
            <p>{username}</p>
            <p>{created}</p>
            <p>group: {name}</p>
        </div>
    );
};

export {
    User
};