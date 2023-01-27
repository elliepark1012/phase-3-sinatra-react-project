function EventListItem({ event }) {
    const { name, location, about, time, image_url } = event

    const options = { weekday: "long" };
    const timeConverted = new Date(time)
    const eventTimeDate = timeConverted.getDate()
    const eventTimeDay = Intl.DateTimeFormat("en-US", options).format(timeConverted);
    const eventTimeHour = timeConverted.getHours()
    return (
        <li className="card">
          <img className="card-image" src={image_url} alt="image" />
            <h1 className="card-name">{name}</h1>
            <p className="card-text">Time<br></br>{eventTimeDate}th {eventTimeDay} {eventTimeHour}h</p>  
            <p className="card-text">Location<br></br>{location}</p> 
            <p className="card-text">About<br></br>{about}</p> 
        </li>
    )
}

export default EventListItem