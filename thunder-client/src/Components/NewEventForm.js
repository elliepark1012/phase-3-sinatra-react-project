import { useState } from "react"; 
import DateTimePicker from 'react-datetime-picker';

function NewEvent() {
    const [time, setTime] = useState(new Date())
    const [category, setCategory] = useState("Technology")
    const [formData, setFormData] = useState({
        name:"",
        category: category,
        time:time,
        location:"",
        about:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({...formData, [name]:value, }));
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleClick = () => {
        const welcome = "Thank you for becoming our partner"
        alert(welcome)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({...formData}),
        };

        fetch("http://localhost:3000/", configObj)
         .then((resp) => resp.json())
         .then((shop) => {
            // onAddShop(shop);
            setFormData({
                name:"",
                time:time,
                category:category,
                location:"",
                about:""
            });
         });
    };


    return (
        <div>
        <section>
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
                      <label htmlFor="Category">Category</label>
                <select
                    onChange={handleCategory}
                    value={category}
                >
                    <option value="Dancing">Dancing</option>
                    <option value="Yoga & Pilates">Yoga & Pilates</option>
                    <option value="Sports">Sports</option>
                    <option value="Running">Running</option>
                    <option value="Technology">Technology</option>
                    <option value="Socializing">Socializing</option>
                    <option value="Music">Music</option>
                </select>
                <label htmlFor="location">Location</label>
                <input 
                    type="text"
                    id="location"
                    name="location"
                    onChange={handleChange}
                    value={formData.location}
                />
                 <label htmlFor="about">About</label>
                <input 
                    type="text"
                    id="about"
                    name="about"
                    onChange={handleChange}
                    value={formData.about}
                />
                   <DateTimePicker onChange={setTime} value={time} /> 
                <button type="sumbmit" onClick={handleClick}> Become a Partner</button>
        </form>
        </section>
 
        </div>
    )
}

export default NewEvent;
