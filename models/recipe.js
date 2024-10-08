import {readJSON, writeJSON} from "../utils/utils.js";

const recipes = readJSON('./recipes.json');

export class RecipeModel {

    static async getAll({searchTerm}) {
        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            return recipes.filter((recipe) => {
                const isInName = recipe.name.toLowerCase().includes(lowerCaseSearchTerm);
                const isInIngredients = recipe.ingredients.some(ingredient =>
                    ingredient.name.toLowerCase().includes(lowerCaseSearchTerm)
                );
                return isInName || isInIngredients;
            });
        }
        return recipes;
    }

    static async getRecipeById({id}) {
        return recipes.find((recipe) => recipe.id === id);
    }

    static async setRecipeRating({id, rating}) {
        const recipe = recipes.find((recipe) => recipe.id === id);
        if (!recipe) {
            return false;
        }
        recipe.ratings.push(rating);
        const total = recipe.ratings.reduce((sum, r) => sum + r, 0);
        recipe.score = (total / recipe.ratings.length).toFixed(1);
        try {
            await writeJSON('./utils/recipes.json', recipes);
        } catch (error) {
            console.error('Error al guardar los cambios en el archivo JSON:', error);
        }
        return recipe;
    }

    static getRatedRecipes(sortBy = 'desc') {
        const filteredRecipes = recipes.filter(recipe => recipe.score !== null);
        return filteredRecipes.sort((a, b) => {
            if (a.score === b.score) {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'asc') {
                return a.score - b.score;
            } else {
                return b.score - a.score;
            }
        });
    }

}
