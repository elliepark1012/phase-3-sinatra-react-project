import React, { useState } from "react";
import AddNewActivity from "./AddNewActivity";

const EachCategory = ({ 
  category,
  handleUpdateSubscribes,
  handleDeleteActivity,
  addActivity
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

    function deletedActivity(id) {
      fetch(`http://localhost:9292/activities/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((r) => r.json())
        .then((data) => handleDeleteActivity(data));
    }

    const eachActivity = category.activities?.map((activity) => (
      <li className="card" key={activity.id}>
          <br></br>
          <br></br> 
          <button className="list-button" onClick={deletedActivity}>Next Time</button>
            <p className="card-text">Participants : {activity.participants}</p>
          <img className="card-image" src={activity.image_url} alt="image" />
            <h1 className="card-name">{activity.name}</h1> 
            <p className="card-text">Location: {activity.location}</p> 
            <p className="card-text">About: {activity.about}</p> 
          <AddNewActivity category={category} addActivity={addActivity}/>
        </li>
    ))

    return (
      <div>
        <h2>{category.name}</h2>
        <button className="button" onClick={updateSubscribes}>
          Subscribes: {category.subscribe}
        </button>
        <button className="button" onClick={showActivity}>
        {displayActivity ? "Hide Activities" : "Show Activities"}
        </button>
        {displayActivity ? <ul>{eachActivity}</ul> : null}
        <AddNewActivity category={category} addActivity={addActivity} />
      </div>
    )
}

export default EachCategory;