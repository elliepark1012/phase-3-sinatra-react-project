import { useState } from "react";

function EventListItem({ activity, onActivityDelete, onActivityUpdate }) {

    const { name, location, about, image_url, participants, id } = activity

    function handleUpdate() {
      fetch(`http://localhost:9292/events/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participants: participants + 1
        }),
      })
      .then((r) => r.json())
      .then((updateActivity) => onActivityUpdate(updateActivity)); 
    }

    function handleDeleteClick() {
      fetch(`http://localhost:9292/events/${id}`, {
        method: "DELETE",
      });

      onActivityDelete(id);
    }

    return (
        <li className="card">
          <br></br>
          <br></br>
          <button className="list-button" onClick={handleUpdate}>Join</button>  
          <button className="list-button" onClick={handleDeleteClick}>Next Time</button>
            <p className="card-text">Participants : {participants}</p>
          <img className="card-image" src={image_url} alt="image" />
            <h1 className="card-name">{name}</h1> 
            <p className="card-text">Location: {location}</p> 
            <p className="card-text">About: {about}</p> 
        </li>
    )
}

export default EventListItem