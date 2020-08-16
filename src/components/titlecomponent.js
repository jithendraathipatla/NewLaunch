import React from 'react';

const Title = (props) => {
    return (
        <div className="main_title">
            {props.title}
            <span class="underLine"></span>
        </div>
    );
};

export default Title