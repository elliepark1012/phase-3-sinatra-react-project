import React, { useState } from "react";
import AddNewActivity from "./AddNewActivity";

const EachCategory = ({ 
  category,
  handleUpdateSubscribes,
  handleDeleteActivity,
  addActivity,
  handleUpdateActivity
  }) => {
    const [displayActivity, setDisplayActivity] = useState(false);

    const showActivity = (e) => {
      e.preventDefault();
      setDisplayActivity(!displayActivity);
    };

    function updateSubscribes() {
      const addSubscribes = {
        subscribe: category.subscribe + 1,
      };
  
      fetch(`http://localhost:9292/categories/${category.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addSubscribes),
      })
        .then((response) => response.json())
        .then(handleUpdateSubscribes);
    }

    function deletedActivity(activity) {
      fetch(`http://localhost:9292/activities/${activity.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((r) => r.json())
        .then(() => handleDeleteActivity(activity));
    }

    function updatedActivity(activity) {
      const addParticipants = {
        participants: activity.participants + 1,
      };
      fetch(`http://localhost:9292/activities/${activity.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" 
        },
        body: JSON.stringify(addParticipants), 
        })
        .then((r) => r.json())
        .then(handleUpdateActivity);
    }

    const eachActivity = category.activities?.map((activity) => (
          <li className="card" key={activity.id}>
           <img className="card-image" src={activity.image_url} alt="image" />
            <h1 className="card-name">{activity.name}</h1> 
            <p className="card-text">Participants : {activity.participants}</p>
            <p className="card-text">Location: {activity.location}</p> 
            <p className="card-text">About: {activity.about}</p> 
            <button className="list-button" onClick={() => updatedActivity(activity.id)}>I want to join!</button>
            <button className="list-button" onClick={() => deletedActivity(activity)}>I'm Not Interested</button>
          </li>
    ))

    return (
      <div>
      <h2 className="category_name">{category.name}</h2>
      <button className="category_button" onClick={updateSubscribes}>
          Subscribes: 
          {category.subscribe}
        </button>
      
        <button className="category_button" onClick={showActivity}>
        {displayActivity ? "Hide Events" : `Show Events`}
        </button>

        {displayActivity ? 
          <div>
          
          <ul>{eachActivity}</ul> 
          <AddNewActivity category={category} addActivity={addActivity}/>
          </div>
          : null}
      </div>
    )
}

export default EachCategory;