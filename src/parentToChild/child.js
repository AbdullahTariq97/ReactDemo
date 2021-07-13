import React from 'react';

const child = (props) => {
    return(
        <div>
            <h3>The lights are: {props.status}</h3>
            <button onClick={props.changeStatus} >Click Here</button>
        </div>

    )

}

export default child;