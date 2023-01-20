function EventListItem({ event }) {
    const { name, location, about, time } = event
    return (
      <div className="lists">
          {/* <p>{name}</p> */}
          {/* <li>{location}</li>
          <li>{about}</li>
          <li>{time}</li> */}      
      </div>
    )
}

export default EventListItem