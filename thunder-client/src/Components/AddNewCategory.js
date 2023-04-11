import { useState } from "react"; 

function AddNewCategory ( { addCategories }) {
    const [newCategory, setNewCategory] = useState({name: ""});

    function handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        setNewCategory({ ...newCategory, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const addNewCategory = {
        name: newCategory.name,
    };

    fetch(`http://localhost:9292/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addNewCategory),
    })
    .then((r) => r.json())
    .then(addCategories);
    setNewCategory({
        name:""
        });
    }
return (
    <div>
        <form className="" onSubmit={handleSubmit}>
         <h4> Add New Categories Here: </h4>
            <input
                type="text"
                placeholder="Category"
                name="name"
                value={newCategory.name}
                onChange={handleChange}
            ></input>
            <input className="button" type="submit" />
        </form>
    </div>
)
}

export default AddNewCategory;