import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getRecipes = async () => {
    const recipesCol = collection(firestore, 'recipes');
    const snapshot = await getDocs(recipesCol);
    return snapshot.docs.map(doc => {
        const data = doc.data();
        // Adjust the following line if the instructions are nested within another object
        return { id: doc.id, ...data };
    });
};