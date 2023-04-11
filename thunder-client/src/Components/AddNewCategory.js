import { useState } from "react"; 

function AddNewCategory ( { addCategories }) {
    const [newCategory, setNewCategory] = useState({
        name: "",
        subscribe: 0
    });

    function handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        setNewCategory({ ...newCategory, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const addNewCategory = {
        name: newCategory.name,
        subscribe: 0,
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
        name:"",
        subscribe: 0,
        });
    }
return (
    <div className="field">
        <form className="category_form" onSubmit={handleSubmit}>
         <h4 className="cf_title"> Add New Categories Here: </h4>
            <input
                className="cf_input"
                type="text"
                placeholder="New Category"
                name="name"
                value={newCategory.name}
                onChange={handleChange}
            ></input>
            <input className="cf_button" type="submit" />
        </form>
    </div>
)
}

export default AddNewCategory;