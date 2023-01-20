import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewEvent from "./NewEventForm";
import Search from "./Search";
import EventList from "./EventList"

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
   <div>
      <Header />
      {/* <NewEvent />
      <Search search={search} onSearchChange={setSearch} />
      <EventList events={displayedEvents}/> */}
    </div>
  )
}

export default App;
