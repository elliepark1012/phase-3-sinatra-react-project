import React from "react";
import EventListItem from "./EventListItem";

function EventList({ events }) {
    return (
        <div className="list">
      <ul>
        {events.map((event) => 
        <EventListItem key={event.id} event={event}/>)}
      </ul>
    </div>
    )
}

export default EventList;