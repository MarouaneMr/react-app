import React from 'react';


const RecipeCard = ({ recipe }) => {
    // This component doesn't need to use hooks or state, as it's purely presentational.
    // However, you could include hooks here if you needed to manage state or lifecycle events.

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
            <h3>{recipe.name}</h3>
            <div>Time to cook: {recipe.time} minutes</div>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeCard;