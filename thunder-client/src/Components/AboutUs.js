import logowb from "../logowb.png"

function AboutUs() {

    return (
    <div className="aboutus" id="aboutus">
        <img className="aboutus-image" src={logowb} alt="true" />
        <h1 className="aboutus-title"> Stop planning ahead </h1>
        <h2>No need to plan ahead, we update all the event happening at 7pm every day in nyc 
            <br></br>feel free to join, feel free to leave 
            <br></br>
            <br></br><strong>No Pressure, No stress</strong></h2>
        <p className="aboutus-p">
            No.1 Application for the local communities. 
            <br></br>
            <br></br>
            Find hobbies and friends with us and explore a new city!
            <br></br>
            <br></br>
            Thunder is a mobile community flatform service where you can organize and 
            join a variety of meetings depending on your interests. 
            <br></br>
            <br></br>
            You can find work & life balance, and feel the small but real happiness with us.
            We believe that when their are more communities, the world will be happier. 
            <br></br>
            <br></br>
            
        </p>
    </div>
    )
}

export default AboutUs;