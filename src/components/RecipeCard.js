import React from 'react';
import avocadoToastImage from '../images/Good_Food_Display_-_NCI_Visuals_Online-2.jpg'; // Import the image

const RecipeCard = ({ recipe }) => {
    // Construct image URL based on the filename
    const imageUrl = `/images/${recipe.imageFilename}`;

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
            <h3>{recipe.name}</h3>
            {/* Use the imported image variable */}
            <img src={avocadoToastImage} alt={recipe.name} style={{ width: '200px', marginBottom: '10px' }} /> {/* Adjust the width here */}
            <div>Time to cook: {recipe.time} minutes</div>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeCard;
