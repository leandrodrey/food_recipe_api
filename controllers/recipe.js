import {RecipeModel} from "../models/recipe.js";

export class RecipeController {

    static async getAll(req, res) {
        try {
            const searchTerm = req.params.searchTerm;
            const recipes = await RecipeModel.getAll({searchTerm});
            res.json(recipes);
        } catch (error) {
            console.error('Error al obtener las recetas:', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
    }

    static async setRecipeRating(req, res) {
        try {
            const id = req.params.id;
            const rating = req.body.rating;
            if (!rating || rating < 1 || rating > 5) {
                return res.status(400).json({error: 'La calificación debe ser un número entre 1 y 5'});
            }
            const updatedRecipe = await RecipeModel.setRecipeRating({id, rating});
            if (!updatedRecipe) {
                return res.status(404).json({error: 'Receta no encontrada'});
            }
            res.json(updatedRecipe);
        } catch (error) {
            console.error('Error al calificar la receta:', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
    }

    static async ratedRecipes(req, res) {
        try {
            const sortBy = req.params.sortBy;
            const recipes = await RecipeModel.ratedRecipes(sortBy);
            res.json(recipes);
        } catch (error) {
            console.error('Error al obtener las recetas:', error);
            res.status(500).json({error: 'Error interno del servidor'});
        }
    }

}
