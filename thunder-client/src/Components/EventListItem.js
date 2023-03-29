import { useState } from "react";

function EventListItem({ event, onEventDelete, onUpdateEvent }) {
    const { name, location, about, image_url, participants } = event
    const { newParticipants, setNewParticipants} = useState(participants)

    function onUpdateNumbers(e){
      e.preventDefault()
      setNewParticipants(participants+1)
    }

    function handleUpdate(id) {
      onUpdateNumbers()
      fetch(`http://localhost:4000/event/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participants:newParticipants,
        }),
      })
      .then((r) => r.json())
      .then((updateEvent) => onUpdateEvent(updateEvent)); 
    }

    function handleDeleteClick(id) {
      fetch(`http://localhost:4000/events/${id}`, {
        method: "DELETE",
      });

      onEventDelete(id);
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