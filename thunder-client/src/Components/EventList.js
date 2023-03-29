import React from "react";
import EventListItem from "./EventListItem";

function EventList(
  { activities, 
    search, 
    onSearchChange, 
    onActivityDelete, 
    onActivityUpdate }) {
 
    const eventListItems = activities.map((activity) => {
      return (
        <EventListItem 
          key={activity.id}
          activity={activity}
          onActivityDelete={onActivityDelete}
          onActivityUpdate={onActivityUpdate}
        />
      )
    })
    return (
        <div className="events" id="allevents">
        <div className="search__container">
            <h3 className="search__title">What's Going On Tonight?</h3>
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