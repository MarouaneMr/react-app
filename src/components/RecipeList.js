import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    if (recipes.length === 0) {
        return <div>No recipes found</div>;
    }

    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;