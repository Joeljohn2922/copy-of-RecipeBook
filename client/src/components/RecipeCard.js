import React,{useState} from "react" 

function RecipeCard({Recipe}){ 
    const{id, title, description, tag, instruction} = Recipe 
    
    const [click, setClick] = useState(true) 

    function handleClick() { 
        setClick(!click) 
      } 
      return (
        <li className="card" data-testid="recipe-item">
          <img src={image} alt={title} />
          <h4>{Recipe.title}</h4>
          
          <p><Link to={`/RecipeDetail/${id}`}>View Description</Link></p>
          <p>Instruction: {instruction}</p>
          <p>Tag: {tag}</p> 
          {click ? (
        <button onClick={handleClick} className="primary"> Like</button>
      ) : (
        <button onClick={handleClick}>DisLike</button>
      )}
        </li>
      );
 

} 

export default RecipeCard; 