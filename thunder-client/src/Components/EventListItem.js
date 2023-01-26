function EventListItem({ event }) {
    const { name, location, about, time, image_url } = event
    return (
      <div className="grid-item">
          <div className="card">
          <img className="card-img" src={image_url} />
          <div className="card-content">
            <h1 className="card-header">{name}</h1>
            <p className="card-text">{about}</p>
            <p className="card-text">{time}</p>  
            <p className="card-text">{location}</p> 
            </div>     
          </div>
      </div>
    )
}

export default EventListItem