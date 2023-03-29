import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewEventForm from "./NewEventForm";
import EventList from "./EventList"
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";

function App() {
    const [activities, setActivities] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      fetch("http://localhost:9292/events")
        .then((r) => r.json())
        .then((activities) => setActivities(activities));
    }, []);

    function handleAddActivity(newActivities) {
      setActivities([...activities, newActivities]);
    }

    function handleDeleteActivity(id) {
      const updatedActivities = activities.filter((activity) => activity.id !== id);
      setActivities(updatedActivities)
    }

    function handleUpdateActivity(updateActivityObj) {
      const updateActivities = activities.map((activity) => {
        if (activity.id === updateActivityObj.id) {
          return updateActivities;
        } else {
          return activity
        }
      });
      setActivities(updateActivities)
    }
    const displayedActivities = activities.filter((activity) =>
    activity.name.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
   <div className="wrapper">
      <NavBar />
      <div className="main">
      <Header />
      <EventList
         search={search} 
         onSearchChange={setSearch}
         activities={displayedActivities}
         onActivityDelete={handleDeleteActivity}
         onActivityUpdate={handleUpdateActivity}
         />
      <NewEventForm
        onAddActivity={handleAddActivity}
      />
      <AboutUs />
      </div>
    </div>
  )
}

export default App;
