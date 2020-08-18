import React from "react";

const EditExpensePage = (props) => {
    return (
        <div>
            Editing ID {props.match.params.id}
        </div>
    )
};

export default EditExpensePage;
