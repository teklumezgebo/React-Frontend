import React from "react";

function Patient({ id, firstName, lastName, hypertension, diabetes, onDelete, onClick }) {
    return (
        <div>
            <h4 onClick={() => onClick(firstName, lastName, hypertension, diabetes)}>{firstName} {lastName}</h4>
            <p>{hypertension ? "Hypertensive" : null}</p>
            <p>{diabetes ? "Diabetic" : null}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Patient