import { useState } from "react"; 

function AddNewActivity ( {category , addActivity} ) {
    const [newActivity, setNewActivity] = useState({
        name:"",
        category_id: category.id,
        location:"",
        about:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewActivity({...newActivity, [name]:value, });
    }

    const handleClick = () => {
        const welcome = "Thank you for adding a new event!"
        alert(welcome)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // const addNewActivity = {
        //     name: newActivity.name,
        //     category_id: newActivity.category_id,
        //     location: newActivity.location,
        //     about: newActivity.about
        // }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newActivity),
        };

        fetch(`http://localhost:9292/categories/${category.id}/activities`, configObj)
         .then((r) => r.json())
         .then((data) => addActivity(data));
            setNewActivity({
                name:"",
                category_id: newActivity.category_id,
                location:"",
                about:""
            });
    };

    return (
        <div className="container">
            <h1 className="form-title"> Create an Event </h1>
            <form className="activity_form"
                autoComplete="off" 
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input 
                    className="form_input"
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={newActivity.name}
                />
                
                <label htmlFor="location">Location</label>
                <input 
                    className="form_input"
                    type="text"
                    id="location"
                    name="location"
                    onChange={handleChange}
                    value={newActivity.location}
                />
                 <label htmlFor="about">About</label>
                <input 
                    className="form_input"
                    type="text"
                    id="about"
                    name="about"
                    onChange={handleChange}
                    value={newActivity.about}
                />
                <br></br> 
                <button className="form-button" type="sumbmit" onClick={handleClick}> Add New Event</button>
        </form>
    </div>
    )
}

export default AddNewActivity;
