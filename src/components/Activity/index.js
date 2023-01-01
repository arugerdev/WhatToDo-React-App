import React from "react";
import "./Activity.css"

export default function Activity({ activity }) {
    return (
        <div className="all-activity-data">

            <h1 className="todo-activity">{activity.activity}</h1>
            <h2 className="todo-details">Type: {activity.type}</h2>
            <h2 className="todo-details">Price: {activity.price}</h2>
            <h2 className="todo-details">Participants: {activity.participants}</h2>
            <h2 className="todo-details">Accessibility: {activity.accessibility}</h2>

            {(activity.link !== '') &&
                <div className="link-parent">
                    <h2 className="todo-details">Link:</h2>
                    <a href={activity.link} rel='noreferrer' target='_blank'>{activity.link}</a>
                </div>
            }
        </div>
    )
}