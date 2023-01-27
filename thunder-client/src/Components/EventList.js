import React from "react";
import EventListItem from "./EventListItem";

function EventList({ events, search, onSearchChange }) {

    const eventListItems = events.map((event) => {
      return (
        <EventListItem 
          key={event.id}
          event={event}
        />
      )
    })
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
          <ul className="cards">{eventListItems}</ul>
    </div>
    )
}

export default EventList;