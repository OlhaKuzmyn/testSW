import React from 'react';

const Group = ({group}) => {
    const {id, name, description} = group;
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
};

export {
    Group
};