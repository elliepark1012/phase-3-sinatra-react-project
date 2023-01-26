import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewEvent from "./NewEventForm";
import EventList from "./EventList"
import NavBar from "./NavBar";

function App() {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      fetch("http://localhost:9292/events")
        .then((r) => r.json())
        .then((events) => setEvents(events));
    }, []);

    const displayedEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
   <div className="wrapper">
      <NavBar />
      <Header />
      <EventList
         search={search} 
         onSearchChange={setSearch}
         events={displayedEvents}
         />
      <NewEvent />
    </div>
  )
}

export default App;
