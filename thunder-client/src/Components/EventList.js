import React from "react";

function EventList({ events }) {
    return (
        <div className="list">
      <ul>
        {events.map((event) => 
        
         <p key={event.id}>{event.name}</p>)}
      </ul>
    </div>
    )
}

export default EventList;