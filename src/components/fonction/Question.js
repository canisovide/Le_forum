import React from "react";
function Question(props) {
    return (
        <div>
            <h2> {props.title} </h2>
            <div>
                {props.content}
            </div>
        </div>
    )
}
export default Question;