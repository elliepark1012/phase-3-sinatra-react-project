import React from "react";
import EventListItem from "./EventListItem";

function EventList({ events, search, onSearchChange }) {
    return (
        <div className="events">
        <div className="search__container">
            <h3 className="search__title">Which event you want to join?</h3>
            <input className="search__input"
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
              value={search}
              onChange={e => onSearchChange(e.target.value)}
            />
          </div>
        <div className="grid-eventlists">
              {events.map((event) => 
              <EventListItem key={event.id} event={event}/>)}
        </div>
    </div>
    )
}

export default EventList;