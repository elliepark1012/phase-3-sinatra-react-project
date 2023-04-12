import React, { useState } from "react";
import AddNewActivity from "./AddNewActivity";
import EachActivity from "./EachActivity"

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
      // const addSubscribes = {
      //   subscribe: category.subscribe + 1,
      // };
  
      fetch(`http://localhost:9292/categories/${category.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscribe: category.subscribe + 1,
        }),
      })
        .then((response) => response.json())
        .then(handleUpdateSubscribes);
    }

    const eachActivity = category.activities?.map((activity) => (
          <li className="card" key={activity.id}>
           <img className="card-image" src={activity.image_url} alt="image" />
            <h1 className="card-name">{activity.name}</h1> 
            <p className="card-text">Participants : {activity.participants}</p>
            <p className="card-text">Location: {activity.location}</p> 
            <p className="card-text">About: {activity.about}</p> 
            <EachActivity   
                handleDeleteActivity={handleDeleteActivity}
                handleUpdateActivity={handleUpdateActivity}
                activity={activity}
                />
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
          <ul>{eachActivity}  </ul> 
          <AddNewActivity category={category} addActivity={addActivity}/>
          </div>
          : null}
      </div>
    )
}

export default EachCategory;