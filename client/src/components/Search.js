import React from "react" 


function Search({searchRecipe,setSearchRecipe}) { 

    // handle the searched recipes
     const handleChange = (e) => { 
        setSearchRecipe(e.target.value)
     }


    return (
        <form className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Search..." 
                value = {searchRecipe} 
                onChange = {handleChange} 
            />
        </form>
    )
} 

export default Search;

