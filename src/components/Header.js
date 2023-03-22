import React from 'react';

export default function Header(props) {
    return (
        <div>
            <h1> Rebecca Lawrence</h1>
            {props.children}
        </div>

    )
}

