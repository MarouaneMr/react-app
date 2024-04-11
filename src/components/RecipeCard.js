import React from 'react';

const RecipeCard = ({ recipe }) => {
    const imageUrl = `/images/${recipe.imageFilename}`; // Construct image URL based on the filename
    //const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg';
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
            <h3>{recipe.name}</h3>
            <img src={imageUrl} alt={recipe.name} style={{ width: '100%', marginBottom: '10px' }} />
            <div>Time to cook: {recipe.time} minutes</div>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeCard;
